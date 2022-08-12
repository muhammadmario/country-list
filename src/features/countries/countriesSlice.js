import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all";
const initialState = {
  countries: [],
  countriesSearched: [],
  countriesFiltered: [],
  status: "idle",
  error: null,
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    searchCountry(state, action) {
      state.countriesSearched = state.countries.filter((country) => {
        const query = country.name.common
          .toLowerCase()
          .includes(action.payload.toLowerCase());
        if (!action.payload) {
          return state.countries;
        } else if (query) {
          return country;
        }
      });
    },
    filterCountry(state, action) {
      state.countriesSearched = state.countries.filter((country) => {
        const query = country.region
          .toLowerCase()
          .includes(action.payload.toLowerCase());
        if (!action.payload) {
          return state.countries;
        } else if (query) {
          return country;
        }
      });
    },
  },
  extraReducers(builder) {
    builder

      .addCase(fetchCountries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllCountries = (state) => state.countries.countries;
export const getSearchCountries = (state) => state.countries.countriesSearched;
export const getCountriesStatus = (state) => state.countries.status;
export const getCountriesError = (state) => state.countries.error;

export const { searchCountry, filterCountry } = countriesSlice.actions;

export default countriesSlice.reducer;
