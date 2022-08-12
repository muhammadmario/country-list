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
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>

      <div>
        <img src={`${findCountry.flags.png}`} />
        <div>
          <h2>
            Population: <span>asasasas</span>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Country;
