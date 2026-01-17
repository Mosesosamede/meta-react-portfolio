import React, { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ErrorBoundary from "./components/ErrorBoundary";

/**
 * App Component
 * Handles the high-level routing state between the Home and Projects views.
 */
export default function App() {
  const [path, setPath] = useState("home");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-blue-500/30">
      <ErrorBoundary>
        {path === "home" ? (
          <Home setPath={setPath} />
        ) : (
          <Projects onBack={() => setPath("home")} />
        )}
      </ErrorBoundary>
    </div>
  );
}
