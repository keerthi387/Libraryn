const express=require('express');

const signRouter=express.Router();

signRouter.route('/')
.get(function(req,res){

res.render('signup')

})

module.exports=signRouter;