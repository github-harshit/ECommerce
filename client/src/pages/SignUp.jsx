import React, { useState } from 'react'
import styles from "../style/signup.module.css"; 
import {Link} from 'react-router-dom'; 
import image from "../images/Sardarji.png"; 
 import axios from "axios"

function SignUp() {
   const[formData, setFormData] = useState({
    username:"", 
    email: "", 
    password: "", 
    confirmPassword: ""
   }); 

   const handleChange = (event)=>{
     setFormData({...formData,[event.target.name] :event.target.value }); 

   }
   const handleSubmit = async (event)=>{
         event.preventDefault(); 
         const res = await axios.post("http://localhost:5000/api/auth/signup", formData); 
         console.log(res);


   }


  return (
    <div className={styles.container}>
         <div className={styles.box}>
              <div className={styles.topBox}>
                   <div className={styles.content}>
                    <p className={styles.para}> Flat 500 off <br></br>  On first Order <br></br>And Free Shipping</p>
                   </div>
                    <div className={styles.imageContainer}>
                        <img src = {image}></img>
                    </div>
              </div>
               <div className={styles.bottomBox}>
                 <h2>Sign Up </h2>
               <form>
                 <input type='text' name='username' onChange={handleChange} value={formData.username} placeholder='Enter  username'></input>
                 <input type='email' name='email' onChange={handleChange} value={formData.email} placeholder='Enter  email' ></input>
                  <input type='password' name='password' onChange={handleChange} value={formData.password} placeholder='Enterpassword'></input>
                  <input type='password' name='confirmPassword' onChange={handleChange} value={formData.confirmPassword} placeholder='Enter password again '></input>
                  <button type='submit' onSubmit={handleSubmit} className={styles.btn}>Sign Up </button>

               </form>

               </div>
                 <div className= {styles.lastBox}>
                 <p> Already have an account ? <Link className={styles.link} > Login</Link></p>
                   

                 </div>
                  


         </div>
        
        </div>
  )
}

export default SignUp