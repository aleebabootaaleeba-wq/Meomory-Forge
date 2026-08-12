const API_URL = "http://localhost:5000/api";

export async function getMemories() {

    const response = await fetch(`${API_URL}/memories`);

    if (!response.ok) {

        throw new Error("Failed to fetch memories");

    }

    return response.json();

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

    return response.json();

}
export async function deleteMemory(id: string) {

    const response = await fetch(

        `http://localhost:5000/api/memories/${id}`,

        {

            method: "DELETE"

        }

    );

    return response.json();

}
export async function updateMemory(
    id: string,
    title: string,
    content: string,
    agent_name: string
) {

    const response = await fetch(
        `http://localhost:5000/api/memories/${id}`,
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

    return response.json();
}