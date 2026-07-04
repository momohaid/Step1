const CACHE = "step1-v13";

self.addEventListener("install", e => {
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  // Delete ALL old caches so no stale content ever serves
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => clients.claim())
  );
});

self.addEventListener("fetch", e => {
  // Network-first: always try live server, fall back to cache only if offline
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// Handle notification scheduling messages from the app
self.addEventListener("message", e => {
  if (e.data?.type === "SCHEDULE_NOTIFICATION") {
    const { ms, title, body } = e.data;
    setTimeout(() => {
      self.registration.showNotification(title, {
        body,
        icon: "/manifest.json",
        badge: "/manifest.json",
        tag: "step1-daily",
        renotify: true,
        requireInteraction: false,
        actions: [{ action: "open", title: "Open Schedule" }]
      });
    }, ms);
  }
});

self.addEventListener("notificationclick", e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: "window" }).then(list => {
      if (list.length) return list[0].focus();
      return clients.openWindow("/");
    })
  );
});
