import { useState } from 'react';
import Styles from './register.module.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Register = () => {

  let history = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });

    console.log(data)
  }

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      username: data.username,
      email: data.email,
      passhash: data.passhash
    }
    console.log(sendData)

    axios.post('http://localhost:8000/codigos/register.php', sendData)
      .then((result) =>{
          if (result.data.Status == 'Invalid'){  
            alert('Ivalid User');
          }
          else{
            history('/Login');
          }
     })
    }

  return (
    <div className={Styles.loginScreen}>
      <span className={Styles.loginTitle}>Register</span>
      <form onSubmit={submitForm}
       >
        <div className={Styles.userBox}>
          <input type="text"
            name="username"
            required=""
            onChange={handleChange} value={data.username}
          />
          <label>Username</label>
        </div>
        <div className={Styles.userBox}>
          <input type="email"
            name="email"
            required=""
            onChange={handleChange} value={data.email}
          />
          <label>Email</label>
        </div>
        <div className={Styles.userBox}>
          <input type="password"
            name="passhash"
            required=""
            onChange={handleChange} value={data.passhash}
          />
          <label>Password</label>
        </div>
        <button type="submit" name='submit' value="Register">
          Create Account
        </button>

      </form>

    </div>
  )
}

export default Register
