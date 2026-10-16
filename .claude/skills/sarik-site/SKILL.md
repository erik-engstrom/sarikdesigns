---
name: sarik-site
description: House style and conversion rules for the Sarik Designs website (sarikdesigns.com), a local web design studio selling websites, SEO foundations and social alignment to small businesses. Use for any design, layout, copy, pricing or content change to this repo's site (index.html, styles.css, script.js, assets/brand), and when reviewing it. Keeps the site looking made by a person, on-brand, and focused on getting business owners to book a free site review.
---

# Sarik Designs website

This site sells web design. It is also the portfolio: a local business owner judges our
work by this page before they read a word of it. If it looks templated or AI-made, we've
lost them. Every change should make the page more trustworthy, more specific to us, and
make the next step more obvious.

## Who reads it and what they need

**The reader:** an owner of a small local business (bakery, salon, contractor, dental
office, shop). Not technical, busy, a little skeptical of "web people". Often on a phone.
They either have no site or one that embarrasses them.

**What they need in the first five seconds:** that we make websites for businesses like
theirs, nearby, and that they can find out what's wrong with their site for free.

**The one action:** book a free site review. Everything else (pricing, process, FAQ)
exists to make that action feel safe. Secondary actions are emailing for a quote and
reading how it works. Never add a competing primary action (newsletter, "follow us",
chat widgets).

## Brand: locked

Don't change these without the owner asking. Use the tokens in `styles.css`, not new values.

- **Colors (5):** green `#216f5d` (primary, buttons, numbers), ink `#18262b` (text, dark
  bands), cream `#f5f2eb` (page), sun `#f0b86e` (small accents only: the sun dot, focus
  rings, "today" highlights), mint `#9fd9c1` (accents on dark backgrounds). White for
  alternating sections. Body text `#3f484d`; on dark backgrounds `--on-dark` and
  `--on-dark-muted`, on green `--on-green`. No new hues, no gradients.
- **Type:** Bricolage Grotesque (display: headings, prices, big numbers) and Instrument Sans
  (everything else). No third font.
- **Logos:** the Round badge (`#badge` symbol inline, `assets/brand/round-badge.svg`) in the
  header and footer. The San Diego nod tile (`assets/brand/san-diego-nod.svg`) as favicon
  and app icon only. Don't redraw, recolor or put either on a busy background.
- **Corners:** one radius, `--r: 6px`, everywhere. Circles only for the sun dot and logo.
- **The cue:** San Diego sunset on the water, from the logo. It appears as the wave rule
  (`.wave-rule`) and the sun dot. Use it at most two or three times on a page; it's a
  signature, not wallpaper.
- **Name:** "Sarik Designs", two words. Domain sarikdesigns.com. Contact email
  hello@sarikdesigns.com (also `CONTACT_EMAIL` in `script.js`).

## Banned: the AI tells

A design studio's site can't have these, ever:
- Pill-shaped buttons, badges or tags; mixed corner radii; the same soft shadow on every card.
- `backdrop-filter` glass effects, glows, gradients, gradient text, blobs or floating circles.
- Grids of identical icon-title-blurb cards. Generic line icons or emoji standing in for content.
- Small spaced-caps "eyebrow" labels above every heading.
- Everything centered. Left-align by default.
- Filler: "Elevate", "Take your business to the next level", "Experience the difference",
  "Crafted with passion", "We pride ourselves", "Look no further", "Get started", "Learn more".
  Three-adjective taglines. Rhetorical questions in body copy (FAQ questions are fine).
- Over-used fonts: Inter, Poppins, Montserrat, Space Grotesk, Manrope, DM Sans, Playfair, Fraunces.
- Stripe/Linear imitation: dark glowing themes, gradient meshes, crisp feature-card grids.

## Proof: honest or absent

Trust is the whole sale, and fake proof destroys it the moment someone notices.
- **Never invent** testimonials, star ratings, client logos, "50+ sites launched",
  "trusted by", years in business, or results ("3× more calls").
- **Before real clients:** show our craft directly (the hero before/after, the profile
  check table) and label any example as an example ("Example: Harbor Street Bakery").
- **With real clients:** real before/after screenshots with permission are the strongest
  section on the page. Name the business and neighborhood. Quote the owner only with their
  words and consent. Results only if measured, with the timeframe.
- Every promise (prices, "30 days of fixes", reply times, timelines) must be one the owner
  will put in writing. If a fact isn't confirmed, leave the bracketed placeholder
  (`[CITY / SERVICE AREA]`, `[TYPICAL TIMELINE]`, `[YOUR PHONE]`) rather than guess.

## Selling, plainly

- **Lead with the offer:** the free site review is visible at the top of the page and in
  the header on every scroll position. On a 375×812 phone, the main button must be visible
  without scrolling.
- **Prices are shown.** Hiding them reads as expensive or evasive to this audience. Current
  structure: Launch from $2,200 and Refresh from $1,800 (up to 5 pages each, SEO foundations
  and Google Business Profile included, 30 days of fixes); add-ons: social alignment $500
  with a site or $650 alone, care plan $79/month, extras quoted per item. Keep the
  small-print line saying prices are starting points and quotes are fixed in writing.
- **Answer the real worries** where they come up: what it costs, how long it takes, whether
  they have to write anything, whether they can update it themselves, who owns the site.
- **Say what happens next** at every action: what the form sends, what they get back, and
  when (only with a reply time the owner has committed to).
- **Buttons say exactly what happens:** "Book a free site review", "Email for a Launch
  quote", "Send my review request". Never "Submit", "Learn more" or "Get started".
- **The form stays short:** name, business, email, current site, optional note. Don't add
  required fields.

## Writing

- Write like the owner talks to a neighbor: short, concrete, warm, a little dry.
  "We'll tell you what we'd fix first", not "We deliver comprehensive digital solutions."
- No jargon without a plain explanation in the same sentence. "SEO foundations" is fine as a
  label; the sentence after it says what it means for them (people nearby find you in search).
- Be specific and local once the facts exist: the city, neighborhoods we serve, the kinds of
  businesses we've worked with. Specific beats impressive.
- Curly quotes and apostrophes (’ “ ”), en dashes for ranges (7am–3pm), US spelling.

## Layout and type

- Asymmetric grids, left-aligned, varied rhythm: a dense block (the service board, the check
  table) next to an open one (a short heading and paragraph). Alternate cream, white and one
  dark band; the green band is reserved for the contact section.
- Content set as content: services as a ruled, numbered board; SEO as a spec list; add-ons as
  a price list with dotted leaders; profile alignment as a table. Prefer these patterns to cards.
- Headings 1.0–1.1 line height with `text-wrap: balance`; body 1.5–1.65 and at most ~66ch.
  Tabular figures for prices and step numbers.
- Fewer, stronger sections over more, thinner ones. Don't add a section unless it answers a
  question the reader actually has.
- Accessibility is part of the craft: AA contrast at minimum (body text is ~8:1 on cream),
  real `<button>`/`<a>` elements, labels on every field, visible focus (sun outline), works
  with reduced motion, no horizontal scroll at 375px.

## Final self-check

Before finishing any change, check the page against these and fix what fails:
1. Could another web designer paste this page onto their site by swapping the name? If yes,
   make it more specific to Sarik Designs and its area.
2. Is anything from the banned list present?
3. On a phone, is "Book a free site review" visible without scrolling, and is the next step
   obvious on every screen?
4. Would a bakery owner understand every sentence?
5. Is every claim, price, timeline and example true or clearly labeled, with unknown facts
   left as placeholders?
6. Do colors, fonts, logos, the 6px radius and the wave rule match the locked brand?
