const bcrypt = require("bcrypt"); 
const User = require("../models/userModel"); 
const jwt = require("jsonwebtoken"); 

const signup = async (req, res)=>{
     const { username, email, password, confirmPassword} = req.body; 
     if(password!==confirmPassword){
         res.json({
             status:400, 
             msg: "Password does not match"
         });
     }
     try {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(password, salt);
        const newUser = new User({username, email, password :  hash}); 
   
        const savedUser = await newUser.save(); 
          
         return res.json({
             status: 201, 
             msg : "Successfully reated a user", 
             user: savedUser
         })

  
      } catch (error) {
         const msg = error.toString(); 
         return res.json(({
            status:500, 
            mgs:msg

         }))
      }
    }

    const login = async(req, res)=>{
         const {email, password} = req.body; 
          try{
            const user = await User.findOne({email:email}); 
            if(user===null){
                return res.json({
                    status:400, 
                    msg: "User not found signup first"
   
                })
            }
             const pass = await bcrypt.compare(password, user.password); 
             if(pass){
                // login is successful
                const secretKey = '12345'
                const payload = { userId: user.id, username: user.username };
                const options = { expiresIn: '1h' }; // Token expires in 1 hour
                 const token =  jwt.sign(payload, process.env.JWT_SECRET, options);

                return res.json({
                    status:201, 
                    msg: "Login successfull", 
                    user: user, 
                    token:token
                })
             }else{
                return res.json({
                    status:400, 
                    msg : "Login password does not match"
                })
             }
          }catch (error) {
            const msg = error.toString(); 
            return res.json(({
               status:500, 
               mgs:msg
   
            }))
         }
        

         
    }



module.exports = {
     signup : signup, 
     login:login
}