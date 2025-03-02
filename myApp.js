const bodyParser = require('body-parser');
require('dotenv').config();

let express = require('express');
const res = require('express/lib/response');
let app = express();
let absolutePath = __dirname + '/views/index.html'

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next){
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", function(req, res){
    res.sendFile(absolutePath);
})

app.use("/public", express.static(__dirname + '/public'));


app.get("/json", function(req, res){
    let response = "Hello json";

    if (process.env.MESSAGE_STYLE === "uppercase"){
        response = response.toUpperCase();
    }

    res.json({ "message": response})
})

app.get("/now", function(req, res, next){
    req.time = new Date().toString();
    next();
}, function(req, res){
    res.send({ time: req.time });
});

app.get("/:word/echo", function(req, res){
    res.send({echo: req.params.word});
    });

app.get("/name", function(req, res){
    let firstName = req.query.first;
    let lastName = req.query.last;
    res.send({ name: firstName + " " + lastName });
    });





















 module.exports = app;
