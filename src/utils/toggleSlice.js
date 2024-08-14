import { createSlice } from "@reduxjs/toolkit";

const toggleSlice=createSlice({
    name:"toggle",
    initialState:{
        isMenuOpen:false
    },
    reducers:{
        toggleMenuOpen:(state,payload)=>{
              state.isMenuOpen=!state.isMenuOpen;
        }
    }
})
export default toggleSlice.reducer;
export const{toggleMenuOpen}=toggleSlice.actions