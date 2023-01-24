const express=require('express');


const router=express.Router();

const ItemCategory=require('../models/ItemCategory')


// adding data in the database which name is org and into table which is itemcategor
router.post('/add',(req,res)=>{
     
         ItemCategory.create({
        item_category_id:req.body.item_category_id,
        category_name:req.body.category_name,
        category_name_hindi:req.body.category_name_hindi,
        category_image:req.body.category_image,
        vehicle_id:req.body.vehicle_id,
        priority:req.body.priority,
        created_at:new Date(),
        updated_at:new Date(),
        created_by:req.body.created_by,
        updated_by:req.body.updated_by,
        is_deleted:req.body.is_deleted
    }

    ).then((data)=>{
        
        return res.status(200).json({success:true, message:"succeffuly adding new tuple in db" });

    }).catch(()=>{
        return res.status(400).json({success:false,message:"Error occured during adding the data in database"})
    })

    
    
    
})


//extracting data from database
router.get('/data',(req,res)=>{
       ItemCategory.findAll().then((data)=>{
        res.send({ItemCategory_data:data})
      }).catch(()=>{
        return res.status(404);
      })
      
})

// updating ItemCategory data in database

router.put('/:id',(req,res)=>{

    let id=req.params.id;
     ItemCategory.update(req.body,{
        where:{
            id
        }
    }).then(()=>{
        
        res.status(200).json({success:true,message:"successfully updated"})
    }).catch(()=>{
        res.status(404).json({success:false,message:"some error occured during updatation time"})
    })


})

// delete data from database using id
router.delete('/:id',(req,res)=>{
    let id=req.params.id;

     ItemCategory.destroy({
        where:{
            id
        }
    }).then(()=>{
        res.status(200).json({success:true,message:'successfully deleted'})
    }).catch(()=>{
        res.status(404).json({success:false,message:"some error occured during updatation time"})
    })
})
module.exports=router;