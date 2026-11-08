#!/usr/bin/env python3
"""Generates the per-route Open Graph cards from the existing og-card.jpg.

Reuses the portrait half and rebuilds the left panel, so every card matches the
home card exactly instead of drifting into a second visual style.
Run: python3 scripts/generate-og-cards.py
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

W, H = 1200, 630
PANEL = 780                      # left text panel width; photo occupies the rest
PAD = 72                         # left text margin
MAXW = PANEL - PAD * 2           # usable text width

SRC = Path("public/og-card.jpg")
OUT = Path("public/og")
OUT.mkdir(parents=True, exist_ok=True)

FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"

CYAN = (56, 189, 248)
VIOLET = (139, 92, 246)
WHITE = (255, 255, 255)
BODY = (203, 213, 225)
MUTED = (148, 163, 184)


def build_background() -> Image.Image:
    """Dark navy gradient with a violet glow bottom-left, plus the top accent bar."""
    img = Image.new("RGB", (W, H))
    px = img.load()
    for y in range(H):
        t = y / (H - 1)
        base = (int(3 + 7 * t), int(6 + 10 * t), int(16 + 21 * t))
        for x in range(PANEL):
            # radial violet glow, strongest at the bottom-left corner
            dx, dy = (x - 120) / 420, (y - 640) / 380
            g = max(0.0, 1.0 - (dx * dx + dy * dy)) ** 2
            px[x, y] = (
                min(255, int(base[0] + 26 * g)),
                min(255, int(base[1] + 30 * g)),
                min(255, int(base[2] + 62 * g)),
            )
        for x in range(PANEL, W):
            px[x, y] = base

    # top accent bar: cyan -> violet across the text panel only
    d = ImageDraw.Draw(img)
    for x in range(PANEL):
        t = x / (PANEL - 1)
        d.line(
            [(x, 0), (x, 4)],
            fill=(
                int(CYAN[0] + (VIOLET[0] - CYAN[0]) * t),
                int(CYAN[1] + (VIOLET[1] - CYAN[1]) * t),
                int(CYAN[2] + (VIOLET[2] - CYAN[2]) * t),
            ),
        )
    return img


def fit(text: str, path: str, size: int, maxw: int) -> ImageFont.FreeTypeFont:
    """Largest font size at or below `size` that keeps `text` inside `maxw`."""
    while size > 18:
        f = ImageFont.truetype(path, size)
        if f.getlength(text) <= maxw:
            return f
        size -= 2
    return ImageFont.truetype(path, size)


def tracked(d, xy, text, font, fill, spacing):
    """Draw text with letter-spacing, which PIL has no option for."""
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + spacing


CARDS = [
    ("home", "JAGDISHSAH.COM.NP", "Jagdish Sah",
     ["Computer Engineering Student", "NEPSE Market Analyst"],
     "TU IOE WRC Pokhara  ·  Bishnupur, Siraha, Nepal"),
    ("about", "JAGDISHSAH.COM.NP/ABOUT", "About",
     ["From Bishnupur, Siraha", "to IOE WRC Pokhara"],
     "Prasadi Academy  ·  3.69 GPA  ·  BCT, Tribhuvan University"),
    ("cv", "JAGDISHSAH.COM.NP/CV", "Curriculum Vitae",
     ["Computer Engineering, IOE WRC", "NEPSE data analyst"],
     "3rd Semester  ·  No Backlogs"),
    ("nepse", "JAGDISHSAH.COM.NP/NEPSE", "NEPSE Analysis",
     ["Floorsheet data pipelines", "Broker accumulation tracking"],
     "Swing framework  ·  Quantitative tooling"),
    ("projects", "JAGDISHSAH.COM.NP/PROJECTS", "Projects",
     ["Autonomous data pipelines", "PWA tools  ·  Linux utilities"],
     "Eight systems, built and shipped"),
    ("spaces", "JAGDISHSAH.COM.NP/SPACES", "Digital Spaces",
     ["Five GitHub spaces,", "each with one purpose"],
     "Profile  ·  Pipelines  ·  Academic  ·  Experiments  ·  AI"),
    ("contact", "JAGDISHSAH.COM.NP/CONTACT", "Contact",
     ["Engineering work,", "NEPSE data, agentic AI"],
     "Open to collaboration"),
    ("topics", "JAGDISHSAH.COM.NP/TOPICS", "Topics",
     ["NEPSE tools, market view,", "strategy, life and career"],
     "Written from Pokhara, Nepal"),
    ("nepse-tools", "JAGDISHSAH.COM.NP/TOPICS/NEPSE-TOOLS", "NEPSE Tools",
     ["The software I built because", "NEPSE has no API"],
     "Floorsheet pipelines  ·  Storage  ·  Dashboards"),
    ("nepse-view", "JAGDISHSAH.COM.NP/TOPICS/NEPSE-VIEW", "My NEPSE View",
     ["How I read the market,", "including where I was wrong"],
     "Opinion, not advice"),
    ("nepse-strategy", "JAGDISHSAH.COM.NP/TOPICS/NEPSE-STRATEGY", "My NEPSE Strategy",
     ["The rules I execute,", "and the ones I break"],
     "Swing horizon  ·  Risk first"),
    ("life", "JAGDISHSAH.COM.NP/TOPICS/LIFE", "My Life",
     ["Siraha, Bardiya, Pokhara,", "and the space between"],
     "Written from Pokhara, Nepal"),
    ("career", "JAGDISHSAH.COM.NP/TOPICS/CAREER", "My Career",
     ["BCT at IOE WRC, and what", "I am building toward"],
     "Data engineering  ·  Financial technology"),
]

background = build_background()
portrait = Image.open(SRC).convert("RGB").crop((PANEL, 0, W, H))

for name, eyebrow, title, subtitle, footer in CARDS:
    img = background.copy()
    img.paste(portrait, (PANEL, 0))
    d = ImageDraw.Draw(img)

    eyebrow_font = ImageFont.truetype(FONT_MONO, 19)
    tracked(d, (PAD, 186), eyebrow, eyebrow_font, CYAN, 3.6)

    title_font = fit(title, FONT_BOLD, 78, MAXW)
    d.text((PAD - 2, 228), title, font=title_font, fill=WHITE)

    sub_font = fit(max(subtitle, key=len), FONT_REG, 33, MAXW)
    y = 352
    for line in subtitle:
        d.text((PAD, y), line, font=sub_font, fill=BODY)
        y += 44

    # accent rule under the subtitle block
    bar_y = y + 22
    for i in range(96):
        t = i / 95
        d.line(
            [(PAD + i, bar_y), (PAD + i, bar_y + 4)],
            fill=(
                int(CYAN[0] + (VIOLET[0] - CYAN[0]) * t),
                int(CYAN[1] + (VIOLET[1] - CYAN[1]) * t),
                int(CYAN[2] + (VIOLET[2] - CYAN[2]) * t),
            ),
        )

    foot_font = fit(footer, FONT_MONO, 20, MAXW)
    d.text((PAD, bar_y + 34), footer, font=foot_font, fill=MUTED)

    img.save(OUT / f"{name}.jpg", "JPEG", quality=88, optimize=True, progressive=True)

print(f"{len(CARDS)} cards -> {OUT}/")
for name, *_ in CARDS:
    p = OUT / f"{name}.jpg"
    print(f"  {p}  {p.stat().st_size // 1024}K")
