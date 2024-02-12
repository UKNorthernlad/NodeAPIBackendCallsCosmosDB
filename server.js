var express = require('express');
var app = express();
var cors = require('cors')
var fs = require("fs");

// This enables CORS for all routes - See https://github.com/expressjs/cors?tab=readme-ov-file#installation for other configuration options.
app.use(cors())

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})