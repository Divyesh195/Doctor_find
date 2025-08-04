"use client";

import { QueryContext } from "@/context/QueryContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useRef } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const sideMenuRef = useRef<HTMLUListElement>(null);

  const context = useContext(QueryContext);

  if (!context) {
    throw new Error("Application failed to get context");
  }

  const {setLocation, setSpeciality, setGender, setSort,setMinExp, setMaxExp, setFees, setAvl} = context;

  const openMenu = () => {
    if (sideMenuRef.current != null) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const homeOnClick = () =>{
    setLocation("")
    setSpeciality("")
    setGender("")
    setSort("")
    setMinExp(0)
    setMaxExp(0)
    setFees(0)
    setAvl(0)
    closeMenu()
  }
  const closeMenu = () => {
    if (sideMenuRef.current != null) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };
  return (
    <nav className="bg-white shadow-sm border-b border-gray-400 sticky top-0 z-20 h-[60px]">
      <div className="max-w-7xl  mx-5 xl:mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              <Link href={"/"} className="text-primary" onClick={homeOnClick}>
                PRACTO
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={"/doctors"}
              className={` font-bold hover:text-primary border-primary pb-1 ${
                pathname == "/doctors" ? "text-primary border-b-3" : " "
              }`}
            >
              Find Doctors
            </Link>
            <Link
              href={"/doctors"}
              className={` font-bold hover:text-primary border-primary pb-1 `}
            >
              Video Consult
            </Link>
            <Link
              href={"/doctors"}
              className={` font-bold hover:text-primary border-primary pb-1`}
            >
              Surgery
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <p className="bg-gray-700 text-white rounded-2xl font-bold text-sm py-[0.5px] px-1 text-primary-foreground">
                  NEW
                </p>
                <span className="text-sm text-gray-700 font-semibold">
                  For Corporates
                </span>
              </div>
              <span className="text-sm text-gray-700 font-semibold">
                For Providers
              </span>
              <span className="text-sm text-gray-700 font-semibold">
                Security & help
              </span>
            </div>
            <button className="text-primary border p-2 rounded-md font-semibold border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer hover:text-white">
              Login / Signup
            </button>
            <button className="block md:hidden cursor-pointer">
              <Image
                src={"/menu.png"}
                width={10}
                height={10}
                alt="dark-mode"
                className="w-6"
                onClick={openMenu}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu  */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 h-screen bg-blue-50 dark:bg-gray-800 transition duration-500 font-bold text-lg"
      >
        <div className="absolute right-6 top-6">
          <Image
            src={"/close.png"}
            width={10}
            height={10}
            alt="close"
            className="w-4 cursor-pointer"
            onClick={closeMenu}
          />
        </div>

        <li className="border-b border-gray-400 mb-2">
          <Link
            href={"/"}
            onClick={homeOnClick}
            className={` font-bold hover:text-primary border-primary pb-1 ${
              pathname == "/" ? "text-primary" : " "
            }`}
          >
            Home
          </Link>
        </li>
        <li className="border-b border-gray-400 mb-2">
          <Link
            href={"/doctors"}
            onClick={closeMenu}
            className={` font-bold hover:text-primary border-primary pb-1 ${
              pathname == "/doctors" ? "text-primary" : " "
            }`}
          >
            Find Doctors
          </Link>
        </li>
        <li className="border-b border-gray-400 mb-2">
          <a href="#" onClick={closeMenu}>
            Video Consult
          </a>
        </li>
        <li className="border-b border-gray-400 mb-2">
          <a href="#" onClick={closeMenu}>
            Surgery
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
