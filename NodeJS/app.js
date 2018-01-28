// require('./server');
// var resp = require('./module');

// console.log(resp.pi);
// console.log(resp.test1());
// console.log(resp.test2(5,5));


// var file = require('fs');
// file.re

//express
var express = require('express');
var body = require('body-parser');
var app = express();
app.use(body());

//Ejs
app.set('view engine','ejs');
app.get('/',function(req,res){
    //json data
    var data = {user:"wry",job:"programmer"};
    res.render('home',{keydata:data});
    //res.render('testejs',{keydata:data,keyparam:req.params.text});
});
app.get('/page1',function(req,res){
    //json data
    var data = {user:"wry",job:"programmer"};
    res.render('page1',{keydata:data});
    //res.render('testejs',{keydata:data,keyparam:req.params.text});
});
app.get('/page2',function(req,res){
    //json data
    var data = {user:"wry",job:"programmer"};
    res.render('page2',{keydata:data});
    //res.render('testejs',{keydata:data,keyparam:req.params.text});
});

//test action get
app.get('/actionfromget',function(req,res){
    //json data
    var data = {
        fname:req.query.fname,
        lname:req.query.lname
    };
    res.end(JSON.stringify(data));
});

//test action post
app.post('/actionfrompost',function(req,res){
    //json data
    var data = {
        fname:req.body.fname,
        lname:req.body.lname
    };
    res.end(JSON.stringify(data));
});

// app.get('/',function(req,res){
//     res.send("<h1>Hello ..</h1>");
// });

// app.get('/param/:name',function(req,res){
//     res.send("Hello "+req.params.name);
// });

app.listen(8080);


