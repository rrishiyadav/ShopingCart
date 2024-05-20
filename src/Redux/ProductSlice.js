import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name:"product",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
           
           var addData = action.payload;
           state.value = [...state.values,{addData,qty:1}]
        },
        decreamentQty:(state,action)=>{
            var id = action.payload;
            state.value = state.values.map((data)=>data.addData.id===id?{...data, qty : data.qty-1}:data)
        },
        increamentQty:(state,action)=>{
            var id = action.payload;
            state.value = state.values.map((data)=>data.addData.id===id?{...data, qty : data.qty+1}:data)
        },
     
        removeQty : (state, action)=>{
            var id = action.payload;
            state.value = state.value.filter(data=>data.addData.id!==id )
        }

    }
})
export const{addItem,increamentQty,decreamentQty,removeQty}=Slice.actions;
export default Slice.reducer