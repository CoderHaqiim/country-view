"use client"
import { continents } from "./continents";
import {createContext, useState} from "react";

export const ContinentContext = createContext()

export const ContinentProvider = ({ children }) => {
    const [selectedContinent, setSelectedContinent] = useState(continents[0]);
  
    return (
      <ContinentContext.Provider value={{ selectedContinent, setSelectedContinent}}>
        {children}
      </ContinentContext.Provider>
    );
  };
  