import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterCountry } from "../features/countries/countriesSlice";

function Dropdown() {
  const dispatch = useDispatch();
  const [countryFilter, setCountryFilter] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = (e) => {
    setCountryFilter(e.target.value);
    setIsSelected(true);
  };

  useEffect(() => {
    dispatch(filterCountry(countryFilter));
    console.log("filter");
  }, [countryFilter, dispatch]);

  return (
    <div class="relative  w-1/4 flex h-12  text-slate-500 shadow">
      <label for="frm-whatever" class="sr-only">
        My field
      </label>
      <select
        class="appearance-none w-full py-1 px-2 bg-white"
        name="country"
        id="country"
        onChange={(e) => handleChange(e)}
      >
        <option value="all">{isSelected ? "All" : "Filter by"}</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europa">Europa</option>
        <option value="oceania">Oceania</option>
      </select>
      <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-slate-500">
        <svg
          class="h-6 w-6 text-slate-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}

export default Dropdown;
