import { configureStore } from "@reduxjs/toolkit";
import SideBar from "./sideToggleSlice";

const store=configureStore({
    reducer: {
       side:SideBar,
    }

})
export default store