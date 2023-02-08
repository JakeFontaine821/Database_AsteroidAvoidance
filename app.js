var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.port||3000;
var db = require("./config/database");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(db.mongoURI,{
    useNewURLParser:true
}).then(function(){
    console.log("Connected to MongoDB Database");
}).catch(function(err){
    console.log(err);
});

require("./modules/Game");
var HighScore = mongoose.model("highscore");

//example routes
app.get("/", function(req, res){
    res.redirect("index.html");
})

app.post("/newHighscore", function(req, res){
    console.log(req.body);

    //new HighScore(req.body).save();

    //res.redirect('index.html');
})

app.use(express.static(__dirname+"/pages"));
app.listen(port, function(){
    console.log(`Running on port ${port}`);
})
