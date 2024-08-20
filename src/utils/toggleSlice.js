import { createSlice } from "@reduxjs/toolkit";

const toggleSlice=createSlice({
    name:"toggle",
    initialState:{
        isMenuOpen:false
    },
    reducers:{
        toggleMenuOpen:(state,payload)=>{
              state.isMenuOpen=!state.isMenuOpen;
        },
        menuClose:(state,payload)=>{
              state.isMenuOpen=false;
        }
        
        
    }
})
export default toggleSlice.reducer;
export const{toggleMenuOpen,menuClose}=toggleSlice.actions