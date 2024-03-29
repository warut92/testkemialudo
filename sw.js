self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('game').then((cache) => cache.addAll([
      '/index.html',
      '/app.js',
      '/style.css',
    ])),
  );
});

self.addEventListener('active', (e) => {
});

self.addEventListener('fetch', (e) => {
  console.log("Venigita! ",e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
