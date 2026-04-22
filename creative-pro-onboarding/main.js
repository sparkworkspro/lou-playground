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

const RED_FLAG_PROMPTS = [
  'Asks you to copy another artist\'s style',
  "Only wants a logo, no brand system",
  "Vague brief, changes direction often",
  "No budget clarity",
  "Expects unlimited revisions",
  "Won't pay a deposit",
  "Timeline is \"ASAP\"",
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

const PRICING_MODELS = [
  { id: "fixed",    label: "Fixed price",      rateLabel: "Typical range",  placeholder: "",      unit: "per project", range: true },
  { id: "day",      label: "Day rate",         rateLabel: "Day rate",       placeholder: "1,200", unit: "per day" },
  { id: "hourly",   label: "Hourly",           rateLabel: "Hourly rate",    placeholder: "150",   unit: "per hour" },
  { id: "retainer", label: "Monthly retainer", rateLabel: "Monthly amount", placeholder: "4,000", unit: "per month" },
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
      "founder-led food &amp; drink brands",
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
  return PITCH_SLOTS[a.discipline] || PITCH_SLOTS_GENERIC;
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
  const pool = PITCH_TEMPLATES[a.discipline] || PITCH_TEMPLATES_GENERIC;
  return generateSuggestions(pool, a.pitchSuggestionSeed || 0, a.workType === "team");
}

function generateHelpSuggestions(a) {
  const pool = HELP_TEMPLATES[a.discipline] || HELP_TEMPLATES_GENERIC;
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
  step: 0,
  totalSteps: 3,
  answers: {
    // Brand basics
    workType: "solo",
    name: "",
    role: "",
    country: "AU",
    city: "",
    website: "https://yourstudio.com",
    socials: [{ platform: "instagram", handle: "" }],
    // Brand assets (pre-filled from "brand builder" scrape)
    logoInitial: "S",
    colors: ["#1A1816", "#E8B86D", "#D97559", "#F0EEEB"],
    primaryColorIndex: 0,
    fonts: {
      primary: { name: "", source: "" },
      secondary: { name: "", source: "" },
      mono: { name: "", source: "" },
    },
    fontPicker: { slot: "", source: "" },
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
    discipline: "",
    specialties: [],
    specialtyDraft: "",
    help: "",
    helpHelpOpen: false,
    helpSuggestionSeed: 0,
    hoursPerWeek: "",
    hoursPerWeekOther: "",
    hourlyRate: "",
    rateMatchesClient: true,
    clientHourlyRate: "",
    // Customers
    idealClientOpen: false,
    idealClients: "",
    industries: [],
    clientSizes: [],
    clientSizeOpen: false,
    // Offers
    pricing: {
      primary: "",
      primaryRate: { rate: "", min: "", max: "" },
      secondary: [],
      extras: [],
      extrasOther: "",
      tiers: [],
      assets: [],
      valueBased: "",
      dayHours: "8",
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
};

// ── Root ────────────────────────────────────────────────
const root = document.getElementById("onboarding");

function render({ scrollToTop = false } = {}) {
  const prevScroll = window.scrollY;
  const html =
    state.step === 0 ? renderStepBrand() :
    state.step === 1 ? renderStepWork() :
    state.step === 2 ? renderStepStyle() :
    renderComplete();

  root.innerHTML = html;
  bindEvents();
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
      <button class="btn btn--ghost" id="backBtn" ${state.step === 0 ? "disabled" : ""}>
        ${ICON.arrowLeft} Back
      </button>
      <button class="btn btn--primary" id="nextBtn">
        ${isLast ? "Finish setup" : "Continue"} ${ICON.arrowRight}
      </button>
    </div>`;
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
    <p class="step__desc">Sits on every proposal. We've pulled a starting point from your site, tweak anything that's off.</p>

    <div class="step__body step__body--with-preview">
      <!-- Preview column -->
      <div class="preview">
        <div class="preview__card">
          <div class="preview__hero">
            ${a.hasHero ? `<div class="preview__hero-hint">${ICON.image}</div>` : ""}
          </div>
          <div class="preview__body">
            <div class="preview__logo">${a.logoInitial}</div>
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
      </div>

      <!-- Form column -->
      <div class="step__form-col">

        <!-- Brand basics -->
        <div class="section">
          <h2 class="section__title">Brand basics</h2>
          <p class="section__helper">How do you work?</p>

          <div class="segmented" style="margin-bottom:1.5rem">
            <button class="segmented__btn ${a.workType === "solo" ? "segmented__btn--active" : ""}" data-worktype="solo">Solo freelancer</button>
            <button class="segmented__btn ${a.workType === "studio" ? "segmented__btn--active" : ""}" data-worktype="studio">Creative team</button>
          </div>

          <div class="field">
            <label class="field__label field__label--required">${nameLabel}</label>
            <input class="input" type="text" data-key="name"
                   placeholder="${a.workType === "solo" ? "e.g. Studio Remi" : "e.g. Field Day Studio"}"
                   value="${escapeAttr(a.name)}" />
          </div>

          <div class="field">
            <label class="field__label field__label--required">Role / title</label>
            <input class="input" type="text" data-key="role"
                   placeholder="e.g. Senior Designer, Founder"
                   value="${escapeAttr(a.role)}" />
          </div>

          <div class="grid-2">
            <div class="field">
              <label class="field__label field__label--required">Country</label>
              <select class="input" data-key="country">
                ${COUNTRIES.map(c => `<option value="${c.code}" ${a.country === c.code ? "selected" : ""}>${c.name}</option>`).join("")}
              </select>
            </div>
            <div class="field">
              <label class="field__label">City</label>
              <input class="input" type="text" data-key="city"
                     placeholder="e.g. Melbourne"
                     value="${escapeAttr(a.city)}" />
            </div>
          </div>

          <div class="field">
            <label class="field__label field__label--required">Website</label>
            <input class="input" type="url" data-key="website"
                   placeholder="https://yourstudio.com"
                   value="${escapeAttr(a.website)}" />
            <p class="field__help">We'll scan your site to extract logo, colours, and imagery.</p>
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

        <!-- Confirm your brand -->
        <div class="section">
          <h2 class="section__title">Confirm your brand</h2>
          <p class="section__helper section__helper--accent">We pulled these from your site. Edit anything that's off.</p>

          <div class="assets-row">
            <div class="media-card">
              <span class="media-card__label">Logo</span>
              <button class="media-card__replace">Replace</button>
              <div class="media-card__icon">${ICON.image}</div>
            </div>
            <div class="media-card">
              <span class="media-card__label">Hero image</span>
              <button class="media-card__replace">Replace</button>
              <div class="media-card__icon">${ICON.image}</div>
            </div>
          </div>
          <p class="field__help" style="margin-top:.75rem">Used on your proposal cover and client card.</p>
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
  const primaryModel = PRICING_MODELS.find(m => m.id === p.primary);

  return `
    <div class="pricing-tiles" role="radiogroup" aria-label="Main pricing model">
      ${PRICING_MODELS.map(m => `
        <button class="pricing-tile ${p.primary === m.id ? "pricing-tile--selected" : ""}"
                data-pricing-primary="${m.id}"
                role="radio"
                aria-checked="${p.primary === m.id}">
          <span class="pricing-tile__label">${m.label}</span>
          <span class="pricing-tile__unit">${m.unit}</span>
        </button>
      `).join("")}
    </div>

    ${primaryModel ? (
      primaryModel.id === "hourly"
        ? renderHourlyReference(a)
        : primaryModel.id === "day"
          ? `<div class="pricing-rate">${renderDayRateInput(a, p.primaryRate, "primary")}</div>`
          : `<div class="pricing-rate">${renderPricingRateInput(primaryModel, p.primaryRate, "primary")}</div>`
    ) : ""}

    ${p.primary ? renderPricingSecondary(a) : ""}

    ${p.primary ? renderPricingExtras(a) : ""}
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
  const picker = a.fontPicker;
  const hasPrimary = !!a.fonts.primary.name;

  // A picker is open for some slot
  if (picker.slot) {
    return renderFontPicker(a, picker);
  }

  // No primary yet: show the three source options
  if (!hasPrimary) {
    return `
      <p class="section__helper">Pick your primary font.</p>
      ${renderFontSourceButtons("primary")}
    `;
  }

  // Primary is a system default: that's the whole typography choice
  if (a.fonts.primary.source === "default") {
    return renderFontSlot("primary", a.fonts.primary);
  }

  // Primary is a real font: show it plus any added slots, then the "Add another?" row
  return `
    ${renderFontSlot("primary", a.fonts.primary)}
    ${a.fonts.secondary.name ? renderFontSlot("secondary", a.fonts.secondary) : ""}
    ${a.fonts.mono.name ? renderFontSlot("mono", a.fonts.mono) : ""}

    ${(!a.fonts.secondary.name || !a.fonts.mono.name) ? `
      <div class="font-add-row">
        <span class="font-add-row__label">Add another?</span>
        ${!a.fonts.secondary.name ? `<button class="chip" data-font-add="secondary">+ Secondary</button>` : ""}
        ${!a.fonts.mono.name ? `<button class="chip" data-font-add="mono">+ Monospace</button>` : ""}
      </div>
    ` : ""}
  `;
}

function renderFontSlot(slot, font) {
  const meta = FONT_SLOT_LABELS[slot];
  const isDefault = font.source === "default";
  const slotLabel = slot === "primary" && isDefault ? "Default font" : meta.label;
  const slotHint  = slot === "primary" && isDefault ? "Used throughout" : meta.hint;
  const sourceLabel =
    font.source === "upload" ? "Uploaded" :
    font.source === "google" ? "Google Fonts" :
    font.source === "adobe" ? "Adobe Fonts" :
    isDefault ? "System default" : "";
  return `
    <div class="font-slot">
      <div class="font-slot__meta">
        <div class="font-slot__label">${slotLabel}</div>
        <div class="font-slot__hint">${slotHint}</div>
      </div>
      <div class="font-slot__value">
        <div class="font-slot__name">${escapeHtml(font.name)}</div>
        ${sourceLabel ? `<div class="font-slot__source">${sourceLabel}</div>` : ""}
      </div>
      <div class="font-slot__actions">
        <button class="btn-link" data-font-change="${slot}">Change</button>
        ${slot !== "primary" ? `<button class="btn-link btn-link--muted" data-font-remove="${slot}">Remove</button>` : ""}
      </div>
    </div>
  `;
}

function renderFontSourceButtons(slot) {
  return `
    <div class="font-sources">
      <button class="font-source" data-font-source="upload" data-font-slot="${slot}">
        <div class="font-source__title">Upload</div>
        <div class="font-source__hint">.woff, .woff2, .otf, .ttf</div>
      </button>
      <button class="font-source" data-font-source="google" data-font-slot="${slot}">
        <div class="font-source__title">Google Fonts</div>
        <div class="font-source__hint">Free, ready to use</div>
      </button>
      <button class="font-source" data-font-source="adobe" data-font-slot="${slot}">
        <div class="font-source__title">Adobe Fonts</div>
        <div class="font-source__hint">From your Creative Cloud</div>
      </button>
    </div>
    ${slot === "primary" ? `
      <div class="font-defaults">
        <span class="font-defaults__label">No font? Use a default</span>
        <button class="chip" data-font-default="Sans-serif" data-font-slot="${slot}">Sans-serif</button>
        <button class="chip" data-font-default="Serif" data-font-slot="${slot}">Serif</button>
      </div>
    ` : ""}
  `;
}

function renderFontPicker(a, picker) {
  const meta = FONT_SLOT_LABELS[picker.slot];
  const slotLabel = meta ? meta.label : "Font";

  // No source chosen yet: show the three source options
  if (!picker.source) {
    return `
      <div class="font-picker">
        <div class="font-picker__header">
          <div>
            <div class="font-picker__eyebrow">${slotLabel}</div>
            <div class="font-picker__title">Where's your font from?</div>
          </div>
          <button class="btn-link btn-link--muted" data-font-cancel>Cancel</button>
        </div>
        ${renderFontSourceButtons(picker.slot)}
      </div>
    `;
  }

  if (picker.source === "upload") {
    return `
      <div class="font-picker">
        <div class="font-picker__header">
          <div>
            <div class="font-picker__eyebrow">${slotLabel}</div>
            <div class="font-picker__title">Upload a font file</div>
          </div>
          <button class="btn-link btn-link--muted" data-font-cancel>Cancel</button>
        </div>
        <div class="file-drop" data-font-upload-drop>
          <div style="margin-bottom:.5rem; color:var(--text-muted)">${ICON.upload}</div>
          <div class="file-drop__title">Drop a font file here</div>
          <div class="file-drop__sub">.woff, .woff2, .otf or .ttf</div>
        </div>
        <p class="field__help" style="margin-top:.75rem">Or paste a font name below.</p>
        <div class="font-picker__inputrow">
          <input class="input" type="text" id="fontPickerInput" placeholder="e.g. ABC Diatype" autocomplete="off" />
          <button class="btn btn--primary" data-font-confirm>Use font</button>
        </div>
      </div>
    `;
  }

  const suggestions = FONT_SUGGESTIONS[picker.source] || [];
  const sourceLabel = picker.source === "google" ? "Google Fonts" : "Adobe Fonts";
  return `
    <div class="font-picker">
      <div class="font-picker__header">
        <div>
          <div class="font-picker__eyebrow">${slotLabel}</div>
          <div class="font-picker__title">Pick from ${sourceLabel}</div>
        </div>
        <button class="btn-link btn-link--muted" data-font-cancel>Cancel</button>
      </div>
      <div class="font-picker__inputrow">
        <input class="input" type="text" id="fontPickerInput" placeholder="Search ${sourceLabel}…" autocomplete="off" />
        <button class="btn btn--primary" data-font-confirm>Use font</button>
      </div>
      <div class="chip-row" style="margin-top:.75rem">
        ${suggestions.map(f => `<button class="chip" data-font-suggest="${escapeAttr(f)}">${f}</button>`).join("")}
      </div>
    </div>
  `;
}

// ── Step 2: Your Work ───────────────────────────────────
function renderStepWork() {
  const a = state.answers;

  return `
    ${renderProgress()}
    <div class="step__eyebrow">Step 2 of 3 · About you</div>
    <h1 class="step__title">You and your clients</h1>
    <p class="step__desc">Who you are, and who you do your best work for. We use this to shape every proposal and flag briefs that aren't a fit.</p>

    <div class="step__body">
      <div class="step__form-col">

        <!-- About -->
        <div class="section">
          <h2 class="section__title">About you</h2>
          <p class="section__helper">Sits at the top of your proposal. You can tweak it per client.</p>

          <div class="field">
            <label class="field__label field__label--required">Discipline</label>
            <p class="field__help">What best describes your work?</p>
            <select class="input" data-discipline-select>
              <option value="" ${!a.discipline ? "selected" : ""}>What's your discipline…</option>
              ${DISCIPLINES.map(d => `
                <option value="${d.id}" ${a.discipline === d.id ? "selected" : ""}>${d.name} · ${d.description}</option>
              `).join("")}
            </select>
          </div>

          <div class="field">
            <label class="field__label">Speciality</label>
            <p class="field__help">Areas you focus on. Add as many as apply.</p>
            <div class="tag-input-wrap">
              <div class="tag-input">
                ${a.specialties.map((s, i) => `
                  <span class="tag">
                    ${escapeHtml(s)}
                    <button class="tag__remove" data-specialty-remove="${i}" aria-label="Remove ${escapeAttr(s)}">${ICON.close}</button>
                  </span>
                `).join("")}
                <input class="tag-input__field" id="specialtyInput" type="text"
                       autocomplete="off"
                       placeholder="${a.specialties.length ? "Add another…" : "What do you specialise in?"}"
                       value="${escapeAttr(a.specialtyDraft)}" />
              </div>
              ${(() => {
                const q = a.specialtyDraft.trim();
                if (!q) return "";
                const matches = getSpecialtyMatches(q, a.discipline, a.specialties);
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
            ${(() => {
              if (a.specialtyDraft.trim()) return "";
              const disc = DISCIPLINES.find(d => d.id === a.discipline);
              if (!disc) return "";
              const remaining = disc.specialties.filter(s => !a.specialties.includes(s)).slice(0, 8);
              return remaining.length ? `
                <div class="chip-row">
                  ${remaining.map(s => `<button class="chip" data-chip-specialty="${escapeAttr(s)}">+ ${s}</button>`).join("")}
                </div>
              ` : "";
            })()}
          </div>

          <div class="field">
            <div class="field__label-row">
              <label class="field__label field__label--required">One-line pitch</label>
              <button type="button" class="ai-assist" data-toggle-pitchhelp="${a.pitchHelpOpen ? "close" : "open"}">
                ${a.pitchHelpOpen ? "× Close" : "✨ Need help writing it?"}
              </button>
            </div>
            <textarea class="input" data-key="pitch" rows="2"
                      placeholder="e.g. I design brand identities for founder-led startups.">${escapeHtml(a.pitch)}</textarea>

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

          <div class="field">
            <div class="field__label-row">
              <label class="field__label">How you help clients</label>
              <button type="button" class="ai-assist" data-toggle-helphelp="${a.helpHelpOpen ? "close" : "open"}">
                ${a.helpHelpOpen ? "× Close" : "✨ Need help writing it?"}
              </button>
            </div>
            <textarea class="input" data-key="help" rows="3"
                      placeholder="e.g. I take early-stage brands from founder gut-feel to a full visual system ready for launch.">${escapeHtml(a.help)}</textarea>
            <p class="field__help">We'll use this to spot upsell moments on your discovery calls.</p>

            ${a.helpHelpOpen ? `
              <div class="ai-panel">
                <div class="ai-panel__head">
                  <div class="ai-panel__title">✨ Try one of these</div>
                  <button type="button" class="btn-link btn-link--muted" data-help-regen>↻ Show different ones</button>
                </div>
                <ul class="ai-panel__list">
                  ${generateHelpSuggestions(a).map((s, i) => `
                    <li>
                      <button type="button" class="ai-suggestion" data-pick-help="${i}">
                        <span class="ai-suggestion__text">${escapeHtml(s)}</span>
                        <span class="ai-suggestion__use">Use this →</span>
                      </button>
                    </li>
                  `).join("")}
                </ul>
                <p class="ai-panel__hint">Pick one as a starting point, then edit to sound like you.</p>
              </div>
            ` : ""}
          </div>
        </div>

        <!-- Customers: opt-in add-on -->
        <div class="section section--compact">
          ${a.idealClientOpen ? `
            <div class="section__head-row">
              <div>
                <h2 class="section__title">Your ideal client</h2>
                <p class="section__helper">The clients you do your best work for. We'll nudge you mid-call when a brief isn't a fit.</p>
              </div>
              <button class="btn-link btn-link--muted" data-toggle-idealclient="close">Skip this</button>
            </div>

            <div class="field">
              <label class="field__label">Describe them</label>
              <textarea class="input" data-key="idealClients" rows="3"
                        placeholder="e.g. Early-stage founders who care about craft and move fast. They value a clear process, come with a real brief, and trust you to lead.">${escapeHtml(a.idealClients)}</textarea>
              <p class="field__help">In your words. Who they are, what they care about, how they work with you.</p>
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
                <div class="addon-prompt__title">Add your ideal client?</div>
                <div class="addon-prompt__hint">So we can flag briefs that aren't a fit and nudge you toward work you love on every discovery call.</div>
              </div>
              <button class="btn btn--ghost" data-toggle-idealclient="open">+ Add ideal client</button>
            </div>
          `}
        </div>

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
          <h2 class="section__title">Main way you price</h2>
          <p class="section__helper">Your default. We'll use this to shape proposals and flag mismatched budgets. You can override per client.</p>

          <div class="grid-2" style="margin-bottom:1.5rem">
            <div class="field" style="margin-bottom:0">
              <label class="field__label">Your hourly rate</label>
              <p class="field__help">We use this to ballpark budgets and flag briefs that don't cover your time.</p>
              <div class="tier-card__amount">
                <span class="tier-card__currency">$</span>
                <input class="input" type="text" data-key="hourlyRate" placeholder="150" value="${escapeAttr(a.hourlyRate)}" />
              </div>
            </div>
            <div class="field" style="margin-bottom:0">
              <label class="field__label">What's an average week?</label>
              <p class="field__help">How much time you actually have for client work.</p>
              <select class="input" data-key="hoursPerWeek">
                <option value="">Select…</option>
                <option value="full-time" ${a.hoursPerWeek === "full-time" ? "selected" : ""}>Full time · 5 days, ~37 hrs</option>
                <option value="most-days" ${a.hoursPerWeek === "most-days" ? "selected" : ""}>Most days · 4 days, ~30 hrs</option>
                <option value="half-time" ${a.hoursPerWeek === "half-time" ? "selected" : ""}>Half time · 2–3 days, ~15–20 hrs</option>
                <option value="side" ${a.hoursPerWeek === "side" ? "selected" : ""}>Side hustle · evenings + weekends, ~5–10 hrs</option>
                <option value="variable" ${a.hoursPerWeek === "variable" ? "selected" : ""}>It varies · depends on the month</option>
                <option value="other" ${a.hoursPerWeek === "other" ? "selected" : ""}>Other · type your own</option>
              </select>
              ${a.hoursPerWeek === "other" ? `
                <div class="hours-other">
                  <input class="input" type="text" data-key="hoursPerWeekOther"
                         placeholder="e.g. 25"
                         value="${escapeAttr(a.hoursPerWeekOther)}" />
                  <span class="hours-other__unit">hrs / week</span>
                </div>
              ` : ""}
            </div>
          </div>

          <div class="grid-2">
            <div class="field">
              <label class="field__label">Default currency</label>
              <p class="field__help">From your country. Override per proposal.</p>
              <select class="input" data-key="currency">
                ${CURRENCIES.map(c => `<option value="${c}" ${a.currency === c ? "selected" : ""}>${c}</option>`).join("")}
              </select>
            </div>
            <div class="field">
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

          <div class="section__divider"></div>

          ${renderPricingSection(a)}
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

        <!-- Gut check: opt-in add-on -->
        <div class="section">
          ${a.gutCheckOpen ? `
            <div class="section__head-row">
              <div>
                <h2 class="section__title">Gut check</h2>
                <p class="section__helper">Helps us flag bad-fit briefs on calls and nudge you toward work you love.</p>
              </div>
              <button class="btn-link btn-link--muted" data-toggle-gutcheck="close">Skip this</button>
            </div>

            <div class="field">
              <label class="field__label">Your ideal project</label>
              <textarea class="input" data-key="idealProject" rows="2"
                        placeholder="e.g. A full rebrand for a founder who trusts the process.">${escapeHtml(a.idealProject)}</textarea>
            </div>

            <div class="grid-2">
              <div class="field">
                <label class="field__label">Want more of</label>
                <textarea class="input" data-key="wantMore" rows="3"
                          placeholder="e.g. Editorial projects, long-term partnerships, print work.">${escapeHtml(a.wantMore)}</textarea>
              </div>
              <div class="field">
                <label class="field__label">Want less of</label>
                <textarea class="input" data-key="wantLess" rows="3"
                          placeholder="e.g. One-off social posts, crypto, last-minute deadlines.">${escapeHtml(a.wantLess)}</textarea>
              </div>
            </div>

            <div class="field">
              <label class="field__label">Red flags</label>
              <div class="pill-group" data-pill-group="redFlags">
                ${RED_FLAG_PROMPTS.map(r => `
                  <button class="pill ${a.redFlags.includes(r) ? "pill--selected" : ""}" data-pill="${escapeAttr(r)}">${r}</button>
                `).join("")}
              </div>
              <p class="field__help">We'll surface these as live nudges during discovery calls.</p>
            </div>
          ` : `
            <div class="addon-prompt">
              <div class="addon-prompt__body">
                <div class="addon-prompt__title">Add a gut check?</div>
                <div class="addon-prompt__hint">So we can flag bad-fit briefs on calls and nudge you toward work you love.</div>
              </div>
              <button class="btn btn--ghost" data-toggle-gutcheck="open">+ Add gut check</button>
            </div>
          `}
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

// ── Event binding ───────────────────────────────────────
function bindEvents() {
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

  // Font: open a source picker for the given slot
  root.querySelectorAll("[data-font-source]").forEach((el) => {
    el.addEventListener("click", () => {
      state.answers.fontPicker = {
        slot: el.dataset.fontSlot,
        source: el.dataset.fontSource,
      };
      render();
    });
  });

  // Font: add secondary/mono slot -> show source picker for that slot
  root.querySelectorAll("[data-font-add]").forEach((el) => {
    el.addEventListener("click", () => {
      state.answers.fontPicker = { slot: el.dataset.fontAdd, source: "" };
      render();
    });
  });

  // Font: change an existing slot -> reopen source picker for that slot
  root.querySelectorAll("[data-font-change]").forEach((el) => {
    el.addEventListener("click", () => {
      state.answers.fontPicker = { slot: el.dataset.fontChange, source: "" };
      render();
    });
  });

  // Font: remove a secondary/mono slot
  root.querySelectorAll("[data-font-remove]").forEach((el) => {
    el.addEventListener("click", () => {
      const slot = el.dataset.fontRemove;
      state.answers.fonts[slot] = { name: "", source: "" };
      render();
    });
  });

  // Font: cancel the picker
  root.querySelectorAll("[data-font-cancel]").forEach((el) => {
    el.addEventListener("click", () => {
      state.answers.fontPicker = { slot: "", source: "" };
      render();
    });
  });

  // Font: confirm from text input
  const fontConfirm = () => {
    const input = document.getElementById("fontPickerInput");
    if (!input) return;
    const name = input.value.trim();
    if (!name) return;
    const { slot, source } = state.answers.fontPicker;
    if (!slot || !source) return;
    state.answers.fonts[slot] = { name, source };
    state.answers.fontPicker = { slot: "", source: "" };
    render();
  };
  root.querySelectorAll("[data-font-confirm]").forEach((el) => {
    el.addEventListener("click", fontConfirm);
  });
  const fontInput = document.getElementById("fontPickerInput");
  if (fontInput) {
    fontInput.focus();
    fontInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        fontConfirm();
      } else if (e.key === "Escape") {
        state.answers.fontPicker = { slot: "", source: "" };
        render();
      }
    });
  }

  // Font: pick a system default (Sans-serif or Serif), no picker needed
  root.querySelectorAll("[data-font-default]").forEach((el) => {
    el.addEventListener("click", () => {
      const name = el.dataset.fontDefault;
      const slot = el.dataset.fontSlot || state.answers.fontPicker.slot || "primary";
      state.answers.fonts[slot] = { name, source: "default" };
      if (slot === "primary") {
        state.answers.fonts.secondary = { name: "", source: "" };
        state.answers.fonts.mono = { name: "", source: "" };
      }
      state.answers.fontPicker = { slot: "", source: "" };
      render();
    });
  });

  // Font: click a suggestion chip -> pick it immediately
  root.querySelectorAll("[data-font-suggest]").forEach((el) => {
    el.addEventListener("click", () => {
      const name = el.dataset.fontSuggest;
      const { slot, source } = state.answers.fontPicker;
      if (!slot || !source) return;
      state.answers.fonts[slot] = { name, source };
      state.answers.fontPicker = { slot: "", source: "" };
      render();
    });
  });

  // Font: if source not chosen (user clicked Change or Add), show the 3 source buttons inside the picker
  // (this is handled by renderFontPicker when source is empty — treat it as "need source first")

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

  // Discipline picker
  root.querySelectorAll("[data-discipline-select]").forEach((el) => {
    el.addEventListener("change", () => {
      state.answers.discipline = el.value;
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
          state.answers.discipline,
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

  // Pricing: pick primary model (radio tiles)
  root.querySelectorAll("[data-pricing-primary]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.pricingPrimary;
      if (state.answers.pricing.primary !== id) {
        state.answers.pricing.primary = id;
        state.answers.pricing.primaryRate = { rate: "", min: "", max: "" };
        render();
      }
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
