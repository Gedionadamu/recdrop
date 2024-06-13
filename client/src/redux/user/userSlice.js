import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser : null,
    loading : false,
    error : false 
}

const userSlice = createSlice({
    name:"user", 
    initialState,
    reducers:{
        singinStart:(state)=>{
            state.loading=true
        }
    },
    singInSuccess:(state, action)=>{
        state.currentUser=action.payload;
        state.loading=false;
        state.error=false
    },
    signinFailure:(state,action)=>{
        state.loading=false
        state.error = action.payload
    }
})
export const { signinFailure, singInSuccess,singinStart } = userSlice.actions

export default  userSlice.reducer