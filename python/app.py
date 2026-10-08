"""Run ChemLab Explorer on a small local web server.

You do not need this to use the website: double-click index.html and it works,
even without internet. Use the server when

  * you have internet and want the YouTube Shorts to play inside the experiment
    pages (YouTube only plays inside pages that come from a web server), or
  * you want students on the same Wi-Fi to open the site on their own devices
    (start it with --share and give them the address it prints).

Examples
    python python/app.py                  opens http://localhost:8000
    python python/app.py --port 9000      uses another port
    python python/app.py --share          also reachable from other devices on your network
    python python/app.py --no-browser     does not open a browser window

Stop the server with Ctrl+C. Only Python's standard library is used.
"""
from __future__ import annotations

import argparse
import functools
import http.server
import socket
import sys
import webbrowser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent      # the project folder (where index.html is)

# Correct types for every kind of file in the project (some computers report wrong ones).
TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".json": "application/json",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".md": "text/markdown; charset=utf-8",
    ".txt": "text/plain; charset=utf-8",
}


class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map, **TYPES}

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-cache")   # always show the latest version of a file
        super().end_headers()

    def log_message(self, fmt: str, *args) -> None:     # keep the window quiet
        pass


def lan_address() -> str:
    """The computer's address on the local network (for --share)."""
    probe = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        probe.connect(("10.255.255.255", 1))           # no data is sent
        return probe.getsockname()[0]
    except OSError:
        return "127.0.0.1"
    finally:
        probe.close()


def make_server(host: str, port: int) -> http.server.ThreadingHTTPServer:
    handler = functools.partial(Handler, directory=str(ROOT))
    for candidate in range(port, port + 20):           # use the next free port if this one is busy
        try:
            return http.server.ThreadingHTTPServer((host, candidate), handler)
        except OSError:
            continue
    raise SystemExit(f"No free port found between {port} and {port + 19}.")


def main() -> int:
    parser = argparse.ArgumentParser(description="Serve ChemLab Explorer on this computer.")
    parser.add_argument("--port", type=int, default=8000, help="port to use (default 8000)")
    parser.add_argument("--share", action="store_true", help="let other devices on the same network open the site")
    parser.add_argument("--no-browser", action="store_true", help="do not open a browser window")
    args = parser.parse_args()

    if not (ROOT / "index.html").exists():
        print(f"index.html was not found in {ROOT}. Keep app.py inside the project's python folder.")
        return 1

    server = make_server("0.0.0.0" if args.share else "127.0.0.1", args.port)
    port = server.server_address[1]
    local_url = f"http://localhost:{port}/"
    print("ChemLab Explorer is running.")
    print(f"  On this computer:  {local_url}")
    if args.share:
        print(f"  On other devices:  http://{lan_address()}:{port}/   (same Wi-Fi network)")
    print("Press Ctrl+C to stop.")
    if not args.no_browser:
        webbrowser.open(local_url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    sys.exit(main())
