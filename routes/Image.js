const express=require('express');

const router=express.Router();
const {AddImage,GetImage}=require('../controllers/Image');


router.post('/addimage',AddImage);
router.get('/getimage/:id',GetImage)
module.exports=router;
