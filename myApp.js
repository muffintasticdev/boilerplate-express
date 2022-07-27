let express = require('express');
let app = express();
console.log("Hello World")
let absoultePathHtml = __dirname+'/views/index.html';
app.get("/", (req, res) => res.sendFile(absoultePathHtml) );



































 module.exports = app;
