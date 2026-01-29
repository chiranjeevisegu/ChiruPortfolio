'use client';

import { useState, useRef } from 'react';
import HeroSection from '@/components/HeroSection';

import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import PublicationsSection from '@/components/PublicationsSection';
import EducationSection from '@/components/EducationSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackgroundBeams from '@/components/BackgroundBeams';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isAboutFlipped, setIsAboutFlipped] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    setHasEntered(true);
  };

  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Floating Chat Button (Visible only after entry) */}
      {hasEntered && <Navbar />}
      {hasEntered && <Logo />}



      {
        !hasEntered ? (
          <HeroSection onEnter={handleEnter} />
        ) : (
          <div ref={scrollRef} className="animate-in fade-in duration-1000 w-full overflow-y-auto max-h-screen scroll-smooth md:snap-y md:snap-mandatory bg-transparent relative">
            <ScrollProgress containerRef={scrollRef} />
            <BackgroundBeams />
            <div className="snap-start" id="about">
              <AboutSection isFlipped={isAboutFlipped} onFlip={() => setIsAboutFlipped(!isAboutFlipped)} />
            </div>
            <div className="snap-start" id="education">
              <EducationSection />
            </div>
            <div className="snap-start" id="experience">
              <ExperienceSection />
            </div>
            <div className="snap-start" id="projects">
              <ProjectsSection />
            </div>
            <div className="snap-start" id="skills">
              <SkillsSection />
            </div>
            <div className="snap-start" id="publications">
              <PublicationsSection />
            </div>
            <div className="snap-start" id="achievements">
              <AchievementsSection />
            </div>
            <div className="snap-start" id="contact">
              <ContactSection />
            </div>
            <div className="snap-start">
              <Footer />
            </div>
          </div>
        )
      }
    </main >
  );
}
