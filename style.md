# 🌌 The Celestial Glassmorphic Design System (Zara Cosmic UI)

> A complete design, token, and component reference guide for creating personal portfolio websites, interactive CVs, and developer experiences with the signature **Zara Cosmic Aesthetic**.

---

## 🎨 1. Design Philosophy: "Cosmic Glassmorphism"

This design language blends three modern visual disciplines:
1. **Deep Space Minimalism**: Immersive, high-contrast dark space backgrounds (`#050713`) that reduce eye strain and make vibrant accents pop.
2. **Frosted Glassmorphism**: Multi-layered translucent panels (`rgba(14, 18, 38, 0.65)`) with `backdrop-filter: blur(16px)` and subtle glowing borders (`1px solid rgba(255, 255, 255, 0.08)`), giving elements depth and tactile quality without heavy shadows.
3. **Neon Luminescence**: Strategic, high-chroma accent colors (Cyan, Violet, Rose Gold) used as soft auras, glowing indicators, and interactive highlights to guide the user's attention.

---

## 💎 2. Design Tokens & CSS Variables

Drop this `:root` block into any CSS file to instantly inherit the color system, typography, and spacing:

```css
:root {
  /* Surface & Backgrounds */
  --bg-space: #050713;
  --bg-space-dark: #020308;
  --bg-surface: rgba(14, 18, 38, 0.65);
  --bg-surface-hover: rgba(22, 28, 58, 0.85);
  --bg-glass: rgba(18, 24, 52, 0.55);
  --bg-glass-strong: rgba(15, 20, 44, 0.85);

  /* Neon Accent Palette */
  --accent-cyan: #38bdf8;
  --accent-cyan-glow: rgba(56, 189, 248, 0.4);
  --accent-violet: #8b5cf6;
  --accent-violet-glow: rgba(139, 92, 246, 0.4);
  --accent-rose: #f43f5e;
  --accent-rose-glow: rgba(244, 63, 94, 0.35);
  --accent-amber: #fbbf24;
  --accent-amber-glow: rgba(251, 191, 36, 0.35);
  --accent-emerald: #10b981;
  --accent-emerald-glow: rgba(16, 185, 129, 0.35);

  /* Typography Colors */
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --text-dim: #64748b;

  /* Borders & Glows */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-glow-violet: rgba(139, 92, 246, 0.3);
  --border-glow-cyan: rgba(56, 189, 248, 0.35);

  /* Font Families */
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'Fira Code', 'JetBrains Mono', monospace;
  --font-poetic: 'Caveat', 'Georgia', cursive, serif;

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 9999px;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## 🖋️ 3. Typography Architecture

Pairing the right fonts establishes immediate hierarchy and developer credibility:

| Role | Font Family | Example Usage |
|:---|:---|:---|
| **Headings & Body** | `Plus Jakarta Sans` | Main page titles, intros, descriptions, buttons |
| **Tech & Metadata** | `Fira Code` | Code snippets, dates, badges, stats, terminal tags |
| **Signature / Quotes** | `Caveat` | Personal notes, handwritten sign-offs, quotes |

### Google Fonts Import Link
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Fira+Code:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet">
```

### Signature Heading Gradient Effect
```css
.hero-gradient-text {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 30%, #c7d2fe 70%, var(--accent-cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 🧩 4. Signature Reusable UI Components

### Component A: Frosted Glassmorphic Bento Card
Use this for **Experience cards**, **Projects**, and **Bio cards**:

```css
.cosmic-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: var(--radius-lg);
  padding: 24px;
  transition: var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.cosmic-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-cyan);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 20px var(--accent-cyan-glow);
}
```

### Component B: Glowing Badge / Tech Stack Chip
For highlighting technologies (e.g. `Python`, `Node.js`, `React`, `PWA`):

```html
<span class="tech-chip">Python 3.12</span>
<span class="status-pill">Available for Projects 🟢</span>
```

```css
.tech-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  color: #cbd5e1;
  transition: var(--transition-fast);
}

.tech-chip:hover {
  border-color: var(--accent-cyan);
  color: #fff;
  background: rgba(56, 189, 248, 0.1);
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid var(--border-glow-violet);
  border-radius: var(--radius-pill);
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--accent-cyan);
}
```

### Component C: Primary Action Button (Gradient Glow)
For "Download CV", "Contact Me", or "View Project":

```html
<button class="btn-cosmic-primary">
  <span>📄</span> Download Official CV
