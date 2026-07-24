import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Terminal, Mail, User, Code2, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Terminal },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0d14]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0d101a] rounded-[11px] flex items-center justify-center font-bold text-emerald-400 font-['Outfit'] text-lg">
                NS
              </div>
            </div>
            <div>
              <span className="font-['Outfit'] font-bold text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Navadeep Sai
              </span>
              <span className="block text-[11px] text-emerald-400/80 font-mono tracking-wider font-medium uppercase">
                AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#121622]/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-sm shadow-emerald-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-md shadow-emerald-500/20 flex items-center gap-1.5"
            >
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile menu trigger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d101a]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 flex items-center gap-3 transition-colors"
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
