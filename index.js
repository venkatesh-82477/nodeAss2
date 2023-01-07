const express =require("express");
const app=express();

app.get("/api/main",function(req,res){
    console.log("This is express.js");
    res.send("<h1>This is express.js</h1>")
})

app.listen(5050,function(){
    console.log("Server is started at port 5050");
})