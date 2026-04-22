# Proposal Exploration

Early-stage wireframes exploring how we might onboard creatives and what the resulting proposals look like for their clients.

## What's here

- **`creative-pro-onboarding/`** — 3-step onboarding flow. Captures brand assets, work & ideal clients, and pricing models (hourly, day, tiered, value-based, per-asset, retainer).
- **`proposal-frame/`** — the client-facing proposal. Universal inline editing via the `ai-block` affordance toolbar (pen / image / regenerate / reject). Extras + add-ons sum into the subtotal; line items can be hidden per proposal.

## Live

- Landing: https://sparkworkspro.github.io/proposal-exploration/
- Onboarding: https://sparkworkspro.github.io/proposal-exploration/creative-pro-onboarding/
- Proposal frame: https://sparkworkspro.github.io/proposal-exploration/proposal-frame/

## Running locally

Each folder is plain HTML/CSS/JS — no build step.

```bash
cd creative-pro-onboarding   # or proposal-frame
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Status

Wireframe only. No backend, no auth, no persistence. Uploaded images live in memory until refresh.
