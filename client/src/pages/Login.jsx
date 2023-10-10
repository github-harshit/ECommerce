import React from 'react'
import styles from "../style/signup.module.css"; 
import {Link} from 'react-router-dom'; 
import image from "../images/Sardarji.png"
function Login() {
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
                 <h2>Login </h2>
               <form>
                
                 <input type='email' name='email' placeholder='Enter your email'></input>
                  <input type='password' name='password'placeholder='Enter your password'></input>
                  <button type='submit' className={styles.btn}>Login </button>

               </form>

               </div>
                 <div className= {styles.lastBox}>
                 <p> Create an account  <Link className={styles.link} > Sign Up</Link></p>
                   

                 </div>
                  


         </div>
        
        </div>
  )
}

export default Login