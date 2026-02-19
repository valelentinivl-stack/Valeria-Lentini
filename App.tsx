
import React from 'react';
import Hero from './components/Hero';
import TravelSection from './components/TravelSection';
import FamilySection from './components/FamilySection';
import RecipeBot from './components/RecipeBot';
import DigitalSection from './components/DigitalSection';
import ContactSection from './components/ContactSection';

/**
 * App Component
 * Serving as the primary layout container for Valeria Lentini's portfolio.
 */
const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-[#EADDCA] selection:text-[#5D4037] font-serif bg-[#F2E9E1]">
      <main className="relative z-10">
        <Hero />
        <TravelSection />
        <FamilySection />
        <RecipeBot />
        <DigitalSection />
        <ContactSection />
      </main>

      {/* Footer with Copyright */}
      <footer className="relative z-10 py-12 bg-[#F2E9E1] flex flex-col items-center border-t border-[#EADDCA]/30">
        <div className="text-[10px] tracking-[0.2em] uppercase text-[#8B735B]">
          © {new Date().getFullYear()} Valeria Lentini — Tradizione e Passione
        </div>
      </footer>
    </div>
  );
};

export default App;
