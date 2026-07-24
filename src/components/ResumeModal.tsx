import React from 'react';
import { X, Download, Printer, Copy, Check, FileText, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_ITEMS, PROJECTS_ITEMS, EDUCATION_ITEMS, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}\nPhone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}\nGitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}\n\nSUMMARY:\n${PERSONAL_INFO.summary}\n\nEXPERIENCE:\nElevate Labs - AI Engineer Intern (Jun 2026 - Present)\n- Developed and deployed real-world AI applications using PyTorch, Scikit-learn, Rasa, NLTK, Streamlit.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0e121e] border border-white/15 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Actions Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 bg-[#121727] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-['Outfit']">
                {PERSONAL_INFO.name}'s Resume
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Official Resume • B.Tech IT & AI Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-medium flex items-center gap-1.5 transition-colors"
              title="Copy Resume Plain Text"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print:p-0">
          
          {/* Resume Name Header */}
          <div className="text-center pb-6 border-b-2 border-slate-900 space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-bold text-slate-700 font-mono">
              {PERSONAL_INFO.title}
            </p>
            <div className="pt-2 text-xs font-mono text-slate-600 flex flex-wrap justify-center gap-x-4 gap-y-1">
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="underline text-blue-800">{PERSONAL_INFO.email}</a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="underline text-blue-800">{PERSONAL_INFO.linkedinHandle}</a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="underline text-blue-800">{PERSONAL_INFO.githubHandle}</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-4 border-b border-slate-300">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Skills */}
          <div className="py-4 border-b border-slate-300">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-400 mb-2">
              Skills
            </h2>
            <div className="text-xs text-slate-800 space-y-1 font-mono">
              <div><strong className="text-slate-900 font-sans font-bold">Languages:</strong> C, Python, Java, JavaScript, SQL</div>
              <div><strong className="text-slate-900 font-sans font-bold">Frameworks:</strong> Scikit-learn, PyTorch, Rasa Framework, NLTK</div>
              <div><strong className="text-slate-900 font-sans font-bold">Backend:</strong> Django, RESTful APIs</div>
              <div><strong className="text-slate-900 font-sans font-bold">Databases:</strong> MySQL</div>
              <div><strong className="text-slate-900 font-sans font-bold">DevOps / Cloud:</strong> Git, GitHub Actions, Streamlit, Joblib</div>
              <div><strong className="text-slate-900 font-sans font-bold">Concepts:</strong> OOPS, DSA, Deep Learning, Natural Language Processing, Voice Speech Processing</div>
            </div>
          </div>

          {/* Experience & Projects */}
          <div className="py-4 border-b border-slate-300">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-400 mb-3">
              Technical Experience & Projects
            </h2>

            <div className="space-y-4">
              {EXPERIENCE_ITEMS.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-900">
                    <span>{exp.role} — <span className="italic font-normal">{exp.company}</span></span>
                    <span className="font-mono text-slate-700">{exp.period} | {exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-800 space-y-1 pl-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {PROJECTS_ITEMS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-900">
                    <span>{proj.title} <span className="font-normal italic text-slate-600">({proj.techStack.join(', ')})</span></span>
                    <span className="font-mono text-slate-700">Personal Project</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-800 space-y-1 pl-1">
                    {proj.keyFeatures.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="py-4 border-b border-slate-300">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-400 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_ITEMS.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-900">
                    <span>{edu.degree} — <span className="italic font-normal">{edu.institution}</span></span>
                    <span className="font-mono text-slate-700">{edu.period} | {edu.location}</span>
                  </div>
                  {edu.score && <div className="text-xs font-semibold text-slate-700">{edu.score}</div>}
                  {edu.coursework && (
                    <div className="text-xs text-slate-700">
                      <strong>Relevant Coursework:</strong> {edu.coursework.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="pt-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 pb-1 border-b border-slate-400 mb-2">
              Certifications & Achievements
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-800 space-y-1 pl-1">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx}>
                  <strong>{cert.title}</strong> ({cert.issuer})
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
