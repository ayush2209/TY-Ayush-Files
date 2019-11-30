const express=require('express');
const router=express.Router();
const candidateController=require('../Controller/candidate');

// adding candidate
router.post('/addCandidate',candidateController.addCandidate);

// getting All Candidates
router.get('/getAllCandidates',candidateController.getAllCandidates);

// selecting candidate
router.get('/selectCandidate/:id',candidateController.postSelectedCandidate);

// rejecting candidate
router.delete('/rejectCandidate/:id',candidateController.postRejectCandidate);

// getting Shortlisted Candidates
router.get('/getShortlistedCandidates',candidateController.getShortlistedCandidates);

// getting requirements based on candidate skill
router.get('/getSkillBaseRequirement/:id',candidateController.getSkillBaseRequirement);

// deploy candidate to the company
router.get('/deployCandidate/:compId/:candId' , candidateController.deployCandidate);

// getting Deployed Candidates
router.get('/getDeployedCandidates', candidateController.getDeployedCandidates);

// getting dashboard sheduled candidates
router.get('/getDBScheduledCandidate',candidateController.getDashBoardSheduledCandidate);

// getting dahsboard selected candidates
router.get('/getDBSelectedCandidate',candidateController.getDBSelectedCandidate);


router.get('/filteredCandidates/:cname/:role/:fromdate/:todate' , candidateController.getFilteredCandidate);


module.exports=router;