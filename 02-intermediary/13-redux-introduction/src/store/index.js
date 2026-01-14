// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter'
import authReducer from './auth'

// We use the configureStore() method to merge slices into one unique store. Redux wants only one main reducer function.
const store = configureStore({
  //  reducer: { counter: counterSlice.reducer } -> if we had multiple slices
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});


export default store;
 
