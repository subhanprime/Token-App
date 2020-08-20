const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
    name:String,
    number:String,
    description:String,
    picture:String,
})

mongoose.model("register",ListSchema)