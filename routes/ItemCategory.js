const express=require('express');

const router=express.Router();

const {newItemCategory,getItemCategory,updateItemCategory,deleteItemCategory}=require('../controllers/ItemCategory');


// adding data in the database which name is org and into table which is itemcategor

router.post('/addItemCategory',newItemCategory);


//extracting data from database
router.get('/getItemCategory',getItemCategory);

// updating ItemCategory data in database

router.put('/updateItemCategory/:id',updateItemCategory);

// delete data from database using id
router.delete('/deleteItemCategory',deleteItemCategory)

module.exports=router;