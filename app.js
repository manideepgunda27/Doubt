const express = require("express");
const app =  express();
const mongoose = require("mongoose");
engine = require('ejs-mate');
app.engine('ejs', engine);
const path = require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.listen(8080,() =>{
    console.log("server is listening on port:8080");
});

app.get("/",(req,res) => {
    res.render("home.ejs");
});

app.get("/contact-us",(req,res) => {
    res.render("contact.ejs");
});
