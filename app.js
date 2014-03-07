if(process.env.NODETIME_ACCOUNT_KEY) {
  require('nodetime').profile({
    accountKey: process.env.NODETIME_ACCOUNT_KEY,
    appName: process.env.APP_NAME + '-' + process.env.TARGET_ENV
  });
}

/**
 * Module dependencies
 */
var woodruff = require("woodruff")
  , shared = require("theme-engage");

/**
 * Expose the app
 */
var app = module.exports = woodruff(__dirname, shared, {proxyUser: true});

app.configure('development', function() {
  var proxy = require("simple-http-proxy");

  app.stack.unshift({
    route: "/tree-data",
    handle: proxy("https://beta.familysearch.org/tree-data")
  });
  app.stack.unshift({
    route: "/artifactmanager",
    handle: proxy("https://beta.familysearch.org/artifactmanager")
  });
});