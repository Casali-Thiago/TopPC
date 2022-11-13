import React from 'react'
import Styles from './login.module.css'

function index() {
  return (
    <div className={Styles.loginScreen}>
        <span>Login</span>
        <form>
            <div>
            <input type="text" name="" required="" />
            <label>Username</label>
            </div>
        </form>
      
    </div>
  )
}

export default index
