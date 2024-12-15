import { createSlice } from "@reduxjs/toolkit";

export const energySlice = createSlice({
  name: "energy",
  initialState: {
    value: 5,
    gridLoad: 120,
    storage: [40, 20, 5, 10],
    isLoadGreaterThanPower: false,
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setGridLoad: (state, action) => {
      state.gridLoad = action.payload;
      state.isLoadGreaterThanPower =
        state.gridLoad > 60 + state.value / 20 + 50 + state.value / 5;
    },
    setStorage: (state, action) => {
      state.storage = action.payload;
    },
  },
});

export const { setValue, setGridLoad, setStorage } = energySlice.actions;

export default energySlice.reducer;
