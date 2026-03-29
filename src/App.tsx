import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BatteryCharging, Sun, BrainCircuit, Users, PlugZap, BarChart3 } from 'lucide-react';

const SectionLabel = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8 backdrop-blur-sm ${className}`}>
    {children}
  </div>
);

const AccordionItem = ({ title, content, isOpen, onClick }: { title: string, content: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div 
      className={`border border-white/10 rounded-2xl bg-card overflow-hidden transition-all duration-300 hover:border-accent/50 ${isOpen ? 'border-accent/50 shadow-[0_0_30px_rgba(0,200,160,0.1)]' : ''}`}
    >
      <div 
        className="px-7 py-6 flex justify-between items-center cursor-pointer select-none"
        onClick={onClick}
      >
        <h3 className="font-display text-lg font-bold tracking-tight text-white">{title}</h3>
        <div className={`text-2xl text-accent transition-transform duration-300 font-sans leading-none ${isOpen ? 'rotate-45' : ''}`}>
          +
        </div>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-400 ease-in-out px-7 text-[15px] leading-[1.75] text-white/70 ${isOpen ? 'max-h-[300px] pb-6' : 'max-h-0'}`}
      >
        {content}
      </div>
    </div>
  );
};

const NetCard = ({ label, value, sub, colorClass, fillWidth }: { label: string, value: string, sub: React.ReactNode, colorClass?: string, fillWidth?: string }) => {
  let afterColor = "after:bg-accent";
  let valueColor = "text-white"; 
  
  if (colorClass === "amber") {
    afterColor = "after:bg-amber";
    valueColor = "text-amber";
  } else if (colorClass === "red") {
    afterColor = "after:bg-red";
    valueColor = "text-red";
  } else if (colorClass === "green") {
    valueColor = "text-accent";
  } else if (colorClass === "blue") {
    valueColor = "text-blue";
  }

  return (
    <div className={`bg-card border border-white/10 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-white/20 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[3px] ${afterColor}`}>
      <div className="text-xs font-medium uppercase tracking-wider text-white/50 mb-4">{label}</div>
      <div className={`font-display font-bold text-[48px] tracking-tight leading-none mb-3 ${valueColor}`}>{value}</div>
      <div className="text-[15px] text-white/70 leading-[1.6]">{sub}</div>
      {fillWidth && (
        <div className="mt-6 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: fillWidth }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full rounded-full ${colorClass === 'red' ? 'bg-red' : colorClass === 'amber' ? 'bg-amber' : 'bg-accent'}`}
          />
        </div>
      )}
    </div>
  );
};

const Step = ({ num, title, desc, tag }: { num: string, title: string, desc: string, tag: string }) => (
  <div className="border border-white/10 rounded-3xl p-10 relative bg-card transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
    <div className="font-display font-bold text-[64px] tracking-tighter leading-none text-white/10 mb-6">{num}</div>
    <h3 className="font-display text-xl font-bold mb-4 tracking-tight text-white">{title}</h3>
    <p className="text-[15px] leading-[1.7] text-white/70">{desc}</p>
    <div className="inline-block mt-6 text-xs font-medium tracking-wide py-1.5 px-3 rounded-full border border-white/10 text-white/60 bg-white/5">
      {tag}
    </div>
  </div>
);

const ToolPill = ({ icon, title, desc, badge }: { icon: React.ReactNode, title: string, desc: string, badge: string }) => (
  <div className="border border-white/10 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:border-accent/50 hover:bg-white/5 cursor-default group">
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-2 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <div className="font-display text-lg font-bold tracking-tight text-white">{title}</div>
    <div className="text-[14px] leading-[1.7] text-white/70">{desc}</div>
    <div className="text-xs font-medium tracking-wide py-1.5 px-3 rounded-full bg-accent/10 text-accent self-start mt-auto">
      {badge}
    </div>
  </div>
);

const ProjectRow = ({ num, name, loc, status, statusColor }: { num: string, name: string, loc: string, status: string, statusColor: string }) => {
  let dotColor = "bg-accent";
  if (statusColor === "amber") dotColor = "bg-amber";
  if (statusColor === "blue") dotColor = "bg-blue";

  return (
    <a href="#" className="group grid grid-cols-1 md:grid-cols-[80px_2fr_1fr_1fr_40px] items-center gap-4 md:gap-8 py-6 px-8 mb-3 rounded-2xl border border-white/10 bg-card cursor-pointer transition-all duration-300 hover:border-accent/50 hover:bg-white/5 no-underline text-inherit">
      <div className="hidden md:block font-display text-sm font-bold text-white/30">{num}</div>
      <div className="font-display text-lg font-bold tracking-tight text-white">{name}</div>
      <div className="text-[15px] text-white/70">{loc}</div>
      <div className="flex items-center gap-2 text-sm font-medium text-white/90">
        <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
        {status}
      </div>
      <div className="text-xl text-right transition-transform duration-300 text-white/30 group-hover:translate-x-2 group-hover:text-accent hidden md:block">→</div>
    </a>
  );
};

