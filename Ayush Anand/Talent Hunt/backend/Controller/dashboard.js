let Requirements=require('../Models/requirement');
let Candidate=require('../Models/candidate');
let selectedCandidates=require('../Models/selectedCandidates');
let FilledRequirement=require('../Models/filledRequirements');



// gtting all Requirements based on stackName
exports.getAllRequirements=(req,res,next)=>{
    let stackName=req.params.stackName;
    Requirements.find({'stackName':stackName}).then(requirements=>{
        res.json(requirements);
    }).catch(err=>{
        console.log(err);
    })
}

// getting all dashboard canidates
exports.getAllDashBoardCandidates=(req,res,next)=>{
    let stackName=req.params.stackName;
    Candidate.find({'stackName':stackName}).then(candidates=>{
        res.json(candidates);
    }).catch(err=>{
        console.log(err);
    })
}

exports.getAllSelectedCandidate=(req,res,next)=>{
    let stackName=req.params.stackName;
    console.log(stackName);
    View.find({'stackName':stackName}).then(candidates=>{
        res.json(candidates);
    }).catch(err=>{
        console.log(err);
    })
}

// getting All filled requirements based on stack name
exports.getAllFilledRequirement=(req,res,next)=>{
    let clientName=req.params.clientName;
    console.log(clientName);
     FilledRequirement.find({'clientName':clientName}).then(filledrequirement=>{
         res.json(filledrequirement);
     }).catch(err=>{
         console.log(err);
     })
}