'use strict';
var express = require('express');
var app = express.Router();

var app = express.Router();


app.get('/', function (req, res) {
    var name=req.session.User;
    if(name=="Amdora"){
        var yourLocalVar = req.session.localVar;
        req.session.localVar = "";
        res.render("Home/index.html", { name: yourLocalVar });
    } else{
        var ErrorMessage = 'Please login!';
        req.session.localVar = ErrorMessage;
        res.redirect('/');
    }
});

module.exports = app;