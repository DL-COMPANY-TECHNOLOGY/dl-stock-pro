// DL STOCK PRO - Service Worker
// Permite instalar la app y abrirla sin internet.
// Cambia la versión cada vez que publiques cambios grandes para limpiar la caché vieja.
const VERSION = 'dlstock-v18';
const APP_CACHE = VERSION + '-app';
const CDN_CACHE = VERSION + '-cdn';

const APP_FILES = [
  './',
  './index.html',
  './manifest.json',
  './logo.png',
  './dl-company.png',
  './legal.html',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

// Librerías externas que la app necesita para funcionar sin conexión
const CDN_FILES = [
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js'
];

// Hosts de recursos estáticos que se guardan al usarse (fuentes, íconos, OCR)
const CDN_HOSTS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdnjs.cloudflare.com',
  'unpkg.com',
  'cdn.jsdelivr.net',
  'tessdata.projectnaptha.com',
  'www.gstatic.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const app = await caches.open(APP_CACHE);
    // Cada archivo por separado: si falta uno, el resto se guarda igual
    await Promise.all(APP_FILES.map(f => app.add(f).catch(() => {})));
    const cdn = await caches.open(CDN_CACHE);
    // Si una librería externa falla, la instalación sigue igual
    await Promise.all(CDN_FILES.map(url =>
      fetch(url, { mode: 'no-cors' }).then(res => cdn.put(url, res)).catch(() => {})
    ));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => !k.startsWith(VERSION)).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Nunca se guardan los datos de Firebase (login e inventario en la nube)
  if (url.hostname.endsWith('googleapis.com') && !url.hostname.startsWith('fonts.')) return;
  if (url.hostname.endsWith('firebaseio.com') || url.hostname.endsWith('firebaseapp.com')) return;

  // La página principal: primero internet (para recibir actualizaciones), si no hay, la copia guardada
  if (req.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(APP_CACHE);
        cache.put('./index.html', fresh.clone());
        return fresh;
      } catch (e) {
        return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }

  const sameOrigin = url.origin === self.location.origin;
  const isCdn = CDN_HOSTS.includes(url.hostname);
  if (!sameOrigin && !isCdn) return;

  // Archivos estáticos: responde rápido con la copia guardada y la actualiza en segundo plano
  event.respondWith((async () => {
    const cache = await caches.open(sameOrigin ? APP_CACHE : CDN_CACHE);
    const cached = await cache.match(req, { ignoreVary: true });
    const network = fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    }).catch(() => null);
    if (cached) {
      event.waitUntil(network);
      return cached;
    }
    return (await network) || Response.error();
  })());
});
