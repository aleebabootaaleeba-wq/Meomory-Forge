export function Navbar(): string {
    const today = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    return `
        <nav class="top-navbar">

            <div class="search-box">
                🔍
                <input
                    id="global-search"
                    type="text"
                    placeholder="Search memories, agents, projects..."
                >
            </div>

            <div class="navbar-right">

                <div class="clock">
                    <div>${today}</div>
                    <strong>${time}</strong>
                </div>

                <div
                    class="notification"
                    id="notification-btn"
                    title="Notifications"
                >
                    🔔
                    <span class="badge">3</span>
                </div>

                <button
                    class="admin-btn"
                    id="admin-btn"
                    type="button"
                >
                    👤 Admin
                </button>

            </div>

        </nav>

        <!-- Notification Panel -->
        <div id="notification-panel" class="navbar-panel notification-panel">

            <div class="panel-header">
                <h3>🔔 Notifications</h3>
            </div>

            <div class="notification-item">
                🟢 Backend connected
                <small>System is running</small>
            </div>

            <div class="notification-item">
                🧠 Memory system ready
                <small>MemoryForge is active</small>
            </div>

            <div class="notification-item">
                🤖 AI Agents available
                <small>Agents are ready</small>
            </div>

        </div>

        <!-- Admin Panel -->
        <div id="admin-panel" class="navbar-panel admin-panel">

            <div class="admin-profile">
                <div class="admin-avatar">👤</div>

                <div>
                    <h3>Admin</h3>
                    <p>MemoryForge Administrator</p>
                </div>
            </div>

            <div class="admin-status">
                <span>🟢</span>
                System Online
            </div>

            <div class="admin-info">
                <p>🗄️ Database: Connected</p>
                <p>🔗 Backend: Connected</p>
                <p>🧠 Memory Engine: Active</p>
            </div>

        </div>
    `;
}