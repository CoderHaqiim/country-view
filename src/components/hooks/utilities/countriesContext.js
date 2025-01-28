"use client"
import { useState, createContext} from "react";

export const CountriesContext = createContext()

export const CountriesProvider = ({children}) =>{
    const [countries, setCountries] = useState(null)

    return(
    <CountriesContext.Provider value={{countries, setCountries}}>
        {children}
    </CountriesContext.Provider>
    )
}