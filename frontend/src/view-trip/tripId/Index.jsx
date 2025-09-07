import { db } from '@/services/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { toast } from 'sonner'
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
// import PlacesToVisit from '../components/PlacesToVisit';

const Index = () =>  {
  const [trip, setTrip] = useState([])

  const {tripId} = useParams();

  useEffect(() => {
   tripId&&getTripData()
  }, [tripId])
  

  const getTripData=async()=>{
    const docRef= doc(db, 'AiTrips', tripId);
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()){
      console.log("Document : ", docSnap.data())
      setTrip(docSnap.data())
    }else{
      console.log("no such document");
      toast('No trip Found!')
    }
  }

  return (
    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      <InfoSection trip={trip}/>
      <Hotels trip={trip}/>
      {/* <PlacesToVisit trip={trip}/> */}
    </div>
  )
}

export default Index
