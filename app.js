/**
 * Module dependencies
 */
var snow = require("snow")
  , hf = require("hf");


var experiments = [
  { name: "featureOne", default: false }
];

/**
 * Expose the app
 */
var app = module.exports = snow(__dirname, hf, { experiments: experiments, proxyUser: true});


// app.locals._layoutFile = false;
app.stack.front(function() {
	var proxy = require("simple-http-proxy");
	app.use("/test-data", proxy("https://integration.familysearch.org/test-data", {timeout: 60000}));
})
