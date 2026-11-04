const CACHE='feitoemforma-v6.4-static';
const PRECACHE=['./','./index.html','./catalogo.html','./encomendas.html','./style.css','./logo.jpg','./icon-192.png','./icon-512.png','./manifest.webmanifest'];
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(PRECACHE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('feitoemforma-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 const url=new URL(req.url);
 if(url.pathname.endsWith('/admin.html')||url.pathname.includes('/admin')||url.pathname.endsWith('/config.js'))return;
 if(req.mode==='navigate'){
   event.respondWith(fetch(req).catch(()=>caches.match(req).then(cached=>cached||caches.match('./index.html'))));
   return;
 }
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(res=>{
   if(res.ok&&res.type==='basic'&&(/\.(?:css|js|png|jpg|jpeg|svg|webp|ico|webmanifest)$/.test(url.pathname))){
     const copy=res.clone();caches.open(CACHE).then(cache=>cache.put(req,copy));
   }
   return res;
 })));
});