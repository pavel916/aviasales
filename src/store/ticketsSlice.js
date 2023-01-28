import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setFerstName: (state, action) => {
            state.firstName = action.payload
        },
       
    }
})

export const {setFerstName} = userSlice.actions
export default userSlice.reducer