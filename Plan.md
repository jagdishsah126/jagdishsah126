# Plan.md — Jagdish Sah Personal Hub

> **Domain:** `jagdishsah.com.np`
> **Project Type:** Personal Hub / Personal Website
> **Primary Goal:** Build a central digital home for Jagdish Sah that represents the person, builder, student, interests, projects, experiments, and professional profile.
> **Status:** Planning
> **Source:** Based on the current CV information and the Celestial Glassmorphic Design System.

---

# 1. Core Vision

`jagdishsah.com.np` is **not an online CV with extra decoration**.

It is the main personal hub for Jagdish Sah.

The website should answer:

1. Who is Jagdish?
2. What does he build?
3. What is he currently learning/exploring?
4. What projects has he built?
5. What experiments has he tried?
6. What technologies does he use?
7. What are his interests?
8. Where can people find his work?
9. Where can someone view or download his CV?
10. How can someone contact him?

The CV is one important destination inside the website, not the identity of the entire website.

---

# 2. Product Philosophy

The website should feel like:

> **A living personal hub rather than a static resume.**

The site should be able to grow with Jagdish throughout university and beyond.

It should support:

- Professional identity
- Personal identity
- Projects
- Experiments
- Learning
- Writing / thoughts if added later
- NEPSE / market-data interests
- Technical work
- GitHub presence
- CV
- Contact information

The website should not require every section to be filled on day one.

Empty or future sections should not appear unfinished. They can be introduced when useful.

---

# 3. Identity

## Primary Identity

Do NOT lock the website permanently to the title "Software Engineer".

Current positioning:

> **Computer Engineering Student · Builder · Data & Market Enthusiast**

Possible homepage supporting line:

> **I build software, data tools and experiments around technology, automation and financial markets.**

Alternative shorter positioning:

> **Software • Data • AI • Automation • Financial Markets**

The final wording should be selected during implementation.

---

# 4. Main Information Architecture

Recommended top-level structure:

```text
jagdishsah.com.np/
│
├── /
│   └── Home / Personal Hub
│
├── /about
│   └── About Jagdish
│
├── /projects
│   └── Selected Projects
│
├── /experiments
│   └── Experimental / Personal Development Work
│
├── /github
│   └── Digital / GitHub Spaces
│
├── /nepse
│   └── NEPSE / Market Data Interest
│
├── /cv
│   └── Professional CV
│
├── /notes
│   └── Optional future writing / thoughts / technical notes
│
└── /contact
    └── Contact / Online Presence
```

Not every route needs to exist in version 1.

---

# 5. Homepage

The homepage is the **hub**, not the CV.

Recommended flow:

```text
Hero
  ↓
Currently / Now
  ↓
Selected Projects
  ↓
Technical Interests / Capabilities
  ↓
About
  ↓
Education
  ↓
Experiments
  ↓
Digital Spaces / GitHub
  ↓
CV CTA
  ↓
Contact
```

The exact ordering can change after visual prototyping.

---

# 6. Hero Section

## Goal

Immediately communicate:

- Name
- Current identity
- Location
- What Jagdish builds / explores
- Main navigation paths

Suggested structure:

```text
Jagdish Sah

Computer Engineering Student
Pokhara, Nepal

I build software, data tools and experiments
around technology, automation and financial markets.

[ Explore My Work ]
[ View CV ]

GitHub · Email · Other relevant links
```

Optional status line:

```text
⌁ Currently exploring
Python · AI-assisted development · NEPSE data · Automation
```

Avoid making the hero overly corporate.

Avoid:

> "Passionate software engineer with a proven track record..."

because the current profile is a student/builder rather than an experienced corporate engineer.

---

# 7. "Now" Section

Create a living snapshot of the current Jagdish.

Example:

```text
NOW

🎓 Studying
Computer Engineering @ TU WRC

📊 Exploring
NEPSE & market data

🤖 Exploring
AI-assisted development

💻 Building
Personal software & automation tools

🔬 Learning
Data analysis and systems
```

This section should be easy to update.

