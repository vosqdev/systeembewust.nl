export type Language = 'nl' | 'en';

export const translations = {
  nl: {
    nav: {
      home: "Home",
      netpanel: "Netpanel",
      werkwijze: "Werkwijze",
      casestudy: "Samenwerking",
      faq: "FAQ",
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
      "Energiewet 2026: energie gemeenschappen wettelijk verankerd",
      "2025 kamerbrief decentrale ontwikkeling van energiesystemen",
      "2026 motie tweede kamer - de FGU-regio - aanmerken als innovatiegebied",
      "zon/wind + opslag + EV laden"
    ],
    faq: {
      label: "FAQ",
      title: "Net­bewust ontwerpen van de grond af",
      desc: "Ontwikkeling en energie-infrastructuur worden te vaak los van elkaar gepland en start energieplanologie in de ruimtelijke ontwikkeling te laat. Combineer beide disciplines — zodat de nieuwbouw woonwijk of bedrijventerrein aansluitbaar is vóórdat de eerste paal de grond in gaat.\nMaar ook reageer op tijd bij een aansluiting zodat je door kunt bouwen.",
      accordions: [
        {
          title: "Wat is netbewust?",
          content: "Netbewust ontwikkelen of bouwen integreert de beschikbare netcapaciteit als randvoorwaarde in het ruimtelijk, technische en programmatisch ontwerp. Denk aan fasering op basis van transportcapaciteit, contractering, clustering van functies voor gedeeld netgebruik, en opslag als buffer. Maar ook mobiliteit en laadinfra."
        },
        {
          title: "Waarom is dit nu urgent?",
          content: "In meer dan 87% van de Nederlandse netgebieden bestaat transportschaarste. Nieuwe aansluitingen worden geweigerd of uitgesteld met 5–10 jaar. Bestaande aansluitingen kunnen niet worden vergroot. Wie niet netbewust ontwerpt, riskeert stilstand van de bouw, maar ook van zijn bedrijf."
        },
        {
          title: "Welke partijen?",
          content: "Gemeenten, woningcorporaties, netbeheerders, projectontwikkelaars en bouwers. Denk vanuit ketensamenwerking, ecoketens en systemen zorg voor de juist input en ga publiek-privaat samenwerken."
        },
        {
          title: "Hoe verhoudt dit zich tot de Energiewet 2026?",
          content: "De Energiewet 2026 verankert 'Collectieve' Energiegemeenschappen (CEC) en energie-deling wettelijk. Dit creëert nieuwe kansen voor gebieden vanuit energie-profiel — productie, opslag, flexibiliteit, gebruik."
        },
        {
          title: "Nieuw ACM-prioriteringskader (1 juli 2026)",
          content: "Per 1 juli 2026 gaat bij netcongestie de overgangsfase van het nieuwe ACM-prioriteringskader in. Dat betekent in de praktijk:\n\n• Kleinverbruikers komen dan óók in beeld binnen het prioriteringskader; tot die datum gold de oude werkwijze nog.\n• De tot nu toe gereserveerde ruimte voor kleinverbruik is vanaf dan alleen nog beschikbaar voor partijen met prioriteit volgens het kader.\n• Projecten zonder prioriteit krijgen in congestiegebieden dus eerder te maken met een wachtrij.\n• De volgorde blijft grofweg: 1. congestieverzachters, 2. veiligheid, 3. basisbehoeften. Woningbouw valt onder basisbehoeften / woonbehoefte."
        },
        {
          title: "De sleutel tot een werkend energiesysteem",
          content: "De energietransitie vraagt niet alleen om meer opwek, maar vooral om slimmer gebruik van het bestaande systeem. Daarbij is één type data onmisbaar: kwartierdata.\n\nKwartierdata geeft inzicht in energieverbruik en -opwek per 15 minuten. Waar traditionele energiedata slechts totalen laat zien, maakt kwartierdata zichtbaar wanneer en hoe intensief het energiesysteem daadwerkelijk wordt belast. En precies daar ligt de kern van het probleem én de oplossing."
        }
      ]
    },
    netbewust: {
      label: "Netbewust",
      title: "Net­bewust ontwerpen van de grond af",
      desc: "Ontwikkeling en energie-infrastructuur worden te vaak los van elkaar gepland en start energieplanologie in de ruimtelijke ontwikkeling te laat. Combineer beide disciplines — zodat de nieuwbouw woonwijk of bedrijventerrein aansluitbaar is vóórdat de eerste paal de grond in gaat. Maar ook reageer op tijd bij een aansluiting zodat je door kunt bouwen",
      section1: {
        title: "Van verbruik naar vermogen",
        desc: "Netcongestie wordt niet veroorzaakt door te veel energie, maar door gelijktijdigheid en piekbelasting. Het energiesysteem wordt afgerekend op vermogen (kW), niet alleen op volume (kWh).",
        header: "Met data wordt inzichtelijk:",
        bullets: [
          "waar en wanneer pieken ontstaan",
          "hoe infrastructuur daadwerkelijk wordt benut",
          "waar flexibiliteit aanwezig is"
        ],
        footer: "Dit maakt het mogelijk om gericht te sturen in plaats van generiek te beperken."
      },
      section2: {
        title: "Fundament voor slimme energiesystemen",
        header: "Data vormt de basis voor:",
        bullets: [
          "energy hubs en lokale energiesystemen",
          "batterijopslag (BESS) en peak shaving",
          "slim laden van mobiliteit",
          "afstemming tussen opwek, opslag en verbruik"
        ],
        footer: "Zonder data blijft sturing reactief. Met data wordt het systeem voorspelbaar en stuurbaar."
      },
      section3: {
        title: "Wie werkt met data:",
        bullets: [
          "begrijpt het echte gedrag van het energiesysteem",
          "kan sturen op zowel technisch als economisch niveau",
          "en legt de basis voor toekomstbestendige plek"
        ]
      }
    },
    netpanel: {
      label: "Netpanel",
      title: "Live netcapaciteit\nNederland",
      desc: "Indicatieve status op basis van gepubliceerde congestiegebieden per netbeheerder. Bijgewerkt juli 2026.",
      tabs: {
        afname: "Afname (Verbruik)",
        invoeding: "Invoeding (Teruglevering)"
      },
      cards: {
        afname: [
          { label: "Liander — regio's vol", value: "95%", sub: "Groot-Amsterdam, Flevoland,\nGelderland, Noord-Holland, Friesland-Zuid" },
          { label: "Enexis — transport­schaarste", value: "88%", sub: "Noord-Brabant, Limburg,\nDrenthe, Overijssel, Groningen" },
          { label: "Stedin — congestiezones", value: "84%", sub: "Zuid-Holland, Zeeland,\nUtrecht" },
          { label: "Verwachte uitbreidingstermijn", value: "5-10 jr", sub: "Gemiddelde wachttijd voor\nzwaar transport­verzoek" },
          { label: "BESS-projecten operationeel NL", value: "248", sub: "Gecombineerde capaciteit\n3.2 GWh — groei +75% YoY" },
          { label: "Flexibiliteitsmarkt potentie", value: "€480M", sub: "Jaarlijks beschikbaar via\nFCR, aFRR, mFRR, GOPACS en IDM" }
        ],
        invoeding: [
          { label: "Liander — teruglever­stop", value: "98%", sub: "Friesland, Flevoland, Gelderland,\nkop van Noord-Holland" },
          { label: "Enexis — opwek­congestie", value: "93%", sub: "Groningen, Drenthe, Overijssel,\nNoord-Brabant" },
          { label: "Stedin — invoed­beperkingen", value: "79%", sub: "Utrecht, Zuid-Hollandse eilanden,\nZeeland" },
          { label: "Verwachte uitbreidingstermijn", value: "4-8 jr", sub: "Gemiddelde wachttijd voor\ngrootschalige invoeding" },
          { label: "Batterij-initiatieven (BESS)", value: "3.5 GW", sub: "In de wachtrij voor\nnetinpassing in heel NL" },
          { label: "Curtailment (Afschakeling)", value: "12%", sub: "Gemiddeld verlies van zonne-energie\ndoor lokale overbelasting" }
        ]
      }
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
        { title: "Energie­gemeenschap (CEC)", desc: "Wettelijk kader via Energiewet 2026 voor gezamenlijk opwekken, opslaan en delen binnen een gebied ook groepscontract (GTO) en energiecoöperatie mogelijkheden.", badge: "Energiewet 2026" },
        { title: "Dynamische Netaansluiting", desc: "Contractuele flexibiliteitsafspraken met netbeheerder: stuurbaar vermogen in ruil voor prioriteitsaansluiting.", badge: "Netbeheerder" },
        { title: "Faserings­model", desc: "Bouwprogramma afgestemd op netcapaciteit en integratie. Rekening houdend met passief huis en energiesysteem systeem netbewust.", badge: "Ruimtelijk" }
      ]
    },
    banner: {
      title: "Binnenkort meer!",
      desc: "Een quickscan rekentool, systeembewust."
    },
    samenwerking: {
      label: "Samenwerking",
      title: "PUBLIEK-PRIVATE SAMENWERKING",
      subtitle1: "Netbewust ontwikkelen vanuit energiesysteem ",
      subtitleHighlight: "kan niet anders dan publiek-privaat",
      pillars: [
        {
          title: "GEMEENTE",
          color: "#0D9488",
          items: [
            "Borgt netcapaciteit in omgevingsplan",
            "Reserveert trafo-locaties en MS-routes",
            "Netbewuste eisen in gronduitgifte en erfpacht",
            "Prioriteert bouwlocaties op congestiekaart",
            "Haalbare gronduitgifte"
          ]
        },
        {
          title: "NETBEHEERDER",
          color: "#F59E0B",
          items: [
            "Vroeg betrokken bij planvorming",
            "Capaciteitsplan afgestemd op fasering en vermogen",
            "Flex-contracten met energiegemeenschap",
            "Ruimte bieden aan opslag als congestiemaatregel",
            "Verantwoordelijke voor leveringszekerheid aansluiting"
          ]
        },
        {
          title: "ONTWIKKELAAR",
          color: "#06B6D4",
          items: [
            "Quickscan energieprofiel bij locatieaankoop / tender",
            "Energieconcept in SO/VO-fase, oprichten energiegemeenschap initiëren",
            "Verkoopbaarheid vastgoed",
            "Afname zekerheid bij gronduitgifte / tenders",
            "Verantwoordelijke voor tijdige en juiste aanvraag"
          ]
        },
        {
          title: "BEWONERS",
          color: "#EC4899",
          items: [
            "Lid van gemeenschap inzicht in eigen energie verbruik",
            "Stabielere woonlasten vanuit delen",
            "Stemt in met vraag & behoefte",
            "Betalen de rekening van netbewust ontwikkelen & bouwen vanuit gronduitgifte"
          ]
        }
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
    dataPage: {
      title: "Data: de sleutel tot een werkend energiesysteem",
      intro1: "De energietransitie vraagt niet alleen om meer opwek, maar vooral om slimmer gebruik van het bestaande systeem. Daarbij is één type data onmisbaar: kwartierdata.",
      intro2: "Kwartierdata geeft inzicht in energieverbruik en -opwek per 15 minuten. Waar traditionele energiedata slechts totalen laat zien, maakt kwartierdata zichtbaar wanneer en hoe intensief het energiesysteem daadwerkelijk wordt belast. En precies daar ligt de kern van het probleem én de oplossing.",
      section1: {
        title: "Van verbruik naar vermogen",
        p1: "Netcongestie wordt niet veroorzaakt door te veel energie, maar door gelijktijdigheid en piekbelasting. Het energiesysteem wordt afgerekend op vermogen (kW), niet alleen op volume (kWh).",
        p2: "Met kwartierdata wordt inzichtelijk:",
        bullets: [
          "waar en wanneer pieken ontstaan",
          "hoe infrastructuur daadwerkelijk wordt benut",
          "waar flexibiliteit aanwezig is"
        ],
        p3: "Dit maakt het mogelijk om gericht te sturen in plaats van generiek te beperken."
      },
      section2: {
        title: "Fundament voor slimme energiesystemen",
        p1: "Data vormt de basis voor:",
        bullets: [
          "energy hubs en lokale energiesystemen",
          "batterijopslag (BESS) en peak shaving",
          "slim laden van mobiliteit",
          "afstemming tussen opwek, opslag en verbruik"
        ],
        p2: "Zonder data blijft sturing reactief. Met kwartierdata wordt het systeem voorspelbaar en stuurbaar."
      },
      section3: {
        title: "Van beperking naar benutting",
        p1: "Waar het huidige energiesysteem vaak wordt ervaren als een beperkende factor, maakt kwartierdata het mogelijk om juist ruimte te creëren binnen bestaande netcapaciteit.",
        p2: "Door inzicht te combineren met slimme sturing:",
        bullets: [
          "worden pieken afgevlakt",
          "wordt bestaande infrastructuur efficiënter gebruikt",
          "ontstaan nieuwe verdienmodellen rondom flexibiliteit"
        ],
        p3: "Dit is de essentie van een systeembewuste aanpak: niet alleen uitbreiden, maar eerst optimaliseren wat er al is."
      },
      section4: {
        title: "Systeembewust perspectief",
        p1: "Binnen Systeembewust zien wij kwartierdata niet als technische bijzaak, maar als een strategisch instrument. Het verbindt energie, ruimte en gebruik in één integrale oplossing.",
        p2: "Wie werkt met data:",
        bullets: [
          "begrijpt het echte gedrag van het energiesysteem",
          "kan sturen op zowel technisch als economisch niveau",
          "en legt de basis voor toekomstbestendige plek"
        ]
      },
      conclusion: "Data maakt zichtbaar wat voorheen verborgen bleef. En juist dat inzicht maakt de energietransitie uitvoerbaar.",
      back: "Terug naar home"
    },
    footer: {
      legal: "Privacy, Cookies & Disclaimer",
      copyright: "Copyright © 2026 VOVON"
    },
    frameworks: {
      tabs: {
        routekaart: "De Routekaart (6 Stappen)",
        locatieNaarSysteem: "Locatie naar Systeem",
        planvorming: "Voor Planvorming"
      },
      routekaart: {
        label: "De Routekaart",
        title: "In 6 stappen naar netbewuste ontwikkeling",
        steps: [
          { num: "1", title: "Initiatief", desc: "Start met net impact quickscan\n+ aansluiting, doelgroep , energieprofiel", color: "#0D9488" },
          { num: "2", title: "Concept", desc: "Energiesysteem incl. opslag\n+ mobiliteit haalbaarheid", color: "#E11D48" },
          { num: "3", title: "Planvorming", desc: "Leiding-routes (smart grid) +\ntrafo&opslag in stedenbouwk. plan", color: "#EC4899" },
          { num: "4", title: "Ontwerp", desc: "Capaciteitsaanvraag\n+ congestie verzachtende maatregelen", color: "#F59E0B" },
          { num: "5", title: "Realisatie", desc: "Tijdig aansluiting op basis van\nenergiebehoefte vanuit profiel\nOVG + huisnummerbesluit", color: "#3B82F6" },
          { num: "6", title: "Beheer", desc: "Flex-contract\n+ CO₂-balans 2050", color: "#10B981" }
        ]
      },
      locatieNaarSysteem: {
        label: "Systeemopzet",
        title: "Van locatie naar werkend energiesysteem",
        cols: [
          {
            title: "Voorbereiden",
            color: "#0D9488",
            items: [
              "Data dragers & vragers inventariseren",
              "Inzicht in huidige en toekomstige energieopgaven",
              "Technische, financiële en ruimtelijke haalbaarheid",
              "Netimpact quickscan (Grip op Locatie)"
            ]
          },
          {
            title: "Organiseren",
            color: "#EC4899",
            items: [
              "Uitgangspunten energiegemeenschap bepalen",
              "Principe-ontwerp (ruimte voor groei)",
              "Plan efficiënte energiesystemen",
              "Afstemming capaciteit met netbeheerder"
            ]
          },
          {
            title: "Realiseren",
            color: "#06B6D4",
            items: [
              "Technische eisen en programma uitwerken",
              "Energiegemeenschap oprichten (CEC/REC)",
              "Aansluiting + GDS/smart grid realiseren",
              "Flex-contracten + EMS in beheer nemen"
            ]
          }
        ]
      },
      planvorming: {
        label: "Voor Planvorming",
        title: "Netbewust ontwikkelen",
        phases: [
          {
            phase: "Pre-initiatieffase",
            color: "#F59E0B",
            content: "Quickscan energieprofiel + Grip op Locatie check bij verwerving",
            note: "Voorkomt financieel verlies op locaties met netcongestie"
          },
          {
            phase: "SO/VO-fase",
            color: "#0D9488",
            content: "Energieconcept laten doorrekenen (MW totaal/piek, teruglevering, BESS, EV-mobiliteit)",
            note: "Lagere infrastructuurkosten door slim ontwerp"
          },
          {
            phase: "Omgevingsplan",
            color: "#EC4899",
            content: "Trafo-locatie + LS/MS-route vastleggen, netbeheerder aanhaken",
            note: "Minder planrisico, snellere vergunning"
          },
          {
            phase: "Bouwvoorbereiding",
            color: "#10B981",
            content: "Aansluiting aanvraag zodra VO gereed (BAG, huisnummerbesluit)",
            note: "Sluitende bouwplanning — gecontracteerd vermogen is de bottleneck, niet de aansluiting"
          }
        ]
      }
    }
  },
  en: {
    nav: {
      home: "Home",
      netpanel: "Grid Panel",
      werkwijze: "Approach",
      casestudy: "Collaboration",
      faq: "FAQ",
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
      "Energy Act 2026: energy communities legally anchored",
      "2025 parliamentary letter on decentralized development of energy systems",
      "2026 parliamentary motion - designate the FGU region as an innovation area",
      "solar/wind + storage + EV charging"
    ],
    faq: {
      label: "FAQ",
      title: "Grid-aware design from the ground up",
      desc: "Development and energy infrastructure are too often planned separately and energy planning starts too late in spatial development. Combine both disciplines — so that the new residential area or business park is connectable before the first pile is driven into the ground.\nBut also respond on time regarding a connection so you can continue building.",
      accordions: [
        {
          title: "What is grid-aware?",
          content: "Grid-aware development or construction integrates the available grid capacity as a precondition in the spatial, technical, and programmatic design. Think of phasing based on transport capacity, contracting, clustering functions for shared grid use, and storage as a buffer. But also mobility and charging infrastructure."
        },
        {
          title: "Why is this urgent now?",
          content: "There is transport scarcity in more than 87% of Dutch grid areas. New connections are refused or delayed by 5–10 years. Existing connections cannot be enlarged. Those who do not design grid-aware risk a standstill of construction, but also of their business."
        },
        {
          title: "Which parties?",
          content: "Municipalities, housing corporations, grid operators, project developers, and builders. Think from chain collaboration, eco-chains and systems ensure the right input and engage in public-private partnerships."
        },
        {
          title: "How does this relate to the Energy Act 2026?",
          content: "The Energy Act 2026 legally anchors 'Collective' Energy Communities (CEC) and energy sharing. This creates new opportunities for areas based on energy profile — production, storage, flexibility, usage."
        },
        {
          title: "New ACM Prioritization Framework (July 1, 2026)",
          content: "As of July 1, 2026, the transition phase of the new ACM prioritization framework for grid congestion will begin. In practice, this means:\n\n• Small consumers will then also be included in the prioritization framework; until that date, the old method still applied.\n• The space reserved for small consumers up to now will from then on only be available for parties with priority according to the framework.\n• Projects without priority in congestion areas will therefore face a queue sooner.\n• The order remains roughly: 1. congestion relievers, 2. safety, 3. basic needs. Housing falls under basic needs / housing needs."
        },
        {
          title: "The key to a working energy system",
          content: "The energy transition requires not only more generation, but above all smarter use of the existing system. One type of data is indispensable here: quarter-hourly data.\n\nQuarter-hourly data provides insight into energy consumption and generation per 15 minutes. Where traditional energy data only shows totals, quarter-hourly data makes visible when and how intensively the energy system is actually loaded. And exactly there lies the core of the problem and the solution."
        }
      ]
    },
    netbewust: {
      label: "Grid-aware",
      title: "Grid-aware design from the ground up",
      desc: "Development and energy infrastructure are too often planned separately and energy planning starts too late in spatial development. Combine both disciplines — so that the new residential area or business park is connectable before the first pile is driven into the ground. But also respond on time regarding a connection so you can continue building.",
      section1: {
        title: "From consumption to power",
        desc: "Grid congestion is not caused by too much energy, but by simultaneity and peak loads. The energy system is billed on power (kW), not just volume (kWh).",
        header: "With data, it becomes clear:",
        bullets: [
          "where and when peaks occur",
          "how infrastructure is actually utilized",
          "where flexibility is present"
        ],
        footer: "This makes it possible to target control instead of generic restriction."
      },
      section2: {
        title: "Foundation for smart energy systems",
        header: "Data forms the basis for:",
        bullets: [
          "energy hubs and local energy systems",
          "battery storage (BESS) and peak shaving",
          "smart charging of mobility",
          "coordination between generation, storage, and consumption"
        ],
        footer: "Without data, control remains reactive. With data, the system becomes predictable and controllable."
      },
      section3: {
        title: "Who works with data:",
        bullets: [
          "understands the real behavior of the energy system",
          "can steer on both a technical and economic level",
          "and lays the foundation for a future-proof area"
        ]
      }
    },
    netpanel: {
      label: "Grid Panel",
      title: "Live grid capacity\nNetherlands",
      desc: "Indicative status based on published congestion areas per grid operator. Updated July 2026.",
      tabs: {
        afname: "Consumption (Demand)",
        invoeding: "Feed-in (Generation)"
      },
      cards: {
        afname: [
          { label: "Liander — regions full", value: "95%", sub: "Greater Amsterdam, Flevoland,\nGelderland, North Holland, South-Friesland" },
          { label: "Enexis — transport scarcity", value: "88%", sub: "North Brabant, Limburg,\nDrenthe, Overijssel, Groningen" },
          { label: "Stedin — congestion zones", value: "84%", sub: "South Holland, Zeeland,\nUtrecht" },
          { label: "Expected expansion time", value: "5-10 yrs", sub: "Average waiting time for\nheavy transport request" },
          { label: "BESS projects operational NL", value: "248", sub: "Combined capacity\n3.2 GWh — growth +75% YoY" },
          { label: "Flexibility market potential", value: "€480M", sub: "Annually available via\nFCR, aFRR, mFRR, GOPACS and IDM" }
        ],
        invoeding: [
          { label: "Liander — feed-in stop", value: "98%", sub: "Friesland, Flevoland, Gelderland,\ntop of North Holland" },
          { label: "Enexis — generation congestion", value: "93%", sub: "Groningen, Drenthe, Overijssel,\nNorth Brabant" },
          { label: "Stedin — feed-in limits", value: "79%", sub: "Utrecht, South Holland islands,\nZeeland" },
          { label: "Expected expansion time", value: "4-8 yrs", sub: "Average waiting time for\nlarge-scale feed-in connection" },
          { label: "Battery initiatives (BESS)", value: "3.5 GW", sub: "In queue for grid integration\nacross the Netherlands" },
          { label: "Curtailment (Shedding)", value: "12%", sub: "Average solar energy loss due to\nlocal system overloading" }
        ]
      }
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
        { title: "Energy Community (CEC)", desc: "Legal framework via Energy Act 2026 for joint generation, storage, and sharing within an area, including group contract (GTO) and energy cooperative possibilities.", badge: "Energy Act 2026" },
        { title: "Dynamic Grid Connection", desc: "Contractual flexibility agreements with grid operator: controllable power in exchange for priority connection.", badge: "Grid Operator" },
        { title: "Phasing Model", desc: "Construction program aligned with grid capacity and integration. Taking into account passive house and energy system grid-conscious.", badge: "Spatial" }
      ]
    },
    banner: {
      title: "More coming soon!",
      desc: "A quick scan calculation tool, system-aware."
    },
    samenwerking: {
      label: "Collaboration",
      title: "PUBLIC-PRIVATE PARTNERSHIP",
      subtitle1: "Grid-aware development from an energy system perspective ",
      subtitleHighlight: "can only be public-private",
      pillars: [
        {
          title: "MUNICIPALITY",
          color: "#0D9488",
          items: [
            "Secures grid capacity in zoning plan",
            "Reserves transformer locations and medium voltage routes",
            "Grid-aware requirements in land issuance and ground lease",
            "Prioritizes building locations on congestion map",
            "Feasible land issuance"
          ]
        },
        {
          title: "GRID OPERATOR",
          color: "#F59E0B",
          items: [
            "Involved early in planning phase",
            "Capacity plan aligned with phasing and capacity",
            "Flex contracts with energy community",
            "Provide space for storage as congestion mitigation measure",
            "Responsible for security of supply of the connection"
          ]
        },
        {
          title: "DEVELOPER",
          color: "#06B6D4",
          items: [
            "Quickscan energy profile at location acquisition / tender",
            "Energy concept in SO/VO phase, initiate establishment of energy community",
            "Saleability of real estate",
            "Take-off certainty in land issuance / tenders",
            "Responsible for timely and correct application"
          ]
        },
        {
          title: "RESIDENTS",
          color: "#EC4899",
          items: [
            "Member of community, insight into own energy consumption",
            "More stable housing costs from sharing",
            "Agrees with demand & need",
            "Pays the bill for grid-aware development & construction from land issuance"
          ]
        }
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
    dataPage: {
      title: "Data: the key to a working energy system",
      intro1: "The energy transition requires not only more generation, but above all smarter use of the existing system. One type of data is indispensable here: quarter-hourly data.",
      intro2: "Quarter-hourly data provides insight into energy consumption and generation per 15 minutes. Where traditional energy data only shows totals, quarter-hourly data makes visible when and how intensively the energy system is actually loaded. And exactly there lies the core of the problem and the solution.",
      section1: {
        title: "From consumption to power",
        p1: "Grid congestion is not caused by too much energy, but by simultaneity and peak load. The energy system is billed on power (kW), not just on volume (kWh).",
        p2: "With quarter-hourly data, it becomes clear:",
        bullets: [
          "where and when peaks arise",
          "how infrastructure is actually utilized",
          "where flexibility is available"
        ],
        p3: "This makes it possible to steer targeted instead of generically restrict."
      },
      section2: {
        title: "Foundation for smart energy systems",
        p1: "Data forms the basis for:",
        bullets: [
          "energy hubs and local energy systems",
          "battery storage (BESS) and peak shaving",
          "smart charging of mobility",
          "alignment between generation, storage, and consumption"
        ],
        p2: "Without data, steering remains reactive. With quarter-hourly data, the system becomes predictable and controllable."
      },
      section3: {
        title: "From restriction to utilization",
        p1: "Where the current energy system is often experienced as a limiting factor, quarter-hourly data makes it possible to precisely create space within existing grid capacity.",
        p2: "By combining insight with smart steering:",
        bullets: [
          "peaks are flattened",
          "existing infrastructure is used more efficiently",
          "new revenue models arise around flexibility"
        ],
        p3: "This is the essence of a system-aware approach: not just expanding, but first optimizing what is already there."
      },
      section4: {
        title: "System-aware perspective",
        p1: "Within System-aware, we view quarter-hourly data not as a technical side issue, but as a strategic instrument. It connects energy, space, and usage into one integral solution.",
        p2: "Those who work with data:",
        bullets: [
          "understand the real behavior of the energy system",
          "can steer on both a technical and economic level",
          "and lay the foundation for a future-proof place"
        ]
      },
      conclusion: "Data makes visible what previously remained hidden. And exactly that insight makes the energy transition actionable.",
      back: "Back to home"
    },
    footer: {
      legal: "Privacy, Cookies & Disclaimer",
      copyright: "Copyright © 2026 VOVON"
    },
    frameworks: {
      tabs: {
        routekaart: "The Roadmap (6 Steps)",
        locatieNaarSysteem: "Location to System",
        planvorming: "For Planning"
      },
      routekaart: {
        label: "The Roadmap",
        title: "Grid-aware development in 6 steps",
        steps: [
          { num: "1", title: "Initiative", desc: "Start with grid impact quick scan\n+ connection, target group, energy profile", color: "#0D9488" },
          { num: "2", title: "Concept", desc: "Energy system incl. storage\n+ mobility feasibility", color: "#E11D48" },
          { num: "3", title: "Planning Phase", desc: "Cable routes (smart grid) +\ntransformer & storage in urban design plan", color: "#EC4899" },
          { num: "4", title: "Design", desc: "Capacity request\n+ congestion mitigation measures", color: "#F59E0B" },
          { num: "5", title: "Realization", desc: "Timely connection based on\nenergy need from profile\nOVG + house number decision", color: "#3B82F6" },
          { num: "6", title: "Management", desc: "Flex contract\n+ CO₂ balance 2050", color: "#10B981" }
        ]
      },
      locatieNaarSysteem: {
        label: "System Design",
        title: "From location to working energy system",
        cols: [
          {
            title: "Prepare",
            color: "#0D9488",
            items: [
              "Inventory data carriers & demanders",
              "Insight into current and future energy challenges",
              "Technical, financial and spatial feasibility",
              "Grid impact quick scan (Location Grip)"
            ]
          },
          {
            title: "Organize",
            color: "#EC4899",
            items: [
              "Determine principles of energy community",
              "Draft design (room for growth)",
              "Plan efficient energy systems",
              "Align capacity with grid operator"
            ]
          },
          {
            title: "Realize",
            color: "#06B6D4",
            items: [
              "Develop technical requirements and program",
              "Establish energy community (CEC/REC)",
              "Realize connection + private grid/smart grid",
              "Implement flex contracts + EMS in management"
            ]
          }
        ]
      },
      planvorming: {
        label: "For Planning",
        title: "Grid-aware development",
        phases: [
          {
            phase: "Pre-initiative phase",
            color: "#F59E0B",
            content: "Quick scan energy profile + Location Grip check during acquisition",
            note: "Prevents financial loss at locations with grid congestion"
          },
          {
            phase: "SO/VO Phase",
            color: "#0D9488",
            content: "Calculate energy concept (total MW/peak, return delivery, BESS, EV mobility)",
            note: "Lower infrastructure costs due to smart design"
          },
          {
            phase: "Zoning/Spatial Plan",
            color: "#EC4899",
            content: "Secure transformer location + LS/MS route, hook up grid operator",
            note: "Less planning risk, faster permit"
          },
          {
            phase: "Construction Prep",
            color: "#10B981",
            content: "Request connection as soon as VO is ready (BAG, house number decision)",
            note: "Tight construction schedule — contracted capacity is the bottleneck, not the connection"
          }
        ]
      }
    }
  }
};
