const express = require("express");
const app = express();
const axios = require("axios");


//const exphbs = require("express-handlebars");

const exphbs = require("express-handlebars").create({ defaultLayout: "main" });

app.engine("handlebars", exphbs.engine);




//app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.get("/", function (req,res){
	res.render("home");
});

const port = 7777;

app.listen(port, () => console.log(`server at ${port}`));