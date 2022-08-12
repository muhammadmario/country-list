import React from "react";
import { Link } from "react-router-dom";

function Card({ cca3, name, flag, population, region, capital }) {
  return (
    <Link to={`country/${cca3}`}>
      <div className="shadow cursor-pointer  w-64 h-80">
        <img src={`${flag}`} alt="flag" className="rounded-t-lg w-64 h-40" />

        <div className="p-6 bg-white rounded-b-lg">
          <h1 className="font-bold mb-4">{name}</h1>
          <h2 className="font-medium text-sm mb-1">
            Population: <span className="font-light">{population}</span>
          </h2>
          <h2 className="font-medium text-sm mb-1">
            Region: <span className="font-light">{region}</span>
          </h2>
          <h2 className="font-medium text-sm mb-1">
            Capital: <span className="font-light">{capital}</span>
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default Card;
