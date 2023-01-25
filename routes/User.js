const express=require('express');
const { validationResult } = require('express-validator');
const FetchUser=require('../middlewares/FetchUser')

const router=express.Router();

const {ValidationBody,NewUser, LogIn,GetUserDetail}=require('../controllers/User')

router.post('/addUser',ValidationBody,NewUser);
router.get('/loginUser',ValidationBody,LogIn);
router.get('/getuser',FetchUser,GetUserDetail)

module.exports=router;