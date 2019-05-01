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

// Register route
app.get("/register", function(req, res) {
	res.render("register");
});

// Index route
app.get("/foodpost", function(req, res) {
	res.render("index");
});

// Create Route
app.get("/foodpost/new", function(req, res) {
	res.render("new");
});



app.listen(3000, function() {
	console.log("Server has started!");
});