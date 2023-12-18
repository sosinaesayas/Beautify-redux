import React from 'react'
import styles from "./login.module.css"
import { Link } from 'react-router-dom'
import Signup from './signup'
const Login = () => {
  return (
    <div className={styles.formDiv}>
     <form className={styles.form}>
          <div >
             <input className={styles.inputs} type="text" placeholder='Enter your email' />
          </div>
          <div>
              <input className={styles.inputs} type="text" placeholder='Password' />
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <p className={styles.checkboxP}>Remember me</p>
          </div>
         <button type="submit" className={styles.btnn}>Submit</button>
         <div className={styles.signup}>
            <p>Not registered?</p>
            <Link className={styles.signupLink} to='./signup'>Sign up</Link>
         </div>
         
    </form>
    </div>
  )
}

export default Login
