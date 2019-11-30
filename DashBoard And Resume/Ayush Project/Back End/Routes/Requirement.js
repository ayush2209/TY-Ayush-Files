const express=require('express');
const router=express.Router();
const adminController=require('../Controller/Requirement');

router.post('/addUser',adminController.postUser);

router.get('/addUser',adminController.getUser);

router.post('/editUser',adminController.editUser);
 
//  router.get('/getDashboard',adminController.getDashboard);

router.get('/getDashboardRequire',adminController.getDashboardRequire);



// router.delete('/deleteUser/:id',adminController.deleteUser);




module.exports=router;