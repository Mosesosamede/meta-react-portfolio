import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, X, ExternalLink, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Glass } from "../components/Glass";

export default function Projects({ onBack }) {
  const [activeProject, setActiveProject] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [activeProject]);

  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-12"
    >
      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition"
      >
        <ChevronLeft size={20} /> Back to Home
      </button>

      {/* Header */}
      <header className="mb-12">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight">
          Case Studies
        </h2>
        <p className="mt-4 text-zinc-400 text-lg max-w-2xl">
          Deep dives into engineered systems designed for scale and performance.
        </p>
      </header>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            onOpen={setActiveProject}   // ✅ THIS IS THE KEY
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-xl p-4 overflow-y-auto flex justify-center pt-10 sm:pt-20"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-4xl mb-20"
            >
              <Glass className="relative rounded-[2.5rem] overflow-hidden">
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-zinc-800"
                >
                  <X size={24} />
                </button>

                <div className="p-8 sm:p-12">
                  <div className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                    {activeProject.stack}
                  </div>

                  <h2 className="text-4xl sm:text-6xl font-black mb-8">
                    {activeProject.name}
                  </h2>

                  <div className="grid gap-12 md:grid-cols-2">
                    <div>
                      <h4 className="font-bold mb-2">The Problem</h4>
                      <p className="text-zinc-400">{activeProject.problem}</p>

                      <h4 className="font-bold mt-6 mb-2">The Solution</h4>
                      <p className="text-zinc-400">{activeProject.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-bold mb-4">Key Impact</h4>
                      {activeProject.impact.map((item, i) => (
                        <div key={i} className="flex gap-3 mb-3">
                          <CheckCircle2 className="text-blue-500" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 pt-12 border-t border-zinc-800">
                    {activeProject.links?.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold"
                      >
                        {link.label} <ExternalLink size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </Glass>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}