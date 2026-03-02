import { portfolioData } from '../data/portfolio';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 py-12">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white text-sm">
                            M
                        </div>
                        <p className="text-sm text-slate-500">
                            © {currentYear} {portfolioData.name}. All rights reserved.
                        </p>
                    </div>

                    <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
                        <a href="#about" className="hover:text-primary transition-colors">About</a>
                        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    </div>

                    <div className="text-xs text-slate-600 font-mono">
                        Designed & Built By M_M.
                    </div>
                </div>
            </div>
        </footer>
    );
}
