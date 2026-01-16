import React, { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

/**
 * App Component
 * Handles the high-level routing state between the Home and Projects views.
 */
export default function App() {
    // Navigation state: "home" or "projects"
    const [path, setPath] = useState("home");

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-blue-500/30">
            {/* Simple conditional rendering for navigation. 
         Passes setPath to Home to allow clicking "Explore Works" to change pages.
         Passes onBack to Projects to allow returning to the home screen.
      */}
            {path === "home" ? (
                <Home setPath={setPath} />
            ) : (
                <Projects onBack={() => setPath("home")} />
            )}
        </div>
    );
}