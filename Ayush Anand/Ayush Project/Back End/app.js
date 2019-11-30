const express=require('express');

const app=express();
const cors = require('cors')

const requirementRoutes=require('./Routes/Requirement');
 const candidateRoutes=require('./Routes/Candidate');
 const authRoutes=require('./Routes/auth');
 const dashRoutes=require('./Routes/dashboard');
 const interviewRoutes = require('./Routes/interview');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongodbStore=require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
let mongodbURI = "mongodb://localhost:27017/myOwnProject2";
app.use(cors());

let store=new MongodbStore({
    uri:mongodbURI,
    collection:'session'
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'my secret', resave: false, saveUninitialized: false,store:store}));
app.use(requirementRoutes);
app.use(candidateRoutes);
app.use(authRoutes);
app.use(dashRoutes);
app.use(interviewRoutes);
mongoose.connect(mongodbURI, { useNewUrlParser: true }).then(res => {    //then and catch are promises
   
        console.log("mongodb connected successfully");
        app.listen(4000);
        console.log("app is listening to port number 4000");
            
}).catch(err => {
    console.log(err);
});