export function EditAgent(): string {

    return `
    
    <div id="edit-modal" class="modal">

        <div class="modal-content">

            <h2>✏️ Edit AI Agent</h2>

            <input
                type="hidden"
                id="edit-id"
            />

            <label>Name</label>

            <input
                id="edit-name"
                type="text"
            />

            <label>Role</label>

            <input
                id="edit-role"
                type="text"
            />

            <label>Status</label>

            <select id="edit-status">

                <option>Online</option>

                <option>Offline</option>

            </select>

            <div class="modal-buttons">

                <button id="cancel-edit">
                    Cancel
                </button>

                <button id="save-edit">
                    Save Changes
                </button>

            </div>

        </div>

    </div>

    `;
}