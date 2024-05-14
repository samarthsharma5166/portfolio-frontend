import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name:"auth",
  initialState:{
    isLoggedIn:false,
    user:null,
    authEmail:null
  },
  reducers:{
    login : (state,action)=>{
      state.isLoggedIn = true
    },
    logout:(state,action)=>{
      state.isLoggedIn=false
    },
    setUser:(state,action)=>{
      state.user = action.payload;
    },
    setAuthEmail:(state,action)=>{
      state.authEmail=action.payload
    }
  }
});
export const {login,logout,setUser,setAuthEmail} = authSlice.actions;
export default authSlice.reducer;