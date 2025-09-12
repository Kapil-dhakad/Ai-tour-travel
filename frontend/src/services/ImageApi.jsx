import axios from "axios";

const UNSPLASH_URL = "https://api.unsplash.com/search/photos";

export const GetCityImages = async (cityName) => {
  const res = await axios.get(UNSPLASH_URL, {
    params: { query: cityName, per_page: 1 },
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`
    }
  });
//   console.log(res.data.results)
//   console.log("newkk",GetCityImages)
  return res.data.results; // array of images
};
