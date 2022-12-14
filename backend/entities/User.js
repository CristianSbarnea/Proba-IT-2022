const mongoose = require('mongoose');

// schema pt user
const userSchema = new mongoose.Schema(
    {
        id : {
            type : Number,
            unique : true,
        },
        email : {
            type : String,
            maxLen : 320,  // conform rfc lungimea maxima a unui email poate fi 320
            required : true,
            unique : true
        },
        username : {
            type : String,
            required : true,
            minLen : 8,
            maxLen : 32,
        },
        password : {
            type : String,
            minLen : 8,
            maxLen : 32,
            required : true,
        }
    }
) 

const User = module.exports = mongoose.model('User', userSchema);