import { configureStore, createReducer } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";


export const server = "https://newserver-urja.onrender.com/api/v1"

const store = configureStore({
    reducer: {
        user: userReducer,
    }
})

export default store;

