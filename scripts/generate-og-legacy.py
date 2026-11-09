#!/usr/bin/env python3
"""Generates the legacy Open Graph card (1200x630).

Legacy is the light theme: white paper, blue accent, Inter. Same layout as the
canonical card so the family reads as one set.

Run: python3 scripts/generate-og-legacy.py
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

W, H = 1200, 630
PANEL = 780                      # left text panel
PAD = 72
MAXW = PANEL - PAD * 2

PORTRAIT = Path("public/images/profile.webp")
OUT = Path("public/images/og-legacy.jpg")

FONT_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"

BLUE = (37, 99, 235)             # blue-600 #2563eb
BLUE_LIGHT = (59, 130, 246)      # blue-500 #3b82f6
INK = (15, 23, 42)               # gray-900 #0f172a
BODY = (71, 85, 105)             # gray-600 #475569
MUTED = (100, 116, 139)          # gray-500 #64748b
PAPER = (255, 255, 255)
PAPER_2 = (248, 250, 252)        # gray-50 #f8fafc


def build_background() -> Image.Image:
    """Near-white vertical gradient with a faint blue wash bottom-left."""
    img = Image.new("RGB", (W, H))
    px = img.load()
    for y in range(H):
        t = y / (H - 1)
        base = (
            int(PAPER[0] - (PAPER[0] - PAPER_2[0]) * t),
            int(PAPER[1] - (PAPER[1] - PAPER_2[1]) * t),
            int(PAPER[2] - (PAPER[2] - PAPER_2[2]) * t),
        )
        for x in range(PANEL):
            dx, dy = (x - 100) / 520, (y - 700) / 420
            g = max(0.0, 1.0 - (dx * dx + dy * dy)) ** 2
            px[x, y] = (
                max(0, int(base[0] - 10 * g)),
                max(0, int(base[1] - 6 * g)),
                min(255, int(base[2] + 2 * g)),
            )
        for x in range(PANEL, W):
            px[x, y] = base

    d = ImageDraw.Draw(img)
    for x in range(PANEL):
        t = x / (PANEL - 1)
        d.line(
            [(x, 0), (x, 5)],
            fill=(
                int(BLUE[0] + (BLUE_LIGHT[0] - BLUE[0]) * t),
                int(BLUE[1] + (BLUE_LIGHT[1] - BLUE[1]) * t),
                int(BLUE[2] + (BLUE_LIGHT[2] - BLUE[2]) * t),
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


def trim_border(im: Image.Image) -> Image.Image:
    """The source has a grey frame; crop in until the near-white paper starts."""
    w, h = im.size
    px = im.load()

    def paper(x, y):
        r, g, b = px[x, y]
        return r > 244 and g > 244 and b > 244

    left = next((x for x in range(w // 4) if paper(x, h // 2)), 0)
    right = next((x for x in range(w - 1, w - w // 4, -1) if paper(x, h // 2)), w - 1)
    top = next((y for y in range(h // 4) if paper(w // 2, y)), 0)
    bottom = next((y for y in range(h - 1, h - h // 4, -1) if paper(w // 2, y)), h - 1)
    return im.crop((left, top, right + 1, bottom + 1))


img = build_background()

# Portrait: cover-crop the trimmed source into the 420x630 right panel.
pw, ph = W - PANEL, H
src = trim_border(Image.open(PORTRAIT).convert("RGB"))
scale = max(pw / src.width, ph / src.height)
sw, sh = int(src.width * scale), int(src.height * scale)
src = src.resize((sw, sh), Image.LANCZOS)
left = (sw - pw) // 2
top = int((sh - ph) * 0.10)
img.paste(src.crop((left, top, left + pw, top + ph)), (PANEL, 0))

d = ImageDraw.Draw(img)
# Blue divider between panel and portrait, plus a soft inner shadow.
d.line([(PANEL - 1, 0), (PANEL - 1, H)], fill=(219, 228, 242), width=2)

eyebrow_font = ImageFont.truetype(FONT_MONO, 19)
tracked(d, (PAD, 186), "LEGACY.JAGDISHSAH.COM.NP", eyebrow_font, BLUE, 3.4)

title_font = fit("Jagdish Sah", FONT_BOLD, 78, MAXW)
d.text((PAD - 2, 228), "Jagdish Sah", font=title_font, fill=INK)

sub_font = fit("Full Stack Developer", FONT_REG, 33, MAXW)
y = 352
for line in ("Full Stack Developer", "NEPSE Analyst"):
    d.text((PAD, y), line, font=sub_font, fill=BODY)
    y += 44

bar_y = y + 22
for i in range(96):
    t = i / 95
    d.line(
        [(PAD + i, bar_y), (PAD + i, bar_y + 4)],
        fill=(
            int(BLUE[0] + (BLUE_LIGHT[0] - BLUE[0]) * t),
            int(BLUE[1] + (BLUE_LIGHT[1] - BLUE[1]) * t),
            int(BLUE[2] + (BLUE_LIGHT[2] - BLUE[2]) * t),
        ),
    )

foot = "Next.js  ·  Python  ·  NEPSE analytics  ·  Pokhara, Nepal"
foot_font = fit(foot, FONT_MONO, 20, MAXW)
d.text((PAD, bar_y + 34), foot, font=foot_font, fill=MUTED)

OUT.parent.mkdir(parents=True, exist_ok=True)
img.save(OUT, "JPEG", quality=90, optimize=True, progressive=True)
print(f"{OUT}  {OUT.stat().st_size // 1024}K  {img.size}")
