import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { EnergyCircle } from "./components/EnergyCircle";
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
  <div className="border border-white/10 rounded-3xl p-10 relative bg-card transition-all duration-300 hover:border-accent/50 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
    <div className="font-display font-bold text-[64px] tracking-tighter leading-none text-white/10 mb-6">
      {num}
    </div>
    <h3 className="font-display text-xl font-bold mb-4 tracking-tight text-white">
      {title}
    </h3>
    <p className="text-[15px] leading-[1.7] text-white/70">{desc}</p>
    <div className="inline-block mt-6 text-xs font-medium tracking-wide py-1.5 px-3 rounded-full border border-white/10 text-white/60 bg-white/5">
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
  <div className="border border-white/10 rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 hover:border-accent/50 hover:bg-white/5 cursor-default group">
    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-2 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <div className="font-display text-lg font-bold tracking-tight text-white">
      {title}
    </div>
    <div className="text-[14px] leading-[1.7] text-white/70">{desc}</div>
    <div className="text-xs font-medium tracking-wide py-1.5 px-3 rounded-full bg-accent/10 text-accent self-start mt-auto">
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
  const [openAccordion, setOpenAccordion] = useState<number>(0);
  const [view, setView] = useState<"home" | "legal">("home");
  const [lang, setLang] = useState<Language>("nl");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[lang];

  const accordions = t.wat.accordions;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (view !== "home") {
      setView("home");
      setTimeout(() => {
        if (id === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 64;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
      return;
    }
    
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.getElementById(id);
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

        {view === "home" && (
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex gap-8 list-none m-0 p-0">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollToSection(e, "hero")}
                  className="text-[15px] font-medium text-accent border-b-2 border-accent pb-1 no-underline"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#wat"
                  onClick={(e) => scrollToSection(e, "wat")}
                  className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline"
                >
                  {t.nav.watIsHet}
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
                  href="#aanpak"
                  onClick={(e) => scrollToSection(e, "aanpak")}
                  className="text-[15px] font-medium text-white hover:text-accent transition-colors no-underline"
                >
                  {t.nav.werkwijze}
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
        {view === "home" && (
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setLang(lang === "nl" ? "en" : "nl")}
              className="flex items-center gap-2 text-white bg-transparent border-none cursor-pointer hover:text-accent transition-colors"
            >
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
      {view === "home" && (
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
                className="text-2xl font-bold text-white hover:text-accent transition-colors no-underline"
              >
                {t.nav.home}
              </a>
            </li>
            <li>
              <a
                href="#wat"
                onClick={(e) => scrollToSection(e, "wat")}
                className="text-2xl font-bold text-white hover:text-accent transition-colors no-underline"
              >
                {t.nav.watIsHet}
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
                href="#aanpak"
                onClick={(e) => scrollToSection(e, "aanpak")}
                className="text-2xl font-bold text-white hover:text-accent transition-colors no-underline"
              >
                {t.nav.werkwijze}
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

      {view === "home" ? (
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

          {/* WAT IS HET */}
          <section
            id="wat"
            className="py-20 md:py-[120px] px-5 md:px-10 max-w-[1200px] mx-auto z-10 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-start">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
              >
                <SectionLabel>{t.wat.label}</SectionLabel>
                <h2 className="font-display font-bold text-[clamp(32px,4vw,54px)] tracking-tight leading-[1.05] mb-6 text-white whitespace-pre-line">
                  {t.wat.title}
                </h2>
                <p className="text-[15px] leading-[1.8] text-white/70 max-w-[340px] m-0">
                  {t.wat.desc}
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
                    onClick={() =>
                      setOpenAccordion(openAccordion === i ? -1 : i)
                    }
                  />
                ))}
              </motion.div>
            </div>
          </section>

          {/* NET STATUS PANEL */}
          <section
            id="netpanel"
            className="bg-card text-white py-20 md:py-[100px] px-5 md:px-10 z-10 relative"
          >
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <SectionLabel>{t.netpanel.label}</SectionLabel>
                  <h2 className="font-display font-bold text-[clamp(28px,3.5vw,48px)] tracking-tight leading-tight m-0 text-white whitespace-pre-line">
                    {t.netpanel.title}
                  </h2>
                </div>
                <p className="text-[15px] text-white/70 max-w-[280px] md:text-right leading-[1.6] m-0">
                  {t.netpanel.desc}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.0 }}
                >
                  <NetCard
                    label={t.netpanel.cards[0].label}
                    value={t.netpanel.cards[0].value}
                    colorClass="green"
                    sub={
                      <span className="whitespace-pre-line">
                        {t.netpanel.cards[0].sub}
                      </span>
                    }
                    fillWidth="91%"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <NetCard
                    label={t.netpanel.cards[1].label}
                    value={t.netpanel.cards[1].value}
                    colorClass="amber"
                    sub={
                      <span className="whitespace-pre-line">
                        {t.netpanel.cards[1].sub}
                      </span>
                    }
                    fillWidth="84%"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <NetCard
                    label={t.netpanel.cards[2].label}
                    value={t.netpanel.cards[2].value}
                    colorClass="green"
                    sub={
                      <span className="whitespace-pre-line">
                        {t.netpanel.cards[2].sub}
                      </span>
                    }
                    fillWidth="78%"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <NetCard
                    label={t.netpanel.cards[3].label}
                    value={t.netpanel.cards[3].value}
                    colorClass="blue"
                    sub={
                      <span className="whitespace-pre-line">
                        {t.netpanel.cards[3].sub}
                      </span>
                    }
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <NetCard
                    label={t.netpanel.cards[4].label}
                    value={t.netpanel.cards[4].value}
                    colorClass="amber"
                    sub={
                      <span className="whitespace-pre-line">
                        {t.netpanel.cards[4].sub}
                      </span>
                    }
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <NetCard
                    label={t.netpanel.cards[5].label}
                    value={t.netpanel.cards[5].value}
                    colorClass="green"
                    sub={
                      <span className="whitespace-pre-line">
                        {t.netpanel.cards[5].sub}
                      </span>
                    }
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* WERKWIJZE / STAPPEN */}
          <section
            id="aanpak"
            className="py-20 md:py-[120px] px-5 md:px-10 max-w-[1200px] mx-auto z-10 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>{t.aanpak.label}</SectionLabel>
              <h2 className="font-display font-bold text-[clamp(32px,4vw,56px)] tracking-tight mb-16 max-w-[600px] leading-[1.05] text-white whitespace-pre-line">
                {t.aanpak.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.0 }}
              >
                <Step
                  num={t.aanpak.steps[0].num}
                  title={t.aanpak.steps[0].title}
                  desc={t.aanpak.steps[0].desc}
                  tag={t.aanpak.steps[0].tag}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Step
                  num={t.aanpak.steps[1].num}
                  title={t.aanpak.steps[1].title}
                  desc={t.aanpak.steps[1].desc}
                  tag={t.aanpak.steps[1].tag}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Step
                  num={t.aanpak.steps[2].num}
                  title={t.aanpak.steps[2].title}
                  desc={t.aanpak.steps[2].desc}
                  tag={t.aanpak.steps[2].tag}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Step
                  num={t.aanpak.steps[3].num}
                  title={t.aanpak.steps[3].title}
                  desc={t.aanpak.steps[3].desc}
                  tag={t.aanpak.steps[3].tag}
                />
              </motion.div>
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
                    <div className="bg-card border border-white/10 text-white font-bold text-xl py-3 px-10 rounded-md tracking-widest uppercase mb-2">
                      DRAGERS
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      <div className="bg-blue/10 border border-blue/30 text-blue font-bold py-4 px-8 rounded-xl flex items-center gap-4 shadow-sm text-lg">
                        <Zap size={24} /> elektriciteit
                      </div>
                      <div className="bg-amber/10 border border-amber/30 text-amber font-bold py-4 px-8 rounded-xl flex items-center gap-4 shadow-sm text-lg">
                        <Droplet size={24} /> moleculen
                      </div>
                      <div className="bg-red/10 border border-red/30 text-red font-bold py-4 px-8 rounded-xl flex items-center gap-4 shadow-sm text-lg">
                        <Flame size={24} /> warmte
                      </div>
                    </div>
                  </div>

                  {/* Cycle */}
                  <div className="flex-1 relative flex items-center justify-center min-h-[400px] w-full">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.0 }}
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

          {/* PROJECTEN */}
          <section
            id="projecten"
            className="py-20 md:py-[120px] px-5 md:px-10 max-w-[1200px] mx-auto z-10 relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>{t.projecten.label}</SectionLabel>
              <h2 className="font-display font-bold text-[clamp(32px,4vw,56px)] tracking-tight mb-12 m-0 text-white">
                {t.projecten.title}
              </h2>
            </motion.div>

            <div className="flex flex-col gap-[2px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.0 }}
              >
                <ProjectRow
                  num={t.projecten.rows[0].num}
                  name={t.projecten.rows[0].name}
                  loc={t.projecten.rows[0].loc}
                  status={t.projecten.rows[0].status}
                  statusColor="blue"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ProjectRow
                  num={t.projecten.rows[1].num}
                  name={t.projecten.rows[1].name}
                  loc={t.projecten.rows[1].loc}
                  status={t.projecten.rows[1].status}
                  statusColor="amber"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ProjectRow
                  num={t.projecten.rows[2].num}
                  name={t.projecten.rows[2].name}
                  loc={t.projecten.rows[2].loc}
                  status={t.projecten.rows[2].status}
                  statusColor="blue"
                />
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
                href="mailto:info@vovon.nl"
                className="font-display text-[15px] font-bold px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors no-underline"
              >
                {t.contact.btn1}
              </a>
              <a
                href="https://www.vovon.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-[15px] font-bold px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/20 transition-colors no-underline"
              >
                {t.contact.btn2}
              </a>
            </div>
          </section>
        </>
      ) : (
        <LegalView
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
