import React from 'react'
import Styles from './login.module.css'

function index() {
  return (
    <div className={Styles.loginScreen}>
        <span className={Styles.loginTitle}>Login</span>
        <form>
            <div className={Styles.userBox}>
            <input type="text" name="" required="" />
            <label>Username</label>
            </div>
            <div className={Styles.userBox}>
                <input  type="password" name="" required=""/>
                <label>Password</label>
            </div>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
            </a>
        </form>
      
    </div>
  )
}

export default index
