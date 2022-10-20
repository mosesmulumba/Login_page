import React , { useState } from 'react';
import "./index.css"
//import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [ username , setUsername ] = useState("");
  const [ password , setPassword] = useState("");
  //const navigate = useNavigate();

  const handleLogin = (e) =>{
    e.preventDefault();

    localStorage.setItem("userId", username);
    setUsername("");
    //navigate("/tasks");
    localStorage.setItem("passcode", password);
    setPassword("");
  };

  return(
    <div className='login--container'>
      <form onSubmit={handleLogin} className="form--top">&nbsp;&nbsp;
        <label className='username'>Write your username :</label>&nbsp;&nbsp;
          <input 
            type='text'
            name='username'
            id='username'
            required
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
            />&nbsp;
            <label>Enter password :</label>
            <input
            type='password'
            name="password"
            id="password"
            required
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            />&nbsp;
            &nbsp;&nbsp;&nbsp;
          <button>LOGIN</button>&nbsp;&nbsp;
          <button>SIGN IN</button>
      </form>
    </div>
  );
}

export default Login;