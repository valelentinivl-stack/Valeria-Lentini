
import React from 'react';

/**
 * FamilySection Component
 * Highlights the emotional connection between cooking, roots, and digital exploration.
 * Reverted to stable version without AI experiments.
 */
const FamilySection: React.FC = () => {
  const dishes = [
    { url: 'https://i.imgur.com/sNHFXH9.jpeg', alt: 'Piatto curato' },
    { url: 'https://i.imgur.com/GPrk6VY.jpeg', alt: 'Dettaglio gourmet' },
    { url: 'https://i.imgur.com/Goq05hv.jpeg', alt: 'Tradizione siciliana' },
    { url: 'https://i.imgur.com/vtRWkKV.jpeg', alt: 'Composizione artistica' },
    { url: 'https://i.imgur.com/VxAWHAN.jpeg', alt: 'Estetica del gusto' },
    { url: 'https://i.imgur.com/6BWOXZ6.jpeg', alt: 'Passione nel piatto' },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6] border-t border-[#EADDCA]/30 font-serif">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Part 1: Final Portrait & Closing Message */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl text-[#3E2723] mb-8 leading-tight font-bold uppercase tracking-tight">
              Famiglia, Cucina e Sorriso
            </h2>
            <p className="text-[#5D4037] leading-relaxed text-lg md:text-xl italic mb-8 max-w-xl mx-auto lg:mx-0">
              "La cucina è la mia passione più profonda: nata come rifugio nei momenti difficili, 
              è diventata il mio modo di esprimere creatività, cura e amore. Oggi porto in ogni piatto 
              le radici della mia Sicilia, l’ispirazione dei miei viaggi e il calore di chi si siede a tavola con me."
            </p>
            <div className="h-px w-32 bg-[#D2B48C] mx-auto lg:mx-0"></div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 border border-[#EADDCA] -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                <img 
                  src="https://i.imgur.com/LwzkLND.jpeg" 
                  alt="Valeria Lentini sorridente con un suo piatto" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Dishes Grid */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl text-[#3E2723] mb-4 font-bold uppercase tracking-widest opacity-80">Creazioni dalla mia cucina</h2>
            <div className="h-px w-12 bg-[#D2B48C] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {dishes.map((dish, index) => (
              <div key={index} className="group overflow-hidden bg-white shadow-sm transition-all duration-500 hover:shadow-2xl">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={dish.url} 
                    alt={dish.alt} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FamilySection;
