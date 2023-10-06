import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteReducer";

export default configureStore({
    reducer:{
        favorites:favoriteReducer
    }
})