import React from 'react'
import Styles from './register.module.css'

const signup = () => {
  return (
    <div className={Styles.loginScreen}>
        <span className={Styles.loginTitle}>Register</span>
        <form action='http://localhost:8000/codigos/teste2.php' method="post">
            <div className={Styles.userBox}>
            <input type="text" name="username" required=""/> 
            <label>Username</label>
            </div>
            
            <div className={Styles.userBox}>
                <input  type="password" name="passhash" required="" />
                <label>Password</label>
            </div>
            <button  type="submit" name='submit' value="OK!">
            Create Account
          </button>
          
        </form>
      
    </div>
  )
}

export default signup
