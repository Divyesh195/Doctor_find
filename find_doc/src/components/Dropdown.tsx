"use client";

import { QueryContext } from "@/context/QueryContext";
import React, { useContext, useEffect, useRef, useState } from "react";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  name: string;
  items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ name, items }) => {
  const [open, setOpen] = useState(false);
  const [filterName, setFilterName] = useState<string>("")
  const dropdownRef = useRef<HTMLDivElement>(null);

  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("Application failed to get context");
  }
  const { setGender, setSort, setMaxExp, setMinExp, setFees, setAvl } = context;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function capitalizeFirstLetter(input: string): string {
    if (!input) return "";
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
  }

  const handleOnClick = (value: string) => {
    if (value == "clearGender") {
      setGender("");
      setFilterName("Gender")
      setOpen(false);
    }
    if (["male", "female"].includes(value)) {
      setGender(value);
      setFilterName(capitalizeFirstLetter(value))
      setOpen(false);
    }
    if (value == "reviews") {
      setSort(value);
      setFilterName("Most reviews")
      setOpen(false);
    }
    if (value == "clearReviews") {
      setSort("");
      setFilterName("Reviews")
      setOpen(false);
    }
    if(value == "0_5"){
      setMinExp(0);
      setMaxExp(5);
      setFilterName("0-5 Experience")
      setOpen(false)
    }
    if(value == "5_10"){
      setMinExp(5);
      setMaxExp(10);
      setFilterName("5-10 Experience")
      setOpen(false)
    }
    if(value == "11"){
      setMinExp(11);
      setMaxExp(100);
      setFilterName("10+ Experience")
      setOpen(false)
    }
    if(value == "clearExp"){
      setMinExp(0);
      setMaxExp(100);
      setFilterName("Experience")
      setOpen(false)
    }
    if(value == "fee"){
      setAvl(0)
      setFees(1)
      setFilterName("Fees")
      setOpen(false)
    }
    if(value == "avl"){
      setFees(0)
      setAvl(1)
      setFilterName("Availability")
      setOpen(false)
    }
    if(value == "clearFilters"){
      setFees(0)
      setAvl(0)
      setFilterName("Filters")
      setOpen(false)
    }
  };

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-center w-full rounded-sm border border-gray-300 shadow-sm px-4 py-2 text-white bg-white/30 text-sm font-medium hover:bg-white/10 cursor-pointer"
      >
        {filterName != "" ? filterName: name}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute z-10 left-0 mt-2 w-44 rounded-sm shadow-lg bg-white ring-1 ring-gray-400">
          <div className="py-1">
            {items.map((items, index) => (
              <a
                key={index}
                onClick={() => handleOnClick(items.value)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {items.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
