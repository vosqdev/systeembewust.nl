import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { EnergyCircle } from "./components/EnergyCircle";
import { AIAssistant } from "./components/AIAssistant";
import { TimelineView } from "./components/TimelineView";
import {
  BatteryCharging,
  Sun,
  BrainCircuit,
  Users,
  PlugZap,
  BarChart3,
  Zap,
  Droplet,
  Flame,
  Wind,
  Home,
  Car,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Network,
  Factory,
  Leaf,
  Plug,
  MapPin,
  Clock,
  FileText,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { translations, Language } from "./i18n";

const SectionLabel = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8 backdrop-blur-sm ${className}`}
  >
    {children}
  </div>
);

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`border border-white/10 rounded-2xl bg-card overflow-hidden transition-all duration-300 hover:border-accent/50 ${isOpen ? "border-accent/50 shadow-[0_0_30px_rgba(0,200,160,0.1)]" : ""}`}
    >
      <div
        className="px-7 py-6 flex justify-between items-center cursor-pointer select-none"
        onClick={onClick}
      >
        <h3 className="font-display text-lg font-bold tracking-tight text-white">
          {title}
        </h3>
        <div
          className={`text-2xl text-accent transition-transform duration-300 font-sans leading-none ${isOpen ? "rotate-45" : ""}`}
        >
          +
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out px-7 text-[15px] leading-[1.75] text-white/70 whitespace-pre-line ${isOpen ? "max-h-[500px] pb-6" : "max-h-0"}`}
      >
        {content}
      </div>
    </div>
  );
};

const NetCard = ({
  label,
  value,
  sub,
  colorClass,
  fillWidth,
}: {
  label: string;
  value: string;
  sub: React.ReactNode;
  colorClass?: string;
  fillWidth?: string;
}) => {
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
    <div
      className={`bg-card border border-white/10 rounded-3xl p-8 relative overflow-hidden transition-all duration-300 hover:bg-white/5 hover:border-white/20 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[3px] ${afterColor}`}
    >
      <div className="text-xs font-medium uppercase tracking-wider text-white/50 mb-4">
        {label}
      </div>
      <div
        className={`font-display font-bold text-[48px] tracking-tight leading-none mb-3 ${valueColor}`}
      >
        {value}
      </div>
      <div className="text-[15px] text-white/70 leading-[1.6]">{sub}</div>
      {fillWidth && (
        <div className="mt-6 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: fillWidth }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full rounded-full ${colorClass === "red" ? "bg-red" : colorClass === "amber" ? "bg-amber" : "bg-accent"}`}
          />
        </div>
      )}
    </div>
  );
};

const Step = ({
  num,
  title,
  desc,
  tag,
}: {
  num: string;
  title: string;
  desc: string;
  tag: string;
}) => (
  <div className="border border-white/10 rounded-3xl p-10 relative bg-card h-full flex flex-col transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
    <div className="font-display font-bold text-[64px] tracking-tighter leading-none text-white/10 mb-6">
      {num}
    </div>
    <h3 className="font-display text-xl font-bold mb-4 tracking-tight text-white">
      {title}
    </h3>
    <p className="text-[15px] leading-[1.7] text-white/70 mb-6">{desc}</p>
    <div className="inline-block mt-auto text-xs font-medium tracking-wide py-1.5 px-3 rounded-full border border-white/10 text-white/60 bg-white/5 self-start">
      {tag}
    </div>
  </div>
);

const ToolPill = ({
  icon,
  title,
  desc,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge: string;
}) => (
  <div className="border border-white/10 rounded-2xl p-7 flex flex-col gap-4 h-full transition-all duration-300 hover:border-accent/50 hover:bg-white/5 cursor-default group">
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-2 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300 shrink-0">
      {icon}
    </div>
    <div className="font-display text-lg font-bold tracking-tight text-white shrink-0">
      {title}
    </div>
    <div className="text-[14px] leading-[1.7] text-white/70">{desc}</div>
    <div className="text-xs font-medium tracking-wide py-1.5 px-3 rounded-full bg-accent/10 text-accent self-start mt-auto shrink-0">
      {badge}
    </div>
  </div>
);

const ProjectRow = ({
  num,
  name,
  loc,
  status,
  statusColor,
}: {
  num: string;
  name: string;
  loc: string;
  status: string;
  statusColor: string;
}) => {
  let dotColor = "bg-accent";
  if (statusColor === "amber") dotColor = "bg-amber";
  if (statusColor === "blue") dotColor = "bg-blue";

  return (
    <a
      href="#"
      className="group grid grid-cols-1 md:grid-cols-[80px_2fr_1fr_1fr_40px] items-center gap-4 md:gap-8 py-6 px-8 mb-3 rounded-2xl border border-white/10 bg-card cursor-pointer transition-all duration-300 hover:border-accent/50 hover:bg-white/5 no-underline text-inherit"
    >
      <div className="hidden md:block font-display text-sm font-bold text-white/30">
        {num}
      </div>
      <div className="font-display text-lg font-bold tracking-tight text-white">
        {name}
      </div>
      <div className="text-[15px] text-white/70">{loc}</div>
      <div className="flex items-center gap-2 text-sm font-medium text-white/90">
        <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
        {status}
      </div>
      <div className="text-xl text-right transition-transform duration-300 text-white/30 group-hover:translate-x-2 group-hover:text-accent hidden md:block">
        →
      </div>
    </a>
  );
};



