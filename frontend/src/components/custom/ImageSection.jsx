import React, { useRef } from "react";
import bgImg from "../../assets/bg img.jpg"; // Adjust the path as per your folder structure

const ImageSection = () => {
  const trips = [
    {
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/meenakshi-amman-temple-madurai-tamil-nadu-tri-hero?qlt=82&ts=1727167291042&wid=800",
      days: 2,
      place: "Badami",
      title: "Badami Highlights",
    },
    {
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/adiyogi-shiva-statue-coimbatore-tamil-nadu-tri-hero?qlt=82&ts=1727167160763&wid=800",
      days: 2,
      place: "Mamallapuram",
      title: "Mamallapuram Journey",
    },
    {
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/golden-temple-amritsar-punjab-tri-hero?qlt=82&ts=1727166214134&wid=800",
      days: 2,
      place: "Madurai",
      title: "Madurai Culture Tour",
    },
    {
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/visakha-museum-visakhapatnam-andhra-pradesh-tri-hero?qlt=82&ts=1727162476627&wid=800",
      days: 2,
      place: "Munnar",
      title: "Munnar Nature Escape",
    },
    {
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/kanak-bhawan-ayodhya-uttar-pradesh-tri-hero-1?qlt=82&ts=1727167274462&wid=800",
      days: 2,
      place: "Ayodhya",
      title: "Ayodhya Spiritual Trip",
    },
    {
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/nurmahal-jalandhar-punjab-tri-hero?qlt=82&ts=1727166346617&wid=800",
      days: 2,
      place: "Nurmahal",
      title: "Nurmahal Heritage Walk",
    },
    {
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/shri-ramanathaswamy-temple-tri-hero?qlt=82&ts=1727166872722&wid=800",
      days: 2,
      place: "Ramanathaswamy Temple",
      title: "Rameshwaram Pilgrimage",
    },
    {
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/gulbarga-fort-kalaburgai-karnataka-1-tri-hero?qlt=82&ts=1727164436080&wid=800",
      days: 2,
      place: "Gulbarga",
      title: "Gulbarga Fort Tour",
    },
    {
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/purana-quila-delhi-tri-hero?qlt=82&ts=1727163241615&wid=800",
      days: 2,
      place: "Delhi",
      title: "Purana Quila Visit",
    },
    {
      image:
        "https://s7ap1.scene7.com/is/image/incredibleindia/asan-barrage-tri-hero?qlt=82&ts=1727167415232&wid=800",
      days: 2,
      place: "Haridwar",
      title: "Asan Barrage Trip",
    },
  ];
  const sliderRef = useRef(null);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh", // ensures full viewport height
        width: "100%",
      }}
      className="px-6 py-10"
    >
      {/* Centered text */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-blue-500">Itineraries</h1>
        <p className="mt-3 text-lg text-gray-600 text-center">
          that beckon every traveller
        </p>
      </div>
      {/* Cards container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-10 scroll-smooth px-4 py-10 scrollbar-hide"
      >
        {trips.map((trip, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-56 text-center cursor-pointer transform transition duration-300 hover:-translate-y-6"
          >
            <div className="w-full h-90 rounded-[50%/30%] overflow-hidden bg-gray-100 flex justify-center items-center">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3">
              <p className="text-red-600 font-bold">{trip.days} Days</p>
              <p className="text-red-600">{trip.place}</p>
              <h3 className="text-base mt-1">{trip.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* Discover button */}
      <div className="mt-6 flex justify-center">
        <button1 className="bg-red-600 cursor-pointer text-white font-bold px-7 py-3 rounded-full hover:bg-red-700 transition">
          Discover
        </button1>
      </div>
    </div>
  );
};

export default ImageSection;
