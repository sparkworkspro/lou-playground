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
    studio: "Boiling Pot",
    mark: "B",
    principal: "Jake Simmerman",
    role: "Brand & packaging designer",
    city: "Melbourne",
    links: [
      { kind: "web", label: "boilingpot.studio", url: "https://boilingpot.studio" },
      { kind: "instagram", label: "@boilingpotstudio", url: "https://instagram.com/boilingpotstudio" },
      { kind: "linkedin", label: "Jake Simmerman", url: "https://linkedin.com/in/jakesimmerman" },
    ],
  },
  client: {
    name: "Fishwife",
    contact: "LobJeff",
    role: "Co-founder",
  },
  project: {
    title: "Tinned Lobster",
    titleAccent: "Launch",
    tagline: "Packaging, print, and campaign work for Fishwife's first lobster tin.",
    reference: "SS-2026-047",
    date: "April 2026",
    sentOn: "22 Apr 2026",
    validUntil: "15 May 2026",
  },

  overview: {
    problem: {
      variants: [
        "Fishwife's tinned lobster is your most premium SKU yet, and the shelf next to it is no longer quiet. You need packaging that earns its price in the hand, and campaign work that lets the tin do most of the talking across every format it lands in.",
        "Tinned lobster is a category test for Fishwife: a higher price point, a more specific buyer, a shelf that's starting to fill. The design has to feel heirloom, not product, before anyone reads the backing copy.",
        "You're asking shoppers to pay more for a tinned protein many of them haven't bought before. The packaging and the launch collateral have to do the trust work the price tag can't do on its own.",
      ],
    },
    goals: [
      "Land a tin that belongs alongside the Rainbow Trout and Smoked Mackerel, not tacked on.",
      "Deliver print-ready artwork the press can run without a round of revisions.",
      "Ship a collateral system that travels from shelf to Instagram to wholesale deck, no re-draws.",
    ],
    audience: {
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
      { num: "3", label: "hours of calls" },
      { num: "2", label: "revisions" },
      { num: "8-9", label: "weeks" },
      { num: "30-day", label: "post-launch design support" },
    ],
    dates: {
      signBy: "Fri 1 May 2026",
      start: "Mon 4 May 2026",
      finish: "Mon 29 Jun 2026",
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
        deliverables: [
          "Shelf audit + reference library",
          "Three packaging directions to review",
          "Illustration and typography exploration",
          "Recommendation with rationale",
        ],
        outcomesHidden: false,
      },
      {
        eyebrow: "",
        name: "Design",
        timing: "Week 3–4",
        deliverables: [
          "Direction locked, illustration and type refined",
          "Tin label, outer sleeve, and case packaging",
          "First campaign visuals drafted from the same system",
        ],
        outcomesHidden: false,
      },
      {
        eyebrow: "",
        name: "Final artwork",
        timing: "Week 5",
        deliverables: [
          "Plate-ready files for the printer",
          "Dielines and barcode checked",
          "Proofs reviewed, colour signed off in studio",
        ],
        outcomesHidden: false,
      },
      {
        eyebrow: "",
        name: "Campaign collateral",
        timing: "Week 6–7",
        deliverables: [
          "Hero key visual + Instagram and paid social set",
          "POS cards and shelf talkers",
          "Wholesale one-pager",
        ],
        outcomesHidden: false,
      },
      {
        eyebrow: "",
        name: "Delivery",
        timing: "Week 8",
        deliverables: [
          "Source files, print specs, working brand sheet",
          "30-day post-launch design support",
        ],
        outcomesHidden: false,
      },
    ],
    hourlyRate: 160,
    weeklyCapacity: 30,
    callDurationMins: 60,
    feedbackBufferDays: 3,
    lineItems: [
      { label: "Packaging design: tin label + outer", qty: 1, rate: 6800 },
      { label: "Final print artwork: plate-ready", qty: 1, rate: 3200 },
      { label: "Campaign collateral: key visuals + social set", qty: 1, rate: 4400 },
      { label: "Custom lobster illustration", qty: 1, rate: 2600 },
      { label: "Shelf audit + art direction", qty: 1, rate: 1800 },
    ],
    tiers: {
      eyebrow: "Or pick a package",
      intro: "Same scope, three shapes. Pick the one that fits how you want to launch.",
      options: [
        {
          id: "essential",
          name: "Essential",
          tagline: "Just the tin, beautifully done.",
          price: 11200,
          includes: [
            "Packaging design: tin label + outer",
            "Final print artwork: plate-ready",
            "Shelf audit + art direction",
            "1 revision round",
          ],
          featured: false,
        },
        {
          id: "standard",
          name: "Standard",
          tagline: "Everything to launch with confidence.",
          price: 18800,
          includes: [
            "Everything in Essential",
            "Campaign collateral: key visuals + social set",
            "Custom lobster illustration",
            "2 revision rounds",
            "30-day post-launch support",
          ],
          featured: true,
        },
        {
          id: "premium",
          name: "Premium",
          tagline: "All-in, launch + first campaign wave.",
          price: 26800,
          includes: [
            "Everything in Standard",
            "Website landing page",
            "Video teaser · 30s for Instagram + TikTok",
            "3 revision rounds",
            "60-day post-launch support",
          ],
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
        price: 3400,
        duration: "+1 week",
      },
      {
        id: "teaser",
        name: "Video teaser",
        desc: "30-second teaser cut for Instagram and TikTok. Directed with a partner DP in the Collingwood studio; edited in-house off the same illustration library.",
        price: 4200,
        duration: "+2 weeks",
      },
      {
        id: "event",
        name: "Lobster launch event",
        desc: "One-night launch at a chef-partner restaurant. Menus, invites, table cards, and signage all in the packaging system. Built to lift straight into press coverage.",
        price: 5800,
        duration: "+3 weeks",
      },
    ],
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
    tax: { rate: 0.1, label: "GST 10%" },
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
    ],
  },

  terms: {
    ownershipFull: true,
    extraRevisionRate: 160,
    fullTermsExpanded: false,
    fullTermsCollapsed: false,
    fullTermsBody: "",
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
        body: `You can see my full terms and conditions <a href="https://boilingpot.studio/terms" target="_blank" rel="noopener noreferrer">here</a>.`,
      },
    ],
    cta: {
      title: "Ready when you are.",
      sub: "Accept below to secure your spot.",
      action: "Accept proposal",
    },
    sign: "Jake",
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
  hiddenCaseThumbs: new Set(), // case-study indices whose thumb is hidden from the client (per-case opt-out)
  hiddenBlocks: new Set(), // named blocks the creative has hidden ("addOns", "tiers"…)
  extras: [], // creative-pro-added extras, priced-in to core scope
  extraUid: 0, // incrementing id for extra rows
  selectedTier: null, // id of the pricing tier the client picks, if any
  caseLibraryOpen: false, // whether the library picker is expanded
};

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
          <span class="cover__meta-sent">Sent ${p.project.sentOn}</span>
        </div>
      </div>

      <div class="cover__body">
        <div>
          <div class="cover__kicker">${p.brand.studio} &nbsp;×&nbsp; ${p.client.name}</div>
          <h1 class="cover__title">${p.project.title} <em>${p.project.titleAccent}</em></h1>
          ${aiBlock("project.tagline", `<p class="cover__tagline">${p.project.tagline}</p>`)}
        </div>
        <div class="cover__aside">
          <div class="cover__plate" aria-hidden="true"></div>
        </div>
      </div>

      <div class="cover__foot">
        <div class="cover__foot-item">
          <span class="cover__foot-label">Prepared for</span>
          <span class="cover__foot-value">${p.client.contact}<br/><span class="cover__foot-sub">${p.client.role}</span><br/><span class="cover__foot-sub cover__foot-sub--brand">${p.client.name}</span></span>
        </div>
        <div class="cover__foot-item">
          <span class="cover__foot-label">From</span>
          <span class="cover__foot-value">${p.brand.principal}<br/><span class="cover__foot-sub">${p.brand.role}, ${p.brand.city}</span></span>
        </div>
        <div class="cover__foot-item">
          <span class="cover__foot-label">Valid until</span>
          <span class="cover__foot-value">${p.project.validUntil}</span>
        </div>
        <div class="cover__foot-item">
          <span class="cover__foot-label">Reference</span>
          <span class="cover__foot-value">${p.project.reference}</span>
        </div>
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
          <span class="block__label">Goals</span>
          <ul class="stack">
            ${o.goals.map((g) => `<li>${g}</li>`).join("")}
          </ul>
        </div>
        <div class="block">
          <span class="block__label">Who this is for</span>
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

      <div class="dates">
        <span class="dates__label">Proposed dates</span>
        <div class="dates__grid">
          <div class="dates__col">
            <span class="dates__col-label">Sign by</span>
            <span class="dates__col-value">${s.dates.signBy}</span>
            <span class="dates__col-sub">to start on schedule</span>
          </div>
          <span class="dates__arrow" aria-hidden="true">→</span>
          <div class="dates__col">
            <span class="dates__col-label">Start</span>
            <span class="dates__col-value">${s.dates.start}</span>
            <span class="dates__col-sub">research kicks off</span>
          </div>
          <span class="dates__arrow" aria-hidden="true">→</span>
          <div class="dates__col">
            <span class="dates__col-label">Estimated finish</span>
            <span class="dates__col-value">${s.dates.finish}</span>
            <span class="dates__col-sub">${s.dates.finishCaption || "eight weeks from start"}</span>
          </div>
        </div>
        ${aiBlock(
          "scope.dates.note",
          `<p class="dates__note">${dateNote}</p>`
        )}
      </div>

      <button type="button" class="nudge" data-nudge="timeline">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Need a hand figuring out timelines?</span>
        <span class="nudge__sub">We'll use your weekly capacity and each stage's hours.</span>
      </button>

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
            <ul class="milestone__list">
              ${m.deliverables.map((d) => `<li>${d}</li>`).join("")}
            </ul>
          </div>`
          )
          .join("")}
      </div>
    </section>`;
}

