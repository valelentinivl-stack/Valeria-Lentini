import React from 'react';

const TravelSection: React.FC = () => {
  const kitchenImages = [
    { url: 'https://i.imgur.com/th9N4Oc.jpeg', alt: 'Cucina e Rinascita 1' },
    { url: 'https://i.imgur.com/I9Ed38h.jpeg', alt: 'Cucina e Rinascita 2' },
    { url: 'https://i.imgur.com/eyXdLVL.jpeg', alt: 'Cucina e Rinascita 3' },
    { url: 'https://i.imgur.com/IbSgaFj.jpeg', alt: 'Cucina e Rinascita 4' },
    { url: 'https://i.imgur.com/Fv8D5t3.jpeg', alt: 'Cucina e Rinascita 5' },
    { url: 'https://i.imgur.com/gUhBDM9.jpeg', alt: 'Cucina e Rinascita 6' },
    { url: 'https://i.imgur.com/TKrVTip.jpeg', alt: 'Cucina e Rinascita 7' },
    { url: 'https://i.imgur.com/KO4su4v.jpeg', alt: 'Cucina e Rinascita 8' },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#F2E9E1] border-t border-[#EADDCA]/30 overflow-hidden font-serif" id="cucina">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl text-[#3E2723] mb-6 font-bold uppercase tracking-tight">
              Cucina e Rinascita
            </h2>
            <div className="h-px w-16 bg-[#D2B48C] mb-8"></div>
            <div className="text-[#5D4037] leading-relaxed text-lg md:text-xl opacity-90 space-y-6">
              <p>La cucina non è solo una passione, è stata la mia rinascita. Nei momenti più difficili, tra ansia e attacchi di panico, cucinare è diventato il mio modo per ritrovare equilibrio, concentrazione e calma.</p>
              <p>Ogni piatto nasce da un gesto consapevole, da un respiro più profondo, dalla volontà di trasformare emozioni complesse in qualcosa di armonioso e concreto.</p>
              <p>La cucina mi ha insegnato resilienza, presenza e forza interiore. È il luogo in cui mi ricostruisco, ogni volta.</p>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="gallery-container flex overflow-x-auto pb-8 space-x-6 cursor-grab active:cursor-grabbing scroll-smooth">
              {kitchenImages.map((img, index) => (
                <div key={index} className="flex-none w-[280px] md:w-[350px] group relative overflow-hidden shadow-lg bg-[#EADDCA]/20">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={img.url} alt={img.alt} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                  </div>
                </div>
              ))}
              <div className="flex-none w-1 md:w-8"></div>
            </div>
            <div className="flex items-center justify-end mt-4 space-x-2 text-[10px] uppercase tracking-widest text-[#8B735B]">
              <span>Scorri per esplorare</span>
              <div className="w-12 h-px bg-[#D2B48C]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;