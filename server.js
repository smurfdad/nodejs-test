var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var http = require('http');

// Load the http module to create an http server.
var http = require('http');
var url = require("url");
function init(route, handle){
  function onRequest(request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log("Petición para "+pathname+" recibida");
    route(handle, pathname, response);

  }
  // Configure our HTTP server to respond with Hello World to all requests.
  http.createServer(onRequest).listen( server_port, server_ip_address, function () {
	  console.log( "Listening on " + server_ip_address + ", server_port " + server_port )
	});
}
exports.init = init;
