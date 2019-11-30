const User=require('../Models/Requirement');

exports.postUser=(req,res,next)=>{
    let name=req.body.name;
    let email=req.body.email;
    let position=req.body.position;
    User.find({$and: [{name: {$eq:name}},{email: {$eq:email}}]}).then(requirement=>{
        if(requirement.length>0){
            for(let requi of requirement){
                requi.position=requi.position+position;
                requi.save().then(savedReq=>{
                    return res.json(savedReq);
                })
            }
    }
    else{
     new User({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile,
        exp:req.body.exp,
        salary:req.body.salary,
        location:req.body.location,
        position:req.body.position
    }).save().then(data =>{
       return res.json(data);
    })
    }
    }).catch(err => {
        console.log(err);
    })
}


exports.getUser=(req,res,next)=>{
    User.find().then(data=>{
      res.json(data);
    }).catch(err=>{
        console.log(err);
    })
}

exports.editUser=(req,res,next)=>{
    let id=req.body.id;
    let name=req.body.name;
    let email=req.body.email;
    let mobile=req.body.mobile;
    let exp=req.body.exp;
    let salary=req.body.salary;
    let location=req.body.location;
    let position=req.body.position;
    User.findById(id).then(emp=>{
        emp.name=name;
        emp.email=email;
        emp.mobile=mobile;
        emp.exp=exp;
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

// exports.getDashboard=(req,res,next)=>{
//     User.find({ },{"_id":0,"cname":1,"position":1}).then(requirement=>{
//         res.json(requirement);
//     }).catch(err=>{
//         console.log(err);
//     })
// }

exports.getDashboardRequire=(req,res,next)=>{
    
    // User.find().then(data=>{
    //     res.json(data);
    //   }).catch(err=>{
    //       console.log(err);
    //   })
    User.aggregate([
            {$group:{_id:"$skill",count:{$sum:1}}}
        ]).then(data=>{
            res.json(data)
        }).catch(err=>{
          console.log(err);
        })
}