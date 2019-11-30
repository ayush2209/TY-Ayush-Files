const Candidate = require('../Models/candidate');
const selectedCandidate = require('../Models/selectedCandidates');
const Requirements = require('../Models/requirement');
const DeployCandidate = require('../Models/deployedCandidates');
const FilledRequirement = require('../Models/filledRequirements');


exports.addCandidate = (req, res, next) => {
    let currentOrg = req.body.currentOrg;
    let stackName = req.body.stackName;
    let candName = req.body.candName;
    Candidate.find({ $and: [{ currentOrg: { $eq: currentOrg } }, { stackName: { $eq: stackName } }, { candName: { $eq: candName } }] }).then(candidate => {
        if (candidate.length > 0) {
            for (let candi of candidate) {
                candi.save().then(savedCandi => {
                    return res.json(savedCandi);
                })
            }
        }
        else {
            new Candidate({
                candName: req.body.candName,
                email: req.body.email,
                gender: req.body.gender,
                contactNumb: req.body.contactNumb,
                totalExp: req.body.totalExp,
                relExp: req.body.relExp,
                currentOrg: req.body.currentOrg,
                stackName: req.body.stackName,
                jobDesc: req.body.jobDesc,
                CCTC: req.body.CCTC,
                ECTC: req.body.ECTC,
                location: req.body.location,
                noticePer: req.body.noticePer,
                relocate: req.body.relocate,
                InterPanel: req.body.InterPanel
            }).save().then(candidate => {
                res.json(candidate);
            })
        }
    }).catch(err => {
        console.log(err);
    })
}

// getting All Canididates shwduled for interview
exports.getAllCandidates = (req, res, next) => {
    Candidate.find().then(candidates => {
        res.json(candidates);
    }).catch(err => {
        console.log(err);
    });
}

// selecting candidate and adding to shortlisted candidates
exports.postSelectedCandidate = (req, res, next) => {
    let id = req.params.id;
    Candidate.findById(id).then(candidate => {
        new selectedCandidate({
            candName: candidate.candName,
            email: candidate.email,
            gender: candidate.gender,
            contactNumb: candidate.contactNumb,
            totalExp: candidate.totalExp,
            relExp: candidate.relExp,
            currentOrg: candidate.currentOrg,
            stackName: candidate.stackName,
            jobDesc: candidate.jobDesc,
            CCTC: candidate.CCTC,
            ECTC: candidate.ECTC,
            location: candidate.location,
            noticePer: candidate.noticePer,
            relocate: candidate.relocate,
            InterPanel: candidate.InterPanel
        }).save().then(result => {
            Candidate.findByIdAndRemove(id).then(result => {
                res.json({
                    msg: 'candidate selected'
                });
            })
        })
    }).catch(err => {
        console.log(err);
    })
}

// rejecting candidate
exports.postRejectCandidate = (req, res, next) => {
    let id = req.params.id;
    Candidate.findByIdAndRemove(id).then(result => {
        res.json({
            msg: 'candidate rejected successfully'
        });
    }).catch(err => {
        console.log(err);
    })
}

// getting Shortlisted Candidates
exports.getShortlistedCandidates = (req, res, next) => {
    selectedCandidate.find().then(data => {
        res.json(data);
    }).catch(err => {
        console.log(err);
    })
}

// getting requirements based on candidate skill
exports.getSkillBaseRequirement = (req, res, next) => {
    let id = req.params.id;
    selectedCandidate.findById({ '_id': id }).then(candidate => {
        console.log(candidate);
        console.log(candidate.stackName)
        Requirements.find({ "stackName": candidate.stackName }).collation({ locale: 'en', strength: 2 }).then(data => {
            res.json({
                requirements: data,
                candidateDetails: candidate
            });
        })
    }).catch(err => {
        console.log(err);
    })
}

// deploy shortlisted candidate
exports.deployCandidate = (req, res, next) => {
    console.log(req.params.compId, req.params.candId);
    Requirements.findById(req.params.compId).then(comp => {
        selectedCandidate.findById(req.params.candId).then(cand => {
            console.log(comp, cand);
            new DeployCandidate({
                clientName: comp.clientName,
                candName: cand.candName,
                email: cand.email,
                gender: cand.gender,
                contactNumb: cand.contactNumb,
                totalExp: cand.totalExp,
                relExp: cand.relExp,
                currentOrg: cand.currentOrg,
                stackName: cand.stackName,
                jobDesc: cand.jobDesc,
                CCTC: cand.CCTC,
                ECTC: cand.ECTC,
                location: cand.location,
                noticePer: cand.noticePer,
                relocate: cand.relocate,
                InterPanel: cand.InterPanel
            }).save();
            console.log(comp.clientName);
            FilledRequirement.find({ "clientName": comp.clientName }).then(requirement => {
                console.log(requirement);
                if (requirement.length === 0) {
                    new FilledRequirement({
                        clientName: comp.clientName,
                        stackName: comp.stackName,
                        exp: comp.exp,
                        noOfPositions: 1,
                        location: comp.location,
                        designation: comp.designation,
                        closingDate: comp.closingDate,
                        CTC: comp.CTC
                    }).save().then(result => {
                        comp.noOfPositions = comp.noOfPositions - 1;
                        comp.save().then(result => {
                            selectedCandidate.findByIdAndRemove(req.params.candId).then(result => {
                                return res.json({ msg: "candidate deployed" })
                            })
                        })
                    })
                } else {
                    for (let requ of requirement) {
                        if (comp.noOfPositions > 1) {
                            comp.noOfPositions = comp.noOfPositions - 1;
                            comp.save().then(result => {
                                requ.noOfPositions = requ.noOfPositions + 1;
                                requ.save().then(result => {
                                    selectedCandidate.findByIdAndRemove(req.params.candId).then(result => {
                                        return res.json({ msg: "candidate deployed" })
                                    })
                                })

                            })
                        } else {
                            requ.noOfPositions = requ.noOfPositions + 1;
                            requ.save().then(result2 => {
                                selectedCandidate.findByIdAndRemove(req.params.candId).then(result => {
                                    Requirements.findByIdAndRemove(req.params.compId).then(result => {
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
}

// getting All Deployed Candidates.
exports.getDeployedCandidates = (req, res, next) => {
    DeployCandidate.find().then(candidates => {
        res.json(candidates);
    }).catch(err => {
        console.log(err);
    })
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

// getting ALl sheduled candidate for interview
exports.getDashBoardSheduledCandidate = (req, res, next) => {
    Candidate.aggregate([
        { $group: { _id: "$stackName", totalCandidates : { $sum: 1 } } }
    ]).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
    })
}

// getting all Shortlisted candidate
exports.getDBSelectedCandidate = (req, res, next) => {
    selectedCandidate.aggregate([
        { $group: 
            { _id: "$stackName", 
            totalCandidates: { $sum: 1 } 
            } 
        }
    ]).then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
    })
}
