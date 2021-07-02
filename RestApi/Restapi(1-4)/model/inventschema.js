const mongoose = require('mongoose');

const inventSchema = new mongoose.Schema({

        name:{
            type:String,
            trim:true,
        },
        quantity:{
            type:Number
        }
})

const invent = mongoose.model('invent', inventSchema);
module.exports = invent;