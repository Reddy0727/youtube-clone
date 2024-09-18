import { createSlice } from "@reduxjs/toolkit";

const toggleSlice=createSlice({
    name:'toggle',
    initialState:{
        isToggle:true
    },
    reducers:{
        setToggle(state) {
            state.isToggle = !state.isToggle
        }
    }
})

export const {setToggle} = toggleSlice.actions
export default toggleSlice.reducer