Purpose:

- Makes the website feel alive
- Prevents the homepage from becoming outdated
- Shows what currently matters
- Separates current activity from permanent biography

---

# 8. About Section

The About section should be more human than the CV.

Core idea:

> Jagdish is a Computer Engineering student who likes building things to solve problems he actually encounters.

Include themes:

- Curiosity
- Exploration
- Experimentation
- Technology
- Financial markets
- AI-assisted creation
- Software development
- Data

Possible narrative direction:

> I'm Jagdish, a Computer Engineering student from Nepal. I like building things that solve problems I actually encounter, especially around software, data, automation and financial markets.

The exact final copy should be written separately during implementation.

Do not turn the About section into a list of buzzwords.

---

# 9. Projects

Projects should show **evidence of ability**, not simply list technologies.

Each project card should communicate:

```text
PROJECT NAME
Category / Year

What problem did it solve?

What did I build?

What did I learn / demonstrate?

Technologies

[Live Demo]
[GitHub]
[Details]
```

## Selected official projects

Prioritize projects from the official/formal GitHub:

### 1. nepse-floorsheet-archive

Purpose:

- Collect complete daily NEPSE transaction floorsheet data
- Archive data into version-controlled CSV files

Demonstrates:

- Python
- Automation
- Data extraction
- Data processing
- Data pipelines
- Git/GitHub
- Version-controlled data management

### 2. MD_File_Reader

Purpose:

- Lightweight Linux Markdown previewer
- Open `.md` files directly from file manager
- Avoid browser/Electron/internet dependency

Demonstrates:

- Python/software development
- Linux
- Desktop integration
- Lightweight application design
- Resource-conscious engineering
- Offline software

### 3. Canteen

Purpose:

- WRC hostel canteen/monthly billing utility

Demonstrates:

- Web development
- PWA development
- Frontend engineering
- Practical problem solving
- Local data handling
- Deployment
- UI/UX

### 4. Insta_Analyzer_V1

Purpose:

- Capture, analyze and compare Instagram follower/following data

Demonstrates:

- JavaScript
- Browser extensions
- Manifest V3
- Browser APIs
- Local data storage
- Data analysis
- Privacy-focused development

---

# 10. Project Philosophy

Do not write generic corporate project descriptions.

Prefer:

> "A small problem I actually had."

over:

> "A cutting-edge solution leveraging modern technologies..."

The website should communicate that projects are built because Jagdish wants to solve, test, explore or understand something.

---

# 11. Experiments Lab

Create a separate concept for work that is not necessarily CV-worthy.

Possible categories:

```text
Experiments
├── NEPSE / Market Data
├── AI Experiments
├── Web Experiments
├── Automation
├── Personal Utilities
└── Archived / Failed Experiments
```

Possible statuses:

```text
ACTIVE
COMPLETED
EXPERIMENT
ABANDONED
REPLACED
ARCHIVED
```

This allows the website to show development history without polluting the professional CV.

Important:

> Failed experiments are allowed to exist.

They should be presented honestly and briefly.

---

# 12. GitHub / Digital Spaces

The website should acknowledge that Jagdish intentionally uses multiple GitHub identities for different purposes.

Current structure:

```text
Jagdishsah126
→ Official / Formal / CV / Portfolio

Jagdishsah
→ Personal Projects / Utilities / Development History

DayaSah
→ NEPSE / Financial Data / Experiments

Jagdish-sah
→ BCT / College / Academic Projects

YourZara
→ Personal AI Agent / GitHub Automation
```

Possible website section:

> **My Digital Spaces**

Each space gets:

- Account name
- Purpose
- Link
- Optional selected projects

Do not dump every repository into the main portfolio.

The official account remains the primary professional GitHub.

---

# 13. NEPSE Section

NEPSE should be represented, but not allowed to completely consume the professional identity.

Possible structure:

```text
NEPSE

Market Analysis
Data
Automation
Experiments
Tools
```

The `/nepse` page can eventually contain:

