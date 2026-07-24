import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" /> Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
            Let's Build <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Next-Gen AI Systems</span> Together
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Open to AI Engineering roles, freelance collaborations, research projects, and technical discussions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glow-card p-6 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-white font-['Outfit'] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Contact Details</span>
              </h3>

              {/* Email Item */}
              <div className="p-4 rounded-xl bg-[#121624] border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-bold text-white hover:text-emerald-400 transition-colors truncate block">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Item */}
              <div className="p-4 rounded-xl bg-[#121624] border border-white/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">Phone Number</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs font-bold text-white hover:text-emerald-400 transition-colors truncate block">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Item */}
              <div className="p-4 rounded-xl bg-[#121624] border border-white/5 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                  <span className="text-xs font-bold text-white">{PERSONAL_INFO.location}</span>
                </div>
              </div>

            </div>

            {/* Social Links Card */}
            <div className="p-6 rounded-2xl bg-[#121624] border border-white/5 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Online Profiles & Portfolios
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-200 text-xs font-mono font-semibold flex items-center gap-2.5 transition-all"
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 text-slate-200 text-xs font-mono font-semibold flex items-center gap-2.5 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-teal-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="glow-card p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-white font-['Outfit']">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white font-['Outfit']">
                    Thank you for reaching out!
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                    Your message has been logged. Navadeep will review your message and reply back shortly via email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-300">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#121624] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-semibold text-slate-300">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#121624] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="AI Engineering Project Opportunity / Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#121624] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-semibold text-slate-300">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Navadeep, I reviewed your AI portfolio and would like to connect regarding..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#121624] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Send Message to Navadeep</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
