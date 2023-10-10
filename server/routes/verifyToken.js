const jwt = require("jsonwebtoken"); 
const verifyToken  = (req, res, next)=>{
     
      const token = req.headers.token; 
     if(token){
         jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            if(err){
                res.json({
                    status: 403, 
                    msg:'You are not authenticated'
                })
                 
            }
             console.log(user); 

             req.user = user; 
             next(); 

         })
     }else{
        return res.json({
            status:401, 
            msg: "Token  is missing"
        })
     }
}
 module.exports = verifyToken;
