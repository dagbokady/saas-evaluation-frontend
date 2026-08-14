import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import EnseignantDashboard from "./pages/EnseignantDashboard";
import ApprenantDashboard from "./pages/ApprenantDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route
                    path="/enseignant/dashboard"
                    element={<EnseignantDashboard />}
                />

                <Route
                    path="/apprenant/dashboard"
                    element={<ApprenantDashboard />}
                />

                <Route
                    path="/admin/dashboard"
                    element={<AdminDashboard />}
                />

                {/* Toute URL inconnue retourne vers l'accueil */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;