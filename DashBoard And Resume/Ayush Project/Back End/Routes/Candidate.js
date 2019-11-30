const express=require('express');
const router=express.Router();
const candidateController=require('../Controller/candidate');

router.post('/addCandidate',candidateController.postCandidate);

router.get('/addCandidate',candidateController.getCandidate);

router.get('/filteredCandidates/:cname/:role/:fromdate/:todate' , candidateController.getFilteredCandidate);

router.delete('/rejectCandidate/:id',candidateController.deleteCandidate);

router.post('/postCandidate',candidateController.postCandidate1);

router.get('/gettingCandidate',candidateController.gettingCandidate);

 router.get('/getDBSelectedCandidate',candidateController.getDBCandidate);

router.get('/getDBScheInterview',candidateController.getDBScheduledInterview);

router.get('/getDeploymentDetails/:id',candidateController.getDeployment);

router.get('/deployCandidate/:compId/:candId' , candidateController.deployCandidate);

router.get('/filledRequirement',candidateController.filledRequirement);

module.exports=router;