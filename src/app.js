const express = require("express");

const app = express();
app.use('/',(req,res)=>{
    res.send('Namasthe Akshay');
});

app.use('/learn',(req,res) => { 
    res.send('This is initial learnining of node');
});
app.use('/test',(req,res)=>{
    res.send('This is my first test');
});

app.use('/hello',(req,res) =>{
    res.send('Hello Hello Helllo');
});



app.listen('3000',()=>{
    console.log("Listening to port 3000");
});