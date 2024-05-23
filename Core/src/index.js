const express = require("express");
const path = require('path');
//inbuilt module for resolving paths
// use nbit later for middleware
let asserDir = "src";
const app = express(express.static(path.join(__dirname,asserDir))); //app is the server
const PORT = 8080;


// app.get('/', (request,response) => {
//     response.send('This is a message');
// });

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "landing-page", "index.html"))
    // res.sendFile(path.join(__dirname, "public", "homedir.html"))
    // this creates the string using the directory name, publc and homedir.html 
    //use __dirname so that the reletive path can be used, (public)  is the folder and homedir.html is the file
})


app.listen(PORT, ()=>{
    console.log("The app is running on http://localhost"+ PORT);
    // console.log("The server is on port $Port{}")
});