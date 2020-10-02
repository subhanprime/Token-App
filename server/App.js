const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const mongoose = require('mongoose')
require("./Register")

app.use(bodyParser.json())

const Register = mongoose.model("register")


const mongoUri = "mongodb+srv://token1:MEWT1glZnsF1ZfCm@cluster0.buzud.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true  
})
.then(()=>console.log('mongodb connected server'))
.catch(err => console.log(err))

mongoose.connection.on("connected",()=>{
    console.log("mongoose is connected now")
})



mongoose.connection.on("error",(err)=>{

    console.log("error",err)
})

app.get('/dos',(req,res)=>{
    Register.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })

    // res.send("welcom to node js ")
})

app.post('/send',(req,res)=>{
    //console.log(req.body)
    const register = new Register({
        name:req.body.name,
        number:req.body.number,
        picture:req.body.picture

    })

    register.save()
    .then(data => {
        console.log(data)

        res.send(data)
    }).catch(err=>{
        console.log(err) 
    })
    
})
app.post('/delete',(req,res)=>{
    Register.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/update',(req,res)=>{
    Register.findByIdAndUpdate(req.body.id,{

        name:req.body.name,
        number:req.body.number,
        picture:req.body.picture

    }).then(data=>{
        console.log(data) 
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.listen(3000, (req,res)=>{
    console.log("server is runing")  

})  