const LegalView = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-screen pt-32 pb-20 px-5 md:px-10 max-w-[800px] mx-auto z-10 relative bg-paper text-white">
    <button onClick={onBack} className="mb-12 font-display text-sm font-bold tracking-wide text-white/50 hover:text-accent transition-colors flex items-center gap-2 cursor-pointer bg-transparent border-none p-0">
      ← Terug naar home
    </button>
    
    <div className="space-y-12 text-white/70 leading-[1.8] text-[15px]">
      <section>
        <h2 className="font-display text-2xl font-bold text-white mb-6">Privacyverklaring</h2>
        <p className="mb-4">Deze website verwerkt of bewaart geen persoonsgegevens.</p>
        <p className="mb-4">Via deze website worden geen persoonsgegevens verzameld, opgeslagen of geanalyseerd. Er worden geen formulieren gebruikt en er wordt geen gebruikersregistratie toegepast.</p>
        <p className="mb-4">Voor vragen, samenwerkingen of contact verwijzen wij naar de websites van de initiatiefnemers:<br/>
        <a href="https://www.vovon.nl" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.vovon.nl</a></p>
        <p>Wanneer u via deze websites contact opneemt, geldt het privacybeleid van de betreffende organisatie.</p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white mb-6">Cookiebeleid</h2>
        <p className="mb-4">Deze website maakt uitsluitend gebruik van functionele cookies die noodzakelijk zijn voor het goed functioneren van de website.</p>
        <p className="mb-4">Er worden geen marketingcookies, trackingcookies of persoonlijke data verzameld via deze website.</p>
        <p>Eventuele externe links naar andere websites kunnen hun eigen cookiebeleid hanteren. Wij adviseren u om de privacy- en cookieverklaringen van die websites te raadplegen.</p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-bold text-white mb-6">Disclaimer</h2>
        <p className="mb-4">De informatie op deze website wordt met zorg samengesteld door VOVON development. De inhoud van deze website is uitsluitend bedoeld voor algemene informatie. Aan de inhoud van deze website kunnen geen rechten worden ontleend.</p>
        <p className="mb-4">Concepten, tekeningen, visualisaties en projectbeschrijvingen die op deze website worden getoond zijn indicatief en kunnen gedurende het ontwikkelproces wijzigen.</p>
        <p className="mb-4">VOVON development aanvaardt geen aansprakelijkheid voor eventuele directe of indirecte schade die voortvloeit uit het gebruik van de informatie op deze website.</p>
        <p className="mb-4">Deze website kan verwijzingen bevatten naar externe websites van partners of betrokken organisaties. Wij hebben geen controle over de inhoud van deze externe websites en kunnen niet verantwoordelijk worden gehouden voor de inhoud daarvan.</p>
        <p>Alle teksten, beelden en concepten op deze website zijn beschermd door auteursrechten en intellectuele eigendomsrechten. Gebruik of reproductie zonder voorafgaande toestemming is niet toegestaan.</p>
      </section>
    </div>
  </div>
);

