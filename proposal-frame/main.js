// ═══════════════════════════════════════════════════════════════
//  Proposal Frame: editor surface for a creative pro's draft
//  Brand scope: Boiling Pot (Jake Simmerman, brand & packaging designer) → Fishwife
//
//  Losing is a first-class state. When archive-with-reason lands,
//  it threads through the chrome status + Send sheet from here.
// ═══════════════════════════════════════════════════════════════

// ── Content model ─────────────────────────────────────────────
// AI-assisted blocks carry a `variants` array. Regenerate cycles
// through them; the cycle index is kept in variantIdx[] by field path.
const PROPOSAL = {
  brand: {
    studio: "Boiling Pot Studio",
    mark: "B",
    principal: "Jake Simmerman",
    wordmarkSrc: "",
    role: "Brand & packaging designer",
    city: "Melbourne",
    voice: "individual",
    colors: {
      dark:      "#1c1916",
      primary:   "#b54a2c",
      secondary: "#8a8177",
      light:     "#f4efe7",
    },
    fonts: {
      serif: "Instrument Serif",
      sans:  "DM Sans",
    },
    headingStyle: "serif", // "serif" | "sans"
    links: [
      { kind: "web",       label: "boilingpot.studio",   url: "https://boilingpot.studio",                    hidden: false },
      { kind: "instagram", label: "@boilingpotstudio",   url: "https://instagram.com/boilingpotstudio",       hidden: false },
      { kind: "linkedin",  label: "Jake Simmerman",      url: "https://linkedin.com/in/jakesimmerman",        hidden: false },
    ],
  },
  client: {
    name: "Fishwife",
    contact: "LobJeff",
    product: "Tinned Lobster",
    businessType: "existing",
    industry: "Food & beverage",
    priorClient: "first",
    offering: ["physical"],
    socials: {
      website:   "",
      instagram: "",
      linkedin:  "",
      tiktok:    "",
      facebook:  "",
      other:     "",
    },
  },
  project: {
    title: "Tinned Lobster",
    titleAccent: "Launch",
    kickerMode: "derived",   // "derived" = Studio × Brand  |  "custom" = free text
    kickerCustom: "",
    tagline: "Packaging, print, and campaign work for Fishwife's first lobster tin.",
    reference: "SS-2026-047",
    date: "April 2026",
    sentOn: "",
    validUntil: "",
    validUntilMode: "custom",
  },

  overview: {
    problem: {
      variants: [
        "Fishwife's tinned lobster is your most premium SKU yet, and the shelf next to it is no longer quiet. You need packaging that earns its price in the hand, and campaign work that lets the tin do most of the talking across every format it lands in.",
        "Tinned lobster is a category test for Fishwife: a higher price point, a more specific buyer, a shelf that's starting to fill. The design has to feel heirloom, not product, before anyone reads the backing copy.",
        "You're asking shoppers to pay more for a tinned protein many of them haven't bought before. The packaging and the launch collateral have to do the trust work the price tag can't do on its own.",
      ],
    },
    goalsLabel: "Goals",
    goals: [
      "Land a tin that belongs alongside the Rainbow Trout and Smoked Mackerel, not tacked on.",
      "Deliver print-ready artwork the press can run without a round of revisions.",
      "Ship a collateral system that travels from shelf to Instagram to wholesale deck, no re-draws.",
    ],
    audience: {
      label: "Who this is for",
      variants: [
        "Returning Fishwife customers plus food-media-adjacent gifters: 30–55, follows David Chang and Sohla, reads Dirt, buys thoughtfully-made pantry goods. Skeptical of loud marketing, generous when the story is real.",
        "Your pantry-splurge shopper and the friend who buys for her: 30–55, Simon Johnson-tier basket, screen-shots packaging she likes. The tin needs to photograph as well as it tastes.",
      ],
    },
    differentiator: {
      label: "How I'll approach it",
      variants: [
        [
          "Final artwork delivered on the printer's plate spec, so no rework is needed after the concept is locked.",
          "One illustration system that carries from tin to campaign to trade deck without redraws.",
          "You own the illustrations, typography, and layouts, reusable for the next SKU in the line.",
        ],
        [
          "Shelf audit before concept, so the tin earns the space next to the Rainbow Trout, not apart from it.",
          "Plate-ready files handed over with printer notes. Your production team talks to the press, not to me.",
          "Colour reviewed on paper before signoff: physical proofs in the Collingwood studio, not on screen.",
        ],
      ],
    },
  },

  scope: {
    includes: [
      { num: "", label: "hours of calls" },
      { num: "", label: "revisions" },
      { num: "", label: "weeks" },
      { num: "", label: "post-launch design support" },
    ],
    dates: {
      signBy: "",
      start: "",
      finish: "",
      clientDeadline: "",
      milestones: [],
      note: {
        variants: [
          "To kick off research on Mon 4 May, I'll need signoff by Fri 1 May. Delivery is roughly eight weeks from start. Feedback windows are baked in, but delayed turnarounds can push the finish. I'll flag early if that happens.",
          "Starting the week of 4 May needs your signature by Friday 1 May. Eight weeks of production from there, assuming feedback lands inside the three-day windows in the schedule.",
          "Signoff by 1 May locks in a 4 May start and a 29 June finish. If signoff slips, the dates slip with it. Happy to re-shape together.",
        ],
      },
    },
    milestones: [
      {
        eyebrow: "",
        name: "Research & concept",
        timing: "Week 1–2",
        intro: "We start by understanding the market landscape and your brand's place in it, then translate that into distinct creative directions for you to choose from.",
        deliverables: [
          "Shelf audit + reference library",
          "Three packaging directions to review",
          "Illustration and typography exploration",
          "Recommendation with rationale",
        ],
        outcomes: [],
        outcomesLabel: "Outcomes",
        outcomesHidden: true,
      },
      {
        eyebrow: "",
        name: "Design",
        timing: "Week 2–3",
        intro: "With direction approved, we refine every detail — illustration, typography, layout — and extend the system across all required formats.",
        deliverables: [
          "Direction locked, illustration and type refined",
          "Tin label, outer sleeve, and case packaging",
          "First campaign visuals drafted from the same system",
        ],
        outcomes: [],
        outcomesLabel: "Outcomes",
        outcomesHidden: true,
      },
      {
        eyebrow: "",
        name: "Final artwork",
        timing: "Week 3–4",
        intro: "Files are prepared to production-ready standard — dielines checked, colour verified on physical proofs, and everything handed over in print-ready format.",
        deliverables: [
          "Plate-ready files for the printer",
          "Dielines and barcode checked",
          "Proofs reviewed, colour signed off in studio",
        ],
        outcomes: [],
        outcomesLabel: "Outcomes",
        outcomesHidden: true,
      },
      {
        eyebrow: "",
        name: "Campaign collateral",
        timing: "Week 4–5",
        intro: "The brand system is rolled out across launch touchpoints — social, point-of-sale, and trade materials — all built from the same visual foundation.",
        deliverables: [
          "Hero key visual + Instagram and paid social set",
          "POS cards and shelf talkers",
          "Wholesale one-pager",
        ],
        outcomes: [],
        outcomesLabel: "Outcomes",
        outcomesHidden: true,
      },
      {
        eyebrow: "",
        name: "Delivery",
        timing: "Week 5–6",
        intro: "Everything is packaged and handed over with clear file naming, usage notes, and a brief for your printer or developer — then I'm on call for 30 days post-launch.",
        deliverables: [
          "Source files, print specs, working brand sheet",
          "30-day post-launch design support",
        ],
        outcomes: [],
        outcomesLabel: "Outcomes",
        outcomesHidden: true,
      },
    ],
    hourlyRate: 160,
    weeklyCapacity: 30,
    revisionsType: "",
    callDurationMins: 60,
    callSlots: [
      { count: "", mins: 60 },
    ],
    feedbackBufferDays: "",
    lineItems: [
      { label: "Packaging design: tin label + outer", qty: 1, rate: 0 },
      { label: "Final print artwork: plate-ready", qty: 1, rate: 0 },
      { label: "Campaign collateral: key visuals + social set", qty: 1, rate: 0 },
      { label: "Custom lobster illustration", qty: 1, rate: 0 },
      { label: "Shelf audit + art direction", qty: 1, rate: 0 },
    ],
    tiers: {
      eyebrow: "Or pick a package",
      intro: "Same scope, three shapes.\nPick the one that fits how you want to launch.",
      options: [
        {
          id: "essential",
          name: "Essential",
          tagline: "Just the tin, beautifully done.",
          price: 0,
          includes: [
            "Packaging design: tin label + outer",
            "Final print artwork: plate-ready",
            "Shelf audit + art direction",
            "1 revision round",
          ],
          summary: "1 revision included",
          featured: false,
        },
        {
          id: "standard",
          name: "Standard",
          tagline: "Everything to launch with confidence.",
          price: 0,
          includes: [
            "Everything in Essential",
            "Campaign collateral: key visuals + social set",
            "Custom lobster illustration",
            "2 revision rounds",
            "30-day post-launch support",
          ],
          summary: "2 revisions included",
          featured: true,
        },
        {
          id: "premium",
          name: "Premium",
          tagline: "All-in, launch + first campaign wave.",
          price: 0,
          includes: [
            "Everything in Standard",
            "Website landing page",
            "Video teaser · 30s for Instagram + TikTok",
            "3 revision rounds",
            "60-day post-launch support",
          ],
          summary: "3 revisions included",
          featured: false,
        },
      ],
    },
    extrasLibrary: [
      {
        id: "licensing",
        name: "Usage licensing",
        desc: "Extended digital + print rights, 12 months",
        rate: 1800,
      },
      {
        id: "rush",
        name: "Rush fee",
        desc: "Expedited turnaround inside standard timeline",
        rate: 1500,
      },
      {
        id: "press-check",
        name: "Press-check attendance",
        desc: "On-press colour approval at the printer",
        rate: 900,
      },
      {
        id: "source-files",
        name: "Source file buyout",
        desc: "Working files (.ai, .indd) handed over",
        rate: 1600,
      },
      {
        id: "extra-round",
        name: "Additional revision round",
        desc: "Third revision round beyond the two included",
        rate: 640,
      },
      {
        id: "travel",
        name: "Travel + on-site day",
        desc: "Day rate plus reasonable travel",
        rate: 1200,
      },
    ],
    addOns: [
      {
        id: "landing",
        name: "Website landing page",
        desc: "A single-page product story for fishwife.com/lobster. Reuses the tin's illustration and type system, handed over as a Webflow-ready layout.",
        price: 0,
        duration: "+1 week",
      },
      {
        id: "teaser",
        name: "Video teaser",
        desc: "30-second teaser cut for Instagram and TikTok. Directed with a partner DP in the Collingwood studio; edited in-house off the same illustration library.",
        price: 0,
        duration: "+2 weeks",
      },
      {
        id: "event",
        name: "Lobster launch event",
        desc: "One-night launch at a chef-partner restaurant. Menus, invites, table cards, and signage all in the packaging system. Built to lift straight into press coverage.",
        price: 0,
        duration: "+3 weeks",
      },
    ],
    flatPrice: { label: "Total project fee", amount: 0, note: "" },
    pricingNote: {
      variants: [
        {
          lead: "Priced for this launch.",
          body: "A different scope, a different tin, or a different print spec lands at a different number. This isn't a rate card. It's a line-by-line for the lobster.",
        },
        {
          lead: "Built for Fishwife, not boilerplate.",
          body: "Each line reflects what this SKU actually needs to land well. If something here doesn't fit, we'll talk it through and re-shape the number together.",
        },
        {
          lead: "Bespoke to this project.",
          body: "Every proposal I send is priced from the brief up. No tiers, no templates. What changes for you is what changes in the total.",
        },
      ],
    },
    currency: "A$",
    tax: { rate: 0.1, label: "GST" },
    customCosts: [],     // [{ label, hours }] — private to creative, never on proposal
    targetHours: 0,      // enter hours → see implied fee at current rate
  },

  about: {
    bio: {
      variants: [
        "I run a one-person packaging studio in Collingwood. Brand and packaging for food and drink companies who care about the shelf as much as the product. Eight years in, mostly independent labels, mostly repeat clients.",
        "Packaging design, solo, Collingwood. I do the shelf audit, the illustration, and the plate-ready file. Mostly food and drink, mostly independent, mostly repeat.",
        "I'm a packaging designer who started in book design. Eight years making labels for independent food brands who want the tin to do some of the heavy lifting.",
      ],
    },
    caseStudies: [
      // `thumbSrc` is optional. When empty the tinted gradient via `thumbClass`
      // shows through as an abstract plate; when a URL is supplied the thumb
      // becomes a real image (logo or project shot). Each thumb can also be
      // hidden per-case via the eye toggle when the creative doesn't have
      // anything strong to show.
      {
        client: "Brooke's Granola",
        project: "SS24 range relaunch",
        outcome: "New packaging lifted shelf pick-up by 22% at David Jones Food Hall within six weeks. The system now runs across the whole line.",
        thumbClass: "case__thumb--a",
        thumbSrc: "",
        thumbMode: "gradient",
        url: "",
      },
      {
        client: "Perennia",
        project: "Canned tomato line",
        outcome: "Design that took Perennia from curious newcomer to a staple on David Chang's pantry list. The Strategist ran the tin in their pantry roundup the month of launch.",
        thumbClass: "case__thumb--b",
        thumbSrc: "",
        thumbMode: "gradient",
        url: "",
      },
      {
        client: "Maple & Brine",
        project: "Brand system + four SKUs",
        outcome: "One illustration system, four SKUs, zero re-draws. Still the pack they hand every new collaborator when the line extends.",
        thumbClass: "case__thumb--c",
        thumbSrc: "",
        thumbMode: "gradient",
        url: "",
      },
      {
        client: "Salt Road Provisions",
        project: "Premium pantry rebrand",
        outcome: "Full identity and packaging overhaul for a DTC pantry brand entering Coles. Led to a 3-SKU listing confirmed within four months of launch.",
        thumbClass: "case__thumb--d",
        thumbSrc: "",
        thumbMode: "gradient",
        url: "",
      },
      {
        client: "Nightjar Coffee",
        project: "Seasonal bag series",
        outcome: "A rotating sleeve system for four seasonal single-origins. Printed across two roasters and one café fitout. Zero plate changes between runs.",
        thumbClass: "case__thumb--e",
        thumbSrc: "",
        thumbMode: "gradient",
        url: "",
      },
    ],
  },

  terms: {
    ownershipFull: true,
    extraRevisionRate: 160,
    doesntInclude: [
      "Stock imagery or photography",
      "Copywriting",
      "Print or production costs",
    ],
    fullTermsExpanded: true,
    fullTermsCollapsed: false,
    fullTermsBody: "",
    extraTerms: [], // additional term cards added by the creative
    cardOrder: ["payment", "doesntInclude", "revisions", "ownership", "timeline"], // reorderable base cards
    cardLabels: {
      payment:       "Payment",
      doesntInclude: "Doesn't include",
      revisions:     "Revisions",
      ownership:     "Ownership",
      timeline:      "Timeline",
    },
    rows: [
      {
        key: "Payment",
        kind: "schedule",
        schedule: [
          { pct: "50%", note: "on signature, books research and concept" },
          { pct: "30%", note: "at final artwork signoff, kicks off campaign production" },
          { pct: "20%", note: "on final delivery, within 14 days of invoice" },
        ],
      },
      {
        key: "Revisions",
        body: "Two rounds of revisions included. Further rounds billed at A$160 per hour (ex. GST), tracked and shared weekly.",
      },
      {
        key: "Ownership",
        body: "You own the final artwork, illustrations, and layouts outright on final payment. I retain the right to show the work in my portfolio and on the studio site. Working files stay with me unless you buy them out.",
      },
      {
        key: "Timeline",
        body: "Eight-week schedule from signature. Each review has a three-day feedback window built in. If feedback runs longer than that, the finish date shifts by the same amount. Any additional changes outside the agreed scope can be added at my hourly rate of A$160 (ex. GST). I'll flag early so we can reshape together rather than find out at the end.",
      },
      {
        key: "Full terms",
        body: "",
      },
    ],
    cta: {
      title: "Ready when you are.",
      sub: "Accept below to secure your spot.",
      action: "Accept proposal",
    },
    sign: "Jake",
    signMode: "name",    // "name" | "logo"
    signLogoSrc: "",     // data-URL from uploaded image
  },

  send: {
    to: { name: "LobJeff", email: "lobjeff@fishwife.com" },
    link: "https://fishwife.boilingpot.studio/proposals/lobster-9k2b",
    email: {
      variants: [
        {
          subject: "Proposal · Tinned Lobster launch",
          body: `Hi LobJeff,

Here's the proposal for the Tinned Lobster launch: packaging, print, and the campaign collateral, with a few optional add-ons at the end.

Read it start to finish in about ten minutes, or skim the Scope section if you're short on time. Offer stands until 15 May.

Any questions, I'm here.

Jake
Boiling Pot`,
        },
        {
          subject: "Fishwife × Boiling Pot: lobster launch proposal",
          body: `LobJeff,

Proposal for the tinned lobster, linked below. Eight weeks, five deliverables, priced line-by-line.

Let me know if anything lands wrong and we'll reshape it together.

Jake`,
        },
        {
          subject: "Lobster launch: proposal from Boiling Pot",
          body: `Hi LobJeff,

Drafted the proposal for the Tinned Lobster launch. The Scope section is the one to read first: it lays out the eight-week build and what you'd get at each step.

Offer holds until 15 May. Happy to jump on a call if that's easier.

Jake`,
        },
      ],
    },
  },
};

// ── Studio case study library (from the creative's profile) ───
// In production this would come from the user's account. Here it's a
// representative set used for the prototype picker.
const STUDIO_CASE_LIBRARY = [
  {
    id: "lib-1",
    client: "Brooke's Granola",
    project: "SS24 range relaunch",
    outcome: "Redesigned packaging lifted shelf presence and increased range velocity by 34% in the first quarter.",
    thumbMode: "gradient",
    thumbSrc: "",
    url: "https://brookesgranola.com.au",
  },
  {
    id: "lib-2",
    client: "Remi Studio",
    project: "Brand identity system",
    outcome: "Full identity for a Melbourne-based interior design practice — wordmark, colour system, and stationery suite.",
    thumbMode: "gradient",
    thumbSrc: "",
    url: "",
  },
  {
    id: "lib-3",
    client: "Fieldday",
    project: "Annual report 2023",
    outcome: "120-page report designed and print-managed end-to-end, delivered two weeks ahead of AGM.",
    thumbMode: "gradient",
    thumbSrc: "",
    url: "https://fieldday.com.au",
  },
  {
    id: "lib-4",
    client: "Mote",
    project: "Packaging & brand system",
    outcome: "Shelf-ready packaging for a new sparkling water brand targeting independent grocery.",
    thumbMode: "gradient",
    thumbSrc: "",
    url: "",
  },
  {
    id: "lib-5",
    client: "Aesop",
    project: "Campaign collateral",
    outcome: "In-store and digital campaign assets for Q4 gifting season across APAC.",
    thumbMode: "gradient",
    thumbSrc: "",
    url: "",
  },
];

// ── State ─────────────────────────────────────────────────────
const state = {
  mode: "fields", // "fields" | "edit" | "preview"
  variantIdx: {}, // path -> current variant index
  activeSection: "cover",
  selectedAddOns: new Set(), // add-on ids the client has toggled on
  hiddenLineItems: new Set(), // line-item indices hidden from the client view
  hiddenCaseThumbs: new Set([3, 4]), // case-study indices whose thumb is hidden from the client (per-case opt-out)
  hiddenBlocks: new Set(["flatPrice", "lineItems", "tiers", "addOns", "postLaunchSupport"]), // named blocks the creative has hidden ("addOns", "tiers"…)
  expandedPricingSections: new Set(), // which active pricing sections have their editor expanded
  extras: [], // creative-pro-added extras, priced-in to core scope
  extraUid: 0, // incrementing id for extra rows
  discounts: [], // discounts applied to the subtotal (flat or %)
  discountUid: 0, // incrementing id for discount rows
  selectedTier: null, // id of the pricing tier the client picks, if any
  caseLibraryOpen: false, // whether the library picker is expanded
  contextOpen: false,  // whether the rail context panel is expanded
  designOpen: false,   // whether the rail design panel is expanded
  pricingOpen: false,  // whether the rail pricing panel is expanded
  settingsOpen: false, // whether the rail settings panel is expanded
  sectionVisibility: { // "detailed" | "simplified" | "hidden" per canvas section
    cover: "detailed",
    overview: "detailed",
    scope: "detailed",
    pricing: "detailed",
    about: "detailed",
    terms: "detailed",
  },
};

function applyVizStates() {
  Object.entries(state.sectionVisibility).forEach(([id, viz]) => {
    const el = document.getElementById(`section-${id}`);
    if (el) el.dataset.viz = viz;
  });
}

