import React from 'react';

const DigitalSection: React.FC = () => {
  const digitalMedia = [
    { type: 'image', url: 'https://i.imgur.com/OU2nY96.jpeg', alt: 'Creatività Digitale 1' },
    { type: 'video', url: 'https://i.imgur.com/oHWVWBX.mp4', alt: 'Video AI 1' },
    { type: 'image', url: 'https://i.imgur.com/2LQYZC6.jpeg', alt: 'Creatività Digitale 2' },
    { type: 'video', url: 'https://i.imgur.com/tD68Vp9.mp4', alt: 'Video AI 2' },
    { type: 'image', url: 'https://i.imgur.com/qqDRTpG.jpeg', alt: 'Creatività Digitale 3' },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#F2E9E1] border-t border-[#EADDCA]/30 overflow-hidden font-serif" id="digital">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="w-full lg:w-2/3 order-1 lg:order-1">
            <div className="gallery-container flex overflow-x-auto pb-8 space-x-6 cursor-grab active:cursor-grabbing scroll-smooth">
              {digitalMedia.map((item, index) => (
                <div key={index} className="flex-none w-[280px] md:w-[350px] group relative overflow-hidden shadow-lg bg-[#EADDCA]/20">
                  <div className="aspect-[3/4] overflow-hidden flex items-center justify-center">
                    {item.type === 'video' ? (
                      <video controls src={item.url} className="w-full h-full object-cover transition-all duration-700">Il tuo browser non supporta il tag video.</video>
                    ) : (
                      <img src={item.url} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                    )}
                  </div>
                </div>
              ))}
              <div className="flex-none w-1 md:w-8"></div>
            </div>
            <div className="flex items-center justify-start mt-4 space-x-2 text-[10px] uppercase tracking-widest text-[#8B735B]">
              <div className="w-12 h-px bg-[#D2B48C]"></div>
              <span>Esplora i progetti</span>
            </div>
          </div>
          <div className="w-full lg:w-1/3 order-2 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl text-[#3E2723] mb-6 font-bold uppercase tracking-tight">
              Creatività e Tecnologia
            </h2>
            <div className="h-px w-16 bg-[#D2B48C] mb-8 mx-auto lg:mx-0"></div>
            <div className="text-[#5D4037] leading-relaxed text-lg md:text-xl opacity-90 space-y-4">
              <p>La mia passione per la creatività non si ferma alla cucina.</p>
              <p>Oggi esploro il mondo del copywriting e dell’intelligenza artificiale, unendo strategia, linguaggio e tecnologia per creare contenuti autentici e performanti.</p>
              <p>Studio, sperimento e realizzo progetti digitali che trasformano idee in comunicazione efficace, con un approccio umano e innovativo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalSection;