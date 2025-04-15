const express= require('express');
const cors = require('cors');
const mongoose=require('mongoose');
const app=express();
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Hello")
    console.log("hello")
})

app.listen(5000,()=>{
    console.log(`server started on port 5000`)
})