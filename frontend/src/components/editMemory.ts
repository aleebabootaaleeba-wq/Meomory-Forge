export function EditMemory(): string {

    return `

    <div id="edit-memory-modal" class="modal">

        <div class="modal-content">

            <h2>✏️ Edit Memory</h2>

            <input
                id="edit-memory-id"
                type="hidden"
            />

            <label>Title</label>

            <input
                id="edit-memory-title"
                type="text"
                placeholder="Memory Title"
            />

            <label>Content</label>

            <textarea
                id="edit-memory-content"
                placeholder="Write memory..."
            ></textarea>

            <label>Agent</label>

            <select id="edit-memory-agent">

                <option value="">
                    Select Agent
                </option>

            </select>

            <div class="modal-buttons">

                <button id="cancel-edit-memory">
                    Cancel
                </button>

                <button id="save-edit-memory">
                    Save Changes
                </button>

            </div>

        </div>

    </div>

    `;
}