// Small eye icons used by the per-line hide toggle.
const EYE_OPEN_SVG = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/></svg>`;
const EYE_OFF_SVG = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 3l18 18M10.58 10.58a2 2 0 0 0 2.83 2.83M9.88 5.09A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.1 4.03M6.61 6.61A17.6 17.6 0 0 0 2 12s3.5 7 10 7c1.74 0 3.3-.37 4.67-.96" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// ── Utilities ────────────────────────────────────────────────
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function formatMoney(n, currency = "$") {
  let locale = "en-US";
  if (currency === "£") locale = "en-GB";
  else if (currency === "A$" || currency === "AU$" || currency === "AUD") locale = "en-AU";
  return currency + Math.round(n).toLocaleString(locale);
}

function getVariant(path, variants) {
  if (state.variantIdx[path] == null) state.variantIdx[path] = 0;
  return variants[state.variantIdx[path] % variants.length];
}

function cycleVariant(path, variants) {
  state.variantIdx[path] = ((state.variantIdx[path] || 0) + 1) % variants.length;
  return variants[state.variantIdx[path]];
}

// ── AI affordance cluster ────────────────────────────────────
// Renders the hover toolbar on any AI-generated block.
// Small, mono, no gradients. "AI is hidden" stays aesthetic here.
function affordances() {
  return `
    <div class="ai-affordances" data-affordances>
      <button class="ai-btn" data-action="edit" title="Edit inline" aria-label="Edit">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="ai-btn" data-action="insert-image" title="Insert image" aria-label="Insert image">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4.5" width="18" height="15" rx="2" stroke="currentColor" stroke-width="1.6"/>
          <circle cx="8.5" cy="10" r="1.5" fill="currentColor"/>
          <path d="M4 18l5-5 4 4 3-3 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="ai-btn" data-action="regenerate" title="Regenerate" aria-label="Regenerate">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="ai-btn" data-action="reject" title="Clear" aria-label="Clear">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>
    </div>`;
}

// Wraps HTML as an AI-editable block tied to `path` in PROPOSAL.
function aiBlock(path, innerHtml, kind = "text") {
  return `
    <div class="ai-block" data-ai-path="${path}" data-ai-kind="${kind}">
      ${affordances()}
      <div class="ai-block__content">${innerHtml}</div>
    </div>`;
}

// ── Renderers ────────────────────────────────────────────────
function renderCover() {
  const p = PROPOSAL;
  return `
    <section class="section cover" id="section-cover" data-section="cover">
      <div class="cover__top">
        <div class="cover__mark" title="${p.brand.studio}">${p.brand.mark}</div>
        <div class="cover__meta">
          <span class="cover__meta-kind">Proposal</span>
          <span class="cover__meta-sent">Draft</span>
        </div>
      </div>

      <div class="cover__body">
        <div>
          <div class="cover__kicker">${
            p.project.kickerMode === "custom" && p.brand.wordmarkSrc
              ? `<img class="cover__kicker-wordmark" src="${esc(p.brand.wordmarkSrc)}" alt="${esc(p.brand.studio)}" />`
              : p.project.kickerMode === "custom" && p.project.kickerCustom
                ? esc(p.project.kickerCustom)
                : `${esc(p.brand.studio)} &nbsp;×&nbsp; ${esc(p.client.name)}`
          }</div>
          <h1 class="cover__title">${p.project.title} <em>${p.project.titleAccent}</em></h1>
          ${aiBlock("project.tagline", `<p class="cover__tagline">${p.project.tagline}</p>`)}
        </div>
        <div class="cover__aside">
          <div class="cover__plate" aria-hidden="true"></div>
        </div>
      </div>

      <div class="cover__foot">
        ${(()=>{
          // Render a value, or a blue "fill this in" cue when empty
          const mv = (val, hint) => val
            ? esc(val)
            : `<span class="cover__missing" aria-label="${hint}">${hint}</span>`;
          const fromSub = [p.brand.role, p.brand.city].filter(Boolean).join(", ");
          return `
        <div class="cover__foot-item">
          <span class="cover__foot-label">Prepared for</span>
          <span class="cover__foot-value">${mv(p.client.contact, "Client name")}<br/><span class="cover__foot-sub cover__foot-sub--brand">${mv(p.client.name, "Brand name")}</span></span>
        </div>
        <div class="cover__foot-item">
          <span class="cover__foot-label">From</span>
          <span class="cover__foot-value">${mv(p.brand.principal, "Your name")}<br/><span class="cover__foot-sub">${fromSub || `<span class="cover__missing">Role, City</span>`}</span></span>
        </div>
        <div class="cover__foot-item">
          <span class="cover__foot-label">Valid until</span>
          <span class="cover__foot-value">${mv(p.project.validUntil, "Add a date")}</span>
        </div>
        <div class="cover__foot-item">
          <span class="cover__foot-label">Reference</span>
          <span class="cover__foot-value">${mv(p.project.reference, "e.g. SS-2026-001")}</span>
        </div>`;
        })()}
      </div>
    </section>`;
}

function renderOverview() {
  const o = PROPOSAL.overview;
  const problem = getVariant("overview.problem", o.problem.variants);
  const audience = getVariant("overview.audience", o.audience.variants);
  const diff = getVariant("overview.differentiator", o.differentiator.variants);

  return `
    <section class="section" id="section-overview" data-section="overview">
      <div class="section__eyebrow">01 · Project overview</div>
      <h2 class="section__heading">Here's what I'm hearing.</h2>

      ${aiBlock(
        "overview.problem",
        `<p class="section__intro">${problem}</p>`
      )}

      <div class="two-col">
        <div class="block">
          <span class="block__label">${o.goalsLabel || "Goals"}</span>
          <ul class="stack">
            ${o.goals.map((g) => `<li>${g}</li>`).join("")}
          </ul>
        </div>
        <div class="block">
          <span class="block__label">${o.audience.label || "Who this is for"}</span>
          ${aiBlock(
            "overview.audience",
            `<p class="block__body">${audience}</p>`
          )}
        </div>
      </div>

      ${aiBlock(
        "overview.differentiator",
        `<div class="outcomes">
          <div class="outcomes__label">${o.differentiator.label}</div>
          <ol class="outcomes__list">
            ${diff.map((item) => `<li>${item}</li>`).join("")}
          </ol>
        </div>`,
        "list"
      )}
    </section>`;
}

// Scope is the WHAT and WHEN half of the old section: includes, proposed
// dates, the timeline helper nudge, and the milestone timeline. Pricing
// (line items, extras, totals, add-ons, tiers) lives in its own section
// below so the narrative reads: here's what you'll get → here's when →
// here's what it costs.
function renderScope() {
  const s = PROPOSAL.scope;
  const dateNote = getVariant("scope.dates.note", s.dates.note.variants);

  return `
    <section class="section" id="section-scope" data-section="scope">
      <div class="section__eyebrow">02 · Scope</div>
      <h2 class="section__heading">What you'll get, and when.</h2>
      <p class="section__intro">Eight weeks, one designer in the room from shelf audit to plate-ready file. The shape of the work, and when each piece lands.</p>

      <div class="includes" aria-label="What's included">
        <span class="includes__label">What's included, across every line</span>
        <ul class="includes__list">
          ${s.includes
            .filter(i => !(/post.launch/i.test(i.label) && state.hiddenBlocks.has("postLaunchSupport")))
            .map(
              (i) => `
            <li class="includes__item">
              <span class="includes__num">${i.num}</span>
              <span class="includes__text">${i.label}</span>
            </li>`
            )
            .join("")}
        </ul>
      </div>

      ${state.mode === "fields" ? `<button type="button" class="nudge" data-nudge="timeline">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Need a hand figuring out timelines?</span>
        <span class="nudge__sub">We'll use your weekly capacity and each stage's hours.</span>
      </button>` : ""}

      <div class="timeline">
        ${s.milestones
          .map(
            (m, i) => `
          <div class="milestone">
            <div class="milestone__head">
              <span class="milestone__eyebrow">${m.eyebrow || `Stage ${i + 1}`}</span>
              <h3 class="milestone__name">${m.name}</h3>
              <span class="milestone__timing">${m.timing}</span>
            </div>
            ${m.intro ? `<p class="milestone__intro">${esc(m.intro)}</p>` : ""}
            <ul class="milestone__list">
              ${m.deliverables.map((d) => `<li>${d}</li>`).join("")}
            </ul>
            ${!m.outcomesHidden && m.outcomes && m.outcomes.filter(Boolean).length ? `
            <div class="milestone__outcomes">
              <div class="milestone__outcomes-label">${esc(m.outcomesLabel || "Outcomes")}</div>
              <ul class="milestone__outcomes-list">
                ${m.outcomes.filter(Boolean).map(o => `<li>${esc(o)}</li>`).join("")}
              </ul>
            </div>` : ""}
          </div>`
          )
          .join("")}
      </div>

      <div class="dates">
        <span class="dates__label">Proposed dates</span>
        <div class="dates__grid">
          ${(()=>{
            const dv = (val, hint) => val
              ? esc(val)
              : `<span class="dates__missing">${hint}</span>`;
            return `
          ${!state.hiddenBlocks.has("dateSignBy") ? `<div class="dates__col">
            <span class="dates__col-label">Sign by</span>
            <span class="dates__col-value">${dv(s.dates.signBy, "Add a date")}</span>
            <span class="dates__col-sub">to start on schedule</span>
          </div>
          <span class="dates__arrow" aria-hidden="true">→</span>` : ""}
          ${!state.hiddenBlocks.has("dateStart") ? `<div class="dates__col">
            <span class="dates__col-label">Start</span>
            <span class="dates__col-value">${dv(s.dates.start, "Add a date")}</span>
            <span class="dates__col-sub">research kicks off</span>
          </div>
          <span class="dates__arrow" aria-hidden="true">→</span>` : ""}
          ${!state.hiddenBlocks.has("dateFinish") ? `<div class="dates__col">
            <span class="dates__col-label">Estimated finish</span>
            <span class="dates__col-value">${dv(s.dates.finish, "Calculated from start")}</span>
            <span class="dates__col-sub">${s.dates.finishCaption || "eight weeks from start"}</span>
          </div>` : ""}`;
          })()}
        </div>
        ${aiBlock(
          "scope.dates.note",
          `<p class="dates__note">${dateNote}</p>`
        )}
      </div>
    </section>`;
}

// Pricing is the HOW MUCH half: core scope line-items, creative-added extras,
// running totals, optional add-ons, and the tiered-package alternative. All
// three "pricing presentation" blocks (line items, add-ons, tiers) are
// individually hideable via the eye toggle in each block's header, so the
// creative can lead with whichever framing suits the client.
function renderFlatPriceBlock(s) {
  if (state.hiddenBlocks.has("flatPrice")) return "";
  const fp = s.flatPrice || {};
  const hidden = false;
  return `
    <div class="flat-price block" data-block="flatPrice">
      <div class="flat-price__head">
        <div class="block__head-left">
          <button type="button" class="block__toggle" data-block-toggle="flatPrice"
                  title="Hide from client" aria-label="Hide flat price" aria-pressed="false">
            ${EYE_OPEN_SVG}
          </button>
          <span class="block__pill">Hidden from client</span>
        </div>
      </div>
      <div class="flat-price__body">
        <span class="flat-price__label">${esc(fp.label || "Total project fee")}</span>
        <span class="flat-price__amount">${s.currency}${formatMoney(Number(fp.amount) || 0)}</span>
        ${fp.note ? `<span class="flat-price__note">${esc(fp.note)}</span>` : ""}
      </div>
    </div>`;
}

function renderPricing() {
  const s = PROPOSAL.scope;
  const lineItemsTotal = s.lineItems.reduce((sum, li) => sum + li.qty * li.rate, 0);
  const extrasTotal = state.extras.reduce((sum, e) => sum + e.rate, 0);
  const coreTotal = lineItemsTotal + extrasTotal;

  return `
    <section class="section" id="section-pricing" data-section="pricing">
      <div class="section__eyebrow">03 · Pricing</div>
      <h2 class="section__heading">What it costs.</h2>
      <p class="section__intro">Line by line, priced for this launch. Nothing here is padding. If a line disappears, a deliverable disappears with it.</p>

      ${!state.hiddenBlocks.has("lineItems") ? `
      <div class="line-items block" data-block="lineItems">
        <div class="line-items__head">
          <div class="block__head-left">
            <button type="button" class="block__toggle" data-block-toggle="lineItems"
                    title="Hide from client" aria-label="Hide from client" aria-pressed="false">
              ${EYE_OPEN_SVG}
            </button>
            <span class="line-items__label">Core scope</span>
            <span class="block__pill">Hidden from client</span>
          </div>
          <span class="line-items__helper">Hide individual lines or the whole list. Your total stays the same.</span>
        </div>
        ${s.lineItems.map((li, i) => {
            const hidden = state.hiddenLineItems.has(i);
            return `
          <div class="line-item${hidden ? " line-item--hidden" : ""}" data-line-idx="${i}">
            <button type="button" class="line-item__toggle" data-line-toggle="${i}"
                    title="${hidden ? "Show to client" : "Hide from client"}"
                    aria-label="${hidden ? "Show to client" : "Hide from client"}"
                    aria-pressed="${hidden}">
              ${hidden ? EYE_OFF_SVG : EYE_OPEN_SVG}
            </button>
            <span class="line-item__pill">Hidden from client</span>
            <span class="line-item__label">${li.label}</span>
            <span class="line-item__meta">${li.qty} × ${formatMoney(li.rate, s.currency)}</span>
            <span class="line-item__total"${li.qty * li.rate === 0 ? ' data-zero' : ''}>${formatMoney(li.qty * li.rate, s.currency)}</span>
          </div>`;
          }).join("")}
      </div>

      <div class="totals" data-totals data-core-total="${lineItemsTotal}">
        <div class="totals__row">
          <span class="totals__label">Core scope</span>
          <span class="totals__value" data-core-value${lineItemsTotal === 0 ? ' data-zero' : ''}>${formatMoney(lineItemsTotal, s.currency)}</span>
        </div>
        ${renderExtrasList(s.currency)}
        ${renderExtrasAdd(s.extrasLibrary, s.currency)}
        <div class="totals__row totals__row--addons" data-addons-row hidden>
          <span class="totals__label">Add-ons <span class="totals__count" data-addons-count>(0)</span></span>
          <span class="totals__value" data-addons-value>${formatMoney(0, s.currency)}</span>
        </div>
        <div class="totals__discounts" data-discounts-rows></div>
        <div class="totals__row totals__row--subtotal">
          <span class="totals__label">Subtotal <span class="totals__count">ex. GST</span></span>
          <span class="totals__value" data-subtotal-value>${formatMoney(coreTotal, s.currency)}</span>
        </div>
        <div class="totals__row totals__row--tax">
          <span class="totals__label">${s.tax.label}</span>
          <span class="totals__value" data-tax-value>${formatMoney(coreTotal * s.tax.rate, s.currency)}</span>
        </div>
        <div class="totals__row totals__row--grand">
          <span class="totals__label">Your total <span class="totals__inc">inc. GST</span></span>
          <span class="totals__value totals__value--grand" data-grand-value${coreTotal === 0 ? ' data-zero' : ''}>${formatMoney(coreTotal * (1 + s.tax.rate), s.currency)}</span>
        </div>
      </div>

      <p class="totals__note">All prices in Australian dollars. GST 10% included in your total.</p>` : ""}

      ${state.hiddenBlocks.has("flatPrice") ? "" : renderFlatPriceBlock(s)}

      ${state.hiddenBlocks.has("addOns") ? "" : renderAddOns(s.addOns, s.currency)}

      ${state.hiddenBlocks.has("tiers") ? "" : renderTiers(s.tiers, s.currency)}
    </section>`;
}

// ── Tiers: 3-tier package alternative ────────────────────────
// An editorial "pick a package" block. Not connected to the main total
// (line items + extras + selected add-ons) since it's an alternative framing.
// The client can click a tier to show interest; the creative pro sees the
// selection reflected in edit mode.
function renderTiers(tiers, currency) {
  if (!tiers || !tiers.options || !tiers.options.length) return "";
  const hidden = state.hiddenBlocks.has("tiers");
  return `
    <div class="tiers block${hidden ? " block--hidden" : ""}" data-block="tiers">
      <div class="tiers__head">
        <div class="block__head-left">
          <button type="button" class="block__toggle" data-block-toggle="tiers"
                  title="${hidden ? "Show to client" : "Hide from client"}"
                  aria-label="${hidden ? "Show to client" : "Hide from client"}"
                  aria-pressed="${hidden}">
            ${hidden ? EYE_OFF_SVG : EYE_OPEN_SVG}
          </button>
          <span class="tiers__eyebrow">${tiers.eyebrow}</span>
          <span class="block__pill">Hidden from client</span>
        </div>
        <p class="tiers__intro">${tiers.intro}</p>
      </div>
      <div class="tiers__grid" data-tiers>
        ${tiers.options.map((t) => renderTier(t, currency)).join("")}
      </div>
    </div>`;
}

function renderTier(t, currency) {
  const selected = state.selectedTier === t.id;
  return `
    <button type="button"
            class="tier${t.featured ? " tier--featured" : ""}${selected ? " tier--selected" : ""}"
            data-tier="${t.id}"
            aria-pressed="${selected}">
      ${t.featured ? `<span class="tier__flag">Recommended</span>` : ""}
      <div class="tier__head">
        <span class="tier__name">${t.name}</span>
        <p class="tier__tagline">${t.tagline}</p>
      </div>
      <div class="tier__price">
        <span class="tier__price-value"${t.price === 0 ? ' data-zero' : ''}>${formatMoney(t.price, currency)}</span>
        <span class="tier__price-meta">ex. GST</span>
      </div>
      <ul class="tier__includes">
        ${t.includes
          .map(
            (i) => `
          <li>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>${i}</span>
          </li>`
          )
          .join("")}
      </ul>
      ${t.summary ? `<div class="tier__summary">${esc(t.summary)}</div>` : ""}
      <span class="tier__cta">
        <span class="tier__cta-idle">Pick ${t.name}</span>
        <span class="tier__cta-selected">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          ${t.name} picked
        </span>
      </span>
    </button>`;
}

// ── Extras: creative-pro-added, priced-in to core scope ──────
// Unlike add-ons (which the client toggles), extras are picked by the creative
// pro from a preset menu (licensing, rush fee, travel, etc.) and rolled into
// the Core scope total. They render as regular line items in the client view.
function renderExtrasList(currency) {
  return `
    <div class="extras" data-extras>
      <div class="extras__list" data-extras-list>
        ${state.extras.map((e) => renderExtraRow(e, currency)).join("")}
      </div>
    </div>`;
}

function renderExtrasAdd(library, currency) {
  if (state.mode !== "fields") return "";
  return `
    <div class="extras__add-wrap">
      <button type="button" class="extras__add" data-extras-add aria-haspopup="true" aria-expanded="false">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        Add an extra <span class="extras__add-hint">licensing, rush fee, travel…</span>
      </button>
      <div class="extras__menu" data-extras-menu hidden role="menu">
        <div class="extras__menu-head">
          <span class="extras__menu-title">Pick an extra</span>
          <button type="button" class="extras__menu-close" data-extras-close
                  aria-label="Close menu" title="Close">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        ${library
          .map(
            (p) => `
          <button type="button" class="extras__menu-item" role="menuitem" data-extra-id="${p.id}">
            <span class="extras__menu-main">
              <span class="extras__menu-name">${p.name}</span>
              <span class="extras__menu-desc">${p.desc}</span>
            </span>
            <span class="extras__menu-rate">${formatMoney(p.rate, currency)}</span>
          </button>`
          )
          .join("")}
        <button type="button" class="extras__menu-item extras__menu-item--custom" role="menuitem" data-extra-id="__custom">
          <span class="extras__menu-main">
            <span class="extras__menu-name">+ Custom extra</span>
            <span class="extras__menu-desc">Something not in the list</span>
          </span>
        </button>
      </div>
    </div>`;
}

function renderExtraRow(e, currency) {
  return `
    <div class="extras__row" data-extra-uid="${e.uid}">
      <span class="extras__row-label">${e.label}</span>
      <span class="extras__row-value">+ ${formatMoney(e.rate, currency)}</span>
      <button type="button" class="extras__remove" data-extra-remove="${e.uid}"
              title="Remove extra" aria-label="Remove extra">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>
    </div>`;
}

function renderAddOns(addOns, currency) {
  if (!addOns || !addOns.length) return "";
  const hidden = state.hiddenBlocks.has("addOns");
  return `
    <div class="add-ons block${hidden ? " block--hidden" : ""}" data-block="addOns">
      <div class="add-ons__head">
        <div class="block__head-left">
          <button type="button" class="block__toggle" data-block-toggle="addOns"
                  title="${hidden ? "Show to client" : "Hide from client"}"
                  aria-label="${hidden ? "Show to client" : "Hide from client"}"
                  aria-pressed="${hidden}">
            ${hidden ? EYE_OFF_SVG : EYE_OPEN_SVG}
          </button>
          <span class="add-ons__label">Optional add-ons</span>
          <span class="block__pill">Hidden from client</span>
        </div>
        <span class="add-ons__helper">Tick any that are useful. Your total updates as you go.</span>
      </div>
      <div class="add-ons__list">
        ${addOns.map((ao) => renderAddOn(ao, currency)).join("")}
      </div>
    </div>`;
}

function renderAddOn(ao, currency) {
  const selected = state.selectedAddOns.has(ao.id);
  return `
    <button type="button" class="add-on${selected ? " add-on--selected" : ""}"
            data-addon="${ao.id}" aria-pressed="${selected}">
      <span class="add-on__check" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="add-on__body">
        <span class="add-on__name">${ao.name}</span>
        <span class="add-on__desc">${ao.desc}</span>
      </span>
      <span class="add-on__meta">
        ${ao.duration ? `<span class="add-on__duration">${ao.duration}</span>` : ""}
        <span class="add-on__price"${ao.price === 0 ? ' data-zero' : ''}>+${formatMoney(ao.price, currency)}</span>
      </span>
    </button>`;
}

const LINK_ICONS = {
  web: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  instagram: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3.8" stroke="currentColor" stroke-width="1.6"/><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor"/></svg>`,
  linkedin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="7.8" cy="8.2" r="1.1" fill="currentColor"/><path d="M7 11v6M11 17v-3.2c0-1.3.9-2.3 2.2-2.3s2.3 1 2.3 2.3V17M11 11v6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
};

function renderBrandLinks(links) {
  if (!links || !links.length) return "";
  const visible = links.filter(l => !l.hidden);
  if (!visible.length) return "";
  return `
    <ul class="brand-links" aria-label="Studio links">
      ${visible
        .map(
          (l) => `
        <li>
          <a class="brand-links__item" href="${l.url}" target="_blank" rel="noopener noreferrer">
            <span class="brand-links__icon">${LINK_ICONS[l.kind] || LINK_ICONS.web}</span>
            <span class="brand-links__label">${l.label}</span>
          </a>
        </li>`
        )
        .join("")}
    </ul>`;
}

function renderAbout() {
  const a = PROPOSAL.about;
  const bio = getVariant("about.bio", a.bio.variants);

  return `
    <section class="section" id="section-about" data-section="about">
      <div class="section__eyebrow">04 · About</div>
      <h2 class="section__heading">A bit about how I work.</h2>

      <div class="bio-block">
        ${aiBlock("about.bio", `<p class="bio">${bio}</p>`)}
      </div>

      <div class="cases__intro">
        <span class="cases__label">Similar projects</span>
        <h3 class="cases__heading">Three recent projects with a similar shape.</h3>
        <p class="cases__sub">Food and drink packaging, solo-run end to end, plate-ready on delivery. The same build as the lobster tin.</p>
      </div>

      <div class="cases">
        ${a.caseStudies
          .map((c, i) => {
            const thumbHidden = state.hiddenCaseThumbs.has(i);
            const hasImage = c.thumbSrc && c.thumbSrc.trim() !== "";
            return `
          <article class="case${thumbHidden ? " case--thumb-hidden" : ""}">
            <div class="case__thumb ${c.thumbClass}${hasImage ? " case__thumb--has-image" : ""}"
                 ${hasImage ? `style="background-image:url('${c.thumbSrc}')"` : ""}
                 aria-hidden="true">
              <button type="button" class="case__thumb-toggle" data-case-thumb-toggle="${i}"
                      title="${thumbHidden ? "Show to client" : "Hide from client"}"
                      aria-label="${thumbHidden ? "Show to client" : "Hide from client"}"
                      aria-pressed="${thumbHidden}">
                ${thumbHidden ? EYE_OFF_SVG : EYE_OPEN_SVG}
              </button>
              <span class="case__thumb-pill">Hidden from client</span>
            </div>
            <div class="case__body">
              <span class="case__client">${c.client}</span>
              <h3 class="case__project">${c.project}</h3>
              ${aiBlock(
                `about.caseStudies.${i}.outcome`,
                `<p class="case__outcome">${c.outcome}</p>`
              )}
            </div>
          </article>`;
          })
          .join("")}
      </div>
    </section>`;
}

function renderTerms() {
  const t      = PROPOSAL.terms;
  const labels = t.cardLabels || {};
  const order  = t.cardOrder  || ["payment", "doesntInclude", "revisions", "ownership", "timeline"];

  // Row body look-ups (keyed by the original row.key string)
  const payRow       = t.rows.find(r => r.key === "Payment");
  const revisRow     = t.rows.find(r => r.key === "Revisions");
  const ownershipRow = t.rows.find(r => r.key === "Ownership");
  const timelineRow  = t.rows.find(r => r.key === "Timeline");
  const doesntItems  = (t.doesntInclude || []).filter(Boolean);

  // Render each base card in the user-chosen order
  const baseRowHtml = (key) => {
    switch (key) {
      case "payment": {
        if (!payRow) return "";
        return `
          <div class="terms__row">
            <div class="terms__key">${esc(labels.payment || "Payment")}</div>
            <div class="terms__value">
              <ul class="payment-schedule">
                ${(payRow.schedule || []).map(s => `
                  <li>
                    <span class="payment-schedule__pct">${s.pct}</span>
                    <span>${s.note}</span>
                  </li>`).join("")}
              </ul>
            </div>
          </div>`;
      }
      case "doesntInclude": {
        if (!doesntItems.length) return "";
        return `
          <div class="terms__row">
            <div class="terms__key">${esc(labels.doesntInclude || "Doesn\u2019t include")}</div>
            <div class="terms__value">
              <ul class="doesnt-include">
                ${doesntItems.map(item => `<li>${esc(item)}</li>`).join("")}
              </ul>
            </div>
          </div>`;
      }
      case "revisions": {
        if (!revisRow) return "";
        return `
          <div class="terms__row">
            <div class="terms__key">${esc(labels.revisions || "Revisions")}</div>
            <div class="terms__value">${revisRow.body}</div>
          </div>`;
      }
      case "ownership": {
        if (state.hiddenBlocks.has("terms.ownership") || !ownershipRow) return "";
        return `
          <div class="terms__row">
            <div class="terms__key">${esc(labels.ownership || "Ownership")}</div>
            <div class="terms__value">${ownershipRow.body}</div>
          </div>`;
      }
      case "timeline": {
        if (!timelineRow) return "";
        return `
          <div class="terms__row">
            <div class="terms__key">${esc(labels.timeline || "Timeline")}</div>
            <div class="terms__value">${timelineRow.body}</div>
          </div>`;
      }
      default: return "";
    }
  };

  // Full T&Cs — always visible in design/edit mode; hidden in preview when empty
  const fullBody       = t.fullTermsBody || "";
  const startCollapsed = !!t.fullTermsCollapsed;
  const showFull       = fullBody.trim() || state.mode !== "preview";
  const fullTermsHtml  = showFull ? `
    <div class="terms__row terms__row--full" id="terms-full-row">
      <div class="terms__key">Full terms</div>
      <div class="terms__value terms__full-body${startCollapsed ? " terms__full-body--collapsed" : ""}" data-fullterms-canvas-body>
        ${fullBody.trim()
          ? `<div class="terms__full-text">${fullBody.replace(/\n/g, "<br>")}</div>`
          : `<p class="terms__row--empty-hint">Paste your T&amp;Cs in the form — they\u2019ll appear here.</p>`
        }
      </div>
    </div>` : "";

  return `
    <section class="section" id="section-terms" data-section="terms">
      <div class="section__eyebrow">05 · Terms</div>
      <h2 class="section__heading">The straightforward part.</h2>
      <p class="section__intro">Nothing unusual here. If anything below is a blocker, tell me early and we'll find a shape that works.</p>

      <div class="terms__grid">
        ${order.map(baseRowHtml).join("")}
        ${(t.extraTerms || []).map(ex => `
          <div class="terms__row">
            <div class="terms__key">${esc(ex.key)}</div>
            <div class="terms__value">${esc(ex.body)}</div>
          </div>`).join("")}
        ${fullTermsHtml}
      </div>

      <div class="terms__cta" id="section-accept">
        <div class="terms__cta-copy">
          <div class="terms__cta-title">${t.cta.title}</div>
          <div class="terms__cta-sub">${t.cta.sub}</div>
        </div>
        <button class="terms__cta-action" type="button">
          ${t.cta.action}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="terms__signoff">
        ${t.signMode === "logo" && t.signLogoSrc
          ? `<img class="terms__sign-logo" src="${esc(t.signLogoSrc)}" alt="${esc(t.sign || "Studio logo")}" />`
          : `<p class="terms__sign">${esc(t.sign)}</p>`
        }
        ${renderBrandLinks(PROPOSAL.brand.links)}
      </div>
    </section>`;
}

function renderRailSettings() {
  const { brand } = PROPOSAL;
  const open = state.settingsOpen;
  const initials = (brand.principal || "")
    .split(" ").map(w => w[0] || "").join("").slice(0, 2).toUpperCase() || "JS";

  return `<div class="rail__settings${open ? " rail__settings--open" : ""}">
    <button type="button" class="rail__settings-btn" data-rail-settings-toggle aria-expanded="${open}">
      <span class="rail__settings-avatar">${esc(initials)}</span>
      <span class="rail__settings-info">
        <span class="rail__settings-name">${esc(brand.principal || "Your name")}</span>
        <span class="rail__settings-studio">${esc(brand.studio || "Studio")}</span>
      </span>
      <svg class="rail__settings-caret" width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    ${open ? `
    <div class="rsettings__body">
      <div class="rsettings__section">
        <div class="rsettings__label">Profile</div>
        <div class="rsettings__field">
          <label class="rsettings__field-label">Name</label>
          <input class="finput rsettings__input" type="text" value="${esc(brand.principal)}" data-fld="brand.principal" placeholder="Your name" />
        </div>
        <div class="rsettings__field">
          <label class="rsettings__field-label">Studio</label>
          <input class="finput rsettings__input" type="text" value="${esc(brand.studio)}" data-fld="brand.studio" placeholder="Studio name" />
        </div>
        <div class="rsettings__field">
          <label class="rsettings__field-label">Role</label>
          <input class="finput rsettings__input" type="text" value="${esc(brand.role)}" data-fld="brand.role" placeholder="e.g. Brand designer" />
        </div>
        <div class="rsettings__field">
          <label class="rsettings__field-label">City</label>
          <input class="finput rsettings__input" type="text" value="${esc(brand.city)}" data-fld="brand.city" placeholder="e.g. Melbourne" />
        </div>
      </div>
      <div class="rsettings__section">
        <div class="rsettings__label">Links</div>
        ${brand.links.map((l, i) => `
        <div class="rsettings__link-row">
          <span class="rsettings__link-icon">${LINK_ICONS[l.kind] || LINK_ICONS.web}</span>
          <input class="finput rsettings__input" type="text" value="${esc(l.label)}" data-signoff-link-label="${i}" placeholder="Label" />
          <input class="finput rsettings__input rsettings__input--url" type="url" value="${esc(l.url)}" data-signoff-link-url="${i}" placeholder="URL" />
          <button type="button" class="rsettings__link-toggle${l.hidden ? "" : " rsettings__link-toggle--on"}" data-signoff-link-toggle="${i}" title="${l.hidden ? "Show" : "Hide"}">
            ${l.hidden
              ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`
              : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.6"/></svg>`
            }
          </button>
        </div>`).join("")}
      </div>
      <div class="rsettings__section">
        <div class="rsettings__label">Hourly rate</div>
        <div class="rsettings__field rsettings__field--inline">
          <span class="finline__currency">${esc(PROPOSAL.scope.currency)}</span>
          <input class="finput rsettings__input" type="number" value="${PROPOSAL.scope.hourlyRate || 160}" data-fld="scope.hourlyRate" min="0" step="10" style="width:80px" />
          <span class="rsettings__field-label">/ hr ex. tax</span>
        </div>
      </div>
    </div>` : ""}
  </div>`;
}

function renderRailPricing() {
  const open = state.pricingOpen;
  const mainFormats = [
    { id: "flatPrice", label: "Flat price", icon: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
    { id: "lineItems", label: "Itemised",   icon: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
    { id: "tiers",     label: "Packages",  icon: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="6" height="13" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="9" y="4" width="6" height="16" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="16" y="2" width="6" height="18" rx="1" stroke="currentColor" stroke-width="1.8"/></svg>` },
  ];
  const addOnsOn = !state.hiddenBlocks.has("addOns");
  const optBtn = (f) => {
    const on = !state.hiddenBlocks.has(f.id);
    return `<button type="button" class="rpri__opt${on ? " rpri__opt--on" : ""}" data-rail-pricing-toggle-format="${f.id}" aria-pressed="${on}">
      <span class="rpri__opt-icon">${f.icon}</span>
      <span class="rpri__opt-label">${f.label}</span>
      <span class="rpri__opt-check">
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
      </span>
    </button>`;
  };
  return `
    <div class="rail__pricing${open ? " rail__pricing--open" : ""}">
      <button type="button" class="rail__pricing-btn" data-rail-pricing-toggle aria-expanded="${open}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Pricing
        <svg class="rpri__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      ${open ? `
      <div class="rpri__body">
        <div class="rpri__group-label">Format</div>
        ${mainFormats.map(optBtn).join("")}
        <div class="rpri__divider"></div>
        <button type="button" class="rpri__opt rpri__opt--addon${addOnsOn ? " rpri__opt--on" : ""}" data-rail-pricing-toggle-format="addOns" aria-pressed="${addOnsOn}">
          <span class="rpri__opt-icon">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </span>
          <span class="rpri__opt-label">Add-ons</span>
          <span class="rpri__opt-check">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
          </span>
        </button>
      </div>` : ""}
    </div>`;
}

function renderRailDesign() {
  const { colors, fonts } = PROPOSAL.brand;
  const open = state.designOpen;
  const swatch = (key, label, val) => `
    <div class="rdes__swatch-wrap">
      <label class="rdes__swatch" style="background:${esc(val)}" title="${label}">
        <input type="color" class="rdes__color-input" value="${esc(val)}"
          data-design-color="${key}" aria-label="${label}" />
      </label>
      <span class="rdes__swatch-label">${label}</span>
    </div>`;
  return `
    <div class="rail__design${open ? " rail__design--open" : ""}">
      <button type="button" class="rail__design-btn" data-rail-design-toggle aria-expanded="${open}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.54-1.37-.33-.35-.52-.82-.52-1.33 0-1.1.9-2 2-2h2.35C19.66 15.3 22 13.76 22 12c0-5.52-4.48-10-10-10z" stroke="currentColor" stroke-width="1.6" fill="none"/>
        </svg>
        Design
        <svg class="rdes__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      ${open ? `
      <div class="rdes__body">
        <div class="rdes__section">
          <div class="rdes__label">Fonts</div>
          <div class="rdes__fonts">
            <div class="rdes__font">
              <span class="rdes__font-sample" style="font-family:'${esc(fonts.serif)}',serif">Aa</span>
              <span class="rdes__font-name" style="font-family:'${esc(fonts.serif)}',serif">Serif</span>
              <div class="rdes__heading-toggle" title="Use for headings">
                <button type="button" class="rdes__heading-chip${PROPOSAL.brand.headingStyle === "serif" ? " rdes__heading-chip--on" : ""}"
                  data-heading-style="serif">Headings</button>
              </div>
            </div>
            <div class="rdes__font">
              <span class="rdes__font-sample" style="font-family:'${esc(fonts.sans)}',sans-serif">Aa</span>
              <span class="rdes__font-name" style="font-family:'${esc(fonts.sans)}',sans-serif">Sans serif</span>
              <div class="rdes__heading-toggle" title="Use for headings">
                <button type="button" class="rdes__heading-chip${PROPOSAL.brand.headingStyle === "sans" ? " rdes__heading-chip--on" : ""}"
                  data-heading-style="sans">Headings</button>
              </div>
            </div>
          </div>
        </div>
      </div>` : ""}
    </div>`;
}

function renderFontPairing() {
  const { fonts, headingStyle } = PROPOSAL.brand;
  const serifFace = `'${esc(fonts.serif)}', serif`;
  const sansFace  = `'${esc(fonts.sans)}', sans-serif`;

  const card = (key, headFont, bodyFont, label) => `
    <button type="button"
      class="rfont__card${headingStyle === key ? " rfont__card--on" : ""}"
      data-heading-style="${key}"
      title="Use ${label} pairing">
      <span class="rfont__preview">
        <span class="rfont__head" style="font-family:${headFont}">Ag</span>
        <span class="rfont__body" style="font-family:${bodyFont}">Ag</span>
      </span>
      <span class="rfont__label">${label}</span>
    </button>`;

  return `<div class="rfont">
    ${card("serif", serifFace, sansFace, "Serif + Sans")}
    ${card("sans",  sansFace,  sansFace,  "Sans + Sans")}
  </div>`;
}

function renderRailContext() {
  const { client, brand, scope } = PROPOSAL;
  const isNew = client.businessType === "new";
  const isTeam = brand.voice === "team";
  const open = state.contextOpen;
  const totalWeeks = scope.totalDuration || "";
  const chip = (label, on) =>
    `<span class="rctx__chip${on ? " rctx__chip--on" : ""}">${label}</span>`;
  return `
    <div class="rail__context${open ? " rail__context--open" : ""}">
      <button type="button" class="rail__context-btn" data-rail-context-toggle aria-expanded="${open}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/>
          <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        Context
        <svg class="rctx__caret" width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      ${open ? `
      <div class="rctx__body">
        <div class="rctx__group">
          <div class="rctx__label">Client</div>
          ${client.product ? `<div class="rctx__row">· ${esc(client.product)}</div>` : ""}
          <div class="rctx__row rctx__row--chips">
            · ${chip("New business", isNew)}${chip("Existing", !isNew)}
          </div>
          ${client.industry ? `<div class="rctx__row">· ${esc(client.industry)}</div>` : ""}
          <div class="rctx__row rctx__row--chips">
            · ${chip("First time", client.priorClient === "first")}${chip("Returning", client.priorClient === "returning")}
          </div>
        </div>
        <div class="rctx__group">
          <div class="rctx__label">From</div>
          <div class="rctx__row rctx__row--chips">
            · ${chip("Solo", !isTeam)}${chip("Team (we)", isTeam)}
          </div>
        </div>
        ${totalWeeks ? `
        <div class="rctx__group">
          <div class="rctx__label">Duration</div>
          <div class="rctx__row">· ${esc(String(totalWeeks))} weeks total</div>
        </div>` : ""}
      </div>` : ""}
    </div>`;
}

const VIZ_MODES = [
  { key: "detailed", title: "Show", icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/></svg>` },
  { key: "hidden",   title: "Hide", icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>` },
];

