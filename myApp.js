require('dotenv').config();

let express = require('express');
const res = require('express/lib/response');
let app = express();
let absolutePath = __dirname + '/views/index.html'

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
























 module.exports = app;
