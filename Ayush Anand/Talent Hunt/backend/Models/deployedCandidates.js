const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let deployCandidateSchema=new Schema({
    clientName: {
        type: String,
        required: true
    },
    candName:{
        type:String,
        required:true        
    },
    email:{
        type:String,
        required:true        
    },
    gender:{
        type:String,
        required:true    
    },
    contactNumb:{
        type:Number,
        required:true
    },
    totalExp:{
        type:Number,
        required:true      
    },
    relExp:{
        type:Number,
        required:true
    },
    currentOrg:{
        type:String,
        required:true
    },
    stackName:{
        type:String,
        required:true
    },
    jobDesc:{
        type:String,
        required:true      
    },
    CCTC:{
        type:Number,
        required:true
    },
    ECTC:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    noticePer:{
        type: String,
        required:true
    },
    relocate: {
        type: String,
        required: true
    },
    InterPanel: {
        type: String,
        required: true
    }   
})

module.exports=mongoose.model('DeployCandidate',deployCandidateSchema);






