const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    number:String,
    description:String,
    picture:String,
})

mongoose.model("register",ListSchema)