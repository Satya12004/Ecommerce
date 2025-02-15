import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
const initialState = {
  array:[]
}

export const CartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    CartArray: (state,action) => {
    
      console.log(action)
      let find=state.array.find((obj)=>obj.id===action.payload.id)
      console.log(find)
      if(find){
        toast.warning('item allready added',{position:"top-center"})
      }
      else{
        action.payload.quantity=1
      state.array.push(action.payload)
      toast.success('item added successfully',{position:"top-center"})
      }

      
    },
    handleIncrement:(state,action)=>{
      let obj = {...action.payload}
      obj.price = obj.price + (obj.price/ obj.quantity)
      obj.quantity = obj.quantity +1
      console.log(obj)
      let index = state.array.findIndex((ele)=>ele.id===action.payload.id)

      state.array[index] = obj
    },
    handleDecrement:(state,action)=>{
      let obj = {...action.payload}
      obj.price = obj.price - (obj.price/ obj.quantity)
      obj.quantity = obj.quantity -1
      if(obj.quantity<1){
        return
      }
      console.log(obj)
      let index = state.array.findIndex((ele)=>ele.id===action.payload.id)

      state.array[index] = obj
    },

    handleDelete:(state,action)=>{
      let copyArr=[...state.array]
      copyArr.splice(action.payload,1)
     return {...state,array:copyArr}
    }
  },  
})

// Action creators are generated for each case reducer function
export const { CartArray ,handleIncrement,handleDelete,handleDecrement } = CartSlice.actions

export default CartSlice.reducer