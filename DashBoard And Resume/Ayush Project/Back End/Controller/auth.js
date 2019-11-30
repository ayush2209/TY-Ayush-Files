const Auth = require('../Models/auth');
const bcrypt = require('bcryptjs');


exports.postSignUp=(req,res,next)=>{
    
      let email=req.body.email;
       let password=req.body.password;
        let conpassword=req.body.conpassword;
    
    Auth.findOne({email:email}).then(userDoc=>{
        if(userDoc){
          res.json({msg:"User already exists"});
        }
        return bcrypt.hash(password,12).then(hashedPassword=>{
            let auth=new Auth({
                email:email,
                password:hashedPassword
            })
            return auth.save();
        }).then(userDetails=>{
            res.json({
                user:userDetails,
                msg:'Registered successfully Please Login...'
            });
        })
    }).catch(err=>{
        console.log(err);
    })
}

exports.postLogin = (req,res,next)=>{
    let email=req.body.email;
    let password=req.body.password;
    Auth.findOne({email:email}).then(user=>{
        if(!user){
         res.json({msg:'Please register...'});
        }
       return bcrypt.compare(password,user.password).then(doMatch=>{
            if(doMatch){
               
                req.session.isLoggedIn=true;
                req.session.save();
                   
                    res.json({
                        isLoggedIn:req.session.isLoggedIn
                    })
            
            }
          
        })
    }).catch(err=>{
        console.log(err);
    })
}

exports.postLogout=(req,res,next)=>{
    req.session.destroy();
    res.json({
        'msg':"logged out successfully!.."
    })
}