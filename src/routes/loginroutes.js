const express=require('express');

const loginRouter=express.Router();

loginRouter.route('/')
.get(function(req,res){

    res.render('login')
})
module.exports=loginRouter;