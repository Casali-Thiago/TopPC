import React from 'react'
import Styles from './login.module.css'

function Login() {

  return (
    <div className={Styles.loginScreen}>
      <span className={Styles.loginTitle}>Login</span>


      <form action='http://localhost:8000/codigos/teste.php' method="post" >

        <div className={Styles.userBox}>
          <input 
          type="text" 
          name="username" 
          required="" 
          />
          <label>Username</label>
        </div>

        <div className={Styles.userBox}>
          <input type="password" name="password" required="" />
          <label>Password</label>
        </div>

        <button type="submit"  className={Styles.submiteButton} href="#"   name="submit" value="OK!" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
        
        
        <div>
          <a id={Styles.registerText} href="login/register">Register</a>
        </div>
        

      </form>

    </div>
  )
}

export default Login
