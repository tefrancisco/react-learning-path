import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true };

// A function that creates a slice of the state, designated to our Counter.
const counterSlice = createSlice({
  name: "counter",
  //initialState: initialState
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // It automatically clones the old state and modify the clone.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // payload is the default name of the propertie that stores other data that is dispatched.
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer