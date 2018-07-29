var path = require ("path");
var express = require("express");
var htmlRouter = express.Router();

htmlRouter.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

htmlRouter.get('/survey', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

module.exports = htmlRouter;

