import React from 'react'
import { useDispatch } from 'react-redux'
import { NoShowModal1 } from '../features/sign-up'

function SignUp() {
  const dispatch=useDispatch()
  return (
    <div className='fixed inset-0 flex flex-col justify-center items-center bg-cyan-900 bg-opacity-30 ' >
      <input type="text" name="" id="" placeholder='Email or Phone Number' className='border p-1'/>
      <input type="text" placeholder='Create New Password' className='border p-1' />
      <input placeholder='Confirm Password' className='p-1 border'/>
      <button className='p-2 border'>Create Account</button>
      <p>Already a member?<span>SignIn</span></p>
      <button onClick={()=>{
        dispatch(NoShowModal1())
      }}>close the modal</button>
    </div>
  )
}

export default SignUp
