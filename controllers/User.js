const User=require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');

const JWT_sectret=process.env.JWT_sectret;


// creating a user
exports.ValidationBody=[
    body('FirstName').isLength({ min: 5 }),
    body('Email').isEmail(),
    body('Password').isLength({ min: 5 }),
];

exports.NewUser=(req,res)=>{

    const errors =  validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, message:"some error has been occured" });
    }
    const {
        id,
        FirstName,
        LastName,
        UserName,
        Password,
        Email

    }=req.body;

    User.findOne({where:Email}).then(()=>{
        return res.send({success:false,message:"This email is already exist"});
    }).catch(()=>{
        const Salt =  bcrypt.genSaltSync(10);
        const SecurePassword =  bcrypt.hashSync(Password, Salt)
        User.create({
        id,
        FirstName,
        LastName,
        UserName,
        Password:SecurePassword,
        Email

        }).then((user)=>{
            const Data={
                UserId:user.id
            }
            const AuthToken = jwt.sign(Data, JWT_sectret);

            return res.status(200).json({success:true, message:"succeffuly adding new tuple in db",AuthToken:AuthToken});

        }).catch((error)=>{
            console.log("error hai bhai")
            return res.status(400).json({success:false,message:`${error}`})
        })
    })


}

// authentication of user

exports.LogIn=(req,res)=>{

    const errors =  validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success:false, message:"some error has been occured" });
    }
    
    User.findOne({whrere:{Email:req.body.Email}}).then((user)=>{

    
        let ComparePassword=bcrypt.compareSync(req.body.Password, user.Password);
        if(!ComparePassword)
        {
          return res.status(400).json({"success":false, message:"Your email or password is incorrect" });
        }
        else
        {
            const Data={
                UserId:user.id
            }
            const AuthToken = jwt.sign(Data, JWT_sectret);

            return res.status(200).json({success:true, message:"succeffuly loggin ",AuthToken:AuthToken});
        }


    }).catch((error)=>{
        return res.status(400).json({success:false, message:"incorrect email/password",error });
        
    })

}



//getting user detail using auth_token
exports.GetUserDetail=(req,res)=>{

     

      const UserId=req.user.UserId;
      User.findOne({where:{id:UserId},attributes:{exclude:'Password'}}).then((user)=>{
        res.send(user);
      }).catch(()=>{
        return res.status(401).json({"success":false, message:"access denied" });
      })
}
