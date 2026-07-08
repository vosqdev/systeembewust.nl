import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { Language, translations } from '../i18n';

// Lazy initialize Gemini API
let aiClient: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!aiClient) {
    // Check both import.meta.env (for Netlify/Vite) and process.env (for AI Studio)
    const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY : undefined);
    if (!apiKey) {
      console.error('GEMINI_API_KEY or VITE_GEMINI_API_KEY is not set. AI Assistant will not work.');
      return null;
    }
    try {
      aiClient = new GoogleGenAI({ apiKey });
    } catch (e) {
      console.error('Failed to initialize Gemini API:', e);
      return null;
    }
  }
  return aiClient;
};

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  lang: Language;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];

  const systemInstruction = `
Je bent een AI-assistent voor VOVON, gespecialiseerd in "netbewuste gebiedsontwikkeling" (grid-aware area development).
Je helpt gebruikers de functionaliteit van deze website te begrijpen en geeft informatie over hoe VOVON projecten aanpakt.

Belangrijke context over VOVON en netbewuste gebiedsontwikkeling:
- Probleem: Netcongestie remt woningbouw en economie. 87% van de Nederlandse netgebieden heeft transportschaarste.
- Oplossing: Netbewust ontwerpen van de grond af. Energie-infrastructuur en gebiedsontwikkeling integreren vóórdat de eerste paal de grond in gaat.
- De Bandstad: Een nieuw netwerk van regio's rondom de Randstad (Flevoland, Zwolle, Arnhem-Nijmegen, Brabant) waar ruimte, energie en groei samenkomen.
- Werkwijze (4 stappen): 
  1. Quickscan Grip op Locatie (analyse, haalbaarheidsmatrix)
  2. Netintegratieplan (ruimtelijk ontwerp, opwek, opslag, distributie)
  3. Stakeholderregie (gemeente, ontwikkelaars, netbeheerders)
  4. Procesregie (EMS-configuraties, Netzero2050)
- Gereedschapskist (Instrumenten):
  - BESS (Batterijopslag)
  - PV + Laadinfra (Solar Parking)
  - Energy Management (AI-gestuurd)
  - Energiegemeenschap (CEC, Energiewet 2024)
  - Dynamische Netaansluiting
  - Faseringsmodel
  - Kwartierdata (onmisbaar voor inzicht in energieverbruik en peak shaving in de infrastructuur)

Jouw doel is om vragen van bezoekers te beantwoorden over deze onderwerpen (netcongestie, energie hubs, kwartierdata), de visie van VOVON uit te leggen, en ze te enthousiasmeren voor een Quickscan.
Wees professioneel, behulpzaam, en gebruik duidelijke taal. Als de gebruiker in het Engels spreekt, antwoord dan in het Engels. Als de gebruiker in het Nederlands spreekt, antwoord dan in het Nederlands.
Huidige taal van de website: ${lang === 'nl' ? 'Nederlands' : 'Engels'}.
`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Add initial greeting when opened for the first time
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: lang === 'nl' 
            ? 'Hallo! Ik ben de VOVON AI-assistent. Ik kan je alles vertellen over netbewuste gebiedsontwikkeling, onze werkwijze, of de instrumenten die we inzetten. Hoe kan ik je helpen?'
            : 'Hello! I am the VOVON AI assistant. I can tell you all about grid-aware area development, our approach, or the tools we use. How can I help you?'
        }
      ]);
    }
  }, [isOpen, messages.length, lang]);

  const suggestedQuestions = lang === 'nl' ? [
    "Wat houdt een Quickscan Grip op Locatie in?",
    "Hoe helpt batterijopslag (BESS) bij netcongestie?",
    "Wat is de Bandstad visie?"
  ] : [
    "What does a Location Grip Quickscan entail?",
    "How does battery storage (BESS) help with grid congestion?",
    "What is the Bandstad vision?"
  ];

  const handleSuggestedClick = (question: string) => {
    setInput(question);
    // We can't directly call handleSubmit because it expects an event,
    // so we'll just set a flag or call a separate submit function.
    submitMessage(question);
  };

  const submitMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = getAIClient();
      if (!ai) {
        throw new Error('AI Client not initialized. Please check your API key.');
      }

      const chatHistory = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const assistantMessage = response.text || (lang === 'nl' ? 'Sorry, ik kon geen antwoord genereren.' : 'Sorry, I could not generate a response.');
      
      setMessages((prev) => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error: any) {
      console.error('Error calling Gemini API:', error);
      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: lang === 'nl' 
          ? `Er is een fout opgetreden bij het verbinden met de AI: ${error.message || 'Onbekende fout'}` 
          : `An error occurred while connecting to the AI: ${error.message || 'Unknown error'}` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    submitMessage(input);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-accent text-white shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open AI Assistant"
      >
        <Sparkles className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-paper border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-paper/50 backdrop-blur-md flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-sm">VOVON AI</h3>
                  <p className="text-xs text-white/50">
                    {lang === 'nl' ? 'Netbewuste expert' : 'Grid-aware expert'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-accent text-white rounded-tr-sm'
                        : 'bg-white/5 text-white/90 rounded-tl-sm border border-white/5'
                    }`}
                  >
                    {msg.role === 'assistant' ? (
                      <div className="markdown-body prose prose-invert prose-sm max-w-none">
                        <Markdown>{msg.content}</Markdown>
                      </div>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 p-3 rounded-2xl rounded-tl-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-accent animate-spin" />
                    <span className="text-xs text-white/50">
                      {lang === 'nl' ? 'Aan het typen...' : 'Typing...'}
                    </span>
                  </div>
                </div>
              )}
              
              {/* Suggested Questions */}
              {messages.length === 1 && !isLoading && (
                <div className="flex flex-col gap-2 mt-4">
                  <p className="text-xs text-white/50 px-1">
                    {lang === 'nl' ? 'Veelgestelde vragen:' : 'Frequently asked questions:'}
                  </p>
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => handleSuggestedClick(q)}
                      className="text-left text-sm p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/50 text-white/90 transition-all duration-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-paper/50 backdrop-blur-md">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={lang === 'nl' ? 'Stel een vraag...' : 'Ask a question...'}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/50 transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 text-accent hover:text-accent/80 disabled:opacity-50 disabled:hover:text-accent transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
