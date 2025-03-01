require('dotenv').config()

let express = require('express');
const res = require('express/lib/response');
let app = express();
absolutePath = __dirname + '/views/index.html'

app.get("/", function(req, res){
    res.sendFile(absolutePath);
})

app.use("/public", express.static(__dirname + '/public'));

app.get("/json", function(req, res){
    let response;

    if (process.env.MESSAGE_STYLE === "uppercase"){
        response = "Hello json".toUpperCase();
    } else {
        response = "Hello json";
    }

    res.json({ "message": response})
})


























 module.exports = app;
