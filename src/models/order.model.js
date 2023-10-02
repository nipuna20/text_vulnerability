const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    postalNo:{
        type:Number,
        required:true
    },
    street:{
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
    orderDate:{
        type:Date,
    },
    status:{
        type:String,
        default:"Pending"
    },
    cartTotal:{
        type:String,
        required:true
    }

     
    
});

module.exports = mongoose.model('Order',orderSchema);