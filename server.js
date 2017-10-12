var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/json"
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

//==============================================================
//Routes

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "homework.html"));
  });

app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});

module.exports = app;
if (!module.parent) {
    http.createServer(app).listen(process.env.PORT, function(){
      console.log("Server listening on port " + app.get('port'));
    });
  }