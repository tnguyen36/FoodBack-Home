var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Home Route
app.get("/", function(req, res) {
	res.render("home");
});

// Login route
app.get("/login", function(req, res) {
	res.render("login");
});



app.listen(3000, function() {
	console.log("Server has started!");
});