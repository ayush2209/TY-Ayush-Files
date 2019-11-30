const mongoose = require('mongoose');
const Auth = mongoose.Schema;

const authSchema = new Auth ({
    email: {
        type:String,
        required:true
    },
   password: {
      type:String,
      required:true
    }
})
module.exports=mongoose.model('Auth',authSchema);