var express = require('express')
var fs = require("fs");

var app = express();

var filename = "./index.html";

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {

// Main content for root routing

	var buffer = fs.readFileSync(filename, "utf8");
	response.send(buffer);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
