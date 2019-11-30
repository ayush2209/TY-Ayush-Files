let User=require('../Models/Requirement');
let Candidate=require('../Models/candidate');
let View=require('../Models/view');
let FilledRequirement=require('../Models/filledRequirements');
exports.getAllRequirements=(req,res,next)=>{
    let skill=req.params.skill;
    console.log(skill);
    User.find({'skill':skill}).then(requirements=>{
        res.json(requirements);
    }).catch(err=>{
        console.log(err);
    })
}
exports.getAllCandidates=(req,res,next)=>{
    let role=req.params.role;
    console.log(role);
    Candidate.find({'role':role}).then(candidates=>{
        res.json(candidates);
    }).catch(err=>{
        console.log(err);
    })
}

exports.getAllSelectedCandidate=(req,res,next)=>{
    let role=req.params.role;
    console.log(role);
    View.find({'role':role}).then(candidates=>{
        res.json(candidates);
    }).catch(err=>{
        console.log(err);
    })
}

exports.getAllFilledRequirement=(req,res,next)=>{
    let skill=req.params.skill;
    console.log(skill);
     FilledRequirement.find({'skill':skill}).then(filledrequirement=>{
         res.json(filledrequirement);
     }).catch(err=>{
         console.log(err);
     })
}