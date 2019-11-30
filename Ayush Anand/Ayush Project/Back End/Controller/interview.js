const Interview = require('../Models/interview');

exports.addInterview = (req, res, next) => {
    let allData  = req.body;
    let interviewname = req.body.interviewname
    let name = req.body.name;
    let email = req.body.email;
    let contactno = req.body.contactno;
    let opening = req.body.opening;
    let closing = req.body.closing;
    let clientname = req.body.clientname;
    let salary = req.body.salary;
    let skills = req.body.skills;
    let location = req.body.location;
    console.log(allData)

    let interview = new Interview({
        interviewname:interviewname,
        name : name,
        email : email,
        contactno : contactno,
        opening : opening,
        closing : closing ,
        clientname : clientname ,
        salary : salary,
        skills : skills,
        location : location
    })
    interview.save().then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
    })
}


exports.getInterview = (req, res, next) => {
    Interview.find().then( result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
    })  
}

exports.getFilterData = (req, res, next) => {
    let interviewnamefilter = req.params.interviewnamefilter;
    // console.log(interviewnamefilter);
    Interview.find({$and : [{ interviewname : { $eq: interviewnamefilter }}]}).then(filter => {
        console.log(filter);
        res.json(filter);
    }).catch(err => {
        console.log(err);
    })
}


exports.getPerticularData = (req, res, next) => {
    let id = req.params.id;
    console.log("value of id is ",id);
    Interview.findById({ '_id': id }).then(user => {
        res.json(user);
        console.log(user);
    }).catch(err => {
        console.log(err);
    })
    // let id = req.params.id;
    // console.log("value of id is ",id);
    // Interview.findById(id).then(data => {
    //     console.log(data);
    //     res.json(data);
    // }).catch(err => {
    //     console.log(err);
    // })
}