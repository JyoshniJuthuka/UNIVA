import { GraduationCap, Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                UNIVA
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              AI-powered career guidance for the next generation of learners. Discover your path, bridge your skill gaps, and achieve your career milestones.
            </p>

            <div className="pt-1 text-xs text-blue-400/90 font-medium">
              A Wadhwani Foundation Venture Initiative Project
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
                aria-label="UNIVA on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
                aria-label="UNIVA on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
                aria-label="UNIVA on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">Try UNIVA Demo</a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">Learning Roadmap</a>
              </li>
            </ul>
          </div>

          {/* Platform & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#opportunities" className="hover:text-white transition-colors">Opportunity Hub</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Venture</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Team</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Mentor Resources</a>
              </li>
              <li>
                <span className="text-slate-500">Heuristic Engine v1.0</span>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Inquiries
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              For academic partnerships, mentor feedback, and student pilot programs:
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span>contact@univa-venture.org</span>
            </div>
            <div className="text-[11px] text-slate-500">
              Bangalore · Hyderabad · Delhi
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 UNIVA. All rights reserved. Developed as a Wadhwani Foundation venture project.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">
              Prototype for evaluation purposes
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
