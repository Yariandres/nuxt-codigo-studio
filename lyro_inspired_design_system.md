# Lyro-inspired landing page design system

> Purpose: a conversion-first design system for the **AI for Small Business Owners / AI Business Starter System** landing page, inspired by the visual and structural language of getlyro.ai without copying Lyro's brand assets.

## 1. Design direction

**Personality:** premium, calm, credible, human, modern AI.

**Avoid:** neon cyberpunk, glowing robots, dark hacker aesthetics, excessive gradients, overly technical UI, tiny SaaS copy.

**Core visual behavior:**
- oversized black editorial headlines;
- warm off-white / light-neutral page backgrounds;
- strong black CTA buttons;
- white and pale-gray surfaces;
- selective lavender → sky-blue gradient accents;
- large rounded visual panels;
- product screenshots / workbook mockups instead of generic AI illustrations;
- generous whitespace;
- short, confident section titles.

---

## 2. Typography

The public crawl does not expose Lyro's exact font files reliably, so use the following **Polish-safe open-font approximation**. The tokenized system makes it easy to replace later.

### Font stack
- **Display / headlines:** `Inter Tight`, fallback `Inter`, `Arial`, sans-serif
- **Body / UI:** `Inter`, fallback `Arial`, sans-serif

Both support Polish diacritics well.

### Type scale — desktop
| Token | Size / line-height | Weight | Tracking | Use |
|---|---:|---:|---:|---|
| Display XL | 76 / 78 px | 600 | -0.045em | Hero headline |
| Display L | 64 / 68 px | 600 | -0.04em | Major section headline |
| H1 | 56 / 60 px | 600 | -0.035em | Section hero |
| H2 | 44 / 49 px | 600 | -0.03em | Standard section heading |
| H3 | 32 / 38 px | 600 | -0.02em | Card / feature heading |
| H4 | 24 / 30 px | 600 | -0.015em | Small card heading |
| Lead | 20 / 30 px | 400 | -0.01em | Hero / section intro |
| Body L | 18 / 28 px | 400 | 0 | Main body |
| Body | 16 / 25 px | 400 | 0 | Default body |
| Small | 14 / 21 px | 400–500 | 0 | Meta / labels |
| Eyebrow | 13 / 18 px | 600 | 0.08em | Uppercase kicker |

### Mobile scale
- Hero: `46px / 48px`, weight 600
- H1: `40px / 44px`
- H2: `34px / 39px`
- H3: `27px / 33px`
- Lead: `18px / 27px`
- Body: `16px / 25px`

### Typography rules
- Keep hero headlines at **8–12 words** if possible.
- Prefer 2-line section headlines over long 4-line blocks.
- Body copy max width: **620–680px**.
- Hero copy max width: **760–850px** when centered; **580–640px** in split layout.
- Use bold primarily for meaning, not decoration.

---

## 3. Color system

### Core neutrals
| Token | Hex | Use |
|---|---|---|
| Ink | `#0A0A0A` | Primary text / primary CTA |
| Ink Soft | `#252525` | Secondary strong text |
| Muted | `#60646C` | Body secondary / meta |
| Canvas | `#F7F7F4` | Main page background |
| Surface | `#FFFFFF` | Cards / form / pricing |
| Surface Alt | `#F0F1F2` | Alternating sections |
| Border | `#E0E2E5` | Card / input borders |
| Border Strong | `#C9CDD2` | Hover / emphasized border |

### AI accent
Use sparingly, mainly for visual cards, highlighted words, badges, or the CTA background section.

- Lavender: `#B9AEFF`
- Sky: `#94C7FF`
- Pale Lavender: `#EEEAFE`
- Pale Blue: `#EAF4FF`
- Accent gradient: `linear-gradient(135deg, #C5B9FF 0%, #9BC8FF 100%)`

### Functional
- Success: `#18794E`
- Warning: `#A15C00`
- Error: `#C43232`

### Color ratio rule
Aim for roughly:
- **75% neutrals / white space**
- **20% dark typography / CTA**
- **5% gradient / accent**

---

## 4. Layout system

### Page container
- Max content width: **1280px**
- Standard content width: **1200px**
- Text-only max width: **760px**
- Desktop side padding: **40px**
- Tablet side padding: **28px**
- Mobile side padding: **20px**

### Grid
Use a 12-column grid on desktop.
- Column gap: **24px**
- Common split: **5/7** or **6/6**
- Text + product visual: **5 columns text / 7 columns visual**
- Cards: 3-up desktop, 2-up tablet, 1-up mobile

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

### Section spacing
- Hero top/bottom: **96–128px**
- Major sections: **128–160px** vertical
- Compact sections: **88–104px**
- Section title → content: **48–64px**
- Card grid gap: **20–24px**

---

## 5. Spacing scale

Use an 8px-biased scale with a few compact steps.

