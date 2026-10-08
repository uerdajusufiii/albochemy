"""Check that every file the website points to really exists.

Run it after moving, renaming or adding files:

    python python/check_project.py

It checks
  * every src="…" and href="…" in index.html and pages/*.html,
  * every url(…) in css/*.css (fonts, textures),
  * the page addresses used by js/app.js,
  * that every icon the pages and scripts use has a file in images/icons/,
    and that js/icons.js is up to date (otherwise run python/build_icons.py),
  * the video files listed in js/data/videos.js (LOCAL_VIDEOS),
  * the order of the <script> tags on each page.
It prints what it finds and ends with exit code 1 if something is missing.
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
problems: list[str] = []
notes: list[str] = []


def rel(p: Path) -> str:
    return p.relative_to(ROOT).as_posix()


def local(ref: str) -> bool:
    return not re.match(r"^(?:[a-z]+:|#|//)", ref, re.I)


def resolve(base: Path, ref: str) -> Path:
    ref = ref.split("#", 1)[0].split("?", 1)[0]
    return (base.parent / ref).resolve()


def check_html() -> int:
    count = 0
    pages = [ROOT / "index.html", *sorted((ROOT / "pages").glob("*.html"))]
    for page in pages:
        text = page.read_text(encoding="utf-8")
        for ref in re.findall(r'\b(?:src|href)="([^"]+)"', text):
            if not local(ref) or not ref.split("#")[0]:
                continue
            count += 1
            if not resolve(page, ref).exists():
                problems.append(f"{rel(page)}: missing file {ref}")
        scripts = re.findall(r'<script src="([^"]+)"', text)
        names = [s.rsplit("/", 1)[-1] for s in scripts]
        if names and names[-1] != "main.js":
            problems.append(f"{rel(page)}: js/main.js must be the last script")
        if "app.js" in names and "ui-text.js" in names and names.index("ui-text.js") > names.index("app.js"):
            problems.append(f"{rel(page)}: data/ui-text.js must come before app.js")
        if re.search(r"<style\b|\sstyle=\"", text):
            problems.append(f"{rel(page)}: CSS written inside the HTML (move it to css/)")
        if re.search(r"<script>(?!\s*</script>)|\son[a-z]+=\"", text):
            problems.append(f"{rel(page)}: JavaScript written inside the HTML (move it to js/)")
    return count


def check_css() -> int:
    count = 0
    for css in sorted((ROOT / "css").glob("*.css")):
        for ref in re.findall(r"url\(\s*['\"]?([^'\")]+)['\"]?\s*\)", css.read_text(encoding="utf-8")):
            if ref.startswith(("data:", "#")):
                continue
            count += 1
            if not resolve(css, ref).exists():
                problems.append(f"{rel(css)}: missing file {ref}")
    return count


def check_page_map() -> int:
    app = (ROOT / "js" / "app.js").read_text(encoding="utf-8")
    block = re.search(r"const PAGES = \{([^}]*)\}", app)
    if not block:
        problems.append("js/app.js: page list (const PAGES) not found")
        return 0
    paths = re.findall(r'"([^"]+\.html)"', block.group(1))
    for p in paths:
        if not (ROOT / p).exists():
            problems.append(f"js/app.js: page {p} does not exist")
    return len(paths)


def icon_names(args: str) -> set[str]:
    """Icon names in the first argument of icon(...), including both sides of a ? : choice."""
    first = re.split(r",(?![^\[]*\])", args, maxsplit=1)[0]
    if "?" in first:
        first = first.split("?", 1)[1]                    # ignore the condition, keep the results
    return set(re.findall(r'"([\w-]+)"', first))


def check_icons() -> int:
    files = {p.stem for p in (ROOT / "images" / "icons").glob("*.svg")} - {"favicon"}
    used: set[str] = set()
    for page in [ROOT / "index.html", *(ROOT / "pages").glob("*.html")]:
        used |= set(re.findall(r'href="#i-([\w-]+)"', page.read_text(encoding="utf-8")))
    for js in (ROOT / "js").rglob("*.js"):
        if js.name == "icons.js":
            continue
        text = js.read_text(encoding="utf-8")
        for args in re.findall(r"\bicon\(([^()]*)\)", text):
            used |= icon_names(args)
        used |= set(re.findall(r'\btoast\([^;]*?,\s*"([\w-]+)"\)', text))
        used |= set(re.findall(r'\bicon:\s*"([\w-]+)"', text))                   # experiments and topics
        for group in re.findall(r"\bppe:\s*\[([^\]]*)\]", text):                  # safety equipment icons
            used |= set(re.findall(r'"([\w-]+)"', group))
    for name in sorted(used - files):
        problems.append(f"icon '{name}' is used but images/icons/{name}.svg does not exist")
    sprite = (ROOT / "js" / "icons.js").read_text(encoding="utf-8")
    built = set(re.findall(r'<symbol id="i-([\w-]+)"', sprite))
    if built != files:
        problems.append("js/icons.js is out of date — run: python python/build_icons.py")
    unused = sorted(files - used - {"brand"})
    if unused:
        notes.append(f"icons not used at the moment: {', '.join(unused)}")
    return len(used)


def check_videos() -> int:
    text = (ROOT / "js" / "data" / "videos.js").read_text(encoding="utf-8")
    block = re.search(r"const LOCAL_VIDEOS = \{(.*?)\};", text, re.S)
    if not block:
        return 0
    lines = [l for l in block.group(1).splitlines() if not l.strip().startswith("//")]
    files = re.findall(r':\s*"([^"]+)"', "\n".join(lines))
    for f in files:
        if not (ROOT / "videos" / f).exists():
            problems.append(f"js/data/videos.js: videos/{f} does not exist")
    return len(files)


def main() -> int:
    counts = {
        "links in the HTML pages": check_html(),
        "files used by the CSS": check_css(),
        "pages used by js/app.js": check_page_map(),
        "icons used": check_icons(),
        "local video files": check_videos(),
    }
    for label, n in counts.items():
        print(f"checked {n:4d} {label}")
    for n in notes:
        print(f"note: {n}")
    if problems:
        print(f"\n{len(problems)} problem(s):")
        for p in problems:
            print(f"  - {p}")
        return 1
    print("\nAll paths are correct.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
