let express = require('express');
let app = express();

console.log("Hello World")

app.get("/", function(req, res){
    app.send("Hello Express");
})



























 module.exports = app;
