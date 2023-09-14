import { Disclosure, Transition } from "@headlessui/react";

function Itinerary({ title, name, photo, duration, likes, price, hashtags }) {
  const svgMarkup = (
    <svg
      viewBox="0 0 576 512"
      fill="currentColor"
      height="1em"
      width="1em"
      className="w-6 h-6"
    >
      <path d="M400 256c0 61.9-50.1 112-112 112s-112-50.1-112-112 50.1-112 112-112 112 50.1 112 112zm-128-32v64h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8v-80c0-8.8-7.2-16-16-16h-16c-8.8 0-16 7.2-16 16s7.2 16 16 16zM0 128c0-35.35 28.65-64 64-64h448c35.3 0 64 28.65 64 64v256c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128zm48 48v160c35.35 0 64 28.7 64 64h352c0-35.3 28.7-64 64-64V176c-35.3 0-64-28.7-64-64H112c0 35.3-28.65 64-64 64z" />
    </svg>
  );

  const svgArray = [];
  if (price >= 1 && price <= 5) {
    for (let i = 0; i < price; i++) {
      svgArray.push(<span key={i}>{svgMarkup}</span>);
    }
  }

  return (
    <section className="w-full h-full">
      <div className="bg-orange-200 pb-6 my-4">
        <h3 className="text-2xl font-medium text-slate-100 py-4 text-center bg-orange-300">
          {title}
        </h3>
        <div className="flex flex-col justify-around items-center smd:flex-row my-6">
          <div className="flex flex-col place-items-center my-4 w-1/4">
            <img
              className="rounded-full w-40 h-40 mx-auto object-cover object-center"
              src={photo}
              alt={name}
            />
            <h4 className="text-xl text-center mt-4 font-medium">{name}</h4>
          </div>
          <div className="flex flex-col place-items-center my-4 w-1/4">
            <p>
              Duration: <span>{duration}</span> Hours
            </p>
            <p className="flex flex-row gap-1">
              Price: <span className="flex flex-row gap-1">{svgArray}</span>
            </p>
          </div>
          <div className="flex flex-col place-items-center my-4 w-1/4">
            <div className="flex flex-wrap gap-x-3 text-justify">
              {hashtags.map((hashtag, index) => (
                <p key={index} className="hashtag">
                  #{hashtag}
                </p>
              ))}
            </div>
            <span className="flex flex-row gap-1 align-middle font-semibold">
              {likes}{" "}
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
                className="w-6 h-6"
              >
                <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
              </svg>
            </span>
          </div>
        </div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Panel>
                <div className="rounded-none" id="activities">
                  <h3 className="bg-orange-300 text-2xl font-medium text-slate-100 py-4 text-center">
                    Activities
                  </h3>
                  <div className="flex flex-col justify-around items-center smd:flex-row my-6">
                    <div className="flex flex-row items-center mt-2">
                      <p className="my-4 italic text-base text-black">
                        Not available{" "}
                      </p>
                      <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0080 446.25h340.89a32 32 0 0028.18-47.17zm-198.6-1.83a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.95a21.73 21.73 0 0121.5-22.69h.21a21.74 21.74 0 0121.73 22.7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="rounded-none">
                  <h3 className="text-2xl font-medium bg-orange-300 text-slate-100 py-4 text-center">
                    Comments
                  </h3>
                  <div className="flex flex-col justify-around items-center smd:flex-row my-6">
                    <div className="flex flex-row items-center mt-2">
                      <p className="my-4 italic text-base text-black">
                        Not available
                      </p>
                      <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                      >
                        <path d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0080 446.25h340.89a32 32 0 0028.18-47.17zm-198.6-1.83a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.95a21.73 21.73 0 0121.5-22.69h.21a21.74 21.74 0 0121.73 22.7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Disclosure.Panel>
              <Disclosure.Button className="border-2 border-orange-300 bg-orange-400 flex justify-center mt-4 mx-auto items-center rounded-lg px-4 py-2 text-slate-100 text-center text-base font-medium  hover:bg-orange-300">
                <span className="font-medium">
                  <a href="#activities">{open ? "Close" : "View more"} </a>{" "}
                </span>
              </Disclosure.Button>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  );
}

export default Itinerary;
