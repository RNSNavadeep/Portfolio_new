import React from 'react';
import { EDUCATION_ITEMS, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, Trophy, CheckCircle2, MapPin, Calendar, BookOpen, Star } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0d101a] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" /> Academic & Honors
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Education & <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Recognitions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Consistently high academic standing paired with competitive hackathon wins and professional certifications.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <span>Educational Background</span>
            </h3>

            {EDUCATION_ITEMS.map((edu, idx) => (
              <div key={idx} className="glow-card p-6 sm:p-8 rounded-2xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                  <div>
                    <h4 className="text-lg font-bold text-white font-['Outfit']">
                      {edu.degree}
                    </h4>
                    <p className="text-emerald-400 font-medium text-sm">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right">
                    <div className="flex items-center gap-1 sm:justify-end">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {edu.score && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                    <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                    <span>{edu.score}</span>
                  </div>
                )}

                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {edu.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                {edu.coursework && (
                  <div className="pt-3 border-t border-white/5 space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Relevant Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((c, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Certifications & Hackathon Winner Card */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Certifications & Achievements</span>
            </h3>

            {/* Hackathon Winner Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-amber-500/10 via-emerald-500/10 to-teal-500/10 border border-amber-500/30 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    🏆 1ST PLACE WINNER
                  </span>
                  <h4 className="text-lg font-bold text-white font-['Outfit'] mt-1">
                    HackOdessy IoT Hackathon 2023
                  </h4>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Awarded First Place for designing an innovative IoT and AI automation solution under high-pressure competitive hackathon conditions.
              </p>
            </div>

            {/* List of Other Certifications */}
            <div className="space-y-3">
              {CERTIFICATIONS.filter((c) => c.type !== 'Hackathon').map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#121624] border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white font-['Outfit']">
                        {cert.title}
                      </h5>
                      <p className="text-xs text-slate-400 font-mono">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-slate-800 text-emerald-300 border border-slate-700 shrink-0">
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
