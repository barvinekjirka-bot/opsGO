export type Lang = "cs" | "en";

export const copy = {
  cs: {
    meta: {
      title: "OpsGo — Výsledky, ne prezentace.",
      description:
        "OpsGo je butikové provozní poradenství pro supply chain, sklady a plánování. Provozy jsme sami vedli — proto je umíme opravit. Měřitelné výsledky, ne prezentace.",
    },
    nav: {
      links: [
        { label: "Proč my", href: "#why-us" },
        { label: "Komu pomáháme", href: "#who-we-help" },
        { label: "Jak pracujeme", href: "#how-we-work" },
        { label: "Kdo jsme", href: "#who-we-are" },
        { label: "Výsledky", href: "#case-studies" },
      ],
      cta: "Domluvit hovor",
    },
    hero: {
      badge: "Provozní poradenství, které doručuje",
      titleLine1: "Najdeme, kde váš provoz",
      titleAccent: "ztrácí peníze.",
      sub1: "Supply chain. Plánování. Sklady. ERP. Procesy.",
      sub2: "Stavíme na dlouholeté praxi z provozu a na měřitelných výsledcích.",
      ctaPrimary: "Nezávazná konzultace zdarma",
      ctaSecondary: "Jak pracujeme",
      readout: [
        "ZÁSOBY −25 %",
        "SERVICE LEVEL +11 P. B.",
        "CHYBY V PICKINGU −38 %",
        "ADOPCE ERP 96 %",
        "ÚSPORY ~18 MIL. KČ / ROK",
        "PŘESNOST PLÁNOVÁNÍ +19 %",
      ],
    },
    whyUs: {
      label: "Proč my",
      title: "Provoz známe zevnitř.",
      sub: "Roky jsme vedli sklady, plánování i implementace systémů. Dnes tuhle zkušenost přinášíme klientům — s respektem k tomu, jak váš provoz funguje, a s důrazem na výsledky, které se dají změřit.",
      consultantsLabel: "Co od nás nečekejte",
      consultants: [
        "Univerzální řešení bez znalosti vašeho provozu",
        "Doporučení bez pomoci se zavedením do praxe",
        "Účtované hodiny bez jasné vazby na výsledek",
        "Odchod hned po předání závěrečné zprávy",
      ],
      operatorsLabel: "Co dostanete",
      operators: [
        "Zkušenosti z každodenního řízení skladů a plánování",
        "Praktickou podporu přímo při zavádění změn",
        "Závěry podložené daty z vašeho provozu",
        "Partnera, který zůstává, dokud změny nefungují spolehlivě",
      ],
    },
    whoWeHelp: {
      label: "Komu pomáháme",
      title: "Firmám, které vědí, že něco drhne — jen nevědí kde.",
      segments: [
        {
          title: "3PL poskytovatelé",
          desc: "Kontraktní logistika, která potřebuje vyšší průtok a efektivitu slotů bez náboru dalších lidí.",
        },
        {
          title: "FMCG a výroba",
          desc: "Supply chain navázaný na výrobu, kde přesnost plánování a zásoby nesou reálné riziko marže.",
        },
        {
          title: "E-commerce a retail",
          desc: "Rychlá fulfilment operativa, kde chyby v pickingu a service level přímo ovlivňují tržby.",
        },
      ],
    },
    whatWeDo: {
      label: "Co děláme",
      title: "Šest způsobů, jak najdeme a zastavíme únik peněz.",
      services: [
        { title: "Provozní audit", desc: "Prověření skladu, supply chainu a plánování do hloubky." },
        { title: "Optimalizace zásob", desc: "Segmentace, pojistné zásoby, uvolnění vázané hotovosti." },
        { title: "Přesnost forecastu", desc: "Přestavba procesu demand & supply plánování." },
        { title: "ERP připravenost a stabilizace", desc: "Od chaosu po go-live k systému, kterému lidé věří." },
        { title: "Power BI a dashboardy", desc: "Manažerská viditelnost místo ručních excelů." },
        { title: "Kontinuální zlepšování", desc: "KPI review, koučink a standardizované procesy." },
      ],
    },
    howWeWork: {
      label: "Jak pracujeme",
      title: "Pět kroků od prvního hovoru k měřitelným výsledkům.",
      steps: [
        {
          n: "01",
          title: "Úvodní hovor",
          desc: "Krátký, přímý rozhovor o tom, co nefunguje a kde vás to bolí.",
        },
        {
          n: "02",
          title: "Provozní audit",
          desc: "Jdeme do provozu i do dat. Přesně identifikujeme, kudy utíkají peníze.",
        },
        {
          n: "03",
          title: "Business case",
          desc: "Odhad úspor, matice priorit a quick wins, které můžete udělat hned.",
        },
        {
          n: "04",
          title: "Implementace",
          desc: "Doporučení pomáháme zavést přímo v provozu — společně s vaším týmem, krok za krokem.",
        },
        {
          n: "05",
          title: "Kontinuální zlepšování",
          desc: "Měsíční podpora, KPI review, koučink a další vlna zlepšení.",
        },
      ],
    },
    methods: {
      label: "Metodiky a standardy",
      title: "Nejsme vázaní na jednu metodiku. Vybíráme nástroj podle problému.",
      sub: "Přes 13 let praxe v provozu, plánování a projektovém řízení jsme si osvojili standardizované metody napříč obory. Používáme je tak, jak to dává smysl pro váš konkrétní provoz — ne podle toho, co je zrovna v módě.",
      categories: [
        {
          title: "Continuous improvement a kvalita",
          items: [
            { name: "Lean", desc: "Eliminace plýtvání a maximalizace hodnoty pro zákazníka v každém kroku procesu." },
            { name: "Six Sigma (DMAIC)", desc: "Snižování variability a chybovosti pomocí dat — Define, Measure, Analyze, Improve, Control." },
            { name: "Kaizen", desc: "Postupné, týmově řízené zlepšování procesů v malých, opakovatelných krocích." },
            { name: "5S", desc: "Systematická organizace pracoviště — třídění, uspořádání, čistota, standardizace, udržení." },
            { name: "SMED", desc: "Zkracování časů přeseřízení pro flexibilnější a menší výrobní dávky." },
            { name: "Teorie omezení (TOC)", desc: "Identifikace a odstranění úzkého hrdla, které limituje výkon celého provozu." },
            { name: "Value Stream Mapping", desc: "Vizualizace toku materiálu a informací pro odhalení plýtvání a prostojů." },
            { name: "Kanban", desc: "Vizuální řízení toku práce a zásob podle skutečné spotřeby." },
            { name: "PDCA", desc: "Cyklus Plan-Do-Check-Act pro řízené a opakovatelné zlepšování." },
            { name: "Kořenová analýza (5x Proč, Ishikawa)", desc: "Systematické hledání skutečné příčiny problému, ne jen jeho symptomů." },
          ],
        },
        {
          title: "Supply chain a plánování",
          items: [
            { name: "SCOR model", desc: "Standardizovaný rámec Plan–Source–Make–Deliver–Return napříč celým supply chainem." },
            { name: "S&OP / IBP", desc: "Sladění obchodního, výrobního a finančního plánu do jednoho společného čísla." },
            { name: "ABC/XYZ segmentace", desc: "Segmentace zásob podle hodnoty a variability poptávky pro cílenou skladovou politiku." },
            { name: "MRP / DRP", desc: "Plánování materiálových a distribučních potřeb navázané na poptávku a kapacity." },
            { name: "Pojistné zásoby & EOQ", desc: "Výpočet optimální hladiny zásob a velikosti objednávky s ohledem na náklady a riziko výpadku." },
            { name: "Statistický forecasting", desc: "Modely poptávky postavené na datech z historie, sezónnosti a trendu." },
          ],
        },
        {
          title: "Projektové a change řízení",
          items: [
            { name: "PRINCE2", desc: "Strukturovaný rámec řízení projektu s jasnými fázemi, rolemi a řízením rizik." },
            { name: "PMI / PMP standardy", desc: "Best practices projektového řízení uznávané a používané napříč obory." },
            { name: "Agile & Scrum", desc: "Iterativní přístup pro projekty, kde se požadavky vyvíjí za běhu." },
            { name: "Change management", desc: "Strukturovaný přístup k tomu, aby změna skutečně zafungovala u lidí, ne jen na papíře." },
            { name: "Řízení KPI", desc: "Definice a sledování ukazatelů, které skutečně odrážejí výkon provozu." },
          ],
        },
      ],
    },
    businessModel: {
      label: "Obchodní model",
      title: "Transparentní ceny. Každý projekt je jiný.",
      sub: "Neprodáváme hodiny. Nastavíme audit s pevnou cenou, dohodneme implementační projekt a — pokud to dává smysl — zůstáváme jako měsíční partner.",
      tiers: [
        {
          label: "01",
          title: "Provozní audit",
          price: "Pevná cena",
          desc: "Jasně vymezený audit skladu, plánování nebo supply chainu. Cena dohodnutá předem — žádná překvapení.",
        },
        {
          label: "02",
          title: "Implementace",
          price: "Projektově",
          desc: "Zlepšení zavádíme společně s vámi — proces, systém i lidi — dokud nedrží sama.",
        },
        {
          label: "03",
          title: "Měsíční partnerství",
          price: "Volitelné",
          desc: "Průběžná KPI review, koučink a další zlepšování, jakmile jádro stabilně funguje.",
        },
        {
          label: "04",
          title: "Výkonnostní bonus",
          price: "Individuálně",
          desc: "U vybraných projektů může být část odměny vázaná na skutečně doručené úspory.",
        },
      ],
    },
    impact: {
      label: "Měřitelný dopad",
      title: "Takhle vypadá „opraveno“.",
      metrics: [
        "Nižší zásoby",
        "Přesnější forecasting",
        "Vyšší produktivita skladu",
        "Méně chyb v pickingu",
        "Lepší layout skladu",
        "Optimalizovaný replenishment",
        "Lepší plánovací procesy",
        "Vyšší adopce ERP",
        "Méně ruční práce",
        "Konec zbytečných workaroundů",
        "Viditelnost KPI",
        "Vyšší service level",
      ],
    },
    founders: {
      label: "Kdo jsme",
      title: "Dva provozáci. Přes 13 let v provozu i v datech.",
      sub: "OpsGo založili a vedou lidé, kteří audity, implementace i go-live sami odpracovali — a vědí, co obnáší změna v reálném provozu.",
      jiri: {
        name: "Jiří Barvínek",
        role: "Spoluzakladatel — Plánování & Supply Chain",
        bio: "Senior supply chain profesionál s více než 13 lety praxe. Kombinuje provozní zkušenost z první linie se silnou datovou analytikou (Power BI, SQL, Excel). Zaměřuje se na výkon supply chainu skrze plánování, optimalizaci procesů a rozhodování postavené na datech — od skladové podlahy v DHL po implementaci plánovacího systému napříč CEE regionem v Intersnacku.",
        experience: [
          {
            role: "CEE Key User Planning Manager",
            company: "Intersnack, Praha",
            period: "Dub 2025 — dosud",
            desc: "Vede implementaci plánovacího systému napříč CEE regionem. Key user pro demand, supply planning a rozvrhování výroby. Integrace byznysu a systému, standardizace procesů napříč trhy.",
          },
          {
            role: "Planning Manager CZ/SK",
            company: "Intersnack, Choustník / Praha / Trenčín",
            period: "Lis 2023 — Dub 2025",
            desc: "Odpovědnost za demand, supply a plánování výroby. Koordinace výroby, zásobování a exekuce, zlepšení viditelnosti plánování a stability procesů.",
          },
          {
            role: "Administration Manager",
            company: "DHL, Jažlovice",
            period: "Čvc 2020 — Říj 2023",
            desc: "Zástup za Operations Managera / Site Planning Managera. Vedl návrh a implementaci WMS (Blue Yonder). Řídil provozní a procesní projekty.",
          },
          {
            role: "Administration Supervisor → Team Leader → Administration Clerk",
            company: "DHL, Jažlovice",
            period: "Dub 2014 — Čvn 2020",
            desc: "Od administrativní podpory přes vedení týmů v inbound/outbound operativě po vedení administrativního týmu — včetně podpory implementace TMS.",
          },
        ],
        stats: [
          {
            value: "25 %",
            label: "Snížení zásob hotových výrobků",
          },
          {
            value: "~18 mil. Kč",
            label: "Úspory proti předchozímu roku",
          },
          {
            value: "Top 10",
            label: "Talent program DHL CZ",
          },
        ],
      },
      juraj: {
        name: "Juraj Komár",
        role: "Spoluzakladatel",
        placeholder:
          "Kompletní profil a výsledky doplníme v nejbližších dnech. Struktura zrcadlí kartu vlevo — shrnutí, časová osa zkušeností a klíčové úspěchy.",
      },
      award: {
        label: "Týmové ocenění 2025",
        text: "Podíl na transformaci národního supply chainu z nejslabšího na jeden z nejvýkonnějších v CEE regionu — špičkový výkon napříč klíčovými KPI, doručený silným cross-funkčním týmem.",
        value: "~18 mil. Kč",
        valueSub: "měřitelné úspory proti předchozímu roku",
      },
    },
    caseStudies: {
      label: "Výsledky",
      title: "Důkazy, ne sliby.",
      sub: "Detailní case studies s čísly doplňujeme s tím, jak uzavíráme projekty. Struktura níže je připravená na plný obsah.",
      cases: [
        { tag: "Zásoby", title: "Snížení zásob", desc: "Model pojistných zásob postavený na segmentaci — méně vázané hotovosti v hotových výrobcích." },
        { tag: "Plánování", title: "Zlepšení marže", desc: "Přestavba přesnosti forecastu — méně odpisů, lepší fill rate." },
        { tag: "Sklad", title: "Optimalizace skladu", desc: "Redesign layoutu a slottingu pro vyšší hustotu pickingu." },
        { tag: "Plánování", title: "Transformace plánování", desc: "Standardizace demand, supply a výrobního plánování napříč CEE." },
        { tag: "Systémy", title: "Implementace ERP", desc: "Stabilizace WMS/ERP go-live — z chaosu k denní spolehlivosti." },
        { tag: "Reporting", title: "Power BI dashboardy", desc: "Manažerská viditelnost místo ručního reportování v excelech." },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Řekněte nám, kde to bolí.",
      sub: "Za 15 minut poznáme, jestli vám umíme pomoct. Nezávazný, přímý rozhovor o vašem provozu.",
      bookCall: "Rezervovat nezávaznou konzultaci",
      email: "hello@opsgo.cz",
      linkedin: "Spojit se na LinkedIn",
      form: {
        name: "Jméno",
        namePlaceholder: "Vaše jméno",
        company: "Společnost",
        companyPlaceholder: "Název společnosti",
        email: "E-mail",
        emailPlaceholder: "vy@spolecnost.cz",
        message: "Co nefunguje?",
        messagePlaceholder: "Popište nám krátce váš provoz.",
        submit: "Odeslat zprávu",
        sentTitle: "Zpráva odeslána.",
        sentSub: "Ozveme se do jednoho pracovního dne.",
      },
    },
    footer: {
      tagline: "Výsledky, ne prezentace.",
      privacy: "Ochrana soukromí",
      terms: "Obchodní podmínky",
    },
  },
  en: {
    meta: {
      title: "OpsGo — Results, not presentations.",
      description:
        "OpsGo is a boutique operations consultancy for supply chain, warehousing and planning. We've run the operations we now fix — measurable results, not presentations.",
    },
    nav: {
      links: [
        { label: "Why Us", href: "#why-us" },
        { label: "Who We Help", href: "#who-we-help" },
        { label: "How We Work", href: "#how-we-work" },
        { label: "Who We Are", href: "#who-we-are" },
        { label: "Results", href: "#case-studies" },
      ],
      cta: "Book Intro Call",
    },
    hero: {
      badge: "Operations consulting that delivers",
      titleLine1: "We find where your operation",
      titleAccent: "loses money.",
      sub1: "Supply chain. Planning. Warehousing. ERP. Process.",
      sub2: "Built on years of hands-on operations experience — and measurable results.",
      ctaPrimary: "Book Free Intro Call",
      ctaSecondary: "How We Work",
      readout: [
        "INVENTORY −25%",
        "SERVICE LEVEL +11 PTS",
        "PICKING ERRORS −38%",
        "ERP ADOPTION 96%",
        "SAVINGS ~€700K / YR",
        "PLANNING ACCURACY +19%",
      ],
    },
    whyUs: {
      label: "Why Us",
      title: "We know operations from the inside.",
      sub: "We've spent years running warehouses, planning, and system implementations. Today we bring that experience to our clients — with respect for how your operation works, and a focus on results you can measure.",
      consultantsLabel: "What not to expect from us",
      consultants: [
        "One-size-fits-all solutions without knowing your operation",
        "Recommendations without help putting them into practice",
        "Billed hours with no clear link to outcomes",
        "Walking away right after the final report",
      ],
      operatorsLabel: "What you get",
      operators: [
        "Experience from day-to-day warehouse and planning management",
        "Hands-on support while changes are implemented",
        "Conclusions backed by data from your own operation",
        "A partner who stays until the changes work reliably",
      ],
    },
    whoWeHelp: {
      label: "Who We Help",
      title: "Companies that know something is wrong — but not where.",
      segments: [
        {
          title: "3PL Providers",
          desc: "Contract logistics operators who need throughput and slot efficiency without adding headcount.",
        },
        {
          title: "FMCG & Manufacturing",
          desc: "Production-linked supply chains where planning accuracy and inventory carry real margin risk.",
        },
        {
          title: "E-commerce & Retail",
          desc: "Fast-moving fulfilment operations where picking errors and service level directly hit revenue.",
        },
      ],
    },
    whatWeDo: {
      label: "What We Do",
      title: "Six ways we find and close the leak.",
      services: [
        { title: "Operational Audit", desc: "Deep assessment of warehouse, supply chain and planning." },
        { title: "Inventory Optimization", desc: "Segmentation, safety stock, and cash release." },
        { title: "Forecast Accuracy", desc: "Demand & supply planning process rebuild." },
        { title: "ERP Readiness & Stabilization", desc: "From go-live chaos to a system people trust." },
        { title: "Power BI & Dashboards", desc: "Management visibility that replaces spreadsheets." },
        { title: "Continuous Improvement", desc: "KPI reviews, coaching, and standardized processes." },
      ],
    },
    howWeWork: {
      label: "How We Work",
      title: "Five steps from the first call to measurable results.",
      steps: [
        {
          n: "01",
          title: "Discovery Call",
          desc: "A short, direct conversation about what's not working and where you feel the pain.",
        },
        {
          n: "02",
          title: "Operational Audit",
          desc: "We go on-site and into the data. We identify exactly where money is leaking.",
        },
        {
          n: "03",
          title: "Business Case",
          desc: "Estimated savings, a priority matrix, and quick wins you can act on immediately.",
        },
        {
          n: "04",
          title: "Implementation",
          desc: "We help implement the recommendations directly in your operation — together with your team, step by step.",
        },
        {
          n: "05",
          title: "Continuous Improvement",
          desc: "Monthly support, KPI reviews, coaching, and the next round of improvements.",
        },
      ],
    },
    methods: {
      label: "Methods & Standards",
      title: "We're not tied to one methodology. We pick the tool that fits the problem.",
      sub: "Over 13+ years in operations, planning, and project management, we've built fluency across standardized methods from several disciplines. We apply them the way that makes sense for your operation — not whatever happens to be trending.",
      categories: [
        {
          title: "Continuous Improvement & Quality",
          items: [
            { name: "Lean", desc: "Eliminating waste and maximizing customer value at every step of the process." },
            { name: "Six Sigma (DMAIC)", desc: "Reducing variability and defects through data — Define, Measure, Analyze, Improve, Control." },
            { name: "Kaizen", desc: "Incremental, team-driven improvement in small, repeatable steps." },
            { name: "5S", desc: "Systematic workplace organization — sort, set in order, shine, standardize, sustain." },
            { name: "SMED", desc: "Reducing changeover times for more flexible, smaller production batches." },
            { name: "Theory of Constraints (TOC)", desc: "Identifying and removing the bottleneck that limits the whole operation's throughput." },
            { name: "Value Stream Mapping", desc: "Visualizing material and information flow to expose waste and delays." },
            { name: "Kanban", desc: "Visual control of workflow and inventory driven by actual consumption." },
            { name: "PDCA", desc: "The Plan-Do-Check-Act cycle for controlled, repeatable improvement." },
            { name: "Root Cause Analysis (5 Whys, Ishikawa)", desc: "Systematically finding the real cause of a problem, not just its symptoms." },
          ],
        },
        {
          title: "Supply Chain & Planning",
          items: [
            { name: "SCOR Model", desc: "A standardized Plan–Source–Make–Deliver–Return framework across the supply chain." },
            { name: "S&OP / IBP", desc: "Aligning commercial, production, and financial plans into one shared number." },
            { name: "ABC/XYZ Segmentation", desc: "Segmenting inventory by value and demand variability for a targeted stocking policy." },
            { name: "MRP / DRP", desc: "Material and distribution requirements planning tied to demand and capacity." },
            { name: "Safety Stock & EOQ", desc: "Calculating optimal inventory levels and order sizes against cost and stockout risk." },
            { name: "Statistical Forecasting", desc: "Demand models built on historical data, seasonality, and trend." },
          ],
        },
        {
          title: "Project & Change Management",
          items: [
            { name: "PRINCE2", desc: "A structured project management framework with clear stages, roles, and risk control." },
            { name: "PMI / PMP Standards", desc: "Project management best practices recognized and used across industries." },
            { name: "Agile & Scrum", desc: "An iterative approach for projects where requirements evolve along the way." },
            { name: "Change Management", desc: "A structured approach to making change actually stick with people, not just on paper." },
            { name: "KPI Management", desc: "Defining and tracking indicators that genuinely reflect operational performance." },
          ],
        },
      ],
    },
    businessModel: {
      label: "Business Model",
      title: "Transparent pricing. Every project is different.",
      sub: "We don't sell hours. We scope a fixed-price audit, agree on an implementation project, and — if it's the right fit — stay on as a monthly partner.",
      tiers: [
        {
          label: "01",
          title: "Operational Audit",
          price: "Fixed price",
          desc: "A defined-scope audit of your warehouse, planning, or supply chain. Fee agreed upfront — no surprises.",
        },
        {
          label: "02",
          title: "Implementation",
          price: "Project-based",
          desc: "We implement the fixes with you — process, system, and people — until they hold on their own.",
        },
        {
          label: "03",
          title: "Monthly Partnership",
          price: "Optional",
          desc: "Ongoing KPI reviews, coaching, and continuous improvement once the core is stable.",
        },
        {
          label: "04",
          title: "Performance Bonus",
          price: "Case by case",
          desc: "For select projects, part of the fee can be tied to the savings we actually deliver.",
        },
      ],
    },
    impact: {
      label: "Measurable Impact",
      title: "What “fixed” actually looks like.",
      metrics: [
        "Lower inventory",
        "Better forecasting",
        "Higher warehouse productivity",
        "Fewer picking errors",
        "Better warehouse layout",
        "Optimized replenishment",
        "Better planning processes",
        "Higher ERP adoption",
        "Less manual work",
        "No unnecessary workarounds",
        "KPI visibility",
        "Higher service level",
      ],
    },
    founders: {
      label: "Who We Are",
      title: "Two operators. 13+ years on the floor and in the data.",
      sub: "OpsGo is founded and run by people who did the audits, implementations, and go-lives themselves — and know what change takes in a real operation.",
      jiri: {
        name: "Jiří Barvínek",
        role: "Co-Founder — Planning & Supply Chain",
        bio: "Senior supply chain professional with 13+ years of experience, combining hands-on operational expertise with strong data analytics (Power BI, SQL, Excel). Focused on improving supply chain performance through planning, process optimization, and data-driven decision making — from the DHL warehouse floor to CEE-wide planning system implementation at Intersnack.",
        experience: [
          {
            role: "CEE Key User Planning Manager",
            company: "Intersnack, Prague",
            period: "Apr 2025 — Present",
            desc: "Leading the planning system implementation across the CEE region. Key user for demand, supply planning, and production scheduling. Business and system integration, process standardization across markets.",
          },
          {
            role: "Planning Manager CZ/SK",
            company: "Intersnack, Choustník / Prague / Trenčín",
            period: "Nov 2023 — Apr 2025",
            desc: "Responsible for demand, supply and production planning. Coordinated production, supply and execution, and improved planning visibility and process stability.",
          },
          {
            role: "Administration Manager",
            company: "DHL, Jažlovice",
            period: "Jul 2020 — Oct 2023",
            desc: "Acted as Operations Manager / Site Planning Manager cover. Led WMS design and implementation (Blue Yonder). Managed operational and process-related projects.",
          },
          {
            role: "Administration Supervisor → Team Leader → Administration Clerk",
            company: "DHL, Jažlovice",
            period: "Apr 2014 — Jun 2020",
            desc: "Progressed from administrative support through team leadership in inbound/outbound operations to supervising the administration team — supporting a TMS implementation along the way.",
          },
        ],
        stats: [
          {
            value: "25%",
            label: "Finished goods inventory reduced",
          },
          {
            value: "~€700K",
            label: "Savings vs. prior year",
          },
          {
            value: "Top 10",
            label: "DHL CZ Talent Program",
          },
        ],
      },
      juraj: {
        name: "Juraj Komár",
        role: "Co-Founder",
        placeholder:
          "Full bio and track record coming soon. The structure mirrors the card on the left — summary, experience timeline, and key achievements.",
      },
      award: {
        label: "2025 Team Award",
        text: "Contributed to transforming a national supply chain from the lowest-performing to one of the best-performing in the CEE region — top performance across key KPIs, delivered by a high-performing cross-functional team.",
        value: "~€700K",
        valueSub: "measurable savings vs. prior year",
      },
    },
    caseStudies: {
      label: "Results",
      title: "Proof, not promises.",
      sub: "Detailed write-ups and figures are added as projects close. The structure below is ready for full case content.",
      cases: [
        { tag: "Inventory", title: "Inventory Reduction", desc: "Segmentation-driven safety stock model — less cash tied up in finished goods." },
        { tag: "Planning", title: "Margin Improvement", desc: "Forecast accuracy rebuild — fewer write-offs, better fill rates." },
        { tag: "Warehousing", title: "Warehouse Optimization", desc: "Layout and slotting redesign for higher pick density." },
        { tag: "Planning", title: "Planning Transformation", desc: "CEE-wide standardization of demand, supply, and production planning." },
        { tag: "Systems", title: "ERP Implementation", desc: "WMS/ERP go-live stabilization — from chaos to daily reliability." },
        { tag: "Reporting", title: "Power BI Dashboards", desc: "Management visibility replacing manual spreadsheet reporting." },
      ],
    },
    contact: {
      label: "Contact",
      title: "Tell us where it hurts.",
      sub: "15 minutes is enough to know if we can help. A no-obligation, straightforward conversation about your operation.",
      bookCall: "Book a free intro call",
      email: "hello@opsgo.cz",
      linkedin: "Connect on LinkedIn",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        company: "Company",
        companyPlaceholder: "Company name",
        email: "Email",
        emailPlaceholder: "you@company.com",
        message: "What's not working?",
        messagePlaceholder: "Tell us briefly about your operation.",
        submit: "Send message",
        sentTitle: "Message sent.",
        sentSub: "We'll get back to you within one business day.",
      },
    },
    footer: {
      tagline: "Results, not presentations.",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
} as const;

export type Copy = (typeof copy)["cs"];
