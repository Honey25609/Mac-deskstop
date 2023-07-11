import React from 'react'
import './SignIn.css'
import pic from './icon/pic.png'
import { Link } from 'react-router-dom'


export default function SignIn() {
  return (
    <>
    
      <div className='sign'>
        <img src={pic} alt="" className="pic" />
        <h2>User</h2>
        <Link to="/navbar"><button>Sign In</button></Link>
      </div>
    
    </>
  )
}
