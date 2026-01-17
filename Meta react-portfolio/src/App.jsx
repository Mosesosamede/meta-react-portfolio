import React, { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  const [path, setPath] = useState("home"); // ✅ HOME FIRST

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <ErrorBoundary>
        {path === "home" && <Home setPath={setPath} />}
        {path === "projects" && (
          <Projects onBack={() => setPath("home")} />
        )}
      </ErrorBoundary>
    </div>
  );
}