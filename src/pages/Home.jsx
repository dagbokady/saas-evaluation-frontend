import { useEffect, useState } from "react";
import { checkBackendHealth } from "../services/api";

function Home() {
    const [backendStatus, setBackendStatus] = useState("checking");

    useEffect(() => {
        checkBackendHealth()
            .then(() => setBackendStatus("success"))
            .catch(() => setBackendStatus("error"));
    }, []);

    return (
        <div>
            <h1>Test du frontend</h1>

            {backendStatus === "checking" && (
                <p>Vérification du backend...</p>
            )}

            {backendStatus === "success" && (
                <p>Backend OK ✓</p>
            )}

            {backendStatus === "error" && (
                <p>Backend non joignable ✗</p>
            )}
        </div>
    );
}

export default Home;