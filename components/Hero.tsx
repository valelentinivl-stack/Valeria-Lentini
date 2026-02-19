import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-0 overflow-hidden font-serif bg-[#F2E9E1]">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#D2B48C] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-[#EADDCA] rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 flex flex-col justify-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#3E2723] leading-tight mb-4 font-bold uppercase tracking-tighter relative inline-block">
              Cuoca e aspirante digital creator
            </h1>
            <p className="italic text-xl md:text-2xl text-[#8B735B] mb-8 leading-relaxed max-w-md">
              "Cresciuta nella tradizione siciliana, guidata dalla passione"
            </p>
            <div className="h-px w-24 bg-[#D2B48C] mb-8"></div>
            <div className="text-[#5D4037] leading-relaxed text-lg md:text-xl max-w-xl space-y-6">
              <p>Sono cresciuta a Noto, nel cuore della Sicilia, con la passione per la cucina e la curiosità per il mondo digitale. Sto esplorando il digitale con progetti creativi realizzati con AI, unendo creatività, comunicazione e tecnologia al mio percorso professionale.</p>
              <p>La cucina rimane la mia passione più profonda: nata come rifugio nei momenti difficili, è diventata il mio modo di esprimere cura e amore.</p>
              <p>Amo viaggiare, scoprire culture e sapori nuovi, e portare con me ogni esperienza come ispirazione.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative animate-fade-in">
            <div className="relative z-20 group">
              <div className="absolute -inset-4 border border-[#D2B48C]/40 -z-10 transition-transform duration-700 group-hover:scale-105"></div>
              <div className="aspect-[4/5] overflow-hidden shadow-2xl bg-[#EADDCA]/20">
                <img src="https://i.imgur.com/nlaneIC.jpeg" alt="Valeria Lentini" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;