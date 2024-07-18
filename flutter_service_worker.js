'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7563cebde6d92988697ea84f49bfc096",
"assets/AssetManifest.bin.json": "04dfecc58b692ea3e0ab70362c6fa419",
"assets/AssetManifest.json": "a4dc5a4e0a42793052d254a6a9abecdd",
"assets/assets/fonts/AirbnbCerealWBd.ttf": "fab1fd4ca8d2e85a75ad547f7a4dcbfb",
"assets/assets/fonts/AirbnbCerealWLt.ttf": "19c0f3d9508f250d3678b71b272b7210",
"assets/assets/fonts/AirbnbCerealWMd.ttf": "e13efd9c16d8469cba13718641990a65",
"assets/assets/fonts/AirbnbCerealWXBd.ttf": "1ad6138c05661522b80cd1769c2205b8",
"assets/assets/fonts/CircularStdBook.ttf": "c43e9feb9ca817ae86afb47fd0ee4f94",
"assets/assets/images/business1.png": "9c2c0fe96a1f53c8fb3b0f7eddb9a4ef",
"assets/assets/images/business2.png": "dc6054f94e7ab2034ee06d989dfaa931",
"assets/assets/images/business3.png": "5447ccadbd6f9180c6b2d80e99c37eda",
"assets/assets/images/business4.png": "1b154f9f14273db2507d866744d33562",
"assets/assets/images/check.svg": "3fb64e4862a167d6602bfe3f610bc938",
"assets/assets/images/code_image.png": "10b37dad8d97524b1e707fdf38c86dfa",
"assets/assets/images/copy.svg": "c324ec689bd6848a7b05aaa7cef0fc8e",
"assets/assets/images/creative1.png": "589cc5ac748b783ea844fc7f2c5f067c",
"assets/assets/images/creative2.png": "854c2d58eccc963680ab9f38dfe62b57",
"assets/assets/images/creative3.png": "b09ac2cd21b9fc1e3827d214ab752744",
"assets/assets/images/creative4.png": "25ec71dcca49a56cff0a40fd5abdcbce",
"assets/assets/images/delete.svg": "2403c2c07b1e66abbc953c9dd312dce2",
"assets/assets/images/developer1.png": "f214adc9582cbd23119d4d50f2b4b3e7",
"assets/assets/images/developer2.png": "340f5cfc3079ab522d8abe7702f4e5c4",
"assets/assets/images/dot.svg": "c229161307929f537ac7d63ab1a02fa1",
"assets/assets/images/Ellipse%252028.svg": "c229161307929f537ac7d63ab1a02fa1",
"assets/assets/images/frame.png": "01cb909e1970e1a99d548fcad8ce418a",
"assets/assets/images/icon1.png": "f7fb932486b7f44dfcb8c769e336c7ac",
"assets/assets/images/icon2.png": "57a7df053b1703ee5e581eecc35dc1b8",
"assets/assets/images/icon3.png": "89b532757c9ae99e1700f1c5a6bee984",
"assets/assets/images/icon4.png": "23e7857b4379c7700f46ea6160f5d7e9",
"assets/assets/images/icon5.png": "98d7aa11e4d19afb7ef55de8bb3fe0eb",
"assets/assets/images/icon6.png": "9b4e7ffcefc6bc065b5cc73f009fdc4c",
"assets/assets/images/icon7.png": "d44fc80d493151403063004fc33b84ec",
"assets/assets/images/icon8.png": "5d1efd8f212de68896ee5e85ba9dd7c0",
"assets/assets/images/image_main.png": "2aefc8a8467e0960dc9857a9016af828",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/img_academiccap1.png": "addf60267122c8e600a7423bfd1bddb0",
"assets/assets/images/img_arrowleft.svg": "14d3fab03284a402cdd7fdb4e3b8fdaa",
"assets/assets/images/img_arrowright.svg": "0ff5e7c030b334451c19a897486c8ef2",
"assets/assets/images/img_bag1.png": "e9e4b85cc7bf41f4d18d36802d094e8b",
"assets/assets/images/img_birthdaycake1.png": "d1545fa1510f640665912a6abcd7c656",
"assets/assets/images/img_blueberry1.png": "0f5143cf2c4f3b5780299469ce823c51",
"assets/assets/images/img_brightness.svg": "fca8c8c52081b87aa4bb5bb827fba4f0",
"assets/assets/images/img_brightness_black_900.svg": "f5eebd05bfc9db52952021ad4abde8b2",
"assets/assets/images/img_businessidea1.png": "c5a4f27d88a16bddede613cc36b3f859",
"assets/assets/images/img_businessstartup.png": "f3f1f2a80a2d7dfa36bd704d95f07ffc",
"assets/assets/images/img_chatbot1.png": "1835ec22268393828e121bec51c769ac",
"assets/assets/images/img_checkmark.svg": "e9b6e487c9a1e3655e7a7a558070191a",
"assets/assets/images/img_christmasinvitationcard.png": "1cb05411f6fbabe52ebf047a8ca40b35",
"assets/assets/images/img_close.svg": "0dd30f8405a81d8d509e6be95b92c1cc",
"assets/assets/images/img_codeissue1.png": "27b693e63673314fc3e3fb49be6448fa",
"assets/assets/images/img_developer1.png": "7f42ad757725382ed49453b47ac8eead",
"assets/assets/images/img_earth1.png": "91c3f80a1b50ffac485e29e318132dba",
"assets/assets/images/img_edit.svg": "719ecd5490936d6bbc5c47e3d3e010c7",
"assets/assets/images/img_ellipse30.png": "cf2c5cb58b9e0e1b3a4755be15dd3094",
"assets/assets/images/img_ellipse31.png": "a77dab8a91f119e5748346c0f4e72b6e",
"assets/assets/images/img_ellipse32.png": "119948cc628e83b3f5bbbbb591de7fc9",
"assets/assets/images/img_ellipse34.png": "69341207660a0cc1a1dd9902ab584ebe",
"assets/assets/images/img_email1.png": "1f179b63e60f577737aec1a05e7bc085",
"assets/assets/images/img_foodanddrink1.png": "07d5672aeb67149fe96437925f04d9ea",
"assets/assets/images/img_frame.svg": "0c24290ee8aba9be2a97156977127210",
"assets/assets/images/img_frame_gray_400.svg": "ee125d5d750e6cb248bb1a6f700ec11f",
"assets/assets/images/img_giftbox1.png": "1b12d86f58513915f6e852c1c8238b92",
"assets/assets/images/img_group.svg": "705987e47f3734adc1223215f83d8fc1",
"assets/assets/images/img_group_deep_orange_50_03.svg": "2d698fa834e8a0346ffbd943fb65ed9e",
"assets/assets/images/img_iccamera.svg": "158313867d867abd9e7e93659348d030",
"assets/assets/images/img_icclockbold.svg": "59d20b435c4c4565b5bdcb1abfd3c511",
"assets/assets/images/img_icclockbold_black_900.svg": "b769e64f79d7100a2bdff40eec9fc2c2",
"assets/assets/images/img_iccomment.svg": "d6b278a710e9f56cf5bc5f5a72b904e4",
"assets/assets/images/img_iccomment_gray_400.svg": "accc21163ab0ceedef45d00e55fa74af",
"assets/assets/images/img_iccopy.svg": "10ec47d5685fc39d3dce45af0632f862",
"assets/assets/images/img_icdelete.svg": "5904310be0fc2730305267171582f638",
"assets/assets/images/img_icdown.svg": "87f5be5c327dd72676fdb02411db62b1",
"assets/assets/images/img_ichelp.svg": "4c5f20b63c732a050bc7a0e110bfca99",
"assets/assets/images/img_icmore.svg": "2c7a5edfd7c5c64269344dd84ca5500a",
"assets/assets/images/img_icmore_black_900.svg": "130ff9c9443b579eaabdbd8c84b71591",
"assets/assets/images/img_icprivacypolicy.svg": "4efa17b6f6d90dfd035fafa081be8b83",
"assets/assets/images/img_icprofile.svg": "55c01da41a0e7141e981610170311086",
"assets/assets/images/img_icprofile_black_900.svg": "ddd70fd20365629ef369e3d36892595a",
"assets/assets/images/img_icsend.svg": "f9bc5de49f2ebdf4167531a948197094",
"assets/assets/images/img_icshare.svg": "f98a595fa9f8262d176a0081568cca36",
"assets/assets/images/img_ictick.svg": "39d2b89dc53b717e95fe74ca818c37de",
"assets/assets/images/img_icuser.svg": "2ef71f57fdc0dfe8ea4bf270fcbd0df7",
"assets/assets/images/img_ic_logout.svg": "6a8001da349b2399aaa1c3b4d210c271",
"assets/assets/images/img_ic_show.svg": "6df5369d9768543c801b1a26d45f1ffb",
"assets/assets/images/img_ic_stop.svg": "01c192274e2706ffbff8e49f3e59766e",
"assets/assets/images/img_image1.png": "d3229789fc2729863d8187a6aad8106d",
"assets/assets/images/img_imagesendingviachat.png": "16f7f4e69da29567e07a355385f6ba1a",
"assets/assets/images/img_jobsecurity1.png": "eae2f53623dbf65dbe7d0bfa4be41893",
"assets/assets/images/img_laughingemoji1.png": "ef5cdb9384911e12bbf224fce5d18cee",
"assets/assets/images/img_list1.png": "f0009834de105a3e192cb58e60cddc71",
"assets/assets/images/img_loveletter1.png": "1857cb2e5a87ffb2bbf8b953cda37fbc",
"assets/assets/images/img_manattendingonlinemeeting.png": "26143208b92685bde20c48c6348eb1ba",
"assets/assets/images/img_menu1.png": "5776150047fae8adf43788fbfe2c1ad5",
"assets/assets/images/img_mobilephone1.svg": "b6c230afdeaccebf5246c9a4a2511c74",
"assets/assets/images/img_movieclapboard.png": "f48ad31a7ca88f83fa7853650db548f6",
"assets/assets/images/img_musiccd1.png": "9238841e5142b2dea3e5503e734feebb",
"assets/assets/images/img_paper1.png": "6cc3adedfb7c7f471537b7e55cfaadd1",
"assets/assets/images/img_personalinformation.png": "60beb4a32fb14343be1b3d21d096e65b",
"assets/assets/images/img_puzzlealert1.png": "a4754d12ed326ead26585a89bebb0f08",
"assets/assets/images/img_rectangle392.png": "c2df21c14bf1314eba8c1aacd7efeb44",
"assets/assets/images/img_rectangle392_40x81.png": "3bfad785e0a54c2c57afeb80386fac39",
"assets/assets/images/img_search.svg": "fa700269059f9ab7e2a9dc9ece0bb0bd",
"assets/assets/images/img_searchproduct1.png": "26093170a11c896cad8f5eeaef733142",
"assets/assets/images/img_search_gray_600.svg": "f1505ad324f7ea1471553a0982ed5e84",
"assets/assets/images/img_shootingstar1.png": "3393e8c810be095eb6998d3985f19705",
"assets/assets/images/img_socialmediama.png": "45e7d6295787f2392e7077d86a1ba7f7",
"assets/assets/images/img_spalash.svg": "d42bbd66cea07c920117193d4d1d6236",
"assets/assets/images/img_successstory1.png": "ccd61ab5b0fb85e1da8c933ccdf30b3e",
"assets/assets/images/img_user.svg": "6982dab3d04ef767f870a178737edcd3",
"assets/assets/images/img_writinghandgesture.png": "6f8654483673877c3afd9418e8b2f1b6",
"assets/assets/images/img_writingnotes2.png": "4f7e4868d3b0e979d448c8f1392ce74e",
"assets/assets/images/logout.png": "8af50170eb2eceb63e99c2905153b2f9",
"assets/assets/images/other1.png": "1843150c8e913c7f4626c3193347560b",
"assets/assets/images/other2.png": "57c8a490ebe3653306f7bb4b3fafb635",
"assets/assets/images/other3.png": "bf4f21d5a7093cced6904837cc096441",
"assets/assets/images/other4.png": "a95fd29a21f2379f6ede997cd2c93876",
"assets/assets/images/personal1.png": "33cd6a2e64e34c98724690352318d4c5",
"assets/assets/images/personal2.png": "6506a16e801b566d112d9dcbd1769c49",
"assets/assets/images/personal3.png": "39a2a3084dce90c5751de29f03d0003b",
"assets/assets/images/search.svg": "fa700269059f9ab7e2a9dc9ece0bb0bd",
"assets/assets/images/security.svg": "66da0d70e9bc28e24fb4de564c4583c8",
"assets/assets/images/share.svg": "afda6630992968183e5bdb14bede0e9a",
"assets/assets/images/uncheck.svg": "74e391d1560c30e8d5e88a9c11c24f00",
"assets/assets/images/user.png": "2d4afa1ee8ef074058bc66cb564c9f60",
"assets/assets/images/writing1.png": "60bee5808beef9fc9ba48007c649c40f",
"assets/assets/images/writing2.png": "a93a3c5d5e4f58ed2c57fb0dd05d06e3",
"assets/assets/images/writing3.png": "f772375da0ad1d9bdaf5b1c98fd4b8d0",
"assets/assets/images/writing4.png": "243e27f99a6332a4466744040899ae4c",
"assets/FontManifest.json": "d6089d4501e2bac70b5d490dc6cd4ab2",
"assets/fonts/MaterialIcons-Regular.otf": "9188354cd143215a37ef1da626cd762e",
"assets/NOTICES": "4e66e68e775aa9643221116d7c661708",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "810f141578ad7dfc0d482c710e6d1794",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c926bafc2b8c3dd44d7d2f4a90a3411",
"/": "5c926bafc2b8c3dd44d7d2f4a90a3411",
"main.dart.js": "851597a669d7fb87c9a4787c78bbea57",
"manifest.json": "34045bd734ca48fb11f74149d1123985",
"version.json": "3886625498d28af1afa288d673b992d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
