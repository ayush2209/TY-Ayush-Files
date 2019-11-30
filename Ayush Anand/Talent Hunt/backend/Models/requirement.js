const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let requirementSchema = new Schema({
    clientName:{
        type:String,
        required:true
    },
    stackName:{
        type:String,
        required:true
    },
    exp:{
        type:Number,
        required:true
    },
    noOfPositions:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    startDate: {
        type: Date,
        default : Date.now
        //  new Date()
    },
    closingDate:{
        type: Date,
        required:true
    },
    CTC:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Requirement',requirementSchema);