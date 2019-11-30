const Candidate = require('../Models/candidate');
const View = require('../Models/view');
const User = require('../Models/Requirement');
const Deploy = require('../Models/deploy');
const FilledRequirement = require('../Models/filledRequirements');
exports.postCandidate = (req, res, next) => {
    let cname = req.body.cname;
    let role = req.body.role;
    let name = req.body.name;
    Candidate.find({ $and: [{ cname: { $eq: cname } }, { role: { $eq: role } }, { name: { $eq: name } }] }).then(candidate => {
        if (candidate.length > 0) {
            for (let candi of candidate) {
                // candi.position=candi.position+position;
                candi.save().then(savedCandi => {
                    return res.json(savedCandi);
                })
            }
        }
        else {
            new Candidate({
                name: req.body.name,
                role: req.body.role,
                contactno: req.body.contactno,
                email: req.body.email,
                cname: req.body.cname,
                prevcompany: req.body.prevcompany,
                prevsalary: req.body.prevsalary,
                expectsalary: req.body.expectsalary,
                langknown: req.body.langknown,
                experience: req.body.experience,
                notice: req.body.notice,
                fromdate: req.body.fromdate,
                todate: req.body.todate
            }).save().then(candidate => {
                res.json(candidate);
            })
        }
    }).catch(err => {
        console.log(err);
    })
}

exports.getCandidate = (req, res, next) => {
    // console.log(cname , role);
    Candidate.find().then(candidate => {
        res.json(candidate);
    }).catch(err => {
        console.log(err);
    });
}

exports.getFilteredCandidate = (req, res, next) => {
    let cname = req.params.cname;
    let role = req.params.role;
    let fromdate = req.params.fromdate;
    let todate = req.params.todate;
    console.log(cname, role, fromdate, todate);
    Candidate.find({ $and: [{ cname: { $eq: cname } }, { role: { $eq: role } }, { fromdate: { $eq: fromdate } }, { todate: { $eq: todate } }] }).then(candidate => {
        res.json(candidate);
    }).catch(err => {
        console.log(err);
    });
}

exports.getDBScheduledInterview = (req, res, next) => {
    Candidate.aggregate([
        { $group: { _id: "$role", count: { $sum: 1 } } }
    ]).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
    })
}

exports.deleteCandidate = (req, res, next) => {
    let id = req.params.id;
    Candidate.findByIdAndRemove(id).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
    })
}

exports.postCandidate1 = (req, res, next) => {


    let view = new View({
        name: req.body.name,
        role: req.body.role,
        contactno: req.body.contactno,
        email: req.body.email,
        cname: req.body.cname,
        prevcompany: req.body.prevcompany,
        prevsalary: req.body.prevsalary,
        expectsalary: req.body.expectsalary,
        langknown: req.body.langknown,
        experience: req.body.experience,
        notice: req.body.notice
    })
    let id = req.body.id
    Candidate.findById(id).then(candidate => {
        name = candidate
        role = candidate
        contactno = candidate
        email = candidate
        cname = candidate
        view.save();
        res.json(candidate);
    }).catch(err => {
        console.log(err);
    })
}
exports.gettingCandidate = (req, res, next) => {
    View.find().then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    })
}

exports.getDBCandidate = (req, res, next) => {
    View.aggregate([
        { $group: { _id: "$role", count: { $sum: 1 } } }
    ]).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
    })
}

exports.getDeployment = (req, res, next) => {
    let id = req.params.id;
    //   let skill=req.params.skill;
    console.log("value is", id)
    //   console.log(candidate.skill);
    View.findById({ '_id': id }).then(cand => {
        console.log(cand.role)
        User.find({ "skill": cand.role }).then(data => {
            console.log(data);
            res.json({
                requirements: data,
                candidateid: cand
            });
        })
    }).catch(err => {
        console.log(err);
    })
}

exports.deployCandidate = (req, res, next) => {
    console.log(req.params.compId, req.params.candId);
    User.findById(req.params.compId).then(comp => {
        View.findById(req.params.candId).then(cand => {
            console.log(comp, cand);
            new Deploy({
                cname: comp.cname,
                name: cand.name,
                role: cand.role,
                contactno: cand.contactno,
                email: cand.email,
                prevcompany: cand.prevcompany,
                prevsalary: cand.prevsalary,
                expectsalary: cand.expectsalary,
                experience: cand.experience,
                notice: cand.notice
            }).save();
            console.log(comp.cname);
            FilledRequirement.find({ "cname": comp.cname }).then(requirement => {
                console.log(requirement);
                if (requirement.length === 0) {
                    new FilledRequirement({
                        cname: comp.cname,
                        skill: comp.skill,
                        salary: comp.salary,
                        location: comp.location,
                        position: 1
                    }).save().then(result1 => {
                        comp.position = comp.position - 1;
                        comp.save().then(result5 => {
                            View.findByIdAndRemove(req.params.candId).then(result3 => {
                                return res.json({ msg: "candidate deployed" })
                            })
                        })
                    })
                } else {
                    for (let requ of requirement) {
                        if (comp.position > 1) {
                            comp.position = comp.position - 1;
                            comp.save().then(result4 => {
                                requ.position = requ.position + 1;
                                requ.save().then(result2 => {
                                    View.findByIdAndRemove(req.params.candId).then(result4 => {
                                        return res.json({ msg: "candidate deployed" })
                                    })
                                })

                            })
                        } else {
                            
                            requ.position = requ.position + 1;
                            requ.save().then(result2 => {
                                View.findByIdAndRemove(req.params.candId).then(result4 => {
                                    User.findByIdAndRemove(req.params.compId).then(result6 => {
                                        return res.json({ msg: "candidate deployed" })
                                    })
                                })
                            })
                        }
                    }
                }
            })
        })
    }).catch(err => {
        console.log(err)
    })
    // res.json("got");
}


exports.filledRequirement=(req,res,next)=>{
    FilledRequirement.aggregate([
        { $group: { _id: "$skill", count: { $sum: 1 } } }
    ]).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
    })
}