import React from "react";
// import { Button } from "../ui/button";

const attractions = [
  {
    name: "Nohsngithiang falls",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-shore-temple-mamallapuram-2-attr-nearby?qlt=82&ts=1726654619613",
    link: "#",
  },
  {
    name: "Tsomgo Lake",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/swami-vivekananda-sarovar-raipur-chhattisgarh-1-attr-nearby?qlt=82&ts=1727011178647",
    link: "#",
  },
  {
    name: "Dzukou Valley",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi-attr-nearby?qlt=82&ts=1742179828326",
    link: "#",
  },
  {
    name: "Rangia Fort",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-harmandir-sahib-(golden-temple)-amritsar-punjab-attr-nearby?qlt=82&ts=1726662259743",
    link: "#",
  },
  {
    name: "Rangia Fort",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/brahma-sarovar-kurukshetra-haryana-1-attr-nearby?qlt=82&ts=1742180283978",
    link: "#",
  },
  {
    name: "Hawa Mahal",
    image:
      "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-1-attr-nearby?qlt=82&ts=1742169186274",
    link: "#",
  },
];

const AttractionSection = () => (
  <div className="mb-10 relative">
    <div className="relative z-10 w-full flex flex-col items-center">
      <h2 className="text-8xl font-bold text-blue-500">Attraction</h2>
     <p className="mt-3 md:mt-5 text-lg md:text-xl text-gray-600 text-center">
        Discover places worth a thousand stories
      </p>

      {/* 👇 gap ko 10 kar diya */}
      <div className="flex overflow-x-auto scroll-smooth gap-10 px-10 pt-16 pb-10 scrollbar-hide w-full">
        {attractions.map((item, i) => (
          <div
            key={i}
            className="relative min-w-[260px] md:min-w-[330px] h-[500px] rounded-3xl overflow-hidden 
                       shadow-xl flex-shrink-0 group transition-all duration-500 
                       hover:-translate-y-10 hover:shadow-4xl hover:shadow-black/50 bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-all duration-300 
                            flex flex-col justify-end items-center pb-12">
              <h3 className="text-white text-lg md:text-2xl font-bold mb-4 text-center drop-shadow-md">
                {item.name}
              </h3>
              <button1 className="px-9 py-3 bg-red-500 font-bold cursor-pointer text-white rounded-full hover:bg-red-700 transition-colors duration-200">
                Explore
              </button1>     
                     </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AttractionSection;
