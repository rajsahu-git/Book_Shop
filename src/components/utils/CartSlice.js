import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items: []
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
            console.log(action.payload)
        },
        clearCart:(state)=>{
            state.items=[]
        },
        removeItem:(state,action)=>{
            const i = state.items.indexOf(action.payload)
            state.items.splice(i,1)
            console.log(action.payload)
        }
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer