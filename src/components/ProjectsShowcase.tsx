import React from 'react';
import { PROJECTS_ITEMS } from '../data/portfolioData';
import { Terminal, Github, CheckCircle2 } from 'lucide-react';

export const ProjectsShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#0b0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Terminal className="w-3.5 h-3.5" /> Core AI Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">AI & ML Projects</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Detailed architectures built from scratch with Python, PyTorch, Rasa NLP, Scikit-learn, and Streamlit.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS_ITEMS.map((project) => {
            return (
              <div
                key={project.id}
                className="glow-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group border border-white/10 hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="space-y-6">
                  
                  {/* Category Pill & Top Info */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {project.category}
                    </span>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/50 transition-all"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-white font-[#Outfit] group-hover:text-emerald-400 transition-colors font-['Outfit']">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 leading-snug">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Engineering Highlights:
                    </h4>
                    <ul className="space-y-1.5">
                      {project.keyFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
