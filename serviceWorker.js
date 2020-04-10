const MarkdownEdit = "MarkdownEdit"
const assets = [
  "/", "/index.html", "/styles.css", "/app.js", "/pkg", "/pkg/package.json",
  "/pkg/markdown_edit.js", "/pkg/markdown_edit.d.ts",
  "/pkg/markdown_edit_bg.wasm", "/pkg/markdown_edit_bg.d.ts", "/pkg/.gitignore",
  "/pkg/README.md"
]

self.addEventListener(
    "install",
    installEvent => {installEvent.waitUntil(
        caches.open(MarkdownEdit).then(cache => {cache.addAll(assets)}))})
self.addEventListener(
    "fetch", fetchEvent => {fetchEvent.respondWith(
                 caches.match(fetchEvent.request)
                     .then(res => {return res || fetch(fetchEvent.request)}))})
