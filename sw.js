/* Offline support: app shell is cached; config.json is network-first so rest dates can change without a new install. */
var V='marsat-v4';
var SHELL=['./','index.html','style.css','app.js','config.json','manifest.webmanifest','icon-192.png','icon-512.png','maskable-512.png'];

self.addEventListener('install',function(e){
  e.waitUntil(caches.open(V).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){return k!==V}).map(function(k){return caches.delete(k)}));
  }).then(function(){return self.clients.claim()}));
});
self.addEventListener('fetch',function(e){
  var req=e.request, url=new URL(req.url);
  if(req.method!=='GET')return;
  if(url.origin!==location.origin)return;
  if(url.pathname.slice(-11)==='config.json'){
    e.respondWith(fetch(req).then(function(r){
      var copy=r.clone(); caches.open(V).then(function(c){c.put('config.json',copy)}); return r;
    }).catch(function(){return caches.match('config.json')}));
    return;
  }
  e.respondWith(caches.match(req,{ignoreSearch:true}).then(function(hit){
    if(hit)return hit;
    return fetch(req).then(function(r){
      if(r&&r.ok){var copy=r.clone();caches.open(V).then(function(c){c.put(req,copy)})}
      return r;
    }).catch(function(){return caches.match('index.html')});
  }));
});
