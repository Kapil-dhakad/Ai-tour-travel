import React, { useEffect, useState } from "react";
import { GetCityImages } from "@/services/ImageApi";
import HotelCard from "./HotelCard";

const Hotels = ({ trip }) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    if (trip?.tripData?.hotels) {
      trip.tripData.hotels.forEach((hotel) => {
        const hotelKey = hotel.name + (hotel.address || "");
        if (hotel.name && !images[hotelKey]) {
          GetCityImages(`${hotel.name} ${hotel.address}`)
            .then((results) => {
              if (results.length > 0) {
                setImages((prev) => ({
                  ...prev,
                  [hotelKey]: results[0].urls.small,
                }));
              }
            })
            .catch(() => {
              // error ya fallback ke liye
            });
        }
      });
    }
  }, [trip]);

  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {trip?.tripData?.hotels?.map((hotel) => {
          const hotelKey = hotel.name + (hotel.address || "");
          return (
            <HotelCard hotel={hotel} image={images[hotelKey]} key={hotelKey} />
          );
        })}
      </div>
    </div>
  );
};

export default Hotels;
