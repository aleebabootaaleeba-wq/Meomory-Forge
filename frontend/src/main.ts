import "./style.css";

import { Sidebar } from "./components/sidebar";
import { Navbar } from "./components/navbar";
import { Overview } from "./components/overview";
import { Workflow } from "./components/workflow";
import { CloudStatus } from "./components/cloud";
import { Analytics } from "./components/analytics";
import { Console } from "./components/console";
import { Footer } from "./components/footer";
import { getServerStatus } from "./services/api";
import { AddAgent } from "./components/addAgent";
import { EditAgent } from "./components/editAgent";
import {
    getAgents,
    addAgent,
    deleteAgent,
    updateAgent
} from "./services/agents";
import { Memory } from "./components/memory";
import { AddMemory } from "./components/addMemory";
import { EditMemory } from "./components/editMemory";
import {
    getMemories,
    addMemory,
    deleteMemory,
    updateMemory
} from "./services/memory";
const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
<div class="container">

    ${Sidebar()}

    <main class="content">

        ${Navbar()}

        ${AddAgent()}

        ${Overview()}

        ${Memory()}

        ${Workflow()}

        ${CloudStatus()}

        ${Analytics()}

        ${Console()}

        ${Footer()}

        ${EditAgent()}

        ${AddMemory()}

        ${EditMemory()}

    </main>

</div>
`;
getAgents()
    .then((result) => {

        const container = document.getElementById("agents-container");

        if (!container) return;

        container.innerHTML = "";

        const agentSelect = document.getElementById("memory-agent") as HTMLSelectElement;

        if (agentSelect) {

            agentSelect.innerHTML = `
                <option value="">Select Agent</option>
            `;

        }

        result.data.forEach((agent: any) => {

            container.innerHTML += `
                <div class="card">

                    <h3>🤖 ${agent.name}</h3>

                    <p><strong>Role:</strong> ${agent.role}</p>

                    <p>
                        <strong>Status:</strong>
                        <span class="online">${agent.status}</span>
                    </p>

                    <div class="card-buttons">

                        <button
                            class="edit-agent"
                            data-id="${agent.id}"
                            data-name="${agent.name}"
                            data-role="${agent.role}"
                            data-status="${agent.status}">
                            ✏️ Edit
                        </button>

                        <button
                            class="delete-agent"
                            data-id="${agent.id}">
                            🗑 Delete
                        </button>

                    </div>

                </div>
            `;

            if (agentSelect) {

                agentSelect.innerHTML += `
                    <option value="${agent.name}">
                        ${agent.name}
                    </option>
                `;

            }

        });

    })
    .catch((err) => {

        console.error(err);

        const container = document.getElementById("agents-container");

        if (container) {

            container.innerHTML = "<p>❌ Unable to load agents.</p>";

        }

    });
// 👇 ADD THE MEMORY CODE HERE

getMemories()

.then((result) => {

    const container = document.getElementById("memory-container");

    if (!container) return;

    container.innerHTML = "";

    result.data.forEach((memory: any) => {

        container.innerHTML += `

        <div class="memory-card">

    <h3>🧠 ${memory.title}</h3>

    <p>${memory.content}</p>

    <small>🤖 ${memory.agent_name}</small>

    <div class="memory-buttons">

        <button
            class="edit-memory"
            data-id="${memory.id}"
            data-title="${memory.title}"
            data-content="${memory.content}"
            data-agent="${memory.agent_name}">
            ✏️ Edit
        </button>

        <button
            class="delete-memory"
            data-id="${memory.id}">
            🗑 Delete
        </button>

    </div>

