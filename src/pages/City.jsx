import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Link from "../components/Link";



import ItineraryList from "../components/ItineraryList";

function City() {
  const { id } = useParams();
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/${id}`)
      .then((response) => {
        setCity(response.data.city);
      })
      .catch((error) => console.error("Error fetching city data:", error));
  }, [id]);

  return (
    <main>
      <section className="h-full flex flex-col">
        <Link
          to={"/cities"}
          title={"Go Back"}
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded"
        />
        <div className="border-2 border-orange-600 flex flex-col my-2 h-full w-full mt:flex-row">
          <div className="h-2/4 mt:h-auto mt:flex mt:flex-col mt:items-center mt:justify-center mt:w-1/2 mt:px-24 px-6 py-8 bg-orange-300">
            <h3 className="text-2xl font-medium text-slate-100">
              {city?.name}, {city?.country}
            </h3>
            <p className="text-gray-900 text-base">{city?.description}</p>
          </div>
          <img
            src={city?.image}
            alt={city?.name}
            className="h-[26rem] w-full mt:w-1/2 object-cover bg-center"
          />
        </div>
        {}
      </section>
      <ItineraryList cityId={city?._id} />
    </main>
  );
}

export default City;
