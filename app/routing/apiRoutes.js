var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/friends', function (req,res) {
    var friends = [];
    for (i = 0; i < 5; i++) {
        results.push(friends[i]);
    }
    return res.json(results);
});


app.get('/friends', function(req,res) {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.post("/api/friends", function(req, res) {

    var friendFinder = req.body;

    friends.push(friendFinder)

    res.json(friendFinder)
});

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
})
