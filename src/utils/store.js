import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

const store = configureStore({
        reducer:{
            app:appSlice,
            search:"searchSlice"
        },
});

export default store;