var express=require("express");
var app =express();

app.use(bodyParser.urlencoded({
    extended: false
 }));

app.get('/get',function (req,res){
    res.send('<html><body><h1>Hello World</h1></body></html>')
});

app.post('/home', function (req,res){
    res.send('<html><body><h1>post method </h1></body></html>')
});

var server = app.listen(7878, function () {
    console.log('Node server is running..');
});

