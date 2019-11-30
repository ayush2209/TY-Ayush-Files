const express=require('express');
const router=express.Router();
const authController=require('../Controller/auth');

router.post('/postSignUp',authController.postSignUp);
router.post('/postLogin',authController.postLogin);
router.post('/postLogout',authController.postLogout);




module.exports=router;