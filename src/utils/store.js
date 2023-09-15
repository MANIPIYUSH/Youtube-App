import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import ChatSlice from "./ChatSlice";
import SearchSlice from "./searchSlice";


const store = configureStore({
        reducer:{
            app:appSlice,
            search:SearchSlice,
            chat:ChatSlice,
        },
});

export default store;