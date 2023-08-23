import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Link from "../components/Link";

function Details() {
  const { id } = useParams();
  const [city, setCity] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/cities/${id}`)
      .then((response) => {
        console.log(response);
        setCity(response.data.city);
      })
      .catch((error) => console.error("Error fetching city data:", error));
  }, [id]);

  return (
    <section className="details h-full flex flex-col border-orange-200">
      <div className="flex flex-col my-2 h-full w-full mt:flex-row border-2 border-orange-600">
        <img
          src={city?.image}
          alt={city?.name}
          className="h-[26rem] w-full mt:w-1/2 object-cover bg-center"
        />
        <div className="h-2/4 mt:h-auto mt:flex mt:flex-col mt:items-center mt:justify-center mt:w-1/2 mt:px-24 px-6 py-8 bg-orange-300 ">
          <h3 className="text-slate-100 text-2xl font-medium">
            {city?.name}, {city?.country}
          </h3>
        </div>
      </div>
      <Link
        to={"/cities"}
        title={"Back"}
        className="border-2 border-orange-600 mb-2 mr-auto text-sm font-bold text-gray-100 bg-orange-300 p-2 rounded self-center"
      />
      <div className="min-h-screen bg-orange-300 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-white font-bold mb-4 animate-pulse">
          Coming Soon
        </h1>
      </div>
    </section>
  );
}

export default Details;
