// 한스포츠 예약 - 최소 서비스워커 (PWA 설치 요건 충족용)
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

// 네트워크 우선 (예약 현황은 항상 최신 데이터 필요)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
