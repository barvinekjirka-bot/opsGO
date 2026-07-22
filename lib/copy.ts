export type Lang = "cs" | "en";

export const copy = {
  cs: {
    meta: {
      title: "ZlepsimeTo — Výsledky, ne prezentace.",
      description:
        "ZlepsimeTo je butikové provozní poradenství pro supply chain, sklady a plánování. Provozy jsme sami vedli — proto je umíme opravit. Měřitelné výsledky, ne prezentace.",
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
        "ZÁSOBY −27 %",
        "SERVICE LEVEL +11 P. B.",
        "CHYBY V PICKINGU −38 %",
        "130+ VEDENÝCH PROJEKTŮ",
        "PŘESNOST PLÁNOVÁNÍ +20 %",
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
        { title: "BI nástroje a dashboardy", desc: "Manažerská viditelnost místo ručních excelů." },
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
      sub: "Za více než 25 let společné praxe v provozu, plánování a projektovém řízení jsme si osvojili standardizované metody napříč obory. Používáme je tak, jak to dává smysl pro váš konkrétní provoz — ne podle toho, co je zrovna v módě.",
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
      guarantee: {
        label: "Garance auditu",
        title: "Nenajdeme aspoň 3 příležitosti ke zlepšení? Podáme si ruce — a audit neplatíte.",
        text: "Věříme tomu, co děláme. Pokud vám provozní audit neodhalí minimálně tři konkrétní, realizovatelné příležitosti ke zlepšení s vyčísleným odhadem přínosu, podáme si ruce, rozejdeme se jako profesionálové a fakturu za audit prostě nevystavíme. Žádné doúčtování, žádné skryté položky, žádné „náklady na cestu“.",
        note: "Garance platí pro audit v plném rozsahu — s přístupem do provozu a k provozním datům, která k vyhodnocení potřebujeme. Co se počítá jako „konkrétní, realizovatelná příležitost“, definujeme společně předem ve smlouvě: doporučení s popsaným postupem zavedení a odhadem přínosu.",
      },
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
      title: "Dva provozáci. Dohromady přes 25 let praxe a 130+ projektů.",
      sub: "ZlepsimeTo založili a vedou lidé, kteří audity, implementace i go-live sami odpracovali — a vědí, co obnáší změna v reálném provozu.",
      jiri: {
        name: "Jiří Barvínek",
        role: "Spoluzakladatel — Plánování, Supply Chain & AI",
        bio: "Senior supply chain profesionál s více než 13 lety praxe v logistice, plánování a implementacích systémů. Kombinuje provozní zkušenost z první linie se silnou datovou analytikou a nasazením AI nástrojů (BI nástroje, SQL, pokročilý Excel). Specializuje se na demand & supply planning, plánování výroby, zavádění plánovacích systémů a využití AI ve firemních procesech.",
        highlights: [
          {
            title: "Implementace plánovacích systémů",
            desc: "Zavádění a standardizace plánovacích procesů a systémů napříč středoevropským regionem.",
          },
          {
            title: "Demand & supply planning",
            desc: "Vedení plánování poptávky, zásobování a výroby v rychloobrátkovém prostředí.",
          },
          {
            title: "WMS od návrhu po provoz",
            desc: "Návrh a implementace skladového systému ve velkém logistickém provozu.",
          },
          {
            title: "AI ve firemních procesech",
            desc: "Nasazení AI nástrojů pro analýzu dat, automatizaci reportingu a podporu rozhodování.",
          },
          {
            title: "Reporting v BI nástrojích",
            desc: "Budování manažerského reportingu, který nahrazuje ruční excely.",
          },
        ],
        stats: [
          {
            value: "50+",
            label: "vedených projektů",
          },
          {
            value: "−27 %",
            label: "snížení zásob hotových výrobků",
          },
          {
            value: "+20 %",
            label: "zlepšení přesnosti plánování",
          },
        ],
      },
      juraj: {
        name: "Juraj Komár",
        role: "Spoluzakladatel — Provozní transformace & Logistika",
        bio: "Senior operations a logistický profesionál s více než 16 lety zkušeností. Kombinuje provozní řízení s praktickými zkušenostmi z distribučních center a transformačních projektů. Zaměřuje se na zvyšování produktivity, optimalizaci logistických procesů a snižování provozních nákladů.",
        highlights: [
          {
            title: "Řízení distribučních center",
            desc: "Vedení multiklientského provozu s plnou odpovědností za P&L, rozpočty a výkonnost.",
          },
          {
            title: "Implementace nových zákazníků",
            desc: "Od návrhu logistických procesů přes spuštění provozu po stabilizaci výkonu.",
          },
          {
            title: "Migrace WMS a ERP",
            desc: "Řízení systémových migrací bez omezení běžícího provozu.",
          },
          {
            title: "Lean a DMAIC v praxi",
            desc: "Procesní optimalizace, automatizace a paperless picking ve skladových provozech.",
          },
        ],
        stats: [
          {
            value: "80+",
            label: "vedených projektů",
          },
          {
            value: "15+",
            label: "zákazníků v multiklientském provozu",
          },
          {
            value: "56 000 m²",
            label: "řízených logistických ploch",
          },
        ],
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
        { tag: "Reporting", title: "BI dashboardy", desc: "Manažerská viditelnost místo ručního reportování v excelech." },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Řekněte nám, kde to",
      titleAccent: "bolí.",
      sub: "Za 15 minut poznáme, jestli vám umíme pomoct. Nezávazný, přímý rozhovor o vašem provozu.",
      email: "info@zlepsimeto.cz",
      linkedin: "Spojit se na LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/ji%C5%99%C3%AD-barv%C3%ADnek-156778101/",
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
        sending: "Odesílám…",
        sentTitle: "Zpráva odeslána.",
        sentSub: "Ozveme se do jednoho pracovního dne.",
        error: "Něco se nepovedlo. Zkuste to prosím znovu, nebo nám napište přímo na e-mail.",
      },
    },
    footer: {
      tagline: "Výsledky, ne prezentace.",
      privacy: "Ochrana soukromí",
      terms: "Obchodní podmínky",
    },
    notFound: {
      label: "404",
      title: "Tahle stránka se ztratila v provozu.",
      text: "Možná jsme ji přesunuli, možná nikdy neexistovala. Buď se vraťte na hlavní stranu, nebo nám rovnou napište, co hledáte.",
      cta: "Zpět na hlavní stránku",
    },
  },
  en: {
    meta: {
      title: "ZlepsimeTo — Results, not presentations.",
      description:
        "ZlepsimeTo is a boutique operations consultancy for supply chain, warehousing and planning. We've run the operations we now fix — measurable results, not presentations.",
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
        "INVENTORY −27%",
        "SERVICE LEVEL +11 PTS",
        "PICKING ERRORS −38%",
        "130+ PROJECTS DELIVERED",
        "PLANNING ACCURACY +20%",
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
        { title: "BI Tools & Dashboards", desc: "Management visibility that replaces spreadsheets." },
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
      sub: "Across 25+ combined years in operations, planning, and project management, we've built fluency across standardized methods from several disciplines. We apply them the way that makes sense for your operation — not whatever happens to be trending.",
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
      guarantee: {
        label: "Audit Guarantee",
        title: "Fewer than 3 improvement opportunities found? We shake hands — and you don't pay.",
        text: "We stand behind our work. If your operational audit doesn't surface at least three specific, actionable improvement opportunities with a quantified benefit estimate, we shake hands, part as professionals, and simply never issue the invoice. No back-billing, no hidden items, no “travel costs”.",
        note: "The guarantee applies to a full-scope audit — with access to the operation and the operational data we need for the assessment. What counts as a “specific, actionable opportunity” is defined together upfront in the agreement: a recommendation with a described implementation path and an estimated benefit.",
      },
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
      title: "Two operators. 25+ combined years and 130+ projects.",
      sub: "ZlepsimeTo is founded and run by people who did the audits, implementations, and go-lives themselves — and know what change takes in a real operation.",
      jiri: {
        name: "Jiří Barvínek",
        role: "Co-Founder — Planning, Supply Chain & AI",
        bio: "Senior supply chain professional with 13+ years of experience in logistics, planning, and system implementations. Combines hands-on operational expertise with strong data analytics and applied AI (BI tools, SQL, advanced Excel). Specializes in demand & supply planning, production planning, planning system rollouts, and applying AI across business processes.",
        highlights: [
          {
            title: "Planning system implementations",
            desc: "Rolling out and standardizing planning processes and systems across the Central European region.",
          },
          {
            title: "Demand & supply planning",
            desc: "Leading demand, supply, and production planning in a fast-moving goods environment.",
          },
          {
            title: "WMS from design to operation",
            desc: "Designing and implementing a warehouse management system in a large logistics operation.",
          },
          {
            title: "AI in business processes",
            desc: "Deploying AI tools for data analysis, reporting automation, and decision support.",
          },
          {
            title: "Reporting in BI tools",
            desc: "Building management reporting that replaces manual spreadsheets.",
          },
        ],
        stats: [
          {
            value: "50+",
            label: "projects delivered",
          },
          {
            value: "−27%",
            label: "finished goods inventory reduction",
          },
          {
            value: "+20%",
            label: "planning accuracy improvement",
          },
        ],
      },
      juraj: {
        name: "Juraj Komár",
        role: "Co-Founder — Operations Transformation & Logistics",
        bio: "Senior operations and logistics professional with 16+ years of experience. Combines operational leadership with hands-on experience from distribution centers and transformation projects. Focused on productivity improvement, logistics process optimization, and reducing operating costs.",
        highlights: [
          {
            title: "Distribution center management",
            desc: "Leading a multi-client operation with full P&L, budget, and performance responsibility.",
          },
          {
            title: "New customer implementations",
            desc: "From logistics process design through ramp-up to performance stabilization.",
          },
          {
            title: "WMS and ERP migrations",
            desc: "Managing system migrations with no disruption to a running operation.",
          },
          {
            title: "Lean and DMAIC in practice",
            desc: "Process optimization, automation, and paperless picking in warehouse operations.",
          },
        ],
        stats: [
          {
            value: "80+",
            label: "projects delivered",
          },
          {
            value: "15+",
            label: "customers in a multi-client operation",
          },
          {
            value: "56,000 m²",
            label: "of logistics space managed",
          },
        ],
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
        { tag: "Reporting", title: "BI Dashboards", desc: "Management visibility replacing manual spreadsheet reporting." },
      ],
    },
    contact: {
      label: "Contact",
      title: "Tell us where it",
      titleAccent: "hurts.",
      sub: "15 minutes is enough to know if we can help. A no-obligation, straightforward conversation about your operation.",
      email: "info@zlepsimeto.cz",
      linkedin: "Connect on LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/ji%C5%99%C3%AD-barv%C3%ADnek-156778101/",
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
        sending: "Sending…",
        sentTitle: "Message sent.",
        sentSub: "We'll get back to you within one business day.",
        error: "Something went wrong. Please try again, or email us directly.",
      },
    },
    footer: {
      tagline: "Results, not presentations.",
      privacy: "Privacy",
      terms: "Terms",
    },
    notFound: {
      label: "404",
      title: "This page got lost somewhere in the operation.",
      text: "Maybe we moved it, maybe it never existed. Head back to the homepage, or just tell us what you were looking for.",
      cta: "Back to homepage",
    },
  },
} as const;

export type Copy = (typeof copy)["cs"];
