// ── Static data ─────────────────────────────────────────
const INDUSTRIES = [
  "Ecommerce", "Startups", "SaaS", "FMCG", "Hospitality", "Fashion",
  "Health & Wellness", "Finance", "Education", "Non-profit", "Tech",
  "Property", "Arts & Culture", "Food & Drink",
];

const CLIENT_SIZES = [
  "New businesses", "Solo founders", "Small businesses",
  "Startups", "Mid-size companies", "Large enterprises",
];

const DISCIPLINES = [
  {
    id: "web-app",
    name: "Web & App",
    description: "design, development or digital products",
    specialties: [
      "UI design", "UX research", "Product design", "Web design",
      "Front-end development", "Design systems", "Prototyping",
      "Interaction design", "Accessibility", "Wireframing",
      "Information architecture", "User testing",
      "Landing page design", "Dashboard design", "Email design",
      "Webflow development", "Framer development", "Design tokens",
      "CRO optimisation", "Mobile app design",
    ],
  },
  {
    id: "video-motion",
    name: "Video & Motion",
    description: "production, editing, film or animation",
    specialties: [
      "Motion design", "Video editing", "Animation", "3D / CGI",
      "Sound design", "Cinematography", "Colour grading", "VFX",
      "Storyboarding", "Post-production", "Title design", "Directing",
      "2D animation", "Explainer videos", "Live action", "Stop motion",
      "Reels and shorts", "Music videos", "Documentary", "Drone operation",
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic Design",
    description: "branding, marketing, print or illustration",
    specialties: [
      "Brand identity", "Logo design", "Editorial design", "Packaging",
      "Print production", "Illustration", "Type design", "Art direction",
      "Campaigns", "Wayfinding", "Finished artist", "Social content",
      "Book cover design", "Magazine design", "Poster design",
      "Comic book illustration", "Hand lettering", "Infographics",
      "Murals", "Merchandise design",
    ],
  },
];

const CREATIVE_ROLES = [
  "Art Director", "Brand Designer", "Brand Strategist", "Graphic Designer",
  "Packaging Designer", "Logo Designer", "Visual Designer", "Creative Director",
  "Illustrator", "Motion Designer", "UI Designer", "UX Designer",
  "Product Designer", "Web Designer", "Photographer", "Typographer",
  "Editorial Designer", "Print Designer", "Social Media Designer",
  "Copywriter", "Content Strategist", "Digital Designer",
  "3D Artist", "Animator", "Video Editor", "Filmmaker",
  "Set Designer", "Exhibition Designer", "Environmental Designer",
];

const RED_FLAG_PROMPTS = [
  'Asks you to copy another artist\'s style',
  "Only wants a logo, no brand system",
  "Vague brief, changes direction often",
  "No budget clarity",
  "Expects unlimited revisions",
  "Won't pay a deposit",
  "Timeline is \"ASAP\"",
];

const CAREER_STAGES = [
  { id: "starting",    label: "Just starting out", hint: "Building the portfolio and the process." },
  { id: "few-years",  label: "A few years in",     hint: "Confident in the work, growing the client list." },
  { id: "established", label: "Established",        hint: "Known in the niche, referrals, repeat clients." },
  { id: "veteran",    label: "Seasoned",            hint: "Trusted by peers — clients come to you." },
];

const COUNTRIES = [
  { code: "AU", name: "Australia", currency: "AUD" },
  { code: "NZ", name: "New Zealand", currency: "NZD" },
  { code: "US", name: "United States", currency: "USD" },
  { code: "GB", name: "United Kingdom", currency: "GBP" },
  { code: "CA", name: "Canada", currency: "CAD" },
  { code: "DE", name: "Germany", currency: "EUR" },
  { code: "FR", name: "France", currency: "EUR" },
  { code: "JP", name: "Japan", currency: "JPY" },
  { code: "SG", name: "Singapore", currency: "SGD" },
];

const CURRENCIES = ["AUD", "NZD", "USD", "GBP", "EUR", "CAD", "SGD", "JPY"];

const TAX_DEFAULTS = {
  AU: { name: "GST", rate: "10" },
  NZ: { name: "GST", rate: "15" },
  US: { name: "Sales Tax", rate: "0" },
  GB: { name: "VAT", rate: "20" },
  CA: { name: "GST/HST", rate: "5" },
  DE: { name: "VAT", rate: "19" },
  FR: { name: "VAT", rate: "20" },
  JP: { name: "Consumption Tax", rate: "10" },
  SG: { name: "GST", rate: "9" },
};

const TAX_NAMES = ["GST", "VAT", "Sales Tax", "GST/HST", "Consumption Tax", "No tax"];

const FONT_SUGGESTIONS = {
  google: [
    "Inter", "Manrope", "DM Sans", "Work Sans", "Plus Jakarta Sans",
    "Space Grotesk", "IBM Plex Sans", "Fraunces", "Playfair Display", "JetBrains Mono",
  ],
  adobe: [
    "Proxima Nova", "Brandon Grotesque", "Futura PT", "Neue Haas Grotesk",
    "GT America", "Söhne", "Suisse Int'l", "Operator Mono", "Canela", "Tiempos",
  ],
};

const FONT_PAIRINGS = [
  {
    id: "serif-sans",
    label: "Serif + Sans",
    desc: "Serif headings, sans serif body",
    headingFont: "'Instrument Serif', serif",
    headingWeight: "400",
    headingStyle: "italic",
  },
  {
    id: "sans-sans",
    label: "Sans + Sans",
    desc: "Sans serif headings, sans serif body",
    headingFont: "'DM Sans', sans-serif",
    headingWeight: "500",
    headingStyle: "normal",
  },
];

const PRICING_MODELS = [
  { id: "fixed",    label: "Fixed price", unit: "per project" },
  { id: "day",      label: "Day rate",    unit: "per day" },
  { id: "hourly",   label: "Hourly",      unit: "per hour" },
  { id: "retainer", label: "Retainers",   unit: "ongoing" },
];

const PRICING_EXTRAS = [
  { id: "tiered",    label: "Tiers / packages",    hint: "Good / Better / Best style offers" },
  { id: "per-asset", label: "Per asset",           hint: "Flat fee per deliverable (logo, page, icon)" },
  { id: "value",     label: "Value-based",         hint: "Priced on outcome, not time" },
  { id: "other",     label: "Something else",      hint: "A custom structure" },
];

const TIER_REVISIONS = [
  { value: "1", label: "1 round" },
  { value: "2", label: "2 rounds" },
  { value: "3", label: "3 rounds" },
  { value: "4", label: "4 rounds" },
  { value: "unlimited", label: "Unlimited" },
  { value: "negotiable", label: "Negotiable" },
];

function uid() {
  return "t_" + Math.random().toString(36).slice(2, 9);
}

function seedDefaultTiers() {
  return [
    { id: uid(), name: "Essential",  priceType: "fixed", price: "", revisions: "2", includes: "" },
    { id: uid(), name: "Signature",  priceType: "fixed", price: "", revisions: "3", includes: "" },
  ];
}

function seedDefaultAssets() {
  return [
    { id: uid(), name: "Logo",          priceType: "fixed", price: "" },
    { id: uid(), name: "Landing page",  priceType: "fixed", price: "" },
  ];
}

/* ── Pitch suggestion generator (mocked AI) ─────────────────────────
   Generates short pitch suggestions based on the user's discipline,
   their specialties, and whether they work solo or as a team. Replace
   with a real LLM call later; input/output shape stays the same. */
const PITCH_TEMPLATES = {
  "graphic-design": [
    "I design brand identities for founder-led startups who care about craft.",
    "I turn fuzzy founder gut-feel into a brand that lands on shelves and screens.",
    "I create visual systems that help small brands punch above their weight.",
    "I'm a graphic designer for independent labels building something that deserves to be seen.",
    "I design print and digital work for brands that want taste, not trends.",
  ],
  "web-app": [
    "I design and ship websites that turn curious traffic into qualified leads.",
    "I build conversion-focused sites for SaaS founders who care about craft.",
    "I take product ideas from sketch to shipped, keeping things simple and fast.",
    "I'm a product designer for early-stage teams who want to look like they've already raised.",
    "I design websites and web apps that make the right people lean in.",
  ],
  "video-motion": [
    "I direct short-form video for brands that want to look polished without feeling corporate.",
    "I edit launch films that earn press pickup and founder confidence.",
    "I produce motion work for brands who need to move fast without losing craft.",
    "I'm a motion designer for teams that care how their work sounds as much as how it looks.",
    "I make video and motion for creative-led brands with something to say.",
  ],
};

const PITCH_TEMPLATES_GENERIC = [
  "I help small, creative-led brands look like they belong in the rooms they're pitching in.",
  "I work with founders who care about taste and want to move fast.",
  "I partner with independent teams on the work they can't trust to a template.",
];

/* ── Pitch scaffold slots (mocked AI) ──────────────────────────────
   Instead of suggesting 3 full pitches, we scaffold one sentence:
     "I help [niche] solve [problem] so they can [outcome]."
   Each slot has its own pool of AI fills, grouped by discipline.
   The creative can edit any slot inline or reroll it independently. */
const PITCH_SLOTS = {
  "graphic-design": {
    niche: [
      "founder-led food & drink brands",
      "independent labels on shelves",
      "early-stage consumer brands",
      "small studios who care about craft",
      "creative-led indie companies",
    ],
    problem: [
      "a shelf that looks like everything else",
      "brand bits that never quite line up",
      "scattered visuals slowing their launch",
      "a look that doesn't match the ambition",
      "design decisions that stall every sprint",
    ],
    outcome: [
      "land on shelves with confidence",
      "stop losing the visual argument to bigger brands",
      "launch with work they're proud to send",
      "build a brand their founder actually recognises",
      "stand out without looking like they're trying",
    ],
  },
  "web-app": {
    niche: [
      "early-stage SaaS founders",
      "small product teams",
      "pre-seed startups with a working demo",
      "founder-led indie products",
      "creative tool makers",
    ],
    problem: [
      "a site that undersells the product",
      "interfaces that feel broken even when they work",
      "launch pages that bury the lead",
      "a brand that hasn't caught up with the product",
      "months of shipping with no visual through-line",
    ],
    outcome: [
      "ship a site they're proud to send to investors",
      "turn curious traffic into qualified leads",
      "launch with a product that feels as sharp as it is",
      "move from MVP to 'real company' in weeks",
      "stop losing demos to nicer-looking competitors",
    ],
  },
  "video-motion": {
    niche: [
      "creative-led brands with something to say",
      "launch teams on a deadline",
      "founder-led brands prepping a big moment",
      "independent labels and studios",
      "small teams with a story worth telling",
    ],
    problem: [
      "a launch moment that needs to land",
      "rough footage that isn't earning its keep",
      "a brand film that feels corporate, not creative",
      "stories that stall in pre-production",
      "video work that doesn't match the rest of the brand",
    ],
    outcome: [
      "leave launch day with content they can keep using",
      "look polished without feeling corporate",
      "earn a second watch, a share, a press pickup",
      "move fast without losing the edges",
      "tell the story they've been trying to write for months",
    ],
  },
};

const PITCH_SLOTS_GENERIC = {
  niche: [
    "small, creative-led brands",
    "founders who care about taste",
    "independent teams",
    "indie companies building something new",
    "creative-led small businesses",
  ],
  problem: [
    "the work they can't trust to a template",
    "a brand that hasn't caught up with the product",
    "execution that feels scattered, not considered",
    "creative decisions that keep slipping",
    "work that looks fine but doesn't land",
  ],
  outcome: [
    "look like they belong in the rooms they're pitching in",
    "move fast without losing craft",
    "feel as considered as they want to sound",
    "ship work they're actually proud of",
    "stop second-guessing every creative call",
  ],
};

function getPitchSlots(a) {
  return PITCH_SLOTS[disciplineFromRoles(a.disciplines)] || PITCH_SLOTS_GENERIC;
}

function pickSlot(pool, seed) {
  return pool[seed % pool.length];
}

/* Resolve the current value for each slot: use the user's override if set,
   otherwise fall back to the AI fill for the current seed. */
function resolvePitchSlots(a) {
  const slots = getPitchSlots(a);
  const s = a.pitchScaffold || {};
  return {
    niche: s.niche != null ? s.niche : pickSlot(slots.niche, s.nicheSeed || 0),
    problem: s.problem != null ? s.problem : pickSlot(slots.problem, s.problemSeed || 0),
    outcome: s.outcome != null ? s.outcome : pickSlot(slots.outcome, s.outcomeSeed || 0),
  };
}

function composePitchFromSlots(a) {
  const { niche, problem, outcome } = resolvePitchSlots(a);
  return `I help ${stripTags(niche)} solve ${stripTags(problem)} so they can ${stripTags(outcome)}.`;
}

function stripTags(s) {
  return String(s)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

const HELP_TEMPLATES = {
  "graphic-design": [
    "I take early-stage brands from founder gut-feel to a full visual system ready for launch.",
    "I help independent labels stand out on shelves and stay consistent across every touchpoint.",
    "I work from brief to plate-ready file, keeping the work bold enough to get noticed and tight enough to print without rework.",
    "I help teams turn scattered brand bits into a system they can actually use after I leave.",
    "I take brands from 'something's not landing' to a clear voice, look and feel that sticks.",
  ],
  "web-app": [
    "I take founders from scrappy MVP to a site that earns trust and converts.",
    "I help product teams ship clean, fast interfaces that users want to return to.",
    "I move product ideas from messy doc to live site in weeks, not months.",
    "I help small teams avoid the 'it works but feels broken' website phase.",
    "I partner with founders to make their product feel as good as they know it is.",
  ],
  "video-motion": [
    "I take brands from 'we need a video' to a piece of content they're proud to send to press.",
    "I help teams turn launch moments into short films that keep working long after launch day.",
    "I guide small brands through the full film process, from concept to final cut, without losing the edges.",
    "I help founders tell the story they've been trying to write for months in under 90 seconds.",
    "I take rough launch plans and shape them into motion work that earns a second watch.",
  ],
};

const HELP_TEMPLATES_GENERIC = [
  "I help small teams move from scattered execution to work they can be proud of.",
  "I partner with founders who want their work to feel considered, not generic.",
  "I take briefs others call 'too small' and turn them into work that gets noticed.",
];

function generateSuggestions(pool, seed, team) {
  const rotated = pool.slice(seed % pool.length).concat(pool.slice(0, seed % pool.length));
  const picks = rotated.slice(0, 3);
  return picks.map(s => team ? s.replace(/\bI\b/g, "We").replace(/I'm\b/g, "We're") : s);
}

function generatePitchSuggestions(a) {
  const pool = PITCH_TEMPLATES[disciplineFromRoles(a.disciplines)] || PITCH_TEMPLATES_GENERIC;
  return generateSuggestions(pool, a.pitchSuggestionSeed || 0, a.workType === "team");
}

function generateHelpSuggestions(a) {
  const pool = HELP_TEMPLATES[disciplineFromRoles(a.disciplines)] || HELP_TEMPLATES_GENERIC;
  return generateSuggestions(pool, a.helpSuggestionSeed || 0, a.workType === "team");
}

const FONT_SLOT_LABELS = {
  primary: { label: "Primary font", hint: "Headings and body" },
  secondary: { label: "Secondary font", hint: "Quotes, accents" },
  mono: { label: "Monospace", hint: "Code, numbers, fine print" },
};

const SOCIAL_PLATFORMS = [
  { id: "instagram", name: "Instagram", placeholder: "@username" },
  { id: "twitter", name: "Twitter / X", placeholder: "@username" },
  { id: "linkedin", name: "LinkedIn", placeholder: "username or company" },
  { id: "tiktok", name: "TikTok", placeholder: "@username" },
  { id: "youtube", name: "YouTube", placeholder: "channel name or URL" },
  { id: "vimeo", name: "Vimeo", placeholder: "username" },
  { id: "dribbble", name: "Dribbble", placeholder: "username" },
  { id: "behance", name: "Behance", placeholder: "username" },
  { id: "pinterest", name: "Pinterest", placeholder: "username" },
  { id: "threads", name: "Threads", placeholder: "@username" },
  { id: "arena", name: "Are.na", placeholder: "username" },
  { id: "substack", name: "Substack", placeholder: "publication URL" },
  { id: "other", name: "Other", placeholder: "Paste URL" },
];
// Combined pool of every specialty across disciplines, de-duplicated (order-preserving)
const ALL_SPECIALTIES = (() => {
  const seen = new Set();
  const out = [];
  for (const d of DISCIPLINES) {
    for (const s of d.specialties) {
      const key = s.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        out.push(s);
      }
    }
  }
  return out;
})();

// "Smart-finish" a draft: capitalise the first letter, trim, collapse whitespace
function formatSpecialty(raw) {
  const t = (raw || "").trim().replace(/\s+/g, " ");
  if (!t) return "";
  return t.charAt(0).toUpperCase() + t.slice(1);
}

// Map an array of role strings to the most relevant broad discipline ID
function disciplineFromRoles(roles) {
  const web = ["ui", "ux", "web", "product", "digital", "front-end", "app", "framer", "webflow"];
  const video = ["motion", "video", "film", "animation", "3d", "cgi", "director of photography", "cinemat", "editor"];
  const counts = { "web-app": 0, "video-motion": 0, "graphic-design": 0 };
  (roles || []).forEach(r => {
    const l = r.toLowerCase();
    if (web.some(k => l.includes(k))) counts["web-app"]++;
    else if (video.some(k => l.includes(k))) counts["video-motion"]++;
    else counts["graphic-design"]++;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

// Build a ranked list of matches for the given draft. Ordering:
//  1) current-discipline matches that start with the draft
//  2) current-discipline matches that contain the draft
//  3) other-discipline matches that start with the draft
//  4) other-discipline matches that contain the draft
function getSpecialtyMatches(draft, disciplineId, selected) {
  const q = draft.trim().toLowerCase();
  if (!q) return [];
  const taken = new Set(selected.map((s) => s.toLowerCase()));
  const current = DISCIPLINES.find((d) => d.id === disciplineId);
  const currentList = current ? current.specialties : [];
  const others = ALL_SPECIALTIES.filter((s) => !currentList.includes(s));
  const rank = (pool, startsOnly) =>
    pool.filter((s) => {
      const l = s.toLowerCase();
      if (taken.has(l)) return false;
      return startsOnly ? l.startsWith(q) : l.includes(q) && !l.startsWith(q);
    });
  const out = [
    ...rank(currentList, true),
    ...rank(currentList, false),
    ...rank(others, true),
    ...rank(others, false),
  ];
  // Dedupe (case-insensitive) whilst preserving order
  const seen = new Set();
  return out
    .filter((s) => {
      const k = s.toLowerCase();
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    })
    .slice(0, 6);
}

// Wraps the matched substring in <mark> so we can highlight it in suggestions
function highlightMatch(label, query) {
  const q = (query || "").trim();
  if (!q) return escapeHtml(label);
  const idx = label.toLowerCase().indexOf(q.toLowerCase());
  if (idx < 0) return escapeHtml(label);
  return (
    escapeHtml(label.slice(0, idx)) +
    "<mark>" +
    escapeHtml(label.slice(idx, idx + q.length)) +
    "</mark>" +
    escapeHtml(label.slice(idx + q.length))
  );
}

function socialPlaceholder(id) {
  return (SOCIAL_PLATFORMS.find(p => p.id === id) || SOCIAL_PLATFORMS[0]).placeholder;
}

// ── State (seeded with scraped-brand mock) ─────────────
const state = {
  step: -1,
  totalSteps: 3,
  answers: {
    // Brand basics
    workType: "solo",
    name: "",
    role: "",
    country: "AU",
    city: "Melbourne",
    abn: "",
    wordmarkSrc: "",
    address: "12 Smith St, Collingwood VIC 3066",
    addressClientFacing: false,
    phone: "",
    phoneClientFacing: false,
    email: "hello@boilingpot.studio",
    emailClientFacing: true,
    website: "https://boilingpot.studio",
    socials: [
      { platform: "instagram", handle: "@boilingpotstudio" },
      { platform: "linkedin", handle: "jakesimmerman" },
    ],
    // Brand assets (pre-filled from "brand builder" scrape)
    logoInitial: "B",
    colors: ["#1C1916", "#B54A2C", "#F4EFE7", "#8A8177"],
    primaryColorIndex: 0,
    fontPairing: "serif-sans",
    hasLogo: true,
    hasHero: true,
    // About
    pitch: "",
    pitchHelpOpen: false,
    pitchSuggestionSeed: 0,
    pitchScaffold: {
      nicheSeed: 0, problemSeed: 0, outcomeSeed: 0,
      niche: null, problem: null, outcome: null,
    },
    disciplines: ["Brand Designer", "Packaging Designer"],
    disciplineDraft: "",
    specialties: ["Brand identity", "Packaging", "Logo design", "Art direction", "Print production", "Illustration"],
    specialtyDraft: "",
    primaryServices: [],
    primaryServiceDraft: "",
    secondaryServices: [],
    secondaryServiceDraft: "",
    careerStage: "few-years",
    yearsExperience: "",
    credibilities: "",
    hoursPerWeek: "",
    hoursPerWeekOther: "",
    hourlyRate: "",
    rateMatchesClient: true,
    clientHourlyRate: "",
    // Customers
    idealClientOpen: false,
    idealClients: "",
    dreamClientName: "",
    dreamClientWebsite: "",
    industries: [],
    clientSizes: [],
    clientSizeOpen: false,
    // Case studies
    caseStudiesOpen: false,
    caseStudies: [
      { id: "cs1", title: "Brand identity · Perennia", summary: "Took an emerging food brand from scrappy to shelf-ready. Featured in The Strategist the month of launch.", clientWebsite: "https://perennia.com.au", portfolioLink: "https://boilingpot.studio/work/perennia", keywords: "branding, new brand", hidden: false, editOpen: false },
      { id: "cs2", title: "Packaging relaunch · SS24", summary: "New packaging lifted shelf pick-up by 22% at David Jones Food Hall within six weeks.", clientWebsite: "", portfolioLink: "https://boilingpot.studio/work/ss24", keywords: "packaging, branding, ecommerce", hidden: false, editOpen: false },
    ],
    // Offers
    pricing: {
      chargingMethods: [],
      primary: "",
    },
    turnaround: "",
    currency: "AUD",
    taxName: "GST",
    taxRate: "10",
    taxRegistered: true,
    // Gut check (optional add-on)
    gutCheckOpen: false,
    idealProject: "",
    wantMore: "",
    wantLess: "",
    redFlags: [],
    // Existing process
    proposalFiles: [
      { name: "Proposal · Acme Studio.pdf", size: "1.2 MB" },
    ],
    contractFiles: [],
  },
};

// ── SVG icons ───────────────────────────────────────────
const ICON = {
  image: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="8.5" cy="9" r="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M3 17L9 12L15 17L21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  arrowLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  arrowRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  check: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  upload: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 16V4M12 4L6 10M12 4L18 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  file: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 2V8H20" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  close: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/></svg>`,
  link: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

// ── Root ────────────────────────────────────────────────
const root = document.getElementById("onboarding");

function render({ scrollToTop = false } = {}) {
  const prevScroll = window.scrollY;

  // Save focus so we can restore it after the DOM is replaced
  const active    = document.activeElement;
  const focusedId = active && active.id || null;
  const focusedKey = active && active.dataset && active.dataset.key || null;
  const selStart  = active && active.selectionStart != null ? active.selectionStart : null;
  const selEnd    = active && active.selectionEnd   != null ? active.selectionEnd   : null;

  const html =
    state.step === -1 ? renderIntro() :
    state.step === 0 ? renderStepBrand() :
    state.step === 1 ? renderStepWork() :
    state.step === 2 ? renderStepStyle() :
    renderComplete();

  root.innerHTML = html;
  bindEvents();

  // Restore focus + cursor position
  const toFocus = focusedId  ? document.getElementById(focusedId)
                : focusedKey ? root.querySelector(`[data-key="${focusedKey}"]`)
                : null;
  if (toFocus) {
    toFocus.focus({ preventScroll: true });
    if (selStart != null && toFocus.setSelectionRange) {
      try { toFocus.setSelectionRange(selStart, selEnd); } catch (_) {}
    }
  }

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "instant" });
  } else {
    window.scrollTo({ top: prevScroll, behavior: "instant" });
  }
}

// ── Shared layout helpers ───────────────────────────────
function renderProgress() {
  let html = `<div class="progress">`;
  for (let i = 0; i < state.totalSteps; i++) {
    const cls =
      i < state.step ? "progress__dot progress__dot--done" :
      i === state.step ? "progress__dot progress__dot--active" :
      "progress__dot";
    html += `<div class="${cls}"></div>`;
  }
  return html + `</div>`;
}

function renderNav(isLast) {
  return `
    <div class="step__nav">
      <button class="btn btn--ghost" id="backBtn">
        ${ICON.arrowLeft} Back
      </button>
      <button class="btn btn--primary" id="nextBtn">
        ${isLast ? "Finish setup" : "Continue"} ${ICON.arrowRight}
      </button>
    </div>`;
}

// ── Intro ───────────────────────────────────────────────
function renderIntro() {
  const a = state.answers;
  return `
    <div class="intro">
      <div class="intro__kicker">Creative Pro</div>

      <h1 class="intro__title">Let's set up<br>your proposals.</h1>
      <p class="intro__desc">Drop your website in and we'll pull the key info — logo, colours, name, and bio. Then you confirm, fill any gaps, and you're ready to send.</p>

      <div class="intro__form">
        <div class="field">
          <label class="field__label field__label--required">Your website</label>
          <input class="input" type="url" id="introWebsite" data-key="website"
                 placeholder="https://yourstudio.com"
                 value="${escapeAttr(a.website)}" autofocus />
        </div>

        <div class="intro__name-row">
          <div class="field">
            <label class="field__label">Your name</label>
            <input class="input" type="text" data-key="name"
                   placeholder="e.g. Jake Simmerman"
                   value="${escapeAttr(a.name)}" />
          </div>
          <div class="field">
            <label class="field__label">Role / title</label>
            <input class="input" type="text" data-key="role"
                   placeholder="e.g. Brand designer"
                   value="${escapeAttr(a.role)}" />
          </div>
        </div>

        <div class="field" style="margin-bottom:0">
          <label class="field__label">How do you work?</label>
          <div class="segmented">
            <button class="segmented__btn ${a.workType === "solo" ? "segmented__btn--active" : ""}" data-worktype="solo">Solo freelancer</button>
            <button class="segmented__btn ${a.workType === "studio" ? "segmented__btn--active" : ""}" data-worktype="studio">Creative team</button>
          </div>
        </div>

        <button class="btn btn--primary intro__cta" id="scanBtn" ${!a.website ? "disabled" : ""}>
          Start ${ICON.arrowRight}
        </button>
      </div>
    </div>
  `;
}

// ── Step 1: Your Brand ──────────────────────────────────
function renderStepBrand() {
  const a = state.answers;
  const nameLabel = a.workType === "solo" ? "Trading name" : "Studio name";
  const nameDisplay = a.name || (a.workType === "solo" ? "Trading name" : "Studio name");
  const urlDisplay = a.website ? a.website.replace(/^https?:\/\//, "") : "yourstudio.com";

  return `
    ${renderProgress()}
    <div class="step__eyebrow">Step 1 of 3 · Your Brand</div>
    <h1 class="step__title">Let's set up your brand</h1>
    <p class="step__desc">Start with your website. We'll pull your logo, colours, name, and basics — then you confirm or tweak.</p>

    <div class="step__body step__body--with-preview">
      <!-- Preview column -->
      <div class="preview">
        <div class="preview__card">
          <div class="preview__hero">
            ${a.hasHero ? `<div class="preview__hero-hint">${ICON.image}</div>` : ""}
          </div>
          <div class="preview__body">
            ${a.wordmarkSrc
              ? `<img class="preview__wordmark" src="${escapeAttr(a.wordmarkSrc)}" alt="Wordmark" />`
              : `<div class="preview__logo">${a.logoInitial}</div>`
            }
            <div class="preview__name">${escapeHtml(nameDisplay)}</div>
            <div class="preview__url">${escapeHtml(urlDisplay)}</div>
          </div>
        </div>

        <div class="preview__side-label">Brand colours</div>
        <div class="preview__side-hint">Drag to reorder · First colour is used for client cards</div>
        <div class="swatch-row">
          ${a.colors.map((c, i) => `
            <div class="swatch ${i === a.primaryColorIndex ? "swatch--primary" : ""}"
                 data-swatch="${i}"
                 style="background:${c}"
                 title="${c}"></div>
          `).join("")}
          <button class="swatch-add" id="addSwatch" aria-label="Add colour">${ICON.plus}</button>
        </div>

        <div class="preview__side-label" style="margin-top:1rem">Wordmark</div>
        <div class="preview__side-hint">PNG or SVG with transparent background</div>
        <div class="wordmark-upload">
          ${a.wordmarkSrc
            ? `<div class="wordmark-upload__preview">
                 <img src="${escapeAttr(a.wordmarkSrc)}" alt="Wordmark preview" class="wordmark-upload__img" />
                 <button class="wordmark-upload__remove" id="wordmarkRemove" aria-label="Remove wordmark">
                   ${ICON.close} Remove
                 </button>
               </div>`
            : `<label class="wordmark-upload__label" id="wordmarkLabel">
                 ${ICON.upload}
                 <span>Upload wordmark</span>
                 <input type="file" accept="image/png,image/svg+xml,image/jpeg" class="sr-only" id="wordmarkInput" />
               </label>`
          }
        </div>
      </div>

      <!-- Form column -->
      <div class="step__form-col">


        <!-- Brand basics -->
        <div class="section">
          <h2 class="section__title">Brand basics</h2>
          <p class="section__helper section__helper--accent">Pulled from your site. Tweak anything that's off.</p>
          <div class="field">
            <label class="field__label field__label--required">${nameLabel}</label>
            <input class="input" type="text" data-key="name"
                   placeholder="${a.workType === "solo" ? "e.g. Studio Remi" : "e.g. Field Day Studio"}"
                   value="${escapeAttr(a.name)}" />
          </div>

          <div class="grid-2">
            <div class="field">
              <label class="field__label">Email</label>
              <input class="input" type="email" data-key="email"
                     placeholder="e.g. hello@yourstudio.com"
                     value="${escapeAttr(a.email)}" />
              <label class="field__toggle">
                <input type="checkbox" data-key-bool="emailClientFacing" ${a.emailClientFacing ? "checked" : ""} />
                <span class="field__toggle-label">Hide on proposals</span>
              </label>
            </div>
            <div class="field">
              <label class="field__label">Phone</label>
              <input class="input" type="tel" data-key="phone"
                     placeholder="e.g. +61 400 000 000"
                     value="${escapeAttr(a.phone)}" />
              <label class="field__toggle">
                <input type="checkbox" data-key-bool="phoneClientFacing" ${a.phoneClientFacing ? "checked" : ""} />
                <span class="field__toggle-label">Hide on proposals</span>
              </label>
            </div>
            <div class="field">
              <label class="field__label">ABN</label>
              <input class="input" type="text" data-key="abn"
                     placeholder="e.g. 12 345 678 901"
                     value="${escapeAttr(a.abn)}" />
              <p class="field__help">Added to invoices. Leave blank if not registered.</p>
            </div>
          </div>

          <div class="field">
            <label class="field__label">Address</label>
            <input class="input" type="text" data-key="address"
                   placeholder="e.g. Collingwood VIC 3066"
                   value="${escapeAttr(a.address)}" />
            <label class="field__toggle">
              <input type="checkbox" data-key-bool="addressClientFacing" ${a.addressClientFacing ? "checked" : ""} />
              <span class="field__toggle-label">Hide on proposals</span>
            </label>
          </div>

          <div class="grid-2">
            <div class="field">
              <label class="field__label">City</label>
              <input class="input" type="text" data-key="city"
                     placeholder="e.g. Melbourne"
                     value="${escapeAttr(a.city)}" />
            </div>
            <div class="field">
              <label class="field__label field__label--required">Country</label>
              <select class="input" data-key="country">
                ${COUNTRIES.map(c => `<option value="${c.code}" ${a.country === c.code ? "selected" : ""}>${c.name}</option>`).join("")}
              </select>
            </div>
          </div>
        </div>

        <!-- Socials -->
        <div class="section">
          <h2 class="section__title">Socials</h2>
          <p class="section__helper">Optional. Add the platforms you actually use. Shows on your proposal footer.</p>

          ${a.socials.length ? `
            <div class="social-list">
              ${a.socials.map((s, i) => `
                <div class="social-row">
                  <select class="input" data-social-platform="${i}">
                    ${SOCIAL_PLATFORMS.map(p => `<option value="${p.id}" ${s.platform === p.id ? "selected" : ""}>${p.name}</option>`).join("")}
                  </select>
                  <input class="input" type="text" data-social-handle="${i}"
                         placeholder="${socialPlaceholder(s.platform)}"
                         value="${escapeAttr(s.handle)}" />
                  <button class="social-row__remove" data-social-remove="${i}" aria-label="Remove social">${ICON.close}</button>
                </div>
              `).join("")}
            </div>
          ` : ""}

          <button class="social-add" id="addSocial">
            ${ICON.plus} Add social
          </button>
        </div>


        <!-- Font -->
        <div class="section">
          <h2 class="section__title">Typography</h2>
          ${renderFontSection(a)}
        </div>

        ${renderNav(false)}
      </div>
    </div>
  `;
}

// ── Pricing section helpers ─────────────────────────────
function renderPricingSection(a) {
  const p = a.pricing;
  const methods = p.chargingMethods || [];

  return `
    <div class="field">
      <label class="field__label">Pricing methods</label>
      <p class="field__help">Select all that apply. Hit "Go-to" on your default.</p>
      <div class="charge-method-grid">
        ${PRICING_MODELS.map(m => {
          const selected = methods.includes(m.id);
          const isPrimary = p.primary === m.id && selected;
          return `
            <button type="button"
                    class="charge-method ${selected ? "charge-method--selected" : ""}"
                    data-charge-method="${m.id}">
              ${selected ? `<button type="button" class="charge-method__goto${isPrimary ? " charge-method__goto--on" : ""}" data-pricing-primary="${m.id}" tabindex="-1">${isPrimary ? "✓ Go-to" : "Go-to"}</button>` : ""}
              <span class="charge-method__label">${m.label}</span>
              <span class="charge-method__unit">${m.unit}</span>
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function renderPricingRateInput(model, values, scope) {
  const help = scope === "primary" ? model.rateLabel : "";
  if (model.range) {
    return `
      ${help ? `<label class="field__label">${help}</label>` : ""}
      <div class="pricing-rate__range">
        <input class="input" type="text" data-pricing-rate="${scope}" data-pricing-field="min"
               placeholder="Min" value="${escapeAttr(values.min || "")}" />
        <span class="pricing-rate__dash">–</span>
        <input class="input" type="text" data-pricing-rate="${scope}" data-pricing-field="max"
               placeholder="Max" value="${escapeAttr(values.max || "")}" />
        <span class="pricing-rate__unit">${model.unit}</span>
      </div>
    `;
  }
  return `
    ${help ? `<label class="field__label">${help}</label>` : ""}
    <div class="pricing-rate__single">
      <input class="input" type="text" data-pricing-rate="${scope}" data-pricing-field="rate"
             placeholder="${model.placeholder}" value="${escapeAttr(values.rate || "")}" />
      <span class="pricing-rate__unit">${model.unit}</span>
    </div>
  `;
}

function renderDayRateInput(a, values, scope) {
  const hourlyNum = parseFloat(String(a.hourlyRate || "").replace(/[^0-9.]/g, ""));
  const hasHourly = !isNaN(hourlyNum) && hourlyNum > 0;
  const hours = parseFloat(a.pricing.dayHours || "8") || 8;
  const suggested = hasHourly ? Math.round(hourlyNum * hours) : 0;
  const currentRate = parseFloat(String(values.rate || "").replace(/[^0-9.]/g, ""));
  const matches = hasHourly && !isNaN(currentRate) && currentRate === suggested;

  return `
    <div class="day-rate">
      <div class="day-rate__grid">
        <div class="field">
          <label class="field__label">Day rate</label>
          <div class="pricing-rate__single">
            <input class="input" type="text" data-pricing-rate="${scope}" data-pricing-field="rate"
                   placeholder="${escapeAttr(String(suggested || "1,200"))}" value="${escapeAttr(values.rate || "")}" />
            <span class="pricing-rate__unit">per day</span>
          </div>
        </div>
        <div class="field">
          <label class="field__label">Hours in a billable day</label>
          <select class="input" data-day-hours>
            ${["6", "7", "7.5", "8", "9", "10"].map(h => `
              <option value="${h}" ${String(a.pricing.dayHours) === h ? "selected" : ""}>${h} hrs</option>
            `).join("")}
          </select>
        </div>
      </div>

      ${hasHourly ? `
        <div class="day-rate__suggest">
          <span class="day-rate__suggest-text">
            Based on your <strong>$${escapeHtml(String(hourlyNum))}/hr</strong> × ${hours} hrs, a day's about <strong>$${formatMoney(suggested)}</strong>.
          </span>
          ${matches
            ? `<span class="day-rate__suggest-match">✓ matches</span>`
            : `<button type="button" class="btn-link" data-day-use-suggested="${scope}">Use this →</button>`
          }
        </div>
      ` : `
        <p class="day-rate__suggest day-rate__suggest--empty">
          Set your hourly rate above and we'll suggest a day rate for you.
        </p>
      `}
    </div>
  `;
}

function formatMoney(n) {
  return Number(n).toLocaleString("en-US");
}

function renderHourlyReference(a, opts = {}) {
  const rate = (a.hourlyRate || "").trim();
  const hasRate = rate.length > 0;
  const sameAsClient = a.rateMatchesClient !== false;
  const compact = !!opts.compact;

  const internal = hasRate ? `<strong>$${escapeHtml(rate)}/hr</strong>` : null;

  const headText = hasRate
    ? `Using ${internal} from the top of this page. <a href="#" class="hourly-ref__link" data-scroll-to="hourlyRate">Edit above ↑</a>`
    : `No hourly rate set yet. <a href="#" class="hourly-ref__link" data-scroll-to="hourlyRate">Set it now →</a>`;

  const helpText = sameAsClient
    ? (hasRate ? `We'll use ${internal} on every proposal.` : `We'll use your hourly rate on every proposal.`)
    : `We'll show the client-facing rate below instead.`;

  return `
    <div class="hourly-ref ${hasRate ? "" : "hourly-ref--empty"} ${compact ? "hourly-ref--compact" : ""}">
      <p class="hourly-ref__text">${headText}</p>

      <div class="hourly-ref__match">
        <div class="hourly-ref__match-label">
          <label class="field__label">Same as what clients see?</label>
          <p class="field__help">${helpText}</p>
        </div>
        <div class="segmented segmented--pill" role="radiogroup">
          <button class="segmented__btn ${sameAsClient ? "segmented__btn--active" : ""}" data-rate-match="yes">Yes</button>
          <button class="segmented__btn ${!sameAsClient ? "segmented__btn--active" : ""}" data-rate-match="no">No, different</button>
        </div>
      </div>

      ${!sameAsClient ? `
        <div class="hourly-ref__client-rate">
          <label class="field__label">Client-facing hourly rate</label>
          <p class="field__help">The number on your proposals and invoices.</p>
          <div class="tier-card__amount">
            <span class="tier-card__currency">$</span>
            <input class="input" type="text" data-key="clientHourlyRate" placeholder="180" value="${escapeAttr(a.clientHourlyRate)}" />
          </div>
        </div>
      ` : ""}
    </div>
  `;
}

function renderPricingSecondary(a) {
  const p = a.pricing;
  const takenIds = new Set([p.primary, ...p.secondary.map(s => s.model)]);
  const available = PRICING_MODELS.filter(m => !takenIds.has(m.id));

  return `
    ${p.secondary.length ? `
      <div class="pricing-secondary">
        ${p.secondary.map((s, i) => {
          const model = PRICING_MODELS.find(m => m.id === s.model);
          if (!model) return "";
          return `
            <div class="pricing-secondary__row">
              <div class="pricing-secondary__meta">
                <span class="pricing-secondary__label">${model.label}</span>
                <span class="pricing-secondary__hint">Also offered</span>
              </div>
              <div class="pricing-secondary__input">
                ${model.id === "hourly"
                  ? renderHourlyReference(a, { compact: true })
                  : model.id === "day"
                    ? renderDayRateInput(a, s, "secondary-" + i)
                    : renderPricingRateInput(model, s, "secondary-" + i)}
              </div>
              <button class="btn-link btn-link--muted" data-pricing-remove="${i}">Remove</button>
            </div>
          `;
        }).join("")}
      </div>
    ` : ""}

    ${available.length ? `
      <div class="pricing-add-row">
        <span class="pricing-add-row__label">Regularly price another way?</span>
        ${available.map(m => `
          <button class="chip" data-pricing-add="${m.id}">+ ${m.label}</button>
        `).join("")}
      </div>
    ` : ""}
  `;
}

function renderPricingExtras(a) {
  const p = a.pricing;
  const hasAny = p.extras.length > 0;
  return `
    <div class="pricing-extras">
      <div class="pricing-extras__prompt">
        <div class="pricing-extras__prompt-text">
          <div class="pricing-extras__prompt-title">Shape your offers further?</div>
          <p class="pricing-extras__prompt-help">Optional. Leave vague and decide per proposal, or lock it in and we'll turn it into package cards on every proposal.</p>
        </div>
      </div>

      <div class="pricing-extras__chips">
        ${PRICING_EXTRAS.map(x => {
          const selected = p.extras.includes(x.id);
          return `
            <button class="chip ${selected ? "chip--selected" : ""}" data-pricing-extra="${x.id}" title="${escapeAttr(x.hint)}">
              ${selected ? "✓ " : "+ "}${x.label}
            </button>
          `;
        }).join("")}
      </div>

      ${hasAny ? `<div class="pricing-extras__panels">
        ${p.extras.includes("tiered")    ? renderTierEditor(a)   : ""}
        ${p.extras.includes("per-asset") ? renderAssetEditor(a)  : ""}
        ${p.extras.includes("value")     ? renderValuePanel(a)   : ""}
        ${p.extras.includes("other")     ? renderOtherPanel(a)   : ""}
      </div>` : ""}
    </div>
  `;
}

function renderTierEditor(a) {
  const tiers = a.pricing.tiers;
  return `
    <div class="tier-editor">
      <div class="tier-editor__head">
        <div>
          <div class="tier-editor__title">Your tiers</div>
          <p class="tier-editor__help">Build 2 – 3 packages clients can pick from. Name them whatever feels right.</p>
        </div>
      </div>

      <div class="tier-editor__list">
        ${tiers.map((t, i) => renderTierCard(t, i)).join("")}
      </div>

      <div class="tier-editor__actions">
        <button class="btn btn--ghost" type="button" data-tier-add="standard">
          <span class="tier-editor__plus">+</span> Add tier
        </button>
      </div>
    </div>
  `;
}

function renderTierCard(t, i) {
  const fixed = t.priceType === "fixed";
  return `
    <div class="tier-card" data-tier-id="${t.id}">
      <div class="tier-card__head">
        <div class="tier-card__badge">Tier ${i + 1}</div>
        <button class="tier-card__remove" type="button" data-tier-remove="${t.id}" aria-label="Remove tier">×</button>
      </div>

      <div class="field tier-card__name-field">
        <label class="field__label">Tier name</label>
        <input class="input" type="text"
               data-tier-id="${t.id}" data-tier-field="name"
               placeholder="e.g. Essential, Signature, Launch Pack"
               value="${escapeAttr(t.name)}" />
      </div>

      <div class="grid-2">
        <div class="field">
          <div class="tier-card__price-head">
            <label class="field__label">Price</label>
            <div class="segmented segmented--sm" role="radiogroup" aria-label="Price type">
              <button type="button" class="segmented__btn ${fixed ? "segmented__btn--active" : ""}"
                      data-tier-id="${t.id}" data-tier-price-type="fixed">Fixed</button>
              <button type="button" class="segmented__btn ${!fixed ? "segmented__btn--active" : ""}"
                      data-tier-id="${t.id}" data-tier-price-type="from">From</button>
            </div>
          </div>
          <div class="tier-card__amount">
            <span class="tier-card__currency">$</span>
            <input class="input" type="text"
                   data-tier-id="${t.id}" data-tier-field="price"
                   placeholder="${fixed ? "5,000" : "8,000"}"
                   value="${escapeAttr(t.price)}" />
          </div>
        </div>

        <div class="field">
          <label class="field__label">Revisions included</label>
          <select class="input" data-tier-id="${t.id}" data-tier-field="revisions">
            <option value="">Select…</option>
            ${TIER_REVISIONS.map(r => `
              <option value="${r.value}" ${t.revisions === r.value ? "selected" : ""}>${r.label}</option>
            `).join("")}
          </select>
        </div>
      </div>

      <div class="field" style="margin-top:1.125rem;margin-bottom:0">
        <label class="field__label">What's included</label>
        <p class="field__help">One item per line. We'll format as bullets on your proposal.</p>
        <textarea class="input" rows="4"
                  data-tier-id="${t.id}" data-tier-field="includes"
                  placeholder="Brand strategy workshop\nLogo + wordmark\nCore colour palette\n2 mockup rounds">${escapeHtml(t.includes)}</textarea>
      </div>
    </div>
  `;
}

function renderAssetEditor(a) {
  const assets = a.pricing.assets;
  return `
    <div class="tier-editor">
      <div class="tier-editor__head">
        <div>
          <div class="tier-editor__title">Your assets</div>
          <p class="tier-editor__help">List the deliverables you price individually. Clients can mix and match; we'll total them on the proposal.</p>
        </div>
      </div>

      <div class="asset-list">
        ${assets.map((asset, i) => renderAssetRow(asset, i)).join("")}
      </div>

      <div class="tier-editor__actions">
        <button type="button" class="btn btn--ghost btn--sm" data-asset-add="item">+ Add asset</button>
      </div>
    </div>
  `;
}

function renderAssetRow(asset, i) {
  const fixed = asset.priceType !== "from";
  return `
    <div class="asset-row" data-asset-id="${asset.id}">
      <div class="asset-row__name">
        <label class="field__label asset-row__label">Asset ${i + 1}</label>
        <input class="input" type="text"
               data-asset-id="${asset.id}" data-asset-field="name"
               placeholder="e.g. Logo, Landing page, Icon, 500-word article"
               value="${escapeAttr(asset.name)}" />
      </div>
      <div class="asset-row__price">
        <div class="tier-card__price-head">
          <label class="field__label">Price</label>
          <div class="segmented segmented--sm" role="radiogroup" aria-label="Price type">
            <button type="button" class="segmented__btn ${fixed ? "segmented__btn--active" : ""}"
                    data-asset-id="${asset.id}" data-asset-price-type="fixed">Fixed</button>
            <button type="button" class="segmented__btn ${!fixed ? "segmented__btn--active" : ""}"
                    data-asset-id="${asset.id}" data-asset-price-type="from">From</button>
          </div>
        </div>
        <div class="tier-card__amount">
          <span class="tier-card__currency">$</span>
          <input class="input" type="text"
                 data-asset-id="${asset.id}" data-asset-field="price"
                 placeholder="${fixed ? "2,500" : "1,200"}"
                 value="${escapeAttr(asset.price)}" />
        </div>
      </div>
      <button class="asset-row__remove" type="button" data-asset-remove="${asset.id}" aria-label="Remove asset">×</button>
    </div>
  `;
}

function renderValuePanel(a) {
  return `
    <div class="extras-panel">
      <div class="extras-panel__head">
        <div class="extras-panel__title">Value-based pricing</div>
        <p class="extras-panel__help">What outcomes do you price around? We'll surface this on calls so you can anchor to business impact, not hours.</p>
      </div>
      <textarea class="input" rows="3"
                data-key="pricingValueBased"
                placeholder="e.g. % of expected revenue lift, tied to launch KPIs, flat fee + performance bonus">${escapeHtml(a.pricing.valueBased)}</textarea>
    </div>
  `;
}

function renderOtherPanel(a) {
  return `
    <div class="extras-panel">
      <div class="extras-panel__head">
        <div class="extras-panel__title">Your custom structure</div>
        <p class="extras-panel__help">Describe it in your own words. We'll treat this as your default framing.</p>
      </div>
      <input class="input" type="text"
             data-key="pricingExtrasOther"
             placeholder="e.g. sprint-based, % of media spend, value + day rate mix"
             value="${escapeAttr(a.pricing.extrasOther)}" />
    </div>
  `;
}

// ── Typography section helpers ──────────────────────────
function renderFontSection(a) {
  return `<div class="font-pairing-grid">
    ${FONT_PAIRINGS.map(p => {
      const selected = a.fontPairing === p.id;
      return `
        <button type="button"
                class="font-pairing ${selected ? "font-pairing--selected" : ""}"
                data-font-pairing="${p.id}">
          <div class="font-pairing__mockup">
            <div class="font-pairing__mock-heading"
                 style="font-family:${p.headingFont};font-weight:${p.headingWeight};font-style:${p.headingStyle}">Title</div>
            <div class="font-pairing__mock-body">Here's what the body copy looks like at reading size. Clear and easy to scan.</div>
          </div>
          <div class="font-pairing__foot">
            <div class="font-pairing__label">${p.label}</div>
            ${selected ? `<div class="font-pairing__check">${ICON.check}</div>` : ""}
          </div>
        </button>
      `;
    }).join("")}
  </div>`;
}

// ── Step 2: Your Work ───────────────────────────────────
function renderStepWork() {
  const a = state.answers;

  return `
    ${renderProgress()}
    <div class="step__eyebrow">Step 2 of 3 · About you</div>
    <h1 class="step__title">You and your clients</h1>
    <p class="step__desc">Who you are, who you do your best work for, and how you like to talk about it. We use this across every proposal.</p>

    <div class="step__body">
      <div class="step__form-col">

        <!-- About -->
        <div class="section">
          <h2 class="section__title">About you</h2>
          <p class="section__helper">Sits at the top of your proposal. You can tweak it per client.</p>

          <div class="field">
            <label class="field__label field__label--required">What do you do?</label>
            <p class="field__help">Pulled from your site — add or remove anything.</p>
            <div class="tag-input-wrap">
              <div class="tag-input tag-input--list">
                ${a.disciplines.map((r, i) => `
                  <span class="tag-list-item">
                    <span class="tag-list-item__dot"></span>
                    <span class="tag-list-item__label">${escapeHtml(r)}</span>
                    <button class="tag-list-item__remove" data-discipline-remove="${i}" aria-label="Remove ${escapeAttr(r)}">${ICON.close}</button>
                  </span>
                `).join("")}
                <input class="tag-input__field" id="disciplineInput" type="text"
                       autocomplete="off"
                       placeholder="${a.disciplines.length ? "Add another…" : "e.g. Brand Designer, Art Director"}"
                       value="${escapeAttr(a.disciplineDraft)}" />
              </div>
              ${(() => {
                const q = a.disciplineDraft.toLowerCase().trim();
                if (q.length < 2) return "";
                const taken = new Set(a.disciplines.map(r => r.toLowerCase()));
                const matches = CREATIVE_ROLES.filter(r =>
                  r.toLowerCase().includes(q) && !taken.has(r.toLowerCase())
                ).slice(0, 6);
                if (!matches.length) return "";
                return `<div class="tag-suggest" role="listbox">
                  ${matches.map((r, i) => `<button class="tag-suggest__item ${i === 0 ? "tag-suggest__item--active" : ""}" data-discipline-suggest="${escapeAttr(r)}" role="option">${highlightMatch(r, q)}</button>`).join("")}
                </div>`;
              })()}
            </div>
          </div>

          <!-- Skillsets -->
          <div class="grid-2 grid-2--aligned">
          <div class="field">
            <label class="field__label">Primary skillsets</label>
            <p class="field__help">Your core offering. What do most clients hire you for? Keep it to 1–3 things.</p>
            <div class="tag-input-wrap">
              <div class="tag-input" data-droptarget="specialties">
                ${a.specialties.map((s, i) => `
                  <span class="tag" draggable="true" data-drag-from="specialties" data-drag-index="${i}">
                    ${escapeHtml(s)}
                    <button class="tag__remove" data-specialty-remove="${i}" aria-label="Remove ${escapeAttr(s)}">${ICON.close}</button>
                  </span>
                `).join("")}
                <input class="tag-input__field" id="specialtyInput" type="text"
                       autocomplete="off"
                       placeholder="${a.specialties.length ? "Add another…" : "What are you skilled in?"}"
                       value="${escapeAttr(a.specialtyDraft)}" />
              </div>
              ${(() => {
                const q = a.specialtyDraft.trim();
                if (q.length < 2) return "";
                const matches = getSpecialtyMatches(q, disciplineFromRoles(a.disciplines), a.specialties);
                const exactMatch = matches.some((m) => m.toLowerCase() === q.toLowerCase());
                const createLabel = exactMatch ? null : formatSpecialty(q);
                if (!matches.length && !createLabel) return "";
                return `
                  <div class="tag-suggest" role="listbox">
                    ${matches.map((m, i) => `
                      <button class="tag-suggest__item ${i === 0 ? "tag-suggest__item--active" : ""}" data-suggest="${escapeAttr(m)}" role="option">
                        ${highlightMatch(m, q)}
                      </button>
                    `).join("")}
                    ${createLabel ? `
                      <button class="tag-suggest__item tag-suggest__item--create" data-suggest="${escapeAttr(createLabel)}" role="option">
                        <span class="tag-suggest__create-label">Add</span>
                        <span class="tag-suggest__create-value">&ldquo;${escapeHtml(createLabel)}&rdquo;</span>
                      </button>
                    ` : ""}
                  </div>
                `;
              })()}
            </div>
          </div>

          <!-- Secondary skillsets -->
          <div class="field">
            <label class="field__label">Secondary skillsets</label>
            <p class="field__help">What you can do. Add as many as apply.</p>
            <div class="tag-input-wrap">
              <div class="tag-input" data-droptarget="primaryServices">
                ${a.primaryServices.map((s, i) => `
                  <span class="tag" draggable="true" data-drag-from="primaryServices" data-drag-index="${i}">
                    ${escapeHtml(s)}
                    <button class="tag__remove" data-primary-service-remove="${i}" aria-label="Remove ${escapeAttr(s)}">${ICON.close}</button>
                  </span>
                `).join("")}
                <input class="tag-input__field" id="primaryServiceInput" type="text"
                       autocomplete="off"
                       placeholder="${a.primaryServices.length ? "Add another…" : "e.g. Brand identity, Packaging design"}"
                       value="${escapeAttr(a.primaryServiceDraft)}" />
              </div>
              ${(() => {
                const q = a.primaryServiceDraft.trim();
                if (!q) return "";
                const matches = getSpecialtyMatches(q, disciplineFromRoles(a.disciplines), a.primaryServices);
                const exactMatch = matches.some((m) => m.toLowerCase() === q.toLowerCase());
                const createLabel = exactMatch ? null : formatSpecialty(q);
                if (!matches.length && !createLabel) return "";
                return `
                  <div class="tag-suggest" role="listbox">
                    ${matches.map((m, idx) => `
                      <button class="tag-suggest__item ${idx === 0 ? "tag-suggest__item--active" : ""}" data-primary-suggest="${escapeAttr(m)}" role="option">
                        ${highlightMatch(m, q)}
                      </button>
                    `).join("")}
                    ${createLabel ? `
                      <button class="tag-suggest__item tag-suggest__item--create" data-primary-suggest="${escapeAttr(createLabel)}" role="option">
                        <span class="tag-suggest__create-label">Add</span>
                        <span class="tag-suggest__create-value">&ldquo;${escapeHtml(createLabel)}&rdquo;</span>
                      </button>
                    ` : ""}
                  </div>
                `;
              })()}
            </div>
          </div>
          </div><!-- /.grid-2 skillsets -->

          ${(() => {
            if (a.specialtyDraft.trim()) return "";
            const disc = DISCIPLINES.find(d => d.id === disciplineFromRoles(a.disciplines));
            if (!disc) return "";
            const remaining = disc.specialties.filter(s => !a.specialties.includes(s)).slice(0, 8);
            return remaining.length ? `
              <div class="chip-row chip-row--inline">
                ${remaining.map(s => `<button class="chip" data-chip-specialty="${escapeAttr(s)}">+ ${s}</button>`).join("")}
              </div>
            ` : "";
          })()}

          <!-- Elevator pitch -->
          <div class="field" style="margin-top:1.75rem">
            <div class="field__label-row">
              <label class="field__label field__label--required">Elevator pitch</label>
              <button type="button" class="ai-assist" data-toggle-pitchhelp="${a.pitchHelpOpen ? "close" : "open"}">
                ${a.pitchHelpOpen ? "× Close" : "✨ Need help writing it?"}
              </button>
            </div>
            <textarea class="input" data-key="pitch" rows="2"
                      placeholder="e.g. I design brand identities for founder-led food brands who care about the shelf.">${escapeHtml(a.pitch)}</textarea>

            ${a.pitchHelpOpen ? (() => {
              const slots = resolvePitchSlots(a);
              return `
              <div class="ai-panel ai-panel--scaffold">
                <div class="ai-panel__head">
                  <div class="ai-panel__title">✨ Start from a sentence</div>
                  <button type="button" class="btn-link btn-link--muted" data-pitch-reroll-all>↻ Regenerate all</button>
                </div>

                <p class="pitch-scaffold">
                  I help
                  <span class="pitch-slot" data-slot="niche">
                    <span class="pitch-slot__text" contenteditable="true" spellcheck="false" data-slot-text="niche">${escapeHtml(slots.niche)}</span>
                    <button type="button" class="pitch-slot__reroll" data-slot-reroll="niche" aria-label="Try another niche">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </span>
                  solve
                  <span class="pitch-slot" data-slot="problem">
                    <span class="pitch-slot__text" contenteditable="true" spellcheck="false" data-slot-text="problem">${escapeHtml(slots.problem)}</span>
                    <button type="button" class="pitch-slot__reroll" data-slot-reroll="problem" aria-label="Try another problem">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </span>
                  so they can
                  <span class="pitch-slot" data-slot="outcome">
                    <span class="pitch-slot__text" contenteditable="true" spellcheck="false" data-slot-text="outcome">${escapeHtml(slots.outcome)}</span>
                    <button type="button" class="pitch-slot__reroll" data-slot-reroll="outcome" aria-label="Try another outcome">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                  </span>.
                </p>

                <div class="pitch-scaffold__foot">
                  <p class="ai-panel__hint">Click any slot to edit, or ↻ to try another fill. Each slot is drafted from your discipline &amp; specialties.</p>
                  <button type="button" class="btn-link" data-pitch-use-scaffold>Use this sentence →</button>
                </div>
              </div>`;
            })() : ""}
          </div>

          <!-- Career stage -->
          <div class="field">
            <label class="field__label">Where are you in your career?</label>
            <p class="field__help">For your bio, not a gatekeeping question. Helps us write about you in the right voice.</p>
            <div class="career-stage-row">
              <div class="career-years">
                <label class="career-years__label">Years exp.</label>
                <div class="career-years__input-wrap">
                  <input class="input career-years__input" type="number" min="1" max="50"
                         data-key="yearsExperience"
                         placeholder="e.g. 8"
                         value="${escapeAttr(a.yearsExperience)}" />
                  <span class="career-years__unit">yrs</span>
                </div>
              </div>
              <div class="career-stages">
                ${CAREER_STAGES.map(s => `
                  <button type="button" class="career-stage ${a.careerStage === s.id ? "career-stage--selected" : ""}" data-career-stage="${s.id}">
                    <div class="career-stage__label">${s.label}</div>
                    <div class="career-stage__hint">${s.hint}</div>
                  </button>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Credibilities -->
          <div class="field">
            <label class="field__label">Anything worth putting in your bio?</label>
            <input class="input" type="text" data-key="credibilities"
                   placeholder="e.g. Former Pentagram, AGDA judge, mentioned in It's Nice That"
                   value="${escapeAttr(a.credibilities)}" />
            <p class="field__help">Awards, press, studios you've come from, clients worth namedropping. Optional.</p>
          </div>
        </div>

        <!-- Dream client -->
        <div class="section section--compact">
          ${a.idealClientOpen ? `
            <div class="section__head-row">
              <div>
                <h2 class="section__title">Your dream client</h2>
                <p class="section__helper">Who would you build your whole studio around? The more specific, the better we can match you.</p>
              </div>
              <button class="btn-link btn-link--muted" data-toggle-idealclient="close">Skip this</button>
            </div>

            <div class="grid-2">
              <div class="field">
                <label class="field__label">Dream client name</label>
                <input class="input" type="text" data-key="dreamClientName"
                       placeholder="e.g. Fishwife, Minor Figures, Ottolenghi"
                       value="${escapeAttr(a.dreamClientName)}" />
                <p class="field__help">A real brand you'd love to work with, or a type.</p>
              </div>
              <div class="field">
                <label class="field__label">Their website</label>
                <input class="input" type="url" data-key="dreamClientWebsite"
                       placeholder="https://fishwife.co"
                       value="${escapeAttr(a.dreamClientWebsite)}" />
                <p class="field__help">We'll use this to understand their taste and brief style.</p>
              </div>
            </div>

            <div class="field">
              <label class="field__label">Why are they your dream client?</label>
              <textarea class="input" data-key="idealClients" rows="2"
                        placeholder="e.g. They care about craft as much as commerce, trust the designer's eye, and have a brief worth getting excited about.">${escapeHtml(a.idealClients)}</textarea>
              <p class="field__help">What makes working with them different. We'll use this to write your client section.</p>
            </div>

            <div class="field">
              <label class="field__label">Industries</label>
              <div class="pill-group" data-pill-group="industries">
                ${INDUSTRIES.map(i => `
                  <button class="pill ${a.industries.includes(i) ? "pill--selected" : ""}" data-pill="${escapeAttr(i)}">${i}</button>
                `).join("")}
              </div>
            </div>

            ${a.clientSizeOpen ? `
              <div class="field">
                <div class="field__label-row">
                  <label class="field__label">Client size</label>
                  <button class="btn-link btn-link--muted" data-toggle-clientsize="close">Skip this</button>
                </div>
                <div class="pill-group" data-pill-group="clientSizes">
                  ${CLIENT_SIZES.map(s => `
                    <button class="pill ${a.clientSizes.includes(s) ? "pill--selected" : ""}" data-pill="${escapeAttr(s)}">${s}</button>
                  `).join("")}
                </div>
              </div>
            ` : `
              <button class="btn-link btn-link--inline" type="button" data-toggle-clientsize="open">
                + Add client size
              </button>
            `}
          ` : `
            <div class="addon-prompt">
              <div class="addon-prompt__body">
                <div class="addon-prompt__title">Who's your dream client?</div>
                <div class="addon-prompt__hint">The more specific you are, the better we can flag briefs that fit — and the ones that don't.</div>
              </div>
              <button class="btn btn--ghost" data-toggle-idealclient="open">+ Add dream client</button>
            </div>
          `}
        </div>

        <!-- Case studies -->
        ${renderCaseStudies(a)}

        ${renderNav(false)}
      </div>
    </div>
  `;
}

// ── Step 3: Your Style ──────────────────────────────────
function renderStepStyle() {
  const a = state.answers;

  return `
    ${renderProgress()}
    <div class="step__eyebrow">Step 3 of 3 · Proposals</div>
    <h1 class="step__title">How you quote</h1>
    <p class="step__desc">Your pricing defaults and the paperwork we learn from. We'll use these to shape proposals in your voice and flag briefs that don't fit.</p>

    <div class="step__body">
      <div class="step__form-col">

        <!-- Pricing -->
        <div class="section">
          <h2 class="section__title">How you charge</h2>
          <p class="section__helper">Your defaults. We'll use these across proposals — you can always override per client.</p>

          ${renderPricingSection(a)}

          <div class="section__divider"></div>

          <div class="grid-2">
            <div class="field" style="margin-bottom:0">
              <label class="field__label">Default currency</label>
              <p class="field__help">From your country. Override per proposal.</p>
              <select class="input" data-key="currency">
                ${CURRENCIES.map(c => `<option value="${c}" ${a.currency === c ? "selected" : ""}>${c}</option>`).join("")}
              </select>
            </div>

            <div class="field" style="margin-bottom:0">
              <label class="field__label field__label--with-info">
                Registered for ${escapeHtml(a.taxName)}?
                <button type="button" class="info-icon" data-tooltip="Some freelancers don't need to register (e.g. in Australia, only once you earn $75k+ a year). Check with your local tax authority if you're unsure." aria-label="More info">i</button>
              </label>
              <p class="field__help">${a.taxRegistered
                ? `We'll add <strong>${escapeHtml(a.taxName)} ${escapeHtml(a.taxRate)}%</strong> to every invoice.`
                : `We won't add tax to your invoices.`}</p>
              <div class="segmented segmented--full segmented--pill" role="radiogroup">
                <button class="segmented__btn ${a.taxRegistered ? "segmented__btn--active" : ""}" data-tax-registered="yes">Yes</button>
                <button class="segmented__btn ${!a.taxRegistered ? "segmented__btn--active" : ""}" data-tax-registered="no">No</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Past paperwork: quickest win, concrete asks -->
        <div class="section section--card">
          <h2 class="section__title">Past proposals &amp; contracts</h2>
          <p class="section__helper section__helper--accent">Optional, but the more you give us, the more your proposals sound like you from day one.</p>

          <div class="grid-2 grid-2--aligned">
            <div class="field">
              <label class="field__label">Past proposal examples</label>
              <div class="file-drop" id="proposalDrop">
                <div style="margin-bottom:.5rem; color:var(--text-muted)">${ICON.upload}</div>
                <div class="file-drop__title">Drop proposals here</div>
                <div class="file-drop__sub">PDF, DOCX or Figma link · We'll learn your tone &amp; structure</div>
              </div>
              ${renderFileList(a.proposalFiles, "proposal")}
            </div>

            <div class="field">
              <label class="field__label">Your contract / terms</label>
              <div class="file-drop" id="contractDrop">
                <div style="margin-bottom:.5rem; color:var(--text-muted)">${ICON.upload}</div>
                <div class="file-drop__title">Drop your T&amp;Cs here</div>
                <div class="file-drop__sub">We'll append them to every proposal you send</div>
              </div>
              ${renderFileList(a.contractFiles, "contract")}
            </div>
          </div>
        </div>

        ${renderNav(true)}
      </div>
    </div>
  `;
}

function renderFileList(files, type) {
  if (!files.length) return "";
  return `<div class="file-list">
    ${files.map((f, i) => `
      <div class="file-card">
        <div class="file-card__icon">${ICON.file}</div>
        <div class="file-card__name">${escapeHtml(f.name)}</div>
        <div class="file-card__size">${f.size}</div>
        <button class="file-card__remove" data-remove="${type}" data-index="${i}" aria-label="Remove">${ICON.close}</button>
      </div>
    `).join("")}
  </div>`;
}

// ── Complete state ──────────────────────────────────────
function renderComplete() {
  const firstName = (state.answers.name || "").trim().split(/\s+/)[0];
  const title = firstName ? `You're all set, ${escapeHtml(firstName)}.` : "You're all set.";
  return `
    <div class="complete">
      <div class="complete__check">${ICON.check}</div>
      <h1 class="complete__title">${title}</h1>
      <p class="complete__desc">Your brand, your pricing, your way of working. All locked in. MonoDesk will use this to help you win the next one.</p>
      <button class="btn btn--primary" id="startBtn">Start your first proposal ${ICON.arrowRight}</button>
    </div>
  `;
}

// ── Case studies section ────────────────────────────────
function renderCaseStudies(a) {
  const cs = a.caseStudies || [];
  return `
    <div class="section section--compact">
      ${a.caseStudiesOpen ? `
        <div class="section__head-row">
          <div>
            <h2 class="section__title">Case studies</h2>
            <p class="section__helper">We'll pull these from your site. Hide any you'd rather leave out, or add ones we missed.</p>
          </div>
          <button class="btn-link btn-link--muted" data-toggle-casestudies="close">Skip this</button>
        </div>

        <div class="case-study-list">
          ${cs.map((c, i) => `
            <div class="case-study-row ${c.hidden ? "case-study-row--hidden" : ""} ${c.editOpen ? "case-study-row--editing" : ""}">
              ${c.editOpen ? `
                <div class="cs-edit">
                  <div class="cs-edit__field">
                    <label class="field__label">Title</label>
                    <input class="input" type="text" data-cs-field="${i}" data-cs-key="title"
                           value="${escapeAttr(c.title)}" placeholder="e.g. Brand identity · Client name" />
                  </div>
                  <div class="cs-edit__field">
                    <label class="field__label">Summary</label>
                    <textarea class="input" rows="2" data-cs-field="${i}" data-cs-key="summary"
                              placeholder="What was the project and what was the outcome?">${escapeHtml(c.summary)}</textarea>
                  </div>
                  <div class="cs-edit__field">
                    <label class="field__label">Keywords</label>
                    <input class="input" type="text" data-cs-field="${i}" data-cs-key="keywords"
                           value="${escapeAttr(c.keywords || "")}" placeholder="e.g. packaging, branding, ecommerce" />
                    <span class="field__help">Comma-separated — used to match this study to relevant proposals.</span>
                  </div>
                  <div class="cs-edit__row">
                    <div class="cs-edit__field">
                      <label class="field__label">Client website</label>
                      <input class="input" type="url" data-cs-field="${i}" data-cs-key="clientWebsite"
                             value="${escapeAttr(c.clientWebsite || "")}" placeholder="https://client.com" />
                    </div>
                    <div class="cs-edit__field">
                      <label class="field__label">Portfolio link</label>
                      <input class="input" type="url" data-cs-field="${i}" data-cs-key="portfolioLink"
                             value="${escapeAttr(c.portfolioLink || "")}" placeholder="https://yoursite.com/work/…" />
                    </div>
                  </div>
                  <div class="cs-edit__foot">
                    <button type="button" class="btn-link btn-link--muted" data-cs-remove="${i}">Remove</button>
                    <button type="button" class="btn btn--ghost" data-cs-edit="${i}">Done</button>
                  </div>
                </div>
              ` : `
                <div class="case-study-row__body">
                  <div class="case-study-row__title">${escapeHtml(c.title)}</div>
                  ${c.summary ? `<div class="case-study-row__summary">${escapeHtml(c.summary)}</div>` : ""}
                  ${c.keywords ? `
                    <div class="case-study-row__keywords">
                      ${c.keywords.split(",").map(k => k.trim()).filter(Boolean).map(k => `<span class="cs-keyword">${escapeHtml(k)}</span>`).join("")}
                    </div>
                  ` : ""}
                  ${(c.clientWebsite || c.portfolioLink) ? `
                    <div class="case-study-row__links">
                      ${c.clientWebsite ? `<a class="case-study-row__link" href="${escapeAttr(c.clientWebsite)}" target="_blank" rel="noopener">${ICON.link} Client site</a>` : ""}
                      ${c.portfolioLink ? `<a class="case-study-row__link" href="${escapeAttr(c.portfolioLink)}" target="_blank" rel="noopener">${ICON.link} Portfolio</a>` : ""}
                    </div>
                  ` : ""}
                </div>
                <div class="case-study-row__actions">
                  <button type="button" class="btn-link" data-cs-edit="${i}">Edit</button>
                  <button type="button" class="btn-link btn-link--muted" data-cs-toggle="${i}">
                    ${c.hidden ? "Show" : "Hide"}
                  </button>
                  <button type="button" class="btn-link btn-link--muted" data-cs-remove="${i}">Remove</button>
                </div>
              `}
            </div>
          `).join("")}
        </div>

        <button class="social-add" id="addCaseStudy" style="margin-top:.75rem">
          ${ICON.plus} Add case study
        </button>
      ` : `
        <div class="addon-prompt">
          <div class="addon-prompt__body">
            <div class="addon-prompt__title">Add case studies?</div>
            <div class="addon-prompt__hint">We'll pull from your site and let you choose which ones clients see on proposals.</div>
          </div>
          <button class="btn btn--ghost" data-toggle-casestudies="open">+ Add case studies</button>
        </div>
      `}
    </div>
  `;
}

// ── Event binding ───────────────────────────────────────
function bindEvents() {
  // Boolean checkboxes (data-key-bool)
  root.querySelectorAll("[data-key-bool]").forEach((el) => {
    el.addEventListener("change", () => {
      state.answers[el.dataset.keyBool] = el.checked;
    });
  });

  // Generic text / textarea / select
  root.querySelectorAll("[data-key]").forEach((el) => {
    el.addEventListener(el.tagName === "SELECT" ? "change" : "input", () => {
      const key = el.dataset.key;
      state.answers[key] = el.value;

      // Country change: auto-fill default currency + tax
      if (key === "country") {
        const country = COUNTRIES.find((c) => c.code === el.value);
        if (country) state.answers.currency = country.currency;
        const tax = TAX_DEFAULTS[el.value];
        if (tax) {
          state.answers.taxName = tax.name;
          state.answers.taxRate = tax.rate;
          // US sales tax varies by state, default to "not registered";
          // everywhere else, assume the default tax applies.
          state.answers.taxRegistered = el.value !== "US";
        }
        render();
        return;
      }

      // Hours-per-week "Other": re-render so the custom-hours input shows/hides
      if (key === "hoursPerWeek") {
        render();
        return;
      }

      // Live-update brand preview if on step 1
      if (state.step === 0 && ["name", "website", "workType"].includes(key)) {
        updateBrandPreview();
      }
    });
  });


  // Work-type segmented
  root.querySelectorAll("[data-worktype]").forEach((el) => {
    el.addEventListener("click", () => {
      state.answers.workType = el.dataset.worktype;
      render();
    });
  });

  // Font pairing selection
  root.querySelectorAll("[data-font-pairing]").forEach((el) => {
    el.addEventListener("click", () => {
      state.answers.fontPairing = el.dataset.fontPairing;
      render();
    });
  });

  // Gut check: toggle add-on open/closed
  root.querySelectorAll("[data-toggle-gutcheck]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers.gutCheckOpen = btn.dataset.toggleGutcheck === "open";
      render();
    });
  });

  // Pitch AI assist: open/close the helper panel
  root.querySelectorAll("[data-toggle-pitchhelp]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers.pitchHelpOpen = btn.dataset.togglePitchhelp === "open";
      render();
    });
  });

  // Pitch scaffold: reroll a single slot (niche / problem / outcome)
  // Bumps that slot's seed so the pool rotates, and clears any user override
  // on that slot so the fresh AI fill actually shows.
  root.querySelectorAll("[data-slot-reroll]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const slot = btn.dataset.slotReroll;
      const sc = state.answers.pitchScaffold || {};
      sc[`${slot}Seed`] = (sc[`${slot}Seed`] || 0) + 1;
      sc[slot] = null;
      state.answers.pitchScaffold = sc;
      render();
    });
  });

  // Pitch scaffold: reroll all three slots at once
  const pitchRerollAll = root.querySelector("[data-pitch-reroll-all]");
  if (pitchRerollAll) {
    pitchRerollAll.addEventListener("click", () => {
      const sc = state.answers.pitchScaffold || {};
      sc.nicheSeed = (sc.nicheSeed || 0) + 1;
      sc.problemSeed = (sc.problemSeed || 0) + 1;
      sc.outcomeSeed = (sc.outcomeSeed || 0) + 1;
      sc.niche = null; sc.problem = null; sc.outcome = null;
      state.answers.pitchScaffold = sc;
      render();
    });
  }

  // Pitch scaffold: inline edits to any slot are captured as the user's override.
  // We don't re-render on every keystroke (would blow away the cursor); we just
  // stash the text on blur. The contenteditable spans keep their own DOM state
  // until the next render cycle.
  root.querySelectorAll("[data-slot-text]").forEach((el) => {
    el.addEventListener("blur", () => {
      const slot = el.dataset.slotText;
      const sc = state.answers.pitchScaffold || {};
      sc[slot] = el.textContent.trim();
      state.answers.pitchScaffold = sc;
    });
    // Enter commits the edit (prevents newlines inside a single-line slot).
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        el.blur();
      }
    });
  });

  // Pitch scaffold: "Use this sentence" → compose and drop into the pitch textarea,
  // then close the helper. User can still edit the textarea freely afterward.
  const useScaffold = root.querySelector("[data-pitch-use-scaffold]");
  if (useScaffold) {
    useScaffold.addEventListener("click", () => {
      // Flush any in-flight slot edit before composing (blur fires our stash handler).
      const active = document.activeElement;
      if (active && active.matches && active.matches("[data-slot-text]")) active.blur();
      state.answers.pitch = composePitchFromSlots(state.answers);
      state.answers.pitchHelpOpen = false;
      render();
    });
  }

  // Help AI assist: open/close the helper panel
  root.querySelectorAll("[data-toggle-helphelp]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers.helpHelpOpen = btn.dataset.toggleHelphelp === "open";
      render();
    });
  });

  // Help AI assist: reroll suggestions
  const helpRegen = root.querySelector("[data-help-regen]");
  if (helpRegen) {
    helpRegen.addEventListener("click", () => {
      state.answers.helpSuggestionSeed = (state.answers.helpSuggestionSeed || 0) + 1;
      render();
    });
  }

  // Help AI assist: pick a suggestion → populate the textarea and close
  root.querySelectorAll("[data-pick-help]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.pickHelp);
      const suggestions = generateHelpSuggestions(state.answers);
      if (suggestions[i]) {
        state.answers.help = suggestions[i];
        state.answers.helpHelpOpen = false;
        render();
      }
    });
  });

  root.querySelectorAll("[data-toggle-clientsize]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const opening = btn.dataset.toggleClientsize === "open";
      state.answers.clientSizeOpen = opening;
      if (!opening) state.answers.clientSizes = [];
      render();
    });
  });

  root.querySelectorAll("[data-toggle-idealclient]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const opening = btn.dataset.toggleIdealclient === "open";
      state.answers.idealClientOpen = opening;
      if (!opening) {
        state.answers.idealClients = "";
        state.answers.industries = [];
        state.answers.clientSizes = [];
        state.answers.clientSizeOpen = false;
      }
      render();
    });
  });

  // Pill multi-select
  root.querySelectorAll("[data-pill-group]").forEach((group) => {
    const key = group.dataset.pillGroup;
    group.querySelectorAll("[data-pill]").forEach((pill) => {
      pill.addEventListener("click", () => {
        const val = pill.dataset.pill;
        const list = state.answers[key];
        const idx = list.indexOf(val);
        if (idx === -1) list.push(val); else list.splice(idx, 1);
        pill.classList.toggle("pill--selected");
      });
    });
  });

  // Discipline tag input
  const disciplineInput = document.getElementById("disciplineInput");
  if (disciplineInput) {
    disciplineInput.addEventListener("input", () => {
      state.answers.disciplineDraft = disciplineInput.value;
      render();
    });
    disciplineInput.addEventListener("keydown", (e) => {
      const val = disciplineInput.value.trim();
      if ((e.key === "Enter" || e.key === ",") && val) {
        e.preventDefault();
        if (!state.answers.disciplines.map(r => r.toLowerCase()).includes(val.toLowerCase())) {
          state.answers.disciplines.push(val);
        }
        state.answers.disciplineDraft = "";
        render();
      } else if (e.key === "Backspace" && !disciplineInput.value && state.answers.disciplines.length) {
        state.answers.disciplines.pop();
        render();
      }
    });
  }
  root.querySelectorAll("[data-discipline-remove]").forEach((el) => {
    el.addEventListener("click", () => {
      state.answers.disciplines.splice(Number(el.dataset.disciplineRemove), 1);
      render();
    });
  });
  root.querySelectorAll("[data-discipline-suggest]").forEach((el) => {
    el.addEventListener("click", () => {
      const val = el.dataset.disciplineSuggest;
      if (!state.answers.disciplines.map(r => r.toLowerCase()).includes(val.toLowerCase())) {
        state.answers.disciplines.push(val);
      }
      state.answers.disciplineDraft = "";
      render();
    });
  });

  // Specialty: tag input with smart-finish autocomplete
  const addSpecialty = (raw) => {
    const v = formatSpecialty(raw);
    if (!v) return;
    const exists = state.answers.specialties.some(
      (s) => s.toLowerCase() === v.toLowerCase()
    );
    if (!exists) state.answers.specialties.push(v);
    state.answers.specialtyDraft = "";
  };

  const renderAndFocusSpecialty = () => {
    render();
    const el = document.getElementById("specialtyInput");
    if (el) el.focus();
  };

  const specialtyInput = document.getElementById("specialtyInput");
  if (specialtyInput) {
    // Keep focus whenever suggestions re-render mid-typing
    specialtyInput.focus();
    specialtyInput.setSelectionRange(
      specialtyInput.value.length,
      specialtyInput.value.length
    );
    specialtyInput.addEventListener("input", () => {
      state.answers.specialtyDraft = specialtyInput.value;
      render();
      const el = document.getElementById("specialtyInput");
      if (el) {
        el.focus();
        el.setSelectionRange(el.value.length, el.value.length);
      }
    });
    specialtyInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === "Tab" || e.key === ",") {
        const q = specialtyInput.value.trim();
        if (!q) {
          if (e.key === "Tab") return; // allow normal tabbing when empty
          e.preventDefault();
          return;
        }
        e.preventDefault();
        // Enter/Tab = accept top suggestion if one exists, otherwise smart-finish the typed text
        const matches = getSpecialtyMatches(
          q,
          disciplineFromRoles(state.answers.disciplines),
          state.answers.specialties
        );
        const pick = matches[0] || formatSpecialty(q);
        addSpecialty(pick);
        renderAndFocusSpecialty();
      } else if (
        e.key === "Backspace" &&
        specialtyInput.value === "" &&
        state.answers.specialties.length > 0
      ) {
        state.answers.specialties.pop();
        renderAndFocusSpecialty();
      } else if (e.key === "Escape") {
        state.answers.specialtyDraft = "";
        renderAndFocusSpecialty();
      }
    });
  }

  root.querySelectorAll("[data-specialty-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.specialtyRemove);
      state.answers.specialties.splice(i, 1);
      renderAndFocusSpecialty();
    });
  });

  root.querySelectorAll("[data-chip-specialty]").forEach((chip) => {
    chip.addEventListener("click", () => {
      addSpecialty(chip.dataset.chipSpecialty);
      renderAndFocusSpecialty();
    });
  });

  // Autocomplete suggestion click: mousedown fires before input blur,
  // so we can commit the pick before the input loses focus
  root.querySelectorAll("[data-suggest]").forEach((btn) => {
    btn.addEventListener("mousedown", (e) => {
      e.preventDefault();
      addSpecialty(btn.dataset.suggest);
      renderAndFocusSpecialty();
    });
  });

  // Tax: Yes/No segmented for registration
  root.querySelectorAll("[data-tax-registered]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers.taxRegistered = btn.dataset.taxRegistered === "yes";
      render();
    });
  });

  // Hourly rate: Same / Different segmented
  root.querySelectorAll("[data-rate-match]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const matches = btn.dataset.rateMatch === "yes";
      if (state.answers.rateMatchesClient === matches) return;
      state.answers.rateMatchesClient = matches;
      if (matches) state.answers.clientHourlyRate = "";
      render();
    });
  });

  // Charging methods: multi-select toggle
  root.querySelectorAll("[data-charge-method]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.chargeMethod;
      const methods = state.answers.pricing.chargingMethods;
      const idx = methods.indexOf(id);
      if (idx === -1) {
        methods.push(id);
        // Auto-set primary if this is the first selection
        if (methods.length === 1) state.answers.pricing.primary = id;
      } else {
        methods.splice(idx, 1);
        // Clear primary if it was this method
        if (state.answers.pricing.primary === id) {
          state.answers.pricing.primary = methods[0] || "";
        }
      }
      render();
    });
  });

  // Pricing: pick primary model (go-to pill inside tile)
  root.querySelectorAll("[data-pricing-primary]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // don't trigger the parent tile toggle
      const id = btn.dataset.pricingPrimary;
      state.answers.pricing.primary = state.answers.pricing.primary === id ? "" : id;
      render();
    });
  });

  // Pricing: rate/range inputs (primary + any secondary)
  root.querySelectorAll("[data-pricing-rate]").forEach((input) => {
    input.addEventListener("input", () => {
      const scope = input.dataset.pricingRate;
      const field = input.dataset.pricingField;
      if (scope === "primary") {
        state.answers.pricing.primaryRate[field] = input.value;
      } else if (scope.startsWith("secondary-")) {
        const i = Number(scope.slice("secondary-".length));
        if (state.answers.pricing.secondary[i]) {
          state.answers.pricing.secondary[i][field] = input.value;
        }
      }
    });
  });

  // Day rate: hours-in-a-day selector
  root.querySelectorAll("[data-day-hours]").forEach((sel) => {
    sel.addEventListener("change", () => {
      state.answers.pricing.dayHours = sel.value;
      render();
    });
  });

  // Day rate: "Use this →" → write the suggested rate into the correct scope
  root.querySelectorAll("[data-day-use-suggested]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const scope = btn.dataset.dayUseSuggested;
      const hourlyNum = parseFloat(String(state.answers.hourlyRate || "").replace(/[^0-9.]/g, ""));
      const hours = parseFloat(state.answers.pricing.dayHours || "8") || 8;
      if (isNaN(hourlyNum) || hourlyNum <= 0) return;
      const suggested = String(Math.round(hourlyNum * hours));
      if (scope === "primary") {
        state.answers.pricing.primaryRate.rate = suggested;
      } else if (scope.startsWith("secondary-")) {
        const i = Number(scope.slice("secondary-".length));
        if (state.answers.pricing.secondary[i]) {
          state.answers.pricing.secondary[i].rate = suggested;
        }
      }
      render();
    });
  });

  // Pricing: add a secondary model
  root.querySelectorAll("[data-pricing-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.pricingAdd;
      state.answers.pricing.secondary.push({ model: id, rate: "", min: "", max: "" });
      render();
    });
  });

  // Pricing: remove a secondary model
  root.querySelectorAll("[data-pricing-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.pricingRemove);
      state.answers.pricing.secondary.splice(i, 1);
      render();
    });
  });

  // Hourly reference: scroll back up to the hourly rate field
  root.querySelectorAll('[data-scroll-to="hourlyRate"]').forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = root.querySelector('[data-key="hourlyRate"]');
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.focus({ preventScroll: true });
      }
    });
  });

  // Pricing: toggle extras (tiered / value-based / other)
  root.querySelectorAll("[data-pricing-extra]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.pricingExtra;
      const p = state.answers.pricing;
      const idx = p.extras.indexOf(id);
      if (idx === -1) {
        p.extras.push(id);
        if (id === "tiered" && p.tiers.length === 0) {
          p.tiers = seedDefaultTiers();
        }
        if (id === "per-asset" && p.assets.length === 0) {
          p.assets = seedDefaultAssets();
        }
      } else {
        p.extras.splice(idx, 1);
        if (id === "other") p.extrasOther = "";
        if (id === "value") p.valueBased = "";
        if (id === "tiered") p.tiers = [];
        if (id === "per-asset") p.assets = [];
      }
      render();
    });
  });

  // Pricing: "other" freeform text
  const extrasOther = root.querySelector('[data-key="pricingExtrasOther"]');
  if (extrasOther) {
    extrasOther.addEventListener("input", () => {
      state.answers.pricing.extrasOther = extrasOther.value;
    });
  }

  // Pricing: value-based textarea
  const valueBased = root.querySelector('[data-key="pricingValueBased"]');
  if (valueBased) {
    valueBased.addEventListener("input", () => {
      state.answers.pricing.valueBased = valueBased.value;
    });
  }

  // Tiers: update any field on a tier
  root.querySelectorAll("[data-tier-field]").forEach((el) => {
    const evt = el.tagName === "SELECT" ? "change" : "input";
    el.addEventListener(evt, () => {
      const id = el.dataset.tierId;
      const field = el.dataset.tierField;
      const tier = state.answers.pricing.tiers.find(t => t.id === id);
      if (!tier) return;
      tier[field] = el.value;
      if (evt === "change") render();
    });
  });

  // Tiers: toggle price type (Fixed vs From)
  root.querySelectorAll("[data-tier-price-type]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.tierId;
      const type = btn.dataset.tierPriceType;
      const tier = state.answers.pricing.tiers.find(t => t.id === id);
      if (!tier || tier.priceType === type) return;
      tier.priceType = type;
      render();
    });
  });

  // Tiers: remove a tier
  root.querySelectorAll("[data-tier-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.tierRemove;
      state.answers.pricing.tiers = state.answers.pricing.tiers.filter(t => t.id !== id);
      render();
    });
  });

  // Assets: field edits (name, price)
  root.querySelectorAll("[data-asset-field]").forEach((el) => {
    el.addEventListener("input", () => {
      const id = el.dataset.assetId;
      const field = el.dataset.assetField;
      const asset = state.answers.pricing.assets.find(x => x.id === id);
      if (!asset) return;
      asset[field] = el.value;
    });
  });

  // Assets: toggle price type (Fixed vs From)
  root.querySelectorAll("[data-asset-price-type]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.assetId;
      const type = btn.dataset.assetPriceType;
      const asset = state.answers.pricing.assets.find(x => x.id === id);
      if (!asset || asset.priceType === type) return;
      asset.priceType = type;
      render();
    });
  });

  // Assets: remove
  root.querySelectorAll("[data-asset-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.assetRemove;
      state.answers.pricing.assets = state.answers.pricing.assets.filter(x => x.id !== id);
      render();
    });
  });

  // Assets: add
  root.querySelectorAll("[data-asset-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers.pricing.assets.push({
        id: uid(), name: "", priceType: "fixed", price: "",
      });
      render();
    });
  });

  // Tiers: add a tier
  root.querySelectorAll("[data-tier-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const existing = state.answers.pricing.tiers.length;
      state.answers.pricing.tiers.push({
        id: uid(), name: `Tier ${existing + 1}`, priceType: "fixed", price: "",
        revisions: "2", includes: "",
      });
      render();
    });
  });

  // Socials: platform change, handle input, remove, add
  root.querySelectorAll("[data-social-platform]").forEach((el) => {
    el.addEventListener("change", () => {
      const i = Number(el.dataset.socialPlatform);
      state.answers.socials[i].platform = el.value;
      render();
    });
  });
  root.querySelectorAll("[data-social-handle]").forEach((el) => {
    el.addEventListener("input", () => {
      const i = Number(el.dataset.socialHandle);
      state.answers.socials[i].handle = el.value;
    });
  });
  root.querySelectorAll("[data-social-remove]").forEach((el) => {
    el.addEventListener("click", () => {
      const i = Number(el.dataset.socialRemove);
      state.answers.socials.splice(i, 1);
      render();
    });
  });
  const addSocial = document.getElementById("addSocial");
  if (addSocial) {
    addSocial.addEventListener("click", () => {
      const used = new Set(state.answers.socials.map((s) => s.platform));
      const next = SOCIAL_PLATFORMS.find((p) => !used.has(p.id)) || SOCIAL_PLATFORMS[0];
      state.answers.socials.push({ platform: next.id, handle: "" });
      render();
    });
  }

  // Career stage
  root.querySelectorAll("[data-career-stage]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers.careerStage = btn.dataset.careerStage;
      render();
    });
  });

  // Primary services: tag input
  const addPrimaryService = (raw) => {
    const v = formatSpecialty(raw);
    if (!v) return;
    if (!state.answers.primaryServices.some(s => s.toLowerCase() === v.toLowerCase())) {
      state.answers.primaryServices.push(v);
    }
    state.answers.primaryServiceDraft = "";
  };
  const renderAndFocusPrimary = () => {
    render();
    const el = document.getElementById("primaryServiceInput");
    if (el) el.focus();
  };
  const primaryServiceInput = document.getElementById("primaryServiceInput");
  if (primaryServiceInput) {
    primaryServiceInput.focus();
    primaryServiceInput.addEventListener("input", () => {
      state.answers.primaryServiceDraft = primaryServiceInput.value;
      render();
      const el = document.getElementById("primaryServiceInput");
      if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
    });
    primaryServiceInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === "Tab" || e.key === ",") {
        const q = primaryServiceInput.value.trim();
        if (!q) return;
        e.preventDefault();
        const matches = getSpecialtyMatches(q, disciplineFromRoles(state.answers.disciplines), state.answers.primaryServices);
        addPrimaryService(matches[0] || q);
        renderAndFocusPrimary();
      } else if (e.key === "Backspace" && primaryServiceInput.value === "" && state.answers.primaryServices.length > 0) {
        state.answers.primaryServices.pop();
        renderAndFocusPrimary();
      } else if (e.key === "Escape") {
        state.answers.primaryServiceDraft = "";
        renderAndFocusPrimary();
      }
    });
  }
  root.querySelectorAll("[data-primary-service-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers.primaryServices.splice(Number(btn.dataset.primaryServiceRemove), 1);
      renderAndFocusPrimary();
    });
  });
  root.querySelectorAll("[data-primary-suggest]").forEach((btn) => {
    btn.addEventListener("mousedown", (e) => {
      e.preventDefault();
      addPrimaryService(btn.dataset.primarySuggest);
      renderAndFocusPrimary();
    });
  });

  // Drag-to-transfer between specialties ↔ primaryServices
  root.querySelectorAll("[data-drag-from]").forEach((tag) => {
    tag.addEventListener("dragstart", (e) => {
      const from  = tag.dataset.dragFrom;
      const index = Number(tag.dataset.dragIndex);
      const value = state.answers[from][index];
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", JSON.stringify({ from, index, value }));
      tag.classList.add("tag--dragging");
    });
    tag.addEventListener("dragend", () => tag.classList.remove("tag--dragging"));
  });

  root.querySelectorAll("[data-droptarget]").forEach((zone) => {
    zone.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      zone.classList.add("tag-input--drag-over");
    });
    zone.addEventListener("dragleave", (e) => {
      if (!zone.contains(e.relatedTarget)) zone.classList.remove("tag-input--drag-over");
    });
    zone.addEventListener("drop", (e) => {
      e.preventDefault();
      zone.classList.remove("tag-input--drag-over");
      let payload;
      try { payload = JSON.parse(e.dataTransfer.getData("text/plain")); } catch { return; }
      const { from, index, value } = payload;
      const to = zone.dataset.droptarget;
      if (from === to) return;
      // Remove from source, add to destination (if not already present)
      state.answers[from].splice(index, 1);
      const dest = state.answers[to];
      if (!dest.some(s => s.toLowerCase() === value.toLowerCase())) dest.push(value);
      render();
    });
  });

  // Secondary services: tag input
  const addSecondaryService = (raw) => {
    const v = formatSpecialty(raw);
    if (!v) return;
    if (!state.answers.secondaryServices.some(s => s.toLowerCase() === v.toLowerCase())) {
      state.answers.secondaryServices.push(v);
    }
    state.answers.secondaryServiceDraft = "";
  };
  const renderAndFocusSecondary = () => {
    render();
    const el = document.getElementById("secondaryServiceInput");
    if (el) el.focus();
  };
  const secondaryServiceInput = document.getElementById("secondaryServiceInput");
  if (secondaryServiceInput) {
    secondaryServiceInput.addEventListener("input", () => {
      state.answers.secondaryServiceDraft = secondaryServiceInput.value;
      render();
      const el = document.getElementById("secondaryServiceInput");
      if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
    });
    secondaryServiceInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === "Tab" || e.key === ",") {
        const q = secondaryServiceInput.value.trim();
        if (!q) return;
        e.preventDefault();
        const allTaken = [...state.answers.primaryServices, ...state.answers.secondaryServices];
        const matches = getSpecialtyMatches(q, disciplineFromRoles(state.answers.disciplines), allTaken);
        addSecondaryService(matches[0] || q);
        renderAndFocusSecondary();
      } else if (e.key === "Backspace" && secondaryServiceInput.value === "" && state.answers.secondaryServices.length > 0) {
        state.answers.secondaryServices.pop();
        renderAndFocusSecondary();
      } else if (e.key === "Escape") {
        state.answers.secondaryServiceDraft = "";
        renderAndFocusSecondary();
      }
    });
  }
  root.querySelectorAll("[data-secondary-service-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers.secondaryServices.splice(Number(btn.dataset.secondaryServiceRemove), 1);
      renderAndFocusSecondary();
    });
  });
  root.querySelectorAll("[data-secondary-suggest]").forEach((btn) => {
    btn.addEventListener("mousedown", (e) => {
      e.preventDefault();
      addSecondaryService(btn.dataset.secondarySuggest);
      renderAndFocusSecondary();
    });
  });

  // Case studies: toggle open/closed
  root.querySelectorAll("[data-toggle-casestudies]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers.caseStudiesOpen = btn.dataset.toggleCasestudies === "open";
      render();
    });
  });

  // Case studies: toggle edit panel open/closed
  root.querySelectorAll("[data-cs-edit]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.csEdit);
      state.answers.caseStudies[i].editOpen = !state.answers.caseStudies[i].editOpen;
      render();
    });
  });

  // Case studies: live-edit any field (title, summary, clientWebsite, portfolioLink)
  root.querySelectorAll("[data-cs-field]").forEach((el) => {
    el.addEventListener("input", () => {
      const i = Number(el.dataset.csField);
      const key = el.dataset.csKey;
      state.answers.caseStudies[i][key] = el.value;
    });
  });

  // Case studies: show/hide individual
  root.querySelectorAll("[data-cs-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const i = Number(btn.dataset.csToggle);
      state.answers.caseStudies[i].hidden = !state.answers.caseStudies[i].hidden;
      render();
    });
  });

  // Case studies: remove
  root.querySelectorAll("[data-cs-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.answers.caseStudies.splice(Number(btn.dataset.csRemove), 1);
      render();
    });
  });

  // Case studies: add blank entry
  const addCaseStudy = document.getElementById("addCaseStudy");
  if (addCaseStudy) {
    addCaseStudy.addEventListener("click", () => {
      const title = prompt("Case study title (e.g. Brand identity · Studio Name)");
      if (!title) return;
      state.answers.caseStudies.push({ id: "cs" + Date.now(), title, summary: "", clientWebsite: "", portfolioLink: "", keywords: "", hidden: false, editOpen: true });
      render();
    });
  }

  // Wordmark upload
  const wordmarkInput = document.getElementById("wordmarkInput");
  if (wordmarkInput) {
    wordmarkInput.addEventListener("change", () => {
      const file = wordmarkInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        state.answers.wordmarkSrc = e.target.result;
        render();
      };
      reader.readAsDataURL(file);
    });
  }

  const wordmarkRemove = document.getElementById("wordmarkRemove");
  if (wordmarkRemove) {
    wordmarkRemove.addEventListener("click", () => {
      state.answers.wordmarkSrc = "";
      render();
    });
  }

  // Swatch selection (primary)
  root.querySelectorAll("[data-swatch]").forEach((s) => {
    s.addEventListener("click", () => {
      state.answers.primaryColorIndex = Number(s.dataset.swatch);
      render();
    });
  });

  // File remove
  root.querySelectorAll("[data-remove]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.remove;
      const i = Number(btn.dataset.index);
      const key = type === "proposal" ? "proposalFiles" : "contractFiles";
      state.answers[key].splice(i, 1);
      render();
    });
  });

  // File drop zones (mock: just add a fake file on click)
  const proposalDrop = document.getElementById("proposalDrop");
  if (proposalDrop) {
    proposalDrop.addEventListener("click", () => {
      state.answers.proposalFiles.push({ name: "Proposal · New client.pdf", size: "0.9 MB" });
      render();
    });
  }
  const contractDrop = document.getElementById("contractDrop");
  if (contractDrop) {
    contractDrop.addEventListener("click", () => {
      state.answers.contractFiles.push({ name: "Terms · v2.pdf", size: "240 KB" });
      render();
    });
  }

  // Intro: scan and start
  const scanBtn = document.getElementById("scanBtn");
  if (scanBtn) {
    scanBtn.addEventListener("click", () => {
      state.step = 0;
      render({ scrollToTop: true });
    });
  }
  const introWebsite = document.getElementById("introWebsite");
  if (introWebsite) {
    const syncScanBtn = () => {
      const btn = document.getElementById("scanBtn");
      if (btn) btn.disabled = !introWebsite.value.trim();
    };
    introWebsite.addEventListener("input", syncScanBtn);
    introWebsite.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && introWebsite.value.trim()) {
        state.step = 0;
        render({ scrollToTop: true });
      }
    });
  }

  // Nav
  const backBtn = document.getElementById("backBtn");
  const nextBtn = document.getElementById("nextBtn");
  const startBtn = document.getElementById("startBtn");
  if (backBtn) backBtn.addEventListener("click", () => { state.step--; render({ scrollToTop: true }); });
  if (nextBtn) nextBtn.addEventListener("click", () => { state.step++; render({ scrollToTop: true }); });
  if (startBtn) startBtn.addEventListener("click", () => {
    console.log("Creative Pro profile:", state.answers);
    alert("Ready to create your first proposal!");
  });
}

// ── Live-update preview on step 1 ───────────────────────
function updateBrandPreview() {
  const a = state.answers;
  const nameEl = root.querySelector(".preview__name");
  const urlEl = root.querySelector(".preview__url");
  const nameDisplay = a.name || (a.workType === "solo" ? "Trading name" : "Studio name");
  const urlDisplay = a.website ? a.website.replace(/^https?:\/\//, "") : "yourstudio.com";
  if (nameEl) nameEl.textContent = nameDisplay;
  if (urlEl) urlEl.textContent = urlDisplay;
}

// ── Utilities ───────────────────────────────────────────
function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function escapeAttr(s) { return escapeHtml(s); }

// ── Boot ────────────────────────────────────────────────
render();
