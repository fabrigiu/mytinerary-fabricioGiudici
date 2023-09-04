import React from "react";

import Link from "./Link";

function Card({ id, name, country, image }) {
  return (
    <div className="city-card group relative block m-4 h-64 w-[90%] transition-all md:w-1/3 md:hover:w-1/3 lg:w-1/5 lg:hover:w-1/5 sm:h-80 lg:h-96">
      <span className="absolute inset-0 border-l-2 border-t-2 border-orange"></span>

      <div
        className="relative flex flex-wrap h-full transform bg-cover bg-center items-end border-2 border-orange-600 transition-all"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="p-0 !pt-0 py-2 flex flex-row flex-wrap items-center content-center justify-evenly bg-orange-300 w-full transition-opacity group-hover:absolute group-hover:opacity-0">
          <h2 className="text-base mt-2 text-gray-100 font-medium group-hover:hidden sm:text-xl">
            {name}
          </h2>
        </div>

        <div className="h-full hidden opacity-0 overflow-hidden transition-opacity duration-1 group-hover:flex group-hover:flex-col group-hover:items-center group-hover:opacity-100 sm:p-6 lg:p-4">
          <div className="align-center">
            <h3 className="bg-orange-300  text-slate-100 mt-2 px-1 rounded mx-auto w-fit font-bold md:mt:1 sm:text-xl">
              {name},
            </h3>
            <h3 className="bg-orange-300  text-slate-100 px-1 rounded w-fit font-bold md:mt:1 sm:text-xl">
              {country}
            </h3>
          </div>

          <Link
            to={`/cities/${id}`}
            title={"View More"}
            className="hover:animate-pulse mt-3 absolute  inset-x-0 bottom-6 text-sm font-bold text-gray-100 bg-orange-300  w-fit p-2 rounded mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
