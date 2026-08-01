const express = require("express");// imported express package 
const app = express()// called express - server created saved in app variable 
/**
 * hum yaha pe server ka instance create kartr rahe hai 
 * instance => Kisi class ya blueprint se banaya gaya actual object instance kehlata hai.
 * 
 */


/**
 * 
 * /=> route pe koi req ayegi toh res aa raha hoga hello world
localhost:3000
Agar koi user hamare server ke home page (/) par aaye, toh usko hello world dikhao."

GET => Data lena
*/
app.get("/",(req,res)=>{
    res.send("hello world")
})

/**
 * localhost:3000/about
 * res -> about page 
 */
app.get("/about",(req,res)=>{
    res.send("about page")
})









//----------------------------------------------------------------------
app.listen(3000,()=>{
    //  started the server at port 3000
    console.log("server is running on port 3000");
    /**
     * PORT => 
     * {
     * 
     * 
     * }
     */
    // to start the server write node server.js
})

