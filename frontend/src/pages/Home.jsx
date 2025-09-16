import React from "react";
import HeroSection from "@/components/custom/HeroSection";
import TourCard from "@/components/custom/TourCard";
import ImageSection from "@/components/custom/ImageSection";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Tour Cards Section */}
      <section className="mt-16">
        <TourCard />
      </section>

      <div>
        <ImageSection/>
      </div>
    </div>
  );
};

export default Home;