- NEPSE-related projects
- Market-data tools
- Data pipelines
- Analysis tools
- Personal research
- Related GitHub projects

The homepage should present NEPSE as a significant interest, while the dedicated page can go deeper.

---

# 14. AI-Assisted Development

AI should be presented as a **development methodology**, not merely a list of AI products.

Current workflow:

```text
Study
→ Gemini

Creative work / planning / brainstorming
→ ChatGPT

Main agentic development
→ Antigravity CLI

Backup agentic development
→ Cursor CLI

Additional experimentation
→ Claude.ai
```

Possible section:

> **AI-Assisted Development**

Core message:

> AI is used as a development tool, while understanding and ownership of the resulting systems remain important.

Avoid presenting the site as:

> "I know 5 AI tools."

The interesting part is the workflow and how AI contributes to building software.

---

# 15. Technical Stack

The current information includes:

## Programming

- Python
- TypeScript
- JavaScript
- C
- C++

## Web / Software

- React
- Next.js
- Node.js
- Express
- Flask
- Tailwind CSS

## Databases

- MongoDB
- Supabase
- Neon DB
- CockroachDB
- PostgreSQL
- MySQL

## Tools

- Git
- GitHub
- Vercel
- Pandas
- BeautifulSoup

Do NOT display these as a giant "skill wall".

Instead group them by actual use.

Example:

```text
PROGRAMMING
Python · C++ · TypeScript · JavaScript · C

WEB
React · Next.js · Node.js · Express · Flask

DATA
Pandas · BeautifulSoup · PostgreSQL · MongoDB

TOOLS
Git · GitHub · Vercel
```

Where possible, link technologies to projects that demonstrate their use.

---

# 16. Education

Current structure:

```text
Bachelor in Computer Engineering
Tribhuvan University
Western Regional Campus, Pokhara
2025 – Present

Currently: 3rd Semester
Expected graduation: 2029
```

Then:

```text
+2 Science
Prasadi Academy, Lalitpur
2022 – 2024
```

Then:

```text
SEE / Secondary Education
Sagarmatha Higher Secondary School
Mirchaiya-6, Siraha
Completed 2022
```

Avoid putting "No backlogs" on the homepage.

If useful, it can appear in the detailed CV.

---

# 17. CV Page

The `/cv` page is the professional representation of Jagdish.

It should be substantially more concise than the full personal website.

Recommended sections:

```text
CV
├── Profile
├── Education
├── Technical Skills
├── Selected Projects
├── Interests
├── Contact
└── Download PDF
```

The website should offer:

```text
[ View CV ]
[ Download PDF ]
[ Print / Save PDF ]
```

The CV should remain printable.

---

# 18. CV Content Corrections

Before using the current CV as the final source:

### Replace

> Scraping Datas

with:

> Web Scraping / Data Extraction

### Remove self-scored statements

Avoid:

> Extraordinary in Python

Instead demonstrate Python ability through projects.

### Replace vague achievement claims

Avoid:

> Good Trading
> Good Computer related Info

Use factual descriptions such as:

> NEPSE / Financial Market Analysis

or place the topic under interests.

### Avoid unnecessary self-ranking

The CV should show evidence rather than assigning itself a skill score.

---

# 19. Contact

The contact section should be simple.

Include:

- Professional email
- GitHub
- Other professional/social links that are intentionally public
- Optional portfolio links

Do not expose unnecessary personal information.

Phone number should be included only where appropriate, such as the downloadable CV, rather than necessarily placing it prominently on the homepage.

---

# 20. Visual Design System

Use the existing **Celestial Glassmorphic / Zara Cosmic UI** as the starting point.

Core philosophy:

```text
Deep Space Minimalism
+
Frosted Glass
+
Controlled Neon Accents
```

Primary background:

```text
#050713
```

Secondary dark background:

```text
#020308
```

Surface:

```text
rgba(14, 18, 38, 0.65)
```

Primary accent:

```text
Cyan #38bdf8
```

Secondary accent:

```text
Violet #8b5cf6
```

Additional accents can exist but should be used sparingly.

---