`4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160`

Recommended usage:
- icon ↔ label: 8px
- heading ↔ paragraph: 16–20px
- paragraph ↔ CTA: 28–32px
- card internal padding: 28–40px
- adjacent cards: 20–24px
- major blocks inside a section: 48–64px

---

## 6. Radius and borders

### Radius tokens
- Small UI: **10px**
- Button / input: **12px**
- Card: **20px**
- Feature visual card: **28px**
- Large media panel: **32px**
- Pills / tags: **999px**

### Borders
- Default: `1px solid #E0E2E5`
- Hover: `1px solid #C9CDD2`
- Avoid heavy outlines.

### Shadows
Lyro's visual language feels cleaner when shadows are subtle.
- Card: `0 12px 32px rgba(10,10,10,.05)`
- Floating product mockup: `0 24px 70px rgba(10,10,10,.10)`
- Button: no default shadow

---

## 7. Buttons

### Primary button
- Background: `#0A0A0A`
- Text: white
- Height: **52px** desktop / **50px** mobile
- Padding: `0 24px`
- Radius: `12px`
- Font: 16px / 600
- Hover: `#252525`, translateY(-1px)
- Active: scale(.99)

**Recommended sales-page label:** `Pobierz system AI — 149 zł`

### Secondary button
- White / transparent background
- 1px dark-neutral border
- Black text
- Same height and radius as primary
- Hover background: `#F0F1F2`

### Text link
- 16px / 600
- Underline only on hover
- Arrow may move 2–4px right on hover

### Button grouping
Desktop: horizontal, 12px gap.
Mobile: full-width stacked only when the secondary CTA is genuinely useful.

---

## 8. Form controls

If checkout / lead capture happens on-page:
- Input height: **52–56px**
- Radius: **12px**
- Background: white
- Border: `#DADDE1`
- Padding: 16px
- Label: 14px / 500 / ink
- Focus: `2px solid rgba(148,199,255,.55)` + dark border
- Error message: 13px / error

Avoid more than 4 fields before payment / primary action.

---

## 9. Header / navigation

### Announcement bar
Optional. Height **34–38px**.
- pale lavender / blue tint or black
- 13–14px type
- one message only

Suggested message:
`AI nie musi być kolejnym projektem IT. Zacznij od jednego procesu.`

### Main nav
- Height: **76–84px**
- Canvas or white background
- Logo left
- 3–4 anchor links max
- CTA right
- Sticky after hero threshold or always sticky with light blur

For this product:
- Jak to działa
- Co dostajesz
- Dla kogo
- FAQ
- **Kup workbook**

---

## 10. Card system

### Feature card
- Surface: white or Surface Alt
- Radius: 28px
- Padding: 32–40px
- Heading: H3
- Body: Body / Body L
- Visual anchored bottom or right

### Stat card
- Large number: 56–72px / 600
- Supporting copy: 15–18px
- Minimal decoration

### Gradient AI card
- Background: accent gradient
- Black text
- Radius: 28–32px
- Use for exactly **one focal object per viewport**, not every card.

### Testimonial card
- White surface
- Quote: 22–28px
- Name / role: 14–16px
- Optional portrait: 44–56px circle

### Price card
- White or very pale accent surface
- Border: 1px neutral
- Radius: 28px
- Padding: 40–48px
- Price should be visually dominant but not more dominant than the hero headline.

---

## 11. Image and mockup art direction

Use the workbook itself as the hero visual.

**Preferred visuals:**
- 2–3 overlapping workbook pages;
- laptop / browser frame showing interactive fields;
- zoomed-in scorecard or AI workflow page;
- soft neutral or gradient background behind the product;
- floating cards for `Automation Scorecard`, `Business Context File`, `7-Day Plan`.

**Do not use:**
- humanoid robots;
- brains with circuits;
- random 3D AI spheres;
- generic stock photos of people staring at laptops.

### Product visual container
- Radius: 32px
- Background: pale-neutral or lavender/blue gradient
- Padding: 48–72px desktop / 24px mobile
- Product can slightly overflow container for depth.

---

## 12. Recommended landing-page layout

This adapts Lyro's homepage + report-page information architecture to a paid workbook.

### 01 — Announcement bar
Single concise AI/business message.

### 02 — Header
Minimal nav + dark purchase CTA.

### 03 — Hero: 5/7 split
**Left:**
- eyebrow: `AI BUSINESS STARTER SYSTEM`
- H1 focused on business outcome
- 2–3 line lead
- price / risk reducer
- primary CTA + secondary anchor

**Right:**
- large rounded workbook mockup panel
- 2–3 floating page/component cards

### 04 — Proof strip
Do not invent customer logos. Use product proof instead:
- `50 stron`
- `7 blueprintów`
- `7-dniowy plan`
- `bez kodowania`

