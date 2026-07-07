const CACHE='zacarias-v2';
const FILES=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/pages/page-1.webp','./assets/pages/page-2.webp','./assets/pages/page-3.webp','./assets/pages/page-4.webp','./assets/pages/page-5.webp','./assets/pages/page-6.webp','./assets/pages/page-7.webp','./assets/pages/page-8.webp','./assets/pages/page-9.webp'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
