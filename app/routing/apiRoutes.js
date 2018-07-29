var express = require("express");
var apiRouter = express.Router();
var friends = require("../data/friends.json");




apiRouter.get('/friends', function (req,res) {
    
    return res.json(friends);
});



apiRouter.post("/friends", function(req, res) {

    var friendFinder = req.body;

    friends.push(friendFinder)

    res.json(friendFinder)
});
module.exports = apiRouter;