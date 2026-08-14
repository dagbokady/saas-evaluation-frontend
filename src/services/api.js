const API_URL = import.meta.env.VITE_API_URL;

export async function checkBackendHealth() {
    const response = await fetch(`${API_URL}/health`);

    if (!response.ok) {
        throw new Error("Backend non joignableeee");
    }

    return response;
}