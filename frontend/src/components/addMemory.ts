export function AddMemory(): string {

    return `

    <div id="memory-modal" class="modal">

        <div class="modal-content">

            <h2>🧠 Add Memory</h2>

            <label>Title</label>

            <input
                id="memory-title"
                type="text"
                placeholder="Memory Title"
            />

            <label>Content</label>

            <textarea
                id="memory-content"
                placeholder="Write memory..."
            ></textarea>

            <label>Agent</label>

            <select id="memory-agent">

                <option value="">Select Agent</option>

            </select>

            <div class="modal-buttons">

                <button id="cancel-memory">
                    Cancel
                </button>

                <button id="save-memory">
                    Save Memory
                </button>

            </div>

        </div>

    </div>

    `;

}