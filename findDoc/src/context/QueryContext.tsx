"use client"

import { ReactNode, createContext, useState } from "react";

interface AppContextType {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  speciality: string;
  setSpeciality: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  minExp : number;
  setMinExp :  React.Dispatch<React.SetStateAction<number>>;
  maxExp : number;
  setMaxExp :  React.Dispatch<React.SetStateAction<number>>;
  fees : number;
  setFees : React.Dispatch<React.SetStateAction<number>>;
  avl : number;
  setAvl : React.Dispatch<React.SetStateAction<number>>;
}

export const QueryContext = createContext<AppContextType | undefined>(
  undefined
);

interface AppProviderProps {
  children: ReactNode;
}

const QueryContextProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [location, setLocation] = useState<string>("");
  const [speciality, setSpeciality] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [minExp, setMinExp] = useState<number>(0);
  const [maxExp, setMaxExp] = useState<number>(0);
  const [fees, setFees] = useState<number>(0);
  const [avl, setAvl] = useState<number>(0);

  const value = { location, setLocation, speciality, setSpeciality, gender, setGender, sort, setSort, minExp, setMinExp, maxExp, setMaxExp , fees, setFees, avl, setAvl};

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};

export default QueryContextProvider;
