import { configureStore,createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name:"Counter",
  initialState:{counter:0},
  reducers:{
    increment(state,action){
      state.counter+=1
    },
    decrement(state,action){
      state.counter-=1
    }
  }
})

export const actions = counterSlice.actions;

export const store = configureStore({
  reducer:counterSlice.reducer
})


