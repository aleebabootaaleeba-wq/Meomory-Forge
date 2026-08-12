export function Loader(): string {
    return `
    <div id="loader">

        <div class="loader-box">

            <div class="brain">🧠</div>

            <h1>MemoryForge</h1>

            <p>Initializing AI Agents...</p>

            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>

            <div class="loader-status">
                <p id="statusText">Connecting CockroachDB...</p>
            </div>

        </div>
    </div>
    `;
}