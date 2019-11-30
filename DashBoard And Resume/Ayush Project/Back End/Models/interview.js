const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let interviewSchema = new Schema({
    interviewname : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contactno : {
        type : Number,
        required : true
    },
    opening : {
        type : String,
        required : true
    },
    closing : {
        type : String,
        required : true
    },
    clientname : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required : true
    },
    skills : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    }
})

module.exports=mongoose.model('Interview',interviewSchema);