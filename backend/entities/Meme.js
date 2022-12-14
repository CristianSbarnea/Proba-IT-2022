const mongoose = require('mongoose');

// schema pentru meme-uri
const memeSchema = new mongoose.Schema(
    {
        id : {
            type : Number,
            unique : true,
        },
        description : {
            type : String,
            maxLength : 200,
            minLength : 20,
            required : true
        }

    }
)

const Meme = module.exports = mongoose.model('Meme', memeSchema);