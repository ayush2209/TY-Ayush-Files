const express=require('express');
const router=express.Router();
const authController=require('../Controller/auth');


// signup route for user
router.post('/postSignUp',authController.postSignUp);

// login route for user
router.post('/postLogin',authController.postLogin);

// logout route for user
router.post('/postLogout',authController.postLogout);




module.exports=router;