const mongoose = require('mongoose');

// Schema to signup to users
const CommonSignupSchema = new mongoose.Schema ({
    name:{
        type: String,
        required: true,
        
    },

    name1:{
        type: String,
        required: true,
        
    },

    birthday:{
        type: Date,
        required: true,
        maxLength: 10
        
    },

    gender:{
        type: String,
        required: true,
        
    },

    nic:{
        type: String,
        required: true,
        
    },

    email:{
        type: String,
        required: true,
        
    },
    number:{
        type: Number,
        required: true
    },

    inputpw:{
        type: String,
        required: true,
        
    },
    role:{
        type: String,
        
    }
        
}, { timestamps: true});

const CommonSignup = mongoose.model('CommonSignup', CommonSignupSchema);
module.exports = CommonSignup;