"use client"

import { useState} from "react"
import { useContext } from "react"
import { CountriesContext } from "../utilities/countriesContext"

export default function Searchbar2({setMatchedCountries, inputRef}) {
    const {countries} = useContext(CountriesContext)

  const manageInput = () => {
    searchCountriesForMatch()
  }

  const searchCountriesForMatch = () => {
    if (!inputRef.current || inputRef.current.value == ''){
      return
    }else{
    const searchValue = inputRef.current.value.toLowerCase();
    const matched = countries.filter(country => 
      country.name.common.toLowerCase().includes(searchValue)
    );
    const matchedCC = [...matched].sort((a, b) => 
      (a.name.common).localeCompare(b.name.common,'en', { sensitivity: 'base' })
    );
    setMatchedCountries(matchedCC)
    }
  };

  return (
    <div className="w-full h-[max-height] p-[10px] border-b-[2px] border-b-grey">
        <div className={`border-[2px] border-accent mt-[5px] flex w-full items-center rounded-r20 justify-between h-[40px] 
        bg-[white] p-[4px] gap-[5px]`}>
            <input onChange={manageInput} ref={inputRef} placeholder="search country" type="text" className="px-[10px] items-center caret-accent rounded-[inherit] outline-0
            w-auto flex-1 h-full flex"/>
            <button className='w-[30px] lg:pointer-events-none h-[30px] rounded-rounded bg-white
            md:w-[30px] md:h-[30px]'>
            <img src="/search2.svg" alt="search-icon" />
            </button>
        </div>
    </div>
  )
}
