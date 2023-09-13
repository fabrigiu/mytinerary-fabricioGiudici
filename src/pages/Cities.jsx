import Card from "../components/Card";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter_cities, get_cities } from "../store/actions/cityActions";

const Cities = () => {
  const cities = useSelector((store) => store.cityReducer.cities);

  const dispatch = useDispatch();

  let inputSearch = useRef();

  useEffect(() => {
    dispatch(get_cities());
  }, [dispatch]);

  const handleInputSearch = () => {
    dispatch(filter_cities({ name: inputSearch.current.value }));
  };

  const handleResetCities = () => {
    if (inputSearch.current.value === "") {
      dispatch(get_cities());
    }
  };

  return (
    <section className="text-center bg-orange-200 my-4 h-full w-full">
      <h2 className="text-white text-3xl pt-6 mb-4">Cities</h2>
      <div className="bg-orange-200  hover:border-orange-300 rounded flex flex-row group w-40 mdt:w-48 lg:w-56 m-0 ml-auto mr-auto lg:mr-8 justify-between">
        <input
          onChange={handleResetCities}
          name="input-search"
          ref={inputSearch}
          className="w-[75%] h-fit m-0 py-1 px-1 mdt:px-2 outline-0"
          type="text"
          placeholder="Find your city..."
        />
        <button
          onClick={handleInputSearch}
          className="justify-self-center bg-orange-300 hover:animate-pulse w-[25%] border-l-2 h-fit py-1 px-2 mdt:px-3 lg:px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 group-hover:stroke-slate-100 group-active:transition-transform group-active:scale-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      <div>
        <div className="flex flex-wrap justify-around items-center">
          {cities?.length > 0 ? (
            cities?.map((city) => (
              <Card
                key={city._id}
                name={city.name}
                country={city.country}
                image={city.image}
                description={city.description}
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
