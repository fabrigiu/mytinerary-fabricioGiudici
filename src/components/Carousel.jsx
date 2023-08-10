import { useEffect, useState } from "react"

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cities = [
        {
            name: 'Shanghái',
            url: 'https://cdn.britannica.com/08/187508-050-D6FB5173/Shanghai-Tower-Gensler-San-Francisco-world-Oriental-2015.jpg'
        },
        {
            name: 'Kyoto',
            url: 'https://lp-cms-production.imgix.net/2021-02/shutterstockRF_787331263.jpg'
        },
        {
            name: 'Los Angeles',
            url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475464-Los-Angeles.jpg'
        },
        {
            name: 'Río De Janeiro',
            url: 'https://www.civitatis.com/blog/wp-content/uploads/2022/10/panoramica-rio-janeiro-brasil.jpg'
        },
        {
            name: 'Moscow',
            url: 'https://s1.eestatic.com/2019/12/22/actualidad/actualidad_453966497_141085637_1706x960.jpg'
        },
        {
            name: 'Rome',
            url: 'https://hips.hearstapps.com/hmg-prod/images/elle-fin-de-semana-en-roma-1642526556.jpg'
        },
        {
            name: 'Seoul',
            url: 'https://viajes.nationalgeographic.com.es/medio/2021/12/23/seul_e984508d_1800x1145.jpg'
        },
        {
            name: 'İstanbul',
            url: 'https://img.itinari.com/pages/images/original/8ab02a03-8901-4117-8b2a-b9e6ffbadbcf-istock-507551802.jpg?ch=DPR&dpr=2.625&w=1200&h=800&s=fa63837a31065457f603923b764c1ab3'
        },
        {
            name: 'Sídney',
            url: 'https://viajes.nationalgeographic.com.es/medio/2017/02/13/shutterstock-358498871_b1c3e8d1.jpg'
        },
        {
            name: 'Suzhou',
            url: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/suzhou-1.jpg'
        },
        {
            name: 'México City',
            url: 'https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city.JPG'
        },
        {
            name: 'Tokyo',
            url: 'https://assets.vogue.com/photos/5e387ae1be72df00088bf8c8/master/w_2560%2Cc_limit/EEX74X.jpg'
        }
    ];

    const startIndex = currentSlide * 4;


    const visibleCities = cities.slice(startIndex, startIndex + 4);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlideIndex) =>
            prevSlideIndex === Math.ceil(cities.length / 4) - 1 ? 0 : prevSlideIndex + 1
            );
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide]);


    return (
        <div className="bg-orange-100 carousel flex flex-row justify-around items-center h-[25rem] my-4 lg:justify-evenly">
            <div className="slides grid grid-cols-2 grid-rows-2 gap-6 items-center h-64 w-96 lg:h-72 lg:w-[34rem]">
                {visibleCities.map((city, index) => (
                    <div key={index} className="slide group h-full w-full shadow-fxc transform transition duration-300 ease-out">
                        <p className="absolute inset-x-0 bottom-0 text-transparent duration-200 group-hover:text-gray-100 group-hover:bg-orange-500/60 ">{city.name}</p>
                        <img
                            className="box-content object-cover object-center h-full w-full"
                            src={city.url}
                            alt={city.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel