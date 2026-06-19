// Self-destructing service worker.
// This project does not use a service worker. This file exists only to
// remove a stale worker that a previous app registered on this origin/port:
// when the browser fetches /sw.js for its update check, it installs this
// version, which clears all caches and unregisters itself.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      try {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
        await self.registration.unregister();
        const clients = await self.clients.matchAll({ type: "window" });
        clients.forEach((client) => client.navigate(client.url));
      } catch {
        // no-op
      }
    })(),
  );
});
