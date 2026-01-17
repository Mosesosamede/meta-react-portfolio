import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export default function Projects({ onBack }) {
    return (
        <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-12"
        >
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition"
            >
                <ChevronLeft size={20} /> Back to Home
            </button>

            <header className="mb-12">
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight">Case Studies</h2>
                <p className="mt-4 text-zinc-400 text-lg max-w-2xl">
                    Deep dives into engineered systems designed for scale and performance.
                </p>
            </header>

            <div className="grid gap-8 md:grid-cols-2">
                {PROJECTS.map((project, idx) => (
                    <ProjectCard
  key={idx}
  project={project}
  onOpen={() => {}}
/>

                ))}
            </div>
        </motion.section>
    );
}