# 21. Visual Restraint Rule

Important design rule:

> Do not make every element glow.

Target feeling:

```text
80% elegant
15% futuristic
5% "developer personality"
```

Avoid turning the website into a cyberpunk dashboard.

Neon should guide attention, not become the entire visual language.

---

# 22. Typography

Recommended:

### Primary

Plus Jakarta Sans

Use for:

- Headings
- Body
- Navigation
- Buttons

### Technical

Fira Code

Use for:

- Metadata
- Dates
- Status labels
- Tech tags
- Small technical information

### Optional personal/signature font

Caveat

Use extremely sparingly for:

- Personal notes
- Small quotes
- Signature-like elements

Do not use Caveat for normal body text.

---

# 23. Glass Cards

Use glassmorphic cards for:

- Projects
- Experience-like sections
- About cards
- Digital spaces
- Current status
- Selected technical areas

Recommended properties:

```text
backdrop-filter: blur(16px)
subtle 1px border
18–20px radius
controlled hover movement
subtle glow
```

Cards should not become visually heavy.

---

# 24. Hero Profile

Optional profile image/avatar.

Possible visual:

- Circular avatar
- Subtle cyan/violet glow
- Very restrained pulse

Do not make the profile image a giant animated orb that distracts from the name.

---

# 25. Navigation

Desktop:

```text
Jagdish Sah
Home
About
Projects
Experiments
CV
Contact
```

Mobile:

```text
Home
Work
About
CV
Menu
```

Navigation should remain simple.

Do not make every route permanently visible.

---

# 26. Motion

Animations should be subtle.

Use:

- Fade/slide on entrance
- Small card lift on hover
- Soft glow transitions
- Optional background particles
- Minimal profile glow

Avoid:

- Excessive parallax
- Constant movement
- Heavy particle systems
- Long loading animations
- Animations that reduce readability

Accessibility:

```text
@media (prefers-reduced-motion: reduce)
```

Disable nonessential motion.

---

# 27. Responsive Design

Must work well on:

- Desktop
- Laptop
- Tablet
- Mobile

Mobile is important because the website is a personal hub and may be opened directly from social profiles.

Do not simply shrink desktop cards.

Design the mobile layout intentionally.

---

# 28. Performance

The site should be lightweight.

Prefer:

- Static-first architecture
- Optimized images
- Minimal JavaScript
- Lazy loading where useful
- No unnecessary dependencies
- No heavy animation libraries unless justified

The visual design must not destroy the speed advantage of a simple personal site.

---

# 29. Accessibility

Required:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Sufficient text contrast
- Alt text for meaningful images
- Reduced-motion support
- Buttons/links that are understandable without visual effects

Glassmorphism must not compromise readability.

---

# 30. SEO

Basic SEO should be implemented.

Include:

```text
<title>Jagdish Sah — Personal Hub</title>

<meta name="description" ...>
```

Open Graph metadata:

```text
og:title
og:description
og:image
og:url
```

Also include:

- Canonical URL
- Favicon
- Social preview image
- Sitemap if appropriate
- robots.txt

Possible structured data:

```text
Person
WebSite
```

Do not over-engineer SEO.

---

# 31. Print / CV Support

The CV page should have a print-friendly mode.

Print mode should:

- Remove dark background
- Remove decorative glows
- Remove navigation
- Remove interactive buttons
- Use readable typography
- Preserve CV structure

The existing design system already specifies this direction.

---

# 32. PWA Decision

A PWA is optional.

Do not add PWA functionality merely because it is technically possible.

Priority:

1. Excellent personal website
2. Fast loading
3. Responsive design
4. CV
5. Projects
6. Optional PWA later

If a PWA is added later, it should have a genuine purpose.

---

# 33. Homepage Content Priority

Highest priority:

1. Jagdish identity
2. Current focus
3. Selected work
4. About
5. Technical capabilities
6. Education
7. Experiments
8. Digital spaces
9. CV
10. Contact

The user should understand the site within 30 seconds.

---

# 34. Content Strategy

