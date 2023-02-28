import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import  './Header.css'
import  {IoMdClose, IoMdMenu} from 'react-icons/io'

const Header = () => {
 const [state, setstate] = useState(false)
//  console.log(state)
  return (
    <>
  <div className='header'>
    <div className='logo'><span>vkci</span>
    {
      state? <div className='navbar' onClick={()=>{setstate(false)} }>  <IoMdClose /></div>:<div className='navbar' onClick={()=>{setstate(true)} }>  <IoMdMenu /></div>  
    }
   
    </div>
    <div className={`menu ${state?'active-menu':""}`}>
        <ul>
            <li> <Link to = "/home" onClick={()=>{setstate(false)} } > home </Link></li>
            <li> <Link to="/about" onClick={()=>{setstate(false)} }> about</Link> </li>
            <li> <Link to = "/services"  onClick={()=>{setstate(false)} }> services  </Link> </li>
            <li> <Link to = "/portfolio" onClick={()=>{setstate(false)} } > portfolio </Link> </li>
            <li> <Link to = "/pricing" onClick={()=>{setstate(false)} } > pricing   </Link> </li>
            <li> <Link to = "/blog" onClick={()=>{setstate(false)} } > blog      </Link> </li>
            <li> <Link to = "/contact" onClick={()=>{setstate(false)} } > contact   </Link> </li>
        </ul>
    </div>
    </div>
  
    </>     
  )
}

export default Header
