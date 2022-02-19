// var http = require('http');
// http.createServer((req,res)=>{
//     res.write("hai world");
//     res.end();
// }).listen(8080); 

var express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("home")
});


app.get('*',(req,res)=>{
    res.send("<h1>haii</h1>");
})

app.listen(6060);