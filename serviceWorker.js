const MarkdownEdit = "MarkdownEdit"
const assets = [
  "/www/index.html",
  "/www/styles.css",
  "/www/app.js",
  "/www/favicon.ico",
  "/pkg/package.json",
  "/pkg/markdown_edit.js",
  "/pkg/markdown_edit.d.ts",
  "/pkg/markdown_edit_bg.wasm",
  "/pkg/markdown_edit_bg.d.ts",
]
let deferredPrompt;

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(MarkdownEdit).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
self.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallPromotion();
});
