import { createSlice } from "@reduxjs/toolkit";

const sidebarToggleSlice=createSlice(
    {
        name:"side",
        initialState:{
            isSideBarOpen:true,

        },
        reducers:{
            toggleSideBar:(state,payLoad)=>{
                    state.isSideBarOpen=!state.isSideBarOpen;
            }
        }
    }
    )
    export const {toggleSideBar}=sidebarToggleSlice.actions
    export default sidebarToggleSlice.reducer;