// Pricing is the HOW MUCH half: core scope line-items, creative-added extras,
// running totals, optional add-ons, and the tiered-package alternative. All
// three "pricing presentation" blocks (line items, add-ons, tiers) are
// individually hideable via the eye toggle in each block's header, so the
// creative can lead with whichever framing suits the client.
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

      <div class="line-items block${state.hiddenBlocks.has("lineItems") ? " block--hidden" : ""}" data-block="lineItems">
        <div class="line-items__head">
          <div class="block__head-left">
            <button type="button" class="block__toggle" data-block-toggle="lineItems"
                    title="${state.hiddenBlocks.has("lineItems") ? "Show to client" : "Hide from client"}"
                    aria-label="${state.hiddenBlocks.has("lineItems") ? "Show to client" : "Hide from client"}"
                    aria-pressed="${state.hiddenBlocks.has("lineItems")}">
              ${state.hiddenBlocks.has("lineItems") ? EYE_OFF_SVG : EYE_OPEN_SVG}
            </button>
            <span class="line-items__label">Core scope</span>
            <span class="block__pill">Hidden from client</span>
          </div>
          <span class="line-items__helper">Hide individual lines or the whole list. Your total stays the same.</span>
        </div>
        ${s.lineItems
          .map((li, i) => {
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
            <span class="line-item__total">${formatMoney(li.qty * li.rate, s.currency)}</span>
          </div>`;
          })
          .join("")}
      </div>

      <div class="totals" data-totals data-core-total="${lineItemsTotal}">
        <div class="totals__row">
          <span class="totals__label">Core scope</span>
          <span class="totals__value" data-core-value>${formatMoney(lineItemsTotal, s.currency)}</span>
        </div>
        ${renderExtrasList(s.currency)}
        ${renderExtrasAdd(s.extrasLibrary, s.currency)}
        <div class="totals__row totals__row--addons" data-addons-row hidden>
          <span class="totals__label">Add-ons <span class="totals__count" data-addons-count>(0)</span></span>
          <span class="totals__value" data-addons-value>${formatMoney(0, s.currency)}</span>
        </div>
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
          <span class="totals__value totals__value--grand" data-grand-value>${formatMoney(coreTotal * (1 + s.tax.rate), s.currency)}</span>
        </div>
      </div>

      <p class="totals__note">All prices in Australian dollars. GST 10% included in your total.</p>

      <div class="sense-check" title="MonoDesk sense-check against your rate card">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Matches your rate card: A$160/hr ex. GST over ~118 hrs on core scope.
      </div>

      ${renderAddOns(s.addOns, s.currency)}

      ${renderTiers(s.tiers, s.currency)}
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
        <span class="tier__price-value">${formatMoney(t.price, currency)}</span>
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
        <span class="add-on__price">+${formatMoney(ao.price, currency)}</span>
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
  return `
    <ul class="brand-links" aria-label="Studio links">
      ${links
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
      <div class="section__eyebrow">04 · About & similar work</div>
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
  const t = PROPOSAL.terms;
  return `
    <section class="section" id="section-terms" data-section="terms">
      <div class="section__eyebrow">05 · Terms</div>
      <h2 class="section__heading">The straightforward part.</h2>
      <p class="section__intro">Nothing unusual here. If anything below is a blocker, tell me early and we'll find a shape that works.</p>

      <div class="terms__grid">
        ${t.rows
          .map((row) => {
            if (row.kind === "schedule") {
              return `
                <div class="terms__row">
                  <div class="terms__key">${row.key}</div>
                  <div class="terms__value">
                    <ul class="payment-schedule">
                      ${row.schedule
                        .map(
                          (s) => `
                        <li>
                          <span class="payment-schedule__pct">${s.pct}</span>
                          <span>${s.note}</span>
                        </li>`
                        )
                        .join("")}
                    </ul>
                  </div>
                </div>`;
            }
            return `
              <div class="terms__row">
                <div class="terms__key">${row.key}</div>
                <div class="terms__value">${row.body}</div>
              </div>`;
          })
          .join("")}
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
        <p class="terms__sign">${t.sign}</p>
        ${renderBrandLinks(PROPOSAL.brand.links)}
      </div>
    </section>`;
}

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
  return `
    <div class="rail__label">Proposal</div>
    ${items
      .map(
        (i) => `
      <button class="rail__item${i.kind === "cta" ? " rail__item--cta" : ""}${state.activeSection === i.id ? " rail__item--active" : ""}" data-target="section-${i.id}">
        <span class="rail__dot"></span>
        ${i.label}
        ${
          i.kind === "cta"
            ? `<svg class="rail__item-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                 <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>`
            : ""
        }
      </button>`
      )
      .join("")}
    <div class="rail__foot">
      ${state.mode === "fields" ? `
      <button type="button" class="rail__estimate-btn" id="railEstimateTrigger">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <path d="M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M18 2l4 4-9 9H9v-4l9-9z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Estimate
      </button>` : ""}
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

function fsec(id, eyebrow, heading, body) {
  return `<section class="fs" id="form-section-${id}" data-form-section="${id}">
    <div class="fs__head">
      <div class="fs__ey">${eyebrow}</div>
      <h2 class="fs__heading">${heading}</h2>
    </div>
    <div class="fs__body">${body}</div>
  </section>`;
}

function fcard(title, body, opts = {}) {
  return `<div class="fcard${opts.blue ? " fcard--blue" : ""}">
    ${title ? `<div class="fcard__title">${title}</div>` : ""}
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

function renderFormCover() {
  const { client, brand, project } = PROPOSAL;
  return fsec("cover", "Cover", "Cover",
    fcard("For",
      frow("Name", finput(`type="text" value="${esc(client.contact)}" data-fld="client.contact" placeholder="Client name"`)) +
      frow("Brand", finput(`type="text" value="${esc(client.name)}" data-fld="client.name" placeholder="Brand or company"`))
    ) +
    fcard("From",
      frow("Name", finput(`type="text" value="${esc(brand.principal)}" data-fld="brand.principal"`)) +
      frow("Studio", finput(`type="text" value="${esc(brand.studio)}" data-fld="brand.studio"`)) +
      frow("Position", finput(`type="text" value="${esc(brand.role)}" data-fld="brand.role"`))
    ) +
    fcard("",
      frow("Valid until", finput(`type="text" value="${esc(project.validUntil)}" data-fld="project.validUntil" placeholder="e.g. 15 May 2026"`)) +
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
}

function renderFormOverview() {
  const { project, overview } = PROPOSAL;
  return fsec("overview", "01 · Overview", "Overview",
    fcard("",
      frow("Proposal title", finput(`type="text" value="${esc(project.title)}" data-fld="project.title"`)) +
      frow("Subtitle", finput(`type="text" value="${esc(project.titleAccent)}" data-fld="project.titleAccent" placeholder="Accent word (shown in italics on cover)"`)) +
      frow("Tagline", ftextarea(`data-fld="project.tagline" rows="2" placeholder="One-line project description"`, esc(project.tagline)))
    ) +
    fcard("Goals", renderGoalRows(overview.goals)) +
    fcard("Approach",
      frow("Label", fhinput(`type="text" value="${esc(overview.differentiator.label)}" data-fld="overview.differentiator.label" placeholder="How I'll approach it"`)) +
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

function renderFormScope() {
  const s = PROPOSAL.scope;
  const callsEntry  = s.includes.find(i => /calls/i.test(i.label));
  const revisEntry  = s.includes.find(i => /revision/i.test(i.label));
  const weeksEntry  = s.includes.find(i => /weeks?$/i.test((i.label || "").trim()));

  return fsec("scope", "02 · Scope", "Scope",
    fcard("Summary",
      frow("Calls", `<div class="finline">
        ${finput(`type="text" value="${esc(callsEntry ? callsEntry.num : "3")}" data-fld="scope.callsHours" style="width:60px"`)}
        <span class="finline__unit">hrs total</span>
        <span class="finline__sep">·</span>
        ${finput(`type="number" value="${s.callDurationMins || 60}" data-fld="scope.callDurationMins" min="15" max="180" style="width:60px"`)}
        <span class="finline__unit">min / call</span>
        <span class="finline__sep">·</span>
        <span class="finline__derived" id="calls-derived">${derivedCallCount(callsEntry ? callsEntry.num : "3", s.callDurationMins || 60)}</span>
      </div>`) +
      frow("Revisions", `<div class="finline">
        ${finput(`type="number" value="${revisEntry ? revisEntry.num : "2"}" data-fld="scope.revisions" min="0" max="10" style="width:60px"`)}
        <span class="finline__unit">rounds included</span>
      </div>`) +
      frow("Feedback buffer", `<div class="finline">
        ${finput(`type="number" value="${s.feedbackBufferDays || 3}" data-fld="scope.feedbackBufferDays" min="0" max="14" style="width:60px"`)}
        <span class="finline__unit">days / round</span>
      </div>`, { hint: "doesn't include weekends" })
    ) +
    fcard("Duration",
      frow("Total", `<div class="finline">
        ${finput(`type="text" value="${esc(weeksEntry ? weeksEntry.num : "8")}" data-fld="scope.totalDuration" style="width:80px"`)}
        <span class="finline__unit">weeks</span>
      </div>`)
    ) +
    fcard("Stages", renderStagesForm(s.milestones)) +
    fcard("Proposed dates",
      frow("Sign by",   finput(`type="text" value="${esc(s.dates.signBy)}" data-fld="scope.dates.signBy"`)) +
      frow("To start",  finput(`type="text" value="${esc(s.dates.start)}" data-fld="scope.dates.start"`)) +
      frow("Finish on", finput(`type="text" value="${esc(s.dates.finish)}" data-fld="scope.dates.finish"`))
    )
  );
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
               data-stage-field="eyebrow" data-stage-idx="${i}" placeholder="Eyebrow (optional)" />
        <input class="finput finput--name" type="text" value="${esc(m.name)}"
               data-stage-field="name" data-stage-idx="${i}" placeholder="Stage name" />
        <input class="finput finput--week" type="text" value="${esc(m.timing)}"
               data-stage-field="timing" data-stage-idx="${i}" placeholder="Week 1–2" />
      </div>
      <button type="button" class="fstage__remove" data-stage-remove="${i}" aria-label="Remove stage">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
    </div>
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
    </div>
  </div>`;
}

function renderFormEstimate() {
  const s = PROPOSAL.scope;
  const rate = s.hourlyRate || 160;
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
        ${finput(`type="number" value="${s.weeklyCapacity || 30}" data-fld="scope.weeklyCapacity" min="1" max="80" style="width:80px"`)}
        <span class="finline__unit">hrs / week</span>
      </div>`),
      { blue: true }
    ) +
    fcard("Hours per stage",
      `<div class="frows">
        ${HELPER_STAGES.map(st => frow(
          st.name,
          `<div class="finline">
            ${finput(`type="number" value="${st.hours}" data-est-stage="${st.key}" min="0" style="width:70px"`)}
            <span class="finline__unit">hrs</span>
          </div>`,
          { sub: st.weeks }
        )).join("")}
      </div>`
    ) +
    `<div class="est-result" data-est-result>
      <div class="est-row"><span>Total hours</span><strong data-est-hours>${hoursTotal} hrs</strong></div>
      <div class="est-row"><span>At ${s.currency}${rate}/hr</span><strong data-est-rate-total>${formatMoney(rateTotal, s.currency)}</strong></div>
      <div class="est-row est-row--sep"><span>Your quoted price</span><strong>${formatMoney(lineTotal, s.currency)}</strong></div>
      <div class="est-row${diffClass}" data-est-diff-row>
        <span>Difference</span>
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

function renderFormPricing() {
  const formats = [
    { id: "lineItems", label: "Itemised",  desc: "Line-by-line breakdown" },
    { id: "tiers",     label: "Packages",  desc: "Good / Better / Best tiers" },
    { id: "addOns",    label: "Add-ons",   desc: "Optional client-toggleable add-ons" },
  ];

  return fsec("pricing", "03 · Pricing", "Pricing",
    fcard("How you're presenting price",
      `<p class="fcard__desc">Choose which pricing blocks appear on your proposal. You can show multiple.</p>
      <div class="fprice-opts">
        ${formats.map(f => `
          <label class="fprice-opt${!state.hiddenBlocks.has(f.id) ? " fprice-opt--on" : ""}">
            <input type="checkbox" class="sr-only" data-pricing-toggle="${f.id}" ${!state.hiddenBlocks.has(f.id) ? "checked" : ""} />
            <span class="fprice-opt__check">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>
            </span>
            <span class="fprice-opt__body">
              <span class="fprice-opt__label">${f.label}</span>
              <span class="fprice-opt__desc">${f.desc}</span>
            </span>
          </label>`).join("")}
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
      </div>` : ""}`
    )
  );
}

function renderFormAbout() {
  const a = PROPOSAL.about;
  const bio = getVariant("about.bio", a.bio.variants);

  return fsec("about", "04 · About", "About",
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

function renderFormTerms() {
  const t = PROPOSAL.terms;
  const payRow       = t.rows.find(r => r.key === "Payment");
  const revisRow     = t.rows.find(r => r.key === "Revisions");
  const ownershipRow = t.rows.find(r => r.key === "Ownership");
  const timelineRow  = t.rows.find(r => r.key === "Timeline");
  const fullTermsRow = t.rows.find(r => r.key === "Full terms");
  const ownershipFull = t.ownershipFull !== false;
  const extraRate    = t.extraRevisionRate || 160;

  return fsec("terms", "05 · Terms", "Terms",
    fcard("Payment",
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
          Add milestone
        </button>
      </div>`
    ) +
    fcard("Revisions",
      frow("Rate for extra rounds", `<div class="finline">
        <span class="finline__currency">${PROPOSAL.scope.currency}</span>
        ${finput(`type="number" value="${extraRate}" data-fld="terms.extraRevisionRate" min="0" step="10" style="width:80px"`)}
        <span class="finline__unit">/ hr ex. GST</span>
      </div>`) +
      frow("Details", ftextarea(`data-fld="terms.revisionsText" rows="2"`, esc(revisRow ? revisRow.body : "")))
    ) +
    fcard("Ownership",
      `<div class="fownership-opts">
        <label class="fownership-opt${ownershipFull ? " fownership-opt--on" : ""}">
          <input type="radio" class="sr-only" name="ownership" value="full" ${ownershipFull ? "checked" : ""} data-ownership />
          <span class="fownership-opt__dot"></span>
          <div>
            <span class="fownership-opt__label">Client owns final artwork</span>
            <span class="fownership-opt__sub">On full payment. Working files stay with you unless bought out.</span>
          </div>
        </label>
        <label class="fownership-opt${!ownershipFull ? " fownership-opt--on" : ""}">
          <input type="radio" class="sr-only" name="ownership" value="limited" ${!ownershipFull ? "checked" : ""} data-ownership />
          <span class="fownership-opt__dot"></span>
          <div>
            <span class="fownership-opt__label">Limited licence</span>
            <span class="fownership-opt__sub">Specify usage rights and duration in the details below.</span>
          </div>
        </label>
      </div>` +
      frow("Details", ftextarea(`data-fld="terms.ownershipText" rows="2"`, esc(ownershipRow ? ownershipRow.body : "")))
    ) +
    fcard("Timeline",
      frow("Details", ftextarea(`data-fld="terms.timelineText" rows="2"`, esc(timelineRow ? timelineRow.body : "")))
    ) +
    renderFullTermsCard(fullTermsRow, t)
  );
}

function renderFullTermsCard(row, t) {
  const expanded = !!t.fullTermsExpanded;
  const body = t.fullTermsBody || "";
  return `<div class="fcard">
    <div class="fcard__title-row">
      <div class="fcard__title">Full terms</div>
      <button type="button" class="fcard__expand-btn" data-fullterms-toggle aria-expanded="${expanded}">
        ${expanded ? "Collapse" : "Expand"}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style="transition:transform 0.15s;transform:rotate(${expanded ? "180" : "0"}deg)"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
    <p class="fcard__desc">Embed your T&amp;Cs directly in the proposal. Clients can expand or collapse. Not linked externally.</p>
    ${expanded ? `<div class="fcard__expanded">
      ${ftextarea(`data-fld="terms.fullTermsBody" rows="10" placeholder="Paste your full terms and conditions here…"`, esc(body))}
      <label class="fcheck fcheck--mt">
        <input type="checkbox" ${t.fullTermsCollapsed ? "checked" : ""} data-fld-checkbox="terms.fullTermsCollapsed" />
        <span>Start collapsed on client view</span>
      </label>
    </div>` : ""}
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
    <div class="fview__estimate-trigger">
      <button type="button" class="fview__estimate-btn" id="estimateTrigger">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M9 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          <path d="M18 2l4 4-9 9H9v-4l9-9z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Estimate &amp; timeline
        <span class="fview__estimate-badge">Just for you</span>
      </button>
    </div>
  </div>`;
}

function mountEstimatePanel() {
  const body = $("#estimatePanelBody");
  if (!body) return;
  const s = PROPOSAL.scope;
  const rate = s.hourlyRate || 160;
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
        ${finput(`type="number" value="${s.weeklyCapacity || 30}" data-fld="scope.weeklyCapacity" min="1" max="80" style="width:80px"`)}
        <span class="finline__unit">hrs / week</span>
      </div>`),
      { blue: true }
    ) +
    fcard("Hours per stage",
      `<div class="frows">
        ${HELPER_STAGES.map(st => frow(
          st.name,
          `<div class="finline">
            ${finput(`type="number" value="${st.hours}" data-est-stage="${st.key}" min="0" style="width:70px"`)}
            <span class="finline__unit">hrs</span>
          </div>`,
          { sub: st.weeks }
        )).join("")}
      </div>`
    ) +
    `<div class="est-result" data-est-result>
      <div class="est-row"><span>Total hours</span><strong data-est-hours>${hoursTotal} hrs</strong></div>
      <div class="est-row"><span>At ${s.currency}${rate}/hr</span><strong data-est-rate-total>${formatMoney(rateTotal, s.currency)}</strong></div>
      <div class="est-row est-row--sep"><span>Your quoted price</span><strong>${formatMoney(lineTotal, s.currency)}</strong></div>
      <div class="est-row${diffClass}" data-est-diff-row>
        <span>Difference</span>
        <span data-est-diff>${diff >= 0 ? "+" : ""}${formatMoney(diff, s.currency)}</span>
      </div>
    </div>` +
    fcard("Start date",
      frow("Starts on", finput(`type="text" value="${esc(s.dates.start)}" data-fld="scope.dates.start" data-est-start`)) +
      frow("Sign by",   finput(`type="text" value="${esc(s.dates.signBy)}" data-fld="scope.dates.signBy"`)) +
      frow("Estimated finish", `<span class="fcomputed" data-est-finish>${esc(s.dates.finish)}</span>
        <span class="fcomputed__hint">calculated from start + weeks</span>`)
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
    if (e.target.closest("#estimateTrigger") || e.target.closest("#railEstimateTrigger")) {
      openEstimatePanel();
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
        if (path === "scope.dates.start")    { setFieldValue(path, t.value); recalcEstimateDisplay(); scheduleCanvasRefresh(); }
        if (path === "scope.dates.signBy")   { setFieldValue(path, t.value); scheduleCanvasRefresh(); }
      }
      if (t.dataset.estStage) {
        const st = HELPER_STAGES.find(s => s.key === t.dataset.estStage);
        if (st) { st.hours = Number(t.value) || 0; recalcEstimateDisplay(); scheduleCanvasRefresh(); }
      }
    });
  }
}

function mountFormView() {
  const fc = $("#formCanvas");
  if (!fc) return;
  fc.innerHTML = renderFormView();
  wireFormView();
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
function rerenderFormSection(id) {
  const fc = $("#formCanvas");
  if (!fc) return;
  const el = fc.querySelector(`#form-section-${id}`);
  if (!el) return;
  const renderers = {
    cover:    renderFormCover,
    overview: renderFormOverview,
    scope:    renderFormScope,
    pricing:  renderFormPricing,
    about:    renderFormAbout,
    terms:    renderFormTerms,
  };
  if (renderers[id]) el.outerHTML = renderers[id]();
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
  const rate = Number(PROPOSAL.scope.hourlyRate) || 160;
  const hoursTotal = HELPER_STAGES.reduce((n, s) => n + s.hours, 0);
  const lineTotal  = PROPOSAL.scope.lineItems.reduce((sum, li) => sum + li.qty * li.rate, 0);
  const rateTotal  = hoursTotal * rate;
  const diff       = lineTotal - rateTotal;

  const hoursEl   = fc.querySelector("[data-est-hours]");
  const rateEl    = fc.querySelector("[data-est-rate-total]");
  const diffEl    = fc.querySelector("[data-est-diff]");
  const diffRow   = fc.querySelector("[data-est-diff-row]");
  const finishEl  = fc.querySelector("[data-est-finish]");

  if (hoursEl)  hoursEl.textContent  = `${hoursTotal} hrs`;
  if (rateEl)   rateEl.textContent   = formatMoney(rateTotal, PROPOSAL.scope.currency);
  if (diffEl)   diffEl.textContent   = `${diff >= 0 ? "+" : ""}${formatMoney(diff, PROPOSAL.scope.currency)}`;
  if (diffRow) {
    diffRow.classList.remove("est-row--over", "est-row--under", "est-row--flat");
    diffRow.classList.add(diff > 1000 ? "est-row--over" : diff < -1000 ? "est-row--under" : "est-row--flat");
  }

  // Recalc finish from start + total weeks
  if (finishEl) {
    const weeksEntry = PROPOSAL.scope.includes.find(i => /weeks?$/i.test((i.label || "").trim()));
    const weeks = parseFloat((weeksEntry || {}).num) || 8;
    const finish = addWeeksToDateStr(PROPOSAL.scope.dates.start, weeks);
    if (finish) {
      PROPOSAL.scope.dates.finish = finish;
      finishEl.textContent = finish;
      // Also update the finish input in scope section
      const finishInput = fc.querySelector('[data-fld="scope.dates.finish"]');
      if (finishInput) finishInput.value = finish;
    }
  }
}

function addWeeksToDateStr(dateStr, weeks) {
  if (!dateStr) return null;
  // Strip leading weekday name: "Mon 4 May 2026" → "4 May 2026"
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

// ── Wire form view interactions ───────────────────────────────
function wireFormView() {
  const fc = $("#formCanvas");
  if (!fc || fc.dataset.wired === "true") return;
  fc.dataset.wired = "true";

  // ── input: sync to PROPOSAL ──────────────────────────────────
  fc.addEventListener("input", (e) => {
    const t = e.target;

    // Generic dotted-path binding
    if (t.dataset.fld) {
      const path = t.dataset.fld;

      if (path === "about.bio.active") {
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
      } else {
        setFieldValue(path, t.value);
      }

      // Side effects
      if (path === "scope.callsHours")       { updateIncludesEntry(/calls/i, t.value); recalcCallsDerived(); }
      if (path === "scope.callDurationMins") { PROPOSAL.scope.callDurationMins = Number(t.value) || 60; recalcCallsDerived(); }
      if (path === "scope.revisions")        updateIncludesEntry(/revision/i, t.value);
      if (path === "scope.totalDuration")    updateIncludesEntry(/weeks?$/i, t.value);
      if (path === "scope.hourlyRate")       { PROPOSAL.scope.hourlyRate = Number(t.value) || 160; recalcEstimateDisplay(); }
      if (path === "scope.weeklyCapacity")   { PROPOSAL.scope.weeklyCapacity = Number(t.value) || 30; recalcEstimateDisplay(); }
      if (path === "scope.dates.start")      recalcEstimateDisplay();
      if (path === "terms.extraRevisionRate") {
        PROPOSAL.terms.extraRevisionRate = Number(t.value) || 160;
        const r = PROPOSAL.terms.rows.find(row => row.key === "Revisions");
        if (r) r.body = r.body.replace(/A\$[\d,]+/g, `A$${t.value}`);
      }

      scheduleCanvasRefresh();
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

    // Goals list items
    if (t.dataset.flistItem && t.dataset.flistIdx !== undefined) {
      const arr = resolveField(t.dataset.flistItem);
      if (Array.isArray(arr)) { arr[Number(t.dataset.flistIdx)] = t.value; scheduleCanvasRefresh(); }
    }

    // Approach dot-point items
    if (t.dataset.diffItem !== undefined && t.dataset.diffIdx !== undefined) {
      const varIdx = state.variantIdx["overview.differentiator"] || 0;
      PROPOSAL.overview.differentiator.variants[varIdx][Number(t.dataset.diffIdx)] = t.value;
      scheduleCanvasRefresh();
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

    // Extras inline
    if (t.dataset.extraLabel) {
      const ex = state.extras.find(e => e.uid === Number(t.dataset.extraLabel));
      if (ex) { ex.label = t.value; scheduleCanvasRefresh(); updateTotals(); }
    }
    if (t.dataset.extraRate) {
      const ex = state.extras.find(e => e.uid === Number(t.dataset.extraRate));
      if (ex) { ex.rate = Number(t.value) || 0; scheduleCanvasRefresh(); updateTotals(); }
    }

    // Estimate stage hours
    if (t.dataset.estStage) {
      const st = HELPER_STAGES.find(s => s.key === t.dataset.estStage);
      if (st) { st.hours = Number(t.value) || 0; recalcEstimateDisplay(); scheduleCanvasRefresh(); }
    }
  });

  // ── change: checkboxes / radios ───────────────────────────────
  fc.addEventListener("change", (e) => {
    const t = e.target;

    if (t.dataset.pricingToggle) {
      if (t.checked) state.hiddenBlocks.delete(t.dataset.pricingToggle);
      else state.hiddenBlocks.add(t.dataset.pricingToggle);
      rerenderFormSection("pricing");
      scheduleCanvasRefresh();
    }

    if (t.dataset.stageOutcomes !== undefined) {
      PROPOSAL.scope.milestones[Number(t.dataset.stageOutcomes)].outcomesHidden = !t.checked;
      scheduleCanvasRefresh();
    }

    if (t.dataset.ownership) {
      PROPOSAL.terms.ownershipFull = t.value === "full";
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
  });

  // ── click: add / remove actions ───────────────────────────────
  fc.addEventListener("click", (e) => {
    const t = e.target;

    // Goals list
    const flAdd = t.closest("[data-flist-add]");
    if (flAdd) {
      const arr = resolveField(flAdd.dataset.flistAdd);
      if (Array.isArray(arr)) { arr.push(""); rerenderFormSection("overview"); scheduleCanvasRefresh(); }
    }
    const flRemove = t.closest("[data-flist-remove]");
    if (flRemove) {
      const [path, idxStr] = flRemove.dataset.flistRemove.split(":");
      const arr = resolveField(path);
      if (Array.isArray(arr)) { arr.splice(Number(idxStr), 1); rerenderFormSection("overview"); scheduleCanvasRefresh(); }
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
      PROPOSAL.scope.milestones.push({ eyebrow: "", name: "New stage", timing: "Week X", deliverables: [""], outcomesHidden: false });
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
    }

    // Reference show/hide
    if (t.closest("[data-ref-toggle]")) {
      if (state.hiddenBlocks.has("reference")) state.hiddenBlocks.delete("reference");
      else state.hiddenBlocks.add("reference");
      rerenderFormSection("cover"); scheduleCanvasRefresh();
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
  { key: "research",   name: "Research & concept",  weeks: "Weeks 1–2", hours: 24 },
  { key: "design",     name: "Design",              weeks: "Weeks 3–4", hours: 38 },
  { key: "refinement", name: "Refinement",          weeks: "Weeks 5–6", hours: 28 },
  { key: "production", name: "Production & print",  weeks: "Weeks 7–8", hours: 22 },
  { key: "calls",      name: "Calls &amp; check-ins",   weeks: "Across 8 weeks", hours: 3 },
];

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
  ".dates__label", ".dates__col-label", ".dates__col-value", ".dates__col-sub",
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
      if (state.mode === "preview") return;
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

function updateTotals() {
  const s = PROPOSAL.scope;
  const lineItemsTotal = s.lineItems.reduce((sum, li) => sum + li.qty * li.rate, 0);
  const extrasTotal = state.extras.reduce((sum, e) => sum + e.rate, 0);
  const selected = s.addOns.filter((ao) => state.selectedAddOns.has(ao.id));
  const addOnTotal = selected.reduce((sum, ao) => sum + ao.price, 0);
  const subtotal = lineItemsTotal + extrasTotal + addOnTotal;
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

  if (coreVal) coreVal.textContent = formatMoney(lineItemsTotal, s.currency);
  if (row) row.hidden = selected.length === 0;
  if (count) count.textContent = `(${selected.length})`;
  if (addOnVal) addOnVal.textContent = "+" + formatMoney(addOnTotal, s.currency);
  if (subVal) subVal.textContent = formatMoney(subtotal, s.currency);
  if (taxVal) taxVal.textContent = formatMoney(tax, s.currency);
  if (grandVal) {
    grandVal.textContent = formatMoney(grand, s.currency);
    grandVal.animate(
      [{ transform: "translateY(-2px)" }, { transform: "translateY(0)" }],
      { duration: 180, easing: "ease-out" }
    );
  }
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

      const action = btn.dataset.action;
      if (action === "edit") enterEdit(block);
      else if (action === "insert-image") insertImage(block);
      else if (action === "regenerate") regenerate(block, path, kind);
      else if (action === "reject") rejectBlock(block);
    });
  });

  document.addEventListener("click", (e) => {
    const editing = $(".ai-block[data-editing='true']");
    if (!editing) return;
    if (editing.contains(e.target)) return;
    exitEdit(editing);
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
  $("#app").classList.toggle("app--fields", mode === "fields");

  // Show the right editing surface
  if (canvas)     canvas.hidden     = mode === "fields";
  if (formCanvas) formCanvas.hidden = mode !== "fields";

  $$(".segmented__btn").forEach((b) => {
    const active = b.dataset.mode === mode;
    b.classList.toggle("segmented__btn--active", active);
    b.setAttribute("aria-selected", String(active));
  });

  if (mode === "preview") {
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
