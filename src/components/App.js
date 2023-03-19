
import React from "react";
import './../styles/App.css';
import {useState} from 'react';
const App = () => {
  let [data,setData]=useState({
    username:"",
    password:""
  })
  let [error,setError]=useState("")
    let {username,password}=data
  let handler=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
    if(username===""||password==="")
    {
      setError('Both username and password are required')
      return;
    }
    setError("");
    setData({
      username:"",
      password:""
    })
  }
  
 
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="Username" style={{display:'inline'}}>Username:</label>
        <input type="text" name="username" onChange={handler} value={username}/>
        <div><br/></div>
        <label htmlFor="Password" style={{display:'inline'}}>Password:</label>
        <input type="password" name="password" onChange={handler} value={password}/>
        <p id='errorMessage' style={{color:'red'}}>{error}</p>
        <button type="submit" >Login</button>
        </form>
    </div>
  )
}

export default App
