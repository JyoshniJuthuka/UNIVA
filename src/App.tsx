import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import HowItWorksSection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import InteractiveDemoSection from './components/InteractiveDemoSection';
import RoadmapSection from './components/RoadmapSection';
import OpportunityHubSection from './components/OpportunityHubSection';
import WhyUnivaSection from './components/WhyUnivaSection';
import UserJourneySection from './components/UserJourneySection';
import AboutSection from './components/AboutSection';
import FinalCTASection from './components/FinalCTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900 font-sans">
      {/* Sticky Navigation */}
      <Navbar onOpenDemo={() => scrollToSection('demo')} />

      <main className="flex-1">
        {/* Hero Section with interactive console mockup */}
        <HeroSection
          onDiscoverClick={() => scrollToSection('demo')}
          onHowItWorksClick={() => scrollToSection('how-it-works')}
          onSelectNextStep={() => scrollToSection('roadmap')}
        />

        {/* The Student Problem */}
        <ProblemSection onLearnMoreClick={() => scrollToSection('how-it-works')} />

        {/* How It Works (4-Step Process) */}
        <HowItWorksSection onTryInteractiveDemo={() => scrollToSection('demo')} />

        {/* Features (6 Premium Cards) */}
        <FeaturesSection
          onFeatureSelect={(index) => {
            if (index === 0 || index === 1) scrollToSection('demo');
            else if (index === 2 || index === 3 || index === 5) scrollToSection('roadmap');
            else scrollToSection('opportunities');
          }}
        />

        {/* Interactive Career Discovery Simulation ("Try UNIVA") */}
        <InteractiveDemoSection
          onExploreFullRoadmap={() => scrollToSection('roadmap')}
          onExploreOpportunities={() => scrollToSection('opportunities')}
        />

        {/* Interactive Learning Roadmap */}
        <RoadmapSection
          onApplySkillFilter={() => scrollToSection('opportunities')}
        />

        {/* Opportunity Hub Dashboard */}
        <OpportunityHubSection />

        {/* Why UNIVA (4 Benefit Cards) */}
        <WhyUnivaSection />

        {/* User Journey Arc */}
        <UserJourneySection />

        {/* About Venture (Wadhwani Foundation Project Context) */}
        <AboutSection />

        {/* Final Call to Action */}
        <FinalCTASection
          onStartJourney={() => scrollToSection('demo')}
          onRequestDemo={() => scrollToSection('contact')}
        />

        {/* Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
