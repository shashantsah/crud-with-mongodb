const mongoose=require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        
    },
    lastname: {
        type: String,
        required: false,
        
    },
    email: {
        type: String,
        required: true,
        unique: true,
       
        
    },
    gender:{
        type: String,
        required: true,
        
    }
},{timestamps:true});

const hero = mongoose.model('hero', userSchema);

module.exports = hero;