</button>
```

```css
.btn-cosmic-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: var(--radius-pill);
  background: linear-gradient(135deg, var(--accent-violet) 0%, #6366f1 100%);
  color: #fff;
  border: none;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 16px var(--accent-violet-glow);
  transition: var(--transition-normal);
  text-decoration: none;
}

.btn-cosmic-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.6);
}
```

### Component D: Pulsing Cosmic Avatar Orb
For profile pictures or brand marks:

```html
<div class="profile-orb-container">
  <div class="pulsing-glow-ring"></div>
  <img src="your-photo.jpg" alt="Jagdish Sah" class="profile-avatar-img">
</div>
```

```css
.profile-orb-container {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 20px auto;
}

.pulsing-glow-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--accent-cyan-glow) 0%, var(--accent-violet-glow) 70%, transparent 100%);
  animation: orbGlow 3s ease-in-out infinite alternate;
  z-index: 1;
}

.profile-avatar-img {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

@keyframes orbGlow {
  0% { transform: scale(0.96); opacity: 0.6; }
  100% { transform: scale(1.08); opacity: 1; }
}
```

---

## 📄 5. Complete Boilerplate: Minimalist CV / Personal Website

You can copy and paste this complete single-file boilerplate as `cv.html` or `index.html` for your personal domain:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jagdish Sah — Software Engineer & Builder</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Caveat:wght@700&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg: #050713;
      --card: rgba(14, 18, 38, 0.65);
      --border: rgba(255, 255, 255, 0.08);
      --cyan: #38bdf8;
      --violet: #8b5cf6;
      --text: #f1f5f9;
      --muted: #94a3b8;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: var(--text);
      font-family: 'Plus Jakarta Sans', sans-serif;
      line-height: 1.6;
      padding: 40px 20px;
    }

    .container {
      max-width: 860px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    /* Hero */
    .hero-card {
      background: var(--card);
      border: 1px solid var(--border);
      backdrop-filter: blur(16px);
      border-radius: 24px;
      padding: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      flex-wrap: wrap;
    }

    .hero-title {
      font-size: 2.2rem;
      font-weight: 800;
      background: linear-gradient(135deg, #fff 30%, var(--cyan) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .role-badge {
      font-family: 'Fira Code', monospace;
      color: var(--cyan);
      font-size: 0.85rem;
      margin-bottom: 8px;
    }

    .btn-download {
      background: linear-gradient(135deg, var(--violet), #6366f1);
      color: #fff;
      padding: 12px 24px;
      border-radius: 9999px;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.88rem;
      display: inline-flex;
      gap: 8px;
      align-items: center;
      box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
      transition: 0.2s ease;
    }
    .btn-download:hover { transform: translateY(-2px); }

    /* Bento Grid */
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      backdrop-filter: blur(12px);
      border-radius: 18px;
      padding: 24px;
      transition: 0.25s ease;
    }
    .card:hover {
      border-color: var(--cyan);
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 16px rgba(56, 189, 248, 0.25);
    }

    .card-title {
      font-size: 1.15rem;
      font-weight: 700;
      margin-bottom: 8px;
      color: #fff;
    }

    .meta-tag {
      font-family: 'Fira Code', monospace;
      font-size: 0.72rem;
      color: var(--cyan);
      margin-bottom: 12px;
      display: block;
    }

    .chip-group { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 14px; }
    .chip {
      background: rgba(255,255,255,0.05);
      border: 1px solid var(--border);
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 0.72rem;
      font-family: 'Fira Code', monospace;
      color: #cbd5e1;
    }

    /* Footer */
    footer {
      text-align: center;
      color: var(--muted);
      font-size: 0.8rem;
      font-family: 'Fira Code', monospace;
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <div class="container">
    
    <!-- Hero Profile Section -->
    <header class="hero-card">
      <div>
        <div class="role-badge">📍 Pokhara / Kathmandu, Nepal • Software Engineer</div>
        <h1 class="hero-title">Jagdish Sah</h1>
        <p style="color: var(--muted); max-width: 520px; margin-top: 8px;">
          Passionate builder focused on 100% offline-first PWAs, high-performance systems, and creative digital experiences.
        </p>
      </div>
      <div>
        <a href="CV_Jagdish_Sah.pdf" class="btn-download" target="_blank">
          <span>📄</span> Download CV
        </a>
      </div>
    </header>

    <!-- Experience & Projects Bento Grid -->
    <div class="grid">
      
      <!-- Project 1 -->
      <article class="card">
        <span class="meta-tag">OFFLINE UTILITY • 2026</span>
        <h2 class="card-title">🍜 WRC Hostel Canteen PWA</h2>
        <p style="color: var(--muted); font-size: 0.88rem;">
          Eliminated mess billing discrepancies with an offline-first PWA for hostel students.
        </p>
        <div class="chip-group">
          <span class="chip">Vanilla JS</span>
          <span class="chip">IndexedDB</span>
          <span class="chip">PWA</span>
        </div>
      </article>

      <!-- Project 2 -->
      <article class="card">
        <span class="meta-tag">CREATIVE TECH • 2026</span>
        <h2 class="card-title">📖 Shard of Emotion</h2>
        <p style="color: var(--muted); font-size: 0.88rem;">
          Kinetic typography and video synthesis turning emotional prose into cinematic reels.
        </p>
        <div class="chip-group">
          <span class="chip">Python</span>
          <span class="chip">Node.js</span>
          <span class="chip">Canvas</span>
        </div>
      </article>

      <!-- Project 3 -->
      <article class="card">
        <span class="meta-tag">INTERACTIVE WEB • 2026</span>
        <h2 class="card-title">💌 Ask Her (Date Request App)</h2>
        <p style="color: var(--muted); font-size: 0.88rem;">
          Interactive coder-themed web application with runaway buttons and Web Audio synthesis.
        </p>
        <div class="chip-group">
          <span class="chip">Web Audio API</span>
          <span class="chip">Confetti</span>
          <span class="chip">Zero-Dep</span>
        </div>
      </article>

      <!-- Project 4 -->
      <article class="card">
        <span class="meta-tag">PRODUCTIVITY • 2026</span>
        <h2 class="card-title">⏱️ Zara To-Do</h2>
        <p style="color: var(--muted); font-size: 0.88rem;">
          Personal task tracker featuring dual Gregorian and Bikram Sambat (BS) Nepali calendar.
        </p>
        <div class="chip-group">
          <span class="chip">TypeScript</span>
          <span class="chip">BS Calendar</span>
          <span class="chip">Offline PWA</span>
        </div>
      </article>

    </div>

    <!-- Contact & Connect -->
    <div class="card" style="text-align: center;">
      <h3 style="font-size: 1.2rem; margin-bottom: 8px;">Let's Build Something Meaningful Together</h3>
      <p style="color: var(--muted); font-size: 0.9rem; margin-bottom: 16px;">
        Open for high-impact collaborations, system architecture, and creative engineering.
      </p>
      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <a href="mailto:jagdishsah@example.com" class="btn-download" style="background: rgba(255,255,255,0.08); box-shadow: none; border: 1px solid var(--border);">
          ✉️ Send Email
        </a>
        <a href="https://github.com/YourZara" class="btn-download" style="background: rgba(255,255,255,0.08); box-shadow: none; border: 1px solid var(--border);" target="_blank">
          🐙 GitHub Profile
        </a>
      </div>
    </div>

    <footer>
      Crafted with 💖 by Jagdish & Zara • 100% Offline Capable
    </footer>

  </div>

</body>
</html>
```

---

## 🚀 6. Tips for Deploying Your Main Domain CV

1. **Keep it 100% Dependency-Free**: Avoid heavy multi-megabyte JavaScript frameworks (React/Next) for static CV pages. A single HTML + CSS file will load in under **50 milliseconds** anywhere in Nepal and globally.
2. **Include Web App Manifest**: Adding `<link rel="manifest" href="manifest.json">` lets recruiters or visitors save your CV directly to their phone's home screen like a native app.
3. **Print-Friendly CSS**: Add this media query so recruiters can press <kbd>Ctrl</kbd> + <kbd>P</kbd> to save a clean PDF:
   ```css
   @media print {
     body { background: #fff; color: #000; padding: 0; }
     .hero-card, .card { border: 1px solid #ccc; box-shadow: none; background: #fff; }
     .btn-download, footer { display: none; }
   }
   ```
