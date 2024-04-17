const express=require("express")
const app=express()
const cors=require("cors")
const fs=require("fs")
app.use(cors())
app.get("/:dir",(req,res)=>{
    let dir=req.params.dir
    fs.readFile(__dirname+"/documentation/"+dir+".md","utf8",(err,data)=>{
       if(err){
        return res.send({md:"# Not Found"})
       }
    
        res.send({md:data})
    })
   
})

app.listen(5001,()=>{
    console.log("Listen")
})