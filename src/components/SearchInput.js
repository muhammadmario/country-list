import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../features/countries/countriesSlice";

function SearchInput() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(searchCountry(search));
    console.log("aku ke run");
  }, [search, dispatch]);

  return (
    <div className="w-1/2 mr-6 my-2 flex items-center text-slate-500 ">
      <input
        type="search"
        className="bg-purple-white shadow rounded border-0 p-3 w-full"
        placeholder="Search a country ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
