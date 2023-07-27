import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: true,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    reserveMission: (state, action) => {
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
});
export const { reserveMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
