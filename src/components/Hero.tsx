import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] -z-10" />

            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-light text-sm font-medium mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Available for new opportunities
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter"
                >
                    Building <span className="text-gradient">high-end</span> <br />
                    digital experiences.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Hi, I'm <span className="text-white font-semibold">{portfolioData.name}</span>.
                    A specialized {portfolioData.role} dedicated to crafting performance-optimized,
                    scalable, and visually stunning web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="#projects" className="btn-primary flex items-center gap-2 group">
                        View My Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="btn-outline flex items-center gap-2">
                        Let's Talk
                    </a>
                </motion.div>

                {/* Code Snippet Decoration */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 0.3, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 hidden md:block"
                >
                    <div className="glass rounded-t-2xl p-4 flex items-center gap-2 border-b-0 w-[600px] mx-auto">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/40" />
                            <div className="w-3 h-3 rounded-full bg-amber-500/40" />
                            <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
                        </div>
                        <div className="mx-auto flex items-center gap-2 text-white/40 text-xs font-mono">
                            <Terminal size={12} />
                            portfolio.tsx — Edited
                        </div>
                    </div>
                    <div className="glass rounded-b-2xl p-6 border-t-0 w-[600px] mx-auto text-left font-mono text-sm overflow-hidden">
                        <p className="text-pink-400"><span className="text-blue-400">const</span> skills <span className="text-white">=</span> [</p>
                        <p className="ml-4 text-emerald-400">'ReactNative', 'Next.js', 'React.js', 'TypeScript',</p>
                        <p className="ml-4 text-emerald-400">'Tailwind CSS', 'Responsive UI'</p>
                        <p className="text-pink-400">];</p>
                        <div className="animate-pulse w-1 h-4 bg-primary inline-block ml-1 align-middle" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
