const User = require('../Models/requirement');
const filledRequirements = require('../Models/filledRequirements');

// adding Client Requirement
exports.addRequirement=(req,res,next)=>{
    console.log(req.body);
    let clientName=req.body.clientName;
    let stackName=req.body.stackName;
    let positions=req.body.positions;
    User.find({$and: [{clientName: {$eq:clientName}},{stackName: {$eq:stackName}}]}).then(requirement=>{
        if(requirement.length>0){
            for(let requi of requirement){
                requi.noOfPositions=requi.noOfPositions+positions;
                requi.save().then(savedReq=>{
                    return res.json(savedReq);
                })
            }
    }
    else{
     new User({
        clientName:req.body.clientName,
        stackName:req.body.stackName,
        exp:req.body.Experience,
        noOfPositions:req.body.positions,
        location:req.body.location,
        designation:req.body.designation,
        closingDate:req.body.closingDate,
        CTC : req.body.CTC
    }).save().then(data =>{
       return res.json(data);
    })
    }
    }).catch(err => {
        console.log(err);
    })
}

// getting All requirements
exports.getRequirements=(req,res,next)=>{
    User.find().then(data=>{
      res.json(data);
    }).catch(err=>{
        console.log(err);
    })
}


exports.editUser=(req,res,next)=>{
    let id=req.body.id;
    let cname=req.body.cname;
    let skill=req.body.skill;
    let minexp=req.body.minexp;
    let maxexp=req.body.maxexp;
    let salary=req.body.salary;
    let location=req.body.location;
    let position=req.body.position;
    User.findById(id).then(emp=>{
        emp.cname=cname;
        emp.skill=skill;
        emp.minexp=minexp;
        emp.maxexp=maxexp;
        emp.salary=salary;
        emp.location=location;
        emp.position=position;
        emp.save();
        res.json(emp);
    }).catch(err=>{
        console.log(err);
    })
}
exports.deleteUser=(req,res,next)=>{
    let id=req.params.id;
    User.findByIdAndRemove(id).then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
}

// getting All DashBoard Requirements
exports.getDashboardRequire=(req,res,next)=>{
    User.aggregate([
        {$group: 
           { _id:"$stackName", 
               totalRequirements:{$sum: "$noOfPositions"},
               NumberofCompanies:{$sum:1}                 
           }             
       }         
   ]).collation( { locale: 'en', strength: 2 } ).then(data=>{
            res.json(data)
        }).catch(err=>{
          console.log(err);
        })
}

// getting DashBoardFilledRequirements
exports.getDashboardFilledRequirements = (req, res, next) => {
    filledRequirements.aggregate([
        {$group:
            { _id:"$clientName",
               Positions:{$sum: "$noOfPositions"},
            }                 
        }
    ]).then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    })
}