function renderRail() {
  const items = [
    { id: "cover", label: "Cover" },
    { id: "overview", label: "Overview" },
    { id: "scope", label: "Scope" },
    { id: "pricing", label: "Pricing" },
    { id: "about", label: "About" },
    { id: "terms", label: "Terms" },
    { id: "accept", label: "Accept", kind: "cta" },
  ];

  const renderVizControls = (id) => {
    const raw = state.sectionVisibility[id] || "detailed";
    const viz = raw === "simplified" ? "detailed" : raw;
    return `<div class="rail__viz">
      ${VIZ_MODES.map(m => `<button type="button"
        class="rail__viz-btn${viz === m.key ? " rail__viz-btn--on" : ""}"
        data-sec-viz="${id}:${m.key}"
        title="${m.title}"
        aria-pressed="${viz === m.key}">${m.icon}</button>`).join("")}
    </div>`;
  };

  return `
    <div class="rail__label">Proposal</div>
    ${items.map(i => {
      const isActive = state.activeSection === i.id;
      if (i.kind === "cta") {
        return `<button class="rail__item rail__item--cta${isActive ? " rail__item--active" : ""}" data-target="section-${i.id}">
          <span class="rail__dot"></span>
          ${i.label}
          <svg class="rail__item-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>`;
      }
      const viz = state.sectionVisibility[i.id] || "detailed";
      return `<div class="rail__item-row${isActive ? " rail__item-row--active" : ""}">
        <button class="rail__item${isActive ? " rail__item--active" : ""}${viz === "hidden" ? " rail__item--viz-hidden" : ""}" data-target="section-${i.id}">
          <span class="rail__dot"></span>
          ${i.label}
        </button>
        ${renderVizControls(i.id)}
      </div>`;
    }).join("")}
    <div class="rail__foot">
      ${renderFontPairing()}
      ${state.mode === "fields" ? `
      ${renderRailContext()}
      <button type="button" class="rail__estimate-btn" id="railEstimateTrigger">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M18 2l4 4-9 9H9v-4l9-9z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Scope calculator
      </button>
      ${renderRailPricing()}` : ""}
      <span class="rail__status" aria-live="polite">
        <span class="rail__status-dot" aria-hidden="true"></span>
        <span data-save-status>Draft · saved just now</span>
      </span>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
//  FORM VIEW · simple field-editing mode
//  Shows all proposal data as clearly-labelled form inputs.
//  Syncs bidirectionally with PROPOSAL; canvas re-renders on idle.
// ═══════════════════════════════════════════════════════════════

// ── Escape helper ─────────────────────────────────────────────
function esc(str) {
  return String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ── Form primitives ───────────────────────────────────────────

function fsec(id, eyebrow, heading, body, headExtra = "") {
  return `<section class="fs" id="form-section-${id}" data-form-section="${id}">
    <div class="fs__head">
      <div class="fs__ey">${eyebrow}</div>
      <h2 class="fs__heading">${heading}</h2>
      ${headExtra}
    </div>
    <div class="fs__body">${body}</div>
  </section>`;
}

function fcard(title, body, opts = {}) {
  let titleHtml = "";
  if (title) {
    titleHtml = opts.titleInput
      // Editable input variant — consistent with extra-term cards
      ? `<div class="fcard__title-row">
           <input class="finput finput--heading fcard__title-editable" type="text"
             value="${title}" ${opts.titleInput} />
         </div>`
      : `<div class="fcard__title">${title}</div>`;
  }
  return `<div class="fcard${opts.blue ? " fcard--blue" : ""}">
    ${titleHtml}
    ${body}
  </div>`;
}

function frow(label, control, opts = {}) {
  return `<div class="frow">
    <div class="frow__label">${label}${opts.sub ? `<span class="frow__sub">${opts.sub}</span>` : ""}</div>
    <div class="frow__control">${control}${opts.hint ? `<span class="frow__hint">${opts.hint}</span>` : ""}</div>
  </div>`;
}

function finput(attrs = "") {
  return `<input class="finput" ${attrs} />`;
}

function fhinput(attrs = "") {
  return `<input class="finput finput--heading" ${attrs} />`;
}

function ftextarea(attrs = "", value = "") {
  return `<textarea class="finput finput--ta" ${attrs}>${value}</textarea>`;
}

// ── Form sections ─────────────────────────────────────────────

function calcValidUntil(sentOn, mode) {
  const cleaned = (sentOn || "").replace(/^[A-Za-z]+\s+/, "");
  try {
    const d = new Date(cleaned);
    if (isNaN(d)) return sentOn;
    if (mode === "1w") d.setDate(d.getDate() + 7);
    else if (mode === "1m") d.setMonth(d.getMonth() + 1);
    return new Intl.DateTimeFormat("en-AU", { day: "numeric", month: "short", year: "numeric" }).format(d);
  } catch (_) { return sentOn; }
}

function renderValidUntilPicker(project) {
  const mode = project.validUntilMode || "custom";
  const presets = [["1w", "1 week"], ["1m", "1 month"], ["custom", "Custom"]];
  return `<div class="fvalid">
    <div class="fvalid__chips" role="group" aria-label="Valid until preset">
      ${presets.map(([val, label]) => `
        <button type="button" class="fvalid__chip${mode === val ? " fvalid__chip--on" : ""}"
          data-valid-mode="${val}">${label}</button>`).join("")}
    </div>
    ${mode === "custom"
      ? finput(`type="text" value="${esc(project.validUntil)}" data-fld="project.validUntil" placeholder="e.g. 15 May 2026"`)
      : `<span class="fcomputed fvalid__computed">${esc(project.validUntil)}</span>`}
  </div>`;
}

const SOCIAL_ICONS = {
  website:   `<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.7"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" stroke="currentColor" stroke-width="1.7"/></svg>`,
  instagram: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
  linkedin:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" stroke-width="1.7"/><path d="M7 10v7M7 7v.5M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  tiktok:    `<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  facebook:  `<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  other:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};
const SOCIAL_LABELS = { website: "Website", instagram: "Instagram", linkedin: "LinkedIn", tiktok: "TikTok", facebook: "Facebook", other: "Other" };
const SOCIAL_PLACEHOLDERS = { website: "https://fishwife.com", instagram: "@fishwife", linkedin: "linkedin.com/company/…", tiktok: "@fishwife", facebook: "facebook.com/…", other: "URL or handle" };

function renderSocialsRows(socials = {}) {
  const rows = Object.keys(SOCIAL_LABELS).map(key => {
    const val = socials[key] || "";
    return `<div class="fsocials__row">
      <span class="fsocials__icon" aria-hidden="true">${SOCIAL_ICONS[key]}</span>
      <label class="fsocials__label">${SOCIAL_LABELS[key]}</label>
      ${finput(`type="url" value="${esc(val)}" data-fld="client.socials.${key}" placeholder="${SOCIAL_PLACEHOLDERS[key]}" class="fsocials__input"`)}
    </div>`;
  }).join("");
  return `<div class="fsocials">
    <div class="fsocials__heading">Socials</div>
    ${rows}
  </div>`;
}

// ── Inline side panels ────────────────────────────────────────

function renderInlineContextPanel() {
  const { client, brand } = PROPOSAL;

  const group = (label, hint, buttons) => `<div class="fpanel-group">
    <div class="fpanel-group__label">${label}</div>
    <div class="fchips fchips--compact" role="group" aria-label="${label}">${buttons}</div>
    <p class="fpanel-group__hint">${hint}</p>
  </div>`;

  const fc = (label, pick, active) =>
    `<button type="button" class="fchip fchip--sm${active ? " fchip--on" : ""}" data-ctx-pick="${pick}">${label}</button>`;

  const businessHint  = client.businessType === "new" ? "New assets from scratch" : "Build on existing brand";
  const historyHint   = (client.priorClient || "") === "returning" ? "You\u2019ve worked together before" : "New relationship";
  const offering      = Array.isArray(client.offering) ? client.offering : ["physical"];
  const offeringHint  = offering.length === 0 ? "Select at least one" : offering.map(o => ({ physical: "Physical product", digital: "Digital product", service: "Service" }[o] || o)).join(", ");
  const voiceHint     = brand.voice === "team" ? `Uses \u201Cwe\u201D throughout` : `Uses \u201CI\u201D throughout`;

  return `<aside class="fsec-panel">
    <div class="fsec-panel__label">Context at a glance</div>
    <div class="fsec-panel__card fsec-panel__card--groups">
      ${group("Business", businessHint,
        fc("Existing", "client.businessType:existing", client.businessType === "existing") +
        fc("New brand", "client.businessType:new",      client.businessType === "new")
      )}
      ${group("History", historyHint,
        fc("First time", "client.priorClient:first",      (client.priorClient || "") === "first") +
        fc("Returning",  "client.priorClient:returning",  (client.priorClient || "") === "returning")
      )}
      ${group("Offering", offeringHint,
        `<button type="button" class="fchip fchip--sm${offering.includes("physical") ? " fchip--on" : ""}" data-ctx-multi="client.offering:physical">Physical</button>` +
        `<button type="button" class="fchip fchip--sm${offering.includes("digital")  ? " fchip--on" : ""}" data-ctx-multi="client.offering:digital">Digital</button>` +
        `<button type="button" class="fchip fchip--sm${offering.includes("service")  ? " fchip--on" : ""}" data-ctx-multi="client.offering:service">Service</button>`
      )}
      ${group("Your voice", voiceHint,
        fc("I / my",  "brand.voice:individual", brand.voice !== "team") +
        fc("We / our","brand.voice:team",        brand.voice === "team")
      )}
    </div>
  </aside>`;
}

function renderInlineScopePanel(s) {
  const rate     = s.hourlyRate || 160;
  const capacity = s.weeklyCapacity || 30;

  // Auto-derive calls hours from call slots (count × mins / 60)
  const callSlots  = s.callSlots || [];
  const callCount  = callSlots.reduce((n, sl) => n + (Number(sl.count) || 0), 0);
  const callMins   = callSlots[0] ? (Number(callSlots[0].mins) || 60) : 60;
  const callsHrsAuto = +(callCount * callMins / 60).toFixed(1);
  const callStage = HELPER_STAGES.find(st => st.key === "calls");
  if (callStage) callStage.hours = callsHrsAuto;

  // Revisions info (editable hrs, count from Includes for hint)
  const revisEntry = s.includes.find(i => /revision/i.test(i.label));
  const revisCount = Number(revisEntry && revisEntry.num) || 0;
  const revisStage = HELPER_STAGES.find(st => st.key === "revisions");

  const mainStages   = HELPER_STAGES.filter(st => HELPER_MAIN_KEYS.includes(st.key));
  const customCosts  = s.customCosts || [];

  // Totals
  const milestoneHours = mainStages.reduce((sum, st) => sum + st.hours, 0);
  const stageHours  = HELPER_STAGES.reduce((sum, st) => sum + st.hours, 0);
  const customHours = customCosts.reduce((sum, c) => sum + (Number(c.hours) || 0), 0);
  const hoursTotal  = stageHours + customHours;
  const rateTotal   = hoursTotal * rate;
  const impliedWeeks = capacity > 0 ? +(hoursTotal / capacity).toFixed(1) : 0;

  // Estimated hours → implied fee
  const targetHours = Number(s.targetHours) || 0;
  const impliedFee  = targetHours > 0 ? targetHours * rate : 0;
  const buffer      = targetHours - hoursTotal;

  return `<aside class="fsec-panel fsec-panel--scope">
    <div class="fsec-panel__label">Your calculator</div>

    ${fcard("Rate",
      frow("Hourly rate", `<div class="finline" style="flex-wrap:nowrap">
        <span class="finline__currency">${s.currency}</span>
        ${finput(`type="number" value="${rate}" data-fld="scope.hourlyRate" min="0" step="5" style="width:80px"`)}
        <span class="finline__unit">/ hr ex. GST</span>
      </div>`) +
      `<div class="calc-target" data-calc-target>
        <div class="calc-target__head">
          <span class="calc-target__label">Estimated hours</span>
          <span class="calc-target__hint">Enter hours to see your implied fee</span>
        </div>
        <div class="calc-target__row">
          ${finput(`type="number" value="${targetHours || ""}" data-fld="scope.targetHours" min="0" step="1" placeholder="0" style="flex:1"`)}
          <span class="finline__unit">hrs</span>
        </div>
        <div class="calc-target__implies" data-calc-target-implies>
          ${targetHours > 0
            ? `= ${s.currency}${impliedFee.toLocaleString()} at ${s.currency}${rate}/hr`
            : `<span class="calc-target__implies-empty">= ${s.currency}0</span>`}
        </div>
      </div>`,
      { blue: true }
    )}

    ${fcard("Support & overhead",
      `<div class="frows">
        ${frow("Calls", callSlots.length > 0 ? `<div class="calc-readonly calc-readonly--slots">
            <div class="calc-readonly__slots">
              ${callSlots.map(sl => `<span class="calc-readonly__slot">${Number(sl.count) || 0} &times; ${Number(sl.mins) || 60} min</span>`).join(`<span class="calc-readonly__sep">+</span>`)}
            </div>
            <span class="calc-readonly__total" data-calc-calls-hrs>= ${callsHrsAuto} hrs</span>
          </div>` : `<div class="calc-readonly">
            <span class="calc-readonly__hint">Set in Includes ↑</span>
          </div>`)}
        ${frow("Revisions", `<div class="calc-readonly calc-readonly--slots">
            <div class="calc-readonly__slots">
              ${revisCount > 0
                ? `<span class="calc-readonly__slot">${revisCount} round${revisCount !== 1 ? "s" : ""}</span>`
                : `<span class="calc-readonly__hint">Set count in Includes ↑</span>`}
            </div>
            <div class="finline" style="gap:0.25rem">
              ${finput(`type="number" value="${revisStage ? (revisStage.hours || "") : ""}" data-est-stage="revisions" min="0" style="width:60px" placeholder="0"`)}
              <span class="finline__unit">hrs each</span>
            </div>
          </div>`)}
      </div>
      ${customCosts.length > 0 ? `
        <div class="est-support-divider"><span>Hidden costs</span></div>
        <div data-custom-costs>
          ${customCosts.map((c, i) => `
            <div class="calc-custom-row" data-custom-index="${i}">
              <input type="text" class="finput calc-custom-row__label" value="${esc(c.label || "")}"
                data-custom-label="${i}" placeholder="e.g. Travel" />
              <div class="finline" style="flex-shrink:0">
                ${finput(`type="number" value="${c.hours || ""}" data-custom-hours="${i}" min="0" style="width:60px" placeholder="0"`)}
                <span class="finline__unit">hrs</span>
              </div>
              <button type="button" class="calc-custom-row__remove" data-custom-remove="${i}" title="Remove">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              </button>
            </div>
          `).join("")}
        </div>` : ""}
      <button type="button" class="calc-add-cost" data-calc-custom-add>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        Add hidden cost
      </button>`
    )}

    ${fcard("Milestone allowance",
      `<div class="frows">
        ${mainStages.map(st =>
          frow(st.name, `<div class="finline">
            ${finput(`type="number" value="${st.hours || ""}" data-est-stage="${st.key}" min="0" style="width:70px" placeholder="0"`)}
            <span class="finline__unit">hrs</span>
          </div>`, { sub: st.weeks })
        ).join("")}
      </div>`
    )}

    ${(targetHours > 0 || milestoneHours > 0) ? (() => {
      const diff = targetHours - milestoneHours;
      const hasTarget = targetHours > 0;
      return `<div class="calc-tally" data-calc-tally>
        <div class="calc-tally__row">
          <span class="calc-tally__label">Estimated</span>
          <span class="calc-tally__val" data-tally-est>${targetHours > 0 ? `${targetHours} hrs` : `<span class="calc-tally__empty">not set</span>`}</span>
        </div>
        <div class="calc-tally__row">
          <span class="calc-tally__label">Milestone total</span>
          <span class="calc-tally__val" data-tally-milestone>${milestoneHours} hrs</span>
        </div>
        <div class="calc-badge ${diff >= 0 ? "calc-badge--ok" : "calc-badge--over"}" data-calc-badge style="margin-top:0.35rem;${!hasTarget ? "visibility:hidden" : ""}">
          ${diff >= 0
            ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ${diff} hrs left for support`
            : `<svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/></svg> Over by ${Math.abs(diff)} hrs — ${hoursTotal} hrs = ${s.currency}${(hoursTotal * rate).toLocaleString()}`
          }
        </div>
      </div>`;
    })() : ""}

    ${hoursTotal > 0 ? `<div class="calc-results" data-calc-results>
      <div class="calc-result-row">
        <span>Total planned</span>
        <strong data-est-hours>${hoursTotal} hrs</strong>
      </div>
      <div class="calc-result-row">
        <span>At your rate</span>
        <strong data-est-rate-total>${formatMoney(rateTotal, s.currency)}</strong>
      </div>
      ${targetHours > 0 ? (() => {
        const diff = hoursTotal - targetHours;
        if (diff === 0) return `<div class="calc-result-row calc-overrun calc-overrun--ok" data-calc-overrun>
          <span>vs estimate</span><span>On target</span></div>`;
        if (diff > 0) return `<div class="calc-result-row calc-overrun calc-overrun--over" data-calc-overrun>
          <span>vs estimate</span>
          <span><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ${diff} hrs over</span></div>`;
        return `<div class="calc-result-row calc-overrun calc-overrun--under" data-calc-overrun>
          <span>vs estimate</span>
          <span><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ${Math.abs(diff)} hrs free</span></div>`;
      })() : ""}
    </div>` : ""}

    ${(() => {
      const d = s.dates || {};
      const totalWeeks = s.totalDuration || "";
      const bufDays    = s.feedbackBufferDays || "";
      const autoFinish = calcFinishDate(d.start, totalWeeks, bufDays);
      const displayFinish = d.finish || autoFinish || "";
      return fcard("Timeline",
        frow("Sign by", finput(`type="text" value="${esc(d.signBy || "")}" data-fld="scope.dates.signBy" placeholder="e.g. 12 May 2026"`)) +
        frow("Start", finput(`type="text" value="${esc(d.start || "")}" data-fld="scope.dates.start" placeholder="e.g. 2 Jun 2026"`)) +
        frow("Finish", `<div class="calc-finish-row">
          ${finput(`type="text" value="${esc(displayFinish)}" data-fld="scope.dates.finish" data-auto-finish placeholder="Auto-calculated"`)}
          ${autoFinish && !d.finish ? `<span class="calc-finish-auto">auto</span>` : ""}
        </div>`, { hint: d.start && totalWeeks ? "Auto-calculated from start + weeks + buffer" : "Enter start date + weeks to auto-fill" }) +
        `<div class="fcard__divider"></div>` +
        frow("Weeks", `<div class="finline" style="flex-wrap:nowrap">
          ${finput(`type="number" value="${esc(String(totalWeeks))}" data-fld="scope.totalDuration" min="1" max="52" style="width:60px" placeholder="0"`)}
          <span class="finline__unit">weeks</span>
        </div>`) +
        frow("Feedback buffer", `<div class="finline" style="flex-wrap:nowrap">
          ${finput(`type="number" value="${esc(String(bufDays))}" data-fld="scope.feedbackBufferDays" min="0" max="30" style="width:60px" placeholder="0"`)}
          <span class="finline__unit">days / round</span>
        </div>`)
      );
    })()}

  </aside>`;
}

// ── Form sections ──────────────────────────────────────────────

function renderFormCover() {
  const { client, brand, project } = PROPOSAL;
  const sectionHtml = fsec("cover", "Cover", "Cover",
    fcard("Project",
      frow("Kicker", `<div class="fkicker">
        ${project.kickerMode === "custom"
          ? brand.wordmarkSrc
            ? `<div class="fkicker__wordmark-row">
                 <img class="fkicker__wordmark-img" src="${esc(brand.wordmarkSrc)}" alt="Wordmark" />
                 <button type="button" class="fkicker__reset" data-kicker-mode="derived" title="Remove wordmark">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                 </button>
               </div>`
            : `<div class="fkicker__upload-row">
                 <label class="fkicker__upload-label" title="Upload wordmark">
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                   Upload wordmark
                   <input type="file" accept="image/*" id="kickerWordmarkInput" class="sr-only" />
                 </label>
                 <button type="button" class="fkicker__reset" data-kicker-mode="derived" title="Use default">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                 </button>
               </div>`
          : `<div class="fkicker__default-row">
               <span class="fcomputed">${esc(brand.studio)} × ${esc(client.name)}</span>
               <button type="button" class="fchip fchip--sm" data-kicker-mode="custom">Wordmark</button>
             </div>`
        }
      </div>`) +
      frow("Title",    finput(`type="text" value="${esc(project.title)}" data-fld="project.title" placeholder="Project title"`)) +
      frow("Subtitle", finput(`type="text" value="${esc(project.titleAccent)}" data-fld="project.titleAccent" placeholder="Accent word (shown in italics)"`)) +
      frow("Tagline",  ftextarea(`data-fld="project.tagline" rows="2" placeholder="One-line project description"`, esc(project.tagline)))
    ) +
    fcard("For",
      frow("Client name", finput(`type="text" value="${esc(client.contact)}" data-fld="client.contact" placeholder="Client name"`)) +
      frow("Brand", finput(`type="text" value="${esc(client.name)}" data-fld="client.name" placeholder="Brand or company"`)) +
      frow("Industry", finput(`type="text" value="${esc(client.industry || "")}" data-fld="client.industry" placeholder="e.g. Food & beverage, SaaS"`))
    ) +
    fcard("From",
      frow("Name", finput(`type="text" value="${esc(brand.principal)}" data-fld="brand.principal"`)) +
      frow("Studio", finput(`type="text" value="${esc(brand.studio)}" data-fld="brand.studio"`)) +
      frow("Position", finput(`type="text" value="${esc(brand.role)}" data-fld="brand.role"`))
    ) +
    fcard("",
      frow("Valid until", renderValidUntilPicker(project)) +
      frow("Reference", `<div class="frow__combo">
        ${finput(`type="text" value="${esc(project.reference)}" data-fld="project.reference" placeholder="e.g. SS-2026-047"`)}
        <button type="button" class="frow__eye" data-ref-toggle
                title="${state.hiddenBlocks.has("reference") ? "Show" : "Hide"} on proposal"
                aria-label="${state.hiddenBlocks.has("reference") ? "Show" : "Hide"} reference on proposal">
          ${state.hiddenBlocks.has("reference") ? EYE_OFF_SVG : EYE_OPEN_SVG}
        </button>
      </div>`)
    )
  );
  return `<div class="fsec-with-panel">${sectionHtml}${renderInlineContextPanel()}</div>`;
}

function renderFormOverview() {
  const { project, overview } = PROPOSAL;
  const audienceText = getVariant("overview.audience", overview.audience.variants);
  return fsec("overview", "01 · Overview", "Overview",
    fcard("",
      frow("Proposal title", finput(`type="text" value="${esc(project.title)}" data-fld="project.title"`)) +
      frow("Subtitle", finput(`type="text" value="${esc(project.titleAccent)}" data-fld="project.titleAccent" placeholder="Accent word (shown in italics on cover)"`)) +
      frow("Tagline", ftextarea(`data-fld="project.tagline" rows="2" placeholder="One-line project description"`, esc(project.tagline)))
    ) +
    fcard("",
      `<div class="fcard__heading">${fhinput(`type="text" value="${esc(overview.goalsLabel || "Goals")}" data-fld="overview.goalsLabel" placeholder="Goals"`)}</div>` +
      renderGoalRows(overview.goals)
    ) +
    fcard("",
      `<div class="fcard__heading">${fhinput(`type="text" value="${esc(overview.audience.label || "Who this is for")}" data-fld="overview.audience.label" placeholder="Who this is for"`)}</div>` +
      ftextarea(`data-fld="overview.audience.active" rows="3" placeholder="Describe the target audience" style="margin:0.5rem 1.25rem 0.75rem;width:calc(100% - 2.5rem)"`, esc(audienceText))
    ) +
    fcard("",
      `<div class="fcard__heading">${fhinput(`type="text" value="${esc(overview.differentiator.label)}" data-fld="overview.differentiator.label" placeholder="How I'll approach it"`)}</div>` +
      renderApproachPoints(overview.differentiator)
    )
  );
}

function renderApproachPoints(differentiator) {
  const varIdx = state.variantIdx["overview.differentiator"] || 0;
  const points = differentiator.variants[varIdx] || differentiator.variants[0] || [];
  return `<div class="flist" data-flist="overview.differentiator.points">
    ${points.map((p, i) => `
      <div class="flist__row" data-flist-idx="${i}">
        <span class="flist__bullet" aria-hidden="true">·</span>
        <input class="finput" type="text" value="${esc(p)}"
               data-diff-item data-diff-idx="${i}" />
        <button type="button" class="flist__remove" data-diff-remove="${i}" aria-label="Remove point">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </button>
      </div>`).join("")}
    <button type="button" class="flist__add" data-diff-add>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      Add point
    </button>
  </div>`;
}

function renderGoalRows(goals) {
  return `<div class="flist" data-flist="overview.goals">
    ${goals.map((g, i) => `
      <div class="flist__row" data-flist-idx="${i}">
        <span class="flist__bullet" aria-hidden="true">·</span>
        <input class="finput" type="text" value="${esc(g)}"
               data-flist-item="overview.goals" data-flist-idx="${i}" />
        <button type="button" class="flist__remove" data-flist-remove="overview.goals:${i}" aria-label="Remove goal">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </button>
      </div>`).join("")}
    <button type="button" class="flist__add" data-flist-add="overview.goals">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      Add goal
    </button>
  </div>`;
}

function calcCallHoursTotal(slots) {
  const totalMins = (slots || []).reduce((sum, s) => sum + (Number(s.count) || 0) * (Number(s.mins) || 0), 0);
  const hrs = totalMins / 60;
  return hrs === Math.floor(hrs) ? String(Math.floor(hrs)) : hrs.toFixed(1);
}

function syncCallHours() {
  const slots = PROPOSAL.scope.callSlots || [];
  const hrs = calcCallHoursTotal(slots);
  updateIncludesEntry(/calls/i, hrs);
  // Keep HELPER_STAGES.calls in sync (auto-derived, not manually set)
  const callStage = HELPER_STAGES.find(st => st.key === "calls");
  if (callStage) callStage.hours = parseFloat(hrs) || 0;
  const el = document.getElementById("calls-derived");
  if (el) el.textContent = `= ${hrs} hrs total`;
  // Update the read-only display in the inline panel
  document.querySelectorAll("[data-calc-calls-hrs]").forEach(el => el.textContent = `= ${hrs} hrs`);
  recalcEstimateDisplay();
}

function renderCallSlots(slots) {
  return `<div class="fcall-slots">
    ${slots.map((s, i) => `
      <div class="fcall-slots__row">
        ${finput(`type="number" value="${s.count ?? ""}" min="1" max="99" data-call-count="${i}" style="width:56px" placeholder="0"`)}
        <span class="finline__unit">calls</span>
        ${slots.length > 1 ? `<button type="button" class="flist__remove" data-call-remove="${i}" aria-label="Remove call type">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        </button>` : ""}
      </div>`).join("")}
    <div class="fcall-slots__foot">
      <button type="button" class="fcall-slots__add" data-call-add>
        <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        Add type
      </button>
    </div>
  </div>`;
}

function renderFormScope() {
  const s = PROPOSAL.scope;
  const callsEntry  = s.includes.find(i => /calls/i.test(i.label));
  const revisEntry  = s.includes.find(i => /revision/i.test(i.label));
  const weeksEntry  = s.includes.find(i => /weeks?$/i.test((i.label || "").trim()));

  const scopeNudge = `<button type="button" class="nudge nudge--form" data-nudge="estimate">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
        <path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Need a hand figuring out timelines?</span>
      <span class="nudge__sub">Use your weekly capacity and stage hours to calculate the total.</span>
      <svg class="nudge__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>`;

  const sectionHtml = fsec("scope", "02 · Scope", "Scope",
    fcard("Includes",
      frow("Revisions", `<div class="frevisions">
        <div class="finline">
          ${finput(`type="number" value="${revisEntry ? revisEntry.num : "2"}" data-fld="scope.revisions" min="0" max="10" style="width:60px"`)}
          <span class="finline__unit">rounds included</span>
        </div>
        <div class="frevisions__type">
          <button type="button" class="frevisions__chip${s.revisionsType === "within" ? " frevisions__chip--on" : ""}"
            data-revisions-type="within" title="Revision time is baked into each stage — no separate milestone shown">
            Within stages
          </button>
          <button type="button" class="frevisions__chip${s.revisionsType === "milestone" ? " frevisions__chip--on" : ""}"
            data-revisions-type="milestone" title="Each revision round is a distinct milestone on the timeline">
            Own milestone
          </button>
        </div>
        <span class="frevisions__hint">${
          s.revisionsType === "milestone" ? "Each round appears as a review gate on the timeline."
          : s.revisionsType === "within"  ? "Revision time is absorbed within each stage\u2019s budget."
          : "Choose how revisions sit in the timeline."
        }</span>
      </div>`) +
      frow("Calls", renderCallSlots(s.callSlots || [{ count: 3, mins: 60 }])) +
      frow("Post-launch support", `<div class="frow__combo">
        ${finput(`type="text" value="${esc(String((s.includes.find(i => /post.launch/i.test(i.label)) || {}).num || ""))}" data-fld="scope.postLaunch" placeholder="e.g. 30 days"`)}
        <button type="button" class="frow__eye" data-block-toggle="postLaunchSupport"
          title="${state.hiddenBlocks.has("postLaunchSupport") ? "Show on proposal" : "Hide from proposal"}"
          aria-label="${state.hiddenBlocks.has("postLaunchSupport") ? "Show" : "Hide"} post-launch support">
          ${state.hiddenBlocks.has("postLaunchSupport") ? EYE_OFF_SVG : EYE_OPEN_SVG}
        </button>
      </div>`, { hint: state.hiddenBlocks.has("postLaunchSupport") ? "Hidden — won't show on proposal" : "Shown as 4th stat on proposal" })
    ) +
    fcard("Duration",
      frow("Total", `<div class="finline">
        ${finput(`type="text" value="${esc(weeksEntry ? weeksEntry.num : "8")}" data-fld="scope.totalDuration" style="width:80px"`)}
        <span class="finline__unit">weeks</span>
      </div>`) +
      `<div class="fcard__divider"></div>` +
      frow("Sign by", `<div class="frow__combo">
        ${finput(`type="text" value="${esc(s.dates.signBy)}" data-fld="scope.dates.signBy"`)}
        <button type="button" class="frow__eye" data-block-toggle="dateSignBy"
          title="${state.hiddenBlocks.has("dateSignBy") ? "Show" : "Hide"} on proposal"
          aria-label="${state.hiddenBlocks.has("dateSignBy") ? "Show" : "Hide"} sign-by date">
          ${state.hiddenBlocks.has("dateSignBy") ? EYE_OFF_SVG : EYE_OPEN_SVG}
        </button>
      </div>`) +
      frow("To start", `<div class="frow__combo">
        ${finput(`type="text" value="${esc(s.dates.start)}" data-fld="scope.dates.start"`)}
        <button type="button" class="frow__eye" data-block-toggle="dateStart"
          title="${state.hiddenBlocks.has("dateStart") ? "Show" : "Hide"} on proposal"
          aria-label="${state.hiddenBlocks.has("dateStart") ? "Show" : "Hide"} start date">
          ${state.hiddenBlocks.has("dateStart") ? EYE_OFF_SVG : EYE_OPEN_SVG}
        </button>
      </div>`) +
      frow("Finish on", `<div class="frow__combo">
        ${finput(`type="text" value="${esc(s.dates.finish)}" data-fld="scope.dates.finish" data-auto-finish`)}
        <button type="button" class="frow__eye" data-block-toggle="dateFinish"
          title="${state.hiddenBlocks.has("dateFinish") ? "Show" : "Hide"} on proposal"
          aria-label="${state.hiddenBlocks.has("dateFinish") ? "Show" : "Hide"} finish date">
          ${state.hiddenBlocks.has("dateFinish") ? EYE_OFF_SVG : EYE_OPEN_SVG}
        </button>
      </div>`, { hint: s.dates.start && (weeksEntry ? weeksEntry.num : "") ? "Auto-calculated from start + weeks + buffer" : "Set start date to auto-calculate" })
    ) +
    fcard("Stages", renderStagesForm(s.milestones)),
    `<p class="fs__subtitle">What the client sees</p>` + scopeNudge
  );
  return `<div class="fsec-with-panel">${sectionHtml}${renderInlineScopePanel(s)}</div>`;
}

