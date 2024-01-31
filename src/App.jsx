import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { useDispatch, useSelector } from 'react-redux'
import { NoShowModal, showModal } from './features/Auth-slice'

import { showModal1 } from './features/sign-up'
import store from './store/store'


function App() {

  
  const open=useSelector(state=>state.AuthSlice.value)
  const open1=useSelector(state=>state.SignSlice.value)
  
  const dispatch=useDispatch()
  const Show=()=>{
      dispatch(showModal(true))
  }

  const Show1=()=>{
    dispatch(showModal1(true))
  }
const onClose=()=>{
  dispatch(NoShowModal(false))


}
  // console.log(store.getState().AuthSlice.value);
  // console.log(open);

  return (
    <>
    <div className='h-screen flex flex-col items-center bg-blue-800'>
    
    {/* <button onClick={OnOpen}>Signup</button> */}
    <button onClick={Show}>Signin</button>
    {open && <SignIn/>}
      

      <button onClick={Show1}>SignUp</button>
      {open1 && <SignUp/>}
   
    </div>

   
    </>
  )
}

export default App
