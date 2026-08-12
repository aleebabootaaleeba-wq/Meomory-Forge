export function AddAgent() {

    return `

    <section class="add-agent">

        <h2>➕ Add New AI Agent</h2>

        <div class="form">

            <input
                id="agent-name"
                type="text"
                placeholder="Enter Agent Name"
            >

            <input
                id="agent-role"
                type="text"
                placeholder="Enter Agent Role"
            >

            <select id="agent-status">

                <option>Online</option>
                <option>Busy</option>
                <option>Offline</option>

            </select>

            <button id="add-agent-btn">
                🚀 Add Agent
            </button>

        </div>

    </section>

    `;
}