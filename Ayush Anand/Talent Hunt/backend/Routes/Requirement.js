const express=require('express');
const router=express.Router();
const requirementController = require('../Controller/Requirement');

router.post('/addRequirement',requirementController.addRequirement);

router.get('/allRequirements',requirementController.getRequirements);

// getting dashboard requirements
router.get('/getDashboardRequirements',requirementController.getDashboardRequire);

// getting dashbpard filled requirements
router.get('/getDashboardFilledRequirements', requirementController.getDashboardFilledRequirements)


router.post('/editUser',requirementController.editUser);
 
router.delete('/deleteUser/:id',requirementController.deleteUser);




module.exports=router;