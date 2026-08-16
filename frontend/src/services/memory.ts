const API_URL = "http://localhost:5000/api";

export async function getMemories() {
    const response = await fetch(`${API_URL}/memories`);

    if (!response.ok) {
        throw new Error("Failed to fetch memories");
    }

    const result = await response.json();

    return result.data;
}

export async function addMemory(
    title: string,
    content: string,
    agent_name: string
) {
    const response = await fetch(`${API_URL}/memories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            content,
            agent_name
        })
    });

    if (!response.ok) {
        throw new Error("Failed to add memory");
    }

    const result = await response.json();

    return result.data;
}

export async function deleteMemory(id: string) {
    const response = await fetch(
        `${API_URL}/memories/${id}`,
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to delete memory");
    }

    return response.json();
}

export async function updateMemory(
    id: string,
    title: string,
    content: string,
    agent_name: string
) {
    const response = await fetch(
        `${API_URL}/memories/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content,
                agent_name
            })
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update memory");
    }

    const result = await response.json();

    return result.data;
}