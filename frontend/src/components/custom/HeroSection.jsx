import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* 🔹 Hero Section with Video */}
      <div className="relative w-full h-screen flex items-center justify-start overflow-hidden">
        
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start text-left gap-6 px-10 md:px-20 max-w-3xl">
          <h1
            className="font-extrabold text-4xl md:text-6xl text-white leading-snug drop-shadow-lg 
            transition-transform duration-300 hover:scale-105 hover:text-[#f97316]"
          >
            <span className="text-[#f97316] hover:text-white transition-colors duration-300">
              Discover Your Next Adventure
            </span>
            <br />
            with AI-Powered Itineraries
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed transition duration-300 hover:text-white/90">
            Plan smarter, travel better. Create personalized itineraries tailored
            to your interests, time, and budget — all in seconds.
          </p>

          <div className="flex gap-4 mt-4">
            {/* CTA Button */}
            <button1
              onClick={() => navigate("/create-trip")}
              className="bg-[#f97316] cursor-pointer hover:bg-[#ea580c] text-white px-6 py-3 text-lg rounded-xl shadow-lg 
              transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
            >
              🚀 Get Started Free
            </button1>

            {/* Sound Toggle Button */}
            <button1
              onClick={toggleMute}
              className="bg-white/80 cursor-pointer hover:bg-white text-black px-6 py-3 text-lg rounded-xl shadow-lg 
              transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
            >
              {isMuted ? "🔇" : "🔊"}
            </button1>
          </div>
        </div>
      </div>

      {/* 🔹 Separate Image Section */}
      <div className="w-full flex justify-center py-16 bg-white">
        <img
          src="/landing page.png"
          className="w-[600px] md:w-[800px] max-w-full drop-shadow-2xl rounded-2xl 
          transition-transform duration-500 hover:scale-105 hover:rotate-1"
          alt="Landing visual"
        />
      </div>
    </>
  );
};

export default HeroSection;
