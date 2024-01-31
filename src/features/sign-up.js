import { createSlice } from "@reduxjs/toolkit"
import SignIn from "../components/SignIn"


const initialState={
    value:false
}

const SignSlice=createSlice({
    name:"Sign",
    initialState,
    reducers:{
        showModal1:(state,action)=>{
            state.value=action
          

        },
        NoShowModal1:(state,action)=>{
                state.value=false
        }

    }
})

export const {showModal1,NoShowModal1}=SignSlice.actions

export default SignSlice.reducer