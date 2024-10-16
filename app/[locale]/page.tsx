"use client"
import Navbar from "../_components/Navbar";
import FlickeringGrid from "@/components/ui/flickering-grid";
import Solution from "../_components/Solution";
import Different from "../../app/_components/Different";
import Test from "../../app/_components/Test";
import CardHoverEffect from "../../app/_components/CardHoverEffect";
import { useState, useEffect } from 'react'
import Hero from "../_components/Hero";




export default function Home() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
    {
      isClient ? (
        <main className="relative flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start ">
        {/* Hero section with full screen height */}
        <section className="w-full h-screen flex items-center justify-center">
          <section className="absolute inset-0 top-0 w-full h-screen">
            {/* Flickering grid as background for both navbar and hero */}
            <FlickeringGrid
              className="absolute inset-0 top-0 w-full  rounded-b-[100px] "
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
            />
            {/* Navbar */}
            <Navbar />
            {/* Hero section */}
            <Hero />
          </section>
        </section>
        <div className="-mt-10  flex items-center justify-center w-full ">
          <div className="  bg-white  dark:bg-black w-full  rounded-b-[100px]">
            <CardHoverEffect />
          </div>
        </div>
        <Solution />
        <div className="-mt-24 flex items-center justify-center container">
          <Test />
        </div>
        <div className="flex items-center justify-center container w-full">
          <Different />
        </div>
      </main>
      )
      :
      (
        <div>Loading...</div>
      )
    }
   </>
  
  );
}
