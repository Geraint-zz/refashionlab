from pathlib import Path
from PIL import Image, ImageDraw

root = Path.cwd()
src = root / 'content-prep' / 'prepared-content' / 'assets' / 'images'
items = sorted(src.glob('*/*.png'))
thumb_w, thumb_h, label_h = 180, 180, 30
cols = 5
rows = (len(items) + cols - 1) // cols
sheet = Image.new('RGB', (cols * thumb_w, rows * (thumb_h + label_h)), 'white')
draw = ImageDraw.Draw(sheet)
for i, p in enumerate(items):
    with Image.open(p) as im:
        im = im.convert('RGB')
        im.thumbnail((thumb_w - 8, thumb_h - 8))
        x = (i % cols) * thumb_w + (thumb_w - im.width) // 2
        y = (i // cols) * (thumb_h + label_h) + (thumb_h - im.height) // 2
        sheet.paste(im, (x, y))
    draw.text(((i % cols) * thumb_w + 5, (i // cols) * (thumb_h + label_h) + thumb_h + 5), f'{p.parent.name}/{p.name}', fill='black')
out = root / 'docs' / 'planning' / 'skill04-contact-sheet-v1.png'
out.parent.mkdir(parents=True, exist_ok=True)
sheet.save(out, optimize=True)
print(f'CONTACT_SHEET_PASS {len(items)} {out}')
