const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name required"]
    },
    email:{
        type:String,
        required:[true,"Email required"]
    },
},{timestamps:true})
module.exports = mongoose.model("user",userSchema);