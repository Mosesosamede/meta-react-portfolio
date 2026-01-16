import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, BadgeCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { Glass } from "../components/Glass";
import { PROFILE, METRICS, SKILLS, CERTS } from "../data/profile";
import { useTypewriter } from "../hooks/useTypewriter";

/* --- Sub-components for Home --- */
const BouncyM = () => (
    <span className="inline-block relative">
        <motion.span
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative inline-flex items-center justify-center w-[1.1em] h-[1.1em]"
        >
            <span className="absolute inset-0 rounded-full blue-circle -z-10" />
            <span className="relative text-white">M</span>
        </motion.span>
    </span>
);

export default function Home({ setPath }) {
    const { displayText } = useTypewriter(PROFILE.summaryItems);

    return (
        <motion.section
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-6xl px-4 sm:px-6 pb-10 pt-12"
        >
            <div className="grid gap-6 md:gap-10 md:grid-cols-[1.25fr_0.75fr]">
                <div className="space-y-6">
                    <Glass className="rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                            <Sparkles className="h-32 w-32" />
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-300 mb-8">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2">
                                <MapPin className="h-4 w-4 text-blue-400" /> {PROFILE.location}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 px-4 py-2">
                                <BadgeCheck className="h-4 w-4 text-blue-400" /> {PROFILE.status}
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-7xl font-black tracking-tighter mb-6">
                            <BouncyM />oses Obaseki<span className="text-blue-500">.</span>
                        </h1>

                        <div className="text-xl sm:text-2xl text-zinc-300 mb-10 min-h-[4rem]">
                            <span className="block mb-1">{PROFILE.title}</span>
                            <span className="text-blue-400">{displayText}</span>
                        </div>

                        <button
                            onClick={() => setPath("projects")}
                            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-bold bg-white text-zinc-950 hover:bg-zinc-100 transition shadow-lg"
                        >
                            Explore Works <ArrowRight className="h-5 w-5" />
                        </button>

                        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {METRICS.map((m) => (
                                <div key={m.label} className="border-l border-zinc-800 pl-4 py-2">
                                    <div className="text-3xl font-black tracking-tighter">{m.value}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </Glass>
                </div>

                <div className="space-y-6">
                    <Glass className="rounded-3xl p-8">
                        <h3 className="text-xl font-black mb-6">Certifications</h3>
                        <div className="space-y-4">
                            {CERTS.map(c => (
                                <div key={c} className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/50">
                                    <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                                    <span className="text-sm font-bold text-zinc-300">{c}</span>
                                </div>
                            ))}
                        </div>
                    </Glass>
                </div>
            </div>
        </motion.section>
    );
}