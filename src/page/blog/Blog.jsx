import React ,{useState} from 'react'
import Layout from '../../Layout/Layout'
import './Blog.css'
import ChangePassword from './changePassword/ChangePassword'
import ForgetPassword from './forgetPassword/ForgetPassword'
import Login from './login/Login'
import Register from './register/Register'
import AllUser from './users/AllUser'
const Blog = () => { 
  // const [state,setState] = useState(false)
  
     const [state, setState] = useState([{register: false,login:false ,ChangePassword :false ,ForgetPassword :false ,AllUser:false }])
     const handleButton=()=>{
    console.log(state.register)
    
      
     }
  return (
    <>
    <Layout>
    <div className='blog'>
    <div className='links'>
      <div className='buttons' onClick={ handleButton }> <p className='p1'>Register</p>   </div>
      <div className='buttons'  > <p className='p1'>login</p>   </div>
      <div className='buttons'> <p className='p1'>show all user</p>   </div>
      <div className='buttons'> <p className='p1'>change Password</p>   </div>
      <div className='buttons'> <p className='p1'>forget Password</p>   </div>
    </div>
    <div className='data'>
     {/* className={`menu ${state?'active-menu':""}`} */}
     {
      state.register&&(<Register/>)
     }
    {/* <div className={`register ${state.register===true?'register-active':''}`}> <Register/> </div> */}
    <div className='Login'> <Login/> </div>
    <div className='ChangePassword'> <ChangePassword/> </div>
    <div className='ForgetPassword'><ForgetPassword/> </div>
    <div className='AllUser'>  <AllUser/> </div>
    </div>
    </div>
    </Layout>
    
    </>
   
  )
}

export default Blog
