import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090a0f] border-t border-white/10 py-12 relative text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 font-['Outfit'] text-sm">
              NS
            </div>
            <div>
              <p className="font-bold text-white font-['Outfit'] text-sm">
                Rudrakshula Navadeep Sai
              </p>
              <p className="text-[11px] font-mono text-slate-400">
                AI Engineer • Machine Learning & NLP Specialist
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-emerald-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-white text-slate-400 transition-all flex items-center gap-2 font-mono text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
          <p>© {new Date().getFullYear()} Rudrakshula Navadeep Sai. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React 19, PyTorch & Rasa architectures.
          </p>
        </div>

      </div>
    </footer>
  );
};
