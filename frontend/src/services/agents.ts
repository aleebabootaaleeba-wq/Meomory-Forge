const API_URL = "http://localhost:5000/api/status";

export async function getAgents() {
    const response = await fetch(`${API_URL}/agents`);

    if (!response.ok) {
        throw new Error("Failed to fetch agents");
    }

    const result = await response.json();

    return result.data;
}

export async function addAgent(agent: any) {
    const response = await fetch(`${API_URL}/agents`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(agent)
    });

    if (!response.ok) {
        throw new Error("Failed to add agent");
    }

    const result = await response.json();

    return result.data;
}

export async function deleteAgent(id: string) {
    const response = await fetch(`${API_URL}/agents/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete agent");
    }

    return response.json();
}

export async function updateAgent(
    id: string,
    name: string,
    role: string,
    status: string
) {
    const response = await fetch(
        `${API_URL}/agents/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                role,
                status
            })
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update agent");
    }

    const result = await response.json();

    return result.data;
}