import React from 'react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#0d101a] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" /> Technical Industry Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Engineering <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Impact & AI Deliverables</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Hands-on work building production-grade NLP chatbots, audio speech neural models, and Streamlit AI tools.
          </p>
        </div>

        {/* Timeline List */}
        <div className="mt-16 max-w-4xl mx-auto">
          {EXPERIENCE_ITEMS.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 pb-12 border-l-2 border-emerald-500/30 last:pb-0">
              
              {/* Timeline Icon */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#0d101a] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/20">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="glow-card p-6 sm:p-8 rounded-2xl space-y-6">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white font-['Outfit']">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                        Current Role
                      </span>
                    </div>
                    <p className="text-base font-semibold text-emerald-400 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Bullet Points */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Contributions & Engineering Deliverables:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
