import React from 'react'
import styles from "./signup.module.css"
const Signup = () => {
  return (
    <div className={styles.formDiv}>
     <form className={styles.form}>
          <div>
            <input className={styles.inputs} type='text' placeholder='First Name'/>
          </div>
          <div>
            <input className={styles.inputs} type='text' placeholder='Last Name'></input>
          </div>
          <div >
             <input className={styles.inputs} type="text" placeholder='Enter your email' />
          </div>
          <div>
              <input className={styles.inputs} type="text" placeholder='Password' />
          </div>
         <button type="submit" className={styles.btnn}>Submit</button>
       
         
    </form>
    </div>
  )
}

export default Signup