The website should distinguish between:

### Permanent information

- Name
- Education history
- Core interests
- Major projects
- GitHub identities
- Contact

### Current information

- Current semester
- Current projects
- Current learning
- Current experiments
- Current interests

### Archived information

- Old projects
- Failed experiments
- Replaced implementations
- Historical work

This prevents the website from becoming a messy timeline.

---

# 35. Future "Notes" / Digital Garden

Keep `/notes` available as a future concept.

Potential topics:

- Programming
- Engineering
- NEPSE/data
- AI-assisted development
- Project writeups
- Things learned
- Technical experiments
- Personal observations

Do not build this in v1 unless there is actual content.

A dead blog section is worse than no blog section.

---

# 36. Future Personal Sections

Potential future areas:

```text
/notes
/writing
/lab
/now
/nepse
/archive
```

Only introduce them when they have enough content to justify existing.

---

# 37. Information Privacy

Public website should not expose unnecessary private information.

Potentially public:

- Name
- Professional email
- Professional GitHub
- Selected online identities
- Education
- Projects
- Public interests

Potentially restricted to CV:

- Phone number
- Additional personal contact details

Never expose:

- Passwords
- API keys
- Private account information
- Sensitive personal data
- Private financial information

---

# 38. What NOT to Do

Do not:

- Turn the homepage into a CV dump
- List every GitHub repository
- Claim professional experience that does not exist
- Self-rank skills with arbitrary stars
- Overuse buzzwords
- Overuse glowing effects
- Add unnecessary animations
- Add fake achievements
- Present experiments as polished products
- Present failed experiments as embarrassing failures
- Make NEPSE the only identity
- Make AI tools the identity
- Build a dead blog just for the sake of having a blog
- Over-engineer a simple personal website

---

# 39. Recommended Website Personality

The site should feel:

```text
Technical
Curious
Experimental
Personal
Calm
Futuristic
Honest
Minimal
```

It should NOT feel:

```text
Corporate
Generic
Over-polished
Startup-bro
AI-generated
Cyberpunk overload
```

---

# 40. Content Tone

Professional pages:

- Clear
- Concise
- Factual

Personal sections:

- More conversational
- Honest
- Human

Project descriptions:

- Problem-focused
- Technical
- Specific

Experiment descriptions:

- Honest
- Short
- Curious

Avoid generic phrases such as:

> Passionate developer leveraging cutting-edge technologies...

Prefer concrete statements.

---

# 41. Suggested Homepage Draft Structure

```text
┌────────────────────────────────────────────┐
│                                            │
│              JAGDISH SAH                   │
│      Computer Engineering Student          │
│                                            │
│  Software • Data • AI • Automation         │
│  • Financial Markets                       │
│                                            │
│  [ Explore Work ] [ View CV ]              │
│                                            │
└────────────────────────────────────────────┘

CURRENTLY
──────────────────────────────────────────────

🎓 Computer Engineering @ TU WRC
📊 Exploring NEPSE & market data
🤖 AI-assisted development
💻 Building personal software
🔬 Exploring data & automation


SELECTED WORK
──────────────────────────────────────────────

[ NEPSE Floorsheet Archive ]
[ MD File Reader ]
[ WRC Canteen ]
[ Instagram Analyzer ]


ABOUT
──────────────────────────────────────────────

Who I am
Why I build
What interests me


TECHNICAL AREAS
──────────────────────────────────────────────

Python
Web
Data
Automation
AI-assisted development


EXPERIMENTS
──────────────────────────────────────────────

Things I built to test an idea,
solve a problem, or simply find out
whether something would work.


DIGITAL SPACES
──────────────────────────────────────────────

Official GitHub
Personal GitHub
NEPSE Lab
Academic GitHub
AI Agent


EDUCATION
──────────────────────────────────────────────

BCT — TU WRC
+2 Science — Prasadi Academy
SEE — Sagarmatha HSS


CV
──────────────────────────────────────────────

Want the professional version?

[ Open CV ]
[ Download PDF ]


CONTACT
──────────────────────────────────────────────

Email
GitHub
Other public links
```

