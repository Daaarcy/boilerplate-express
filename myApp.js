let express = require('express');
let app = express();
absolutePath = __dirname + '/views/index.html'

app.get("/", function(req, res){
    res.sendFile(absolutePath);
})

app.use("/public", express.static(__dirname + '/piblic'));

























 module.exports = app;
