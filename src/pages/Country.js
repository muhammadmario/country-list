import React from "react";
import { useParams, Link } from "react-router-dom";
import { selectAllCountries } from "../features/countries/countriesSlice";
import { useSelector } from "react-redux";

function Country() {
  const params = useParams();
  console.log(params);

  const allCountries = useSelector(selectAllCountries);

  const findCountry = allCountries.find(
    (country) => country.cca3 === params.countryId
  );

  return (
    <div className="bg-slate-100 min-h-[90vh] flex flex-col justify-center items-start px-10 md:px-24 gap-16">
      <Link to="/">
        <button className="bg-white text-black px-3 py-2 flex shadow justify-center items-center">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          Back
        </button>
      </Link>

      <div className="w-full flex flex-col md:flex-row">
        <img
          src={`${findCountry.flags.png}`}
          className="w-full md:w-1/2 aspect-video"
        />
        <div className="w-full md:w-1/2 ml-3 ">
          <h1 className="font-bold text-2xl mt-4 md:mt-0 md:mb-10">
            {findCountry.name.common}
          </h1>
          <h2 className="text-lg">
            Official Name:{" "}
            <span className="font-light">{findCountry.name.official}</span>
          </h2>
          <h2 className="text-lg">
            Population:{" "}
            <span className="font-light">
              {findCountry.population.toLocaleString()}
            </span>
          </h2>
          <h2 className="text-lg">
            Region: <span className="font-light">{findCountry.region}</span>
          </h2>
          <h2 className="text-lg">
            Sub Region:{" "}
            <span className="font-light">{findCountry.subregion}</span>
          </h2>
          <h2 className="text-lg">
            Capital: <span className="font-light">{findCountry.capital}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Country;
