const jwt = require('jsonwebtoken');
const JWT_sectret=process.env.JWT_sectret;
const fetchuser=(req,res,next)=>{
    // get the user from jwt token
   const Token=req.header('AuthToken');

   

   if(!Token)
   {
    return res.status(401).json({success:false, message:"access denied" });
   }

   const data=jwt.verify(Token,JWT_sectret,(error)=>{
    return res.status(401).json({success:false, message:"invalid token" })

   });
   

   req.user=data;


   
   

    next();
}
module.exports=fetchuser;