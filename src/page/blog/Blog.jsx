import React ,{useState} from 'react'
import Layout from '../../Layout/Layout'
import './Blog.css'
import ChangePassword from './changePassword/ChangePassword'
import ForgetPassword from './forgetPassword/ForgetPassword'
import Login from './login/Login'
import Register from './register/Register'
import AllUser from './users/AllUser'
const Blog = () => { 
  // const [state,setIndex] = useState(false)
    let data = {register: false,login:false ,ChangePassword :false ,ForgetPassword :false ,AllUser:false }
     const [index,setIndex] = useState(0)
   
  return (
    <>
    <Layout>
    <div className='blog'>
    <div className='links'>
      <div className={`buttons ${index===0?"buttons-active":""}`} onClick={()=> setIndex(0) }> <p className='p1'>Register</p>   </div>
      <div className={`buttons ${index===1?"buttons-active":""}`} onClick={()=> setIndex(1) } > <p className='p1'>login</p>   </div>
      <div className={`buttons ${index===2?"buttons-active":""}`} onClick={()=> setIndex(2) } > <p className='p1'>change Password</p>   </div>
      <div className={`buttons ${index===3?"buttons-active":""}`} onClick={()=> setIndex(3) } > <p className='p1'>forget Password</p>   </div>
      <div className={`buttons ${index===4?"buttons-active":""}`} onClick={()=> setIndex(4) } > <p className='p1'>show all user</p>   </div>
    </div>
    <div className='data'>
 
    <div hidden={index!==0}> <Register/> </div>
    <div hidden={index!==1}> <Login/> </div>
    <div hidden={index!==2}> <ChangePassword/> </div>
    <div hidden={index!==3}> <ForgetPassword/> </div>
    <div hidden={index!==4}> <AllUser/> </div>

    </div>
    </div>
    </Layout>
    
    </>
   
  )
}

export default Blog
