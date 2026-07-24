import React from 'react';
import { Brain, Cpu, MessageSquare, LineChart, Sparkles, Database, Layers, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const SummaryHighlights: React.FC = () => {
  const pillars = [
    {
      title: 'Full ML & MLOps Pipeline',
      description: 'End-to-end expertise spanning data preprocessing, feature engineering, model training, hyperparameter tuning, joblib model persistence, and deployment.',
      icon: Cpu,
      tech: ['Scikit-learn', 'Pandas', 'Joblib', 'Streamlit'],
      color: 'emerald',
    },
    {
      title: 'Conversational AI & Rasa NLP',
      description: 'Architecting intelligent dialogue systems, intent classification, entity extraction, slot filling, spell correction, and custom action recommendation engines.',
      icon: MessageSquare,
      tech: ['Rasa Framework', 'NLTK', 'RapidFuzz', 'YAML'],
      color: 'teal',
    },
    {
      title: 'Voice Signal & Audio Deep Learning',
      description: 'Extracting speech acoustic features (MFCCs, Chroma, Mel-spectrograms) and training PyTorch neural networks for human emotion classification.',
      icon: Brain,
      tech: ['PyTorch', 'Audio Feature ML', 'Speech Processing'],
      color: 'indigo',
    },
    {
      title: 'AutoML & Analytical Dashboards',
      description: 'Building automated ML experiment runners that evaluate classification & regression metrics, EDA visualizations, and model exports.',
      icon: LineChart,
      tech: ['Streamlit', 'Matplotlib', 'Seaborn', 'NumPy'],
      color: 'amber',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0d101a] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> Professional Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Engineered for <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Production-Ready AI</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glow-card p-6 rounded-2xl flex flex-col justify-between group hover:border-emerald-500/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Outfit']">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {pillar.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-800/80 text-slate-300 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
