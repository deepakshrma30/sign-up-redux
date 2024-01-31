import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NoShowModal } from '../features/Auth-slice'

function SignIn({onClose}) {
  
   const dispatch=useDispatch()
  return (
    <div>
            <div className='fixed inset-0 flex flex-col justify-center items-center bg-cyan-900 bg-opacity-30 ' >
                 

           
                        <input type="text" name="" id="" placeholder='Email or Phone Number' className='border p-1'/>
                    
                        <input placeholder=' Password' className='p-1 border'/>
                        <button className='p-2 border '>Login</button>
                        <button onClick={()=>{
                            dispatch(NoShowModal())
                        }}>Close the Modal</button>
                        </div>
    
            
      
    </div>
  )
}

export default SignIn
