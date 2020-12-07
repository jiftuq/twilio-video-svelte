'use strict';
var express = require('express');
var app = express.Router();

var app = express.Router();


app.get('/', function (req, res) {
    var yourLocalVar = req.session.localVar;
    req.session.localVar = "";
    res.render("Login/index.html", { name: yourLocalVar });
});
app.post("/", function (req, res, next) {
    var username = req.body.txtusername;
    var password = req.body.txtpassword;
    if(username == "Amdora" && password=="12345"){
        req.session.User = username;
        res.redirect('/Home');
    }
    else{
        var ErrorMessage = "Invalid username or password!";
        req.session.localVar = ErrorMessage;
        res.redirect('/');
    }

});
module.exports = app;