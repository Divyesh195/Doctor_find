"use client"

import { QueryContext } from "@/context/QueryContext";
import { useRouter } from "next/navigation";
import {
  Magnet,
  MapPin,
  MessageCircleIcon,
  Newspaper,
  Notebook,
  Search,
  ShoppingBag,
} from "lucide-react";
import Image from "next/image";
import { KeyboardEvent, useContext } from "react";
import PopUp from "./PopUp";

export default function HomePage() {
  const popularSearches = [
    "Dermatologist",
    "Pediatrician",
    "Gynecologist/Obstetrician",
    "Others",
  ];

  const router = useRouter();

  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("Application failed to get context");
  }
  const { location, setLocation, speciality, setSpeciality } = context;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      router.push(`/doctors`);
    }
  };
  return (
    <>
          <PopUp />
      <div className="relative bg-hero-gradient overflow-hidde min-h-[92vh]">
        {/* Background decoration */}
        <div className="absolute -z-10 inset-0 ">
          <Image
            width={200}
            height={200}
            src={"/bg.jpg"}
            alt="Medical illustration"
            className="object-cover w-full h-[92vh] opacity-80"
            unoptimized
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Your home for health
            </h1>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-8">
                Find and Book
              </h2>

              {/* Search Section */}
              <div className="bg-white flex flex-col lg:flex-row rounded-lg shadow-lg max-w-7xl mx-5 xl:mx-auto">
                <div className="flex items-center gap-2 px-2  border-e border-white lg:border-gray-400 w-full">
                  <p>
                    <MapPin className=" text-muted-foreground" />
                  </p>
                  <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className=" pl-5 h-12 w-full text-lg outline-0"
                  />
                </div>
                <div className="flex items-center gap-2 px-2 border-t lg:border-none border-gray-400 w-full">
                  <Search className=" text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Enter speciality"
                    value={speciality}
                    onChange={(e) => setSpeciality(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="pl-5 h-12 w-full text-lg outline-0"
                  />
                </div>
              </div>

              {/* Popular Searches */}
              <div className="text-left mx-5 xl:mx-auto">
                <span className="mr-3 text-white font-semibold">
                  Popular searches:
                </span>
                <div className="inline-flex flex-wrap gap-2">
                  {popularSearches.map((search, index) => (
                    <button key={index} className="text-white font-semibold">
                      {search},
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Services */}
        <div className="px-5 py-4 w-full bg-blue-900 lg:absolute bottom-0 mt-20 lg:mt-0">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 text-center">
              <div className="flex flex-col items-center space-y-2 p-5 hover:bg-blue-700 border-e border-white transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                  <MessageCircleIcon className="text-white" size={30} />
                </div>
                <span className="text-xl text-white font-semibold">
                  Consult with a doctor
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-5 hover:bg-blue-700 border-e border-white transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                  <ShoppingBag className="text-white" size={30} />
                </div>
                <span className="text-xl text-white font-semibold">
                  Order Medicines
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-5 hover:bg-blue-700 border-e border-white transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                  <Notebook className="text-white" size={30} />
                </div>
                <span className="text-xl text-white font-semibold">
                  View medical records
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-5 hover:bg-blue-700 border-e border-white transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                  <Newspaper className="text-white" size={30} />
                </div>
                <span className="text-xl text-white font-semibold">
                  Read articles
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 p-5 hover:bg-blue-700 md:border-none border-e border-white transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                  <Magnet className="text-white" size={30} />
                </div>
                <span className="text-xl text-white font-semibold">
                  For healthcare providers
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="lg:hidden text-3xl text-white text-center font-bold mt-10 shadow-2xl">There is no Content afte this...</p>
      </div>
    </>
  );
}
