let express = require('express');
const res = require('express/lib/response');
let app = express();
absolutePath = __dirname + '/views/index.html'

app.get("/", function(req, res){
    res.sendFile(absolutePath);
})

app.use("/public", express.static(__dirname + '/public'));

app.get("/json", funtion(req, res){
    res.json({"message": "Hello json"});
})


























 module.exports = app;
