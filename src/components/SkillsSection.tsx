import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Brain, Server, Terminal, Cpu, Check, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    Code2,
    Brain,
    Server,
    Terminal,
    Cpu,
  };

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#0b0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" /> Technical Skill Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Mastered <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Tools & Frameworks</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            From low-level data structures & SQL to deep neural networks, Rasa conversational models, and Streamlit frontends.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 font-bold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catItem) => {
            const IconComponent = iconMap[catItem.iconName] || Code2;
            return (
              <div
                key={catItem.category}
                className="glow-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-4 border-b border-white/5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-['Outfit']">
                        {catItem.category}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {catItem.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {catItem.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#0f1320] border border-white/5 hover:border-emerald-500/30 transition-all"
                      >
                        <div className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className={`text-xs font-medium ${skill.highlight ? 'text-white font-semibold' : 'text-slate-300'}`}>
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          skill.level === 'Advanced'
                            ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
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
