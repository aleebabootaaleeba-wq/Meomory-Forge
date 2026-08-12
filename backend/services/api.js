const API_URL = "http://localhost:5000";

export async function getServerStatus() {
    const response = await fetch(API_URL);
    return await response.json();
}