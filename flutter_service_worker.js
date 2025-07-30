'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9ec8dbd8e298f08dcf9806cef3a4f8bc",
"assets/AssetManifest.bin.json": "860c52539cc8037481e2b7c27a4d776e",
"assets/AssetManifest.json": "1a446e2ddf25449fdc2c424865742b20",
"assets/assets/images/EduNourish/Attendance.png": "b82a92a55efa15c55db2273a5de3b061",
"assets/assets/images/EduNourish/Home%2520Screen.png": "27b09c023ad70c54a3b0e5a4fd54c6fb",
"assets/assets/images/EduNourish/Map.png": "26c6874023787825a6084ffa9a62d148",
"assets/assets/images/EduNourish/Notifications.png": "886986e206351f6f915834dc14733b0c",
"assets/assets/images/EduNourish/Payment.png": "103762694e7c685da82dc0f6197a84da",
"assets/assets/images/EduNourish/Restaurant.png": "d665a2b3fc4acae17b5d36c395ee381c",
"assets/assets/images/EduNourish/Restaurant_Details.png": "5049ab0854cc61eba8fd65822caa1352",
"assets/assets/images/EduNourish/splash_screen.jpg": "e9395fdba53545e462f5826a95d9ad97",
"assets/assets/images/EduNourish/Student%2520Screen.png": "bf9627941ab8475944d4aaa59057547f",
"assets/assets/images/Examuiz/analysis_result_1.jpg": "6faa830db6a1a3edcfe794de0cdc1f77",
"assets/assets/images/Examuiz/analysis_result_2.jpg": "40bfb51654f18564583270ee16af0f56",
"assets/assets/images/Examuiz/analysis_result_3.jpg": "8422952a6cb53bd82c1674c17e5840c3",
"assets/assets/images/Examuiz/analysis_result_4.jpg": "a36d6a175a46bf51e2966ea94e1a3e66",
"assets/assets/images/Examuiz/exam_analysis_screen.jpg": "8fb2579d5aeef09f0d1d88d8f280ab31",
"assets/assets/images/Examuiz/exam_opening.jpg": "529d5c51ca03b4e8a6797f35bfc207b8",
"assets/assets/images/Examuiz/exam_parameters.jpg": "cc2e899cb3df2ec1f3880527fa923e70",
"assets/assets/images/Examuiz/generate_exam_screen.jpg": "174225dcd849e0ec10f74821ca6e78ad",
"assets/assets/images/Examuiz/home_screen.jpg": "920314c8ace51f7fbd16f301787a6490",
"assets/assets/images/Examuiz/splash_screen.jpg": "eeabe472f27a8faabb8f3d0601317627",
"assets/assets/images/Examuiz/the_generated_exam.jpg": "cbeb435ee6cd4f3d48738c57a650659f",
"assets/assets/images/my%2520photo.jpg": "1396e0399239a7a5e23e966b39f18e7c",
"assets/assets/images/NovaEd/choice_screen.jpg": "5637c350a1128d767195a2aff27bc7a9",
"assets/assets/images/NovaEd/home_screen.jpg": "3417f92f5606a97201480cd4632ee548",
"assets/assets/images/NovaEd/login_screen.jpg": "49858db549f417fb662e9fa941411384",
"assets/assets/images/NovaEd/profile_screen.jpg": "413824237b2ac1b1782450f55e36d47b",
"assets/assets/images/NovaEd/quiz_screen.jpg": "fc0c5fbfa89f501b51ee4f7d6e4159d4",
"assets/assets/images/NovaEd/splash_screen.jpg": "50db2f252878f592e4c491b43c76bc0c",
"assets/assets/images/Restaurant/Cart%2520Page1.png": "c061419779828545c3c4f3b8d8cd99a4",
"assets/assets/images/Restaurant/Cart%2520Page2.png": "3785de3d1355e9d8d06d07e23447778a",
"assets/assets/images/Restaurant/Login%2520Page.png": "e26837345e99def08d9aec21e8432186",
"assets/assets/images/Restaurant/Menu%2520Page.png": "2c856214ab2e3ad3f813f08a46cb20ef",
"assets/assets/images/Restaurant/SplashScreen.png": "ee1554575e3cedcba7500fb30d69ba54",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "77ab7a928d747fd22c1d95fe97bba2af",
"assets/NOTICES": "038a7442711a96f1b8ec41b97eae1b2f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "27cfa127617ce10593433c073c1c3a58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "83375d56a983844a824f1125f322666d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf1e45747974a42ebcf850f57cc46223",
"/": "bf1e45747974a42ebcf850f57cc46223",
"main.dart.js": "0af96fb32f5d3d230356624e9d354505",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
