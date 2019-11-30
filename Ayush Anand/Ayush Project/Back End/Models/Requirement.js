const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    exp:{
        type:Number,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        required:true
    }
    
})

module.exports=mongoose.model('User',userSchema);