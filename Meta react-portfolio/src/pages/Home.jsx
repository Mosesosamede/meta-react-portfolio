import React from "react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, X, ExternalLink, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { Glass } from "../components/Glass";

export default function Projects({ onBack }) {
  // 1. Add state to track which project is being viewed
  const [activeProject, setActiveProject] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-12"
    >
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition group"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
        Back to Home
      </button>

      <header className="mb-12">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight">Case Studies</h2>
        <p className="mt-4 text-zinc-400 text-lg max-w-2xl">
          Deep dives into engineered systems designed for scale and performance.
        </p>
      </header>

      {/* 2. Grid of Projects - passing setActiveProject to the card */}
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <ProjectCard 
            key={idx} 
            project={project} 
            onOpen={setActiveProject} 
          />
        ))}
      </div>

      {/* 3. The Detailed Case Study Overlay (Modal) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-zinc-950/90 backdrop-blur-xl p-4 overflow-y-auto flex items-start justify-center pt-10 sm:pt-20"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-4xl mb-20"
            >
              <Glass className="rounded-[2.5rem] overflow-hidden border-zinc-700/50 shadow-2xl">
                {/* Close Button */}
                <button 
                  onClick={() => setActiveProject(null)}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 transition"
                >
                  <X size={24} />
                </button>

                <div className="p-8 sm:p-12">
                  <div className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">
                    {activeProject.stack}
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-black mb-8">{activeProject.name}</h2>
                  
                  <div className="grid gap-12 md:grid-cols-2">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                          <span className="w-8 h-[1px] bg-blue-500" /> The Problem
                        </h4>
                        <p className="text-zinc-400 leading-relaxed">{activeProject.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                          <span className="w-8 h-[1px] bg-emerald-500" /> The Solution
                        </h4>
                        <p className="text-zinc-400 leading-relaxed">{activeProject.solution}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                       <h4 className="text-white font-bold mb-4">Key Impact</h4>
                       <div className="space-y-3">
                         {activeProject.impact.map((item, i) => (
                           <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                             <CheckCircle2 className="text-blue-500 h-5 w-5 shrink-0" />
                             <span className="text-sm text-zinc-300">{item}</span>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-12 border-t border-zinc-800 flex flex-wrap gap-4">
                    {activeProject.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.href}
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition"
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

