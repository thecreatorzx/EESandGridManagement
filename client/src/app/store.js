import { configureStore } from "@reduxjs/toolkit";
import energyReducer from "../features/energySlice";

export const store = configureStore({
  reducer: { energy: energyReducer },
});
