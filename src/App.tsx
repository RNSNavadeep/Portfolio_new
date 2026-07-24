import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SummaryHighlights } from './components/SummaryHighlights';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0d14] text-slate-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} activeSection={activeSection} />

      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Professional Background Summary */}
        <SummaryHighlights />

        {/* Skills Architecture */}
        <SkillsSection />

        {/* Work Experience Timeline */}
        <ExperienceSection />

        {/* Featured Projects Showcase */}
        <ProjectsShowcase />

        {/* Education, CGPA & Certifications */}
        <EducationCertifications />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pop-Up Modals */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

    </div>
  );
}
