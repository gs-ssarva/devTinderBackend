const express = require("express");

const app = express();


// query params and dynamic routes
/* query params */
app.get('/user/:userId/:pwd', (req,res) => {
    console.log(req.params);
    res.send('Saved user info into DB');
})

// HTTP methods

/* GET call */
app.get('/user',(req,res) => {
    res.send({'firstName':'Sai Sudha','lastName':'Mudigonda'});
});

/* POST call */
app.post('/user',(req,res) => {
    //save into DB
    res.send('User data got saved successfully!');
});

/* PUT call */
app.put('/user',(req,res) => {
    // update into DB
    res.send('User data got updated successfully');
});

/* PATCH call */
app.patch('/user',(req,res) => {
    // new record into DB
    res.send('New record got created for existing user');
});

/* Delete call */
app.delete('/user',(req,res) => {
    // delete record from DB
    res.send('Deleted successfully !');
});
// END of HTTP methods

// .use method will takeouver all routing methods.
app.use('/learn',(req,res) => { 
    res.send('This is initial learnining of node');
});
app.use('/test',(req,res)=>{
    res.send('This is my first test');
});

app.use('/hello',(req,res) =>{
    res.send('Hello Hello Helllo');
});
app.use('/',(req,res)=>{
    res.send('Namasthe Akshay');
});

// END of .use method



app.listen('3000',()=>{
    console.log("Listening to port 3000");
});