const LegalView = ({
  onBack,
  lang,
}: {
  onBack: () => void;
  lang: Language;
}) => {
  const t = translations[lang].legal;
  return (
    <div className="min-h-screen pt-32 pb-20 px-5 md:px-10 max-w-[800px] mx-auto z-10 relative bg-paper text-white">
      <button
        onClick={onBack}
        className="mb-12 font-display text-sm font-bold tracking-wide text-white/50 hover:text-accent transition-colors flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
      >
        {t.back}
      </button>

      <div className="space-y-12 text-white/70 leading-[1.8] text-[15px]">
        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-6">
            {t.privacy.title}
          </h2>
          <p className="mb-4">{t.privacy.p1}</p>
          <p className="mb-4">{t.privacy.p2}</p>
          <p className="mb-4">
            {t.privacy.p3}
            <br />
            <a
              href="https://www.vovon.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              www.vovon.nl
            </a>
          </p>
          <p>{t.privacy.p4}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-6">
            {t.cookie.title}
          </h2>
          <p className="mb-4">{t.cookie.p1}</p>
          <p className="mb-4">{t.cookie.p2}</p>
          <p>{t.cookie.p3}</p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-white mb-6">
            {t.disclaimer.title}
          </h2>
          <p className="mb-4">{t.disclaimer.p1}</p>
          <p className="mb-4">{t.disclaimer.p2}</p>
          <p className="mb-4">{t.disclaimer.p3}</p>
          <p className="mb-4">{t.disclaimer.p4}</p>
          <p>{t.disclaimer.p5}</p>
        </section>
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<"home" | "legal" | "timeline">("home");
  const [lang, setLang] = useState<Language>("nl");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFrameworkTab, setActiveFrameworkTab] = useState<string>("quickscan");
  const [netpanelTab, setNetpanelTab] = useState<"afname" | "invoeding">("afname");
  const [openAccordion, setOpenAccordion] = useState<number>(0);
  const [werkwijzeStep, setWerkwijzeStep] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[lang];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    let targetId = id;
    if (id === "aanpak") {
      targetId = "werkwijze";
    }
    
    if (view !== "home") {
      setView("home");
      setTimeout(() => {
        if (targetId === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const element = document.getElementById(targetId);
        if (element) {
          const navHeight = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
      return;
    }
    
    if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 64; // 4rem = 64px
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative">
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 flex items-center justify-between px-5 md:px-10 h-16 z-50 transition-all duration-300 ${isScrolled ? "bg-paper border-b border-white/10" : "bg-transparent border-b border-transparent"}`}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setView("home");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-3 no-underline"
        >
          <span className="font-display font-bold text-2xl tracking-tight text-white">
            <span className="text-accent">V</span>OVON
          </span>
        </a>

        {(view === "home" || view === "timeline") && (
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 list-none m-0 p-0 items-center">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollToSection(e, "hero")}
                  className={`text-[15px] font-medium pb-1 no-underline transition-colors ${
                    view === "home" ? "text-accent border-b-2 border-accent" : "text-white hover:text-accent"
                  }`}
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#netpanel"
                  onClick={(e) => scrollToSection(e, "netpanel")}
                  className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline"
                >
                  {t.nav.netpanel}
                </a>
              </li>
              <li>
                <a
                  href="#werkwijze"
                  onClick={(e) => scrollToSection(e, "werkwijze")}
                  className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline"
                >
                  {t.nav.werkwijze}
                </a>
              </li>
              <li>
                <a
                  href="#netbewust"
                  onClick={(e) => scrollToSection(e, "netbewust")}
                  className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline"
                >
                  {t.nav.netbewust}
                </a>
              </li>

              <li>
                <a
                  href="#projecten"
                  onClick={(e) => scrollToSection(e, "projecten")}
                  className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline"
                >
                  {t.nav.casestudy}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => scrollToSection(e, "faq")}
                  className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline"
                >
                  {t.nav.faq}
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-6">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="font-display text-[15px] font-bold px-6 py-2.5 bg-white text-paper rounded-full hover:bg-white/90 transition-colors no-underline"
              >
                {t.nav.aanDeSlag}
              </a>
              <button
                onClick={() => setLang(lang === "nl" ? "en" : "nl")}
                className="flex items-center gap-2 text-white bg-transparent border-none cursor-pointer hover:text-accent transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="text-[15px] font-medium">
                  {lang === "nl" ? "EN" : "NL"}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        {(view === "home" || view === "timeline") && (
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setLang(lang === "nl" ? "en" : "nl")}
              className="flex items-center gap-2 text-white bg-transparent border-none cursor-pointer hover:text-accent transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="text-[15px] font-medium">
                {lang === "nl" ? "EN" : "NL"}
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white bg-transparent border-none cursor-pointer p-2 hover:text-accent transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}
      </nav>

      {/* Mobile Menu Dropdown */}
      {(view === "home" || view === "timeline") && (
        <div
          className={`fixed inset-0 bg-paper/95 backdrop-blur-md z-40 lg:hidden transition-all duration-300 ease-in-out flex flex-col items-center justify-center ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-8 list-none m-0 p-0 text-center">
            <li>
              <a
                href="#hero"
                onClick={(e) => scrollToSection(e, "hero")}
                className={`text-2xl font-bold transition-colors no-underline ${
                  view === "home" ? "text-accent" : "text-white hover:text-accent"
                }`}
              >
                {t.nav.home}
              </a>
            </li>
            <li>
              <a
                href="#netpanel"
                onClick={(e) => scrollToSection(e, "netpanel")}
                className="text-2xl font-bold text-white hover:text-accent transition-colors no-underline"
              >
                {t.nav.netpanel}
              </a>
            </li>
            <li>
              <a
                href="#werkwijze"
                onClick={(e) => scrollToSection(e, "werkwijze")}
                className="text-2xl font-bold text-white hover:text-accent transition-colors no-underline"
              >
                {t.nav.werkwijze}
              </a>
            </li>
            <li>
              <a
                href="#netbewust"
                onClick={(e) => scrollToSection(e, "netbewust")}
                className="text-2xl font-bold text-white hover:text-accent transition-colors no-underline"
              >
                {t.nav.netbewust}
              </a>
            </li>

            <li>
              <a
                href="#projecten"
                onClick={(e) => scrollToSection(e, "projecten")}
                className="text-2xl font-bold text-white hover:text-accent transition-colors no-underline"
              >
                {t.nav.casestudy}
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={(e) => scrollToSection(e, "faq")}
                className="text-2xl font-bold text-white hover:text-accent transition-colors no-underline"
              >
                {t.nav.faq}
              </a>
            </li>
            <li className="mt-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="font-display text-lg font-bold px-8 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors no-underline inline-block"
              >
                {t.nav.aanDeSlag}
              </a>
            </li>
          </ul>
        </div>
      )}

      {view === "home" && (
        <>
          {/* HERO */}
          <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center text-center pt-[120px] pb-[160px] px-5 md:px-10 z-10"
          >
            <div className="absolute inset-0 z-[-1] overflow-hidden">
              {/* Placeholder for background image, using a dark gradient for now */}
              <div className="absolute inset-0 bg-gradient-to-b from-paper/60 to-paper/90 z-10"></div>
              <img
                src="https://image2url.com/r2/default/images/1774787226532-82cc8b70-280b-41ed-a24b-ede00b5a874d.avif"
                alt="Gebiedsontwikkeling Background"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-8 backdrop-blur-sm">
                {t.hero.badge}
              </div>

              <h1 className="hero-title font-display font-extrabold text-[clamp(52px,8vw,120px)] leading-[0.92] tracking-[-3px] max-w-[900px] mb-6 text-white">
                {t.hero.title1}
                <br />
                {t.hero.title2}
                <br />
                <span>{t.hero.title3}</span>
              </h1>

              <p className="text-[clamp(18px,2vw,24px)] leading-[1.5] text-white/90 max-w-[800px] mb-12 font-light">
                {t.hero.desc}
              </p>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center text-left">
                <div>
                  <div className="font-display text-4xl font-bold text-white mb-2">
                    {t.hero.stat1Val}
                  </div>
                  <div className="text-xs text-white/50 tracking-[1px] uppercase">
                    {t.hero.stat1Label}
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl font-bold text-white mb-2">
                    {t.hero.stat2Val}
                  </div>
                  <div className="text-xs text-white/50 tracking-[1px] uppercase">
                    {t.hero.stat2Label}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[11px] tracking-[2px] uppercase">
              {t.hero.scroll}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-bounce"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </section>

          {/* TICKER */}
          <div className="bg-accent text-paper py-3.5 overflow-hidden whitespace-nowrap z-10 relative">
            <div className="inline-flex gap-20 animate-ticker">
              {[...Array(8)].map((_, i) => (
                <React.Fragment key={i}>
                  {t.ticker.map((item, idx) => (
                    <div
                      key={idx}
                      className="text-[11px] tracking-[2px] uppercase flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-fast"></div>
                      {item}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* SYSTEM EXPLANATION SECTION */}
          <section
            id="system-explanation"
            className="py-20 md:py-[100px] px-5 md:px-10 z-10 relative bg-paper text-white border-b border-white/5"
          >
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-sm font-semibold tracking-wider uppercase mb-6">
                  {t.systemExplanation.label}
                </div>
                <h2 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] tracking-tight leading-tight text-white mb-6">
                  {t.systemExplanation.title}
                </h2>
                <p className="text-[15px] leading-[1.8] text-white/70 max-w-[750px] mx-auto">
                  {lang === "nl" 
                    ? "Het elektriciteitsnet functioneert als een snelweg. Wanneer er te veel verkeer (stroomafname of teruglevering) tegelijkertijd plaatsvindt, ontstaan er files (congestie) op specifieke knooppunten. Dit is de keten van bron tot gebruiker:"
                    : "The electricity grid functions like a highway. When there is too much traffic (electricity demand or supply) at the same time, traffic jams (congestion) arise at specific nodes. This is the chain from source to user:"}
                </p>
              </motion.div>

              <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 relative">
                {t.systemExplanation.steps.map((step: any, idx: number) => {
                  let iconElement;
                  let bgCircleColor = "";
                  let strokeColor = "";

                  if (idx === 0) { // Opwek
                    iconElement = <Sun size={32} className="text-white" />;
                    bgCircleColor = "bg-teal-500/90 shadow-[0_0_20px_rgba(13,148,136,0.4)]";
                    strokeColor = "border-teal-500/30";
                  } else if (idx === 1) { // Hoogspanning
                    iconElement = <Network size={32} className="text-white" />;
                    bgCircleColor = "bg-slate-700/90 shadow-[0_0_20px_rgba(71,85,105,0.4)]";
                    strokeColor = "border-slate-500/20";
                  } else if (idx === 2) { // Regionaal Net
                    iconElement = <Factory size={32} className="text-white" />;
                    bgCircleColor = "bg-slate-700/90 shadow-[0_0_20px_rgba(71,85,105,0.4)]";
                    strokeColor = "border-slate-500/20";
                  } else if (idx === 3) { // Wijkstation
                    iconElement = <Zap size={32} className="text-white animate-pulse" />;
                    bgCircleColor = "bg-pink-600/90 shadow-[0_0_25px_rgba(236,72,153,0.5)]";
                    strokeColor = "border-pink-500/30";
                  } else { // Woning
                    iconElement = <Home size={32} className="text-white" />;
                    bgCircleColor = "bg-teal-500/90 shadow-[0_0_20px_rgba(13,148,136,0.4)]";
                    strokeColor = "border-teal-500/30";
                  }

                  return (
                    <React.Fragment key={idx}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`flex-1 w-full bg-card border ${strokeColor} rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:border-white/20 hover:shadow-xl relative`}
                      >
                        {/* Number badge */}
                        <div className="absolute top-4 left-4 text-xs font-mono font-bold text-white/30">
                          0{idx + 1}
                        </div>

                        {/* Circular Icon badge */}
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${bgCircleColor} mb-6 transition-transform duration-300 hover:rotate-12`}>
                          {iconElement}
                        </div>

                        {/* Step Title */}
                        <h3 className="font-display font-bold text-xl text-white mb-2">
                          {step.title}
                        </h3>

                        {/* Step description */}
                        <p className="text-sm text-white/70 leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>

                      {/* Arrow between cards (hidden on mobile) */}
                      {idx < 4 && (
                        <div className="hidden lg:flex items-center text-pink-500/40 animate-pulse">
                          <ArrowRight size={24} />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </section>

          {/* GRID CHALLENGES SECTION */}
          <section
            id="grid-challenges"
            className="py-20 md:py-[100px] px-5 md:px-10 z-10 relative bg-paper text-white border-b border-white/5"
          >
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="inline-block px-4 py-1.5 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 text-sm font-semibold tracking-wider uppercase mb-6">
                  {t.gridChallenges.label}
                </div>
                <h2 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] tracking-tight leading-tight text-white mb-6">
                  {t.gridChallenges.title}
                </h2>
                <p className="text-[15px] leading-[1.8] text-white/70 max-w-[750px] mx-auto">
                  {lang === "nl"
                    ? "De druk op ons energiesysteem is ongekend hoog. De transitie van beleid naar de fysieke realiteit in de grond brengt gigantische maatschappelijke en ruimtelijke uitdagingen met zich mee:"
                    : "The pressure on our energy system is unprecedented. The transition from policy to physical reality in the ground brings enormous social and spatial challenges:"}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {t.gridChallenges.cards.map((card: any, idx: number) => {
                  let iconElement;
                  let bgCircleColor = "";
                  let statColor = "";
                  let borderHoverColor = "";

                  // Alternating pink and teal colors like the image
                  if (idx % 2 === 0) {
                    // Even (0, 2, 4): Pink theme
                    statColor = "text-pink-500";
                    bgCircleColor = "bg-pink-500/10 text-pink-500 border border-pink-500/30";
                    borderHoverColor = "hover:border-pink-500/30 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]";
                  } else {
                    // Odd (1, 3, 5): Teal theme
                    statColor = "text-teal-400";
                    bgCircleColor = "bg-teal-400/10 text-teal-400 border border-teal-400/30";
                    borderHoverColor = "hover:border-teal-400/30 hover:shadow-[0_0_30px_rgba(45,212,191,0.1)]";
                  }

                  // Assign icons according to the image cards
                  if (idx === 0) {
                    iconElement = <Home size={22} />;
                  } else if (idx === 1) {
                    iconElement = <Zap size={22} />;
                  } else if (idx === 2) {
                    iconElement = <Leaf size={22} />;
                  } else if (idx === 3) {
                    iconElement = <Plug size={22} />;
                  } else if (idx === 4) {
                    iconElement = <MapPin size={22} />;
                  } else {
                    iconElement = <Clock size={22} />;
                  }

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`bg-card border border-white/5 rounded-2xl p-8 flex flex-col items-start transition-all duration-300 hover:scale-[1.02] ${borderHoverColor} relative overflow-hidden h-full`}
                    >
                      {/* Top bar with icon and stat */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${bgCircleColor}`}>
                          {iconElement}
                        </div>
                        <span className={`text-3xl md:text-4xl font-extrabold tracking-tight ${statColor}`}>
                          {card.value}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display font-bold text-lg text-white mb-3">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-white/60 leading-relaxed">
                        {card.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* NET STATUS PANEL */}
          <section
            id="netpanel"
            className="bg-card text-white py-20 md:py-[100px] px-5 md:px-10 z-10 relative"
          >
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <SectionLabel>{t.netpanel.label}</SectionLabel>
                  <h2 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] tracking-tight leading-tight m-0 text-white whitespace-pre-line mb-4">
                    {t.netpanel.title}
                  </h2>
                  <p className="text-[15px] text-white/70 max-w-[500px] leading-[1.6] m-0">
                    {t.netpanel.desc}
                  </p>
                </div>

                {/* Tab Toggles */}
                <div className="flex p-1 bg-white/5 border border-white/10 rounded-2xl shrink-0 self-start lg:self-end">
                  <button
                    onClick={() => setNetpanelTab("afname")}
                    className={`px-5 py-2.5 rounded-xl font-display text-[14px] font-bold transition-all border-none cursor-pointer ${
                      netpanelTab === "afname"
                        ? "bg-accent text-paper shadow-lg"
                        : "bg-transparent text-white/60 hover:text-white"
                    }`}
                  >
                    {t.netpanel.tabs.afname}
                  </button>
                  <button
                    onClick={() => setNetpanelTab("invoeding")}
                    className={`px-5 py-2.5 rounded-xl font-display text-[14px] font-bold transition-all border-none cursor-pointer ${
                      netpanelTab === "invoeding"
                        ? "bg-accent text-paper shadow-lg"
                        : "bg-transparent text-white/60 hover:text-white"
                    }`}
                  >
                    {t.netpanel.tabs.invoeding}
                  </button>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(t.netpanel.cards as any)[netpanelTab].map((card: any, idx: number) => {
                  let colorClass = "green";
                  if (idx === 0) colorClass = "red";
                  else if (idx === 1) colorClass = "amber";
                  else if (idx === 2) colorClass = "amber";
                  else if (idx === 3) colorClass = "blue";
                  else if (idx === 4) colorClass = "green";
                  else if (idx === 5) colorClass = "green";

                  const hasProgressBar = idx < 3;
                  const fillWidth = hasProgressBar ? card.value : undefined;

                  return (
                    <motion.div
                      key={`${netpanelTab}-${idx}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                    >
                      <NetCard
                        label={card.label}
                        value={card.value}
                        colorClass={colorClass}
                        sub={
                          <span className="whitespace-pre-line">
                            {card.sub}
                          </span>
                        }
                        fillWidth={fillWidth}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* TIMELINE SECTION (1 juli '26) */}
          <TimelineView isEmbedded={true} lang={lang} />

          {/* WERKWIIJZE & WONINGBOUW SECTION */}
          <section
            id="werkwijze"
            className="py-20 md:py-[100px] px-5 md:px-10 z-10 relative bg-paper text-white border-t border-b border-white/5"
          >
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Column: Image of Woningbouw */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5 space-y-6 lg:sticky lg:top-24"
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-accent/10 rounded-[32px] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl">
                      <img
                        src="https://www.image2url.com/r2/default/images/1783622639321-581a1a2d-ab5a-4583-b039-737ad71b52ac.jpeg"
                        alt={lang === "nl" ? "Woningbouw projecten" : "Residential housing construction"}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-xs font-mono tracking-wider text-accent uppercase bg-accent/15 px-3 py-1 rounded-full border border-accent/20">
                          {lang === "nl" ? "Woningbouw" : "Housing"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-4 bg-teal-500/10 rounded-[32px] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl">
                      <img
                        src="https://www.image2url.com/r2/default/images/1783622849556-1cf3c200-4c70-4da5-b126-973b874f3724.jpg"
                        alt={lang === "nl" ? "Gecoördineerd indienen" : "Coordinated submission"}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="text-xs font-mono tracking-wider text-teal-400 uppercase bg-teal-500/15 px-3 py-1 rounded-full border border-teal-500/20">
                          {lang === "nl" ? "Netcapaciteit" : "Grid Capacity"}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column: Werkwijze Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-7 bg-card border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl space-y-6"
                >
                  {/* Title & Icon Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                      <FileText size={26} />
                    </div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
                      {lang === "nl" ? "Werkwijze" : "Method of Working"}
                    </h2>
                  </div>

                  {/* Intro Description */}
                  <p className="text-[14px] md:text-[15px] leading-[1.8] text-white/80">
                    {lang === "nl" ? (
                      <>
                        Voor succes van de woondeals is het raadzaam om nu al te starten. Gemeenten kunnen tot maximaal 10 jaar vooruit <strong className="text-teal-400 font-semibold">transportcapaciteit</strong> (de hoeveelheid elektriciteit die via het elektriciteitsnet van de netbeheerder naar een aansluiting of gebied wordt vervoerd) aanvragen bij de netbeheerder. De aanvraag komt op basis van datum van indiening op de wachtlijst te staan. Dit is met uitzondering van het eenmalig gecoördineerd indienen in oktober 2026.
                      </>
                    ) : (
                      <>
                        For the success of the housing deals, it is highly advisable to start now. Municipalities can request <strong className="text-teal-400 font-semibold">transmission capacity</strong> (the amount of electricity transported via the grid-operator's electricity network to a connection or area) up to 10 years in advance from the grid operator. The application is queued on the waiting list based on the date of submission. This is with the exception of the one-time coordinated submission in October 2026.
                      </>
                    )}
                  </p>

                  {/* Horizontal Line Divider */}
                  <div className="border-t border-white/5 my-6" />

                  {/* Active Content Body (Rendered directly without tabs) */}
                  <div className="space-y-6">
                    <div className="space-y-6">
                      {/* Paragraph block */}
                      <p className="text-sm leading-relaxed text-white/70">
                        {lang === "nl" ? (
                          "Het ‘eerder aanvragen’ is een enorme opgave. De opgave verschilt per gemeente en is afhankelijk van de hoeveelheid en de fase van de projecten. Eenmalig worden deze aanvragen gecoördineerd ingediend."
                        ) : (
                          "Applying early is an enormous task. The challenge varies per municipality and depends on the volume and phase of projects. These applications are submitted coordinatively once."
                        )}
                      </p>

                      {/* Steps Label */}
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold text-white/50 block font-mono tracking-wider uppercase">
                          {lang === "nl" ? "STAPPENPLAN EERDER AANVRAGEN:" : "STEP-BY-STEP PROCESS:"}
                        </span>

                        {/* Accordion List */}
                        <div className="space-y-2.5">
                          {[
                            {
                              num: 1,
                              title: lang === "nl" ? "Aanvragen aansluitingen" : "Apply for connections",
                              fullTitle: lang === "nl" ? "Stap 1: Aanvragen van aansluitingen en transportcapaciteit" : "Step 1: Applying for connections and transport capacity",
                              desc: lang === "nl" 
                                ? "Eerder aanvragen kan door gemeente of gjortigde projectontwikkelaars worden gedaan. In gebieden met netcongestie komt de aanvraag op de wachtlijst terecht na een check van de netbeheerder op volledigheid van de informatie."
                                : "Early applications can be made by the municipality or authorized project developers. In areas with grid congestion, the application is placed on the waiting list after a check by the grid operator."
                            },
                            {
                              num: 2,
                              title: lang === "nl" ? "Aanvragen prioriteit" : "Request priority",
                              fullTitle: lang === "nl" ? "Stap 2: Aanvragen van prioriteit" : "Step 2: Requesting priority",
                              desc: lang === "nl" 
                                ? "Dit kan bij het eerder aanvragen door de gemeente worden gedaan, of door een gemachtigde ontwikkelaar. Als prioriteit wordt toegekend, komt de aanvraag hoger op de wachtlijst terecht."
                                : "This can be done by the municipality or an authorized developer when applying early. If priority is granted, the application is placed higher on the waiting list."
                            },
                            {
                              num: 3,
                              title: lang === "nl" ? "Capaciteit vastleggen" : "Secure capacity",
                              fullTitle: lang === "nl" ? "Stap 3: Capaciteit vastleggen" : "Step 3: Securing capacity",
                              desc: lang === "nl" 
                                ? "Zodra er capaciteit beschikbaar komt, stuurt de netbeheerder een aanbieding aan de aanvrager. Dat kan een ontwikkelaar zijn of de gemeente, afhankelijk van wie de aanvraag heeft gedaan. Door de aanbieding te accepteren wordt de gevraagde transportcapaciteit vastgelegd tussen netbeheerder en aanvrager. Op dat moment is er zekerheid dat er aansluitingen en transportcapaciteit beschikbaar zijn voor het project."
                                : "As soon as capacity becomes available, the grid operator sends an offer to the applicant. By accepting the offer, the requested transport capacity is secured between the grid operator and the applicant."
                            },
                            {
                              num: 4,
                              title: lang === "nl" ? "Detailaanvraag" : "Detailed application",
                              fullTitle: lang === "nl" ? "Stap 4: Detailaanvraag door ontwikkelaar" : "Step 4: Detailed application by developer",
                              desc: lang === "nl" 
                                ? "Zodra er een gedetailleerd ontwerp beschikbaar is, doet de ontwikkelaar een detailaanvraag. Deze stap is gelijk aan hoe dit nu gebeurt in het reguliere proces tussen ontwikkelaar en netbeheerder. Wanneer de gemeente de capaciteit heeft vastgelegd, kan de ontwikkelaar deze detailaanvraag doen op basis van de vastgelegde capaciteit door de gemeente."
                                : "As soon as a detailed design is available, the developer submits a detailed request. This step is identical to the current regular process between the developer and the grid operator."
                            }
                          ].map((step, sIdx) => {
                            const isOpen = werkwijzeStep === sIdx;
                            return (
                              <div 
                                key={sIdx} 
                                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                                  isOpen 
                                    ? "border-teal-500/50 bg-teal-500/5 shadow-[0_0_15px_rgba(45,212,191,0.05)]" 
                                    : "border-white/5 bg-paper/50 hover:border-white/15"
                                }`}
                              >
                                {/* Step Header */}
                                <button
                                  onClick={() => setWerkwijzeStep(isOpen ? null : sIdx)}
                                  className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 cursor-pointer select-none bg-transparent"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                                      isOpen 
                                        ? "bg-teal-500 text-white" 
                                        : "bg-paper border border-white/15 text-white/60"
                                    }`}>
                                      {step.num}
                                    </div>
                                    <span className={`font-display font-bold text-sm text-white transition-colors ${
                                      isOpen ? "text-teal-400" : ""
                                    }`}>
                                      {step.title}
                                    </span>
                                  </div>
                                  <div className="text-white/40 shrink-0">
                                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                  </div>
                                </button>

                                {/* Expandable Body */}
                                <motion.div
                                  initial={false}
                                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4 pt-1 text-xs text-white/70 leading-relaxed border-t border-white/5 space-y-1.5">
                                    <div className="font-bold text-white text-[11px] uppercase tracking-wider mb-1 opacity-90">
                                      {step.fullTitle}
                                    </div>
                                    <p>{step.desc}</p>
                                  </div>
                                </motion.div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Eenmalig gecoördineerd indienen footer segment */}
                      <div className="bg-paper/40 border border-white/5 rounded-2xl p-5 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                          <Calendar size={18} />
                        </div>
                        <div className="space-y-3 flex-1">
                          <h4 className="font-display font-bold text-sm text-white">
                            {lang === "nl" ? "Eenmalig gecoördineerd indienen" : "One-time Coordinated Submission"}
                          </h4>
                          <div className="text-xs text-white/60 leading-relaxed space-y-2">
                            {lang === "nl" ? (
                              <>
                                <p>
                                  Van 1 tot en met 23 oktober 2026 geldt dat gemeenten eenmalig hun aanvragen gecoördineerd kunnen indienen. Dit gaat in tijdsblokken op basis van het startbouwjaar. Netbeheerders faciliteren deze aanpak via het online aanvraagportaal —{" "}
                                  <a
                                    href="https://www.mijnaansluiting.nl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:underline font-semibold"
                                  >
                                    www.mijnaansluiting.nl
                                  </a>
                                </p>
                                <p className="pt-1 text-white/50 border-t border-white/5">
                                  Daarna kunnen gemeenten capaciteit aanvragen volgens de vanaf dan geldende reguliere werkwijze.
                                </p>
                              </>
                            ) : (
                              <>
                                <p>
                                  From 1 to 23 October 2026, municipalities can submit their applications coordinatively once. This happens in time blocks based on construction start year. Grid operators facilitate this via the online application portal —{" "}
                                  <a
                                    href="https://www.mijnaansluiting.nl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-teal-400 hover:underline font-semibold"
                                  >
                                    www.mijnaansluiting.nl
                                  </a>
                                </p>
                                <p className="pt-1 text-white/50 border-t border-white/5">
                                  Afterwards, municipalities can request capacity according to the regular procedure that applies from then on.
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </motion.div>

              </div>
            </div>
          </section>

          {/* NETBEWUST INTRO SECTION */}
          <section
            id="netbewust"
            className="py-16 md:py-24 px-5 md:px-10 max-w-[1200px] mx-auto z-10 relative border-t border-white/10"
          >
            <div className="space-y-16">
              {/* Header */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-20 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6 }}
                >
                  <SectionLabel>{t.netbewust.label}</SectionLabel>
                  <h2 className="font-display font-bold text-[clamp(32px,4vw,54px)] tracking-tight leading-[1.05] mb-4 text-white">
                    {t.netbewust.title}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <p className="text-lg md:text-xl leading-relaxed text-white/80 m-0">
                    {t.netbewust.desc}
                  </p>
                </motion.div>
              </div>

              {/* Grid of 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <motion.div
                  className="bg-card border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-accent/20 transition-all shadow-sm"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-bold text-white">
                      {t.netbewust.section1.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70">
                      {t.netbewust.section1.desc}
                    </p>
                    <div className="pt-2">
                      <p className="text-xs uppercase tracking-wider font-bold text-accent mb-3">
                        {t.netbewust.section1.header}
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-accent text-sm">
                        {t.netbewust.section1.bullets.map((bullet: string, idx: number) => (
                          <li key={idx}>
                            <span className="text-white/70">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {t.netbewust.section1.footer && (
                    <p className="text-xs text-white/50 border-t border-white/10 pt-4 m-0 italic">
                      {t.netbewust.section1.footer}
                    </p>
                  )}
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  className="bg-card border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-accent/20 transition-all shadow-sm"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-bold text-white">
                      {t.netbewust.section2.title}
                    </h3>
                    <div className="pt-2">
                      <p className="text-xs uppercase tracking-wider font-bold text-accent mb-3">
                        {t.netbewust.section2.header}
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-accent text-sm">
                        {t.netbewust.section2.bullets.map((bullet: string, idx: number) => (
                          <li key={idx}>
                            <span className="text-white/70">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {t.netbewust.section2.footer && (
                    <p className="text-xs text-white/50 border-t border-white/10 pt-4 m-0 italic">
                      {t.netbewust.section2.footer}
                    </p>
                  )}
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  className="bg-card border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-accent/20 transition-all shadow-sm"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-bold text-white">
                      {t.netbewust.section3.title}
                    </h3>
                    <div className="pt-2">
                      <ul className="list-disc pl-5 space-y-2 text-accent text-sm">
                        {t.netbewust.section3.bullets.map((bullet: string, idx: number) => (
                          <li key={idx}>
                            <span className="text-white/70">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="text-xs text-white/40 border-t border-white/10 pt-4 m-0 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span>Systeembewuste aanpak</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          {/* DIAGRAM SECTION */}
          <section
            id="diagram"
            className="py-20 md:py-[120px] px-5 md:px-10 max-w-[1200px] mx-auto z-10 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col items-center"
            >
              <SectionLabel className="mb-8">{t.diagram.label}</SectionLabel>
              <h2 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] tracking-tight mb-6 text-center text-white whitespace-pre-line">
                {t.diagram.title}
              </h2>
              <p className="text-[15px] leading-[1.8] text-white/70 max-w-[700px] text-center mb-16 mx-auto">
                {t.diagram.desc}
              </p>

              <div className="w-full max-w-[900px] bg-paper border border-white/10 rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
                {/* Vragers */}
                <div className="flex flex-col items-center mb-16 relative z-10">
                  <div className="bg-card border border-white/10 text-white font-bold text-xl py-3 px-20 rounded-md mb-6 tracking-widest uppercase">
                    VRAGERS
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-white/5 border border-white/10 text-white font-bold py-4 px-10 rounded-xl shadow-sm text-lg hover:border-accent/50 transition-colors">
                      vastgoed
                    </div>
                    <div className="bg-white/5 border border-white/10 text-white font-bold py-4 px-10 rounded-xl shadow-sm text-lg hover:border-accent/50 transition-colors">
                      gebruikers
                    </div>
                    <div className="bg-white/5 border border-white/10 text-white font-bold py-4 px-10 rounded-xl shadow-sm text-lg hover:border-accent/50 transition-colors">
                      mobiliteit
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center md:items-stretch relative z-10">
                  {/* Dragers */}
                  <div className="flex flex-col gap-4 items-center justify-center w-full md:w-auto">
                    <div className="bg-card border border-white/10 text-white font-bold text-xl py-3 px-12 rounded-md tracking-widest uppercase mb-2">
                      DRAGERS
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                      <div className="bg-blue/10 border border-blue/30 text-blue font-bold py-4 px-8 rounded-xl flex items-center gap-4 text-base">
                        <Zap size={24} /> elektriciteit
                      </div>
                      <div className="bg-amber/10 border border-amber/30 text-amber font-bold py-4 px-8 rounded-xl flex items-center gap-4 text-base">
                        <Droplet size={24} /> moleculen
                      </div>
                      <div className="bg-red/10 border border-red/30 text-red font-bold py-4 px-8 rounded-xl flex items-center gap-4 text-base">
                        <Flame size={24} /> warmte
                      </div>
                    </div>
                  </div>

                  {/* Cycle */}
                  <div className="flex-1 relative flex items-center justify-center min-h-[350px] w-full">
                    <EnergyCircle />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* INSTRUMENTEN */}
          <section
            id="tools"
            className="bg-tools py-20 md:py-[100px] px-5 md:px-10 relative overflow-hidden z-10"
          >
            <div className="max-w-[1200px] mx-auto relative z-10">
              <motion.div
                className="mb-14"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel>{t.tools.label}</SectionLabel>
                <h2 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] tracking-tight text-white m-0 whitespace-pre-line">
                  {t.tools.title}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.0 }}
                  className="h-full"
                >
                  <ToolPill
                    icon={<BatteryCharging size={28} strokeWidth={1.5} />}
                    title={t.tools.pills[0].title}
                    desc={t.tools.pills[0].desc}
                    badge={t.tools.pills[0].badge}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="h-full"
                >
                  <ToolPill
                    icon={<Sun size={28} strokeWidth={1.5} />}
                    title={t.tools.pills[1].title}
                    desc={t.tools.pills[1].desc}
                    badge={t.tools.pills[1].badge}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-full"
                >
                  <ToolPill
                    icon={<BrainCircuit size={28} strokeWidth={1.5} />}
                    title={t.tools.pills[2].title}
                    desc={t.tools.pills[2].desc}
                    badge={t.tools.pills[2].badge}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="h-full"
                >
                  <ToolPill
                    icon={<Users size={28} strokeWidth={1.5} />}
                    title={t.tools.pills[3].title}
                    desc={t.tools.pills[3].desc}
                    badge={t.tools.pills[3].badge}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="h-full"
                >
                  <ToolPill
                    icon={<PlugZap size={28} strokeWidth={1.5} />}
                    title={t.tools.pills[4].title}
                    desc={t.tools.pills[4].desc}
                    badge={t.tools.pills[4].badge}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="h-full"
                >
                  <ToolPill
                    icon={<BarChart3 size={28} strokeWidth={1.5} />}
                    title={t.tools.pills[5].title}
                    desc={t.tools.pills[5].desc}
                    badge={t.tools.pills[5].badge}
                  />
                </motion.div>
              </div>
            </div>
          </section>



          {/* SAMENWERKING (PUBLIEK-PRIVATE SAMENWERKING) */}
          <section
            id="projecten"
            className="py-20 md:py-[120px] px-5 md:px-10 max-w-[1200px] mx-auto z-10 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <SectionLabel>{t.samenwerking.label}</SectionLabel>
              <h2 className="font-display font-bold text-[clamp(32px,4vw,56px)] tracking-tight mb-4 m-0 text-white uppercase">
                {t.samenwerking.title}
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-[900px] leading-relaxed mt-4 font-display">
                {t.samenwerking.subtitle1}
                <span className="text-accent font-bold">
                  {t.samenwerking.subtitleHighlight}
                </span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {t.samenwerking.pillars.map((pillar: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-[24px] p-8 flex flex-col relative overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-300"
                >
                  {/* Top Colored Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[6px]"
                    style={{ backgroundColor: pillar.color }}
                  />

                  {/* Header Title with corresponding color */}
                  <h3
                    className="font-display font-bold text-xl tracking-wider mb-8"
                    style={{ color: pillar.color }}
                  >
                    {pillar.title}
                  </h3>

                  {/* List of points */}
                  <ul className="space-y-6 list-none p-0 m-0 flex-1 flex flex-col justify-start">
                    {pillar.items.map((item: string, itemIdx: number) => (
                      <li
                        key={itemIdx}
                        className="text-[15px] leading-[1.6] text-gray-800 font-semibold relative pl-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ SECTION */}
          <section
            id="faq"
            className="py-16 md:py-24 px-5 md:px-10 max-w-[1200px] mx-auto z-10 relative border-t border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-10 lg:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel>{t.faq.label}</SectionLabel>
                <h2 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] tracking-tight leading-[1.1] mb-6 text-white whitespace-pre-line">
                  {t.faq.title}
                </h2>
                <p className="text-[15px] leading-[1.8] text-white/70 max-w-md m-0">
                  {t.faq.desc}
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col gap-3 w-full"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t.faq.accordions.map((acc: any, i: number) => (
                  <AccordionItem
                    key={i}
                    title={acc.title}
                    content={acc.content}
                    isOpen={openAccordion === i}
                    onClick={() =>
                      setOpenAccordion(openAccordion === i ? -1 : i)
                    }
                  />
                ))}
              </motion.div>
            </div>
          </section>

          {/* CONTACT CTA */}
          <section
            id="contact"
            className="py-[100px] px-5 md:px-10 bg-card text-center z-10 relative"
          >
            <SectionLabel className="mb-6 mx-auto">
              {t.contact.label}
            </SectionLabel>
            <h2 className="contact-title font-display font-bold text-[clamp(36px,5vw,72px)] tracking-tight leading-[0.95] mb-8 m-0 text-white">
              {t.contact.title1}
              <br />
              <span>{t.contact.title2}</span>
              <br />
              {t.contact.title3}
            </h2>
            <p className="text-[15px] text-white/70 mb-12 leading-[1.7] max-w-md mx-auto">
              {t.contact.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.vovon.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-[15px] font-bold px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors no-underline"
              >
                {t.contact.btn1}
              </a>
            </div>
          </section>
        </>
      )}
      {view === "legal" && (
        <LegalView
          onBack={() => {
            setView("home");
            window.scrollTo(0, 0);
          }}
          lang={lang}
        />
      )}
      {view === "timeline" && (
        <TimelineView
          onBack={() => {
            setView("home");
            window.scrollTo(0, 0);
          }}
          lang={lang}
        />
      )}

      {/* FOOTER */}
      <footer className="py-8 px-5 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 z-10 relative bg-paper border-t border-white/10">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-lg tracking-tight text-white">
            <span className="text-accent">V</span>OVON
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <button
            onClick={() => {
              setView("legal");
              window.scrollTo(0, 0);
            }}
            className="text-sm text-white/50 hover:text-accent transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            {t.footer.legal}
          </button>
          <p className="text-sm text-white/50 tracking-wide m-0 text-center sm:text-right">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
