const express=require("express")
const app=express()
const cors=require("cors")
const fs=require("fs")
app.use(cors())
app.get("/",(req,res)=>{
   
    fs.readFile(__dirname+"/documentation/introduction.md","utf8",(err,data)=>{
       if(err){
        return res.send({error:true})
       }
    
        res.send({md:data})
    })
   
})

app.listen(5001,()=>{
    console.log("Listen")
})