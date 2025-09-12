import React, { useEffect, useState } from 'react';
import { db } from '@/services/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router';
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

const Index = () => {
  const [trip, setTrip] = useState(null);      // null instead of []
  const [loading, setLoading] = useState(true);

  const { tripId } = useParams();

  useEffect(() => {
    if (tripId) {
      getTripData();
    }
  }, [tripId]);

  const getTripData = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'AiTrips', tripId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTrip(docSnap.data());
      } else {
        toast.error('No trip Found!');
      }
    } catch (error) {
      toast.error('Failed to fetch trip data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-gray-900"></div>
      </div>
    );
  }

  if (!trip) {
    return <div className="p-10 text-center">Trip data not available.</div>;
  }

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      <InfoSection trip={trip} />
      <Hotels trip={trip} />
      <PlacesToVisit trip={trip} />
      <Footer />
    </div>
  );
};

export default Index;
