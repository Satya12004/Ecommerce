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
 
  },  
})

// Action creators are generated for each case reducer function
export const { CartArray } = CartSlice.actions

export default CartSlice.reducer