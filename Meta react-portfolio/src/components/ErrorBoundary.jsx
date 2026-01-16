import React from "react";
import { Glass } from "./Glass";
import { RefreshCcw, AlertTriangle } from "lucide-react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
                    <Glass className="max-w-md w-full p-8 text-center rounded-3xl">
                        <div className="flex justify-center mb-6 text-rose-500">
                            <AlertTriangle size={48} />
                        </div>
                        <h2 className="text-2xl font-black mb-4">Something went wrong.</h2>
                        <p className="text-zinc-400 mb-8">
                            The application encountered an unexpected error. Try refreshing the page.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-full font-bold hover:bg-zinc-200 transition"
                        >
                            <RefreshCcw size={18} /> Refresh Page
                        </button>
                    </Glass>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;