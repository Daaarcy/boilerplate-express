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
    let message = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase"){
        message = message.toUpperCase();
    }
    res.json({"message": "Hello json"});
})


























 module.exports = app;
