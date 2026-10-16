---
name: web-design
description: House style for Site Refresh Scout's website concepts. Use when designing, generating, reviewing or editing the three redesign mockups (Straight to the Point, a trade-matched character concept, Trusted Local) for a local business, or when changing the design prompts in scout/design.py. Steers pages away from the generic "AI-generated" look toward sites that feel made by a person for this specific business.
---

# Designing concepts that don't look AI-made

The owner of a small local business should open the concept and think "that's *my* place",
not "that's a template". Generic AI pages are recognisable because every model makes the same
safe choices. Make specific ones, rooted in this business, its trade and its town.

## Start from the business, not the style

Before writing any CSS, decide in one line each:
- **Who walks in the door**, and what they need in the first five seconds (call, hours, menu, directions).
- **One material or place cue** from the trade or location: a diner's menu board, a mechanic's
  work order, a brewery's can label, a desert town's adobe and sun-faded paint, a lawyer's letterhead.
  Let that cue drive the palette, type and one or two layout ideas. Don't decorate with it literally.
- **The single most useful fact** on the page (open late, same-day repair, 40 years on Main St).
  Lead with it in plain words.

## Banned: the AI tells

Never use any of these:
- Purple, violet, indigo or blue-to-purple gradients; gradient text; "aurora" or mesh blob backgrounds.
- Glassmorphism (`backdrop-filter: blur` cards), glowing shadows, neon outlines.
- Pill-shaped (`border-radius: 999px`) buttons *and* badges *and* tags all on one page.
  Pick one corner radius for the whole site; 0–6px is usually right.
- The same soft shadow and 12–16px radius on every card.
- Three identical icon-title-blurb feature cards in a row. A "Why choose us" grid of them.
- Emoji or generic line icons standing in for content (✨ 🚀 ⚡, a wrench icon over "Repairs").
- Everything centered. A centered hero, then centered section headings, then a centered CTA band.
- Eyebrow labels in small spaced caps above every heading ("OUR SERVICES", "ABOUT US").
- Over-used fonts: Inter, Poppins, Montserrat, Space Grotesk, Manrope, DM Sans, Playfair Display,
  Fraunces. Use the pairing the prompt gives you.
- Marketing filler: "Elevate", "Experience the difference", "Your journey starts here",
  "Crafted with passion", "Where X meets Y", "Not just a ___", "We pride ourselves",
  "Quality you can trust", "Look no further". Three-adjective taglines. Rhetorical questions.
- Fake stats bars ("500+ happy customers"), star rows and testimonial carousels. You have no such facts.
- Decorative floating circles or blurred blobs behind the hero.

## Do instead

**Typography.** Set type like a print designer. A real scale with large contrast between
display and body (e.g. 4–6× at desktop). Tight leading on headings (1.0–1.1), comfortable body
(1.5–1.65, 60–72ch). Use weight, size and spacing for hierarchy before color. Optical details
matter: `text-wrap: balance` on headings, real curly quotes and en dashes, tabular figures for
hours and prices.

**Color.** Three to five colors, taken from the business's own brand colors, signage, photos or
trade. At least one color should be unexpected for a website but right for the business
(oxblood, mustard, bottle green, safety orange, chalk). Use flat color fields; skip gradients
unless one reproduces a real material.

**Layout.** Build on an asymmetric grid. Vary section rhythm: a dense block next to an open one,
a full-bleed band, a narrow column of text. Left-align by default. Let one element break the
grid on purpose. Hours, address and phone are designed content, not a footer afterthought:
hours as a real table with today's row highlighted is better than a hero slogan.

**Content-led sections.** The section list follows from what this business actually has.
A menu is set like a menu (dotted leaders, sections, item names prominent). A shop's services read
like a service board. A law office reads like a firm's letterhead. If there's little content,
make fewer, stronger sections rather than padding with generic blocks.

**Copy.** Write like the owner talks: short, concrete, local. Name the street, the neighborhood,
the specific services. Buttons say exactly what happens: "Call (505) 555-0142", "Get directions",
"See the menu". Never "Get started" or "Learn more".

**Details that signal a human made it.** Pick two or three, not all:
a hand-set rule or ornament built from the trade's cue, a printed-matter texture done in CSS,
an honest small-print line, a visible grid of the actual hours, a stamp or label motif,
real photography from the business given room to breathe with no overlay.

## The three concepts

Most leads are trades (contractors, auto repair, plumbers, electricians), with health practices
and professional offices next; restaurants and bars are rare. The concepts are built for them:

1. **Straight to the Point** (key `modern`): for the customer who needs them now. Phone, service
   area and hours are the hero; services are a scannable list.
2. **Character, matched to the trade** (key `bold`): the concept with personality, chosen in
   `scout/design.py` by trade family: **Workshop** for trades, **Calm & Clear** for health and
   care, **Quiet & Precise** for professional offices, **Bold & Vibrant** for food, drink and
   venues, and **Local Character** for everything else. A loud poster style is never right for a
   plumber or a dentist.
3. **Trusted Local** (key `classic`): established and warm; longevity, story and licenses when the
   facts give them.

They must differ structurally: three different design decisions, not one layout recolored three
times. Each concept should differ in at least three of: grid structure, hero composition, type
classification, nav pattern, how hours/location are shown, section order, and density.

## References: borrow the quality, never the look

These show what each direction is aiming at. Take the named quality and apply it to *this*
business's material. Never reproduce a reference's palette, layout or type; a concept that looks
like Aesop is as generic as one that looks like a template.

- **Straight to the Point:** GOV.UK, for plain hierarchy where every element serves a task.
  Real wayfinding signage, for big clear labels, numbers and arrows.
- **Workshop:** McMaster-Carr, for dense, no-nonsense utility people trust. A shop's work-order
  form or parts catalog, for numbered, ruled, practical layouts.
- **Calm & Clear:** a good pharmacy label or appointment card, for calm, plain instructions with
  nothing extra.
- **Quiet & Precise:** Pentagram, for work-first restraint. A small firm's letterpress stationery,
  for ink, paper and exact spacing.
- **Bold & Vibrant:** Teenage Engineering, for a site that looks like the product and breaks
  conventions on purpose. Hand-painted storefront signs and gig posters, for type that shouts
  with flat color and hard edges.
- **Trusted Local:** Aesop, for restraint, natural materials and copy that sounds like a person.
  Stripe Press, for book-like typography. A printed menu card or hardware-store catalog, for
  content set as content.
- **Any direction:** Frank Chimero's and Craig Mod's personal sites, for how far type and spacing
  alone can go.

Don't imitate Stripe or Linear (gradient meshes, glowing dark themes, crisp feature-card grids).
They're well made, but a thousand copies of them are where the generic AI look comes from.

## Final self-check

Before outputting, go through the page against the banned list and the questions below and fix
anything that fails. Do not mention the check in the output.
1. Could this page be pasted onto a different business in another trade by swapping the name? If yes, rework it.
2. Is anything from the banned list present?
3. Is the most useful fact visible without scrolling on a phone?
4. Is every claim on the page backed by the provided facts?
