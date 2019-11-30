const express=require('express');
const router=express.Router();
const dashBoardController=require('../Controller/dashboard')

// getting DashBoard modal of all requirements based on stackName
router.get('/allRequirements/:stackName',dashBoardController.getAllRequirements)

// getting DashBoard modal of all filled requirements based on clientName
router.get('/allFilledRequirement/:clientName',dashBoardController.getAllFilledRequirement)

// getting DashBoard modal of all Candidates based on stackName
router.get('/allCandidates/:stackName',dashBoardController.getAllDashBoardCandidates)

// getting DashBoard modal of all selected candidates based on stackName
router.get('/allSelectedCandidates/:stackName',dashBoardController.getAllSelectedCandidate)


module.exports=router;