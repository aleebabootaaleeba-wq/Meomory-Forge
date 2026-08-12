export function Sidebar(): string {
    return `
    <aside class="sidebar">

        <div class="logo">
            🧠
            <h2>MemoryForge</h2>
        </div>

        <ul class="menu">

            <li class="active" data-target="dashboard">
                🏠 Dashboard
            </li>

            <li data-target="agents-container">
                🤖 AI Agents
            </li>

            <li data-target="memory-container">
                🧠 Memory
            </li>

            <li data-target="workflow-section">
                📁 Projects
            </li>

            <li data-target="analytics-section">
                📊 Analytics
            </li>

            <li data-target="settings-section">
                ⚙️ Settings
            </li>

        </ul>

    </aside>
    `;
}