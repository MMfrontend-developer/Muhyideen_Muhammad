import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
    return (
        <section id="experience" className="bg-card/30">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1  mt-20">
                        <h2 className="text-3xl md:text-5xl mb-6 italic">Career Path.</h2>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            My professional journey across different teams and technologies, focused on building impactful web solutions.
                        </p>
                        <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                            <Briefcase className="text-primary mb-4" size={32} />
                            <h4 className="text-white font-bold mb-2">Frontend Specialist</h4>
                            <p className="text-sm text-slate-400">Successfully delivering robust solutions for over 3 years.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        {portfolioData.experience.map((exp, idx) => (
                            <motion.div
                                key={exp.company + idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
                            >
                                {/* Timeline connector */}
                                {idx !== portfolioData.experience.length - 1 && (
                                    <div className="absolute left-0 md:left-[21px] top-8 bottom-0 w-px bg-white/10 group-hover:bg-primary/20 transition-colors" />
                                )}

                                {/* Status Dot */}
                                <div className="absolute left-[-5px] md:left-[16px] top-1.5 w-[11px] h-[11px] rounded-full bg-card border-2 border-white/20 group-hover:border-primary transition-colors z-10" />

                                <div className="glass p-8 rounded-[2rem] hover:border-white/10 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-xl text-white font-bold group-hover:text-primary transition-colors">{exp.company}</h3>
                                            <p className="text-primary text-sm font-medium">{exp.role}</p>
                                        </div>
                                        <div className="flex flex-col items-start md:items-end gap-1">
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <Calendar size={12} />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <MapPin size={12} />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.highlights.map((item, hIdx) => (
                                            <li key={hIdx} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                                                <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-current" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