### 05 — Problem / insight section
Large centered H2, max 900px:
`Nie potrzebujesz kolejnych 100 promptów. Musisz wiedzieć, gdzie AI ma sens w Twojej firmie.`

Follow with 3 short problem cards.

### 06 — Three-step system
Three large alternating split sections:
1. **Find the money** — audit / scorecard visual
2. **Give AI context** — Business Context File visual
3. **Build one workflow** — workflow blueprint visual

Each section:
- eyebrow
- H2
- 2–3 sentences
- 3 benefit bullets
- visual panel

### 07 — 10-minute first win
Accent-gradient full-width section.
Show the manual AI test path in 4 steps.

### 08 — What's inside
Bento-style 2–3 column grid:
- Interactive Workbook
- Automation Scorecard
- Business Context Template
- Prompt Library
- Safety Checklist
- 7-Day Plan
- Agent Blueprint Library
- AI Implementation Map

One card larger than the rest.

### 09 — Built for owners + teams
Two-column editorial section.
Left: owner responsibilities.
Right: what can be delegated to the team.

### 10 — Before / after
Simple comparison table or two-panel card:
`AI chaos` vs `First repeatable AI process`.

### 11 — Product preview
Use 3–5 real pages in an overlapping mockup arrangement.
Headline: `To nie są slajdy o AI. To są strony, na których pracujesz.`

### 12 — Price / purchase block
Large centered card.
- product name
- everything included
- price: **149 zł**
- one-company licence
- CTA
- digital delivery note

### 13 — FAQ
Accordion, max width 820px.

### 14 — Final CTA
Dark or gradient large-radius section.
Short headline + one CTA.

### 15 — Footer
Minimal legal links / business details.

---

## 13. Hero layout specification

### Desktop
```
container 1200px
┌──────────────────────── 5 cols ───────────────┬────────────── 7 cols ──────────────┐
│ eyebrow                                        │                                    │
│ H1                                             │  32px-radius product panel          │
│ lead                                           │                                    │
│ CTA + secondary                               │  workbook pages / floating cards    │
│ small trust note                               │                                    │
└────────────────────────────────────────────────┴────────────────────────────────────┘
```

- hero gap: 56–72px
- vertical alignment: center
- hero visual min height: 560–620px

### Mobile
Order:
1. eyebrow
2. H1
3. lead
4. CTA
5. trust note
6. product panel

No side-by-side elements below ~960px.

---

## 14. Motion

Keep motion quiet and product-focused.
- Duration: **180–260ms** UI; **500–700ms** section reveal
- Easing: `cubic-bezier(.2,.8,.2,1)`
- Hover lift: max 2–4px
- Product pages may float 4–8px slowly
- Respect `prefers-reduced-motion`

Avoid parallax-heavy experiences for this audience.

---

## 15. Copy rhythm to match the visual system

Lyro-style section writing works because the hierarchy is very short and direct. Use:

**Eyebrow**
`KROK 01`

**Headline**
`Znajdź pracę, za którą płacisz dwa razy.`

**Support**
`Zobacz, gdzie Twój zespół traci godziny na powtarzalne zadania i które z nich warto przekazać AI.`

**3 bullets max**
- Audyt czasu
- Scorecard automatyzacji
- Jeden proces wybrany do testu

Long explanatory copy belongs below the fold or inside FAQ.

---

## 16. Accessibility / implementation requirements

- Body text contrast minimum WCAG AA.
- Minimum tap target: 44×44px.
- Never put white text over the pale lavender/blue gradient without checking contrast.
- Use visible focus states.
- Do not encode meaning only with color.
- Polish text: use proper diacritics; avoid all-caps for long labels.
- Images should have descriptive alt text.
- Keep animations optional.

---

## 17. Design tokens summary

```text
Container:       1200–1280px
Page padding:    40 / 28 / 20px
Section Y:       128–160px
Grid gap:        24px
Card radius:     28px
Media radius:    32px
Button radius:   12px
Button height:   52px
Primary:         #0A0A0A
Canvas:          #F7F7F4
Surface:         #FFFFFF
Muted:           #60646C
Accent gradient: #C5B9FF → #9BC8FF
Display font:    Inter Tight
Body font:       Inter
```

---

## 18. What to borrow from Lyro vs. what to change

### Keep
- spacious editorial composition;
- oversized headings;
- short CTA pairs;
- alternating feature sections;
- product visuals inside rounded panels;
- high-contrast black CTA;
- sparse lavender/blue AI accent;
- proof/stat modules;
- strong final CTA.

### Change for this product
- prioritize **product preview** over brand logos;
- use **149 zł purchase CTA**, not demo/free-trial logic;
- make the first three steps the dominant story;
- visually show workbook pages much earlier;
- explain the team/delegation use case;
- add direct-response price and FAQ sections;
- keep navigation much smaller than a SaaS site.
