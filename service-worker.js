/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","32665ff33e487a353e559bbe993ef54b"],["app.js","de964c44e0aea68f806cbeda3dae3811"],["css/resume.css","bbee0a14a297824dd9f1eb59b31a8679"],["css/resume.min.css","8214dca40635fd212a9687ff5e8daec1"],["gulpfile.js","8ee834803bc68aa67cb079f1a22f13f6"],["img/AffichetteatelierQpt.jpg","f49df1986e24191ec7d1d72b9d010bd1"],["img/Agenda-512.png","8a826a472bfa5cba3f99475502d23420"],["img/Cocof.jpg","70c0212b612bd4762005750d6a8ddd67"],["img/actiris.jpg","9f421debccbf34dc3ed2970b987a13b7"],["img/bruxellesformation.jpg","fd0e74cfa9460b7f1294ded79aec0a8c"],["img/capemploi.png","f0796e63ded44682ef66fba8a87f7564"],["img/carteiles.jpg","f4413a50c2f18c54d62cd742bbb2bf2c"],["img/commune.jpg","662f1482644a20bc0cf230de31882dc9"],["img/europe.gif","1bab9ecf41f01299699a760584fead6a"],["img/federWalBxl.jpg","0c634f5f52836ae1a4bcd18f00500aa3"],["img/homepage.jpg","541838c90f95a81b47b0ba8f80523952"],["img/icon192.png","6ecb11dd1e6256f18300ffed20a8c043"],["img/icon512.png","746505e44c434514737054ec95e982e6"],["img/logo.jpg","3c9291eae41db822ad61b40880edc038"],["img/me_logo.jpg","1fd629c2dd9d9057f643e30da011897a"],["img/oreille.gif","6dd565a1dcf43cfda0ddfeb88deaa740"],["img/pointjob.jpg","edc01f619316f157aa12109281b26b05"],["img/ptAfficheHandyman.jpg","ad6dc548e245551dafee760e7913da23"],["img/ptGEEK.jpg","5b6bac0503aa30da6d00cf837105367f"],["img/ptVComp2018jard.jpg","50d7c869cf55c1b86474ae156af8c9f8"],["img/ptcoverchoisir022018.jpg","c0a101baa8f99b0184e145b843e076f9"],["img/recherche.jpg","9bf16b8479fcb4382e8e02d49542d027"],["index.html","be5b0e8fff29712afb4907d0646ac56c"],["js/resume.js","273fc5e7c5ab56826c6f0d512ad64dff"],["js/resume.min.js","c2f7a094b2b501194fab4aa4cc530150"],["manifest.json","a634b5ba6d71f693a0d360bc3cf44d6c"],["scss/_bootstrap-overrides.scss","9d782d5f1c24c1bc5c3277946db047bb"],["scss/_global.scss","6f963af2dd38c3c218fc53c32e9a0594"],["scss/_mixins.scss","546dbd5e56b959c41b982052ea1341ac"],["scss/_nav.scss","61104155681afe11485a948f9174d8c0"],["scss/_resume-item.scss","8903246cfeecd05ba2c93d535792c98e"],["scss/_variables.scss","e3e2a9f0fe1fe6c70c7e8b6de17e36d4"],["scss/resume.scss","3a88f5d6ea3653021a6a50184ec8e547"],["vendor/bootstrap/css/bootstrap-grid.css","5b8e85055bb8b4bf4ac7f4edddcf7ab7"],["vendor/bootstrap/css/bootstrap-grid.min.css","c9654d9c891fe3e57fde9cd355a916a4"],["vendor/bootstrap/css/bootstrap-reboot.css","b69603cbb0408fbad0ea399a67ef095d"],["vendor/bootstrap/css/bootstrap-reboot.min.css","38e73bab749ee7eba9bed51d6982a19e"],["vendor/bootstrap/css/bootstrap.css","82252d754417f95f7779be349acc6361"],["vendor/bootstrap/css/bootstrap.css.map","7f22dc40aa22dc514eaf73c8d619e8bd"],["vendor/bootstrap/css/bootstrap.min.css","a7022c6fa83d91db67738d6e3cd3252d"],["vendor/bootstrap/css/bootstrap.min.css.map","ea6c3c97d126f9996d7cc206f2df625b"],["vendor/bootstrap/js/bootstrap.bundle.js","ee08eb7f44335a3cf385e03d4406e4a5"],["vendor/bootstrap/js/bootstrap.bundle.js.map","1d446b0e668ececab31cd3cb5e137d4a"],["vendor/bootstrap/js/bootstrap.bundle.min.js","d70c474886678aebe3e9d91965dc8b62"],["vendor/bootstrap/js/bootstrap.bundle.min.js.map","c41626cedb5efebbfb7b18e140042613"],["vendor/bootstrap/js/bootstrap.js","c2cdb900858c3e63ce8cd9f69171d342"],["vendor/bootstrap/js/bootstrap.js.map","1659c6f13c0a9611a9ae186d99184f18"],["vendor/bootstrap/js/bootstrap.min.js","eb5fac582a82f296aeb74900b01a2fa3"],["vendor/bootstrap/js/bootstrap.min.js.map","97aa185a0946b2aae827ac35ea0bcabb"],["vendor/devicons/css/devicons.css","b72ad786d78eb1aa09edcc91f75751cb"],["vendor/devicons/css/devicons.min.css","fd1f5fd2d31a07e99105522fff10b2a5"],["vendor/devicons/css/devicons.scss","61a37277edcbaba9ab204e9e3bb80ba7"],["vendor/devicons/fonts/devicons.eot","36c5ab9318386dc0499a0d89691e6331"],["vendor/devicons/fonts/devicons.svg","a21d3c630e856b5fb26fd3d6f1b894ff"],["vendor/devicons/fonts/devicons.ttf","5ed4d6468a5a0f3cf9c82f854936feab"],["vendor/devicons/fonts/devicons.woff","a8639dec5833a8375d22fe425b01f4eb"],["vendor/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["vendor/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["vendor/font-awesome/fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["vendor/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["vendor/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["vendor/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["vendor/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["vendor/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["vendor/font-awesome/less/animated.less","08baef05e05301cabc91599a54921081"],["vendor/font-awesome/less/bordered-pulled.less","898f90e40876883214bbd121b0c20e9f"],["vendor/font-awesome/less/core.less","fb4efe4ae63737706875bbbfc7b7e9af"],["vendor/font-awesome/less/fixed-width.less","5e07ec001f8d21bd279c12ee542813f7"],["vendor/font-awesome/less/font-awesome.less","15cb7faa02437c2f9719351c157fe7e7"],["vendor/font-awesome/less/icons.less","bf95b901c36b646ff457379bdcda94b7"],["vendor/font-awesome/less/larger.less","8cb65280c0f889daf72626c21a7c8628"],["vendor/font-awesome/less/list.less","975571323cf880a4a30601998236b027"],["vendor/font-awesome/less/mixins.less","fbb1f2f1ab96ba020c7f14208aac72b8"],["vendor/font-awesome/less/path.less","a8c41460c42a4fe9e98550f00c8b3f19"],["vendor/font-awesome/less/rotated-flipped.less","a8476cdc50c264abd11ff59d6a9dd025"],["vendor/font-awesome/less/screen-reader.less","0f881617264587bef0df6ce92253ecea"],["vendor/font-awesome/less/stacked.less","518e2b2d263982d2caa1e6514b4b4eac"],["vendor/font-awesome/less/variables.less","be3f6eed38aa909483e1bd9ee0876e80"],["vendor/font-awesome/scss/_animated.scss","39ff4f359a7b81d6585075715f41e5dc"],["vendor/font-awesome/scss/_bordered-pulled.scss","4cad0df17bf40327feae33fa9a6c6ba2"],["vendor/font-awesome/scss/_core.scss","ef059a98cf9de6ca5b77ee6850771cf0"],["vendor/font-awesome/scss/_fixed-width.scss","9277ab6964a434d499873687b00be906"],["vendor/font-awesome/scss/_icons.scss","de9fa842ad0b619a95ac4f42ac6ba930"],["vendor/font-awesome/scss/_larger.scss","e95931566f6fc6ad5685c4fa9802e206"],["vendor/font-awesome/scss/_list.scss","7107e80b053928271d5fcf422dc29490"],["vendor/font-awesome/scss/_mixins.scss","aa2b8f32b403733713d8885f14ab86cc"],["vendor/font-awesome/scss/_path.scss","ab5a9e8388563e097b5ce835601f01d2"],["vendor/font-awesome/scss/_rotated-flipped.scss","9f5d4bc6fadea89328d2aac26574a9d8"],["vendor/font-awesome/scss/_screen-reader.scss","8907bd7dbf4799e8120bda5568d76fea"],["vendor/font-awesome/scss/_stacked.scss","5594237226aedfbca2fa1c7f4604c214"],["vendor/font-awesome/scss/_variables.scss","dc5261f37a8a01feeb52a746d16c0459"],["vendor/font-awesome/scss/font-awesome.scss","8c015559216d1654630a839b61c6b83d"],["vendor/jquery-easing/jquery.easing.compatibility.js","ba0f90adf86e509dfabe178af9e726fc"],["vendor/jquery-easing/jquery.easing.js","b55af8280cffdeaed8cc30b960f68878"],["vendor/jquery-easing/jquery.easing.min.js","e2d41e5c8fed838d9014fea53d45ce75"],["vendor/jquery/jquery.js","6a07da9fae934baf3f749e876bbfdd96"],["vendor/jquery/jquery.min.js","a09e13ee94d51c524b7e2a728c7d4039"],["vendor/jquery/jquery.min.map","bae3c738b74dd89a555b7a54e4891608"],["vendor/jquery/jquery.slim.js","450d478c0491cf0b2d365997faff70dd"],["vendor/jquery/jquery.slim.min.js","99b0a83cf1b0b1e2cb16041520e87641"],["vendor/jquery/jquery.slim.min.map","375e0272b0153d6871979c5ac2465321"],["vendor/simple-line-icons/css/simple-line-icons.css","093ca662394ed698fdb5835e425d28dd"],["vendor/simple-line-icons/fonts/Simple-Line-Icons.eot","f33df365d6d0255b586f2920355e94d7"],["vendor/simple-line-icons/fonts/Simple-Line-Icons.svg","2fe2efe63441d830b1acd106c1fe8734"],["vendor/simple-line-icons/fonts/Simple-Line-Icons.ttf","d2285965fe34b05465047401b8595dd0"],["vendor/simple-line-icons/fonts/Simple-Line-Icons.woff","78f07e2c2a535c26ef21d95e41bd7175"],["vendor/simple-line-icons/fonts/Simple-Line-Icons.woff2","0cb0b9c589c0624c9c78dd3d83e946f6"],["vendor/simple-line-icons/less/simple-line-icons.less","60d5f2e6ea99a251cd82ef970972943e"],["vendor/simple-line-icons/scss/simple-line-icons.scss","56d7e0f9aa611b932eb2a41649a2fd76"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