---

# 42. Technical Architecture

The exact framework is intentionally **not locked yet**.

Possible options:

### Option A — Static HTML/CSS/JS

Advantages:

- Extremely lightweight
- Simple deployment
- Very low maintenance
- Excellent for a personal hub

### Option B — Astro

Advantages:

- Static-first
- Component-based
- Excellent for content-heavy personal sites
- Easy future expansion

### Option C — React/Vite

Advantages:

- Familiar ecosystem
- Easy interactive components
- Good if the site will contain richer applications

### Decision rule

Do not choose a framework because it is fashionable.

Choose based on the final site requirements.

For a mostly content-driven personal hub, a static-first approach is preferred.

---

# 43. Deployment

Primary domain:

```text
jagdishsah.com.np
```

Preferred hosting direction:

- Vercel or another reliable static hosting provider

Requirements:

- HTTPS
- Custom domain
- Fast global delivery
- Automatic deployment from Git
- Easy updates

---

# 44. Version 1 Scope

V1 should include:

```text
[ ] Homepage
[ ] About
[ ] Selected Projects
[ ] Technical Areas
[ ] Education
[ ] Experiments
[ ] GitHub / Digital Spaces
[ ] CV page
[ ] CV PDF download
[ ] Contact
[ ] Responsive design
[ ] SEO basics
[ ] Accessibility basics
[ ] Print-friendly CV
[ ] Custom domain
```

Do NOT include everything immediately.

---

# 45. Version 2 Ideas

Potential V2:

```text
[ ] /notes
[ ] /nepse
[ ] Project detail pages
[ ] Experiment archive
[ ] Dynamic Now section
[ ] GitHub API integration
[ ] Project search/filter
[ ] PWA
[ ] More interactive visualizations
```

---

# 46. Version 3 / Long-Term

Possible long-term evolution:

```text
Personal Hub
      │
      ├── Portfolio
      ├── CV
      ├── Projects
      ├── Experiments
      ├── Notes
      ├── NEPSE Lab
      ├── Data
      ├── Personal Archive
      └── Digital Garden
```

The website can eventually become a persistent archive of Jagdish's development journey.

---

# 47. Final Design Principle

The site should represent:

> **A person who builds, experiments, learns, and explores.**

Not:

> **A student desperately trying to look like a senior software engineer.**

The website should grow naturally as real work accumulates.

Evidence should replace exaggerated claims.

Projects should replace self-rated skill bars.

Experiments should be allowed to remain experiments.

The CV should remain professional.

The homepage should remain human.

---

# 48. Pre-Development Decisions

Before implementation, confirm:

- [ ] Final identity tagline
- [ ] How personal the About section should be
- [ ] NEPSE visibility level
- [ ] Whether failed/abandoned experiments are public
- [ ] Whether personal/non-career interests appear
- [ ] Final navigation
- [ ] Framework
- [ ] Profile image/avatar decision
- [ ] Social links to expose
- [ ] CV final content
- [ ] Final color/accent intensity

---

# 49. Success Criteria

The website is successful if:

### In 10 seconds

A visitor knows:

> This is Jagdish Sah.

### In 30 seconds

A visitor understands:

> He is a Computer Engineering student who builds software, explores data/automation, and is interested in financial markets and AI-assisted development.

### In 1–2 minutes

A visitor can:

- See meaningful projects
- Understand his technical interests
- Find his GitHub
- Find his CV
- Contact him

### After deeper exploration

A visitor understands:

> Jagdish has a history of building things, experimenting, learning, and evolving his technical interests.

That is the real purpose of the personal hub.

---

# 50. Current Status

```text
VISION          ██████████ 100%
DESIGN SYSTEM   █████████░  90%
CONTENT         ███████░░░  70%
ARCHITECTURE    ███████░░░  70%
IMPLEMENTATION  ░░░░░░░░░░   0%
```

Next stage:

> **Finalize content + identity → choose architecture → build homepage → build secondary pages → polish → deploy.**