</div>

        `;

    });

})

.catch((err) => {

    console.error(err);

});

getServerStatus().then((data) => {
    console.log("Backend Connected:", data);

    const statusElement = document.createElement("div");

    statusElement.style.position = "fixed";
    statusElement.style.bottom = "20px";
    statusElement.style.right = "20px";
    statusElement.style.background = "#22c55e";
    statusElement.style.color = "white";
    statusElement.style.padding = "10px 20px";
    statusElement.style.borderRadius = "10px";
    statusElement.style.fontWeight = "bold";
    statusElement.style.boxShadow = "0 0 20px rgba(0,0,0,.3)";

    statusElement.innerHTML = `🟢 Backend: ${data.status}`;

    document.body.appendChild(statusElement);
});
document.addEventListener("click", async (event) => {

    const target = event.target as HTMLElement;


    // ===========================
    // EDIT AGENT
    // ===========================

    if (target.classList.contains("edit-agent")) {

        const modal = document.getElementById("edit-modal") as HTMLDivElement;

        const id = target.getAttribute("data-id");

        const card = target.closest(".card");

        const name =
            card?.querySelector("h3")?.textContent
                ?.replace("🤖 ", "")
                .trim() || "";

        const role =
            card?.querySelectorAll("p")[0]?.textContent
                ?.replace("Role:", "")
                .trim() || "";

        const status =
            card?.querySelector(".online")?.textContent?.trim() || "";

        (document.getElementById("edit-id") as HTMLInputElement).value =
            id || "";

        (document.getElementById("edit-name") as HTMLInputElement).value =
            name;

        (document.getElementById("edit-role") as HTMLInputElement).value =
            role;

        (document.getElementById("edit-status") as HTMLSelectElement).value =
            status;

        modal.style.display = "flex";

        return;
    }


    // ===========================
    // DELETE AGENT
    // ===========================

    if (target.classList.contains("delete-agent")) {

        const id = target.getAttribute("data-id");

        if (!id) {

            alert("Invalid Agent ID");

            return;
        }

        const confirmDelete = confirm("Delete this agent?");

        if (!confirmDelete) return;

        try {

            const result = await deleteAgent(id);

            if (result.success) {

                alert("✅ Agent Deleted Successfully!");

                location.reload();

            }

        } catch (error) {

            console.error(error);

            alert("❌ Unable to delete agent.");

        }

        return;
    }
// ===========================
// EDIT MEMORY
// ===========================

if (target.classList.contains("edit-memory")) {

    const modal = document.getElementById("edit-memory-modal") as HTMLDivElement;

    const id = target.getAttribute("data-id") || "";
    const title = target.getAttribute("data-title") || "";
    const content = target.getAttribute("data-content") || "";
    const agent = target.getAttribute("data-agent") || "";

    // Fill ID
    const idInput = document.getElementById("edit-memory-id") as HTMLInputElement;
    idInput.value = id;

    // Fill Title
    const titleInput = document.getElementById("edit-memory-title") as HTMLInputElement;
    titleInput.value = title;

    // Fill Content
    const contentInput = document.getElementById("edit-memory-content") as HTMLTextAreaElement;
    contentInput.value = content;

    // Copy agents into edit dropdown
    const agentSelect = document.getElementById("memory-agent") as HTMLSelectElement;
    const editAgentSelect = document.getElementById("edit-memory-agent") as HTMLSelectElement;

    if (agentSelect && editAgentSelect) {
        editAgentSelect.innerHTML = agentSelect.innerHTML;
        editAgentSelect.value = agent;
    }

    // Open Edit Memory modal
    modal.style.display = "flex";

    return;
}
  // ===========================
// DELETE MEMORY
// ===========================

if (target.classList.contains("delete-memory")) {

    const id = target.getAttribute("data-id");

    if (!id) {
        alert("Invalid Memory ID");
        return;
    }

    const confirmDelete = confirm("Delete this memory?");

    if (!confirmDelete) return;

    try {

        const result = await deleteMemory(id);

        if (result.success) {

            alert("🗑 Memory Deleted Successfully!");

            location.reload();

        } else {

            alert("❌ Unable to delete memory.");

        }

    } catch (error) {

        console.error(error);

        alert("❌ Unable to delete memory.");

    }

    return;
}
});  
/* ===========================
   Close Edit Modal
=========================== */

document
    .getElementById("cancel-edit")
    ?.addEventListener("click", () => {

        const modal = document.getElementById("edit-modal") as HTMLDivElement;

        modal.style.display = "none";

    });
 /* ===========================
   Save Edited Agent
=========================== */

document
    .getElementById("save-edit")
    ?.addEventListener("click", async () => {

        console.log("Save Edit button clicked");

        const id = (document.getElementById("edit-id") as HTMLInputElement).value;

        const name = (document.getElementById("edit-name") as HTMLInputElement).value;

        const role = (document.getElementById("edit-role") as HTMLInputElement).value;

        const status = (document.getElementById("edit-status") as HTMLSelectElement).value;

        try {

            const result = await updateAgent(
                id,
                name,
                role,
                status
            );

            if (result.success) {

                alert("✅ Agent Updated Successfully!");

                const modal = document.getElementById("edit-modal") as HTMLDivElement;

                modal.style.display = "none";

                location.reload();

            }

        } catch (error) {

            console.error(error);

            alert("❌ Unable to update agent.");

        }

    }); 
  document
.getElementById("add-memory-btn")
?.addEventListener("click",()=>{
    
    const modal=document.getElementById("memory-modal") as HTMLDivElement;

    modal.style.display="flex";

});
document
.getElementById("cancel-memory")
?.addEventListener("click",()=>{

    const modal=document.getElementById("memory-modal") as HTMLDivElement;

    modal.style.display="none";

});
document
.getElementById("save-memory")
?.addEventListener("click", async () => {

    const title = (
        document.getElementById("memory-title") as HTMLInputElement
    ).value;

    const content = (
        document.getElementById("memory-content") as HTMLTextAreaElement
    ).value;

    const agent = (
        document.getElementById("memory-agent") as HTMLSelectElement
    ).value;

    if (!title || !content || !agent) {

        alert("Please fill all fields.");

        return;

    }

    try {

        const result = await addMemory(

            title,

            content,

            agent

        );

        if (result.success) {

            alert("🧠 Memory Saved Successfully!");

            location.reload();

        }

    } catch (error) {

        console.error(error);

        alert("Unable to save memory.");

    }

});
// ===========================
// CANCEL EDIT MEMORY
// ===========================

document
    .getElementById("cancel-edit-memory")
    ?.addEventListener("click", () => {

        const modal = document.getElementById("edit-memory-modal") as HTMLDivElement;

        modal.style.display = "none";

    });
// ===========================
// SAVE EDITED MEMORY
// ===========================

document
.getElementById("save-edit-memory")
?.addEventListener("click", async () => {

    const editMemoryId =
        document.getElementById("edit-memory-id") as HTMLInputElement;

    const editMemoryTitle =
        document.getElementById("edit-memory-title") as HTMLInputElement;

    const editMemoryContent =
        document.getElementById("edit-memory-content") as HTMLTextAreaElement;

    const editMemoryAgent =
        document.getElementById("edit-memory-agent") as HTMLSelectElement;


    const id = editMemoryId.value;

    const title = editMemoryTitle.value.trim();

    const content = editMemoryContent.value.trim();

    const agent = editMemoryAgent.value;


    if (!id || !title || !content || !agent) {

        alert("Please fill all fields.");

        return;
    }


    try {

        const result = await updateMemory(
            id,
            title,
            content,
            agent
        );


        if (result.success) {

            alert("✅ Memory Updated Successfully!");

            const modal =
                document.getElementById("edit-memory-modal") as HTMLDivElement;

            modal.style.display = "none";

            location.reload();

        } else {

            alert("❌ Unable to update memory.");

        }

    } catch (error) {

        console.error(error);

        alert("❌ Unable to update memory.");

    }

});
// ===========================
// SIDEBAR NAVIGATION
// ===========================

document.querySelectorAll(".menu li").forEach((item) => {

    item.addEventListener("click", () => {

        // Remove active from all buttons
        document
            .querySelectorAll(".menu li")
            .forEach((menuItem) => {
                menuItem.classList.remove("active");
            });

        // Add active to clicked button
        item.classList.add("active");

        const targetId = item.getAttribute("data-target");

        if (!targetId) return;

        // Dashboard
        if (targetId === "dashboard") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        const target = document.getElementById(targetId);

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        } else {

            console.log(
                `Section "${targetId}" not found yet.`
            );

        }

    });

});
// ===========================
// GLOBAL SEARCH
// ===========================

const searchInput =
    document.getElementById("global-search") as HTMLInputElement | null;

if (searchInput) {

    searchInput.addEventListener("keydown", (event) => {

        if (event.key !== "Enter") return;

        const searchTerm = searchInput.value
            .trim()
            .toLowerCase();

        if (!searchTerm) return;

        const agentsSection =
            document.getElementById("agents-container");

        const memorySection =
            document.getElementById("memory-container");

        const workflowSection =
            document.getElementById("workflow-section");

        let found = false;

        // Search Agents
        if (agentsSection) {

            const agentCards =
                agentsSection.querySelectorAll(".card");

            agentCards.forEach((card) => {

                const text =
                    card.textContent?.toLowerCase() || "";

                if (text.includes(searchTerm)) {

                    card.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    found = true;

                }

            });

        }

        // Search Memories
        if (memorySection && !found) {

            const memoryCards =
                memorySection.querySelectorAll(".memory-card");

            memoryCards.forEach((card) => {

                const text =
                    card.textContent?.toLowerCase() || "";

                if (text.includes(searchTerm)) {

                    card.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    found = true;

                }

            });

        }

        // Search Workflow / Projects
        if (workflowSection && !found) {

            const text =
                workflowSection.textContent?.toLowerCase() || "";

            if (text.includes(searchTerm)) {

                workflowSection.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

                found = true;

            }

        }

        if (!found) {

            alert(
                `🔍 No results found for "${searchInput.value}"`
            );

        }

    });

}
// ===========================
// ADMIN PANEL
// ===========================

const adminButton =
    document.getElementById("admin-btn");

const adminPanel =
    document.getElementById("admin-panel");

if (adminButton && adminPanel) {

    adminButton.addEventListener("click", (event) => {

        event.stopPropagation();

        adminPanel.classList.toggle("show");

        const notificationPanel =
            document.getElementById("notification-panel");

        notificationPanel?.classList.remove("show");

    });

}
// ===========================
// NOTIFICATION PANEL
// ===========================

const notificationButton =
    document.getElementById("notification-btn");

const notificationPanel =
    document.getElementById("notification-panel");

if (notificationButton && notificationPanel) {

    notificationButton.addEventListener("click", (event) => {

        event.stopPropagation();

        notificationPanel.classList.toggle("show");

        const adminPanel =
            document.getElementById("admin-panel");

        adminPanel?.classList.remove("show");

    });

}
// ===========================
// CLOSE NAVBAR PANELS
// ===========================

document.addEventListener("click", () => {

    document
        .getElementById("admin-panel")
        ?.classList.remove("show");

    document
        .getElementById("notification-panel")
        ?.classList.remove("show");

});
const addAgentButton = document.querySelector<HTMLButtonElement>("#add-agent-btn");

addAgentButton?.addEventListener("click", async () => {

    const nameInput = document.querySelector<HTMLInputElement>("#agent-name");
    const roleInput = document.querySelector<HTMLInputElement>("#agent-role");
    const statusInput = document.querySelector<HTMLSelectElement>("#agent-status");

    const name = nameInput?.value.trim();
    const role = roleInput?.value.trim();
    const status = statusInput?.value;

    if (!name || !role) {
        alert("Please enter the agent name and role.");
        return;
    }

    try {

        await addAgent({
            name,
            role,
            status
        });

        alert("Agent added successfully! 🚀");

        if (nameInput) nameInput.value = "";
        if (roleInput) roleInput.value = "";

    } catch (error) {

        console.error("Error adding agent:", error);
        alert("Failed to add agent.");

    }
});