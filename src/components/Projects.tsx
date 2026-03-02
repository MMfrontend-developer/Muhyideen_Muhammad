import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
    return (
        <section id="projects" className="relative">
            <div className="section-container">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-5xl mb-4 italic">Featured Work.</h2>
                        <p className="text-slate-400 max-w-lg">
                            A selection of projects where I've combined technical excellence with thoughtful design.
                        </p>
                    </div>
                    <div className="hidden lg:block select-none pointer-events-none">
                        <span className="text-8xl font-black text-white/[0.3]">PORTFOLIO</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {portfolioData.projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group glass rounded-[2.5rem] overflow-hidden flex flex-col"
                        >
                            {/* Card visual header */}
                            <div className="relative h-64 overflow-hidden bg-slate-900 flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />

                                <div className="absolute top-6 right-6 flex gap-3 z-10">
                                    {project.githubLink && (
                                        <a href={project.githubLink} className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-primary transition-colors">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-primary transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 md:p-10 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] uppercase tracking-wider font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-4 mt-auto">
                                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">The Problem</h4>
                                        <p className="text-xs text-slate-300">{project.problem}</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <h4 className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">The Solution</h4>
                                        <p className="text-xs text-slate-300">{project.solution}</p>
                                    </div>
                                </div>

                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all underline underline-offset-8 decoration-primary/50"
                                >
                                    View Case Study
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Internal helper component
function ArrowRight({ size, className }: { size?: number, className?: string }) {
    return (
        <svg
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}
