import Carousel from "../components/Carousel";

function Home() {
  return (
    <section className="main">
      <div className="bg-orange-200 w-full h-full py-[.4rem] sm:py-[3.5rem] md:py-[5.5rem] lg:py-0">
        <div className="mx-auto max-w-screen-xl max-h-screen-xl px-4 pt-0 pb-3 md:pb-10 md:px-16 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-full overflow-hidden sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Logo"
                src="./missingimage.jpg"
                className="flex inset-0 h-60 w-48 mt-[-1rem] sm:h-64 sm:w-64 md:h-80 md:w-80 lg:my-16 object-contain mx-auto"
              />
            </div>

            <div className="lg:py-24 lg:px-14 mt-[1rem] sm:mt-[5rem] md:mt-[2rem] lg:mt-6">
              <p className="my-4 sm:mt-4 sm:mb-8 sm:text-xl lg:text-[1.5rem] italic">
                Find your perfect trip, designed by insiders who know and love
                their cities!
              </p>
              <div className="mt-3">
                <button variant="text" className="flex items-center gap-2 hover:animate-pulse transition duration-300 transform hover:-translate-y-1">
                  View More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousel />
    </section>
  );
}

export default Home;
