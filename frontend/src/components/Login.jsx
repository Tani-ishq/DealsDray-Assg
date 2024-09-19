// 

import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    let login=()=>{
        let payload = {email, password}
        axios.post('http://localhost:4001/login', payload)
        .then((e)=>{
            if(e.data.status == "success"){
                navigate(`/dashbord/${e.data.id}`)
            }
            else if(e.data.status == "fail"){
                alert("wrong password")
            }
            else if(e.data.status == "noUser"){
                alert("Invalid Email")
            }
        })
    }

    return (
        <div className='h-screen bg-white flex justify-center'>
            <div className='max-w-md w-full mx-auto p-4 bg-black rounded-lg shadow-md'>
                <h1 className='text-white text-center font-bold text-2xl my-3'>Login Form</h1>
                <div className='max-w-md mx-auto my-5 p-10'>
                    <input 
                        className='w-full p-2 text-white bg-black border-2 border-white rounded-lg' 
                        placeholder='Email' 
                        type="text" 
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}} 
                    />
                    <br />
                    <input 
                        className='w-full p-2 text-white bg-black border-2 border-white rounded-lg my-3' 
                        placeholder='Password' 
                        type="password" 
                        value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}} 
                    />
                    <button 
                        className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg' 
                        onClick={login}
                    >LOGIN</button>
                    <br />
                    <p className='text-white text-center my-3'>do not have Account? <Button variant="outlined"><Link to='/register'> Sign Up</Link></Button> </p>
                </div>
            </div>
        </div>
    )
}

export default Login;