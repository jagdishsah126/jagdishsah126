#!/usr/bin/env python3
"""Generates the swarm Open Graph card (1200x630).

Swarm is the alternate design: dark navy with gold accents, versus the
canonical site's cyan/violet. Same layout as the canonical card so the family
reads as one set, but the accent is gold and the copy is swarm's.

Run: python3 scripts/generate-og-swarm.py
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

W, H = 1200, 630
PANEL = 780                      # left text panel; portrait occupies the rest
PAD = 72
MAXW = PANEL - PAD * 2

PORTRAIT = Path("public/media/hero-portrait.webp")
OUT = Path("public/media/og-swarm.jpg")

FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"

GOLD = (216, 180, 90)            # --gold #d8b45a
GOLD_BRIGHT = (243, 217, 139)    # --gold-bright #f3d98b
WHITE = (238, 242, 248)          # --text #eef2f8
BODY = (154, 166, 184)           # --muted #9aa6b8
MUTED = (114, 126, 144)          # --dim #727e90


def build_background() -> Image.Image:
    """Dark navy vertical gradient with a gold glow bottom-left."""
    img = Image.new("RGB", (W, H))
    px = img.load()
    for y in range(H):
        t = y / (H - 1)
        base = (int(4 + 4 * t), int(6 + 7 * t), int(13 + 11 * t))
        for x in range(PANEL):
            dx, dy = (x - 110) / 460, (y - 650) / 400
            g = max(0.0, 1.0 - (dx * dx + dy * dy)) ** 2
            px[x, y] = (
                min(255, int(base[0] + 34 * g)),
                min(255, int(base[1] + 26 * g)),
                min(255, int(base[2] + 10 * g)),
            )
        for x in range(PANEL, W):
            px[x, y] = base

    d = ImageDraw.Draw(img)
    # top accent bar: gold, fading to deep gold across the text panel
    for x in range(PANEL):
        t = x / (PANEL - 1)
        d.line(
            [(x, 0), (x, 4)],
            fill=(
                int(GOLD_BRIGHT[0] + (GOLD[0] - GOLD_BRIGHT[0]) * t),
                int(GOLD_BRIGHT[1] + (GOLD[1] - GOLD_BRIGHT[1]) * t),
                int(GOLD_BRIGHT[2] + (GOLD[2] - GOLD_BRIGHT[2]) * t),
            ),
        )
    return img


def fit(text: str, path: str, size: int, maxw: int) -> ImageFont.FreeTypeFont:
    while size > 18:
        f = ImageFont.truetype(path, size)
        if f.getlength(text) <= maxw:
            return f
        size -= 2
    return ImageFont.truetype(path, size)


def tracked(d, xy, text, font, fill, spacing):
    x, y = xy
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += font.getlength(ch) + spacing


img = build_background()

# Portrait: cover-crop the 760x942 source into the right panel.
pw, ph = W - PANEL, H
src = Image.open(PORTRAIT).convert("RGB")
scale = max(pw / src.width, ph / src.height)
sw, sh = int(src.width * scale), int(src.height * scale)
src = src.resize((sw, sh), Image.LANCZOS)
left = (sw - pw) // 2
top = int((sh - ph) * 0.18)      # bias upward so the face sits high
img.paste(src.crop((left, top, left + pw, top + ph)), (PANEL, 0))

d = ImageDraw.Draw(img)

# Gold divider between panel and portrait.
d.line([(PANEL - 1, 0), (PANEL - 1, H)], fill=(90, 74, 36), width=2)

eyebrow_font = ImageFont.truetype(FONT_MONO, 19)
tracked(d, (PAD, 186), "SWARM.JAGDISHSAH.COM.NP", eyebrow_font, GOLD, 3.4)

title_font = fit("Jagdish Sah", FONT_BOLD, 78, MAXW)
d.text((PAD - 2, 228), "Jagdish Sah", font=title_font, fill=WHITE)

sub_font = fit("Computer Engineer", FONT_REG, 33, MAXW)
y = 352
for line in ("Computer Engineer", "NEPSE Analyst"):
    d.text((PAD, y), line, font=sub_font, fill=BODY)
    y += 44

bar_y = y + 22
for i in range(96):
    t = i / 95
    d.line(
        [(PAD + i, bar_y), (PAD + i, bar_y + 4)],
        fill=(
            int(GOLD_BRIGHT[0] + (GOLD[0] - GOLD_BRIGHT[0]) * t),
            int(GOLD_BRIGHT[1] + (GOLD[1] - GOLD_BRIGHT[1]) * t),
            int(GOLD_BRIGHT[2] + (GOLD[2] - GOLD_BRIGHT[2]) * t),
        ),
    )

foot = "Data-driven systems  ·  Autonomous pipelines  ·  Pokhara, Nepal"
foot_font = fit(foot, FONT_MONO, 20, MAXW)
d.text((PAD, bar_y + 34), foot, font=foot_font, fill=MUTED)

OUT.parent.mkdir(parents=True, exist_ok=True)
img.save(OUT, "JPEG", quality=88, optimize=True, progressive=True)
print(f"{OUT}  {OUT.stat().st_size // 1024}K  {img.size}")