function renderStagesForm(milestones) {
  return `<div class="fstages" data-fstages>
    ${milestones.map((m, i) => renderStageCard(m, i)).join("")}
    <button type="button" class="flist__add" data-stage-add>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      Add stage
    </button>
  </div>`;
}

function renderStageCard(m, i) {
  return `<div class="fstage" data-stage-idx="${i}">
    <div class="fstage__head">
      <span class="fstage__num">${i + 1}</span>
      <div class="fstage__fields">
        <input class="finput finput--sm" type="text" value="${esc(m.eyebrow || "")}"
               data-stage-field="eyebrow" data-stage-idx="${i}" placeholder="Stage ${i + 1}" />
        <input class="finput finput--name" type="text" value="${esc(m.name)}"
               data-stage-field="name" data-stage-idx="${i}" placeholder="Stage name" />
        <input class="finput finput--week" type="text" value="${esc(m.timing)}"
               data-stage-field="timing" data-stage-idx="${i}" placeholder="Week 1–2" />
      </div>
      <button type="button" class="fstage__remove" data-stage-remove="${i}" aria-label="Remove stage">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
    </div>
    <textarea class="finput finput--ta fstage__intro" rows="1"
      data-stage-field="intro" data-stage-idx="${i}"
      placeholder="Optional intro sentence for this stage…"
      style="margin:0.25rem 0 0.5rem;width:100%;resize:vertical;box-sizing:border-box">${esc(m.intro || "")}</textarea>
    <div class="fstage__delivs">
      ${m.deliverables.map((d, di) => `
        <div class="fdeliv">
          <span class="fdeliv__dot" aria-hidden="true">·</span>
          <input class="finput" type="text" value="${esc(d)}"
                 data-stage-deliv="${i}" data-deliv-idx="${di}" placeholder="Deliverable" />
          <button type="button" class="flist__remove" data-deliv-remove="${i}-${di}" aria-label="Remove deliverable">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
          </button>
        </div>`).join("")}
      <button type="button" class="flist__add flist__add--sm" data-deliv-add="${i}">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        Add deliverable
      </button>
    </div>
    <div class="fstage__foot">
      <label class="fcheck">
        <input type="checkbox" ${m.outcomesHidden ? "" : "checked"} data-stage-outcomes="${i}" />
        <span>Show outcomes on proposal</span>
      </label>
      ${!m.outcomesHidden ? `
      <div class="fstage__outcomes">
        ${fhinput(`type="text" value="${esc(m.outcomesLabel || "Outcomes")}" data-fld="scope.milestones.${si}.outcomesLabel" placeholder="Outcomes" class="fstage__outcomes-label"`)}
        ${(m.outcomes || []).map((o, oi) => `
          <div class="flist__row">
            <span class="flist__bullet" aria-hidden="true">·</span>
            <input class="finput" type="text" value="${esc(o)}"
              data-stage-outcome="${i}" data-outcome-idx="${oi}"
              placeholder="What the client walks away with…" />
            <button type="button" class="flist__remove" data-outcome-remove="${i}-${oi}" aria-label="Remove outcome">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>
            </button>
          </div>`).join("")}
        <button type="button" class="flist__add flist__add--sm" data-outcome-add="${i}">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          Add outcome
        </button>
      </div>` : ""}
    </div>
  </div>`;
}

function renderFormEstimate() {
  const s = PROPOSAL.scope;
  const rate = s.hourlyRate || 160;
  const capacity = s.weeklyCapacity || 30;
  const hoursTotal = HELPER_STAGES.reduce((sum, st) => sum + st.hours, 0);
  const lineTotal = s.lineItems.reduce((sum, li) => sum + li.qty * li.rate, 0);
  const rateTotal = hoursTotal * rate;
  const diff = lineTotal - rateTotal;
  const diffClass = diff > 1000 ? " est-row--over" : diff < -1000 ? " est-row--under" : " est-row--flat";

  return fsec("estimate", "MonoDesk · just for you", "Estimate & timeline",
    `<p class="fs__hint">Sense-check your quote and plan your timeline. Only you see this — not shown to the client.</p>` +
    fcard("Rate card",
      frow("Hourly rate", `<div class="finline">
        <span class="finline__currency">${s.currency}</span>
        ${finput(`type="number" value="${rate}" data-fld="scope.hourlyRate" min="0" step="5" style="width:80px"`)}
        <span class="finline__unit">/ hr ex. GST</span>
      </div>`) +
      frow("Weekly capacity", `<div class="finline">
        ${finput(`type="number" value="${capacity}" data-fld="scope.weeklyCapacity" min="1" max="80" style="width:80px"`)}
        <span class="finline__unit">hrs / week</span>
      </div>`) +
      estImpliedBlock(lineTotal, rate, capacity, s.currency),
      { blue: true }
    ) +
    renderEstimateHoursCard(s) +
    `<div class="est-result" data-est-result>
      <div class="est-row"><span>Total planned hrs</span><strong data-est-hours>${hoursTotal} hrs</strong></div>
      <div class="est-row"><span>Quoted value</span><strong data-est-rate-total>${formatMoney(rateTotal, s.currency)}</strong></div>
      <div class="est-row est-row--sep${diffClass}" data-est-diff-row>
        <span>vs. proposed</span>
        <span data-est-diff>${diff >= 0 ? "+" : ""}${formatMoney(diff, s.currency)}</span>
      </div>
    </div>` +
    fcard("Start date",
      frow("Starts on", finput(`type="text" value="${esc(s.dates.start)}" data-fld="scope.dates.start" data-est-start`)) +
      frow("Sign by",   finput(`type="text" value="${esc(s.dates.signBy)}" data-fld="scope.dates.signBy"`)) +
      frow("Estimated finish", `<span class="fcomputed" data-est-finish>${esc(s.dates.finish)}</span>
        <span class="fcomputed__hint">calculated from start + weeks</span>`)
    )
  );
}

function renderLineItemsEditor(s) {
  const total = s.lineItems.reduce((sum, li) => sum + (Number(li.qty) || 1) * (Number(li.rate) || 0), 0);
  return `<div class="fprice-editor" data-fprice-editor="lineItems">
    <div class="fli-rows">
      ${s.lineItems.map((li, i) => `
        <div class="fli-row">
          <input class="finput fli-row__label" type="text" value="${esc(li.label)}"
            data-fld="scope.lineItems.${i}.label" placeholder="Line item description" />
          <div class="fli-row__right">
            <span class="finline__currency">${s.currency}</span>
            <input class="finput" type="number" value="${Number(li.rate)}" min="0" step="100"
              data-fld="scope.lineItems.${i}.rate" data-li-rate style="width:90px" />
            <button type="button" class="flist__remove" data-fli-remove="${i}" aria-label="Remove line item">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </div>
        </div>`).join("")}
    </div>
    <div class="fli-foot">
      <button type="button" class="flist__add" data-fli-add>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
        Add line
      </button>
      <span class="fli-foot__total" data-fli-total>${formatMoney(total, s.currency)}</span>
    </div>
  </div>`;
}

function renderTiersEditor(s) {
  return `<div class="fprice-editor" data-fprice-editor="tiers">
    ${frow("Eyebrow", finput(`type="text" value="${esc(s.tiers.eyebrow)}" data-fld="scope.tiers.eyebrow" placeholder="Or pick a package"`))}
    ${frow("Intro", ftextarea(`data-fld="scope.tiers.intro" rows="2" placeholder="One-line intro for the tiers block"`, esc(s.tiers.intro)))}
    <div class="ftiers-editor">
      ${s.tiers.options.map((tier, i) => `
        <div class="ftier-edit${tier.featured ? " ftier-edit--feat" : ""}">
          <div class="ftier-edit__top">
            <input class="finput finput--heading" type="text" value="${esc(tier.name)}"
              data-fld="scope.tiers.options.${i}.name" placeholder="Package name" />
            <label class="ftier-feat-toggle" title="Mark as featured (highlighted to client)">
              <input type="checkbox" class="sr-only" data-tier-featured="${i}" ${tier.featured ? "checked" : ""} />
              <span>Featured</span>
            </label>
          </div>
          ${frow("Tagline", finput(`type="text" value="${esc(tier.tagline)}" data-fld="scope.tiers.options.${i}.tagline" placeholder="One-line description"`))}
          ${frow("Price", `<div class="finline">
            <span class="finline__currency">${s.currency}</span>
            ${finput(`type="number" value="${Number(tier.price)}" min="0" step="100" data-fld="scope.tiers.options.${i}.price" data-tier-price style="width:100px"`)}
          </div>`)}
          <div class="ftier-includes">
            <div class="ftier-includes__label">Includes</div>
            ${tier.includes.map((item, j) => `
              <div class="flist__row">
                <span class="flist__bullet" aria-hidden="true">·</span>
                <input class="finput" type="text" value="${esc(item)}"
                  data-tier-incl="${i}" data-tier-incl-j="${j}" />
                <button type="button" class="flist__remove" data-tier-incl-remove="${i}:${j}" aria-label="Remove">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                </button>
              </div>`).join("")}
            <button type="button" class="flist__add flist__add--sm" data-tier-incl-add="${i}">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              Add item
            </button>
            <div class="ftier-summary">
              <input class="finput ftier-summary__input" type="text"
                value="${esc(tier.summary || "")}"
                data-fld="scope.tiers.options.${i}.summary"
                placeholder="Short summary, e.g. 2 revisions included" />
            </div>
          </div>
        </div>`).join("")}
    </div>
  </div>`;
}

function renderAddOnsEditor(s) {
  return `<div class="fprice-editor" data-fprice-editor="addOns">
    <div class="faddons-editor">
      ${s.addOns.map((ao, i) => `
        <div class="faddon-edit">
          <div class="faddon-edit__head">
            <input class="finput finput--heading" type="text" value="${esc(ao.name)}"
              data-fld="scope.addOns.${i}.name" placeholder="Add-on name" />
            <div class="faddon-edit__meta">
              <span class="finline__currency">${s.currency}</span>
              <input class="finput" type="number" value="${Number(ao.price)}" min="0" step="100"
                data-fld="scope.addOns.${i}.price" data-addon-price style="width:86px" />
              <input class="finput" type="text" value="${esc(ao.duration)}"
                data-fld="scope.addOns.${i}.duration" placeholder="+1 week" style="width:76px" />
            </div>
            <button type="button" class="flist__remove" data-faddon-remove="${i}" aria-label="Remove add-on">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </div>
          ${frow("Description", ftextarea(`data-fld="scope.addOns.${i}.desc" rows="2" placeholder="What's included"`, esc(ao.desc)))}
        </div>`).join("")}
    </div>
    <button type="button" class="flist__add" data-faddon-add>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      Add add-on
    </button>
  </div>`;
}

function renderFlatPriceEditor(s) {
  return `<div class="fprice-editor" data-fprice-editor="flatPrice">
    ${frow("Label", finput(`type="text" value="${esc(s.flatPrice.label)}" data-fld="scope.flatPrice.label" placeholder="e.g. Total project fee"`))}
    ${frow("Amount", `<div class="finline">
      <span class="finline__currency">${s.currency}</span>
      ${finput(`type="number" value="${Number(s.flatPrice.amount)}" min="0" step="100" data-fld="scope.flatPrice.amount" data-flatprice-amount style="width:120px"`)}
    </div>`)}
    ${frow("Note", finput(`type="text" value="${esc(s.flatPrice.note)}" data-fld="scope.flatPrice.note" placeholder="e.g. ex. GST · due in two instalments (optional)"`))}
  </div>`;
}

const DISCOUNT_PRESETS = [
  { label: "Mates rates",      type: "pct", value: 10 },
  { label: "Loyalty discount", type: "pct", value: 15 },
  { label: "Early bird",       type: "pct", value: 10 },
  { label: "Return client",    type: "pct", value: 10 },
  { label: "Referral",         type: "flat", value: 500 },
];

function renderDiscountsEditor(currency) {
  const discounts = state.discounts;
  return `<div class="fdiscounts">
    <div class="fdiscounts__head">
      <span class="fdiscounts__title">Discounts</span>
      <span class="fdiscounts__hint">applied to subtotal</span>
    </div>
    <div class="fdiscounts__presets">
      ${DISCOUNT_PRESETS.map(p => `
        <button type="button" class="fterms-suggest__chip fdiscount-preset"
          data-discount-preset="${esc(p.label)}"
          data-discount-preset-type="${p.type}"
          data-discount-preset-val="${p.value}">
          + ${esc(p.label)}
        </button>`).join("")}
    </div>
    ${discounts.length ? `
    <div class="fdiscounts__rows">
      ${discounts.map(d => `
        <div class="fdiscount-row" data-discount="${d.uid}">
          ${finput(`type="text" value="${esc(d.label)}" data-discount-label="${d.uid}" placeholder="e.g. Mates rates"`)}
          <div class="finline fdiscount-row__amount">
            ${d.type === "pct"
              ? `${finput(`type="number" value="${d.value}" data-discount-val="${d.uid}" min="0" max="100" style="width:60px"`)}
                 <span class="finline__unit">%</span>`
              : `<span class="finline__currency">${esc(currency)}</span>
                 ${finput(`type="number" value="${d.value}" data-discount-val="${d.uid}" min="0" style="width:80px"`)}`
            }
            <button type="button" class="fdiscount-row__type fvalid__chip${d.type === "pct" ? " fvalid__chip--on" : ""}"
              data-discount-type-toggle="${d.uid}" title="Switch to ${d.type === "pct" ? "flat amount" : "percentage"}">%</button>
            <button type="button" class="fdiscount-row__type fvalid__chip${d.type === "flat" ? " fvalid__chip--on" : ""}"
              data-discount-type-flat="${d.uid}" title="Switch to flat amount">${esc(currency)}</button>
          </div>
          <button type="button" class="flist__remove" data-discount-remove="${d.uid}" aria-label="Remove discount">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </button>
        </div>`).join("")}
    </div>` : ""}
    <button type="button" class="flist__add flist__add--sm" data-discount-add>
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      Add discount
    </button>
  </div>`;
}

