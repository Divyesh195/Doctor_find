import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PopUp = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  if (typeof window !== "undefined") {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
  return (
    showPopup && (
      <div className="fixed inset-0 z-50 flex items-center justify-center px-5 ">
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-black/70 transition-opacity"
          aria-hidden="true"
        ></div>

        {/* Popup box */}
        <div className="relative z-10 bg-white rounded-lg shadow-lg flex flex-col items-center space-y-4 w-[80vw] lg:w-[40vw]">
          <div className="mt-10 px-5">
            <p className="text-2xl text-gray-800 font-bold text-center mb-3">
              Doctor data is limited
            </p>
            <p className="text-xl text-gray-700 font-bold text-center">
              Location
            </p>
            <p className="text-center mb-2">Gujarat, Mumbai, Delhi, USA</p>
            <p className="text-xl text-gray-700 text-center font-bold">
              Speciality
            </p>
            <p className="text-center">
              Dermatologist, Cardiologist, Gynecologist, Neurologist
            </p>

            <p className="mt-5 text-gray-500">This website uses free backend service by <span className="cursor-pointer text-blue-700">Render.com <Link href={"https://render.com/"} /></span> ; first 2-3 search may not show result.</p>
          </div>
          <button
            onClick={() => setShowPopup(false)}
            className="absolute cursor-pointer m-4 font-medium transition right-0"
          >
            <Image src={"/close.png"} height={10} width={10} alt="close" />
          </button>
        </div>
      </div>
    )
  );
};

export default PopUp;
