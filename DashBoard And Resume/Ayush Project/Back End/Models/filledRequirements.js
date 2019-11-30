const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let filledRequirements=new Schema({
    cname:{
        type:String,
        required:true
    },
    skill:{
        type:String,
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

module.exports=mongoose.model('FilledRequirement', filledRequirements);