function renderFormPricing() {
  const formats = [
    { id: "flatPrice",  label: "Flat price",  desc: "One number, no breakdown" },
    { id: "lineItems",  label: "Itemised",    desc: "Line-by-line breakdown" },
    { id: "tiers",      label: "Packages",    desc: "Tiers" },
    { id: "addOns",     label: "Add-ons",     desc: "Optional client-toggleable add-ons" },
  ];

  const s = PROPOSAL.scope;
  const editorFor = { lineItems: renderLineItemsEditor, tiers: renderTiersEditor, addOns: renderAddOnsEditor, flatPrice: renderFlatPriceEditor };

  // Flat price sense-check vs. calculator
  const calcTotal  = HELPER_STAGES.reduce((n, st) => n + st.hours, 0) * (s.hourlyRate || 160);
  const fpAmount   = Number(s.flatPrice.amount) || 0;
  const fpOn       = !state.hiddenBlocks.has("flatPrice");
  const calcHrs    = HELPER_STAGES.reduce((n, st) => n + st.hours, 0);
  const diff       = Math.abs(fpAmount - calcTotal);
  const pct        = calcTotal > 0 ? diff / calcTotal : 1;
  const matches    = calcTotal > 0 && pct < 0.01; // within 1%
  const fpSenseCheck = fpOn && calcTotal > 0 ? `
    <div class="sense-check${matches ? "" : " sense-check--warn"}" title="MonoDesk sense-check against your rate card">
      ${matches
        ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
           Matches your rate card: ${s.currency}${s.hourlyRate || 160}/hr ex. GST over ~${calcHrs} hrs on core scope.`
        : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/></svg>
           This doesn't match your calculator — your rate card suggests ${formatMoney(calcTotal, s.currency)}.`
      }
    </div>` : "";

  return fsec("pricing", "03 · Pricing", "Pricing",
    fcard("How you're presenting price",
      `<p class="fcard__desc">Choose which pricing blocks appear on your proposal. You can show multiple.</p>
      <div class="fprice-method-divider"><span>Choose your payment method</span></div>
      <div class="fprice-sections">
        ${formats.map(f => {
          const on = !state.hiddenBlocks.has(f.id);
          const expanded = on && state.expandedPricingSections.has(f.id);
          return `<div class="fprice-section${on ? " fprice-section--on" : ""}${expanded ? " fprice-section--expanded" : ""}">
            <div class="fprice-opt-row">
              <label class="fprice-opt${on ? " fprice-opt--on" : ""}">
                <input type="checkbox" class="sr-only" data-pricing-toggle="${f.id}" ${on ? "checked" : ""} />
                <span class="fprice-opt__check">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
                </span>
                <span class="fprice-opt__body">
                  <span class="fprice-opt__label">${f.label}</span>
                  <span class="fprice-opt__desc">${f.desc}</span>
                </span>
              </label>
              ${on ? `<button type="button" class="fprice-expand-btn" data-pricing-expand="${f.id}" aria-expanded="${expanded}" title="${expanded ? "Collapse" : "Edit"}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style="transition:transform 0.15s;transform:rotate(${expanded ? "180" : "0"}deg)">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>` : ""}
            </div>
            ${f.id === "flatPrice" ? fpSenseCheck : ""}
            ${expanded ? editorFor[f.id](s) : ""}
          </div>`;
        }).join("")}
      </div>`
    ) +
    fcard("Extras",
      `<p class="fcard__desc">Tap to add — these are priced into your core scope total, not shown as separate line items to the client.</p>
      <div class="fextras-suggestions">
        ${PROPOSAL.scope.extrasLibrary.map(p => {
          const active = state.extras.some(e => e.id === p.id);
          return `<button type="button"
            class="fextra-chip${active ? " fextra-chip--on" : ""}"
            data-fextra-preset="${esc(p.id)}"
            title="${esc(p.desc)}">
            ${active
              ? `<svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`
              : `<svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
            }
            <span class="fextra-chip__label">${esc(p.name)}</span>
            <span class="fextra-chip__rate">${PROPOSAL.scope.currency}${formatMoney(p.rate)}</span>
          </button>`;
        }).join("")}
        <button type="button" class="fextra-chip fextra-chip--custom" data-fextras-add>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          <span class="fextra-chip__label">Custom</span>
        </button>
      </div>
      ${state.extras.length ? `
      <div class="fextras-active" data-fextras>
        ${state.extras.map(e => `
          <div class="fextra-row" data-fextra="${e.uid}">
            ${finput(`type="text" value="${esc(e.label)}" data-extra-label="${e.uid}" placeholder="Extra name"`)}
            <div class="finline">
              <span class="finline__currency">${PROPOSAL.scope.currency}</span>
              ${finput(`type="number" value="${e.rate}" data-extra-rate="${e.uid}" min="0" style="width:80px"`)}
            </div>
            <button type="button" class="flist__remove" data-fextra-remove="${e.uid}" aria-label="Remove extra">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </button>
          </div>`).join("")}
      </div>` : ""}
      <div class="fcard__divider"></div>
      ${renderDiscountsEditor(s.currency)}
      <div class="fcard__divider"></div>
      <div class="fcurrency-tax">
        <div class="frow fcurrency-tax__row">
          <span class="frow__label">Currency &amp; tax</span>
          <div class="fcurrency-tax__control">
            <div class="fcurrency-tax__left">
              <button type="button" class="fvalid__chip${s.currency === "A$" ? " fvalid__chip--on" : ""}"
                data-currency-pick="A$">AUD</button>
              <button type="button" class="fvalid__chip${s.currency !== "A$" ? " fvalid__chip--on" : ""}"
                data-currency-other-toggle>Other</button>
              ${s.currency !== "A$" ? `
                <input class="finput fcurrency-custom" type="text"
                  value="${esc(s.currency)}"
                  data-fld="scope.currency" placeholder="$, £, €…" style="width:56px" />` : ""}
            </div>
            <div class="fcurrency-tax__sep"></div>
            <div class="fcurrency-tax__right">
              <label class="fcheck">
                <input type="checkbox" ${s.tax.rate > 0 ? "checked" : ""} data-tax-toggle />
                <span>Tax</span>
              </label>
              ${s.tax.rate > 0 ? `
                <input class="finput" type="number" value="${s.tax.rate * 100}" min="0" max="100" step="0.5"
                  data-fld="scope.tax.rate" data-tax-rate-pct placeholder="%" style="width:52px" />
                <span class="finline__unit">%</span>
                <span class="fcurrency-tax__label">${esc(s.tax.label)}</span>` : ""}
            </div>
          </div>
        </div>
      </div>
      `
    )
  );
}

function renderInlineAboutPanel() {
  const cs = PROPOSAL.about.caseStudies;
  const items = cs.map((c, i) => {
    const thumbHidden = state.hiddenCaseThumbs.has(i);
    return `
    <div class="fpanel-cs${thumbHidden ? " fpanel-cs--hidden" : ""}" data-panel-cs-idx="${i}">
      <div class="fpanel-cs__num">${i + 1}</div>
      <div class="fpanel-cs__body">
        <div class="fpanel-cs__title">
          ${c.client ? `<span class="fpanel-cs__client">${esc(c.client)}</span>` : ""}
          ${c.client && c.project ? `<span class="fpanel-cs__sep">·</span>` : ""}
          ${c.project ? `<span class="fpanel-cs__project">${esc(c.project)}</span>` : ""}
        </div>
      </div>
      <button type="button" class="fpanel-cs__toggle" data-panel-cs-toggle="${i}"
        title="${thumbHidden ? "Show to client" : "Hide from client"}"
        aria-label="${thumbHidden ? "Show to client" : "Hide from client"}"
        aria-pressed="${thumbHidden}">
        ${thumbHidden ? EYE_OFF_SVG : EYE_OPEN_SVG}
      </button>
    </div>`;
  }).join("");

  return `<aside class="fsec-panel fsec-panel--about">
    <div class="fsec-panel__label">Case studies</div>
    <div class="fsec-panel__card fsec-panel__card--cs">
      ${cs.length ? items : `<p class="fsec-panel__hint">No case studies added yet.</p>`}
    </div>
  </aside>`;
}

function renderFormAbout() {
  const a = PROPOSAL.about;
  const bio = getVariant("about.bio", a.bio.variants);

  const sectionHtml = fsec("about", "04 · About", "About",
    fcard("Intro",
      frow("Bio", ftextarea(`data-fld="about.bio.active" rows="4" placeholder="A brief intro about you and your studio"`, esc(bio)))
    ) +
    fcard("Case studies",
      `<p class="fcard__desc">Choose from the list below or add new ones. Control what's shown on each.</p>
      <div class="fcases-list" data-fcases>
        ${a.caseStudies.map((c, i) => renderCaseCard(c, i)).join("")}
        <button type="button" class="flist__add" data-case-add>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          Add case study
        </button>
      </div>`
    )
  );

  return `<div class="fsec-with-panel">${sectionHtml}${renderInlineAboutPanel()}</div>`;
}

function renderCaseCard(c, i) {
  const thumbMode = c.thumbMode || (c.thumbSrc ? "image" : "gradient");
  return `<div class="fcase" data-case-idx="${i}">
    <div class="fcase__head">
      <span class="fcase__num">${i + 1}</span>
      <button type="button" class="fstage__remove" data-case-remove="${i}" aria-label="Remove case study">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div class="fcase__fields">
      ${frow("Client",  finput(`type="text" value="${esc(c.client)}" data-fld="about.caseStudies.${i}.client"`))}
      ${frow("Project", finput(`type="text" value="${esc(c.project)}" data-fld="about.caseStudies.${i}.project"`))}
      ${frow("Outcome", ftextarea(`data-fld="about.caseStudies.${i}.outcome" rows="2"`, esc(c.outcome)))}
      ${frow("Link", finput(`type="text" value="${esc(c.url || "")}" data-fld="about.caseStudies.${i}.url" placeholder="https://... (optional)"`), { hint: "optional" })}
      ${frow("Thumbnail", `<div class="fthumbopts">
        ${[["image", "Image"], ["logo", "Logo"], ["none", "Nothing"]].map(([mode, label]) => `
          <label class="fthumbopt${thumbMode === mode ? " fthumbopt--on" : ""}">
            <input type="radio" class="sr-only" name="thumb${i}" value="${mode}"
                   ${thumbMode === mode ? "checked" : ""} data-case-thumb="${i}" />
            <span>${label}</span>
          </label>`).join("")}
      </div>
      ${thumbMode === "image" ? frow("Image", `
        <label class="fupload${c.thumbSrc ? " fupload--has-image" : ""}">
          ${c.thumbSrc
            ? `<img class="fupload__preview" src="${esc(c.thumbSrc)}" alt="Case study thumbnail" />`
            : `<span class="fupload__empty">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><polyline points="17 8 12 3 7 8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
                Upload image
              </span>`}
          <input type="file" accept="image/*" class="sr-only" data-case-img="${i}" />
        </label>
        ${c.thumbSrc ? `<button type="button" class="fupload__clear" data-case-img-clear="${i}" aria-label="Remove image">Remove</button>` : ""}
      `) : ""}`)}
    </div>
  </div>`;
}

function renderOwnershipCard(ownershipFull, ownershipRow, label = "Ownership") {
  const hidden = state.hiddenBlocks.has("terms.ownership");
  const eyeBtn = `<button type="button" class="fcard__eye" data-terms-hide-toggle="ownership"
    title="${hidden ? "Show on proposal" : "Hide from proposal"}"
    aria-label="${hidden ? "Show ownership section" : "Hide ownership section"}"
    aria-pressed="${hidden}">
    ${hidden ? EYE_OFF_SVG : EYE_OPEN_SVG}
  </button>`;
  if (hidden) {
    return `<div class="fcard fcard--muted">
      <div class="fcard__title-row">
        <div class="fcard__title" style="opacity:0.4">${esc(label)}</div>
        ${eyeBtn}
      </div>
      <p class="fcard__desc" style="opacity:0.4">Hidden from proposal.</p>
    </div>`;
  }
  return `<div class="fcard">
    <div class="fcard__title-row">
      <input class="finput finput--heading fcard__title-editable" type="text"
        value="${esc(label)}" data-terms-label="ownership" placeholder="Card title" />
      ${eyeBtn}
    </div>
    ${frow("Type", `<div class="fchips" role="group" aria-label="Ownership type">
        <label class="fchip${ownershipFull ? " fchip--on" : ""}">
          <input type="radio" class="sr-only" name="ownership" value="full" ${ownershipFull ? "checked" : ""} data-ownership />
          Client owns artwork
        </label>
        <label class="fchip${!ownershipFull ? " fchip--on" : ""}">
          <input type="radio" class="sr-only" name="ownership" value="limited" ${!ownershipFull ? "checked" : ""} data-ownership />
          Limited licence
        </label>
      </div>
      <p class="frow__hint">${ownershipFull ? "On full payment. Working files stay with you unless bought out." : "Specify usage rights and duration in the details below."}</p>`)}
    ${frow("Details", ftextarea(`data-fld="terms.ownershipText" rows="2"`, esc(ownershipRow ? ownershipRow.body : "")))}
  </div>`;
}

const LINK_KIND_OPTIONS = ["web", "instagram", "linkedin"];

function renderSignoffCard(t) {
  const links = PROPOSAL.brand.links;
  const linkIcons = links.map((l, i) => {
    const icon = LINK_ICONS[l.kind] || LINK_ICONS.web;
    return `<button type="button"
      class="fsignoff__link-toggle${l.hidden ? " fsignoff__link-toggle--off" : ""}"
      data-signoff-link-toggle="${i}"
      title="${l.hidden ? "Show" : "Hide"} ${l.label || l.kind} on proposal"
      aria-pressed="${!l.hidden}">
      ${icon}
    </button>`;
  }).join("");
  const cta = t.cta || {};
  const signMode = t.signMode || "name";
  return `<div class="fcard">
    <div class="fcard__title fcard__title--sub">Accept CTA</div>
    ${frow("Heading",    finput(`type="text" value="${esc(cta.title  || "")}" data-fld="terms.cta.title"  placeholder="Ready when you are."`))}
    ${frow("Sub-text",   finput(`type="text" value="${esc(cta.sub    || "")}" data-fld="terms.cta.sub"    placeholder="Accept below to secure your spot."`))}
    ${frow("Button",     finput(`type="text" value="${esc(cta.action || "")}" data-fld="terms.cta.action" placeholder="Accept proposal"`))}
    <div class="fcard__divider"></div>
    <div class="fcard__title fcard__title--sub">Signoff</div>
    <div class="fsignoff__name-row">
      <div class="fchips" role="group" aria-label="Signoff style">
        <button type="button" class="fchip${signMode === "name" ? " fchip--on" : ""}" data-signoff-mode="name">Name</button>
        <button type="button" class="fchip${signMode === "logo" ? " fchip--on" : ""}" data-signoff-mode="logo">Wordmark</button>
      </div>
      <div class="fsignoff__links-toggle">${linkIcons}</div>
    </div>
    ${signMode === "logo"
      ? `<div class="fsignoff__logo-row">
          ${t.signLogoSrc
            ? `<img class="fsignoff__logo-preview" src="${esc(t.signLogoSrc)}" alt="Logo preview" />
               <button type="button" class="flist__remove" data-signoff-logo-clear aria-label="Remove logo">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                 Remove
               </button>`
            : `<label class="fupload__label" title="Upload a PNG, SVG or JPEG">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                   <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                 Upload logo
                 <input type="file" accept="image/*" class="sr-only" data-signoff-logo-upload />
               </label>`
          }
        </div>`
      : finput(`type="text" value="${esc(t.sign)}" data-fld="terms.sign" placeholder="Your name" style="margin-top:0.5rem"`)
    }
  </div>`;
}

const TERMS_SUGGESTIONS = {
  doesntInclude: [
    "Stock imagery or photography",
    "Copywriting",
    "Print or production costs",
    "Third-party font licences",
    "Website development",
    "Illustration",
    "Rush fee",
    "Travel expenses",
    "Social media management",
    "Video or motion",
    "Translations",
    "Domain or hosting",
  ],
  payment: [
    { pct: "50%", note: "on signing" },
    { pct: "25%", note: "at concept approval" },
    { pct: "25%", note: "on final delivery" },
    { pct: "100%", note: "upfront" },
    { pct: "50%", note: "upfront" },
    { pct: "50%", note: "on final delivery" },
  ],
};

function renderTermsSuggest(type, current = []) {
  if (type === "doesntInclude") {
    const used = new Set(current.map(s => s.toLowerCase().trim()));
    const suggestions = TERMS_SUGGESTIONS.doesntInclude.filter(s => !used.has(s.toLowerCase().trim()));
    if (!suggestions.length) return "";
    return `<div class="fterms-suggest" data-terms-suggest-group="doesntInclude">
      <span class="fterms-suggest__label">Suggest</span>
      <div class="fterms-suggest__chips">
        ${suggestions.map(s => `<button type="button" class="fterms-suggest__chip" data-terms-suggest="doesntInclude" data-terms-suggest-val="${esc(s)}">+ ${esc(s)}</button>`).join("")}
      </div>
    </div>`;
  }
  if (type === "payment") {
    return `<div class="fterms-suggest fterms-suggest--pay" data-terms-suggest-group="payment">
      <span class="fterms-suggest__label">Templates</span>
      <div class="fterms-suggest__chips">
        <button type="button" class="fterms-suggest__chip" data-terms-suggest="payment" data-terms-suggest-val="50-50">50 / 50</button>
        <button type="button" class="fterms-suggest__chip" data-terms-suggest="payment" data-terms-suggest-val="50-25-25">50 / 25 / 25</button>
        <button type="button" class="fterms-suggest__chip" data-terms-suggest="payment" data-terms-suggest-val="100">100% upfront</button>
        <button type="button" class="fterms-suggest__chip" data-terms-suggest="payment" data-terms-suggest-val="33-33-33">3 × 33%</button>
      </div>
    </div>`;
  }
  return "";
}

const EXTRA_TERMS_LIBRARY = [
  {
    key: "Cancellation",
    body: "If you cancel after work has begun, you are invoiced for work completed to that point at the hourly rate, plus a 20% cancellation fee on the remaining unpaid balance. The deposit is non-refundable.",
  },
  {
    key: "Confidentiality",
    body: "Both parties agree to keep confidential any non-public business information shared during this project, and not to disclose it to third parties without written consent.",
  },
  {
    key: "Portfolio rights",
    body: `${PROPOSAL.brand.studio} reserves the right to show finished work in its portfolio, on the studio website, and on social media, unless you request otherwise in writing before final delivery.`,
  },
  {
    key: "Scope changes",
    body: "Any additions or changes outside the scope described in this proposal will be discussed, quoted, and agreed in writing before work begins. Verbal approvals are not binding.",
  },
  {
    key: "Feedback windows",
    body: "Feedback must be consolidated and submitted within the windows outlined in the timeline. Delayed responses may push delivery dates by the same amount.",
  },
  {
    key: "File formats",
    body: "Final files are delivered in agreed formats (PDF, PNG, SVG, etc.). Source files and working documents remain with the studio unless separately negotiated.",
  },
  {
    key: "Governing law",
    body: "This agreement is governed by the laws of Victoria, Australia. Any disputes will be resolved through negotiation first, then mediation if needed.",
  },
];

function renderExtraTermsCards(t) {
  const extras = t.extraTerms || [];
  const usedKeys = new Set(extras.map(e => e.key));
  const suggestions = EXTRA_TERMS_LIBRARY.filter(s => !usedKeys.has(s.key));

  const cards = extras.map((ex, i) => `
    <div class="fcard fcard--extra-term">
      <div class="fcard__title-row">
        <input class="finput finput--heading fcard__title-editable" type="text"
          value="${esc(ex.key)}" data-extra-term-key="${i}" placeholder="Clause name" />
        <button type="button" class="fcard__expand-btn" data-extra-term-remove="${i}" aria-label="Remove">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          Remove
        </button>
      </div>
      ${frow("Details", ftextarea(`data-extra-term-body="${i}" rows="3"`, esc(ex.body)))}
    </div>`).join("");

  const suggestChips = suggestions.length ? `
    <div class="fterms-add-wrap">
      <span class="fterms-add-label">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        Add a clause
      </span>
      <div class="fterms-add-chips">
        ${suggestions.map(s => `<button type="button" class="fterms-add-chip" data-extra-term-add="${esc(s.key)}">${esc(s.key)}</button>`).join("")}
        <button type="button" class="fterms-add-chip fterms-add-chip--custom" data-extra-term-add-custom>+ Custom</button>
      </div>
    </div>` : "";

  return cards + suggestChips;
}

const GRIP_SVG = `<svg width="10" height="14" viewBox="0 0 10 14" fill="none" aria-hidden="true">
  <circle cx="3" cy="2.5" r="1" fill="currentColor"/><circle cx="7" cy="2.5" r="1" fill="currentColor"/>
  <circle cx="3" cy="7"   r="1" fill="currentColor"/><circle cx="7" cy="7"   r="1" fill="currentColor"/>
  <circle cx="3" cy="11.5" r="1" fill="currentColor"/><circle cx="7" cy="11.5" r="1" fill="currentColor"/>
</svg>`;

function termsCardWrap(key, html) {
  return `<div class="fterms-card-wrap" draggable="true" data-terms-card="${key}">
    <button type="button" class="fcard__grip" aria-label="Drag to reorder">${GRIP_SVG}</button>
    ${html}
  </div>`;
}

function renderTermsBaseCard(key, t) {
  const payRow       = t.rows.find(r => r.key === "Payment");
  const revisRow     = t.rows.find(r => r.key === "Revisions");
  const ownershipRow = t.rows.find(r => r.key === "Ownership");
  const timelineRow  = t.rows.find(r => r.key === "Timeline");
  const ownershipFull = t.ownershipFull !== false;
  const extraRate    = t.extraRevisionRate || 160;
  const labels       = t.cardLabels || {};

  // Helper: builds the `titleInput` attrs string for fcard()
  const ti = (k) => `data-terms-label="${k}" placeholder="Card title"`;

  switch (key) {
    case "payment":
      return termsCardWrap("payment", fcard(esc(labels.payment || "Payment"),
        `<div class="fpayment" data-fpayment>
          ${payRow && payRow.schedule ? payRow.schedule.map((s, i) => `
            <div class="fpayment-row" data-pay-idx="${i}">
              ${finput(`type="text" value="${esc(s.pct)}" data-pay-pct="${i}" style="width:60px" placeholder="%"`)}
              ${finput(`type="text" value="${esc(s.note)}" data-pay-note="${i}" placeholder="on signature, books research…"`)}
              <button type="button" class="flist__remove" data-pay-remove="${i}" aria-label="Remove milestone">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              </button>
            </div>`).join("") : ""}
          <button type="button" class="flist__add flist__add--sm" data-pay-add>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            Add payment milestone
          </button>
        </div>
        ${renderTermsSuggest("payment")}`,
        { titleInput: ti("payment") }
      ));
    case "doesntInclude":
      return termsCardWrap("doesntInclude", fcard(esc(labels.doesntInclude || "Doesn\u2019t include"),
        `<div class="flist" data-flist="terms.doesntInclude">
          ${t.doesntInclude.map((item, i) => `
            <div class="flist__row" data-flist-idx="${i}">
              <span class="flist__bullet" aria-hidden="true">·</span>
              <input class="finput" type="text" value="${esc(item)}"
                data-flist-item="terms.doesntInclude" data-flist-idx="${i}" />
              <button type="button" class="flist__remove" data-flist-remove="terms.doesntInclude:${i}" aria-label="Remove">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              </button>
            </div>`).join("")}
          <button type="button" class="flist__add" data-flist-add="terms.doesntInclude">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            Add item
          </button>
        </div>
        ${renderTermsSuggest("doesntInclude", t.doesntInclude)}`,
        { titleInput: ti("doesntInclude") }
      ));
    case "revisions":
      return termsCardWrap("revisions", fcard(esc(labels.revisions || "Revisions"),
        frow("Rate for extra rounds", `<div class="finline">
          <span class="finline__currency">${PROPOSAL.scope.currency}</span>
          ${finput(`type="number" value="${extraRate}" data-fld="terms.extraRevisionRate" min="0" step="10" style="width:80px"`)}
          <span class="finline__unit">/ hr ex. GST</span>
        </div>`) +
        frow("Details", ftextarea(`data-fld="terms.revisionsText" rows="2"`, esc(revisRow ? revisRow.body : ""))),
        { titleInput: ti("revisions") }
      ));
    case "ownership":
      return termsCardWrap("ownership", renderOwnershipCard(ownershipFull, ownershipRow, labels.ownership || "Ownership"));
    case "timeline":
      return termsCardWrap("timeline", fcard(esc(labels.timeline || "Timeline"),
        frow("Details", ftextarea(`data-fld="terms.timelineText" rows="2"`, esc(timelineRow ? timelineRow.body : ""))),
        { titleInput: ti("timeline") }
      ));
    default:
      return "";
  }
}

function renderFormTerms() {
  const t = PROPOSAL.terms;
  const fullTermsRow = t.rows.find(r => r.key === "Full terms");
  const order = t.cardOrder || ["payment", "doesntInclude", "revisions", "ownership", "timeline"];

  return fsec("terms", "05 · Terms", "Terms",
    `<div class="fterms-sortable">
      ${order.map(key => renderTermsBaseCard(key, t)).join("")}
    </div>` +
    renderExtraTermsCards(t) +
    renderFullTermsCard(fullTermsRow, t) +
    renderSignoffCard(t)
  );
}

const RECOMMENDED_TERMS = `1. Scope
Work is limited to what's described in this proposal. Any additions or changes outside that scope can be discussed and priced separately.

2. Payment
A 50% deposit is due on signing to begin work. The balance is invoiced on final delivery and due within 14 days. Late payments beyond 14 days may incur interest at 2% per month.

3. Revisions
This proposal includes the revision rounds specified in the Scope section. Additional rounds are billed at the hourly rate listed in the Terms section. Revision requests must be consolidated and submitted within the feedback windows outlined in the timeline.

4. Intellectual property
All intellectual property in the final delivered files transfers to you in full on receipt of final payment. Until then, all work remains the property of ${PROPOSAL.brand.studio}. Working files, source documents, and unused concepts remain with ${PROPOSAL.brand.studio} unless separately agreed.

5. Portfolio rights
${PROPOSAL.brand.studio} reserves the right to show finished work in portfolio, on the studio website, and on social media, unless you request otherwise in writing before delivery.

6. Timeline
The schedule is contingent on timely feedback within the windows specified. Delays on your end may shift the delivery date by the same amount. ${PROPOSAL.brand.studio} will flag any schedule risks as early as possible.

7. Cancellation
If you cancel after work has begun, you are invoiced for work completed to that point at the hourly rate, plus a 20% cancellation fee on the remaining unpaid balance. The deposit is non-refundable.

8. Confidentiality
Both parties agree to keep confidential any non-public business information shared during this project.

9. Governing law
This agreement is governed by the laws of Victoria, Australia. Any disputes will be resolved in the courts of Victoria.`;

function renderFullTermsCard(row, t) {
  const body = t.fullTermsBody || "";
  return `<div class="fcard">
    <div class="fcard__title-row">
      <div class="fcard__title">Full terms</div>
    </div>
    <p class="fcard__desc">Paste in your T&amp;Cs — clients can expand or collapse them on the proposal.</p>
    ${ftextarea(`data-fld="terms.fullTermsBody" rows="12" placeholder="Paste your full terms and conditions here…"`, esc(body))}
    <label class="fcheck fcheck--mt">
      <input type="checkbox" ${t.fullTermsCollapsed ? "checked" : ""} data-fld-checkbox="terms.fullTermsCollapsed" />
      <span>Start collapsed on client view</span>
    </label>
  </div>`;
}

// ── Form view master ──────────────────────────────────────────

function renderFormView() {
  return `<div class="fview" id="fview">
    ${renderFormCover()}
    ${renderFormOverview()}
    ${renderFormScope()}
    ${renderFormPricing()}
    ${renderFormAbout()}
    ${renderFormTerms()}
  </div>`;
}

function renderEstimateHoursCard(s) {
  const revisEntry = s.includes.find(i => /revision/i.test(i.label));
  const revisCount = Number(revisEntry && revisEntry.num) || 0;
  const callSlots  = s.callSlots || [];
  const callCount  = callSlots.reduce((n, sl) => n + (Number(sl.count) || 0), 0);
  const callMins   = callSlots[0] ? (Number(callSlots[0].mins) || 60) : 60;
  const callHint   = callCount ? `${callCount} × ${callMins} min` : "from your scope";
  const revisHint  = revisCount ? `${revisCount} round${revisCount !== 1 ? "s" : ""} in scope` : "from your scope";

  const mainStages    = HELPER_STAGES.filter(st => HELPER_MAIN_KEYS.includes(st.key));
  const supportStages = HELPER_STAGES.filter(st => HELPER_SUPPORT_KEYS.includes(st.key));

  const stageRow = (st, hint) =>
    frow(st.name, `<div class="finline">
      ${finput(`type="number" value="${st.hours || ""}" data-est-stage="${st.key}" min="0" style="width:70px" placeholder="0"`)}
      <span class="finline__unit">hrs</span>
    </div>`, { sub: hint || st.weeks || "" });

  return fcard("Milestones",
    `<div class="frows">
      ${mainStages.map(st => stageRow(st)).join("")}
    </div>
    <div class="est-support-divider">
      <span>Support &amp; overhead</span>
    </div>
    <div class="frows">
      ${stageRow(supportStages.find(st => st.key === "calls"),    callHint)}
      ${stageRow(supportStages.find(st => st.key === "revisions"), revisHint)}
    </div>`
  );
}

function estImpliedBlock(lineTotal, rate, weeklyCapacity, currency) {
  const impliedHrs   = rate > 0 ? Math.round(lineTotal / rate) : 0;
  const impliedWeeks = weeklyCapacity > 0 ? +(impliedHrs / weeklyCapacity).toFixed(1) : 0;
  return `<div class="est-implied" data-est-implied>
    <div class="est-implied__row">
      <span class="est-implied__label">Proposed price</span>
      <span class="est-implied__val" data-est-line-total>${formatMoney(lineTotal, currency)}</span>
    </div>
    <div class="est-implied__chain">
      <span data-est-implied-hrs>${impliedHrs} hrs</span>
      <span class="est-implied__sep">at ${currency}${rate}/hr</span>
      <span data-est-implied-weeks>${impliedWeeks} wks</span>
      <span class="est-implied__sep">at ${weeklyCapacity} hrs/wk</span>
    </div>
  </div>`;
}

function mountEstimatePanel() {
  const body = $("#estimatePanelBody");
  if (!body) return;
  const s = PROPOSAL.scope;
  const rate = s.hourlyRate || 160;
  const capacity = s.weeklyCapacity || 30;
  const hoursTotal = HELPER_STAGES.reduce((sum, st) => sum + st.hours, 0);
  const lineTotal  = s.lineItems.reduce((sum, li) => sum + li.qty * li.rate, 0);
  const rateTotal  = hoursTotal * rate;
  const diff       = lineTotal - rateTotal;
  const diffClass  = diff > 1000 ? " est-row--over" : diff < -1000 ? " est-row--under" : " est-row--flat";

  body.innerHTML =
    `<p class="estimate-panel__hint">Sense-check your quote and plan your timeline. Only you see this — not shown to the client.</p>` +
    fcard("Rate card",
      frow("Hourly rate", `<div class="finline">
        <span class="finline__currency">${s.currency}</span>
        ${finput(`type="number" value="${rate}" data-fld="scope.hourlyRate" min="0" step="5" style="width:80px"`)}
        <span class="finline__unit">/ hr ex. GST</span>
      </div>`) +
      frow("Weekly capacity", `<div class="finline">
        ${finput(`type="number" value="${capacity}" data-fld="scope.weeklyCapacity" min="1" max="80" style="width:80px"`)}
        <span class="finline__unit">hrs / week</span>
      </div>`) +
      estImpliedBlock(lineTotal, rate, capacity, s.currency),
      { blue: true }
    ) +
    renderEstimateHoursCard(s) +
    `<div class="est-result" data-est-result>
      <div class="est-row"><span>Total planned hrs</span><strong data-est-hours>${hoursTotal} hrs</strong></div>
      <div class="est-row"><span>Quoted value</span><strong data-est-rate-total>${formatMoney(rateTotal, s.currency)}</strong></div>
      <div class="est-row est-row--sep${diffClass}" data-est-diff-row>
        <span>vs. proposed</span>
        <span data-est-diff>${diff >= 0 ? "+" : ""}${formatMoney(diff, s.currency)}</span>
      </div>
    </div>` +
    fcard("Start date",
      frow("Starts on", finput(`type="text" value="${esc(s.dates.start)}" data-fld="scope.dates.start" data-est-start`)) +
      frow("Sign by",   finput(`type="text" value="${esc(s.dates.signBy)}" data-fld="scope.dates.signBy"`)) +
      frow("Total duration", `<div class="finline">
        ${finput(`type="number" value="${parseFloat((s.includes.find(i => /weeks?$/i.test((i.label||"").trim()))||{}).num)||8}" data-fld="scope.totalDuration" min="1" max="52" style="width:70px"`)}
        <span class="finline__unit">weeks</span>
      </div>`) +
      frow("Estimated finish", `<span class="fcomputed" data-est-finish>${esc(s.dates.finish)}</span>
        <span class="fcomputed__hint">calculated from start + weeks</span>`) +
      frow("Dates to consider", `
        <div class="est-milestones" data-est-milestones>
          ${(s.dates.milestones || []).map((m, i) => `
            <div class="est-milestone">
              <input class="finput" type="text" value="${esc(m.date)}" placeholder="Date" data-est-ms-date="${i}" style="width:110px" />
              <input class="finput" type="text" value="${esc(m.note)}" placeholder="e.g. collateral needed for launch" data-est-ms-note="${i}" style="flex:1" />
              <button type="button" class="flist__remove" data-est-ms-remove="${i}" aria-label="Remove">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              </button>
            </div>`).join("")}
          <button type="button" class="flist__add flist__add--sm" data-est-ms-add>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            Add date
          </button>
        </div>`) +
      frow("Client deadline", finput(`type="text" value="${esc(s.dates.clientDeadline || "")}" data-fld="scope.dates.clientDeadline" data-est-deadline placeholder="e.g. 29 Jun 2026"`)) +
      `<div class="est-deadline-flag" data-est-deadline-flag style="display:none"></div>`
    );
}

function openEstimatePanel() {
  const panel = $("#estimatePanel");
  if (!panel) return;
  mountEstimatePanel();
  panel.hidden = false;
  requestAnimationFrame(() => panel.classList.add("estimate-panel--open"));
  document.body.style.overflow = "hidden";
}

function closeEstimatePanel() {
  const panel = $("#estimatePanel");
  if (!panel) return;
  panel.classList.remove("estimate-panel--open");
  panel.addEventListener("transitionend", () => { panel.hidden = true; }, { once: true });
  document.body.style.overflow = "";
}

function wireEstimatePanel() {
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-rail-settings-toggle]")) {
      state.settingsOpen = !state.settingsOpen;
      $("#rail").innerHTML = renderRail();
      wireRail();
      return;
    }
    if (e.target.closest("[data-rail-pricing-toggle]") && !e.target.closest("[data-rail-pricing-toggle-format]")) {
      state.pricingOpen = !state.pricingOpen;
      $("#rail").innerHTML = renderRail();
      wireRail();
      return;
    }
    const railPricingFormat = e.target.closest("[data-rail-pricing-toggle-format]");
    if (railPricingFormat) {
      const fid = railPricingFormat.dataset.railPricingToggleFormat;
      if (state.hiddenBlocks.has(fid)) state.hiddenBlocks.delete(fid);
      else state.hiddenBlocks.add(fid);
      $("#rail").innerHTML = renderRail();
      wireRail();
      rerenderFormSection("pricing");
      scheduleCanvasRefresh();
      return;
    }
    const headingStyleBtn = e.target.closest("[data-heading-style]");
    if (headingStyleBtn) {
      const style = headingStyleBtn.dataset.headingStyle;
      PROPOSAL.brand.headingStyle = style;
      const { fonts } = PROPOSAL.brand;
      const headingFont = style === "sans"
        ? `'${fonts.sans}', sans-serif`
        : `'${fonts.serif}', serif`;
      const bs = document.querySelector(".brand-scope");
      if (bs) {
        bs.style.setProperty("--brand-serif", headingFont);
        bs.setAttribute("data-heading-style", style);
      }
      $("#rail").innerHTML = renderRail();
      wireRail();
      return;
    }
    if (e.target.closest("[data-rail-design-toggle]")) {
      state.designOpen = !state.designOpen;
      $("#rail").innerHTML = renderRail();
      wireRail();
      return;
    }
    if (e.target.closest("[data-rail-context-toggle]")) {
      state.contextOpen = !state.contextOpen;
      $("#rail").innerHTML = renderRail();
      wireRail();
      return;
    }

    // Section visibility toggle (detailed / simplified / hidden)
    const secVizBtn = e.target.closest("[data-sec-viz]");
    if (secVizBtn) {
      const [id, viz] = secVizBtn.dataset.secViz.split(":");
      state.sectionVisibility[id] = viz;
      applyVizStates();
      $("#rail").innerHTML = renderRail();
      wireRail();
      return;
    }
    if (e.target.closest("#estimateTrigger") || e.target.closest("#railEstimateTrigger")) {
      const inlinePanel = document.querySelector(".fsec-panel--scope");
      if (inlinePanel) {
        // Navigate to scope section first, then highlight the panel
        const scopeSection = document.getElementById("form-section-scope");
        if (scopeSection && state.activeSection !== "scope") {
          state.activeSection = "scope";
          rerenderFormSection("scope");
        }
        setTimeout(() => {
          const p = document.querySelector(".fsec-panel--scope");
          if (p) {
            p.scrollIntoView({ behavior: "smooth", block: "start" });
            p.classList.add("fsec-panel--flash");
            p.addEventListener("animationend", () => p.classList.remove("fsec-panel--flash"), { once: true });
          }
        }, 80);
      } else {
        openEstimatePanel();
      }
    }
    if (e.target.closest("#estimatePanelClose") || e.target.closest("#estimatePanelBackdrop")) {
      closeEstimatePanel();
    }
  });
  // Wire inputs inside the panel via the existing formCanvas delegation
  // by attaching a parallel listener on the panel body
  const panelBody = $("#estimatePanelBody");
  if (panelBody) {
    $("#estimatePanel").addEventListener("input", (e) => {
      const t = e.target;
      if (t.dataset.fld) {
        const path = t.dataset.fld;
        if (path === "scope.hourlyRate")     { PROPOSAL.scope.hourlyRate = Number(t.value) || 160; recalcEstimateDisplay(); scheduleCanvasRefresh(); }
        if (path === "scope.weeklyCapacity") { PROPOSAL.scope.weeklyCapacity = Number(t.value) || 30; recalcEstimateDisplay(); scheduleCanvasRefresh(); }
        if (path === "scope.dates.start")         { setFieldValue(path, t.value); recalcEstimateDisplay(); scheduleCanvasRefresh(); }
        if (path === "scope.dates.signBy")        { setFieldValue(path, t.value); scheduleCanvasRefresh(); }
        if (path === "scope.dates.clientDeadline"){ setFieldValue(path, t.value); recalcEstimateDisplay(); }
        if (path === "scope.totalDuration")       { updateIncludesEntry(/weeks?$/i, t.value); recalcEstimateDisplay(); scheduleCanvasRefresh(); }
      }
      if (t.dataset.estStage) {
        const st = HELPER_STAGES.find(s => s.key === t.dataset.estStage);
        if (st) { st.hours = Number(t.value) || 0; recalcEstimateDisplay(); scheduleCanvasRefresh(); }
      }
      if (t.dataset.estMsDate !== undefined) {
        const i = Number(t.dataset.estMsDate);
        if (PROPOSAL.scope.dates.milestones[i]) PROPOSAL.scope.dates.milestones[i].date = t.value;
      }
      if (t.dataset.estMsNote !== undefined) {
        const i = Number(t.dataset.estMsNote);
        if (PROPOSAL.scope.dates.milestones[i]) PROPOSAL.scope.dates.milestones[i].note = t.value;
      }
    });

    $("#estimatePanel").addEventListener("click", (e) => {
      if (e.target.closest("[data-est-ms-add]")) {
        if (!PROPOSAL.scope.dates.milestones) PROPOSAL.scope.dates.milestones = [];
        PROPOSAL.scope.dates.milestones.push({ date: "", note: "" });
        mountEstimatePanel();
        return;
      }
      const msRemove = e.target.closest("[data-est-ms-remove]");
      if (msRemove) {
        const i = Number(msRemove.dataset.estMsRemove);
        PROPOSAL.scope.dates.milestones.splice(i, 1);
        mountEstimatePanel();
      }
    });
  }
}

function mountFormView() {
  const fc = $("#formCanvas");
  if (!fc) return;
  fc.innerHTML = renderFormView();
  wireFormView();
  wireTermsSortable();
  wireScrollSpy(); // attach form section observer after DOM is ready
}

// ── Deferred canvas refresh (form edits → canvas) ─────────────
let _canvasRefreshTimer = null;
function scheduleCanvasRefresh() {
  clearTimeout(_canvasRefreshTimer);
  _canvasRefreshTimer = setTimeout(() => {
    const canvas = $("#canvas");
    if (!canvas) return;
    canvas.innerHTML =
      renderCover() + renderOverview() + renderScope() +
      renderPricing() + renderAbout() + renderTerms();
    wireAffordances(); wireAddOns(); wireLineItems();
    wireCaseThumbs(); wireExtras(); wireTiers();
    wireBlockHide(); wireScrollSpy(); tagEditable();
    applyVizStates();
  }, 600);
}

// ── Set a dotted-path value on PROPOSAL ──────────────────────
function setFieldValue(path, value) {
  const parts = path.split(".");
  let obj = PROPOSAL;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = /^\d+$/.test(parts[i]) ? Number(parts[i]) : parts[i];
    if (obj[key] == null) return;
    obj = obj[key];
  }
  const last = /^\d+$/.test(parts[parts.length - 1])
    ? Number(parts[parts.length - 1])
    : parts[parts.length - 1];
  obj[last] = value;
}

function updateIncludesEntry(regex, value) {
  const entry = PROPOSAL.scope.includes.find(i => regex.test(String(i.label || "")));
  if (entry) entry.num = String(value);
}

// ── Re-render a single form section ──────────────────────────
// Re-render just the inline scope panel (without touching the main form section)
function rerenderScopePanel() {
  const panel = document.querySelector(".fsec-panel--scope");
  if (!panel) return;
  const tmp = document.createElement("template");
  tmp.innerHTML = renderInlineScopePanel(PROPOSAL.scope);
  panel.replaceWith(tmp.content.firstElementChild);
  stampEmptyInputs(document.getElementById("formCanvas") || document);
}

function rerenderFormSection(id) {
  const fc = $("#formCanvas");
  if (!fc) return;
  const el = fc.querySelector(`#form-section-${id}`);
  if (!el) return;
  // If the section lives inside a panel wrapper, replace the whole wrapper
  // so the inline side-panel is also refreshed alongside the section.
  const root = el.closest(".fsec-with-panel") || el;
  const renderers = {
    cover:    renderFormCover,
    overview: renderFormOverview,
    scope:    renderFormScope,
    pricing:  renderFormPricing,
    about:    renderFormAbout,
    terms:    renderFormTerms,
  };
  if (renderers[id]) {
    root.outerHTML = renderers[id]();
    autoResizeTextareas(fc);
    stampEmptyInputs(fc);
    if (id === "terms") wireTermsSortable();
  }
}

// ── Estimate recalculation ────────────────────────────────────
function derivedCallCount(hoursStr, durationMins) {
  const hrs  = parseFloat(hoursStr) || 0;
  const mins = Number(durationMins) || 60;
  if (!hrs || !mins) return "—";
  const n = Math.round((hrs * 60) / mins);
  return `= ${n} call${n === 1 ? "" : "s"}`;
}

function recalcCallsDerived() {
  const el = document.getElementById("calls-derived");
  if (!el) return;
  const s = PROPOSAL.scope;
  const callsEntry = (s.includes || []).find(x => /calls/i.test(x.label));
  el.textContent = derivedCallCount(callsEntry ? callsEntry.num : "3", s.callDurationMins || 60);
}

