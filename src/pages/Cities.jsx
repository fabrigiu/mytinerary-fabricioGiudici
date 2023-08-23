import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Cities = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities")
      .then((response) => {
        setCities(response.data.cities);
      })
      .catch((error) => console.error("Error fetching city data:", error));
  }, []);

  const handleInputChange = async (cities) => {
    const inputValue = cities.target.value;
    try {
      const response = await axios.get(
        `http://localhost:8000/api/cities?name=${inputValue}`
      );
      setCities(response.data.cities);
    } catch (error) {
      setCities([]);
      console.log(error);
    }
  };

  return (
    <section className="text-center bg-orange-200 my-4 h-full w-full">
      <h2 className="text-3xl pt-6 mb-4">Cities</h2>

      <input
        onChange={handleInputChange}
        className="border-2 border-black-100 focus:outline-none focus:ring focus:ring-orange-300 hover:ring-orange-100 hover:border-orange-500 rounded py-1 px-2 h-fit mdt:w-fit mt:ml-[55%]"
        type="text"
        placeholder="Find your city"
      />

      <div>
        <div className="flex flex-wrap justify-around items-center">
          {cities?.length > 0 ? (
            cities?.map((city) => (
              <Card
                key={city._id}
                name={city.name}
                country={city.country}
                image={city.image}
                id={city._id}
              />
            ))
          ) : (
            <p className="outline-black h-screen text-3xl pt-8 self-center">
              We couldn't find your city...
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cities;
