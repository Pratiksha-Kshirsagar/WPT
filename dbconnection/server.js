const mysql=require("mysql");
const express=require("express");
const path=require("path");
const bodyparser = require("body-parser");
const { json } = require("body-parser");
const app=express();
app.use(bodyparser.urlencoded({extended:false}));
var connec=mysql.createConnection({
    host:"localhost",
    user:"root",
    port:3306,
    password:"root",
    database:"MYJOB"
});
connec.connect(function(err){
    if(err) throw err;
    console.log("connected");
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "index.html"));
})

// app.post("/", function(req,res){
//     res.sendFile(path.join(__dirname, "index.html"));
// })

// app.get("/page", (req, res) => {
//     res.sendFile(path.join(__dirname, "page.html"));
// })

app.post("/page", (req, res) => {
   var name =  req.body.name;
   var age = req.body.age;
 var q = "insert into data value ('"+name+"', '"+age+"')";

   connec.query(q, function(err, result) {
        if(err){
            console.log(err);
        }
        else
        console.log(result);
   });
   res.sendFile(path.join(__dirname, "page.html"));
});

app.get("/data", function(req, res){
    var results;
    var q = "select * from data";
    connec.query(q, function(err, result){
        res.send(result);
    })
    
})



    // app.get("/", function(req,res){
    //     res.sendFile(path.join(__dirname, "index.html"));
    // })

app.listen(7878);
console.log("port:7878");

// connec.query("create database MYJOB" ,function(err,result){
//     if(err) throw err;
//     else
//     console.log(result);
// })

// connec.query("show databases" ,function(err,result){
//     if(err) throw err;
//     else
//     console.log(result);
// })

// connec.query("create table data (name varchar(20) primary key,age int)" ,function(err,result){
//     if(err) throw err;
//     else
//     console.log(result);
// })

// connec.query("insert into data(name,age)values('pratiksha', 27)"),function(err,result){
//     if(err) throw err;
//     else
//     console.log(result);
// }

// connec.query("select * from data") ,function(err,result){
//     if(err) throw err;
//     else
//     console.log(result);
// }



