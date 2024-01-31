import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/Auth-slice";
import SignSlice from '../features/sign-up'

const store=configureStore({
    reducer:{
            AuthSlice,
            SignSlice
        
    }
})

export default store