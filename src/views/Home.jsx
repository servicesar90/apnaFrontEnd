import React, { useState } from "react";
import HeroSection from "../components/ui/Herosection";


export default function Home() {
   

  return (
    <>
      {/* Header section */}
      <div className="text-center p-10 bg-[#F5F5F5]">
        <h1 className="text-4xl font-bold text-[#3C78D8]">
          Welcome to Talentnest
        </h1>
        <p className="text-lg text-[#666666] mt-2">Find jobs tailored for you</p>
      </div>

      {/* Main content */}
      <HeroSection onLoginClick={() => setShowLoginModal(false)} />
      
    </>
  );
}
