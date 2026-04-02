export type Language = 'nl' | 'en';

export const translations = {
  nl: {
    nav: {
      home: "Home",
      watIsHet: "Wat is het",
      netpanel: "Netpanel",
      werkwijze: "Werkwijze",
      casestudy: "Casestudy",
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
    ticker: [
      "Netcongestie NL: 87% regio's vol",
      "BESS-inzet verlaagt piekbelasting met 40%",
      "Energiewet 2024: CEC & REC wettelijk verankerd",
      "Cable pooling: zon + accu op één aansluiting"
    ],
    wat: {
      label: "Wat is het",
      title: "Net­bewust ontwerpen van de grond af",
      desc: "Gebiedsontwikkeling en energie-infrastructuur worden te vaak los van elkaar gepland. Wij combineren beide disciplines — zodat de nieuwbouw woonwijk of bedrijventerrein aansluitbaar is vóórdat de eerste paal de grond in gaat.",
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
          title: "Welke partijen",
          content: "Gemeenten, woningcorporaties, netbeheerders (Liander, Stedin, Enexis), projectontwikkelaars en bouwers. Wij faciliteren de tafel en leveren de input voor samenwerking."
        },
        {
          title: "Hoe verhoudt dit zich tot de Energiewet 2024?",
          content: "De Energiewet 2024 verankert Collectieve Energiegemeenschappen (CEC) en energie-deling wettelijk. Dit creëert nieuwe kansen voor gebieden met een gezamenlijk energie-profiel — precies waar wij op inrichten."
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
        { num: "01", title: "Quickscan Grip op Locatie", desc: "Analyse van de omgeving, lokale energie dragers en vrager, ruimtelijke randvoorwaarden. Output: haalbaarheidsmatrix en go/no-go advies.", tag: "2–4 weken" },
        { num: "02", title: "Netintegratieplan", desc: "Ruimtelijke ontwerp van het systeem: opwek, opslag, distributie en fasering afgestemd op transportcapaciteit. Inclusief energiesysteem.", tag: "6–10 weken" },
        { num: "03", title: "Stakeholderregie", desc: "Begeleiding bij overleg, ontwikkelaars-netbeheerders, gemeentelijke besluitvorming en structuur. Procesregie en documenteren.", tag: "Parallel" },
        { num: "04", title: "Procesregie", desc: "Projectbegeleiding tot operationele fase. Ook tijdens EMS-configuraties, integratie van energiesystemen en Netzero2050 strategieën", tag: "Doorlopend" }
      ]
    },
    tools: {
      label: "Instrumenten",
      title: "Onze technische\ngereedschapskist",
      pills: [
        { title: "BESS — Batterij­opslag", desc: "Grootschalige lithium-ion opslag als nettbuffer. Laagt piekbelasting, verhoogt zelfsufficiëntie en genereert FCR/aFRR-inkomsten.", badge: "Flexibiliteitsmarkt" },
        { title: "PV + Laadinfra", desc: "Zon, opslag en EV-laadinfra via Solar Parking. Maximale benutting van beschikbare ruimte en flexibiliteit.", badge: "Mobiliteit" },
        { title: "Energy Management:", desc: "Slim energiemanagementsysteem dat vraag, aanbod en nettarieven realtime optimaliseert op gebiedsniveau.", badge: "AI-gestuurd" },
        { title: "Energie­gemeenschap (CEC)", desc: "Wettelijk kader via Energiewet 2024 voor gezamenlijk opwekken, opslaan en delen binnen een postcodegebied.", badge: "Energiewet 2024" },
        { title: "Dynamische Netaansluiting", desc: "Contractuele flexibiliteitsafspraken met netbeheerder: stuurbaar vermogen in ruil voor prioriteitsaansluiting.", badge: "Netbeheerder" },
        { title: "Faserings­model", desc: "Bouwprogramma afgestemd op toenemende netcapaciteit. Elk bouwveld systeem bewust pas bij beschikbaar transport.", badge: "Ruimtelijk" }
      ]
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
    }
  },
  en: {
    nav: {
      home: "Home",
      watIsHet: "What is it",
      netpanel: "Grid Panel",
      werkwijze: "Approach",
      casestudy: "Case Studies",
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
    ticker: [
      "NL Grid Congestion: 87% of regions full",
      "BESS deployment reduces peak load by 40%",
      "Energy Act 2024: CEC & REC legally anchored",
      "Cable pooling: solar + battery on one connection"
    ],
    wat: {
      label: "What is it",
      title: "Grid-aware design from the ground up",
      desc: "Area development and energy infrastructure are too often planned separately. We combine both disciplines — so that the new residential area or business park is connectable before the first pile is driven into the ground.",
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
          title: "Which parties are involved?",
          content: "Municipalities, housing corporations, grid operators (Liander, Stedin, Enexis), project developers, and builders. We facilitate the table and provide the input for collaboration."
        },
        {
          title: "How does this relate to the Energy Act 2024?",
          content: "The Energy Act 2024 legally anchors Collective Energy Communities (CEC) and energy sharing. This creates new opportunities for areas with a joint energy profile — exactly what we design for."
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
        { num: "01", title: "Quick Scan Location Grip", desc: "Analysis of the environment, local energy carriers and demand, spatial preconditions. Output: feasibility matrix and go/no-go advice.", tag: "2–4 weeks" },
        { num: "02", title: "Grid Integration Plan", desc: "Spatial design of the system: generation, storage, distribution, and phasing aligned with transport capacity. Including energy system.", tag: "6–10 weeks" },
        { num: "03", title: "Stakeholder Management", desc: "Guidance during consultations, developers-grid operators, municipal decision-making, and structure. Process management and documentation.", tag: "Parallel" },
        { num: "04", title: "Process Management", desc: "Project guidance up to the operational phase. Also during EMS configurations, integration of energy systems, and Netzero2050 strategies.", tag: "Continuous" }
      ]
    },
    tools: {
      label: "Instruments",
      title: "Our technical\ntoolbox",
      pills: [
        { title: "BESS — Battery Storage", desc: "Large-scale lithium-ion storage as a grid buffer. Lowers peak load, increases self-sufficiency, and generates FCR/aFRR revenue.", badge: "Flexibility Market" },
        { title: "PV + Charging Infra", desc: "Solar, storage, and EV charging infrastructure via Solar Parking. Maximum utilization of available space and flexibility.", badge: "Mobility" },
        { title: "Energy Management:", desc: "Smart energy management system that optimizes supply, demand, and grid tariffs in real-time at the area level.", badge: "AI-driven" },
        { title: "Energy Community (CEC)", desc: "Legal framework via Energy Act 2024 for joint generation, storage, and sharing within a postal code area.", badge: "Energy Act 2024" },
        { title: "Dynamic Grid Connection", desc: "Contractual flexibility agreements with grid operator: controllable power in exchange for priority connection.", badge: "Grid Operator" },
        { title: "Phasing Model", desc: "Construction program aligned with increasing grid capacity. Each building field system consciously only when transport is available.", badge: "Spatial" }
      ]
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
    }
  }
};
