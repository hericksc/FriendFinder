var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routing/htmlRoutes.js"));
app.use("/api", require("./routing/apiRoutes.js"));


app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});



