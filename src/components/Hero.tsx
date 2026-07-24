import React, { useState, useRef } from 'react';
import { ArrowRight, Sparkles, Terminal, FileText, Github, Linkedin, Mail, Trophy, Award, Brain, Upload, RefreshCw, Image as ImageIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import defaultProfileImage from '../assets/images/profile.svg';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(() => {
    return localStorage.getItem('navadeep_profile_photo') || null;
  });
  const [fitMode, setFitMode] = useState<'cover' | 'contain'>('cover');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          setCustomPhoto(dataUrl);
          localStorage.setItem('navadeep_profile_photo', dataUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomPhoto(null);
    localStorage.removeItem('navadeep_profile_photo');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0b0d14]">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium shadow-sm shadow-emerald-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Outfit'] leading-none">
                Rudrakshula <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-300 bg-clip-text text-transparent">
                  Navadeep Sai
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 font-['Outfit'] flex items-center justify-center lg:justify-start gap-2">
                <Brain className="w-6 h-6 text-emerald-400" />
                <span>AI Engineer & ML Developer</span>
              </p>
            </div>

            {/* Summary sentence */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Specialized in end-to-end Machine Learning pipelines, NLP conversational agents, audio emotion detection, and automated MLOps platforms. Currently building AI systems at <span className="text-emerald-300 font-semibold underline decoration-emerald-500/50 underline-offset-4">Elevate Labs</span>.
            </p>

            {/* Key Metrics / Highlights Pills */}
            <div className="pt-2 pb-2 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-[#131726]/80 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">B.Tech CGPA</div>
                  <div className="text-sm font-bold text-white font-mono">{PERSONAL_INFO.cgpa}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#131726]/80 border border-white/5 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Hackathon</div>
                  <div className="text-sm font-bold text-white font-mono">1st Winner</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#131726]/80 border border-white/5 col-span-2 sm:col-span-1 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">Role</div>
                  <div className="text-sm font-bold text-white font-mono">Elevate AI Intern</div>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#demos"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-200 flex items-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-slate-950 fill-slate-950" />
                <span>Try Interactive AI Demos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-md hover:bg-slate-800"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View Full Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-slate-900/60 border border-white/5 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Decorative Halo & Borders */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-indigo-500 opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-500" />
              
              <div className="relative bg-[#0d101a] border border-white/10 rounded-2xl p-3 shadow-2xl overflow-hidden">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />

                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900 group/img flex items-center justify-center">
                  <img
                    src={customPhoto || defaultProfileImage}
                    alt="Rudrakshula Navadeep Sai"
                    referrerPolicy="no-referrer"
                    className={`w-full h-full ${fitMode === 'cover' ? 'object-cover' : 'object-contain'} object-center transition-all duration-300`}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d101a] via-transparent to-transparent opacity-70 pointer-events-none" />

                  {/* Quick Action Overlay Bar (Visible on Hover / Focus) */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 rounded-lg bg-[#0d101a]/80 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/10 transition-all shadow-lg flex items-center gap-1 text-xs font-mono"
                      title="Upload your exact image"
                    >
                      <Upload className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                      <span className="hidden sm:inline">Upload Photo</span>
                    </button>

                    {customPhoto && (
                      <>
                        <button
                          type="button"
                          onClick={() => setFitMode(fitMode === 'cover' ? 'contain' : 'cover')}
                          className="p-2 rounded-lg bg-[#0d101a]/80 hover:bg-slate-800 text-slate-300 hover:text-white backdrop-blur-md border border-white/10 transition-all text-xs font-mono"
                          title={fitMode === 'cover' ? "Switch to Fit (No crop)" : "Switch to Fill"}
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleResetPhoto}
                          className="p-2 rounded-lg bg-[#0d101a]/80 hover:bg-rose-500/80 text-slate-300 hover:text-white backdrop-blur-md border border-white/10 transition-all text-xs font-mono"
                          title="Reset Photo"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Floating Tag Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#121622]/90 backdrop-blur-md border border-white/10 shadow-lg space-y-1 z-10">
                    <div className="flex items-center justify-between text-xs font-bold text-white">
                      <span>R. Navadeep Sai</span>
                      <span className="flex items-center gap-1 text-[10px] font-mono text-slate-300 bg-slate-800/60 px-2 py-0.5 rounded-full border border-white/10">
                        AI Engineer & ML Developer
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-mono">
                      PyTorch • Rasa NLP • Scikit-learn • Streamlit
                    </p>
                  </div>
                </div>

                {/* Upload Notice Helper */}
                {!customPhoto && (
                  <div className="mt-2 text-center">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[11px] text-emerald-400 hover:text-emerald-300 font-mono inline-flex items-center gap-1 underline underline-offset-2 transition-colors cursor-pointer"
                    >
                      <Upload className="w-3 h-3" />
                      Click here to select & display your exact photo
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
