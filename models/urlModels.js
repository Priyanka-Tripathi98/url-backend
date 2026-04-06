const mongoose = require ("mongoose")

const urlSchema = mongoose.Schema({
    originalUrl:{
        type: String,
        require:true
    },
    shortCode:{
        type: String,
        required:true,
        unique: true
    },
    shortUrl:{
        type: String,
    },
    clicks:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    expiryDate:{
        type: Date
    },
    password:{
        type: String,
        required: false
    }
})
module.exports = mongoose.model("URL",urlSchema)