import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

const RecipeBot: React.FC = () => {
  const [input, setInput] = useState('');
  const [recipeText, setRecipeText] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = input.trim();
    if (!query) return;
    setIsLoading(true);
    setError(null);
    setRecipeText(null);
    try {
      // Prova a leggere la chiave da diverse possibili variabili (Vite standard o fallback process.env)
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (process.env as any).API_KEY;
      
      if (!apiKey) {
        throw new Error("Chiave API non trovata. Assicurati di aver aggiunto VITE_GEMINI_API_KEY (o API_KEY) nelle Environment Variables di Vercel.");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-flash-latest',
        contents: [{ role: 'user', parts: [{ text: query }] }],
        config: {
          systemInstruction: `Agisci come uno chef italiano esperto. Crea una ricetta originale basata sugli ingredienti forniti dall'utente.
          Regole:
          - Gli ingredienti forniti devono essere protagonisti.
          - Puoi integrare solo ingredienti base comuni (olio, sale, pepe, acqua, farina, aglio, cipolla, burro).
          - Non inventare ingredienti principali non richiesti.
          - La ricetta deve essere realistica e cucinabile davvero.
          - Se l'input è molto breve, espandilo in una proposta interessante.
          Struttura della risposta (OBBLIGATORIA):
          🍽 [Titolo creativo]
          🛒 Ingredienti:
          - [elenco puntato preciso con quantità indicative]
          👨‍🍳 Procedimento:
          [Passaggi numerati chiari e dettagliati]
          Rispondi SOLO con la ricetta seguendo esattamente questo formato. Non aggiungere commenti esterni o introduzioni.`,
          temperature: 0.8,
        },
      });
      
      const text = response.text;
      if (text) {
        setRecipeText(text);
      } else {
        throw new Error("Il modello non ha restituito alcun testo. Riprova.");
      }
    } catch (err: any) {
      console.error("Errore Generazione:", err);
      // Mostriamo l'errore specifico per aiutare il debug
      setError(err?.message || "Ops! Sembra che i fornelli facciano i capricci. Riprova tra un momento.");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#F2E9E1] border-t border-[#EADDCA]/30 font-serif overflow-hidden" id="cucina-con-me">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl text-[#3E2723] mb-6 font-bold uppercase tracking-tight">
            Cucina con me
          </h2>
          <div className="h-px w-16 bg-[#D2B48C] mx-auto mb-8"></div>
          <p className="text-[#5D4037] leading-relaxed text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Dimmi cosa hai in frigo o cosa ti stuzzica, e io creerò per te una ricetta originale, raccontata con la mia passione e i segreti della tradizione.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-md p-8 md:p-12 shadow-xl border border-white/20 rounded-sm relative">
          <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4 mb-10">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} disabled={isLoading} placeholder="Esempio: pistacchi, limone e gamberi..." className="flex-grow px-6 py-4 bg-[#F2E9E1]/60 border border-[#D2B48C]/30 focus:border-[#3E2723] outline-none text-[#3E2723] placeholder-[#A6907C] transition-all duration-300 rounded-sm text-lg disabled:opacity-50" />
            <button type="submit" disabled={isLoading} className="px-8 py-4 bg-[#3E2723] text-[#F2E9E1] uppercase tracking-[0.2em] text-sm font-bold hover:bg-[#5D4037] transition-all duration-300 shadow-lg active:scale-95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? 'Cucinando...' : 'Crea Ricetta'}
            </button>
          </form>
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-pulse">
              <div className="w-12 h-12 border-4 border-[#D2B48C] border-t-[#3E2723] rounded-full animate-spin"></div>
              <p className="text-[#8B735B] italic">Sto pensando a come esaltare i tuoi ingredienti...</p>
            </div>
          )}
          {error && <div className="p-6 bg-red-50 border-l-4 border-red-300 text-red-700 mb-6 font-sans text-sm">{error}</div>}
          <div ref={resultRef} className={`transition-all duration-700 ease-in-out overflow-hidden ${recipeText ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-8 border-l-4 border-[#D2B48C] bg-white/50 shadow-inner">
              <div className="text-[#3E2723] leading-relaxed whitespace-pre-wrap text-lg md:text-xl italic font-medium">{recipeText}</div>
              <div className="mt-12 flex items-center justify-between border-t border-[#D2B48C]/20 pt-6">
                <div className="flex items-center space-x-3 text-[10px] uppercase tracking-widest text-[#8B735B]">
                  <span className="font-bold">Dalla cucina di Valeria</span>
                  <div className="w-8 h-px bg-[#D2B48C]"></div>
                </div>
                <button onClick={() => window.print()} className="text-[10px] uppercase tracking-widest text-[#3E2723] hover:underline">Salva Ricetta</button>
              </div>
            </div>
          </div>
          {!recipeText && !isLoading && !error && (
            <div className="text-center text-[#A6907C] text-sm italic opacity-60">Scrivi i tuoi ingredienti e lasciati ispirare...</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecipeBot;