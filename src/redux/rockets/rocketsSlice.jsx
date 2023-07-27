import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dataUrl = 'https://api.spacexdata.com/v4/rockets';
export const getRockets = createAsyncThunk('rocket/getRockets', () => axios(dataUrl)
  .then((res) => res.data)
  .catch((err) => console.log(err)));

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
  extraReducers: {
    [getRockets.pending]: (state) => {
      const newState = state;
      newState.isLoading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      const newState = state;
      newState.isLoading = false;
      newState.rockets = action.payload;
    },
    [getRockets.rejected]: (state) => {
      const newState = state;
      newState.isLoading = false;
    },
  },
});
export const { reserve, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
