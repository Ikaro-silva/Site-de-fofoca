const express= require('express')
const router=express.Router()
const controller=require('../controller/user.controller')


//=> register router (POST):localhost://3000/api/fof/register
router.post('/register',controller.registerUser)

//=> login router (POST):localgost://3000/api/fof/login
router.post('/login',controller.loginUser)

module.exports=router
