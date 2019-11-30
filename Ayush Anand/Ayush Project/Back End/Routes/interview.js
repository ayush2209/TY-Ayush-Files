const express = require('express');
const router = express.Router();

const interviewCOntroller = require('../Controller/interview');

router.post('/addInterview' , interviewCOntroller.addInterview);
router.get('/getInterview' , interviewCOntroller.getInterview);

//filtering purppose 
router.get('/filterInterview/:interviewnamefilter' , interviewCOntroller.getFilterData);

//getting perticular data (table row click)


router.get('/getPerticularRowData/:id' , interviewCOntroller.getPerticularData);


module.exports = router;