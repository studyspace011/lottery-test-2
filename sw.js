const CACHE_NAME = 'lottery-ledger-cache-v2'; // Incrementa la versión si cambias los archivos
const URLS_TO_CACHE = [
  '/',
  'index.html',
  'manifest.json',
  'icons'
  // No es necesario cachear CDNs externos como tailwind, jspdf, etc.
];

// Evento de instalación: guarda los archivos principales en la caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching core assets');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// Evento de activación: limpia las cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});


// Evento de fetch: sirve desde la caché primero (estrategia Cache-First)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si está en la caché, lo devuelve
        if (response) {
          return response;
        }
        // Si no, lo busca en la red
        return fetch(event.request);
      })
  );

});
