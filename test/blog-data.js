const internal = { 'http://blog.timscanlin.net':
   { fetchTime: 77,
     status: 'Fri, 24 Feb 2017 05:24:18 GMT',
     contentLength: '2944',
     linkCount: 10,
     url: 'http://blog.timscanlin.net',
     isInternal: true },
  'http://blog.timscanlin.net/':
   { fetchTime: 30,
     status: 'Fri, 24 Feb 2017 05:24:18 GMT',
     contentLength: '2944',
     linkCount: 10,
     url: 'http://blog.timscanlin.net/',
     isInternal: true },
  'http://blog.timscanlin.net/posts/2016/open-source-projects-in-2016/':
   { fetchTime: 46,
     status: 'Fri, 24 Feb 2017 05:24:18 GMT',
     contentLength: '4381',
     linkCount: 23,
     url: 'http://blog.timscanlin.net/posts/2016/open-source-projects-in-2016/',
     isInternal: true },
  'http://blog.timscanlin.net/posts/2014/Tips-for-New-Web-Developers/':
   { fetchTime: 49,
     status: 'Fri, 24 Feb 2017 05:24:18 GMT',
     contentLength: '4594',
     linkCount: 15,
     url: 'http://blog.timscanlin.net/posts/2014/Tips-for-New-Web-Developers/',
     isInternal: true },
  'http://blog.timscanlin.net/posts/2016/automated-deploys-with-travis/':
   { fetchTime: 46,
     status: 'Fri, 24 Feb 2017 05:24:18 GMT',
     contentLength: '5205',
     linkCount: 14,
     url: 'http://blog.timscanlin.net/posts/2016/automated-deploys-with-travis/',
     isInternal: true },
  'http://blog.timscanlin.net/posts/2015/login-bash-script/':
   { fetchTime: 47,
     status: 'Fri, 24 Feb 2017 05:24:18 GMT',
     contentLength: '5292',
     linkCount: 7,
     url: 'http://blog.timscanlin.net/posts/2015/login-bash-script/',
     isInternal: true },
  'http://blog.timscanlin.net/posts/2014/Simple-d3-js-visualization/':
   { fetchTime: 49,
     status: 'Fri, 24 Feb 2017 05:24:18 GMT',
     contentLength: '7882',
     linkCount: 17,
     url: 'http://blog.timscanlin.net/posts/2014/Simple-d3-js-visualization/',
     isInternal: true },
  'http://blog.timscanlin.net/feed.xml':
   { fetchTime: 36,
     status: 'Fri, 24 Feb 2017 05:24:18 GMT',
     contentLength: '11134',
     linkCount: 0,
     url: 'http://blog.timscanlin.net/feed.xml',
     isInternal: true } }


const external = [
  'http://timscanlin.net/',
  'https://github.com/tscanlin/',
  'http://tscanlin.github.io/tocbot/',
  'https://github.com/tscanlin/serverless-s3-crud',
  'http://gregfranko.com/jquery.tocify.js/',
  'https://developers.optimizely.com/x/solutions/javascript/reference/',
  'http://javascriptweekly.com/issues/283',
  'http://frontendfocus.co/issues/239',
  'http://peterc.org/',
  'https://serverless.com/',
  'https://github.com/serverless/serverless',
  'https://github.com/pmuens/serverless-crud',
  'https://twitter.com/tim_scanlin',
  'http://www.achievers.com/',
  'https://www.optimizely.com/',
  'http://www.bento.io/',
  'http://www.awwwards.com/websites/single-page/',
  'http://stackoverflow.com/',
  'https://travis-ci.org/',
  'https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db',
  'https://gist.github.com/domenic/ec8b0fc8ab45f39403dd',
  'http://www.steveklabnik.com/automatically_update_github_pages_with_travis_example/',
  'https://github.com/settings/tokens',
  'https://www.npmjs.com/package/travis-encrypt',
  'https://github.com/tscanlin/blog.timscanlin.net',
  'https://www.pubnub.com/blog/kyle-simpson-asks-javascript-wtf/',
  'https://en.wikipedia.org/wiki/Here_document',
  'https://github.com/mbostock/d3/wiki/Transitions',
  'https://dash.generalassemb.ly/',
  'http://d3js.org/',
  'https://github.com/tscanlin/timscanlin-demos',
  'http://en.wikipedia.org/wiki/Extrapolation',
  'http://en.wikipedia.org/wiki/Interpolation',
  'https://www.dashingd3js.com/svg-paths-and-d3js',
  'http://tscanlin.github.io/timscanlin-demos/visualization.html'
]

