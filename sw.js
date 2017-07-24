importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "7b71aa4910fb9bc54b28804eaa3358c9"
  },
  {
    "url": "inline.311e7f42ab8a7b5aae8a.bundle.js",
    "revision": "f49e2488a79ba45512eaa6f785b23cd7"
  },
  {
    "url": "main.20e02c6ee0f33f254754.bundle.js",
    "revision": "bfd0e3fabadc96ade6a1d4d004f2c8c6"
  },
  {
    "url": "polyfills.35d6fc6174fa08d451d6.bundle.js",
    "revision": "8a4c84c6922541b10dc1f3554e11085b"
  },
  {
    "url": "vendor.c15a43d0cf3190dbd4bf.bundle.js",
    "revision": "90f0b552a26b7c482264bc3fa84649cd"
  },
  {
    "url": "styles.20d3704a589fd44ec523.bundle.css",
    "revision": "20d3704a589fd44ec52325e8c8630ecb"
  },
  {
    "url": "assets/sda-control.svg",
    "revision": "7c6ac1a4d214dad88548deb55572c2a3"
  },
  {
    "url": "assets/super-store.svg",
    "revision": "8df0df15b5f843c322ac92e58e34fcce"
  },
  {
    "url": "assets/games/captain.jpg",
    "revision": "592fadaed0f6733746e9b80cf22afd54"
  },
  {
    "url": "assets/games/cdino.png",
    "revision": "20633b39dd474e3dc772140c395e94e1"
  },
  {
    "url": "assets/games/final-fight.jpg",
    "revision": "09df5c429e9f36d36cd1fd71d650aee0"
  },
  {
    "url": "assets/games/fzero.jpg",
    "revision": "32f24b1f5432b269b22c006355c8b1b7"
  },
  {
    "url": "assets/games/mario.jpg",
    "revision": "8696e995a1b0c46c204100681cd226dc"
  },
  {
    "url": "assets/games/megaman.png",
    "revision": "d946b148aa9b3fb6315637cf3519cc8c"
  },
  {
    "url": "assets/games/metal-gear.jpg",
    "revision": "565b0089d685460efa8a72c9f9906f3a"
  },
  {
    "url": "assets/games/mortal-kombat.jpg",
    "revision": "df65bfd138fcd7c1eba21a3f1956f726"
  },
  {
    "url": "assets/games/street-fighter.jpg",
    "revision": "ededc61895683e62a556814cd86015ff"
  },
  {
    "url": "assets/games/topgear.jpg",
    "revision": "0559335f257af6d2a20d09986a43974b"
  },
  {
    "url": "manifest.json",
    "revision": "c13c50e6ae7e3765e05a736bde790b76"
  },
  {
    "url": "?utm_source=pwa",
    "revision": "3291bb15c0641c1a98b49af03e8e8e18"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
workboxSW.router.registerNavigationRoute("index.html");
