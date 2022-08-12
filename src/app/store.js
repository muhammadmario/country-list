import countriesReducer from "../features/countries/countriesSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
