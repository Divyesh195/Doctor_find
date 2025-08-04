"use client";
import DoctorCard from "@/components/Dcard";
import FilterSection from "@/components/Filter";
import { QueryContext } from "@/context/QueryContext";
import { MapPin, Search } from "lucide-react";
import { KeyboardEvent, useContext, useEffect, useState } from "react";

const DoctorList = () => {
  type Doctor = {
    id: number;
    name: string;
    image: string;
    specialty: string;
    experience: string;
    location: string;
    fee: string;
    rating: number;
    reviews: number;
    availability: string;
    clinicName: string;
    additionalClinics: number;
  };

  const context = useContext(QueryContext);

  if (!context) {
    throw new Error("Application failed to get context");
  }

  const {
    location,
    setLocation,
    speciality,
    setSpeciality,
    gender,
    sort,
    minExp,
    maxExp,
    fees,
    avl
  } = context;
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(false);
  const [htmlLocation, setHtmlLocation] = useState("");
  const [htmlSpeaciality, setHtmlSpeaciality] = useState("");

  const handleSearch = async () => {
    setLoading(true);

    const query = new URLSearchParams();
    if (location) {
      query.append("location", location);
    }
    if (speciality) {
      query.append("speciality", speciality);
    }
    if (gender) {
      query.append("gender", gender);
    }
    if (sort) {
      query.append("sort", sort);
    }
    if (minExp) {
      query.append("minExp", String(minExp));
    }
    if (maxExp) {
      query.append("maxExp", String(maxExp));
    }
    if(fees){
      query.append("fee", String(fees))
    }
    if(avl){
      query.append("avl",String(avl))
    }

    try {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_BACKEND
        }/api/doctors/search?${query.toString()}`
      );

      console.log("Query :", query.toString());
      const resJSON = await response.json();

      //This line simulates 2 seconds delay. Just for satisfaction
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (resJSON) {
        console.log(resJSON);
        setDoctors(resJSON);
        setHtmlLocation(capitalizeFirstLetter(location));
        setHtmlSpeaciality(capitalizeFirstLetter(speciality));
        setLoading(false);
      }
    } catch (error) {
      console.log("Error occured in api", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  function capitalizeFirstLetter(input: string): string {
    if (!input) return "";
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  }

  useEffect(() => {
    handleSearch();
  }, [gender, sort, minExp, maxExp, fees, avl]);

  return (
    <div className="bg-background">
      {/* Search Header */}
      <div className="bg-white flex flex-col lg:flex-row rounded-lg shadow-lg max-w-7xl mx-5 xl:mx-auto mt-5">
        <div className="flex items-center gap-2 px-2 lg:w-[50%] border  border-gray-400">
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
            spellCheck="false"
          />
        </div>
        <div className="flex items-center gap-2  px-2 lg:w-[50%] border border-gray-400">
          <Search className=" text-muted-foreground" />
          <input
            type="text"
            placeholder="Enter speciality"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            onKeyDown={handleKeyDown}
            className="pl-5 h-12 w-full text-lg outline-0"
            spellCheck="false"
          />
        </div>
      </div>

      <FilterSection />

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-5 xl:px-0 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {doctors.length} {gender ? capitalizeFirstLetter(gender) : ""}{" "}
            {htmlSpeaciality ? htmlSpeaciality : "doctor"} found{" "}
            {htmlLocation ? "in " + htmlLocation : ""}
          </h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">✓</span>
            <span className="text-sm">
              Book appointments with minimum wait-time & verified doctor details
            </span>
          </div>
        </div>

        {loading && <p className="text-gray-800 font-semibold">Loading.....</p>}

        {/* Doctor Cards */}
        {doctors.length == 0 && !loading ? (
          <p className="text-gray-800 font-bold">No Doctors found</p>
        ) : (
          <div className="flex flex-col gap-5 md:items-center md:block">
            {doctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                name={doctor.name}
                image={doctor.image}
                specialty={doctor.specialty}
                experience={doctor.experience}
                location={doctor.location}
                fee={doctor.fee}
                rating={doctor.rating}
                reviews={doctor.reviews}
                availability={doctor.availability}
                clinicName={doctor.clinicName}
                additionalClinics={doctor.additionalClinics}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
