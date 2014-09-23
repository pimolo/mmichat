var http = require('http');
var app = require('express')();
var Firebase = require('Firebase');

// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type' : 'text-plain'});
//   res.end('Hello world!\n');
// }).listen(3000, 'localhost');
// console.log('Server running at localhost:3000')

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

app.get('/client.js', function(req, res) {
  res.sendFile(__dirname + '/client.js')
});

app.listen(3000);
