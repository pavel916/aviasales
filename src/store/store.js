import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./ticketsSlice"
import todoSlice from "./todoSlice"


export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
    }
})