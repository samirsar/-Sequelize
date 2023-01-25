const ItemCategory=require('../models/ItemCategory');



exports.newItemCategory=(req,res)=>{
    const {
        item_category_id,
        category_name,
        category_name_hindi,
        category_image,
        vehicle_id,
        priority,
        created_by,
        updated_by,
        is_deleted
        

    }=req.body;

    ItemCategory.create({
        item_category_id,
        category_name,
        category_name_hindi,
        category_image,
        vehicle_id,
        priority,
        created_at:new Date(),
        updated_at:new Date(),
        created_by,
        updated_by,
        is_deleted
    }
    
    ).then((data)=>{
        
        return res.status(200).json({success:true, message:"succeffuly adding new tuple in db" });
    
    }).catch((error)=>{
        return res.status(400).json({success:false,message:`${error}`})
    })
    
}

//extracting data from database

exports.getItemCategory=(req,res)=>{
    ItemCategory.findAll().then((data)=>{
        res.send({ItemCategory_data:data})
      }).catch(()=>{
        return res.status(404);
      })
    

}


// updating ItemCategory data in database

exports.updateItemCategory=(req,res)=>{
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

}



//deleting itemcategory by id
exports.deleteItemCategory=(req,res)=>{

    let id=req.params.id;
    ItemCategory.destroy({
       where:{
           id
       }
   }).then(()=>{
       
       res.status(200).json({success:true,message:"successfully updated"})
   }).catch(()=>{
       res.status(404).json({success:false,message:"some error occured during updatation time"})
   })
    
}