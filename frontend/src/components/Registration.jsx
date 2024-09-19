// import React, { useState } from 'react'
// import axios from "axios"
// import { Link, useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';

// const Registration = () => {
//     let [name, setName] = useState('');
//     let [email, setEmail] = useState('')
//     let [password, setPassword] = useState('')
//     let [cnfPassword, setCnfPassword] = useState('')
//     let navigate = useNavigate()

//     let submitForm =()=>{
//         let payload = {
//             name,email,cnfPassword
//         }
//         if(!name || !email || !cnfPassword){
//             alert("To register Fill all the fields..!")
//         }
//         else{
//             if(password === cnfPassword ){
//                 axios.post('http://localhost:4001/register', payload)
//             .then((e)=>{
//                 alert(e.data);
//                 navigate("/")
//             })
//             .catch((e)=>{
//                 alert("problem in sending data to the Backend.!");
//             })
//             }
//             else{
//                 alert("both password should be matched..")
//             }
            
//         }
//     }

//     return (
//         <div className='bg-neutral-300 h-max'>
//             <div className=' max-w-[940px]  h-[500px] border-4 border-blue-900 mx-auto relative  shadow-xl scale-75 p-[10px]'>
//                 <h1 className='text-center font-bold text-2xl my-3'>Admin Registration Form</h1>
//                 <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-10 '>
//                     <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Full Name' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} required />
//                     <input required  className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Email' type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//                     <input required  className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Enter Password' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//                     <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Retype Password' type="password" value={cnfPassword} onChange={(e)=>{setCnfPassword(e.target.value)}}/>
//                     <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={submitForm}>Register Me</button>
//                     <p>already have Account? <Button variant="outlined"><Link to='/'> Sign In</Link></Button> </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Registration



import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const Registration = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [cnfPassword, setCnfPassword] = useState('')
    let navigate = useNavigate()

    let submitForm =()=>{
        let payload = {
            name,email,cnfPassword
        }
        if(!name || !email || !cnfPassword){
            alert("To register Fill all the fields..!")
        }
        else{
            if(password === cnfPassword ){
                axios.post('http://localhost:4001/register', payload)
            .then((e)=>{
                alert(e.data);
                navigate("/")
            })
            .catch((e)=>{
                alert("problem in sending data to the Backend.!");
            })
            }
            else{
                alert("both password should be matched..")
            }
            
        }
    }

    return (
        <div className='h-screen bg-white flex justify-center'>
            <div className='max-w-md w-full mx-auto p-4 bg-black rounded-lg shadow-md'>
                <h1 className='text-white text-center font-bold text-2xl my-3'>Admin Registration Form</h1>
                <div className='max-w-md mx-auto my-5 p-10'>
                    <input 
                        className='w-full p-2 text-white bg-black border-2 border-white rounded-lg' 
                        placeholder='Enter Full Name' 
                        type="text" 
                        value={name} 
                        onChange={(e)=>{setName(e.target.value)}} 
                        required 
                    />
                    <input 
                        required 
                        className='w-full p-2 text-white bg-black border-2 border-white rounded-lg my-3' 
                        placeholder='Enter Email' 
                        type="text" 
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}} 
                    />
                    <input 
                        required 
                        className='w-full p-2 text-white bg-black border-2 border-white rounded-lg my-3' 
                        placeholder='Enter Password' 
                        type="password" 
                        value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}} 
                    />
                    <input 
                        className='w-full p-2 text-white bg-black border-2 border-white rounded-lg my-3' 
                        placeholder='Retype Password' 
                        type="password" 
                        value={cnfPassword} 
                        onChange={(e)=>{setCnfPassword(e.target.value)}} 
                    />
                    <button 
                        className='bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded-lg' 
                        onClick={submitForm}
                    >Register Me</button>
                    <p className='text-white text-center my-3'>already have Account? <Button variant="outlined"><Link to='/'> Sign In</Link></Button> </p>
                </div>
            </div>
        </div>
    )
}

export default Registration;