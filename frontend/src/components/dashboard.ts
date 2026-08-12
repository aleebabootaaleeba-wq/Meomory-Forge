export function Dashboard(): string {
  return `
    <section class="dashboard">

        <h2>🤖 AI Multi-Agent Workspace</h2>

        <div class="dashboard-grid">

            <div class="panel">
                <h3>💬 Agent Chat</h3>

                <p>Research Agent: Searching previous memory...</p>

                <p>Coding Agent: Backend generated successfully.</p>

                <p>Testing Agent: Running validation...</p>

            </div>

            <div class="panel">
                <h3>🧠 Persistent Memory</h3>

                <table>

                    <tr>
                        <th>ID</th>
                        <th>Agent</th>
                        <th>Status</th>
                    </tr>

                    <tr>
                        <td>M001</td>
                        <td>Research</td>
                        <td>Stored</td>
                    </tr>

                    <tr>
                        <td>M002</td>
                        <td>Coding</td>
                        <td>Stored</td>
                    </tr>

                    <tr>
                        <td>M003</td>
                        <td>Testing</td>
                        <td>Stored</td>
                    </tr>

                </table>

            </div>

        </div>

    </section>
  `;
}