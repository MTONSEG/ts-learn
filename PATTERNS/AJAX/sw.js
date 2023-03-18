const assets = [
	'index.html',
	'./app.js',
	'./css/style.css',
];

const staticCacheName = 'PWA-Cache-v3';

self.addEventListener('install', async e => {
	const cache = await caches.open(staticCacheName);

	await cache.addAll(assets);
});

self.addEventListener('activate', async e => {
	const cacheNames = await caches.keys();

	await Promise.all(
		cacheNames
			.filter(name => name !== staticCacheName)
			.map(name => caches.delete(name))
	);
});

self.addEventListener('fetch', e => {
	console.log('fetch', e.request.url);

	e.respondWith(cacheFirst(e.request));
});

async function cacheFirst(request) {
	let cached = await caches.match(request);

	return cached ?? await fetch(request);
}

