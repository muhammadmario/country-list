import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import SearchInput from "../components/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCountries,
  selectAllCountries,
  getCountriesError,
  getCountriesStatus,
  getSearchCountries,
  refreshStatus,
} from "../features/countries/countriesSlice";
import Loading from "./Loading";

function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector(selectAllCountries);
  const searchCountry = useSelector(getSearchCountries);
  const countriesStatus = useSelector(getCountriesStatus);
  const countriesError = useSelector(getCountriesError);

  // sort by name country search
  const mutateSearchCountry = [...searchCountry];
  const sortSearchCountry = mutateSearchCountry.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  // sort by name all country
  const mutateAllCountries = [...allCountries];
  const sortAllCountries = mutateAllCountries.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  useEffect(() => {
    if (countriesStatus === "idle") {
      dispatch(fetchCountries());
      console.log("run");
    }
  }, [dispatch, countriesStatus]);

  let content;
  if (countriesStatus === "loading") {
    content = <Loading />;
  } else if (countriesStatus === "succeeded") {
    const countries = searchCountry.length
      ? sortSearchCountry
      : sortAllCountries;
    content = countries.map((country, index) => (
      <Card
        key={index}
        cca3={country.cca3}
        flag={country.flags.png}
        name={country.name.common}
        capital={country.capital}
        region={country.region}
        population={country.population.toLocaleString()}
      />
    ));
  } else if (countriesStatus === "failed") {
    content = <p>{countriesError}</p>;
  }

  return (
    <main className="bg-slate-100 min-h-screen">
      <div className="flex justify-between px-10 md:px-24 items-center">
        <SearchInput />
        <Dropdown />
      </div>
      <div className="px-10 md:px-24 flex flex-wrap mt-6 items-center justify-center md:justify-between gap-20 ">
        {content}
      </div>
    </main>
  );
}

export default Home;