const stringified = '{"pages":{"internal":{"http://blog.timscanlin.net":{"fetchTime":48,"status":"Fri, 24 Feb 2017 05:24:18 GMT","contentLength":"2944","linkCount":10,"url":"http://blog.timscanlin.net","isInternal":true},"http://blog.timscanlin.net/":{"fetchTime":32,"status":"Fri, 24 Feb 2017 05:24:18 GMT","contentLength":"2944","linkCount":10,"url":"http://blog.timscanlin.net/","isInternal":true},"http://blog.timscanlin.net/posts/2016/open-source-projects-in-2016/":{"fetchTime":44,"status":"Fri, 24 Feb 2017 05:24:18 GMT","contentLength":"4381","linkCount":23,"url":"http://blog.timscanlin.net/posts/2016/open-source-projects-in-2016/","isInternal":true},"http://blog.timscanlin.net/posts/2016/automated-deploys-with-travis/":{"fetchTime":44,"status":"Fri, 24 Feb 2017 05:24:18 GMT","contentLength":"5205","linkCount":14,"url":"http://blog.timscanlin.net/posts/2016/automated-deploys-with-travis/","isInternal":true},"http://blog.timscanlin.net/posts/2015/login-bash-script/":{"fetchTime":45,"status":"Fri, 24 Feb 2017 05:24:18 GMT","contentLength":"5292","linkCount":7,"url":"http://blog.timscanlin.net/posts/2015/login-bash-script/","isInternal":true},"http://blog.timscanlin.net/posts/2014/Simple-d3-js-visualization/":{"fetchTime":45,"status":"Fri, 24 Feb 2017 05:24:18 GMT","contentLength":"7882","linkCount":17,"url":"http://blog.timscanlin.net/posts/2014/Simple-d3-js-visualization/","isInternal":true},"http://blog.timscanlin.net/posts/2014/Tips-for-New-Web-Developers/":{"fetchTime":39,"status":"Fri, 24 Feb 2017 05:24:18 GMT","contentLength":"4594","linkCount":15,"url":"http://blog.timscanlin.net/posts/2014/Tips-for-New-Web-Developers/","isInternal":true},"http://blog.timscanlin.net/feed.xml":{"fetchTime":30,"status":"Fri, 24 Feb 2017 05:24:18 GMT","contentLength":"11134","linkCount":0,"url":"http://blog.timscanlin.net/feed.xml","isInternal":true}},"external":{"http://timscanlin.net/":{},"https://github.com/tscanlin/":{},"http://tscanlin.github.io/tocbot/":{},"https://github.com/tscanlin/serverless-s3-crud":{},"http://gregfranko.com/jquery.tocify.js/":{},"https://developers.optimizely.com/x/solutions/javascript/reference/":{},"http://javascriptweekly.com/issues/283":{},"http://frontendfocus.co/issues/239":{},"http://peterc.org/":{},"https://serverless.com/":{},"https://github.com/serverless/serverless":{},"https://github.com/pmuens/serverless-crud":{},"https://twitter.com/tim_scanlin":{},"https://travis-ci.org/":{},"https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db":{},"https://gist.github.com/domenic/ec8b0fc8ab45f39403dd":{},"http://www.steveklabnik.com/automatically_update_github_pages_with_travis_example/":{},"https://github.com/settings/tokens":{},"https://www.npmjs.com/package/travis-encrypt":{},"https://github.com/tscanlin/blog.timscanlin.net":{},"https://www.pubnub.com/blog/kyle-simpson-asks-javascript-wtf/":{},"https://en.wikipedia.org/wiki/Here_document":{},"https://github.com/mbostock/d3/wiki/Transitions":{},"https://dash.generalassemb.ly/":{},"http://d3js.org/":{},"https://github.com/tscanlin/timscanlin-demos":{},"http://en.wikipedia.org/wiki/Extrapolation":{},"http://en.wikipedia.org/wiki/Interpolation":{},"https://www.dashingd3js.com/svg-paths-and-d3js":{},"http://tscanlin.github.io/timscanlin-demos/visualization.html":{},"http://www.achievers.com/":{},"https://www.optimizely.com/":{},"http://www.bento.io/":{},"http://www.awwwards.com/websites/single-page/":{},"http://stackoverflow.com/":{}}},"stats":{"startTime":1490682437495,"endTime":1490682437698,"elapsedTime":203}}'


module.exports = {
  internal: internal,
  external: external,
  stringified: stringified,
}
