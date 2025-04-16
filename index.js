const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const DB=require('./config/connection')
const user=require('./model/usreSchema')
const app = express();
app.use(cors());
app.use(express.json())


app.get("/", async(req, res) => {
    try{
        const data=await user.find()
    res.json(data)
    }catch(err){
        console.error(err)
    }
    
});

app.post('/user',(req,res)=>{
    try{
        const {name, phone , email, city}=req.body;
        const data=new user({name,phone,email,city})
        data.save();
        res.status(200).send("successfull")
    }catch(err){
        console.error(err)
    }
    
})

app.put('/user/:key',async(req,res)=>{
    try{
        const data=await user.updateOne({ name: req.params.key }, {
            name: req.body.name
            
           });
     
           console.log(data)
           res.status(200).send("successfull")
    }catch(err){
        console.error(err)
    }
    
})


app.listen(5000, () => {
  console.log(`server started on port 5000`);
});