export default function App() {
  const [openAccordion, setOpenAccordion] = useState<number>(0);
  const [view, setView] = useState<'home' | 'legal'>('home');

  const accordions = [
    {
      title: "Wat is netbewuste gebiedsontwikkeling?",
      content: "Netbewuste gebiedsontwikkeling integreert de beschikbare netcapaciteit als randvoorwaarde in het ruimtelijk en programmatisch ontwerp. Denk aan fasering op basis van transportcapaciteit, clustering van functies voor gedeeld netgebruik, en opslag als buffer."
    },
    {
      title: "Waarom is dit nu urgent?",
      content: "In meer dan 87% van de Nederlandse netgebieden bestaat transportschaarste. Nieuwe aansluitingen worden geweigerd of uitgesteld met 5–10 jaar. Wie niet netbewust ontwerpt, riskeert stilstand van de bouw."
    },
    {
      title: "Welke partijen",
      content: "Gemeenten, woningcorporaties, netbeheerders (Liander, Stedin, Enexis), projectontwikkelaars en bouwers. Wij faciliteren de tafel en leveren de input voor samenwerking."
    },
    {
      title: "Hoe verhoudt dit zich tot de Energiewet 2024?",
      content: "De Energiewet 2024 verankert Collectieve Energiegemeenschappen (CEC) en energie-deling wettelijk. Dit creëert nieuwe kansen voor gebieden met een gezamenlijk energie-profiel — precies waar wij op inrichten."
    }
  ];

  return (
    <div className="relative">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-5 md:px-10 h-24 bg-transparent z-50 transition-all duration-300">
        <a href="#" onClick={(e) => { e.preventDefault(); setView('home'); window.scrollTo(0,0); }} className="flex items-center gap-3 no-underline">
          <span className="font-display font-bold text-2xl tracking-tight text-white"><span className="text-accent">V</span>OVON</span>
        </a>
        
        {view === 'home' && (
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 list-none m-0 p-0">
              <li><a href="#hero" className="text-[15px] font-medium text-accent border-b-2 border-accent pb-1 no-underline">Home</a></li>
              <li><a href="#wat" className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline">Wat is het</a></li>
              <li><a href="#netpanel" className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline">Netpanel</a></li>
              <li><a href="#aanpak" className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline">Werkwijze</a></li>
              <li><a href="#projecten" className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline">Casestudy</a></li>
            </ul>
            
            <div className="flex items-center gap-6">
              <a href="#contact" onClick={(e) => { if (view !== 'home') { e.preventDefault(); setView('home'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView(); }, 100); } }} className="font-display text-[15px] font-bold px-6 py-2.5 bg-white text-paper rounded-full hover:bg-white/90 transition-colors no-underline">
                Aan de slag
              </a>
              <button className="flex items-center gap-2 text-white bg-transparent border-none cursor-pointer hover:text-accent transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span className="text-[15px] font-medium">NL</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {view === 'home' ? (
        <>
          {/* HERO */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center pt-[120px] pb-[160px] px-5 md:px-10 z-10">
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          {/* Placeholder for background image, using a dark gradient for now */}
          <div className="absolute inset-0 bg-gradient-to-b from-paper/80 to-paper/95 z-10"></div>
          <img src="https://image2url.com/r2/default/images/1774787226532-82cc8b70-280b-41ed-a24b-ede00b5a874d.avif" alt="Gebiedsontwikkeling Background" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8 backdrop-blur-sm">
            Systeembewust
          </div>
          
          <h1 className="hero-title font-display font-extrabold text-[clamp(52px,8vw,120px)] leading-[0.92] tracking-[-3px] max-w-[900px] mb-6 text-white">
            Bouwen<br/>binnen het<br/><span>net.</span>
          </h1>

          <p className="text-[clamp(18px,2vw,24px)] leading-[1.5] text-white/90 max-w-[800px] mb-12 font-light">
            Netcongestie hoeft geen rem te zijn. Integreer energie als ontwerpopdracht — van eerste stedenbouwkundig plan tot aansluit strategie. Flexibel, schaalbaar en netklaar.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center text-left">
            <div>
              <div className="font-display text-4xl font-bold text-white mb-2">87%</div>
              <div className="text-xs text-white/50 tracking-[1px] uppercase">Regio's met congestie</div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-white mb-2">€0</div>
              <div className="text-xs text-white/50 tracking-[1px] uppercase">faalkosten bij juiste aanpak</div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[11px] tracking-[2px] uppercase">
          Scroll
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-accent text-paper py-3.5 overflow-hidden whitespace-nowrap z-10 relative">
        <div className="inline-flex gap-20 animate-ticker">
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="text-[11px] tracking-[2px] uppercase flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-fast"></div>
                Netcongestie NL: 87% regio's vol
              </div>
              <div className="text-[11px] tracking-[2px] uppercase flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-fast"></div>
                BESS-inzet verlaagt piekbelasting met 40%
              </div>
              <div className="text-[11px] tracking-[2px] uppercase flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-fast"></div>
                Energiewet 2024: CEC & REC wettelijk verankerd
              </div>
              <div className="text-[11px] tracking-[2px] uppercase flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-fast"></div>
                Cable pooling: zon + accu op één aansluiting
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* WAT IS HET */}
      <section id="wat" className="py-20 md:py-[120px] px-5 md:px-10 max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Wat is het</SectionLabel>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,54px)] tracking-tight leading-[1.05] mb-6 text-white">
            Net­bewust ontwerpen van de grond af
          </h2>
          <p className="text-[15px] leading-[1.8] text-white/70 max-w-[340px] m-0">
            Gebiedsontwikkeling en energie-infrastructuur worden te vaak los van elkaar gepland. Wij combineren beide disciplines — zodat de nieuwbouw woonwijk of bedrijventerrein aansluitbaar is vóórdat de eerste paal de grond in gaat.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col gap-[2px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {accordions.map((acc, i) => (
            <AccordionItem 
              key={i}
              title={acc.title}
              content={acc.content}
              isOpen={openAccordion === i}
              onClick={() => setOpenAccordion(openAccordion === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </section>

      {/* NET STATUS PANEL */}
      <section id="netpanel" className="bg-card text-white py-20 md:py-[100px] px-5 md:px-10 z-10 relative">
        <div className="max-w-[1200px] mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <SectionLabel>Netpanel</SectionLabel>
              <h2 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] tracking-tight leading-tight m-0 text-white">
                Live netcapaciteit<br/>Nederland
              </h2>
            </div>
            <p className="text-[15px] text-white/70 max-w-[280px] md:text-right leading-[1.6] m-0">
              Indicatieve status op basis van gepubliceerde congestiegebieden per netbeheerder. Bijgewerkt Q1 2025.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.0 }}>
              <NetCard 
                label="Liander — regio's vol" 
                value="91%" 
                colorClass="green"
                sub={<>Groot-Amsterdam, Flevoland,<br/>Gelderland, Noord-Holland</>}
                fillWidth="91%"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <NetCard 
                label="Enexis — transport­schaarste" 
                value="84%" 
                colorClass="amber"
                sub={<>Noord-Brabant, Limburg,<br/>Drenthe, Friesland</>}
                fillWidth="84%"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <NetCard 
                label="Stedin — congestiezones" 
                value="78%" 
                colorClass="green"
                sub={<>Zuid-Holland, Zeeland,<br/>Utrecht</>}
                fillWidth="78%"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <NetCard 
                label="Verwachte uitbreidingstermijn" 
                value="7 jr" 
                colorClass="blue"
                sub={<>Gemiddelde wachttijd voor<br/>zwaar transport­verzoek</>}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
              <NetCard 
                label="BESS-projecten operationeel NL" 
                value="142" 
                colorClass="amber"
                sub={<>Gecombineerde capaciteit<br/>1.8 GWh — groei +34% YoY</>}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
              <NetCard 
                label="Flexibiliteitsmarkt potentie" 
                value="€340M" 
                colorClass="green"
                sub={<>Jaarlijks beschikbaar via<br/>FCR, aFRR, mFRR en IDM</>}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WERKWIJZE / STAPPEN */}
      <section id="aanpak" className="py-20 md:py-[120px] px-5 md:px-10 max-w-[1200px] mx-auto z-10 relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6 }}>
          <SectionLabel>Werkwijze</SectionLabel>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,56px)] tracking-tight mb-16 max-w-[600px] leading-[1.05] text-white">
            Van quickscan tot<br/>operationeel gebied.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.0 }}>
            <Step num="01" title="Quickscan Grip op Locatie" desc="Analyse van de omgeving, lokale energie dragers en vrager, ruimtelijke randvoorwaarden. Output: haalbaarheidsmatrix en go/no-go advies." tag="2–4 weken" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Step num="02" title="Netintegratieplan" desc="Ruimtelijke ontwerp van het systeem: opwek, opslag, distributie en fasering afgestemd op transportcapaciteit. Inclusief energiesysteem." tag="6–10 weken" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Step num="03" title="Stakeholderregie" desc="Begeleiding bij overleg, ontwikkelaars-netbeheerders, gemeentelijke besluitvorming en structuur. Procesregie en documenteren." tag="Parallel" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Step num="04" title="Procesregie" desc="Projectbegeleiding tot operationele fase. Ook tijdens EMS-configuraties, integratie van energiesystemen en Netzero2050 strategieën" tag="Doorlopend" />
          </motion.div>
        </div>
      </section>

      {/* INSTRUMENTEN */}
      <section id="tools" className="bg-tools py-20 md:py-[100px] px-5 md:px-10 relative overflow-hidden z-10">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div 
            className="mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Instrumenten</SectionLabel>
            <h2 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] tracking-tight text-white m-0">
              Onze technische<br/>gereedschapskist
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.0 }}>
              <ToolPill icon={<BatteryCharging size={28} strokeWidth={1.5} />} title="BESS — Batterij­opslag" desc="Grootschalige lithium-ion opslag als nettbuffer. Laagt piekbelasting, verhoogt zelfsufficiëntie en genereert FCR/aFRR-inkomsten." badge="Flexibiliteitsmarkt" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <ToolPill icon={<Sun size={28} strokeWidth={1.5} />} title="PV + Laadinfra" desc="Zon, opslag en EV-laadinfra via Solar Parking. Maximale benutting van beschikbare ruimte en flexibiliteit." badge="Mobiliteit" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <ToolPill icon={<BrainCircuit size={28} strokeWidth={1.5} />} title="Energy Management:" desc="Slim energiemanagementsysteem dat vraag, aanbod en nettarieven realtime optimaliseert op gebiedsniveau." badge="AI-gestuurd" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
              <ToolPill icon={<Users size={28} strokeWidth={1.5} />} title="Energie­gemeenschap (CEC)" desc="Wettelijk kader via Energiewet 2024 voor gezamenlijk opwekken, opslaan en delen binnen een postcodegebied." badge="Energiewet 2024" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
              <ToolPill icon={<PlugZap size={28} strokeWidth={1.5} />} title="Dynamische Netaansluiting" desc="Contractuele flexibiliteitsafspraken met netbeheerder: stuurbaar vermogen in ruil voor prioriteitsaansluiting." badge="Netbeheerder" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
              <ToolPill icon={<BarChart3 size={28} strokeWidth={1.5} />} title="Faserings­model" desc="Bouwprogramma afgestemd op toenemende netcapaciteit. Elk bouwveld triggert pas bij beschikbaar transport." badge="Ruimtelijk" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTEN */}
      <section id="projecten" className="py-20 md:py-[120px] px-5 md:px-10 max-w-[1200px] mx-auto z-10 relative">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6 }}>
          <SectionLabel>Casestudy's</SectionLabel>
          <h2 className="font-display font-bold text-[clamp(32px,4vw,56px)] tracking-tight mb-12 m-0 text-white">
            Casestudy's
          </h2>
        </motion.div>
        
        <div className="flex flex-col gap-[2px]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.0 }}>
            <ProjectRow num="001" name="Dronten Zuid" loc="Flevoland — 300 won." status="Principe verzoek" statusColor="blue" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <ProjectRow num="002" name="Harderwijk" loc="Gelderland — 200MW" status="Consultatie" statusColor="amber" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <ProjectRow num="003" name="Hoorn" loc="Noord Holland — 100MW" status="Haalbaarheid research" statusColor="blue" />
          </motion.div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="py-[100px] px-5 md:px-10 bg-card text-center z-10 relative">
        <SectionLabel className="mb-6 mx-auto">Aan de slag</SectionLabel>
        <h2 className="contact-title font-display font-bold text-[clamp(36px,5vw,72px)] tracking-tight leading-[0.95] mb-8 m-0 text-white">
          Uw gebied<br/><span>netklaar</span><br/>maken?
        </h2>
        <p className="text-[15px] text-white/70 mb-12 leading-[1.7] max-w-md mx-auto">
          Starten met een Quickscan van uw locatie — om zo een helder beeld van kansen en risico's te krijgen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:info@vovon.nl" className="font-display text-[15px] font-bold px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors no-underline">
            Quickscan aanvragen
          </a>
          <a href="https://www.vovon.nl" target="_blank" rel="noopener noreferrer" className="font-display text-[15px] font-bold px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors no-underline">
            Meer over VOVON
          </a>
        </div>
      </section>
      </>
      ) : (
        <LegalView onBack={() => { setView('home'); window.scrollTo(0,0); }} />
      )}

      {/* FOOTER */}
      <footer className="py-8 px-5 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 z-10 relative bg-paper border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg tracking-tight text-white"><span className="text-accent">V</span>OVON</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <button onClick={() => { setView('legal'); window.scrollTo(0,0); }} className="text-sm text-white/50 hover:text-accent transition-colors bg-transparent border-none cursor-pointer p-0">
            Privacy, Cookies & Disclaimer
          </button>
          <p className="text-sm text-white/50 tracking-wide m-0 text-center sm:text-right">
            Copyright © 2026 VOVON
          </p>
        </div>
      </footer>
    </div>
  );
}