function recalcEstimateDisplay() {
  const fc = $("#formCanvas");
  if (!fc) return;
  const s        = PROPOSAL.scope;
  const rate     = Number(s.hourlyRate) || 160;
  const capacity = Number(s.weeklyCapacity) || 30;

  // Auto-sync calls hours from call slots
  const callSlots   = s.callSlots || [];
  const callCount   = callSlots.reduce((n, sl) => n + (Number(sl.count) || 0), 0);
  const callMins    = callSlots[0] ? (Number(callSlots[0].mins) || 60) : 60;
  const callsHrsAuto = +(callCount * callMins / 60).toFixed(1);
  const callStage = HELPER_STAGES.find(st => st.key === "calls");
  if (callStage) callStage.hours = callsHrsAuto;

  const stageHours  = HELPER_STAGES.reduce((n, st) => n + st.hours, 0);
  const customHours = (s.customCosts || []).reduce((sum, c) => sum + (Number(c.hours) || 0), 0);
  const hoursTotal  = stageHours + customHours;
  const rateTotal   = hoursTotal * rate;
  const impliedWeeksFromHours = capacity > 0 && hoursTotal > 0 ? +(hoursTotal / capacity).toFixed(1) : 0;

  // Legacy line-items diff (used by old modal panel still)
  const lineTotal  = s.lineItems.reduce((sum, li) => sum + li.qty * li.rate, 0);
  const diff       = lineTotal - rateTotal;

  // Update ALL matching elements document-wide
  const qsa = (sel, fn) => document.querySelectorAll(sel).forEach(fn);
  // Show/hide calc-results block based on whether any hours have been entered
  qsa("[data-calc-results]", el => { el.style.display = hoursTotal > 0 ? "" : "none"; });
  qsa("[data-est-hours]",      el => el.textContent = `${hoursTotal} hrs`);
  qsa("[data-est-rate-total]", el => el.textContent = formatMoney(rateTotal, s.currency));
  qsa("[data-est-diff]",       el => el.textContent = `${diff >= 0 ? "+" : ""}${formatMoney(diff, s.currency)}`);
  qsa("[data-est-diff-row]",   el => {
    el.classList.remove("est-row--over", "est-row--under", "est-row--flat");
    el.classList.add(diff > 1000 ? "est-row--over" : diff < -1000 ? "est-row--under" : "est-row--flat");
  });

  // Update panel calls read-only display
  qsa("[data-calc-calls-hrs]", el => el.textContent = `= ${callsHrsAuto} hrs`);

  // Update tally milestone total (live as user types stage hours)
  const milestoneHrsLive = HELPER_STAGES
    .filter(st => HELPER_MAIN_KEYS.includes(st.key))
    .reduce((sum, st) => sum + st.hours, 0);
  qsa("[data-tally-milestone]", el => el.textContent = `${milestoneHrsLive} hrs`);

  // Update implied weeks in calc-results
  qsa("[data-calc-weeks]", el => {
    el.textContent = hoursTotal > 0 ? `${impliedWeeksFromHours} wks at ${capacity} hrs/wk` : "—";
  });

  // Estimated hours → implied fee + overrun indicator
  const targetHours = Number(s.targetHours) || 0;
  const impliedFee  = targetHours > 0 ? targetHours * rate : 0;
  qsa("[data-calc-target-implies]", el => {
    el.innerHTML = targetHours > 0
      ? `= ${s.currency}${impliedFee.toLocaleString()} at ${s.currency}${rate}/hr`
      : `<span class="calc-target__implies-empty">= ${s.currency}0</span>`;
  });
  qsa("[data-tally-est]", el => {
    el.innerHTML = targetHours > 0
      ? `${targetHours} hrs`
      : `<span class="calc-tally__empty">not set</span>`;
  });
  qsa("[data-calc-badge]", el => {
    const tallyDiff = targetHours - milestoneHrsLive;
    el.style.visibility = targetHours > 0 ? "" : "hidden";
    el.className = `calc-badge ${tallyDiff >= 0 ? "calc-badge--ok" : "calc-badge--over"}`;
    el.innerHTML = tallyDiff >= 0
      ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ${tallyDiff} hrs left for support`
      : `<svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 9v4M12 17h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/></svg> Over by ${Math.abs(tallyDiff)} hrs — ${milestoneHrsLive} hrs = ${s.currency}${(milestoneHrsLive * rate).toLocaleString()}`;
  });
  // Overrun row in calc-results
  qsa("[data-calc-overrun]", el => {
    const diff = hoursTotal - targetHours;
    if (targetHours === 0) {
      el.className = "calc-result-row calc-result-row--muted";
      el.innerHTML = "<span>vs estimate</span><span>—</span>";
    } else if (diff === 0) {
      el.className = "calc-result-row calc-overrun calc-overrun--ok";
      el.innerHTML = "<span>vs estimate</span><span>On target</span>";
    } else if (diff > 0) {
      el.className = "calc-result-row calc-overrun calc-overrun--over";
      el.innerHTML = `<span>vs estimate</span><span><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ${diff} hrs over</span>`;
    } else {
      el.className = "calc-result-row calc-overrun calc-overrun--under";
      el.innerHTML = `<span>vs estimate</span><span><svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> ${Math.abs(diff)} hrs free</span>`;
    }
  });

  // Legacy: Update implied breakdown for old rate card style
  const impliedHrs   = rate > 0 ? Math.round(lineTotal / rate) : 0;
  const impliedWeeks = capacity > 0 ? +(impliedHrs / capacity).toFixed(1) : 0;
  qsa("[data-est-line-total]",    el => el.textContent = formatMoney(lineTotal, s.currency));
  qsa("[data-est-implied-hrs]",   el => el.textContent = `${impliedHrs} hrs`);
  qsa("[data-est-implied-weeks]", el => el.textContent = `${impliedWeeks} wks`);
  // Auto-calc finish from start + total weeks + feedback buffer (main form)
  {
    const weeksEntry = PROPOSAL.scope.includes.find(i => /weeks?$/i.test((i.label || "").trim()));
    const weeks  = parseFloat((weeksEntry || {}).num) || 0;
    const buffer = parseInt(PROPOSAL.scope.feedbackBufferDays) || 0;
    const finish = calcFinishDate(PROPOSAL.scope.dates.start, weeks, buffer);
    if (finish) {
      PROPOSAL.scope.dates.finish = finish;
      // Update the main form finish input
      const autoFinishInput = fc.querySelector('[data-auto-finish]');
      if (autoFinishInput) autoFinishInput.value = finish;
      // Update old-style modal panel finish display
      const finishEl = document.querySelector("[data-est-finish]");
      if (finishEl) finishEl.textContent = finish;
    }
  }

  const finishEl = document.querySelector("[data-est-finish]");

  // Legacy: Recalc finish from start + total weeks (modal panel)
  if (finishEl) {
    const weeksEntry = PROPOSAL.scope.includes.find(i => /weeks?$/i.test((i.label || "").trim()));
    const weeks = parseFloat((weeksEntry || {}).num) || 8;
    const finish = addWeeksToDateStr(PROPOSAL.scope.dates.start, weeks);
    if (finish) {
      PROPOSAL.scope.dates.finish = finish;
      finishEl.textContent = finish;
      const finishInput = fc.querySelector('[data-fld="scope.dates.finish"]');
      if (finishInput) finishInput.value = finish;

      // Check against client deadline
      const flagEl = document.querySelector("[data-est-deadline-flag]");
      const deadlineStr = PROPOSAL.scope.dates.clientDeadline || "";
      if (flagEl && deadlineStr.trim()) {
        const cleanFinish = finish.replace(/^[A-Za-z]+\s+/, "");
        const cleanDeadline = deadlineStr.replace(/^[A-Za-z]+\s+/, "");
        const finishDate = new Date(cleanFinish);
        const deadlineDate = new Date(cleanDeadline);
        if (!isNaN(finishDate) && !isNaN(deadlineDate)) {
          if (finishDate > deadlineDate) {
            const overDays = Math.round((finishDate - deadlineDate) / 86400000);
            flagEl.innerHTML = `
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
                <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              Finish is <strong>${overDays} day${overDays === 1 ? "" : "s"} over</strong> the client deadline`;
            flagEl.className = "est-deadline-flag est-deadline-flag--over";
            flagEl.style.display = "";
          } else {
            const underDays = Math.round((deadlineDate - finishDate) / 86400000);
            flagEl.innerHTML = `
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              On track — <strong>${underDays} day${underDays === 1 ? "" : "s"} to spare</strong>`;
            flagEl.className = "est-deadline-flag est-deadline-flag--ok";
            flagEl.style.display = "";
          }
        } else {
          flagEl.style.display = "none";
        }
      } else if (flagEl) {
        flagEl.style.display = "none";
      }
    }
  }
}

function addWeeksToDateStr(dateStr, weeks) {
  if (!dateStr) return null;
  const cleaned = dateStr.replace(/^[A-Za-z]+\s+/, "");
  try {
    const d = new Date(cleaned);
    if (isNaN(d)) return null;
    d.setDate(d.getDate() + Math.round(weeks) * 7);
    while (d.getDay() !== 1) d.setDate(d.getDate() + 1);
    return new Intl.DateTimeFormat("en-AU", {
      weekday: "short", day: "numeric", month: "short", year: "numeric",
    }).format(d);
  } catch (_) { return null; }
}

// Add N working days to a date string, skipping weekends
function addWorkingDaysToDateStr(dateStr, workingDays) {
  if (!dateStr || !workingDays) return null;
  const cleaned = dateStr.replace(/^[A-Za-z]+\s+/, "");
  try {
    const d = new Date(cleaned);
    if (isNaN(d)) return null;
    let remaining = Math.round(workingDays);
    while (remaining > 0) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0 && d.getDay() !== 6) remaining--;
    }
    return new Intl.DateTimeFormat("en-AU", {
      weekday: "short", day: "numeric", month: "short", year: "numeric",
    }).format(d);
  } catch (_) { return null; }
}

// Calculate finish date from start + project weeks + feedback buffer working days
function calcFinishDate(startStr, totalWeeks, feedbackBufferDays) {
  if (!startStr) return null;
  const afterProject = addWeeksToDateStr(startStr, totalWeeks || 0);
  if (!afterProject) return null;
  const bufferDays = parseInt(feedbackBufferDays) || 0;
  if (bufferDays <= 0) return afterProject;
  return addWorkingDaysToDateStr(afterProject, bufferDays) || afterProject;
}

// ── Wire form view interactions ───────────────────────────────
function autoResizeTextareas(root = document) {
  root.querySelectorAll("textarea.finput--ta").forEach(ta => {
    ta.style.height = "auto";
    ta.style.height = ta.scrollHeight + "px";
  });
}

function stampEmptyInputs(root = document) {
  root.querySelectorAll("input.finput, textarea.finput--ta").forEach(el => {
    el.toggleAttribute("data-empty", el.value === "" || el.value == null);
  });
}

function wireTermsSortable() {
  const container = document.querySelector(".fterms-sortable");
  if (!container) return;

  let dragKey = null;
  let dragEl  = null;

  container.addEventListener("dragstart", (e) => {
    const wrap = e.target.closest("[data-terms-card]");
    if (!wrap) return;
    dragKey = wrap.dataset.termsCard;
    dragEl  = wrap;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", dragKey);
    requestAnimationFrame(() => wrap.classList.add("fterms-card--dragging"));
  });

  container.addEventListener("dragend", () => {
    if (dragEl) dragEl.classList.remove("fterms-card--dragging");
    container.querySelectorAll(".fterms-card--over").forEach(el => el.classList.remove("fterms-card--over"));
    dragKey = null;
    dragEl  = null;
  });

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const wrap = e.target.closest("[data-terms-card]");
    container.querySelectorAll(".fterms-card--over").forEach(el => el.classList.remove("fterms-card--over"));
    if (wrap && wrap !== dragEl) wrap.classList.add("fterms-card--over");
  });

  container.addEventListener("drop", (e) => {
    e.preventDefault();
    const targetWrap = e.target.closest("[data-terms-card]");
    if (!targetWrap || !dragKey || targetWrap.dataset.termsCard === dragKey) return;

    const order = [...(PROPOSAL.terms.cardOrder || ["payment", "doesntInclude", "revisions", "ownership", "timeline"])];
    const fromIdx = order.indexOf(dragKey);
    const toIdx   = order.indexOf(targetWrap.dataset.termsCard);
    if (fromIdx === -1 || toIdx === -1) return;

    order.splice(fromIdx, 1);
    order.splice(toIdx, 0, dragKey);
    PROPOSAL.terms.cardOrder = order;
    rerenderFormSection("terms");
    wireTermsSortable();
  });
}

function wireFormView() {
  const fc = $("#formCanvas");
  if (!fc || fc.dataset.wired === "true") return;
  fc.dataset.wired = "true";
  autoResizeTextareas(fc);
  stampEmptyInputs(fc);

  // ── input: sync to PROPOSAL ──────────────────────────────────
  fc.addEventListener("input", (e) => {
    const t = e.target;

    // Auto-resize textareas (fallback for browsers without field-sizing: content)
    if (t.tagName === "TEXTAREA" && t.classList.contains("finput--ta")) {
      t.style.height = "auto";
      t.style.height = t.scrollHeight + "px";
    }

    // Keep empty-state indicator in sync
    if (t.classList.contains("finput")) {
      t.toggleAttribute("data-empty", t.value === "");
    }

    // Generic dotted-path binding
    if (t.dataset.fld) {
      const path = t.dataset.fld;

      if (path === "overview.audience.active") {
        const varIdx = state.variantIdx["overview.audience"] || 0;
        PROPOSAL.overview.audience.variants[varIdx] = t.value;
      } else if (path === "about.bio.active") {
        PROPOSAL.about.bio.variants[state.variantIdx["about.bio"] || 0] = t.value;
      } else if (path === "terms.revisionsText") {
        const r = PROPOSAL.terms.rows.find(row => row.key === "Revisions");
        if (r) r.body = t.value;
      } else if (path === "terms.ownershipText") {
        const r = PROPOSAL.terms.rows.find(row => row.key === "Ownership");
        if (r) r.body = t.value;
      } else if (path === "terms.timelineText") {
        const r = PROPOSAL.terms.rows.find(row => row.key === "Timeline");
        if (r) r.body = t.value;
      } else if (path === "terms.fullTermsBody") {
        PROPOSAL.terms.fullTermsBody = t.value;
        const r = PROPOSAL.terms.rows.find(row => row.key === "Full terms");
        if (r) r.body = t.value;
      } else if (/^scope\.lineItems\.\d+\.rate$/.test(path)) {
        setFieldValue(path, Number(t.value) || 0);
        const liTotal = PROPOSAL.scope.lineItems.reduce((s, li) => s + (Number(li.qty) || 1) * (Number(li.rate) || 0), 0);
        const liTotalEl = document.querySelector("[data-fli-total]");
        if (liTotalEl) liTotalEl.textContent = formatMoney(liTotal, PROPOSAL.scope.currency);
      } else if (/^scope\.tiers\.options\.\d+\.price$/.test(path) || /^scope\.addOns\.\d+\.price$/.test(path) || path === "scope.flatPrice.amount") {
        setFieldValue(path, Number(t.value) || 0);
      } else if (path === "scope.tax.rate") {
        PROPOSAL.scope.tax.rate = (Number(t.value) || 0) / 100;
      } else {
        setFieldValue(path, t.value);
      }

      // Refresh rail when brand/client context fields change
      if (["client.product", "client.industry", "client.businessType", "brand.voice",
           "brand.principal", "brand.studio", "brand.role", "brand.city"].includes(path)) {
        $("#rail").innerHTML = renderRail();
        wireRail();
      }

      // Live-apply brand colour changes to CSS variables
      const colorKey = t.dataset.designColor;
      if (colorKey && PROPOSAL.brand.colors[colorKey] !== undefined) {
        PROPOSAL.brand.colors[colorKey] = t.value;
        const cssVarMap = {
          dark:      "--brand-ink",
          primary:   "--brand-accent",
          secondary: "--brand-muted",
          light:     "--brand-paper",
        };
        const cssVar = cssVarMap[colorKey];
        if (cssVar) {
          document.querySelector(".brand-scope")?.style.setProperty(cssVar, t.value);
        }
        // Update the swatch label background inline
        const swatch = t.closest(".rdes__swatch");
        if (swatch) swatch.style.background = t.value;
      }

      // Side effects
      if (path === "scope.callsHours")       { updateIncludesEntry(/calls/i, t.value); }
      if (path === "scope.callDurationMins") { PROPOSAL.scope.callDurationMins = Number(t.value) || 60; }
      if (path === "scope.revisions")        updateIncludesEntry(/revision/i, t.value);
      if (path === "scope.totalDuration")    updateIncludesEntry(/weeks?$/i, t.value);
      if (path === "scope.postLaunch")       { updateIncludesEntry(/post.launch/i, t.value); scheduleCanvasRefresh(); }
      if (path === "scope.hourlyRate")         { PROPOSAL.scope.hourlyRate = Number(t.value) || 160; recalcEstimateDisplay(); }
      if (path === "scope.weeklyCapacity")     { PROPOSAL.scope.weeklyCapacity = Number(t.value) || 30; recalcEstimateDisplay(); }
      if (path === "scope.dates.start")        recalcEstimateDisplay();
      if (path === "scope.feedbackBufferDays") { PROPOSAL.scope.feedbackBufferDays = Number(t.value) || 0; recalcEstimateDisplay(); }
      if (path === "terms.extraRevisionRate") {
        PROPOSAL.terms.extraRevisionRate = Number(t.value) || 160;
        const r = PROPOSAL.terms.rows.find(row => row.key === "Revisions");
        if (r) r.body = r.body.replace(/A\$[\d,]+/g, `A$${t.value}`);
      }

      scheduleCanvasRefresh();
    }

    // Call slot inputs
    if (t.dataset.callCount !== undefined) {
      const i = Number(t.dataset.callCount);
      if (PROPOSAL.scope.callSlots[i]) {
        PROPOSAL.scope.callSlots[i].count = Number(t.value) || 1;
        syncCallHours();
        scheduleCanvasRefresh();
      }
    }
    if (t.dataset.callMins !== undefined) {
      const i = Number(t.dataset.callMins);
      if (PROPOSAL.scope.callSlots[i]) {
        PROPOSAL.scope.callSlots[i].mins = Number(t.value) || 60;
        syncCallHours();
        scheduleCanvasRefresh();
      }
    }

    // Stage field (name / timing / eyebrow)
    if (t.dataset.stageField && t.dataset.stageIdx !== undefined) {
      PROPOSAL.scope.milestones[Number(t.dataset.stageIdx)][t.dataset.stageField] = t.value;
      scheduleCanvasRefresh();
    }

    // Deliverable text
    if (t.dataset.stageDeliv !== undefined && t.dataset.delivIdx !== undefined) {
      PROPOSAL.scope.milestones[Number(t.dataset.stageDeliv)].deliverables[Number(t.dataset.delivIdx)] = t.value;
      scheduleCanvasRefresh();
    }

    // Outcome text
    if (t.dataset.stageOutcome !== undefined && t.dataset.outcomeIdx !== undefined) {
      const m = PROPOSAL.scope.milestones[Number(t.dataset.stageOutcome)];
      if (m) { m.outcomes[Number(t.dataset.outcomeIdx)] = t.value; scheduleCanvasRefresh(); }
    }

    // Goals list items
    if (t.dataset.flistItem && t.dataset.flistIdx !== undefined) {
      const arr = resolveField(t.dataset.flistItem);
      if (Array.isArray(arr)) { arr[Number(t.dataset.flistIdx)] = t.value; scheduleCanvasRefresh(); }
    }

    // Tier includes text
    if (t.dataset.tierIncl !== undefined && t.dataset.tierInclJ !== undefined) {
      const ti = Number(t.dataset.tierIncl);
      const tj = Number(t.dataset.tierInclJ);
      if (PROPOSAL.scope.tiers.options[ti]) {
        PROPOSAL.scope.tiers.options[ti].includes[tj] = t.value;
        scheduleCanvasRefresh();
      }
    }

    // Approach dot-point items
    if (t.dataset.diffItem !== undefined && t.dataset.diffIdx !== undefined) {
      const varIdx = state.variantIdx["overview.differentiator"] || 0;
      PROPOSAL.overview.differentiator.variants[varIdx][Number(t.dataset.diffIdx)] = t.value;
      scheduleCanvasRefresh();
    }

    // Base term card label edits
    if (t.dataset.termsLabel !== undefined) {
      const labelKey = t.dataset.termsLabel;
      if (!PROPOSAL.terms.cardLabels) PROPOSAL.terms.cardLabels = {};
      PROPOSAL.terms.cardLabels[labelKey] = t.value;
      scheduleCanvasRefresh();
    }

    // Extra term edits (key + body)
    if (t.dataset.extraTermKey !== undefined) {
      const idx = Number(t.dataset.extraTermKey);
      if (PROPOSAL.terms.extraTerms[idx]) {
        PROPOSAL.terms.extraTerms[idx].key = t.value;
        scheduleCanvasRefresh();
      }
    }
    if (t.dataset.extraTermBody !== undefined) {
      const idx = Number(t.dataset.extraTermBody);
      if (PROPOSAL.terms.extraTerms[idx]) {
        PROPOSAL.terms.extraTerms[idx].body = t.value;
        scheduleCanvasRefresh();
      }
    }

    // Payment schedule
    if (t.dataset.payPct !== undefined) {
      const r = PROPOSAL.terms.rows.find(row => row.key === "Payment");
      if (r && r.schedule) { r.schedule[Number(t.dataset.payPct)].pct = t.value; scheduleCanvasRefresh(); }
    }
    if (t.dataset.payNote !== undefined) {
      const r = PROPOSAL.terms.rows.find(row => row.key === "Payment");
      if (r && r.schedule) { r.schedule[Number(t.dataset.payNote)].note = t.value; scheduleCanvasRefresh(); }
    }

    // Signoff links
    if (t.dataset.signoffLinkLabel !== undefined) {
      PROPOSAL.brand.links[Number(t.dataset.signoffLinkLabel)].label = t.value;
      scheduleCanvasRefresh();
    }
    if (t.dataset.signoffLinkUrl !== undefined) {
      PROPOSAL.brand.links[Number(t.dataset.signoffLinkUrl)].url = t.value;
      scheduleCanvasRefresh();
    }
    if (t.dataset.signoffLinkKind !== undefined) {
      PROPOSAL.brand.links[Number(t.dataset.signoffLinkKind)].kind = t.value;
      rerenderFormSection("terms"); scheduleCanvasRefresh();
    }

    // Extras inline
    if (t.dataset.extraLabel) {
      const ex = state.extras.find(e => e.uid === Number(t.dataset.extraLabel));
      if (ex) { ex.label = t.value; scheduleCanvasRefresh(); updateTotals(); }
    }
    if (t.dataset.extraRate) {
      const ex = state.extras.find(e => e.uid === Number(t.dataset.extraRate));
      if (ex) { ex.rate = Number(t.value) || 0; scheduleCanvasRefresh(); updateTotals(); }
    }

    // Discounts inline
    if (t.dataset.discountLabel !== undefined) {
      const d = state.discounts.find(d => d.uid === Number(t.dataset.discountLabel));
      if (d) { d.label = t.value; updateTotals(); }
    }
    if (t.dataset.discountVal !== undefined) {
      const d = state.discounts.find(d => d.uid === Number(t.dataset.discountVal));
      if (d) { d.value = Number(t.value) || 0; updateTotals(); scheduleCanvasRefresh(); }
    }

    // Estimate stage hours
    if (t.dataset.estStage) {
      const st = HELPER_STAGES.find(s => s.key === t.dataset.estStage);
      if (st) { st.hours = Number(t.value) || 0; recalcEstimateDisplay(); scheduleCanvasRefresh(); }
    }

    // Custom hidden cost — label
    if (t.dataset.customLabel !== undefined) {
      const i = Number(t.dataset.customLabel);
      if (!PROPOSAL.scope.customCosts) PROPOSAL.scope.customCosts = [];
      if (PROPOSAL.scope.customCosts[i]) PROPOSAL.scope.customCosts[i].label = t.value;
    }

    // Custom hidden cost — hours
    if (t.dataset.customHours !== undefined) {
      const i = Number(t.dataset.customHours);
      if (!PROPOSAL.scope.customCosts) PROPOSAL.scope.customCosts = [];
      if (PROPOSAL.scope.customCosts[i]) {
        PROPOSAL.scope.customCosts[i].hours = Number(t.value) || 0;
        recalcEstimateDisplay();
      }
    }

    // Estimated hours → implied fee
    if (t.dataset.fld === "scope.targetHours") {
      PROPOSAL.scope.targetHours = Number(t.value) || 0;
      recalcEstimateDisplay();
      // Show/hide implies + badge by re-rendering just the panel section
      rerenderScopePanel();
    }
  });

  // ── change: checkboxes / radios ───────────────────────────────
  fc.addEventListener("change", (e) => {
    const t = e.target;

    if (t.dataset.pricingToggle) {
      const fid = t.dataset.pricingToggle;
      if (t.checked) {
        state.hiddenBlocks.delete(fid);
        state.expandedPricingSections.add(fid); // auto-expand when turned on
        // Pre-fill flat price from calculator if it hasn't been set yet
        if (fid === "flatPrice" && !(PROPOSAL.scope.flatPrice.amount > 0)) {
          const calcTotal = HELPER_STAGES.reduce((n, st) => n + st.hours, 0) * (PROPOSAL.scope.hourlyRate || 160);
          if (calcTotal > 0) PROPOSAL.scope.flatPrice.amount = calcTotal;
        }
      } else {
        state.hiddenBlocks.add(fid);
        state.expandedPricingSections.delete(fid);
      }
      rerenderFormSection("pricing");
      scheduleCanvasRefresh();
    }

    if (t.dataset.taxToggle !== undefined) {
      PROPOSAL.scope.tax.rate = t.checked ? 0.1 : 0;
      if (t.checked && !PROPOSAL.scope.tax.label) PROPOSAL.scope.tax.label = "GST";
      rerenderFormSection("pricing");
      scheduleCanvasRefresh();
    }

    if (t.dataset.tierFeatured !== undefined) {
      const i = Number(t.dataset.tierFeatured);
      if (PROPOSAL.scope.tiers.options[i]) {
        PROPOSAL.scope.tiers.options[i].featured = t.checked;
        rerenderFormSection("pricing");
        scheduleCanvasRefresh();
      }
    }

    if (t.dataset.stageOutcomes !== undefined) {
      PROPOSAL.scope.milestones[Number(t.dataset.stageOutcomes)].outcomesHidden = !t.checked;
      rerenderFormSection("scope");
      scheduleCanvasRefresh();
    }

    if (t.dataset.ownership) {
      PROPOSAL.terms.ownershipFull = t.value === "full";
      rerenderFormSection("terms");
      scheduleCanvasRefresh();
    }

    if (t.dataset.fldCheckbox === "terms.fullTermsCollapsed") {
      PROPOSAL.terms.fullTermsCollapsed = t.checked;
      scheduleCanvasRefresh();
    }

    if (t.dataset.caseThumb !== undefined) {
      const idx = Number(t.dataset.caseThumb);
      PROPOSAL.about.caseStudies[idx].thumbMode = t.value;
      if (t.value !== "image") PROPOSAL.about.caseStudies[idx].thumbSrc = ""; // Image URL only relevant for "image" mode
      rerenderFormSection("about");
      scheduleCanvasRefresh();
    }

    // Signoff logo upload
    if (t.dataset.hasOwnProperty("signoffLogoUpload") && t.files && t.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        PROPOSAL.terms.signLogoSrc = ev.target.result;
        rerenderFormSection("terms");
        scheduleCanvasRefresh();
      };
      reader.readAsDataURL(t.files[0]);
    }

    // Case study image upload
    if (t.dataset.caseImg !== undefined && t.files && t.files[0]) {
      const idx = Number(t.dataset.caseImg);
      const reader = new FileReader();
      reader.onload = (ev) => {
        PROPOSAL.about.caseStudies[idx].thumbSrc = ev.target.result;
        rerenderFormSection("about");
        scheduleCanvasRefresh();
      };
      reader.readAsDataURL(t.files[0]);
    }

    // Kicker wordmark upload
    if (t.id === "kickerWordmarkInput" && t.files && t.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        PROPOSAL.brand.wordmarkSrc = ev.target.result;
        rerenderFormSection("cover");
        scheduleCanvasRefresh();
      };
      reader.readAsDataURL(t.files[0]);
    }
  });

  // ── click: add / remove actions ───────────────────────────────
  fc.addEventListener("click", (e) => {
    const t = e.target;

    // Estimate panel nudge — scroll the inline scope panel into view
    if (t.closest('[data-nudge="estimate"]')) {
      const inlinePanel = document.querySelector(".fsec-panel--scope");
      if (inlinePanel) {
        inlinePanel.scrollIntoView({ behavior: "smooth", block: "start" });
        inlinePanel.classList.add("fsec-panel--flash");
        inlinePanel.addEventListener("animationend", () => inlinePanel.classList.remove("fsec-panel--flash"), { once: true });
      }
      return;
    }

    // Currency quick-pick chips
    const currencyPick = t.closest("[data-currency-pick]");
    if (currencyPick) {
      PROPOSAL.scope.currency = currencyPick.dataset.currencyPick;
      rerenderFormSection("pricing");
      scheduleCanvasRefresh();
    }

    // Pricing section expand/collapse toggle
    const pricingExpand = t.closest("[data-pricing-expand]");
    if (pricingExpand) {
      const fid = pricingExpand.dataset.pricingExpand;
      if (state.expandedPricingSections.has(fid)) state.expandedPricingSections.delete(fid);
      else state.expandedPricingSections.add(fid);
      rerenderFormSection("pricing");
      return;
    }

    // Currency "Other" toggle — switch away from AUD to a custom symbol
    if (t.closest("[data-currency-other-toggle]")) {
      if (PROPOSAL.scope.currency === "A$") PROPOSAL.scope.currency = "$";
      rerenderFormSection("pricing");
      scheduleCanvasRefresh();
    }

    // Revisions type toggle (within stages / own milestone)
    const revisTypeBtn = t.closest("[data-revisions-type]");
    if (revisTypeBtn) {
      PROPOSAL.scope.revisionsType = revisTypeBtn.dataset.revisionsType;
      rerenderFormSection("scope");
      return;
    }

    // Custom hidden costs — add / remove
    if (t.closest("[data-calc-custom-add]")) {
      if (!PROPOSAL.scope.customCosts) PROPOSAL.scope.customCosts = [];
      PROPOSAL.scope.customCosts.push({ label: "", hours: 0 });
      rerenderScopePanel();
      return;
    }
    const customRemoveBtn = t.closest("[data-custom-remove]");
    if (customRemoveBtn) {
      const ci = Number(customRemoveBtn.dataset.customRemove);
      if (PROPOSAL.scope.customCosts) PROPOSAL.scope.customCosts.splice(ci, 1);
      rerenderScopePanel();
      recalcEstimateDisplay();
      return;
    }

    // Call slots add / remove
    if (t.closest("[data-call-add]")) {
      PROPOSAL.scope.callSlots.push({ count: 1, mins: 60 });
      syncCallHours();
      rerenderFormSection("scope");
      scheduleCanvasRefresh();
    }
    const callRemove = t.closest("[data-call-remove]");
    if (callRemove) {
      PROPOSAL.scope.callSlots.splice(Number(callRemove.dataset.callRemove), 1);
      syncCallHours();
      rerenderFormSection("scope");
      scheduleCanvasRefresh();
    }

    // Context quick-pick chips (business type, voice) — single-select
    const ctxPick = t.closest("[data-ctx-pick]");
    if (ctxPick) {
      const [path, value] = ctxPick.dataset.ctxPick.split(":");
      const parts = path.split(".");
      let obj = PROPOSAL;
      for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
      obj[parts[parts.length - 1]] = value;
      rerenderFormSection("overview");
      $("#rail").innerHTML = renderRail();
      wireRail();
      scheduleCanvasRefresh();
    }

    // Context multi-select chips (offering) — toggle array membership
    const ctxMulti = t.closest("[data-ctx-multi]");
    if (ctxMulti) {
      const [path, value] = ctxMulti.dataset.ctxMulti.split(":");
      const parts = path.split(".");
      let obj = PROPOSAL;
      for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
      const key = parts[parts.length - 1];
      const arr = Array.isArray(obj[key]) ? obj[key] : [];
      const idx = arr.indexOf(value);
      if (idx === -1) arr.push(value);
      else arr.splice(idx, 1);
      obj[key] = arr;
      rerenderFormSection("overview");
      scheduleCanvasRefresh();
    }

    // Kicker mode chips (Studio × Brand vs. custom / wordmark)
    const kickerMode = t.closest("[data-kicker-mode]");
    if (kickerMode) {
      const mode = kickerMode.dataset.kickerMode;
      PROPOSAL.project.kickerMode = mode;
      // Switching back to derived clears any stored wordmark
      if (mode === "derived") {
        PROPOSAL.brand.wordmarkSrc = "";
      }
      rerenderFormSection("cover");
      scheduleCanvasRefresh();
    }

    // Valid-until preset chips
    const validMode = t.closest("[data-valid-mode]");
    if (validMode) {
      const mode = validMode.dataset.validMode;
      PROPOSAL.project.validUntilMode = mode;
      if (mode !== "custom") {
        PROPOSAL.project.validUntil = calcValidUntil(PROPOSAL.project.sentOn, mode);
      }
      rerenderFormSection("cover");
      scheduleCanvasRefresh();
    }

    // Line items add / remove
    if (t.closest("[data-fli-add]")) {
      PROPOSAL.scope.lineItems.push({ label: "", qty: 1, rate: 0 });
      rerenderFormSection("pricing"); scheduleCanvasRefresh();
    }
    const fliRemove = t.closest("[data-fli-remove]");
    if (fliRemove) {
      PROPOSAL.scope.lineItems.splice(Number(fliRemove.dataset.fliRemove), 1);
      rerenderFormSection("pricing"); scheduleCanvasRefresh();
    }

    // Tier includes add / remove
    const tierInclAdd = t.closest("[data-tier-incl-add]");
    if (tierInclAdd) {
      const ti = Number(tierInclAdd.dataset.tierInclAdd);
      if (PROPOSAL.scope.tiers.options[ti]) {
        PROPOSAL.scope.tiers.options[ti].includes.push("");
        rerenderFormSection("pricing"); scheduleCanvasRefresh();
      }
    }
    const tierInclRemove = t.closest("[data-tier-incl-remove]");
    if (tierInclRemove) {
      const [ti, tj] = tierInclRemove.dataset.tierInclRemove.split(":").map(Number);
      if (PROPOSAL.scope.tiers.options[ti]) {
        PROPOSAL.scope.tiers.options[ti].includes.splice(tj, 1);
        rerenderFormSection("pricing"); scheduleCanvasRefresh();
      }
    }

    // Add-ons add / remove
    if (t.closest("[data-faddon-add]")) {
      PROPOSAL.scope.addOns.push({ id: `ao-${Date.now()}`, name: "", desc: "", price: 0, duration: "+1 week" });
      rerenderFormSection("pricing"); scheduleCanvasRefresh();
    }
    const faddonRemove = t.closest("[data-faddon-remove]");
    if (faddonRemove) {
      PROPOSAL.scope.addOns.splice(Number(faddonRemove.dataset.faddonRemove), 1);
      rerenderFormSection("pricing"); scheduleCanvasRefresh();
    }

    // Goals list
    const flAdd = t.closest("[data-flist-add]");
    if (flAdd) {
      const flistPath = flAdd.dataset.flistAdd;
      const arr = resolveField(flistPath);
      const flistSection = flistPath.split(".")[0];
      if (Array.isArray(arr)) { arr.push(""); rerenderFormSection(flistSection); scheduleCanvasRefresh(); }
    }
    const flRemove = t.closest("[data-flist-remove]");
    if (flRemove) {
      const [path, idxStr] = flRemove.dataset.flistRemove.split(":");
      const arr = resolveField(path);
      const flistSection = path.split(".")[0];
      if (Array.isArray(arr)) { arr.splice(Number(idxStr), 1); rerenderFormSection(flistSection); scheduleCanvasRefresh(); }
    }

    // Approach dot-points
    if (t.closest("[data-diff-add]")) {
      const varIdx = state.variantIdx["overview.differentiator"] || 0;
      PROPOSAL.overview.differentiator.variants[varIdx].push("");
      rerenderFormSection("overview"); scheduleCanvasRefresh();
    }
    const diffRemove = t.closest("[data-diff-remove]");
    if (diffRemove) {
      const varIdx = state.variantIdx["overview.differentiator"] || 0;
      PROPOSAL.overview.differentiator.variants[varIdx].splice(Number(diffRemove.dataset.diffRemove), 1);
      rerenderFormSection("overview"); scheduleCanvasRefresh();
    }

    // Stages
    if (t.closest("[data-stage-add]")) {
      PROPOSAL.scope.milestones.push({ eyebrow: "", name: "New stage", timing: "Week X", intro: "", deliverables: [""], outcomes: [], outcomesLabel: "Outcomes", outcomesHidden: true });
      rerenderFormSection("scope"); scheduleCanvasRefresh();
    }
    const stageRemove = t.closest("[data-stage-remove]");
    if (stageRemove) {
      PROPOSAL.scope.milestones.splice(Number(stageRemove.dataset.stageRemove), 1);
      rerenderFormSection("scope"); scheduleCanvasRefresh();
    }

    // Deliverables
    const delivAdd = t.closest("[data-deliv-add]");
    if (delivAdd) {
      PROPOSAL.scope.milestones[Number(delivAdd.dataset.delivAdd)].deliverables.push("");
      rerenderFormSection("scope");
    }
    const delivRemove = t.closest("[data-deliv-remove]");
    if (delivRemove) {
      const [si, di] = delivRemove.dataset.delivRemove.split("-").map(Number);
      PROPOSAL.scope.milestones[si].deliverables.splice(di, 1);
      rerenderFormSection("scope"); scheduleCanvasRefresh();
    }

    // Outcome add / remove
    const outcomeAdd = t.closest("[data-outcome-add]");
    if (outcomeAdd) {
      const si = Number(outcomeAdd.dataset.outcomeAdd);
      if (!PROPOSAL.scope.milestones[si].outcomes) PROPOSAL.scope.milestones[si].outcomes = [];
      PROPOSAL.scope.milestones[si].outcomes.push("");
      rerenderFormSection("scope"); scheduleCanvasRefresh();
    }
    const outcomeRemove = t.closest("[data-outcome-remove]");
    if (outcomeRemove) {
      const [si, oi] = outcomeRemove.dataset.outcomeRemove.split("-").map(Number);
      PROPOSAL.scope.milestones[si].outcomes.splice(oi, 1);
      rerenderFormSection("scope"); scheduleCanvasRefresh();
    }

    // Payment milestones
    if (t.closest("[data-pay-add]")) {
      const r = PROPOSAL.terms.rows.find(row => row.key === "Payment");
      if (r && r.schedule) { r.schedule.push({ pct: "0%", note: "" }); rerenderFormSection("terms"); scheduleCanvasRefresh(); }
    }
    const payRemove = t.closest("[data-pay-remove]");
    if (payRemove) {
      const r = PROPOSAL.terms.rows.find(row => row.key === "Payment");
      if (r && r.schedule) { r.schedule.splice(Number(payRemove.dataset.payRemove), 1); rerenderFormSection("terms"); scheduleCanvasRefresh(); }
    }

    // Signoff mode (name / logo)
    const signoffMode = t.closest("[data-signoff-mode]");
    if (signoffMode) {
      PROPOSAL.terms.signMode = signoffMode.dataset.signoffMode;
      rerenderFormSection("terms"); scheduleCanvasRefresh();
    }
    if (t.closest("[data-signoff-logo-clear]")) {
      PROPOSAL.terms.signLogoSrc = "";
      rerenderFormSection("terms"); scheduleCanvasRefresh();
    }

    // Signoff links
    const signoffToggle = t.closest("[data-signoff-link-toggle]");
    if (signoffToggle) {
      const i = Number(signoffToggle.dataset.signoffLinkToggle);
      PROPOSAL.brand.links[i].hidden = !PROPOSAL.brand.links[i].hidden;
      rerenderFormSection("terms"); scheduleCanvasRefresh();
    }
    if (t.closest("[data-signoff-link-add]")) {
      PROPOSAL.brand.links.push({ kind: "web", label: "", url: "", hidden: false });
      rerenderFormSection("terms"); scheduleCanvasRefresh();
    }
    const signoffRemove = t.closest("[data-signoff-link-remove]");
    if (signoffRemove) {
      PROPOSAL.brand.links.splice(Number(signoffRemove.dataset.signoffLinkRemove), 1);
      rerenderFormSection("terms"); scheduleCanvasRefresh();
    }

    // Extra term clauses — add custom blank
    if (t.closest("[data-extra-term-add-custom]")) {
      PROPOSAL.terms.extraTerms.push({ key: "Custom clause", body: "" });
      rerenderFormSection("terms"); scheduleCanvasRefresh();
    }
    // Extra term clauses — add from library
    const extraTermAdd = t.closest("[data-extra-term-add]");
    if (extraTermAdd) {
      const key = extraTermAdd.dataset.extraTermAdd;
      const preset = EXTRA_TERMS_LIBRARY.find(s => s.key === key);
      if (preset) {
        PROPOSAL.terms.extraTerms.push({ key: preset.key, body: preset.body });
        rerenderFormSection("terms"); scheduleCanvasRefresh();
      }
    }
    // Extra term clauses — remove
    const extraTermRemove = t.closest("[data-extra-term-remove]");
    if (extraTermRemove) {
      PROPOSAL.terms.extraTerms.splice(Number(extraTermRemove.dataset.extraTermRemove), 1);
      rerenderFormSection("terms"); scheduleCanvasRefresh();
    }

    // Terms suggestion chips
    const termsSuggest = t.closest("[data-terms-suggest]");
    if (termsSuggest) {
      const type = termsSuggest.dataset.termsSuggest;
      const val  = termsSuggest.dataset.termsSuggestVal;
      if (type === "doesntInclude") {
        PROPOSAL.terms.doesntInclude.push(val);
        rerenderFormSection("terms"); scheduleCanvasRefresh();
      } else if (type === "payment") {
        const r = PROPOSAL.terms.rows.find(row => row.key === "Payment");
        if (r && r.schedule) {
          r.schedule = [];
          if (val === "50-50") {
            r.schedule = [{ pct: "50%", note: "on signing" }, { pct: "50%", note: "on final delivery" }];
          } else if (val === "50-25-25") {
            r.schedule = [{ pct: "50%", note: "on signing" }, { pct: "25%", note: "at concept approval" }, { pct: "25%", note: "on final delivery" }];
          } else if (val === "100") {
            r.schedule = [{ pct: "100%", note: "upfront" }];
          } else if (val === "33-33-33") {
            r.schedule = [{ pct: "33%", note: "on signing" }, { pct: "33%", note: "at concept approval" }, { pct: "34%", note: "on final delivery" }];
          }
          rerenderFormSection("terms"); scheduleCanvasRefresh();
        }
      }
    }

    // Case studies
    if (t.closest("[data-case-add]")) {
      PROPOSAL.about.caseStudies.push({ client: "", project: "", outcome: "", thumbClass: "case__thumb--a", thumbSrc: "", thumbMode: "gradient", url: "" });
      rerenderFormSection("about");
    }
    const caseRemove = t.closest("[data-case-remove]");
    if (caseRemove) {
      PROPOSAL.about.caseStudies.splice(Number(caseRemove.dataset.caseRemove), 1);
      rerenderFormSection("about"); scheduleCanvasRefresh();
    }

    const caseImgClear = t.closest("[data-case-img-clear]");
    if (caseImgClear) {
      PROPOSAL.about.caseStudies[Number(caseImgClear.dataset.caseImgClear)].thumbSrc = "";
      rerenderFormSection("about"); scheduleCanvasRefresh();
    }

    // Full terms toggle
    if (t.closest("[data-fullterms-toggle]")) {
      PROPOSAL.terms.fullTermsExpanded = !PROPOSAL.terms.fullTermsExpanded;
      rerenderFormSection("terms");
    }

    const termsHideToggle = t.closest("[data-terms-hide-toggle]");
    if (termsHideToggle) {
      const key = `terms.${termsHideToggle.dataset.termsHideToggle}`;
      if (state.hiddenBlocks.has(key)) state.hiddenBlocks.delete(key);
      else state.hiddenBlocks.add(key);
      rerenderFormSection("terms");
      scheduleCanvasRefresh();
    }

    if (t.closest("[data-fullterms-recommend]")) {
      PROPOSAL.terms.fullTermsBody = RECOMMENDED_TERMS;
      const fullTermsRow = PROPOSAL.terms.rows.find(r => r.key === "Full terms");
      if (fullTermsRow) fullTermsRow.body = RECOMMENDED_TERMS;
      rerenderFormSection("terms");
      scheduleCanvasRefresh();
    }

    // Extras — preset chip toggle
    const presetChip = t.closest("[data-fextra-preset]");
    if (presetChip) {
      const id = presetChip.dataset.fextraPreset;
      const alreadyOn = state.extras.some(e => e.id === id);
      if (alreadyOn) {
        state.extras = state.extras.filter(e => e.id !== id);
      } else {
        const preset = PROPOSAL.scope.extrasLibrary.find(p => p.id === id);
        if (preset) state.extras.push({ uid: ++state.extraUid, id: preset.id, label: preset.name, rate: preset.rate });
      }
      rerenderFormSection("pricing"); updateTotals(); scheduleCanvasRefresh();
    }

    // Extras — custom blank row
    if (t.closest("[data-fextras-add]")) {
      state.extras.push({ uid: ++state.extraUid, id: "custom", label: "", rate: 0 });
      rerenderFormSection("pricing"); updateTotals();
    }
    const fextraRemove = t.closest("[data-fextra-remove]");
    if (fextraRemove) {
      const uid = Number(fextraRemove.dataset.fextraRemove);
      // also deactivate preset chip if this was a preset
      const ex = state.extras.find(e => e.uid === uid);
      state.extras = state.extras.filter(e => e.uid !== uid);
      rerenderFormSection("pricing"); updateTotals(); scheduleCanvasRefresh();

    // Discounts
    } else if (t.closest("[data-discount-preset]")) {
      const btn = t.closest("[data-discount-preset]");
      state.discounts.push({
        uid: ++state.discountUid,
        label: btn.dataset.discountPreset,
        type: btn.dataset.discountPresetType || "pct",
        value: Number(btn.dataset.discountPresetVal) || 10,
      });
      rerenderFormSection("pricing"); updateTotals(); scheduleCanvasRefresh();
    } else if (t.closest("[data-discount-add]")) {
      state.discounts.push({ uid: ++state.discountUid, label: "Discount", type: "pct", value: 10 });
      rerenderFormSection("pricing"); updateTotals(); scheduleCanvasRefresh();
    } else {
      const discountRemove = t.closest("[data-discount-remove]");
      if (discountRemove) {
        state.discounts = state.discounts.filter(d => d.uid !== Number(discountRemove.dataset.discountRemove));
        rerenderFormSection("pricing"); updateTotals(); scheduleCanvasRefresh();
      }
      const discountTypePct = t.closest("[data-discount-type-toggle]");
      if (discountTypePct) {
        const d = state.discounts.find(d => d.uid === Number(discountTypePct.dataset.discountTypeToggle));
        if (d) { d.type = d.type === "pct" ? "flat" : "pct"; rerenderFormSection("pricing"); updateTotals(); scheduleCanvasRefresh(); }
      }
      const discountTypeFlat = t.closest("[data-discount-type-flat]");
      if (discountTypeFlat) {
        const d = state.discounts.find(d => d.uid === Number(discountTypeFlat.dataset.discountTypeFlat));
        if (d) { d.type = "flat"; rerenderFormSection("pricing"); updateTotals(); scheduleCanvasRefresh(); }
      }
    }

    // Reference show/hide
    if (t.closest("[data-ref-toggle]")) {
      if (state.hiddenBlocks.has("reference")) state.hiddenBlocks.delete("reference");
      else state.hiddenBlocks.add("reference");
      rerenderFormSection("cover"); scheduleCanvasRefresh();
    }

    // Date column + post-launch support show/hide
    const dateBlockBtn = t.closest(".frow__eye[data-block-toggle]");
    if (dateBlockBtn) {
      const key = dateBlockBtn.dataset.blockToggle;
      if (["dateSignBy", "dateStart", "dateFinish", "postLaunchSupport"].includes(key)) {
        if (state.hiddenBlocks.has(key)) state.hiddenBlocks.delete(key);
        else state.hiddenBlocks.add(key);
        rerenderFormSection("scope"); scheduleCanvasRefresh();
      }
    }
  });
}

// ── Mount ────────────────────────────────────────────────────
function mount() {
  $("#canvas").innerHTML =
    renderCover() +
    renderOverview() +
    renderScope() +
    renderPricing() +
    renderAbout() +
    renderTerms();
  applyVizStates();
  // Stamp the initial heading style so CSS italics rule works on first load
  const _bs = document.querySelector(".brand-scope");
  if (_bs) _bs.setAttribute("data-heading-style", PROPOSAL.brand.headingStyle || "serif");
  $("#rail").innerHTML = renderRail();

  // Build the form view in its own container
  mountFormView();

  // Apply initial mode (shows/hides canvas vs formCanvas)
  setMode(state.mode);

  wireAffordances();
  wireAddOns();
  wireLineItems();
  wireCaseThumbs();
  wireExtras();
  wireTiers();
  wireBlockHide();
  wireRail();
  wireChrome();
  wireEstimatePanel();
  wireSendSheet();
  wireTimelineSheet();
  wireScrollSpy();
  wireSaveStatus();
  tagEditable();
  wireEditable();
}

// ── Timeline helper side panel (editor-only) ────────────────
// Opens from the blue "Need a hand figuring out timelines?" nudge under
// Proposed Dates. Lives as a third column between the rail and the canvas
// so the creative pro can tweak capacity + stage hours while still seeing
// their proposal. Static sketch for now; inputs don't yet recompute and
// both footer buttons just close the panel.
// Stages used by the timeline helper. Hours here are the creative's ORIGINAL
// estimate — we snapshot their sum as the "baseline" on open and show a
// ± delta as they tweak rows, so the over/under is tied to their own plan
// rather than an arbitrary budget. Calls are a first-class row now since
// client-facing scope includes "3 hours of calls".
const HELPER_STAGES = [
  { key: "research",   name: "Research & concept",  weeks: "Weeks 1–2",    hours: 0 },
  { key: "design",     name: "Design",              weeks: "Weeks 3–4",    hours: 0 },
  { key: "refinement", name: "Refinement",          weeks: "Weeks 5–6",    hours: 0 },
  { key: "production", name: "Production & print",  weeks: "Weeks 7–8",    hours: 0 },
  { key: "calls",      name: "Calls &amp; check-ins",   weeks: "",         hours: 0 },
  { key: "revisions",  name: "Revisions",           weeks: "",             hours: 0 },
];
const HELPER_MAIN_KEYS    = ["research", "design", "refinement", "production"];
const HELPER_SUPPORT_KEYS = ["calls", "revisions"];

function renderHelperPanel() {
  const baseline = HELPER_STAGES.reduce((n, s) => n + s.hours, 0);
  return `
    <div class="helper" data-helper-baseline="${baseline}">
      <div class="helper__head">
        <div class="helper__tag">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.5l-5 2.6.9-5.5-4-3.9 5.5-.8L12 2z" fill="currentColor"/>
          </svg>
          MonoDesk · just for you
        </div>
        <button type="button" class="helper__close" data-helper-close aria-label="Close helper">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <h2 class="helper__title">Let's work out a realistic timeline.</h2>
      <p class="helper__desc">We'll use your weekly capacity from onboarding and the hours you've estimated per stage. Feedback buffers built in so the dates don't slip.</p>

      <div class="helper__grid">
        <label class="helper__field">
          <span class="helper__label">Your weekly capacity</span>
          <div class="helper__input-wrap">
            <input class="helper__input" type="text" value="30" inputmode="numeric" data-helper-input="capacity" />
            <span class="helper__input-suffix">hrs / wk</span>
          </div>
          <span class="helper__hint">Pulled from your profile. Change it per project if this one's different.</span>
        </label>

        <label class="helper__field">
          <span class="helper__label">Feedback buffer</span>
          <div class="helper__input-wrap">
            <input class="helper__input" type="text" value="2" inputmode="numeric" data-helper-input="buffer" />
            <span class="helper__input-suffix">days / round</span>
          </div>
          <span class="helper__hint">How long you'll wait on the client between revisions.</span>
        </label>
      </div>

      <div class="helper__stages">
        <div class="helper__stages-head">
          <span class="helper__label">Hours per stage</span>
          <span class="helper__hint">Edit any row. Totals update as you go.</span>
        </div>

        ${HELPER_STAGES.map(
          (s) => `
          <div class="helper__stage">
            <div class="helper__stage-meta">
              <span class="helper__stage-name">${s.name}</span>
              <span class="helper__stage-weeks">${s.weeks}</span>
            </div>
            <div class="helper__input-wrap helper__input-wrap--compact">
              <input class="helper__input" type="text" value="${s.hours}" inputmode="numeric" data-helper-stage="${s.key}" />
              <span class="helper__input-suffix">hrs</span>
            </div>
          </div>`
        ).join("")}
      </div>

      <div class="helper__result">
        <div class="helper__result-row">
          <span class="helper__result-label">Total hours on core scope</span>
          <span class="helper__result-value" data-helper-out="total">${baseline} hrs</span>
        </div>
        <div class="helper__result-row helper__result-row--delta" data-helper-out="deltaRow">
          <span class="helper__result-label">vs. your original estimate</span>
          <span class="helper__delta helper__delta--flat" data-helper-out="delta">On your estimate</span>
        </div>
        <div class="helper__result-row helper__result-row--weeks">
          <span class="helper__result-label">Spread the work across</span>
          <div class="helper__input-wrap helper__input-wrap--compact">
            <input class="helper__input" type="text" value="8" inputmode="numeric" data-helper-input="weeks" />
            <span class="helper__input-suffix">weeks</span>
          </div>
        </div>
        <div class="helper__math-hint" data-helper-out="weeksHintRow">
          <span data-helper-out="weeksHint">Math says ~8 weeks at 30 hrs/wk with 2-day buffers</span>
          <button type="button" class="helper__reset" data-helper-weeks-reset hidden>↺ use auto</button>
        </div>

        <div class="helper__dates">
          <div class="helper__date">
            <span class="helper__date-label">Sign by</span>
            <span class="helper__date-value">Fri 1 May 2026</span>
          </div>
          <div class="helper__date">
            <span class="helper__date-label">Start</span>
            <span class="helper__date-value">Mon 4 May 2026</span>
          </div>
          <div class="helper__date">
            <span class="helper__date-label">Finish</span>
            <span class="helper__date-value" data-helper-out="finish">Mon 29 Jun 2026</span>
            <span class="helper__date-sub" data-helper-out="finishBreakdown"></span>
          </div>
        </div>
      </div>

      <div class="helper__foot">
        <span class="helper__foot-note">We won't change your proposal without asking.</span>
        <div class="helper__actions">
          <button type="button" class="helper__btn helper__btn--ghost" data-helper-close>Not now</button>
          <button type="button" class="helper__btn helper__btn--primary" data-helper-apply>Use these dates</button>
        </div>
      </div>
    </div>`;
}

// Dates referenced in the result block. Start date anchors the finish calc,
// so if the user edits total hours we can push the finish out or pull it in.
const HELPER_START_DATE = new Date(2026, 4, 4);
const HELPER_FINISH_FMT = new Intl.DateTimeFormat("en-AU", {
  weekday: "short", day: "numeric", month: "short", year: "numeric",
});

function recalcHelper(panel, opts = {}) {
  const helperEl = panel.querySelector(".helper");
  const baseline = Number(helperEl.dataset.helperBaseline) || 0;
  const num = (sel) => {
    const el = panel.querySelector(sel);
    const n = Number(el && el.value);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  };

  const capacity = Math.max(1, num('[data-helper-input="capacity"]'));
  const buffer = num('[data-helper-input="buffer"]');
  const total = HELPER_STAGES.reduce(
    (n, s) => n + num(`[data-helper-stage="${s.key}"]`),
    0
  );
  const mathWeeks = Math.max(1, Math.ceil(total / capacity));
  const delta = total - baseline;

  // Weeks can be overridden by the creative. Once they've typed in the weeks
  // input, we stop auto-syncing it to the math — but we still surface what the
  // math would say, and offer a one-click reset.
  const weeksInput = panel.querySelector('[data-helper-input="weeks"]');
  const overridden = helperEl.dataset.helperWeeksOverride === "true";
  if (!overridden || opts.syncWeeks) {
    weeksInput.value = String(mathWeeks);
  }
  const weeks = Math.max(1, num('[data-helper-input="weeks"]'));

  // Total readout
  panel.querySelector('[data-helper-out="total"]').textContent = `${total} hrs`;

  // Weeks hint line. When the user has chosen their own pace, frame this as
  // "the math would say X" so the difference is visible; when they're on the
  // math, it just confirms the pace.
  const hintEl = panel.querySelector('[data-helper-out="weeksHint"]');
  const resetBtn = panel.querySelector("[data-helper-weeks-reset]");
  const paceStr = `at ${capacity} hrs/wk with ${buffer}-day buffer${buffer === 1 ? "" : "s"}`;
  if (overridden && weeks !== mathWeeks) {
    hintEl.textContent = `Math would say ~${mathWeeks} week${mathWeeks === 1 ? "" : "s"} ${paceStr}`;
    resetBtn.hidden = false;
  } else {
    hintEl.textContent = `Math says ~${mathWeeks} week${mathWeeks === 1 ? "" : "s"} ${paceStr}`;
    resetBtn.hidden = true;
  }

  // Over/under indicator. Tie the language to whether the creative's edits
  // push them above or below their own original estimate — this is the
  // sense-check, not a hard budget.
  const deltaEl = panel.querySelector('[data-helper-out="delta"]');
  deltaEl.classList.remove("helper__delta--over", "helper__delta--under", "helper__delta--flat");
  if (delta > 0) {
    deltaEl.classList.add("helper__delta--over");
    deltaEl.textContent = `+${delta} hr${delta === 1 ? "" : "s"} over your estimate`;
  } else if (delta < 0) {
    deltaEl.classList.add("helper__delta--under");
    deltaEl.textContent = `${Math.abs(delta)} hr${Math.abs(delta) === 1 ? "" : "s"} under your estimate`;
  } else {
    deltaEl.classList.add("helper__delta--flat");
    deltaEl.textContent = "On your estimate";
  }

  // Feedback buffer actually shifts the finish date now. We read the revision
  // round count from the includes strip (falls back to 2) and multiply by the
  // per-round buffer days the user has typed. That's the "slack" the client
  // gets between rounds before the delivery date moves.
  const revisions = helperRevisionRounds();
  const bufferDays = buffer * revisions;

  // Finish date: start + (weeks × 7) + bufferDays, then nudge to the following
  // Monday so it lands on a working day the way the proposal already shows.
  const finish = new Date(HELPER_START_DATE);
  finish.setDate(finish.getDate() + weeks * 7 + bufferDays);
  while (finish.getDay() !== 1) finish.setDate(finish.getDate() + 1);
  const finishStr = HELPER_FINISH_FMT.format(finish);
  panel.querySelector('[data-helper-out="finish"]').textContent = finishStr;

  // Breakdown under the finish date so the buffer's effect is visible instead
  // of implied. "8 weeks of work + 4 days for 2 revisions" reads clean, and
  // collapses gracefully when buffer = 0.
  const breakdownEl = panel.querySelector('[data-helper-out="finishBreakdown"]');
  const workStr = `${weeks} week${weeks === 1 ? "" : "s"} of work`;
  const bufferStr = bufferDays > 0
    ? ` + ${bufferDays} day${bufferDays === 1 ? "" : "s"} for ${revisions} revision${revisions === 1 ? "" : "s"}`
    : "";
  breakdownEl.textContent = `${workStr}${bufferStr}`;

  // Stash the computed values on the helper element so the "Use these dates"
  // button can push them back to the proposal without re-reading the DOM.
  helperEl.dataset.helperWeeks = String(weeks);
  helperEl.dataset.helperFinish = finishStr;
}

// Pull the revision round count from the proposal's includes strip so the
// buffer calc is tied to what the creative has actually promised the client.
// Falls back to 2 if the entry is missing or unparseable.
function helperRevisionRounds() {
  const entry = PROPOSAL.scope.includes.find((i) =>
    /revision/i.test(String(i.label || ""))
  );
  const n = entry ? parseInt(entry.num, 10) : NaN;
  return Number.isFinite(n) && n > 0 ? n : 2;
}

// Push the helper's chosen week count + finish date onto the proposal data,
// then re-render the scope section so the change lands in:
//   1. The "What's included" strip (e.g. "8 weeks" → "6 weeks")
//   2. The "Estimated finish" row in the Proposed Dates block
//   3. The "eight weeks from start" caption under the finish date
// Re-wires all the interactive bits scope owns after the innerHTML swap.
function applyHelperToProposal(panel) {
  const helperEl = panel.querySelector(".helper");
  const weeks = Number(helperEl.dataset.helperWeeks) || 0;
  const finish = helperEl.dataset.helperFinish;
  if (!weeks) return;

  // Weeks entry in the includes strip (lookup by label so reordering is safe).
  const weeksEntry = PROPOSAL.scope.includes.find((i) =>
    /weeks?$/i.test((i.label || "").trim())
  );
  if (weeksEntry) weeksEntry.num = String(weeks);

  if (finish) PROPOSAL.scope.dates.finish = finish;

  // Update the small "eight weeks from start" caption too, so the dates block
  // stays internally consistent.
  PROPOSAL.scope.dates.finishCaption = `${weeks} week${weeks === 1 ? "" : "s"} from start`;

  // Re-render just scope and rewire the pieces it owns. Line items,
  // extras, add-ons, and tiers now live in the Pricing section and are
  // untouched by this swap, so we only need to retag editable nodes
  // inside the freshly-rendered scope markup.
  const scopeSection = document.getElementById("section-scope");
  if (scopeSection) {
    scopeSection.outerHTML = renderScope();
    tagEditable();
  }
}

function wireTimelineSheet() {
  const panel = $("#helperPanel");
  const workspace = $(".workspace");
  if (!panel || !workspace) return;

  const open = () => {
    panel.innerHTML = renderHelperPanel();
    panel.hidden = false;
    workspace.dataset.helperOpen = "true";
    recalcHelper(panel);
  };
  const close = () => {
    panel.hidden = true;
    workspace.dataset.helperOpen = "false";
  };

  $("#canvas").addEventListener("click", (e) => {
    const btn = e.target.closest('[data-nudge="timeline"]');
    if (!btn) return;
    if (state.mode === "preview") return;
    e.preventDefault();
    open();
  });

  panel.addEventListener("click", (e) => {
    // "Use these dates" — push the chosen weeks + finish date back to the
    // proposal data and re-render the scope section so the change shows up
    // in the "What's included" strip and the "Proposed dates" block.
    if (e.target.closest("[data-helper-apply]")) {
      applyHelperToProposal(panel);
      close();
      return;
    }
    if (e.target.closest("[data-helper-weeks-reset]")) {
      panel.querySelector(".helper").dataset.helperWeeksOverride = "false";
      recalcHelper(panel, { syncWeeks: true });
      return;
    }
    if (e.target.closest("[data-helper-close]")) close();
  });

  // Live recalc. Listen at the panel level so we cover every numeric input
  // (capacity, buffer, per-stage hours, weeks override) without rewiring on
  // each render. A change to the weeks input flips it into override mode.
  panel.addEventListener("input", (e) => {
    if (e.target.matches('[data-helper-input="weeks"]')) {
      panel.querySelector(".helper").dataset.helperWeeksOverride = "true";
      recalcHelper(panel);
      return;
    }
    if (e.target.matches("[data-helper-input], [data-helper-stage]")) {
      recalcHelper(panel);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) close();
  });
}

// ── Universal inline editing ───────────────────────────────
// Everything the creative pro sees in the canvas should be editable, not just
// the AI-drafted blocks. AI blocks keep their full edit/regenerate/reject
// cluster; everything else gets a lighter click-to-edit affordance. The
// selectors below cover the bulk of user-visible text; anything inside an
// `.ai-block` is skipped because those have their own flow.
const EDITABLE_SELECTORS = [
  ".cover__kicker", ".cover__title", ".cover__meta-kind", ".cover__meta-sent",
  ".cover__foot-label", ".cover__foot-value", ".cover__foot-sub",
  ".section__eyebrow", ".section__heading",
  ".includes__label", ".includes__num", ".includes__text",
  ".dates__label",
  ".milestone__name", ".milestone__timing", ".milestone__list > li",
  ".line-items__label", ".line-items__helper",
  ".line-item__label",
  ".add-ons__label", ".add-ons__helper",
  ".add-on__name", ".add-on__desc", ".add-on__duration", ".add-on__price",
  ".extras__label", ".extras__helper", ".extras__row-label", ".extras__row-value",
  ".tiers__eyebrow", ".tiers__intro",
  ".tier__name", ".tier__tagline", ".tier__price-value", ".tier__price-meta",
  ".tier__includes li > span",
  ".cases__label", ".cases__heading", ".cases__sub",
  ".case__client", ".case__project",
  ".terms__key", ".terms__value", ".terms__cta-title", ".terms__cta-sub",
  ".payment-schedule li > span",
  ".brand-links__label",
  ".totals__label",
];

function tagEditable() {
  const canvas = $("#canvas");
  if (!canvas) return;
  canvas.querySelectorAll(EDITABLE_SELECTORS.join(",")).forEach((el) => {
    if (el.closest(".ai-block")) return;
    // We do want editable text *inside* clickable cards (tier buttons,
    // add-on buttons). Capture-phase click handling swallows the click so
    // the wrapping button's toggle doesn't fire when the creative pro is
    // trying to rename something. So no button/anchor skip here.
    el.classList.add("js-editable");
  });
}

function wireEditable() {
  const canvas = $("#canvas");
  if (!canvas || canvas.dataset.editableWired === "true") return;
  canvas.dataset.editableWired = "true";

  // Capture phase so we can intercept clicks before wrapping controls
  // (tier cards, add-on buttons) claim them and fire their toggle logic.
  canvas.addEventListener(
    "click",
    (e) => {
      // Inline text editing is only available in "Fields" mode via the form panel.
      // Design and Preview canvas views are read-only.
      if (state.mode !== "fields") return;
      if (e.target.closest(".ai-block")) return;
      const el = e.target.closest(".js-editable");
      if (!el) return;
      if (el.getAttribute("contenteditable") === "true") return;
      e.preventDefault();
      e.stopPropagation();
      enterInlineEdit(el);
    },
    true
  );

  canvas.addEventListener("focusout", (e) => {
    const el = e.target;
    if (!el || !el.getAttribute) return;
    if (el.getAttribute("contenteditable") !== "true") return;
    if (el.closest(".ai-block")) return;
    el.removeAttribute("contenteditable");
  });

  canvas.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const el = e.target;
    if (!el || !el.getAttribute) return;
    if (el.getAttribute("contenteditable") !== "true") return;
    if (el.closest(".ai-block")) return;
    // Allow line breaks inside multi-line elements with Shift+Enter.
    if (e.shiftKey) return;
    e.preventDefault();
    el.blur();
  });
}

function enterInlineEdit(el) {
  el.setAttribute("contenteditable", "true");
  el.focus();
  const sel = window.getSelection();
  if (!sel) return;
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
}

// ── Save status ticker ──────────────────────────────────────
// Ambient autosave indicator in the rail foot. No real persistence wired yet;
// this is the editor-side affordance that says "MonoDesk has you."
// Real implementation would reset `lastSavedAt` on any edit event.
function wireSaveStatus() {
  const el = $("[data-save-status]");
  if (!el) return;
  let lastSavedAt = Date.now();

  const render = () => {
    const mins = Math.floor((Date.now() - lastSavedAt) / 60000);
    let label;
    if (mins < 1) label = "Draft · saved just now";
    else if (mins === 1) label = "Draft · saved 1 min ago";
    else label = `Draft · saved ${mins} min ago`;
    el.textContent = label;
  };

  render();
  setInterval(render, 30000);

  // Any edit bumps the "saved" timestamp, which keeps the indicator believable.
  document.addEventListener("input", () => {
    lastSavedAt = Date.now();
    render();
  });
}

// ── Line items: per-line hide toggle ─────────────────────────
// Hidden lines stay visible in edit mode (dimmed, with a "Hidden from client"
// pill) so the creative pro can see what they've muted; in preview mode they
// disappear. The Core scope total always reflects all lines: hiding is a
// presentation choice, not a discount.
// Generic "hide this whole block from the client" toggle. The creative still
// sees the block in editor mode (dimmed with a Hidden pill), but in preview
// mode the CSS removes it entirely. Works off the `data-block` / `data-block-toggle`
// attribute pair so new blocks can opt in by rendering the same markup.
function wireBlockHide(root) {
  (root ? root.querySelectorAll("[data-block-toggle]") : $$("[data-block-toggle]"))
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const key = btn.dataset.blockToggle;
        const block = btn.closest("[data-block]");
        if (state.hiddenBlocks.has(key)) {
          state.hiddenBlocks.delete(key);
        } else {
          state.hiddenBlocks.add(key);
        }
        const now = state.hiddenBlocks.has(key);
        if (block) block.classList.toggle("block--hidden", now);
        btn.setAttribute("title", now ? "Show to client" : "Hide from client");
        btn.setAttribute("aria-label", now ? "Show to client" : "Hide from client");
        btn.setAttribute("aria-pressed", String(now));
        btn.innerHTML = now ? EYE_OFF_SVG : EYE_OPEN_SVG;
      });
    });
}

function wireLineItems() {
  $$(".line-item__toggle").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const idx = Number(btn.dataset.lineToggle);
      const row = btn.closest(".line-item");
      if (state.hiddenLineItems.has(idx)) {
        state.hiddenLineItems.delete(idx);
      } else {
        state.hiddenLineItems.add(idx);
      }
      const now = state.hiddenLineItems.has(idx);
      row.classList.toggle("line-item--hidden", now);
      btn.setAttribute("title", now ? "Show to client" : "Hide from client");
      btn.setAttribute("aria-label", now ? "Show to client" : "Hide from client");
      btn.setAttribute("aria-pressed", String(now));
      btn.innerHTML = now ? EYE_OFF_SVG : EYE_OPEN_SVG;
    });
  });
}

// ── Case thumbs: per-thumb hide toggle ───────────────────────
// Each case study has its own thumbnail. The creative can hide an individual
// thumb (e.g. for a case they want to mention but don't have a shareable
// visual for) without losing the client/project/outcome copy. In editor
// mode the thumb column collapses to a slim dashed placeholder; in preview
// mode the thumb disappears entirely and the case body spans full width.
function wireCaseThumbs() {
  $$("[data-case-thumb-toggle]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const idx = Number(btn.dataset.caseThumbToggle);
      const article = btn.closest(".case");
      if (state.hiddenCaseThumbs.has(idx)) {
        state.hiddenCaseThumbs.delete(idx);
      } else {
        state.hiddenCaseThumbs.add(idx);
      }
      const now = state.hiddenCaseThumbs.has(idx);
      if (article) article.classList.toggle("case--thumb-hidden", now);
      btn.setAttribute("title", now ? "Show to client" : "Hide from client");
      btn.setAttribute("aria-label", now ? "Show to client" : "Hide from client");
      btn.setAttribute("aria-pressed", String(now));
      btn.innerHTML = now ? EYE_OFF_SVG : EYE_OPEN_SVG;
      // Sync the panel toggle button for the same index
      const panelBtn = document.querySelector(`[data-panel-cs-toggle="${idx}"]`);
      if (panelBtn) {
        panelBtn.setAttribute("title", now ? "Show to client" : "Hide from client");
        panelBtn.setAttribute("aria-label", now ? "Show to client" : "Hide from client");
        panelBtn.setAttribute("aria-pressed", String(now));
        panelBtn.innerHTML = now ? EYE_OFF_SVG : EYE_OPEN_SVG;
        panelBtn.closest(".fpanel-cs")?.classList.toggle("fpanel-cs--hidden", now);
      }
    });
  });

  // Panel case study visibility toggles
  $$("[data-panel-cs-toggle]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const idx = Number(btn.dataset.panelCsToggle);
      if (state.hiddenCaseThumbs.has(idx)) {
        state.hiddenCaseThumbs.delete(idx);
      } else {
        state.hiddenCaseThumbs.add(idx);
      }
      const now = state.hiddenCaseThumbs.has(idx);
      btn.closest(".fpanel-cs")?.classList.toggle("fpanel-cs--hidden", now);
      btn.setAttribute("title", now ? "Show to client" : "Hide from client");
      btn.setAttribute("aria-label", now ? "Show to client" : "Hide from client");
      btn.setAttribute("aria-pressed", String(now));
      btn.innerHTML = now ? EYE_OFF_SVG : EYE_OPEN_SVG;
      // Sync the canvas thumb-toggle button for the same index
      const canvasBtn = document.querySelector(`[data-case-thumb-toggle="${idx}"]`);
      if (canvasBtn) {
        const article = canvasBtn.closest(".case");
        if (article) article.classList.toggle("case--thumb-hidden", now);
        canvasBtn.setAttribute("title", now ? "Show to client" : "Hide from client");
        canvasBtn.setAttribute("aria-label", now ? "Show to client" : "Hide from client");
        canvasBtn.setAttribute("aria-pressed", String(now));
        canvasBtn.innerHTML = now ? EYE_OFF_SVG : EYE_OPEN_SVG;
      }
    });
  });
}

// ── Extras: creative-pro-added priced-in items ──────────────
// The "+ Add extra" button opens a menu of preset extras. Picking one appends
// it to state.extras; picking "+ Custom" prompts for a name and rate. Each row
// gets a remove button. Totals recompute after every change.
function wireExtras() {
  const addBtn = $("[data-extras-add]");
  const menu = $("[data-extras-menu]");
  const list = $("[data-extras-list]");
  if (!addBtn || !menu || !list) return;

  const closeMenu = () => {
    menu.hidden = true;
    addBtn.setAttribute("aria-expanded", "false");
  };
  const openMenu = () => {
    menu.hidden = false;
    addBtn.setAttribute("aria-expanded", "true");
  };

  addBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    if (menu.hidden) openMenu();
    else closeMenu();
  });

  const closeBtn = menu.querySelector("[data-extras-close]");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMenu();
      addBtn.focus();
    });
  }

  document.addEventListener("click", (e) => {
    if (menu.hidden) return;
    if (menu.contains(e.target) || addBtn.contains(e.target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) closeMenu();
  });

  menu.querySelectorAll("[data-extra-id]").forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.dataset.extraId;
      const extra = buildExtraFromPreset(id);
      closeMenu();
      if (!extra) return;
      state.extras.push(extra);
      list.insertAdjacentHTML(
        "beforeend",
        renderExtraRow(extra, PROPOSAL.scope.currency)
      );
      wireExtraRow(list.lastElementChild);
      tagEditable();
      updateTotals();
    });
  });

  list.querySelectorAll(".extras__item").forEach(wireExtraRow);
}

function buildExtraFromPreset(id) {
  if (id === "__custom") {
    const label = (window.prompt("What's the extra called?") || "").trim();
    if (!label) return null;
    const rateStr = (window.prompt(`Rate for "${label}" (A$, ex. GST)`) || "").trim();
    const rate = Number(rateStr.replace(/[^\d.]/g, ""));
    if (!rate || Number.isNaN(rate)) return null;
    return { uid: ++state.extraUid, id: "custom", label, rate };
  }
  const preset = PROPOSAL.scope.extrasLibrary.find((p) => p.id === id);
  if (!preset) return null;
  return {
    uid: ++state.extraUid,
    id: preset.id,
    label: preset.name,
    rate: preset.rate,
  };
}

function wireExtraRow(row) {
  const removeBtn = row.querySelector("[data-extra-remove]");
  if (!removeBtn) return;
  removeBtn.addEventListener("click", () => {
    const uid = Number(removeBtn.dataset.extraRemove);
    state.extras = state.extras.filter((e) => e.uid !== uid);
    row.remove();
    updateTotals();
  });
}

// ── Tiers: client picks a package ────────────────────────────
function wireTiers() {
  const grid = $("[data-tiers]");
  if (!grid) return;
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-tier]");
    if (!btn) return;
    const id = btn.dataset.tier;
    const now = state.selectedTier === id ? null : id;
    state.selectedTier = now;
    grid.querySelectorAll(".tier").forEach((el) => {
      const selected = el.dataset.tier === now;
      el.classList.toggle("tier--selected", selected);
      el.setAttribute("aria-pressed", String(selected));
    });
  });
}

// ── Add-ons: toggle + live total ─────────────────────────────
function wireAddOns() {
  $$(".add-on").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.addon;
      if (state.selectedAddOns.has(id)) {
        state.selectedAddOns.delete(id);
      } else {
        state.selectedAddOns.add(id);
      }
      const now = state.selectedAddOns.has(id);
      btn.classList.toggle("add-on--selected", now);
      btn.setAttribute("aria-pressed", String(now));
      updateTotals();
    });
  });
}

function calcDiscountTotal(subtotalBefore) {
  return state.discounts.reduce((sum, d) => {
    const amt = d.type === "pct" ? subtotalBefore * (d.value / 100) : d.value;
    return sum + amt;
  }, 0);
}

function updateTotals() {
  const s = PROPOSAL.scope;
  const lineItemsTotal = s.lineItems.reduce((sum, li) => sum + li.qty * li.rate, 0);
  const extrasTotal = state.extras.reduce((sum, e) => sum + e.rate, 0);
  const selected = s.addOns.filter((ao) => state.selectedAddOns.has(ao.id));
  const addOnTotal = selected.reduce((sum, ao) => sum + ao.price, 0);
  const preDiscount = lineItemsTotal + extrasTotal + addOnTotal;
  const discountTotal = calcDiscountTotal(preDiscount);
  const subtotal = preDiscount - discountTotal;
  const taxRate = (s.tax && s.tax.rate) || 0;
  const tax = subtotal * taxRate;
  const grand = subtotal + tax;

  const coreVal = $("[data-core-value]");
  const row = $("[data-addons-row]");
  const count = $("[data-addons-count]");
  const addOnVal = $("[data-addons-value]");
  const subVal = $("[data-subtotal-value]");
  const taxVal = $("[data-tax-value]");
  const grandVal = $("[data-grand-value]");
  const discountsContainer = $("[data-discounts-rows]");

  const setZero = (el, val) => { if (!el) return; el.toggleAttribute("data-zero", val === 0); };
  if (coreVal) { coreVal.textContent = formatMoney(lineItemsTotal, s.currency); setZero(coreVal, lineItemsTotal); }
  if (row) row.hidden = selected.length === 0;
  if (count) count.textContent = `(${selected.length})`;
  if (addOnVal) addOnVal.textContent = "+" + formatMoney(addOnTotal, s.currency);
  if (discountsContainer) {
    discountsContainer.innerHTML = state.discounts.map(d => {
      const amt = d.type === "pct" ? preDiscount * (d.value / 100) : d.value;
      return `<div class="totals__row totals__row--discount">
        <span class="totals__label">${esc(d.label || "Discount")} ${d.type === "pct" ? `<span class="totals__count">${d.value}%</span>` : ""}</span>
        <span class="totals__value totals__value--discount">−${formatMoney(amt, s.currency)}</span>
      </div>`;
    }).join("");
  }
  if (subVal) subVal.textContent = formatMoney(subtotal, s.currency);
  if (taxVal) taxVal.textContent = formatMoney(tax, s.currency);
  if (grandVal) {
    grandVal.textContent = formatMoney(grand, s.currency);
    setZero(grandVal, grand);
    grandVal.animate(
      [{ transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
      { duration: 180, easing: "ease-out" }
    );
  }
  // Sync zero state on individual line item totals
  $$(".line-item__total").forEach(el => {
    const val = parseFloat(el.textContent.replace(/[^0-9.-]/g, "")) || 0;
    el.toggleAttribute("data-zero", val === 0);
  });
}

// ── Affordances: edit / regenerate / reject ──────────────────
function wireAffordances() {
  $$(".ai-block").forEach((block) => {
    const path = block.dataset.aiPath;
    const kind = block.dataset.aiKind;

    block.addEventListener("click", (e) => {
      const btn = e.target.closest(".ai-btn");
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();

      // AI block editing is disabled in Design and Preview modes
      if (state.mode !== "fields") return;

      const action = btn.dataset.action;
      if (action === "edit") enterEdit(block);
      else if (action === "insert-image") insertImage(block);
      else if (action === "regenerate") regenerate(block, path, kind);
      else if (action === "reject") rejectBlock(block);
    });
  });

  document.addEventListener("click", (e) => {
    const editing = $(".ai-block[data-editing='true']");
    if (editing && !editing.contains(e.target)) exitEdit(editing);

    // Full terms canvas collapse toggle
    if (e.target.closest("[data-fullterms-canvas-toggle]")) {
      const btn  = e.target.closest("[data-fullterms-canvas-toggle]");
      const body = document.querySelector("[data-fullterms-canvas-body]");
      const label = btn.querySelector(".terms__collapse-label");
      if (!body) return;
      const isCollapsed = body.classList.toggle("terms__full-body--collapsed");
      btn.setAttribute("aria-expanded", String(!isCollapsed));
      if (label) label.textContent = isCollapsed ? "Show" : "Hide";
    }
  });
}

function enterEdit(block) {
  $$(".ai-block[data-editing='true']").forEach((b) => exitEdit(b));
  block.dataset.editing = "true";
  const content = block.querySelector(".ai-block__content");
  const editables = content.querySelectorAll("p, li, div.outcomes__label");
  editables.forEach((el) => {
    el.setAttribute("contenteditable", "true");
  });
  const first = editables[0];
  if (first) {
    first.focus();
    const range = document.createRange();
    range.selectNodeContents(first);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
}

function exitEdit(block) {
  block.dataset.editing = "false";
  block
    .querySelectorAll("[contenteditable='true']")
    .forEach((el) => el.removeAttribute("contenteditable"));
}

// Insert an image into the ai-block's content. Opens a native file picker,
// then appends a <figure> with the chosen image to the block. Object URLs
// are fine for this wireframe; we'd swap for an upload endpoint later.
function insertImage(block) {
  const content = block.querySelector(".ai-block__content");
  if (!content) return;

  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.style.display = "none";

  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);

    const figure = document.createElement("figure");
    figure.className = "ai-image";
    figure.innerHTML = `
      <img src="${url}" alt="" />
      <button class="ai-image__remove" type="button" aria-label="Remove image">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
      </button>
      <figcaption class="ai-image__caption" contenteditable="true" data-placeholder="Add a caption…"></figcaption>
    `;

    figure.querySelector(".ai-image__remove").addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      URL.revokeObjectURL(url);
      figure.remove();
    });

    content.appendChild(figure);
    document.body.removeChild(input);
  });

  document.body.appendChild(input);
  input.click();
}

function regenerate(block, path, kind) {
  // Walk dotted path to find the field; supports array indices.
  const node = resolveField(path);
  if (!node || !node.variants) return;

  const next = cycleVariant(path, node.variants);
  const contentHost = block.querySelector(".ai-block__content");

  if (kind === "list") {
    // Differentiator is a list of strings as variants[]
    const ol = contentHost.querySelector(".outcomes__list");
    if (ol) ol.innerHTML = next.map((item) => `<li>${item}</li>`).join("");
  } else if (kind === "pricingNote") {
    const lead = contentHost.querySelector(".pricing-note__lead");
    const body = contentHost.querySelector(".pricing-note__body");
    if (lead) lead.textContent = next.lead;
    if (body) body.textContent = next.body;
  } else {
    const target =
      contentHost.querySelector(".section__intro") ||
      contentHost.querySelector(".block__body") ||
      contentHost.querySelector(".cover__tagline") ||
      contentHost.querySelector(".bio") ||
      contentHost.querySelector(".case__outcome") ||
      contentHost.querySelector(".dates__note") ||
      contentHost.firstElementChild;
    if (target) target.textContent = next;
  }

  flashRegenerate(block);
}

function rejectBlock(block) {
  const content = block.querySelector(".ai-block__content");
  const targets = content.querySelectorAll(".section__intro, .block__body, .cover__tagline, .bio, .case__outcome, .dates__note");
  if (targets.length) {
    targets.forEach((el) => (el.textContent = ""));
  } else {
    const ol = content.querySelector(".outcomes__list");
    if (ol) ol.innerHTML = "";
  }
  enterEdit(block);
}

function flashRegenerate(block) {
  const content = block.querySelector(".ai-block__content");
  content.style.transition = "opacity 0.18s";
  content.style.opacity = "0.35";
  setTimeout(() => {
    content.style.opacity = "1";
  }, 180);
}

// Path resolution: "overview.differentiator" | "about.caseStudies.0.outcome"
function resolveField(path) {
  if (!path) return null;
  const parts = path.split(".");
  let cur = PROPOSAL;
  for (const part of parts) {
    if (cur == null) return null;
    const key = /^\d+$/.test(part) ? Number(part) : part;
    cur = cur[key];
  }
  return cur;
}

// ── Section rail ─────────────────────────────────────────────
function wireRail() {
  $$(".rail__item").forEach((item) => {
    item.addEventListener("click", () => {
      // In fields mode, navigate inside the form canvas instead
      const sectionId = (item.dataset.target || "").replace("section-", "");
      const targetId = state.mode === "fields"
        ? `form-section-${sectionId}`
        : item.dataset.target;
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setActiveSection(id) {
  if (state.activeSection === id) return;
  state.activeSection = id;
  $$(".rail__item").forEach((item) => {
    const isActive = item.dataset.target === `section-${id}`;
    item.classList.toggle("rail__item--active", isActive);
  });
}

function wireScrollSpy() {
  // Canvas scroll spy (preview / edit mode)
  const sections = $$("[data-section]");
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.dataset.section);
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );
  sections.forEach((s) => io.observe(s));

  // Form scroll spy (fields mode) — watches #form-section-* inside #formCanvas
  const formSections = $$("#fview [id^='form-section-']");
  if (!formSections.length) return;
  const formRoot = $("#formCanvas");
  const formIo = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        const id = visible.target.id.replace("form-section-", "");
        setActiveSection(id);
      }
    },
    {
      root: formRoot,
      rootMargin: "0px 0px -60% 0px",
      threshold: [0, 0.1, 0.25],
    }
  );
  formSections.forEach((s) => formIo.observe(s));
}

// ── Chrome: Edit / Preview toggle ────────────────────────────
function wireChrome() {
  const segBtns = $$(".segmented__btn");
  segBtns.forEach((btn) => {
    btn.addEventListener("click", () => setMode(btn.dataset.mode));
  });

  const back = $(".chrome__back");
  if (back) {
    back.addEventListener("click", () => {
      // Non-destructive; just a visual cue that this is a frame.
      back.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(-3px)" }, { transform: "translateX(0)" }],
        { duration: 180 }
      );
    });
  }
}

function setMode(mode) {
  state.mode = mode;
  const canvas     = $("#canvas");
  const formCanvas = $("#formCanvas");

  $("#app").classList.toggle("app--preview", mode === "preview");
  $("#app").classList.toggle("app--edit",    mode === "edit");
  $("#app").classList.toggle("app--fields",  mode === "fields");

  // Show the right editing surface
  if (canvas)     canvas.hidden     = mode === "fields";
  if (formCanvas) formCanvas.hidden = mode !== "fields";

  $$(".segmented__btn").forEach((b) => {
    const active = b.dataset.mode === mode;
    b.classList.toggle("segmented__btn--active", active);
    b.setAttribute("aria-selected", String(active));
  });

  if (mode === "preview" || mode === "edit") {
    $$(".ai-block[data-editing='true']").forEach((b) => exitEdit(b));
  }
}

// ── Send sheet (stub, never auto-send) ──────────────────────
function wireSendSheet() {
  const sheet = $("#sendSheet");
  const sendBtn = $("#sendBtn");

  sendBtn.addEventListener("click", () => {
    sheet.hidden = false;
  });

  sheet.addEventListener("click", (e) => {
    if (e.target.matches("[data-dismiss]")) sheet.hidden = true;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !sheet.hidden) sheet.hidden = true;
  });

  const copyState = $("#copyState");
  $$(".sheet__option").forEach((opt) => {
    opt.addEventListener("click", (e) => {
      if (opt.dataset.option === "link" && copyState) {
        copyState.textContent = "Copied";
        setTimeout(() => (copyState.textContent = "Copy"), 1600);
      }
      if (opt.dataset.option === "email") {
        // Prevent bubbling from internal buttons (prev/next/copy).
        if (e.target.closest("[data-email-prev], [data-email-next], [data-email-copy], [data-email-mailto]")) return;
        toggleEmailPanel();
      }
    });
  });

  wireEmailPanel();
}

// ── Suggested email: draft preview + cycle + copy / mailto ──
let emailDraftIdx = 0;

function wireEmailPanel() {
  const send = PROPOSAL.send;
  if (!send || !send.email || !send.email.variants.length) return;

  const toEl = $("[data-email-to]");
  if (toEl) toEl.textContent = `${send.to.name} <${send.to.email}>`;

  renderEmailDraft();

  const prev = $("[data-email-prev]");
  const next = $("[data-email-next]");
  const copy = $("[data-email-copy]");

  if (prev) prev.addEventListener("click", (e) => { e.stopPropagation(); cycleEmailDraft(-1); });
  if (next) next.addEventListener("click", (e) => { e.stopPropagation(); cycleEmailDraft(1); });
  if (copy) copy.addEventListener("click", (e) => {
    e.stopPropagation();
    copyEmailToClipboard(copy);
  });
}

function renderEmailDraft() {
  const variants = PROPOSAL.send.email.variants;
  const draft = variants[emailDraftIdx];
  const subject = $("[data-email-subject]");
  const body = $("[data-email-body]");
  const counter = $("[data-email-counter]");
  const mailto = $("[data-email-mailto]");
  const preview = $("[data-email-preview]");

  if (subject) subject.textContent = draft.subject;
  if (body) body.textContent = draft.body;
  if (counter) counter.textContent = `${emailDraftIdx + 1} / ${variants.length}`;
  if (preview) preview.textContent = `“${draft.subject}” (draft ${emailDraftIdx + 1} of ${variants.length}).`;

  if (mailto) {
    const to = PROPOSAL.send.to.email;
    const link = PROPOSAL.send.link;
    const fullBody = `${draft.body}\n\n${link}`;
    mailto.setAttribute(
      "href",
      `mailto:${to}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(fullBody)}`
    );
  }
}

function cycleEmailDraft(dir) {
  const total = PROPOSAL.send.email.variants.length;
  emailDraftIdx = (emailDraftIdx + dir + total) % total;
  renderEmailDraft();

  const body = $("[data-email-body]");
  if (body) {
    body.style.transition = "opacity 0.15s";
    body.style.opacity = "0.4";
    setTimeout(() => (body.style.opacity = "1"), 150);
  }
}

function toggleEmailPanel() {
  const panel = $("[data-email-panel]");
  const opt = $('.sheet__option[data-option="email"]');
  const label = $("[data-email-toggle-label]");
  if (!panel) return;
  const open = panel.hidden;
  panel.hidden = !open;
  if (opt) opt.setAttribute("aria-expanded", String(open));
  if (label) label.textContent = open ? "Hide" : "Review";
  if (opt) opt.classList.toggle("sheet__option--open", open);
}

function copyEmailToClipboard(btn) {
  const draft = PROPOSAL.send.email.variants[emailDraftIdx];
  const link = PROPOSAL.send.link;
  const text = `Subject: ${draft.subject}\n\n${draft.body}\n\n${link}`;
  const done = () => {
    const original = btn.textContent;
    btn.textContent = "Copied";
    btn.classList.add("sheet__email-copy--done");
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("sheet__email-copy--done");
    }, 1600);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(done);
  } else {
    // Fallback for older/secure-context issues.
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (_) {}
    document.body.removeChild(ta);
    done();
  }
}

// ── Boot ─────────────────────────────────────────────────────
mount();
