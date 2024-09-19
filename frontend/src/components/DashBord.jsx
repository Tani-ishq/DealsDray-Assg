// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import { Link, useParams } from 'react-router-dom'
// import Button from '@mui/material/Button';

// const DashBord = () => {
//   let [name, setname] = useState("")
//   let ID = useParams()

//   useEffect(()=>{
//     axios.get(`http://localhost:4001/user/${ID.ID}`)
//     .then((e)=>{
//       setname(e.data)
    
//     })
//     .catch(()=>{console.log("unable to fetch data in Edit comp");})
// },[])

//   return (
//     <div>
//       <div id='navbar' className='bg-gray-300  '>
//         <ul className='flex gap-24 px-10'>
//           <li>Home</li>
//           <li><Button variant="text"><Link to='/create-employee'> Create Employee</Link></Button> </li>
//           <li><Button variant="text"><Link to="/employee-list">  Employee list </Link></Button> </li>
//           <li className='p-2 text-red-500 border border-dashed border-red-400 '>{name}</li>
//           <li>Logout</li>
//         </ul>
//       </div>
//       <h1 className='bg-yellow-200'>DashBord</h1>
//       <p>Wellcome to admin panel</p>
//     </div>
//   )
// }

// export default DashBord

import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const DashBord = () => {
  let [name, setname] = useState("")
  let ID = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:4001/user/${ID.ID}`)
    .then((e)=>{
      setname(e.data)
    
    })
    .catch(()=>{console.log("unable to fetch data in Edit comp");})
},[])

  return (
    <div className='container mx-auto p-4 pt-6 md:p-6 lg:p-12'>
      <div id='navbar' className='bg-black text-white p-4 flex justify-between'>
        <ul className='flex gap-24 px-10'>
          <li><Link to='/' className='text-white'>Home</Link></li>
          <li><Button variant="text" className='text-white'><Link to='/create-employee'> Create Employee</Link></Button> </li>
          <li><Button variant="text" className='text-white'><Link to="/employee-list">  Employee list </Link></Button> </li>
          <li className='p-2 text-white border border-dashed border-white'>{name}</li>
          <li><Link to='/logout' className='text-white'>Logout</Link></li>
        </ul>
      </div>
      <h1 className='bg-white text-black p-4 text-3xl font-bold'>DashBord</h1>
      <p className='text-black'>Wellcome to admin panel</p>
    </div>
  )
}

export default DashBord;