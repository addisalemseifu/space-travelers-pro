import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dataUrl = 'https://api.spacexdata.com/v4/rockets';

export const getMissions = createAsyncThunk('mission/getMissions', () => axios.get(dataUrl)
  .then((res) => res.data)
  .catch((err) => console.log(err)));

const initialState = {
  missions: [],
  isLoading: true,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    reserveMission: (state, action) => {
      let index = null;
      for (let i = 0; i < state.missions.length; i += 1) {
        if (state.missions[i].id === action.payload) {
          index = i;
        }
      }
      console.log(index);

      for (let i = 0; i < state.missions.length; i += 1) {
        if (i === index) {
          state.missions[i].reserved = true;
        }
      }
    },
    cancelMission: (state, action) => {
      console.log(action.payload);
      let index = null;
      for (let i = 0; i < state.missions.length; i += 1) {
        if (state.missions[i].id === action.payload) {
          index = i;
        }
      }
      console.log(index);

      for (let i = 0; i < state.missions.length; i += 1) {
        if (i === index) {
          state.missions[i].reserved = false;
        }
      }
    },
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.isLoading = true;
    },
    [getMissions.fulfilled]: (state, action) => {
      console.log('dddd');
      state.isLoading = false;
      state.missions = action.payload;
    },
    [getMissions.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { reserveMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
