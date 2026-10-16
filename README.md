# Sarik Designs

Marketing site for [sarikdesigns.com](https://sarikdesigns.com): websites, social alignment and local SEO for local businesses.

Plain HTML/CSS/JS with no build step.

```
index.html                     the one-page site
styles.css                     all styles (brand colors are tokens at the top)
script.js                      mobile menu + footer year
assets/brand/round-badge.svg   Round badge logo (header + footer)
assets/brand/san-diego-nod.svg San Diego nod monogram (favicon / app icon)
```

## Run locally

```bash
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Before launch: fill in the placeholders

Search `index.html` for `[` to find them:

- `[CITY / SERVICE AREA]` and `[CITY, STATE]`
- `[TYPICAL TIMELINE]`
- `[YOUR PHONE]`
- `[REPLY TIME]`: how soon you reply to a review request (contact section)
- `[WHO OWNS THE SITE, DOMAIN AND CONTENT]`: answer to the ownership FAQ
- Email is set to `hello@sarikdesigns.com` in `index.html` and `script.js`; change it if you use a different address.

## Review request form

The form at the bottom of the page works out of the box by opening a pre-filled email to `CONTACT_EMAIL`. To receive submissions without relying on the visitor's email app, create a free form at [formspree.io](https://formspree.io) and paste its endpoint into `FORM_ENDPOINT` at the bottom of `script.js`.

## Deploying

Any static host works. Netlify, Vercel and Cloudflare Pages can deploy straight from this private repo for free. Point `sarikdesigns.com` at the host with the DNS records it gives you. (GitHub Pages also works but needs a paid GitHub plan for private repos.)

## Brand

| Token | Hex |
| --- | --- |
| Green | `#216f5d` |
| Ink | `#18262b` |
| Cream | `#f5f2eb` |
| Sun | `#f0b86e` |
| Mint | `#9fd9c1` |

Fonts: Bricolage Grotesque (headings), Instrument Sans (body), from Google Fonts.

## Design rules for Claude

`.claude/skills/sarik-site/SKILL.md` is the house style for this site: locked brand, banned "AI look" patterns, honest-proof rules and the conversion checklist. Claude Code uses it for any change to the site.
