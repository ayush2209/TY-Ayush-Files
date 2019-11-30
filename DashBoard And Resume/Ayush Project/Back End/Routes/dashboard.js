const express=require('express');
const router=express.Router();
const dashBoardController=require('../Controller/dashboard')

router.get('/allRequirements/:skill',dashBoardController.getAllRequirements)
router.get('/allCandidates/:role',dashBoardController.getAllCandidates)
router.get('/allSelectedCandidates/:role',dashBoardController.getAllSelectedCandidate)

router.get('/allFilledRequirement/:skill',dashBoardController.getAllFilledRequirement)
module.exports=router;