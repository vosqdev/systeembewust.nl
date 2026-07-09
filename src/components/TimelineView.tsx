import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Layers, 
  Building2, 
  ChevronRight,
  TrendingUp,
  FileText
} from "lucide-react";
import { Language } from "../i18n";

interface TimelineViewProps {
  onBack?: () => void;
  lang: Language;
  isEmbedded?: boolean;
}

export const TimelineView: React.FC<TimelineViewProps> = ({ onBack, lang, isEmbedded = false }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"infographic" | "text">("infographic");
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  // Content translations
  const content = {
    nl: {
      back: "Terug naar Home",
      title: "Wetswijzigingen & Netcongestie",
      subtitle: "De nieuwe regels vanaf 1 juli 2026 uitgelegd",
      intro: "Het Nederlandse stroomnet zit overvol. Vanaf 1 juli 2026 gaan nieuwe regels in voor het verdelen van transportcapaciteit. Dit heeft grote gevolgen voor woningbouw, scholen en gebiedsontwikkeling. Ontdek stapsgewijs wat er verandert.",
      phases: [
        {
          date: "1 juli 2026",
          badge: "Fase 1: Vrijgave & Wachtrijen",
          summary: "Resterende capaciteit komt vrij voor geprioriteerde projecten. Eén wachtrij voor groot- en kleinverbruikers.",
          details: [
            "Vanaf 1 juli 2026 geven de netbeheerders per fase de resterende transportcapaciteit die eerder werd gereserveerd voor kleinverbruik, vrij aan de geprioriteerde partijen.",
            "Gemeenten en provincies hebben de mogelijkheid om aanvragen voor transportcapaciteit bij woningbouw en scholen tot maximaal 10 jaar vooruit in het bouwproces in te dienen bij de netbeheerder."
          ],
          bullets: [
            {
              title: "1 centrale wachtrij",
              desc: "Er komt één gezamenlijke wachtrij voor grootverbruikers (GV) en kleinverbruikers (KV). Binnen die wachtrij kunnen projecten die vallen onder het prioriteringskader voorrang aanvragen als er sprake is van netcongestie."
            },
            {
              title: "Vrijgave restcapaciteit",
              desc: "Overgebleven gereserveerde capaciteit wordt vastgesteld en geleidelijk vrijgegeven. Het ministerie van KGG, de ACM en netbeheerders werken nauw uit hoe deze vrijgave wordt gedaan."
            },
            {
              title: "Eerst prioritaire projecten",
              desc: "Bij het verdelen en vrijgeven van de capaciteit worden de aanvragen met een formele prioriteitsstatus als eerste geholpen."
            }
          ],
          highlight: "Zorg dat uw plannen voldoen aan het prioriteringskader om aanspraak te maken op deze eerste vrijkomende capaciteit."
        },
        {
          date: "1 oktober 2026",
          badge: "Fase 2: Gecoördineerd Aanvragen",
          summary: "Start van het proces voor vervroegde transportcapaciteit in gecoördineerde tijdsblokken.",
          details: [
            "Op 1 oktober 2026 start het proces van eerder aanvragen van transportcapaciteit. Eenmalig gaat dit gecoördineerd in tijdsblokken. Daarna kan iedere gemeente individueel een aanvraag indienen.",
            "Voor projecten die voldoen aan de formele bewijslast kunnen gemeenten prioriteit aanvragen bij de netbeheerder."
          ],
          bullets: [
            {
              title: "Tijdsblokken & Coördinatie",
              desc: "Om chaos op het net te voorkomen, start de aanvraagfase met een gecoördineerd tijdsblokkensysteem voor gemeenten."
            },
            {
              title: "Aanbod van Netbeheerder",
              desc: "Zodra er capaciteit beschikbaar komt, stuurt de netbeheerder een aanbieding aan de aanvrager. Door deze aanbieding te accepteren wordt de gevraagde transportcapaciteit definitief vastgelegd."
            },
            {
              title: "Vóór 1 januari 2027 handelen",
              desc: "Omdat vanaf 1 januari 2027 de gereserveerde capaciteit ook voor niet-prioritaire partijen beschikbaar komt, is het voor woningbouwplannen verstandig om dit zoveel mogelijk voor die datum te regelen."
            }
          ],
          highlight: "Gemeenten moeten nu al bewijslast verzamelen voor woningbouw en scholen om direct vanaf 1 oktober mee te kunnen doen."
        },
        {
          date: "1 januari 2027",
          badge: "Fase 3: Algehele Vrijgave",
          summary: "Restcapaciteit wordt opengesteld voor niet-geprioriteerde partijen. Netuitbreiding en congestiemanagement lopen door.",
          details: [
            "Tot 1 januari 2027 wordt de gereserveerde capaciteit op basis van berekeningen op verschillende momenten en gebieden vrijgegeven door de netbeheerders.",
            "Als er op 1 januari 2027 nog netcapaciteit beschikbaar is, dan wordt deze ook vrijgegeven aan niet-geprioriteerde partijen."
          ],
          bullets: [
            {
              title: "Beperkte Restcapaciteit",
              desc: "De verwachting is dat in bepaalde gebieden deze zogenoemde restcapaciteit zeer beperkt zal zijn. Wie te laat aanvraagt, sluit achteraan in de wachtrij."
            },
            {
              title: "Bouwen & Uitbreiden",
              desc: "Netbeheerders zijn koortsachtig bezig met het bouwen en uitbreiden van het fysieke stroomnet om op de middellange termijn nieuwe capaciteit bij te creëren."
            },
            {
              title: "Congestiemanagement",
              desc: "Ondertussen wordt ook capaciteit gecreëerd via actieve spitsmijding en congestiemanagement. De beschikbare capaciteit gaat direct naar aansluitingen in de wachtrij."
            }
          ],
          highlight: "Vanaf 2027 vervalt de exclusieve reservering voor prioriteitsprojecten. Snelheid en systeemsturing in het voorstadium zijn essentieel."
        },
        {
          date: "1 jul '26",
          badge: "Werkwijze & Voorwaarden",
          summary: "Werkwijze en voorwaarden voor transportcapaciteit en prioritering vanaf 1 juli 2026.",
          details: [
            "Voor succes van de woondeals is het raadzaam om nu al te starten. Gemeenten kunnen tot maximaal 10 jaar vooruit transportcapaciteit (de hoeveelheid elektriciteit die via het elektriciteitsnet van de netbeheerder naar een aansluiting of gebied wordt vervoerd) aanvragen bij de netbeheerder. De aanvraag komt op basis van datum van indiening op de wachtlijst te staan. Dit is met uitzondering van het eenmalig gecoördineerd indienen in oktober 2026."
          ],
          bullets: [
            {
              title: "Aanvragen transportcapaciteit",
              desc: "Verzamel de benodigde informatie om een aanvraag te doen voor deze projecten ter voorbereiding op een aanvraag voor transportcapaciteit."
            },
            {
              title: "Aanvraag prioritering volgens ACM prioriteringskader",
              desc: "Om prioritering te kunnen krijgen, moet de gemeente naast de aanvraag voor transportcapaciteit hiervoor een aparte aanvraag indienen. Wanneer de netbeheerder prioriteit toekent, schuift de aanvraag van dit project naar boven. Let op: hierbij geldt de indieningsdatum van het verzoek om transportcapaciteit (dus niet de datum van het verzoek om prioriteit)."
            },
            {
              title: "Aanbetaling aansluitkosten",
              desc: "De netbeheerders hebben met elkaar afgesproken dat gemeenten die een aanvraag doen naar verwachting in het derde kwartaal van 2026 een offerte krijgen (voor de 100% van de aansluitkosten). Voor de offerte is een handtekening nodig van de aanvrager. 20% van deze offerte geldt als aanbetaling om op de wachtlijst te komen. Gemeenten ontvangen de factuur daarvoor op 1 oktober 2027, zodat er tijd is om daarover een raadsbesluit te nemen."
            }
          ],
          highlight: "Zorg voor de juiste documentatie conform het ACM prioriteringskader om aanspraak te kunnen maken op prioritering."
        }
      ],
      sidebar: {
        title: "Snelle Feiten",
        fact1: {
          label: "Vooruitkijken",
          val: "10 Jaar",
          desc: "Zover kunnen gemeenten vooruit transportcapaciteit aanvragen voor woningbouw en scholen."
        },
        fact2: {
          label: "Wachtrijen",
          val: "1 Wachtrij",
          desc: "Grootverbruikers (GV) en kleinverbruikers (KV) komen samen in één centrale wachtrij te staan."
        },
        fact3: {
          label: "Funderingsdocument",
          val: "Bewijslast",
          desc: "Gemeenten moeten specifieke documentatie aanleveren (bijv. 32 kB richtlijn) om prioriteit te claimen."
        }
      },
      navButtons: {
        prev: "Vorige stap",
        next: "Volgende stap",
        finish: "Voltooid"
      }
    },
    en: {
      back: "Back to Home",
      title: "Regulatory Changes & Grid Congestion",
      subtitle: "The new rules from July 1, 2026 explained",
      intro: "The Dutch electricity grid is congested. From July 1, 2026, new rules will take effect for allocating transport capacity. This has major consequences for housing development, schools, and area planning. Discover step-by-step what is changing.",
      phases: [
        {
          date: "July 1, 2026",
          badge: "Phase 1: Release & Queues",
          summary: "Remaining capacity is released to prioritized projects. A single queue is established for large and small consumers.",
          details: [
            "As of July 1, 2026, grid operators will release the remaining transport capacity previously reserved for small consumers in phases to prioritized parties.",
            "Municipalities and provinces have the opportunity to submit applications for transport capacity for housing development and schools up to 10 years in advance of the construction process."
          ],
          bullets: [
            {
              title: "1 central queue",
              desc: "A single joint waiting queue will be introduced for large consumers (GV) and small consumers (KV). Projects falling under the prioritization framework can request priority in case of grid congestion."
            },
            {
              title: "Release of residual capacity",
              desc: "Remaining reserved capacity is determined and gradually released. The Ministry of KGG, the ACM, and grid operators are working out the details of this release."
            },
            {
              title: "Prioritized assistance",
              desc: "When distributing and releasing capacity, applications with a formal priority status will be served first."
            }
          ],
          highlight: "Ensure your plans meet the prioritization framework to qualify for this first wave of released capacity."
        },
        {
          date: "October 1, 2026",
          badge: "Phase 2: Coordinated Applications",
          summary: "Start of the process for advanced transport capacity applications in coordinated time blocks.",
          details: [
            "On October 1, 2026, the process of applying for transport capacity earlier begins. This will happen in a one-off coordinated manner in time blocks. After that, each municipality can submit requests individually.",
            "For projects that meet the formal burden of proof, municipalities can apply for priority from the grid operator."
          ],
          bullets: [
            {
              title: "Time Blocks & Coordination",
              desc: "To prevent chaos on the grid, the application phase begins with a coordinated time block system for municipalities."
            },
            {
              title: "Offer from Grid Operator",
              desc: "As soon as capacity becomes available, the grid operator will send an offer to the applicant. Accepting this offer legally secures the requested transport capacity."
            },
            {
              title: "Act Before January 1, 2027",
              desc: "Since the reserved capacity will also become available to non-priority parties from January 1, 2027, it is highly recommended to secure housing plans before this date."
            }
          ],
          highlight: "Municipalities must start gathering proof for housing developments and schools now to participate directly starting October 1st."
        },
        {
          date: "January 1, 2027",
          badge: "Phase 3: General Release",
          summary: "Remaining capacity is opened to non-prioritized parties. Grid expansion and congestion management continue.",
          details: [
            "Until January 1, 2027, reserved capacity will be released by grid operators based on calculations at various times and areas.",
            "If grid capacity remains available on January 1, 2027, it will also be released to non-prioritized parties."
          ],
          bullets: [
            {
              title: "Limited Remaining Capacity",
              desc: "It is expected that in certain areas, this so-called remaining capacity will be extremely limited. Late applicants will join the back of the queue."
            },
            {
              title: "Building & Expanding",
              desc: "Grid operators are working diligently to build and expand the physical electricity grid to add new capacity in the medium term."
            },
            {
              title: "Congestion Management",
              desc: "In the meantime, capacity is also created through peak-shaving and congestion management. Available capacity is immediately routed to connections in the queue."
            }
          ],
          highlight: "From 2027, the exclusive reservation for priority projects expires. Speed and system-level management in the pre-planning stage are vital."
        },
        {
          date: "1 Jul '26",
          badge: "Working Method & Conditions",
          summary: "Working method and conditions for transport capacity and prioritization from July 1, 2026.",
          details: [
            "For the success of the housing deals, it is advisable to start now. Municipalities can apply for transport capacity (the amount of electricity transported via the grid operator's electricity grid to a connection or area) to the grid operator up to 10 years in advance. The application is placed on the waiting list based on the date of submission, with the exception of the one-off coordinated submission in October 2026."
          ],
          bullets: [
            {
              title: "Applying for transport capacity",
              desc: "Gather the required information to make an application for these projects in preparation for a transport capacity request."
            },
            {
              title: "Priority Request according to ACM Prioritization Framework",
              desc: "To receive priority, the municipality must submit a separate request in addition to the transport capacity application. When the grid operator grants priority, the project's application moves up. Note: the submission date of the original transport capacity request applies (not the date of the priority request)."
            },
            {
              title: "Downpayment on Connection Costs",
              desc: "Grid operators have agreed that municipalities submitting an application are expected to receive a quote in Q3 2026 (for 100% of the connection costs). The applicant's signature is required. A 20% down payment is required to join the waiting list. Municipalities will receive the invoice for this on October 1, 2027, allowing sufficient time for a municipal council decision."
            }
          ],
          highlight: "Timely preparation of the correct burden of proof under the ACM framework is essential for success."
        }
      ],
      sidebar: {
        title: "Quick Facts",
        fact1: {
          label: "Looking Ahead",
          val: "10 Years",
          desc: "How far in advance municipalities can apply for transport capacity for housing and schools."
        },
        fact2: {
          label: "Queues",
          val: "1 Queue",
          desc: "Large consumers (GV) and small consumers (KV) are combined into a single central queue."
        },
        fact3: {
          label: "Core Document",
          val: "Burden of Proof",
          desc: "Municipalities must supply specific documentation (e.g. 32 kB guideline) to claim priority."
        }
      },
      navButtons: {
        prev: "Previous step",
        next: "Next step",
        finish: "Finished"
      }
    }
  };

  const activeLang = content[lang];
  const activePhase = activeLang.phases[activeStep];

  const nextStep = () => {
    if (activeStep < activeLang.phases.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      if (onBack) onBack();
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const renderContent = () => (
    <>
      {/* Back Button */}
      {!isEmbedded && onBack && (
        <button
          onClick={onBack}
          className="mb-8 font-display text-sm font-bold tracking-wide text-white/50 hover:text-accent transition-colors flex items-center gap-2 cursor-pointer bg-transparent border-none p-0 group"
          id="btn-back-home"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          {activeLang.back}
        </button>
      )}

      {/* Title Block */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-semibold mb-4 backdrop-blur-sm uppercase tracking-wider">
          <Clock size={12} />
          {lang === "nl" ? "1 juli 2026" : "July 1, 2026"}
        </div>
        {isEmbedded ? (
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            {activeLang.title}
          </h2>
        ) : (
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            {activeLang.title}
          </h1>
        )}
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mt-4 leading-relaxed font-sans">
          {activeLang.subtitle}
        </p>
      </div>

      {/* Multi-Pager Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-8 items-start">
          
          {/* Main Interactive Presentation Module */}
          <div className="flex flex-col gap-6">
            
            {/* Step Tab selectors (The Pager Headers) */}
            <div className="flex rounded-xl bg-white/5 border border-white/10 p-1.5 overflow-x-auto gap-1">
              {activeLang.phases.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 py-3 px-4 rounded-lg font-display text-sm font-bold tracking-wide whitespace-nowrap transition-all flex items-center justify-center gap-2 cursor-pointer border-none ${
                    activeStep === idx 
                      ? "bg-accent text-white shadow-lg shadow-accent/20" 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                  id={`tab-step-${idx}`}
                >
                  <span className={`w-2 h-2 rounded-full ${activeStep === idx ? "bg-white" : "bg-white/30"}`}></span>
                  {phase.date}
                </button>
              ))}
            </div>

            {/* Content Box with transitions */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 relative overflow-hidden backdrop-blur-md">
              
              {/* Decorative timeline line and numbers */}
              <div className="absolute top-0 right-0 p-8 font-display text-8xl font-black text-white/5 select-none pointer-events-none">
                0{activeStep + 1}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-2 font-display">
                      {activePhase.badge}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                      {activePhase.date} — {activePhase.summary}
                    </h2>
                  </div>

                  {/* Context Paragraphs */}
                  <div className="space-y-4 text-white/80 text-[15px] leading-relaxed">
                    {activePhase.details.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Bullet points structure */}
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 pt-4 border-t border-white/10">
                    {activePhase.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex gap-4 items-start bg-white/2 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                          {bIdx === 0 ? <Layers size={16} /> : bIdx === 1 ? <Building2 size={16} /> : <CheckCircle size={16} />}
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-[15px] text-white mb-1">{bullet.title}</h4>
                          <p className="text-xs md:text-sm text-white/60 leading-relaxed">{bullet.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlight callout box */}
                  <div className="flex gap-3 items-center bg-accent/10 border-l-4 border-accent p-4 rounded-r-xl text-white/95 text-xs md:text-sm font-medium">
                    <AlertTriangle size={18} className="text-accent shrink-0" />
                    <span>{activePhase.highlight}</span>
                  </div>

                  {/* Additional conditions and information specific to Phase 4 / Voorwaarden (activeStep === 3) */}
                  {activeStep === 3 && (
                    <div className="space-y-6 pt-6 border-t border-white/10 mt-6">
                      <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                        <Layers size={18} className="text-accent" />
                        {lang === "nl" ? "Bewijslast Prioritering" : "Burden of Proof for Prioritization"}
                      </h3>

                      <div className="space-y-4">
                        <div className="bg-white/2 border border-white/5 p-5 rounded-xl space-y-3">
                          <div className="flex items-center gap-2 text-accent font-display font-bold text-xs uppercase tracking-wider">
                            <CheckCircle size={14} />
                            {lang === "nl" ? "ACM prioriteringskader (Bijlage 22, Tabel 4)" : "ACM Prioritization Framework (Appendix 22, Table 4)"}
                          </div>
                          <p className="text-xs md:text-sm text-white/85 leading-relaxed">
                            {lang === "nl"
                              ? "Om prioritering te kunnen krijgen van de netbeheerder moet de gemeente de volgende bewijslast kunnen overleggen:"
                              : "To receive prioritization from the grid operator, the municipality must be able to present the following proof:"}
                          </p>

                          <div className="border-t border-white/5 pt-3 mt-3 space-y-2">
                            <ul className="list-disc pl-5 text-xs text-white/70 space-y-1.5 leading-relaxed">
                              <li>
                                {lang === "nl"
                                  ? "Bestuursbesluit door of namens het college van burgemeester en wethouders"
                                  : "Administrative decision by or on behalf of the Mayor and Aldermen"}
                              </li>
                              <li>
                                {lang === "nl"
                                  ? "Afschrift van de overeenkomst tussen de gemeente en de ontwikkelaar of initiatiefnemer waarin afspraken zijn vastgelegd over de te bouwen woonbehoefte en indien nodig aanpassing van het omgevingsplan"
                                  : "Copy of the agreement between the municipality and developer/initiator with agreements on housing need and, if needed, local plan adjustments"}
                              </li>
                              <li>
                                {lang === "nl"
                                  ? "Als deze overeenkomst niet beschikbaar is, een afschrift van het omgevingsplan waaruit blijkt dat op de specifieke locatie woonbehoefte is voorzien"
                                  : "If this agreement is unavailable, a copy of the environmental plan showing housing needs are provided at that location"}
                              </li>
                              <li>
                                {lang === "nl"
                                  ? "Ook voor primair, speciaal en voortgezet onderwijs is bewijslast voor overheden al vastgesteld in het codebesluit"
                                  : "For primary, special, and secondary education, the burden of proof is already established in the code decision"}
                              </li>
                            </ul>
                            <p className="text-[11px] text-white/50 italic mt-3">
                              {lang === "nl" ? (
                                <>
                                  Dit is verder uitgewerkt in de{" "}
                                  <a
                                    href="https://vng.nl/sites/default/files/2026-05/toelichting-bewijslast-prioriteringskader-acm.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:underline inline-flex items-center gap-0.5"
                                  >
                                    toelichting bewijslast - prioriteringskader ACM
                                  </a>
                                  .
                                </>
                              ) : (
                                <>
                                  This is elaborated further in the{" "}
                                  <a
                                    href="https://vng.nl/sites/default/files/2026-05/toelichting-bewijslast-prioriteringskader-acm.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent hover:underline inline-flex items-center gap-0.5"
                                  >
                                    clarification of proof - ACM prioritization framework
                                  </a>
                                  .
                                </>
                              )}
                            </p>
                          </div>
                        </div>

                        {/* Coordinated submissions time block table */}
                        <div className="bg-white/2 border border-white/5 p-5 rounded-xl space-y-4">
                          <div className="flex items-center gap-2 text-accent font-display font-bold text-xs uppercase tracking-wider">
                            <Calendar size={14} />
                            {lang === "nl" ? "Eenmalig gecoördineerd indienen" : "One-off Coordinated Submission"}
                          </div>
                          <p className="text-xs text-white/85 leading-relaxed">
                            {lang === "nl"
                              ? "Capaciteit aanvragen gaat in tijdsblokken op basis van het startbouwjaar, omdat dit in de praktijk de meest gangbare datum is voor het moment waarop netcapaciteit wordt aangevraagd en nodig is."
                              : "Capacity requests are organized in time blocks based on the planned construction start year, as this is practically the most common date for requesting and needing grid capacity."}
                          </p>

                          {/* Flowchart Schema Diagram */}
                          <div className="space-y-3 pt-2">
                            <span className="text-[11px] font-bold text-white/50 block font-mono uppercase tracking-wider">
                              {lang === "nl" ? "PROCESSCHEMA VAN AANVRAAG TOT REALISATIE:" : "PROCESS DIAGRAM FROM REQUEST TO REALIZATION:"}
                            </span>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-white/2 p-4 rounded-xl border border-white/5">
                              {[
                                {
                                  num: "1",
                                  title: lang === "nl" ? "Aanvraag transportcapaciteit en aansluitingen" : "Apply for transport capacity and connections",
                                },
                                {
                                  num: "2",
                                  title: lang === "nl" ? "Aanvragen prioriteit" : "Request priority",
                                },
                                {
                                  num: "3",
                                  title: lang === "nl" ? "Capaciteit vastleggen" : "Secure capacity",
                                },
                                {
                                  num: "4",
                                  title: lang === "nl" ? "Detailaanvraag door ontwikkelaar" : "Detailed application by developer",
                                }
                              ].map((step, idx) => (
                                <React.Fragment key={idx}>
                                  {/* Step Box */}
                                  <div className="w-full md:w-1/4 border-2 border-accent bg-accent/5 rounded-lg p-3 min-h-[80px] flex items-center justify-center text-center hover:bg-accent/10 transition-all duration-200">
                                    <span className="text-white font-display text-xs font-bold leading-relaxed">
                                      {step.num}. {step.title}
                                    </span>
                                  </div>
                                  {/* Connection arrow */}
                                  {idx < 3 && (
                                    <div className="flex shrink-0 items-center justify-center">
                                      <ArrowRight className="text-accent/60 rotate-90 md:rotate-0" size={16} />
                                    </div>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>

                          <div className="overflow-x-auto border border-white/10 rounded-lg bg-white/2">
                            <table className="w-full text-left text-xs text-white/80 border-collapse">
                              <thead>
                                <tr className="bg-white/5 border-b border-white/10 font-display text-white font-semibold">
                                  <th className="p-3 border-r border-white/10">{lang === "nl" ? "Datum" : "Date"}</th>
                                  <th className="p-3 border-r border-white/10">{lang === "nl" ? "Indienen projecten met start bouwjaar" : "Submit projects with start construction year"}</th>
                                  <th className="p-3">{lang === "nl" ? "Gepland opleverjaar" : "Planned completion year"}</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/5">
                                <tr className="hover:bg-white/2 transition-colors">
                                  <td className="p-3 border-r border-white/5 font-mono text-white/90">Per 1 oktober om 09.00 uur</td>
                                  <td className="p-3 border-r border-white/5">Startbouw t/m 2028</td>
                                  <td className="p-3 text-accent font-semibold align-middle text-center" rowSpan={8}>
                                    <div className="px-2 py-4 font-display">
                                      {lang === "nl" ? "Uiterlijk oplevering in 2036" : "Completion by 2036 at the latest"}
                                    </div>
                                  </td>
                                </tr>
                                <tr className="hover:bg-white/2 transition-colors">
                                  <td className="p-3 border-r border-white/5 font-mono text-white/90">Per 6 oktober om 09.00 uur</td>
                                  <td className="p-3 border-r border-white/5">Startbouw t/m 2029</td>
                                </tr>
                                <tr className="hover:bg-white/2 transition-colors">
                                  <td className="p-3 border-r border-white/5 font-mono text-white/90">Per 8 oktober om 09.00 uur</td>
                                  <td className="p-3 border-r border-white/5">Startbouw t/m 2030</td>
                                </tr>
                                <tr className="hover:bg-white/2 transition-colors">
                                  <td className="p-3 border-r border-white/5 font-mono text-white/90">Per 12 oktober om 09.00 uur</td>
                                  <td className="p-3 border-r border-white/5">Startbouw t/m 2031</td>
                                </tr>
                                <tr className="hover:bg-white/2 transition-colors">
                                  <td className="p-3 border-r border-white/5 font-mono text-white/90">Per 14 oktober om 09.00 uur</td>
                                  <td className="p-3 border-r border-white/5">Startbouw t/m 2032</td>
                                </tr>
                                <tr className="hover:bg-white/2 transition-colors">
                                  <td className="p-3 border-r border-white/5 font-mono text-white/90">Per 16 oktober om 09.00 uur</td>
                                  <td className="p-3 border-r border-white/5">Startbouw t/m 2033</td>
                                </tr>
                                <tr className="hover:bg-white/2 transition-colors">
                                  <td className="p-3 border-r border-white/5 font-mono text-white/90">Per 20 oktober om 09.00 uur</td>
                                  <td className="p-3 border-r border-white/5">Startbouw t/m 2034</td>
                                </tr>
                                <tr className="hover:bg-white/2 transition-colors">
                                  <td className="p-3 border-r border-white/5 font-mono text-white/90">Per 22 oktober om 09.00 uur</td>
                                  <td className="p-3 border-r border-white/5">Startbouw t/m 2035</td>
                                </tr>
                                <tr className="bg-white/5 font-semibold text-white/90">
                                  <td className="p-3 border-r border-white/10 font-mono">Per 23 oktober</td>
                                  <td className="p-3 border-r border-white/10">{lang === "nl" ? "Einde tijdsblokkenschema" : "End of time block schedule"}</td>
                                  <td className="p-3 text-white/30 italic text-center">-</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

              {/* Progress bar indicator */}
              <div className="w-full bg-white/10 h-1 mt-8 rounded-full overflow-hidden">
                <div 
                  className="bg-accent h-full transition-all duration-500 ease-out"
                  style={{ width: `${((activeStep + 1) / activeLang.phases.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Bottom Stepper Buttons */}
            <div className="flex justify-between items-center mt-2">
              <button
                onClick={prevStep}
                disabled={activeStep === 0}
                className={`py-3 px-6 rounded-full font-display text-xs font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer ${
                  activeStep === 0 
                    ? "text-white/20 bg-white/2 border border-white/5 cursor-not-allowed" 
                    : "text-white bg-white/5 hover:bg-white/15 border border-white/10"
                }`}
                id="btn-prev-step"
              >
                <ArrowLeft size={14} />
                {activeLang.navButtons.prev}
              </button>

              {/* Step indicator text */}
              <span className="text-xs font-mono text-white/40 tracking-wider">
                FASE {activeStep + 1} VAN {activeLang.phases.length}
              </span>

              <button
                onClick={nextStep}
                className="py-3 px-6 rounded-full font-display text-xs font-bold tracking-wide bg-accent hover:bg-accent/90 text-white transition-all flex items-center gap-2 cursor-pointer border-none shadow-lg shadow-accent/20"
                id="btn-next-step"
              >
                {activeStep === activeLang.phases.length - 1 ? activeLang.navButtons.finish : activeLang.navButtons.next}
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

          {/* Quick Facts Sidebar Panel */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                <TrendingUp size={18} className="text-accent" />
                {activeLang.sidebar.title}
              </h3>

              <div className="space-y-6">
                
                {/* Fact 1 */}
                <div className="space-y-2">
                  <span className="text-xs text-white/40 uppercase tracking-wider block font-mono">
                    {activeLang.sidebar.fact1.label}
                  </span>
                  <div className="font-display font-extrabold text-3xl text-accent">
                    {activeLang.sidebar.fact1.val}
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {activeLang.sidebar.fact1.desc}
                  </p>
                </div>

                {/* Fact 2 */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <span className="text-xs text-white/40 uppercase tracking-wider block font-mono">
                    {activeLang.sidebar.fact2.label}
                  </span>
                  <div className="font-display font-extrabold text-3xl text-accent">
                    {activeLang.sidebar.fact2.val}
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {activeLang.sidebar.fact2.desc}
                  </p>
                </div>

                {/* Fact 3 */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  <span className="text-xs text-white/40 uppercase tracking-wider block font-mono">
                    {activeLang.sidebar.fact3.label}
                  </span>
                  <div className="font-display font-extrabold text-3xl text-accent">
                    {activeLang.sidebar.fact3.val}
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {lang === "nl" ? (
                      <>
                        Gemeenten en ontwikkelaars moeten specifieke documentatie aanleveren zie{" "}
                        <a
                          href="https://vng.nl/sites/default/files/2026-05/toelichting-bewijslast-prioriteringskader-acm.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline inline-flex items-center gap-0.5"
                        >
                          link
                        </a>{" "}
                        om prioriteit te claimen.
                      </>
                    ) : (
                      <>
                        Municipalities and developers must supply specific documentation see{" "}
                        <a
                          href="https://vng.nl/sites/default/files/2026-05/toelichting-bewijslast-prioriteringskader-acm.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline inline-flex items-center gap-0.5"
                        >
                          link
                        </a>{" "}
                        to claim priority.
                      </>
                    )}
                  </p>
                </div>

              </div>
            </div>

            {/* Interactive Werkwijze Workflow & Coordination Section */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-6">
              <div>
                <div className="flex items-center gap-2 text-white font-semibold font-display text-base mb-2">
                  <FileText size={18} className="text-accent" />
                  {lang === "nl" ? "Werkwijze" : "Approach & Working Method"}
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  {lang === "nl" 
                    ? "Voor succes van de woondeals is het raadzaam om nu al te starten. Gemeenten kunnen tot maximaal 10 jaar vooruit transportcapaciteit (de hoeveelheid elektriciteit die via het elektriciteitsnet van de netbeheerder naar een aansluiting of gebied wordt vervoerd) aanvragen bij de netbeheerder. De aanvraag komt op basis van datum van indiening op de wachtlijst te staan. Dit is met uitzondering van het eenmalig gecoördineerd indienen in oktober 2026."
                    : "For the success of the housing deals, it is advisable to start now. Municipalities can apply for transport capacity (the amount of electricity transported via the grid operator's electricity grid to a connection or area) to the grid operator up to 10 years in advance. The application is placed on the waiting list based on the date of submission, with the exception of the one-off coordinated submission in October 2026."}
                </p>
              </div>

              {/* Accordion / More Info Panel */}
              <div className="border-t border-white/10 pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-accent uppercase tracking-wider font-display">
                    {lang === "nl" ? "Meer informatie" : "More information"}
                  </span>
                  
                  {/* Toggle between Infographic and Full Text */}
                  <div className="flex rounded-md bg-white/5 p-0.5 border border-white/10 text-[10px]">
                    <button
                      onClick={() => setViewMode("infographic")}
                      className={`px-2.5 py-1 rounded font-display font-bold transition-all ${
                        viewMode === "infographic"
                          ? "bg-accent text-white"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      {lang === "nl" ? "Stappenplan" : "Infographic"}
                    </button>
                    <button
                      onClick={() => setViewMode("text")}
                      className={`px-2.5 py-1 rounded font-display font-bold transition-all ${
                        viewMode === "text"
                          ? "bg-accent text-white"
                          : "text-white/50 hover:text-white"
                      }`}
                    >
                      {lang === "nl" ? "Tekst" : "Text"}
                    </button>
                  </div>
                </div>

                <p className="text-[11px] text-white/60 leading-relaxed">
                  {lang === "nl"
                    ? "Het ‘eerder aanvragen’ is een enorme opgave. De opgave verschilt per gemeente en is afhankelijk van de hoeveelheid en de fase van de projecten. Eenmalig worden deze aanvragen gecoördineerd ingediend."
                    : "Applying early is a huge undertaking. The task differs per municipality and depends on the number and phase of projects. These applications are submitted coordinatively once."}
                </p>

                {viewMode === "infographic" ? (
                  /* Infographic Stepper Mode */
                  <div className="space-y-3">
                    <span className="text-[11px] font-bold text-white/50 block font-mono">
                      {lang === "nl" ? "STAPPENPLAN EERDER AANVRAGEN:" : "STEP-BY-STEP PROCESS:"}
                    </span>
                    
                    <div className="relative pl-6 border-l border-white/10 space-y-3 ml-2.5">
                      {[
                        {
                          num: 1,
                          title: lang === "nl" ? "Aanvragen aansluitingen" : "Apply for connections",
                          fullTitle: lang === "nl" ? "Stap 1: Aanvragen van aansluitingen en transportcapaciteit" : "Step 1: Applying for connections and transport capacity",
                          desc: lang === "nl" 
                            ? "Eerder aanvragen kan door gemeente of gemachtigde projectontwikkelaars worden gedaan. In gebieden met netcongestie komt de aanvraag op de wachtlijst terecht na een check van de netbeheerder op volledigheid van de informatie."
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
                        const isOpen = expandedStep === sIdx;
                        return (
                          <div key={sIdx} className="relative group">
                            {/* Step bullet dot */}
                            <button
                              onClick={() => setExpandedStep(isOpen ? null : sIdx)}
                              className={`absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border flex items-center justify-center text-[9px] font-bold transition-all cursor-pointer ${
                                isOpen 
                                  ? "bg-accent border-accent text-white" 
                                  : "bg-paper border-white/20 text-white/60 hover:border-white/50"
                              }`}
                            >
                              {step.num}
                            </button>
                            
                            <div className="space-y-1">
                              <button
                                onClick={() => setExpandedStep(isOpen ? null : sIdx)}
                                className="font-display font-bold text-xs text-white hover:text-accent transition-colors text-left w-full bg-transparent border-none p-0 flex items-center justify-between"
                              >
                                <span>{step.title}</span>
                                <span className="text-[9px] text-white/30">{isOpen ? "▲" : "▼"}</span>
                              </button>
                              
                              <AnimatePresence initial={false}>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="text-[11px] text-white/60 leading-relaxed bg-white/2 p-2.5 rounded border border-white/5 mt-1 space-y-1.5">
                                      <div className="font-bold text-white text-[10px]">{step.fullTitle}</div>
                                      <div>{step.desc}</div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Full Detailed/Collapsible text mode */
                  <div className="space-y-4 text-[11px] text-white/70 leading-relaxed max-h-[350px] overflow-y-auto pr-1 space-y-3 custom-scrollbar">
                    <div>
                      <span className="font-bold text-white block mb-1">Stap 1 - Aanvragen van aansluitingen en transportcapaciteit:</span>
                      <p>Eerder aanvragen kan door gemeente of gemachtigde projectontwikkelaars worden gedaan. In gebieden met netcongestie komt de aanvraag op de wachtlijst terecht na een check van de netbeheerder op volledigheid van de informatie.</p>
                    </div>
                    <div>
                      <span className="font-bold text-white block mb-1">Stap 2 - Aanvragen van prioriteit:</span>
                      <p>Dit kan bij het eerder aanvragen door de gemeente worden gedaan, of door een gemachtigde ontwikkelaar. Als prioriteit wordt toegekend, komt de aanvraag hoger op de wachtlijst terecht.</p>
                    </div>
                    <div>
                      <span className="font-bold text-white block mb-1">Stap 3 - Capaciteit vastleggen:</span>
                      <p>Zodra er capaciteit beschikbaar komt, stuurt de netbeheerder een aanbieding aan de aanvrager. Dat kan een ontwikkelaar zijn of de gemeente, afhankelijk van wie de aanvraag heeft gedaan. Door de aanbieding te accepteren wordt de gevraagde transportcapaciteit vastgelegd tussen netbeheerder en aanvrager. Op dat moment is er zekerheid dat er aansluitingen en transportcapaciteit beschikbaar zijn voor het project.</p>
                    </div>
                    <div>
                      <span className="font-bold text-white block mb-1">Stap 4 - Detailaanvraag door ontwikkelaar:</span>
                      <p>Zodra er een gedetailleerd ontwerp beschikbaar is, doet de ontwikkelaar een detailaanvraag. Deze stap is gelijk aan hoe dit nu gebeurt in het reguliere proces tussen ontwikkelaar en netbeheerder. Wanneer de gemeente de capaciteit heeft vastgelegd, kan de ontwikkelaar deze detailaanvraag doen op basis van de vastgelegde capaciteit door de gemeente.</p>
                    </div>
                  </div>
                )}

                {/* Coordinated submissions section */}
                <div className="border-t border-white/10 pt-4 space-y-2">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5 font-display">
                    <Calendar size={13} className="text-accent animate-pulse" />
                    {lang === "nl" ? "Eenmalig gecoördineerd indienen" : "One-off coordinated submission"}
                  </div>
                  <p className="text-[11px] text-white/60 leading-relaxed">
                    {lang === "nl" 
                      ? "Van 1 tot en met 23 oktober 2026 geldt dat gemeenten eenmalig hun aanvragen gecoördineerd kunnen indienen. Dit gaat in tijdsblokken op basis van het startbouwjaar. Netbeheerders faciliteren deze aanpak via het online aanvraagportaal —"
                      : "From October 1 to October 23, 2026, municipalities can coordinate their submissions once. This is done in time blocks based on the planned start year of construction. Grid operators facilitate this approach via the online portal —"}
                  </p>
                  <a
                    href="https://www.mijnaansluiting.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-accent hover:underline"
                  >
                    www.mijnaansluiting.nl
                    <ArrowRight size={10} />
                  </a>
                  <p className="text-[10px] text-white/40 italic">
                    {lang === "nl"
                      ? "Daarna kunnen gemeenten capaciteit aanvragen volgens de vanaf dan geldende reguliere werkwijze."
                      : "Afterward, municipalities can request capacity according to the standard early application guidelines."}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </>
    );

  if (isEmbedded) {
    return (
      <section id="werkwijze" className="py-20 md:py-[100px] px-5 md:px-10 z-10 relative bg-paper text-white border-t border-b border-white/5">
        <div className="max-w-[1200px] mx-auto">
          {renderContent()}
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-5 md:px-10 z-10 relative bg-paper text-white">
      {renderContent()}
    </div>
  );
};
