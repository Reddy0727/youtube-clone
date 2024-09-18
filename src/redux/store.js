import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./slices/toggleSlice";
import homeSlice from "./slices/homeSlice";
import searchSlice from "./slices/searchSlice";
import relatedVideos from "./slices/relatedVideos";

const store = configureStore({
    reducer:{
        toggle:toggleSlice,
        home:homeSlice,
        search:searchSlice,
        relatedVideos:relatedVideos
    }
})

export default store