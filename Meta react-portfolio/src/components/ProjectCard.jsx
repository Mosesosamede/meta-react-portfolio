import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { Glass } from "./Glass";
import { ProjectSlider } from "./ProjectSlider";

export const ProjectCard = ({ project }) => (
    <button
        onClick={() => onOpen(project)} // This line makes it clickable!
        className="text-left w-full active:scale-[0.98] transition-transform group"
    >
    <Glass className="rounded-3xl overflow-hidden hover:border-blue-500/40 transition flex flex-col group">
        <div className="relative w-full aspect-[16/10] border-b border-zinc-800">
            <ProjectSlider project={project} showControls={false} />
        </div>
        <div className="p-6">
            <div className="flex justify-end gap-2 mb-4">
                {project.isAI && (
                    <span className="py-1 px-3 text-[9px] font-black rounded-full bg-blue-500 text-white uppercase tracking-widest">AI Powered</span>
                )}
            </div>
            <h3 className="text-2xl font-black group-hover:text-blue-400 transition">{project.name}</h3>
            <p className="text-sm text-zinc-400 mt-2 line-clamp-2">{project.short}</p>
            <div className="mt-8 flex items-center gap-2 text-sm font-bold text-zinc-300">
                View Case Study <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
            </div>
        </div>
    </Glass>
    </button>
);
