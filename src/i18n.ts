export type Language = 'nl' | 'en';

export const translations = {
  nl: {
    nav: {
      home: "Home",
      watIsHet: "Wat is het",
      netpanel: "Netpanel",
      werkwijze: "Werkwijze",
      casestudy: "Casestudy",
      positionPaper: "Position Paper",
      aanDeSlag: "Aan de slag"
    },
    hero: {
      badge: "Systeembewust",
      title1: "Bouwen",
      title2: "binnen het",
      title3: "net.",
      desc: "Netcongestie hoeft geen rem te zijn. Integreer energie als ontwerpopdracht — van eerste stedenbouwkundig plan tot aansluit strategie. Flexibel, schaalbaar en netklaar.",
      stat1Val: "87%",
      stat1Label: "Regio's met congestie",
      stat2Val: "€0",
      stat2Label: "faalkosten bij juiste aanpak",
      scroll: "Scroll"
    },
    callToAction: {
      title: "Oproep: kies voor systeemsturing",
      p1: "Nederland heeft geen gebrek aan plannen.\nHet heeft een gebrek aan samenhang.",
      p2: "De komende jaren bepalen of:",
      list: [
        "we blijven vastlopen in procedures en congestie, of",
        "we versnellen door integraal te sturen op systemen"
      ],
      p3: "De Bandstad biedt ruimte.\nHet energiesysteem bepaalt of we die ruimte kunnen benutten."
    },
    ticker: [
      "Energiewet 2024: energie gemeenschappen wettelijk verankerd",
      "2025 kamerbrief decentrale ontwikkeling van energiesystemen",
      "2026 motie tweede kamer - de FGU-regio - aanmerken als innovatiegebied",
      "zon/wind + opslag + EV laden"
    ],
    wat: {
      label: "Wat is het",
      title: "Net­bewust ontwerpen van de grond af",
      desc: "Gebiedsontwikkeling en energie-infrastructuur worden te vaak los van elkaar gepland en start energieplanologie in de ruimtelijke ontwikkeling te laat. Combineer beide disciplines — zodat de nieuwbouw woonwijk of bedrijventerrein aansluitbaar is vóórdat de eerste paal de grond in gaat.",
      accordions: [
        {
          title: "Wat is netbewuste gebiedsontwikkeling?",
          content: "Netbewuste gebiedsontwikkeling integreert de beschikbare netcapaciteit als randvoorwaarde in het ruimtelijk en programmatisch ontwerp. Denk aan fasering op basis van transportcapaciteit, clustering van functies voor gedeeld netgebruik, en opslag als buffer."
        },
        {
          title: "Waarom is dit nu urgent?",
          content: "In meer dan 87% van de Nederlandse netgebieden bestaat transportschaarste. Nieuwe aansluitingen worden geweigerd of uitgesteld met 5–10 jaar. Wie niet netbewust ontwerpt, riskeert stilstand van de bouw."
        },
        {
          title: "Welke partijen?",
          content: "Gemeenten, woningcorporaties, netbeheerders, projectontwikkelaars en bouwers. Denk vanuit ketensamenwerking, ecoketens en systemen zorg voor de juist input en ga publiek-privaat samenwerken."
        },
        {
          title: "Hoe verhoudt dit zich tot de Energiewet 2024?",
          content: "De Energiewet 2024 verankert 'Collectieve' Energiegemeenschappen (CEC) en energie-deling wettelijk. Dit creëert nieuwe kansen voor gebieden vanuit energie-profiel — productie, opslag, flexibiliteit, gebruik."
        },
        {
          title: "Nieuw ACM-prioriteringskader (1 juli 2026)",
          content: "Per 1 juli 2026 gaat bij netcongestie de overgangsfase van het nieuwe ACM-prioriteringskader in. Dat betekent in de praktijk:\n\n• Kleinverbruikers komen dan óók in beeld binnen het prioriteringskader; tot die datum gold de oude werkwijze nog.\n• De tot nu toe gereserveerde ruimte voor kleinverbruik is vanaf dan alleen nog beschikbaar voor partijen met prioriteit volgens het kader.\n• Projecten zonder prioriteit krijgen in congestiegebieden dus eerder te maken met een wachtrij.\n• De volgorde blijft grofweg: 1. congestieverzachters, 2. veiligheid, 3. basisbehoeften. Woningbouw valt onder basisbehoeften / woonbehoefte."
        }
      ]
    },
    netpanel: {
      label: "Netpanel",
      title: "Live netcapaciteit\nNederland",
      desc: "Indicatieve status op basis van gepubliceerde congestiegebieden per netbeheerder. Bijgewerkt Q1 2025.",
      cards: [
        { label: "Liander — regio's vol", value: "91%", sub: "Groot-Amsterdam, Flevoland,\nGelderland, Noord-Holland" },
        { label: "Enexis — transport­schaarste", value: "84%", sub: "Noord-Brabant, Limburg,\nDrenthe, Friesland" },
        { label: "Stedin — congestiezones", value: "78%", sub: "Zuid-Holland, Zeeland,\nUtrecht" },
        { label: "Verwachte uitbreidingstermijn", value: "7 jr", sub: "Gemiddelde wachttijd voor\nzwaar transport­verzoek" },
        { label: "BESS-projecten operationeel NL", value: "142", sub: "Gecombineerde capaciteit\n1.8 GWh — groei +34% YoY" },
        { label: "Flexibiliteitsmarkt potentie", value: "€340M", sub: "Jaarlijks beschikbaar via\nFCR, aFRR, mFRR en IDM" }
      ]
    },
    diagram: {
      label: "Systeemmodel",
      title: "Integrale aanpak in beeld",
      desc: "Zonder de juiste balans tussen dragers en vragers is een gebied maar ook een systeem niet haalbaar en uitvoerbaar zonder hoge kosten."
    },
    aanpak: {
      label: "Werkwijze",
      title: "Van quickscan tot\noperationeel gebied.",
      steps: [
        { num: "01", title: "Quickscan Grip op Locatie", desc: "Analyse van de omgeving, lokale energie dragers en vragers, ruimtelijke randvoorwaarden. Energieprofilering en reststromen. Output: haalbaarheidsmatrix.", tag: "2–4 weken" },
        { num: "02", title: "Netintegratieplan", desc: "Ruimtelijke ontwerp van het systeem: opwek, opslag, distributie en fasering afgestemd op transportcapaciteit. Inclusief energiesysteem.", tag: "6–10 weken" },
        { num: "03", title: "Stakeholderregie", desc: "Begeleiding bij overleg, gemeente-ontwikkelaars-netbeheerders, besluitvorming en structuur. Waar nodig documenteren en vastleggen.", tag: "Parallel" },
        { num: "04", title: "Procesregie", desc: "Projectbegeleiding tot operationele fase. Ook tijdens EMS-configuraties, integratie van energiesystemen en Netzero2050 strategieën", tag: "Doorlopend" }
      ]
    },
    tools: {
      label: "Instrumenten",
      title: "De gereedschapskist",
      pills: [
        { title: "BESS — Batterij­opslag", desc: "Opslag als nettbuffer, dit verlaagt de piekbelasting, verhoogt zelfsufficiëntie en genereert hernieuwbare inkomsten.", badge: "Flexibiliteitsmarkt" },
        { title: "PV + Laadinfra", desc: "Zon, opslag en EV-laadinfra via Solar Parking. Maximale benutting van beschikbare ruimte -dubbelfunctie gebruik, flex en diensten zoals potentiële ERE-opbrengst via EV-charge.", badge: "Mobiliteit" },
        { title: "Energy Management:", desc: "Slim energiemanagementsysteem dat vraag, aanbod en nettarieven realtime optimaliseert op gebiedsniveau.", badge: "AI-gestuurd" },
        { title: "Energie­gemeenschap (CEC)", desc: "Wettelijk kader via Energiewet 2024 voor gezamenlijk opwekken, opslaan en delen binnen een gebied ook groepscontract (GTO) en energiecoöperatie mogelijkheden.", badge: "Energiewet 2024" },
        { title: "Dynamische Netaansluiting", desc: "Contractuele flexibiliteitsafspraken met netbeheerder: stuurbaar vermogen in ruil voor prioriteitsaansluiting.", badge: "Netbeheerder" },
        { title: "Faserings­model", desc: "Bouwprogramma afgestemd op netcapaciteit en integratie. Rekening houdend met passief huis en energiesysteem systeem netbewust.", badge: "Ruimtelijk" }
      ]
    },
    banner: {
      title: "Binnenkort meer!",
      desc: "Een quickscan rekentool, systeembewust."
    },
    projecten: {
      label: "Casestudy's",
      title: "Casestudy's",
      rows: [
        { num: "001", name: "Dronten Zuid", loc: "Flevoland — 300 won.", status: "Principe verzoek" },
        { num: "002", name: "Harderwijk", loc: "Gelderland — 200MW", status: "Consultatie" },
        { num: "003", name: "Hoorn", loc: "Noord Holland — 100MW", status: "Haalbaarheid research" }
      ]
    },
    contact: {
      label: "Aan de slag",
      title1: "Uw gebied",
      title2: "netklaar",
      title3: "maken?",
      desc: "Starten met een Quickscan van uw locatie — om zo een helder beeld van kansen en risico's te krijgen.",
      btn1: "Quickscan aanvragen",
      btn2: "Meer over VOVON"
    },
    legal: {
      back: "← Terug naar home",
      privacy: {
        title: "Privacyverklaring",
        p1: "Deze website verwerkt of bewaart geen persoonsgegevens.",
        p2: "Via deze website worden geen persoonsgegevens verzameld, opgeslagen of geanalyseerd. Er worden geen formulieren gebruikt en er wordt geen gebruikersregistratie toegepast.",
        p3: "Voor vragen, samenwerkingen of contact verwijzen wij naar de websites van de initiatiefnemers:",
        p4: "Wanneer u via deze websites contact opneemt, geldt het privacybeleid van de betreffende organisatie."
      },
      cookie: {
        title: "Cookiebeleid",
        p1: "Deze website maakt uitsluitend gebruik van functionele cookies die noodzakelijk zijn voor het goed functioneren van de website.",
        p2: "Er worden geen marketingcookies, trackingcookies of persoonlijke data verzameld via deze website.",
        p3: "Eventuele externe links naar andere websites kunnen hun eigen cookiebeleid hanteren. Wij adviseren u om de privacy- en cookieverklaringen van die websites te raadplegen."
      },
      disclaimer: {
        title: "Disclaimer",
        p1: "De informatie op deze website wordt met zorg samengesteld door VOVON development. De inhoud van deze website is uitsluitend bedoeld voor algemene informatie. Aan de inhoud van deze website kunnen geen rechten worden ontleend.",
        p2: "Concepten, tekeningen, visualisaties en projectbeschrijvingen die op deze website worden getoond zijn indicatief en kunnen gedurende het ontwikkelproces wijzigen.",
        p3: "VOVON development aanvaardt geen aansprakelijkheid voor eventuele directe of indirecte schade die voortvloeit uit het gebruik van de informatie op deze website.",
        p4: "Deze website kan verwijzingen bevatten naar externe websites van partners of betrokken organisaties. Wij hebben geen controle over de inhoud van deze externe websites en kunnen niet verantwoordelijk worden gehouden voor de inhoud daarvan.",
        p5: "Alle teksten, beelden en concepten op deze website zijn beschermd door auteursrechten en intellectuele eigendomsrechten. Gebruik of reproductie zonder voorafgaande toestemming is niet toegestaan."
      }
    },
    footer: {
      legal: "Privacy, Cookies & Disclaimer",
      copyright: "Copyright © 2026 VOVON"
    },
    positionPaper: {
      title: "Position Paper — Systeembewust Nederland",
      subtitle: "Van Randstad naar Bandstad: sturen op het energiesysteem als fundament voor gebiedsontwikkeling",
      sections: [
        {
          title: "1. Aanleiding: Nederland loopt vast in zijn eigen succes",
          content: "Nederland staat op een kantelpunt.\n\nDe klassieke ontwikkellogica — bouwen waar vraag is, infrastructuur achteraf aanpassen — werkt niet meer. De grenzen zijn bereikt:\n• Netcongestie remt woningbouw en economie\n• Ruimtelijke druk in de Randstad is maximaal\n• Energie, mobiliteit en ruimte zijn niet langer los te ontwikkelen systemen\n\nDe kaart van Nederland verschuift.\n\nNiet langer is de Randstad het enige zwaartepunt. Een nieuwe ruimtelijke realiteit ontstaat: de Bandstad — een netwerk van regio’s rondom de Randstad waar ruimte, energie en groei samenkomen."
        },
        {
          title: "2. Probleemdefinitie: sectorale ontwikkeling faalt",
          content: "De huidige praktijk:\n• Woningbouw → gestuurd door grond en markt\n• Energie → gestuurd door netbeheerders en wetgeving\n• Mobiliteit → gestuurd door infrastructuurprogramma’s\n\n👉 Resultaat:\n• projecten vertragen of vallen stil\n• investeringen sluiten niet op elkaar aan\n• maatschappelijke kosten lopen op\n\nDe kern van het probleem:\n\nNederland ontwikkelt nog steeds sectoraal, terwijl de opgaven systeemvraagstukken zijn."
        },
        {
          title: "3. De Bandstad als nieuwe ontwikkelrealiteit",
          content: "De “Bandstad” vormt het nieuwe speelveld voor groei:\n• Flevoland, Zwolle, Arnhem–Nijmegen, Brabant\n• Beschikbare ruimte voor wonen en economie\n• Strategische ligging t.o.v. energie-infrastructuur\n\nMaar:\n\nZonder systeembewuste ontwikkeling wordt de Bandstad dezelfde bottleneck als de Randstad."
        },
        {
          title: "4. Oplossingsrichting: systeembewuste gebiedsontwikkeling",
          content: "Systeembewust ontwikkelen betekent:\n\nHet energiesysteem is geen randvoorwaarde, maar het startpunt van gebiedsontwikkeling.\n\nKernprincipes:\n\n1. Energie als ordenend principe\n• Ontwikkelen op basis van beschikbare en maakbare capaciteit\n• Lokale opwek, opslag en flexibiliteit integraal ontwerpen\n\n2. Gebiedsontwikkeling = systeemontwikkeling\n• Wonen, werken, mobiliteit en energie in één ontwerp\n• Van “project” naar “ecosysteem”\n\n3. Van netaansluiting naar energienetwerk\n• Gesloten distributiesystemen (GDS)\n• Energy hubs en lokale energiegemeenschappen\n\n4. Sturing op tijd i.p.v. alleen ruimte\n• Fasering afgestemd op energiecapaciteit\n• Slim programmeren voorkomt stilstand"
        },
        {
          title: "5. Wat vraagt dit van het Rijk en regio’s?",
          content: "Van beleid naar uitvoering\n\n1. Maak ruimte voor experiment en versnelling\n• Versoepel regels voor GDS en energy hubs\n• Creëer experimenteergebieden (Bandstad-regio’s)\n\n2. Koppel woningbouw en energieprogrammering\n• Geen woningbouw zonder energieplan\n• Verplicht integraal programmeren\n\n3. Stuur op systeemwaarde i.p.v. sectorale KPI’s\n• Niet alleen aantallen woningen\n• Maar ook:\n  - netimpact\n  - flexibiliteit\n  - energie-autonomie\n\n4. Faciliteer nieuwe samenwerkingsvormen\n• Publiek-private gebiedscoalities\n• Ontwikkelaars als systeemregisseurs"
        },
        {
          title: "6. De rol van systeembewust.nl",
          content: "Systeembewust.nl positioneert zich als:\n\nVersneller van integrale gebiedsontwikkeling op basis van het energiesysteem\n\nWij:\n• Vertalen complexe systeemvraagstukken naar concrete gebiedsconcepten\n• Verbinden overheden, netbeheerders en marktpartijen\n• Ontwikkelen rekenmodellen en scenario’s voor:\n  - energiecapaciteit\n  - fasering\n  - businesscases\n\nOnze focus:\n• Bandstad-regio’s als nieuwe groeimotor\n• Netbewuste woon- en werkgebieden\n• Energy hubs als fundament voor ontwikkeling"
        },
        {
          title: "7. Oproep: kies voor systeemsturing",
          content: "Nederland heeft geen gebrek aan plannen.\nHet heeft een gebrek aan samenhang.\n\nDe komende jaren bepalen of:\n• we blijven vastlopen in procedures en congestie\nof\n• we versnellen door integraal te sturen op systemen\n\nDe Bandstad biedt ruimte.\nHet energiesysteem bepaalt of we die ruimte kunnen benutten."
        }
      ]
    }
  },
  en: {
    nav: {
      home: "Home",
      watIsHet: "What is it",
      netpanel: "Grid Panel",
      werkwijze: "Approach",
      casestudy: "Case Studies",
      positionPaper: "Position Paper",
      aanDeSlag: "Get Started"
    },
    hero: {
      badge: "System-aware",
      title1: "Building",
      title2: "within the",
      title3: "grid.",
      desc: "Grid congestion doesn't have to be a roadblock. Integrate energy as a design requirement — from the first urban plan to the connection strategy. Flexible, scalable, and grid-ready.",
      stat1Val: "87%",
      stat1Label: "Regions with congestion",
      stat2Val: "€0",
      stat2Label: "failure costs with the right approach",
      scroll: "Scroll"
    },
    callToAction: {
      title: "Call to action: choose system steering",
      p1: "The Netherlands has no shortage of plans.\nIt has a shortage of coherence.",
      p2: "The coming years will determine whether:",
      list: [
        "we remain stuck in procedures and congestion, or",
        "we accelerate by integrally steering on systems"
      ],
      p3: "The Bandstad offers space.\nThe energy system determines whether we can utilize that space."
    },
    ticker: [
      "Energy Act 2024: energy communities legally anchored",
      "2025 parliamentary letter on decentralized development of energy systems",
      "2026 parliamentary motion - designate the FGU region as an innovation area",
      "solar/wind + storage + EV charging"
    ],
    wat: {
      label: "What is it",
      title: "Grid-aware design from the ground up",
      desc: "Area development and energy infrastructure are too often planned separately and energy planning starts too late in spatial development. Combine both disciplines — so that the new residential area or business park is connectable before the first pile is driven into the ground.",
      accordions: [
        {
          title: "What is grid-aware area development?",
          content: "Grid-aware area development integrates the available grid capacity as a precondition in the spatial and programmatic design. Think of phasing based on transport capacity, clustering functions for shared grid use, and storage as a buffer."
        },
        {
          title: "Why is this urgent now?",
          content: "There is transport scarcity in more than 87% of Dutch grid areas. New connections are refused or delayed by 5–10 years. Those who do not design grid-aware risk construction coming to a standstill."
        },
        {
          title: "Which parties?",
          content: "Municipalities, housing corporations, grid operators, project developers, and builders. Think from chain collaboration, eco-chains and systems ensure the right input and engage in public-private partnerships."
        },
        {
          title: "How does this relate to the Energy Act 2024?",
          content: "The Energy Act 2024 legally anchors 'Collective' Energy Communities (CEC) and energy sharing. This creates new opportunities for areas based on energy profile — production, storage, flexibility, usage."
        },
        {
          title: "New ACM Prioritization Framework (July 1, 2026)",
          content: "As of July 1, 2026, the transition phase of the new ACM prioritization framework for grid congestion will begin. In practice, this means:\n\n• Small consumers will then also be included in the prioritization framework; until that date, the old method still applied.\n• The space reserved for small consumers up to now will from then on only be available for parties with priority according to the framework.\n• Projects without priority in congestion areas will therefore face a queue sooner.\n• The order remains roughly: 1. congestion relievers, 2. safety, 3. basic needs. Housing falls under basic needs / housing needs."
        }
      ]
    },
    netpanel: {
      label: "Grid Panel",
      title: "Live grid capacity\nNetherlands",
      desc: "Indicative status based on published congestion areas per grid operator. Updated Q1 2025.",
      cards: [
        { label: "Liander — regions full", value: "91%", sub: "Greater Amsterdam, Flevoland,\nGelderland, North Holland" },
        { label: "Enexis — transport scarcity", value: "84%", sub: "North Brabant, Limburg,\nDrenthe, Friesland" },
        { label: "Stedin — congestion zones", value: "78%", sub: "South Holland, Zeeland,\nUtrecht" },
        { label: "Expected expansion time", value: "7 yrs", sub: "Average waiting time for\nheavy transport request" },
        { label: "BESS projects operational NL", value: "142", sub: "Combined capacity\n1.8 GWh — growth +34% YoY" },
        { label: "Flexibility market potential", value: "€340M", sub: "Annually available via\nFCR, aFRR, mFRR and IDM" }
      ]
    },
    diagram: {
      label: "System Model",
      title: "Integral approach visualized",
      desc: "Without the right balance between carriers and demanders, an area as well as a system is neither feasible nor executable without high costs."
    },
    aanpak: {
      label: "Approach",
      title: "From quick scan to\noperational area.",
      steps: [
        { num: "01", title: "Quick Scan Location Grip", desc: "Analysis of the environment, local energy carriers and demand, spatial preconditions. Energy profiling and residual flows. Output: feasibility matrix.", tag: "2–4 weeks" },
        { num: "02", title: "Grid Integration Plan", desc: "Spatial design of the system: generation, storage, distribution, and phasing aligned with transport capacity. Including energy system.", tag: "6–10 weeks" },
        { num: "03", title: "Stakeholder Management", desc: "Guidance during consultations, municipality-developers-grid operators, decision-making, and structure. Documenting and recording where necessary.", tag: "Parallel" },
        { num: "04", title: "Process Management", desc: "Project guidance up to the operational phase. Also during EMS configurations, integration of energy systems, and Netzero2050 strategies.", tag: "Continuous" }
      ]
    },
    tools: {
      label: "Instruments",
      title: "The toolbox",
      pills: [
        { title: "BESS — Battery Storage", desc: "Storage as a grid buffer, this lowers peak load, increases self-sufficiency, and generates renewable revenue.", badge: "Flexibility Market" },
        { title: "PV + Charging Infra", desc: "Solar, storage, and EV charging infrastructure via Solar Parking. Maximum utilization of available space - dual-function use, flex and services such as potential ERE revenue via EV-charge.", badge: "Mobility" },
        { title: "Energy Management:", desc: "Smart energy management system that optimizes supply, demand, and grid tariffs in real-time at the area level.", badge: "AI-driven" },
        { title: "Energy Community (CEC)", desc: "Legal framework via Energy Act 2024 for joint generation, storage, and sharing within an area, including group contract (GTO) and energy cooperative possibilities.", badge: "Energy Act 2024" },
        { title: "Dynamic Grid Connection", desc: "Contractual flexibility agreements with grid operator: controllable power in exchange for priority connection.", badge: "Grid Operator" },
        { title: "Phasing Model", desc: "Construction program aligned with grid capacity and integration. Taking into account passive house and energy system grid-conscious.", badge: "Spatial" }
      ]
    },
    banner: {
      title: "More coming soon!",
      desc: "A quick scan calculation tool, system-aware."
    },
    projecten: {
      label: "Case Studies",
      title: "Case Studies",
      rows: [
        { num: "001", name: "Dronten Zuid", loc: "Flevoland — 300 homes", status: "Principle request" },
        { num: "002", name: "Harderwijk", loc: "Gelderland — 200MW", status: "Consultation" },
        { num: "003", name: "Hoorn", loc: "North Holland — 100MW", status: "Feasibility research" }
      ]
    },
    contact: {
      label: "Get Started",
      title1: "Make your area",
      title2: "grid-ready",
      title3: "?",
      desc: "Start with a Quick Scan of your location — to get a clear picture of opportunities and risks.",
      btn1: "Request Quick Scan",
      btn2: "More about VOVON"
    },
    legal: {
      back: "← Back to home",
      privacy: {
        title: "Privacy Statement",
        p1: "This website does not process or store personal data.",
        p2: "No personal data is collected, stored, or analyzed via this website. No forms are used and no user registration is applied.",
        p3: "For questions, collaborations, or contact, we refer you to the websites of the initiators:",
        p4: "When you contact us via these websites, the privacy policy of the relevant organization applies."
      },
      cookie: {
        title: "Cookie Policy",
        p1: "This website only uses functional cookies that are necessary for the proper functioning of the website.",
        p2: "No marketing cookies, tracking cookies, or personal data are collected via this website.",
        p3: "Any external links to other websites may have their own cookie policy. We advise you to consult the privacy and cookie statements of those websites."
      },
      disclaimer: {
        title: "Disclaimer",
        p1: "The information on this website has been compiled with care by VOVON development. The content of this website is intended solely for general information. No rights can be derived from the content of this website.",
        p2: "Concepts, drawings, visualizations, and project descriptions shown on this website are indicative and may change during the development process.",
        p3: "VOVON development accepts no liability for any direct or indirect damage resulting from the use of the information on this website.",
        p4: "This website may contain references to external websites of partners or involved organizations. We have no control over the content of these external websites and cannot be held responsible for their content.",
        p5: "All texts, images, and concepts on this website are protected by copyrights and intellectual property rights. Use or reproduction without prior permission is not permitted."
      }
    },
    footer: {
      legal: "Privacy, Cookies & Disclaimer",
      copyright: "Copyright © 2026 VOVON"
    },
    positionPaper: {
      title: "Position Paper — System-Aware Netherlands",
      subtitle: "From Randstad to Bandstad: steering on the energy system as the foundation for area development",
      sections: [
        {
          title: "1. Background: The Netherlands is getting stuck in its own success",
          content: "The Netherlands is at a tipping point.\n\nThe classic development logic — building where there is demand, adapting infrastructure afterwards — no longer works. The limits have been reached:\n• Grid congestion slows down housing construction and the economy\n• Spatial pressure in the Randstad is at its maximum\n• Energy, mobility, and space are no longer systems that can be developed separately\n\nThe map of the Netherlands is shifting.\n\nThe Randstad is no longer the only center of gravity. A new spatial reality is emerging: the Bandstad — a network of regions around the Randstad where space, energy, and growth come together."
        },
        {
          title: "2. Problem definition: sectoral development fails",
          content: "Current practice:\n• Housing construction → driven by land and market\n• Energy → driven by grid operators and legislation\n• Mobility → driven by infrastructure programs\n\n👉 Result:\n• projects slow down or come to a standstill\n• investments do not align with each other\n• social costs are rising\n\nThe core of the problem:\n\nThe Netherlands is still developing sectorally, while the challenges are system issues."
        },
        {
          title: "3. The Bandstad as a new development reality",
          content: "The “Bandstad” forms the new playing field for growth:\n• Flevoland, Zwolle, Arnhem–Nijmegen, Brabant\n• Available space for living and economy\n• Strategic location relative to energy infrastructure\n\nBut:\n\nWithout system-aware development, the Bandstad will become the same bottleneck as the Randstad."
        },
        {
          title: "4. Solution direction: system-aware area development",
          content: "System-aware development means:\n\nThe energy system is not a precondition, but the starting point of area development.\n\nCore principles:\n\n1. Energy as an organizing principle\n• Develop based on available and realizable capacity\n• Integrally design local generation, storage, and flexibility\n\n2. Area development = system development\n• Living, working, mobility, and energy in one design\n• From “project” to “ecosystem”\n\n3. From grid connection to energy network\n• Closed distribution systems (GDS)\n• Energy hubs and local energy communities\n\n4. Steering on time instead of just space\n• Phasing aligned with energy capacity\n• Smart programming prevents standstill"
        },
        {
          title: "5. What does this require from the State and regions?",
          content: "From policy to execution\n\n1. Make room for experiment and acceleration\n• Relax rules for GDS and energy hubs\n• Create experimental areas (Bandstad regions)\n\n2. Link housing construction and energy programming\n• No housing construction without an energy plan\n• Mandatory integral programming\n\n3. Steer on system value instead of sectoral KPIs\n• Not just numbers of homes\n• But also:\n  - grid impact\n  - flexibility\n  - energy autonomy\n\n4. Facilitate new forms of collaboration\n• Public-private area coalitions\n• Developers as system directors"
        },
        {
          title: "6. The role of systeembewust.nl",
          content: "Systeembewust.nl positions itself as:\n\nAccelerator of integral area development based on the energy system\n\nWe:\n• Translate complex system issues into concrete area concepts\n• Connect governments, grid operators, and market parties\n• Develop calculation models and scenarios for:\n  - energy capacity\n  - phasing\n  - business cases\n\nOur focus:\n• Bandstad regions as a new growth engine\n• Grid-aware living and working areas\n• Energy hubs as the foundation for development"
        },
        {
          title: "7. Call to action: choose system steering",
          content: "The Netherlands has no shortage of plans.\nIt has a shortage of coherence.\n\nThe coming years will determine whether:\n• we remain stuck in procedures and congestion\nor\n• we accelerate by integrally steering on systems\n\nThe Bandstad offers space.\nThe energy system determines whether we can utilize that space."
        }
      ]
    }
  }
};
