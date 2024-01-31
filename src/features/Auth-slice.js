import { createSlice } from "@reduxjs/toolkit"
import SignIn from "../components/SignIn"


const initialState={
    value:false
}

const AuthSlice=createSlice({
    name:"Auth",
    initialState,
    reducers:{
        showModal:(state,action)=>{
            state.value=action
          

        },
        NoShowModal:(state,action)=>{
                state.value=false
        }

    }
})

export const {showModal,NoShowModal}=AuthSlice.actions

export default AuthSlice.reducer