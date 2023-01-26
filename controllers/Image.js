
const Image=require('../models/Image');

const multer  = require('multer')

// using multer for uploading file which store the file in Files/Uploads
const storage = multer.diskStorage({
    destination:'Files/MyUploads',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, file.fieldname + '-' + uniqueSuffix+".jpg")
    }
  })
  
  const upload = multer({ storage: storage }).single('ItemCategoryImage');


  exports.AddImage=(req,res)=>{
     upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
           return res.send({success:false,message:err});
        } else if (err) {
            return res.send({success:false,message:`something went wrong during uploading file ${err}`})
          
        }

        Image.create({
            ItemCategoryId:req.body.ItemCategoryId,
            ImageName:req.file.filename
        }).then(()=>{
            res.status(200).json({success:true,message:"successfully uploades"})
        }).catch((err)=>{
            res.status(500).json({success:false,message:`Something went wrong ${err}`});
        })
    })

    

  }

//getting all the images for a specific ItemCategory

exports.GetImage=(req,res)=>{
    const ItemCategoryId=req.params.id;

    Image.findAll({
        where:{
            ItemCategoryId:ItemCategoryId
        }
    }).then((data)=>{
        res.status(200).json({success:true,message:data});
    }).catch((err)=>{
        res.send(404).json({success:false,message:"something wrong"})
    })
}
