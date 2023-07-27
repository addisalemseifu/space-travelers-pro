import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: true,
};
const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserve: (state, action) => {
      console.log(action.payload);
      let index = null;
      for (let i = 0; i < state.rockets.length; i += 1) {
        if (state.rockets[i].id === action.payload) {
          index = i;
        }
      }
      console.log(index);
      for (let i = 0; i < state.rockets.length; i += 1) {
        if (i === index) {
          const newState = state;
          newState.rockets[i].reserved = true;
        }
      }
    },
    cancelReserve: (state, action) => {
      console.log(action.payload);
      let index = null;
      for (let i = 0; i < state.rockets.length; i += 1) {
        if (state.rockets[i].id === action.payload) {
          index = i;
        }
      }
      console.log(index);
      for (let i = 0; i < state.rockets.length; i += 1) {
        if (i === index) {
          const newState = state;
          newState.rockets[i].reserved = false;
        }
      }
    },
  },
});
export const { reserve, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
