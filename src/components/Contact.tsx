import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden">
            {/* Glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="section-container">
                <div className="glass rounded-[3rem] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden">
                    {/* Decorative grid */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter italic">
                            Let's build <br />
                            <span className="text-gradient">the next big thing.</span>
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative collaborations.
                        </p>

                        <a
                            href={`mailto:${portfolioData.email}`}
                            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-8 py-4 rounded-xl md:2xl bg-white text-black font-black hover:bg-primary hover:text-white transition-all duration-300 hover:scale-[1.05] group max-w-full overflow-hidden"
                        >
                            <Mail size={20} className="shrink-0" />
                            <span className="text-sm md:text-base truncate md:overflow-visible whitespace-nowrap">
                                {portfolioData.email}
                            </span>
                            <ArrowUpRight size={20} className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>

                        <div className="mt-16 pt-16 border-t border-white/5">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-8">Follow My Journey</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <SocialLink href={portfolioData.socials.github} icon={<Github />} label="GitHub" />
                                <SocialLink href={portfolioData.socials.linkedin} icon={<Linkedin />} label="LinkedIn" />
                                <SocialLink href={portfolioData.socials.twitter} icon={<Twitter />} label="X (Twitter)" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                {icon}
            </div>
            <span className="text-sm font-medium">{label}</span>
        </a>
    );
}
