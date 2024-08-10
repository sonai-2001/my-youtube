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
            },
            closeSideBar:(state)=>{
                state.isSideBarOpen=false
            }

        }
    }
    )
    export const {toggleSideBar,closeSideBar}=sidebarToggleSlice.actions
    export default sidebarToggleSlice.reducer;