const mongoose= require("mongoose")
const itemSchema = require("./items")
const eventSchema = new mongoose.Schema({
    name : {
        type: String,
        minlength: 5,
        maxlength: 100,
        required:true
    },
    date: {
        type: Date,
        required:true
    },
    items: {
        type:[itemSchema]
    },
    location: {
        type:String,
        minlength:5,
        maxlength:100,
        required:true
    }
})

module.exports = mongoose.model('Event', eventSchema)