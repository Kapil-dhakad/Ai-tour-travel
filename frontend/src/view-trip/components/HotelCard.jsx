import React from "react";
import { Link } from "react-router";

const HotelCard = ({ hotel, image }) => {
  const hotelKey = hotel.name + (hotel.address || "");

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        hotel.name + "," + hotel.address
      )}`}
      target="_blank"
      key={hotelKey}
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          className="rounded-xl object-cover h-[180px] w-full"
          src={image || "/plane.png"}
          alt={hotel.name}
        />
        <div className="flex flex-col gap-2 mt-2">
          <h2 className="font-medium">{hotel.name}</h2>
          <h2 className="text-xs text-gray-500">📍{hotel.address}</h2>
          <h2 className="text-sm">💰{hotel.price}</h2>
          <h2 className="font-medium">⭐{hotel.rating}</h2>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
