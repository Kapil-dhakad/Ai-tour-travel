import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/option'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { generateTripPlan } from '@/services/AiModel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/services/FirebaseConfig'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router'

const About = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false) // ✅ Dialog state

  const navigate = useNavigate()

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // 🔹 Search location from OpenStreetMap
  const searchLocation = async (value) => {
    setQuery(value)
    if (value.length < 3) return

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
      )
      const data = await response.json()
      setResults(data)
    } catch (error) {
      console.error("Error fetching location:", error)
    }
  }

  useEffect(() => {
    console.log("Form Data: ", formData)
  }, [formData])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => getUserProfile(codeResp),
    onError: (error) => console.log(error)
  })

 const OnGenerateTrip = async () => {
  const user = localStorage.getItem('user')
  if (!user) {
    setOpenDialog(true)
    return;
  }

  if (
    !formData?.location ||
    !formData?.days ||
    !formData?.budget ||
    !formData?.travelers
  ) {
    toast("Please fill all details")
    return
  }

  const FINAL_PROMPT = AI_PROMPT(
    formData?.location?.name,
    formData?.days,
    formData?.travelers,
    formData?.budget
  );

  try {
    setLoading(true)

    // 👇 AI Response
    let tripPlan = await generateTripPlan(FINAL_PROMPT)

    // ✅ Extra characters clean karna
    tripPlan = tripPlan
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // ✅ Parse as JSON
    const parsedPlan = JSON.parse(tripPlan)

    console.log("AI Response (Parsed):", parsedPlan)

    SaveAiTrip(parsedPlan)
    toast.success("Trip plan generated successfully!")
  } catch (err) {
    console.error("Parsing Error:", err)
    toast.error("Failed to generate trip plan")
  } finally {
    setLoading(false)
  }
}


 const SaveAiTrip = async (TripData) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const docId = Date.now().toString()

  // Fire and forget saving data, don't await it
  setDoc(doc(db, "AiTrips", docId), {
    userSelection: formData,
    tripData: TripData,
    userEmail: user?.email,
    id: docId
  }).catch(err => {
    console.error("Error saving trip data:", err)
    toast.error("Failed to save trip data")
  });

  // Navigate immediately without waiting for setDoc to finish
  navigate('/view-trip/' + docId);
  setLoading(false);
}


  const getUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'application/json'
      }
    }).then((res) => {
      console.log(res)
      localStorage.setItem('user', JSON.stringify(res.data))
      setOpenDialog(false)
      OnGenerateTrip()
    })
  }

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences 🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences
      </p>

      <div className='mt-20 flex flex-col gap-10'>
        {/* Destination */}
        <div>
          <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
          <input
            type="text"
            placeholder="Search your destination..."
            value={query}
            onChange={(e) => searchLocation(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg"
          />
          {results.length > 0 && (
            <ul className="border mt-2 rounded-lg bg-white max-h-48 overflow-y-auto">
              {results.map((place) => (
                <li
                  key={place.place_id}
                  className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setQuery(place.display_name)
                    setResults([])
                    handleInputChange("location", {
                      name: place.display_name,
                      lat: place.lat,
                      lon: place.lon
                    })
                  }}
                >
                  {place.display_name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Days input */}
        <div>
          <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip?</h2>
          <Input
            placeholder="ex. 3"
            type="number"
            onChange={(e) => handleInputChange("days", e.target.value)}
          />
        </div>
      </div>

      {/* Budget */}
      <div>
        <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectBudgetOptions.map((item) => (
            <div
              key={item.id}
              className={`p-4 cursor-pointer border rounded-lg hover:shadow-lg
                ${formData?.budget === item.title && 'shadow-lg border-black'}
                `}
              onClick={() => handleInputChange("budget", item.title)}
            >
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Travelers */}
      <div>
        <h2 className='text-xl my-3 font-medium'>Who do you plan on traveling with?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
          {SelectTravelesList.map((item) => (
            <div
              key={item.id}
              className={`p-4 cursor-pointer border rounded-lg hover:shadow-lg
               ${formData?.travelers === item.title && 'shadow-lg border-black'}
                `}
              onClick={() => handleInputChange("travelers", item.title)}
            >
              <h2 className='text-4xl'>{item.icon}</h2>
              <h2 className='font-bold text-lg'>{item.title}</h2>
              <h2 className='text-sm text-gray-500'>{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className='my-10 flex justify-end'>
        <Button onClick={OnGenerateTrip} disabled={loading}>
          {loading ? <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> : "Generate Trip"}
        </Button>
      </div>

      {/* ✅ Dialog Box (Controlled) */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img src='/logo.svg' />
              <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
              <p>Sign in to the App with Google authentication securely</p>
              <Button
                disabled={loading}
                onClick={login}
                className='w-full mt-5 flex gap-4 items-center'
              > <FcGoogle />Sign in with Google</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default About
