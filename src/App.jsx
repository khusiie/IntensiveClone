import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import StatsSection from './components/StatsSection';
import CareerSteps from './components/CareerSteps';
import RecognitionSlider from './components/RecognitionSlider';
import PricingSection from './components/PricingSection';
import FAQ from './components/FAQ';
import LearnerExperiences from './components/LearnerExperiences';
import MediaSection from './components/MediaSection';
import WhyJoinSection from './components/WhyJoinSection';
import CertificateSection from './components/CertificateSection';
import TopCompaniesSection from './components/TopCompaniesSection';
import CompanyLogosSlider from './components/CompanyLogosSlider';
import ProfessionalsGridSection from './components/ProfessionalsGridSection';
import DoubtClarification from './components/DoubtClarification';
import SeniorsPlacedSection from './components/SeniorsPlacedSection';
import TrainersAlumniSection from './components/TrainersAlumniSection';
import IntensiveUpgradesSection from './components/IntensiveUpgradesSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <IntensiveUpgradesSection />
        <TrustSection />
        <StatsSection />
        <CareerSteps />
        <TrainersAlumniSection />
        <SeniorsPlacedSection />
        <DoubtClarification />
        <ProfessionalsGridSection />
        <CompanyLogosSlider />
        <TopCompaniesSection />
        <CertificateSection />
        <WhyJoinSection />
        <RecognitionSlider />
        <PricingSection />
        <FAQ />
        <LearnerExperiences />
        <MediaSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
