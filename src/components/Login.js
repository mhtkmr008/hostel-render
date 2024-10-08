import React from 'react';
import { useState } from 'react';
import LoginService from '../service/LoginService';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
const Login=({onLogin})=>{
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(userName===''|| password==='')
        {
            setError('Both fields are required');
        }
        else
        {
            setError('');
            LoginService.getAuthorization(userName,password).then((result)=>{if(result.data){onLogin();navigate("/basePage");}}).catch((error)=>{alert("invalid credentials");navigate("/login");});
        }
    };
    return(
        <div className='loginCenterWrapper'>
            <div className='loginContainer'>
                <div className='loginLeft-section'>
                    <h2>Choudhary Girls Hostel</h2>
{/* <img src="/images/homePic.jpeg" alt="Login" style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} /> */}
                </div>

                <div className='loginRight-section'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>UserName :</label>
                            <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} required ></input>
                        </div>

                        <div>
                            <label>Password :</label>
                            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                        </div>
                
                        <div>
                            {error && <p>{error}</p>}
                        </div>

                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Login;

