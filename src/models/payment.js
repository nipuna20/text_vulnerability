const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({

    fname:{
        type:String,
        required:true
    },
    sname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    town:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true
    },
    date:{
        type:Date,
    },
    status:{
        type:String,
        default:"Pending"
    },

     
    
});

module.exports = mongoose.model('payment',paymentSchema);