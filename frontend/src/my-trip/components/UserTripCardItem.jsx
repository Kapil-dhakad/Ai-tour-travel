import React, { useEffect, useState } from 'react'
import { GetCityImages } from '@/services/ImageApi'
import { Link } from 'react-router'

const UserTripCardItem = ({ trip }) => {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (trip?.tripData?.hotels?.length > 0) {
      const hotel = trip.tripData.hotels[0]
      GetCityImages(`${hotel.name} ${hotel.address}`)
        .then(results => {
          if (results.length > 0) {
            setImage(results[0].urls.small)
          }
        })
        .catch(() => setImage(null))
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [trip])

  return (
    <div className="flex justify-center items-center p-6">
      <Link to={`/view-trip/${trip?.id}`}>
        <div className="hover:scale-105 transition-all text-black hover:shadow-lg bg-white rounded-xl p-4 w-[340px] h-[360px]">
          
          {/* 👇 Loader ya Image */}
          {loading ? (
            <div className="h-[300px] w-full bg-slate-200 animate-pulse rounded-xl"></div>
          ) : (
            <img
              src={image || "/plane.png"}
              alt="Hotel"
              className="object-cover rounded-xl h-[300px] w-full"
            />
          )}

          <h2 className="font-bold text-lg mt-3 text-center">
            {trip?.userSelection?.location?.name}
          </h2>
          <h2 className="text-sm text-gray-500 mt-1 text-center">
            {trip?.userSelection?.days} Days trip with {trip?.userSelection?.budget} Budget
          </h2>
        </div>
      </Link>
    </div>
  )
}

export default UserTripCardItem
