"use client"

import { useState } from "react"
import { useContext } from "react"
import { CountriesContext } from "../hooks/utilities/countriesContext"

export default function SearchbarMobile({setMatchedCountries,inputRef, setShowSearchbox}) {
    const {countries} = useContext(CountriesContext)
    const [mouseIn, setMouseIn] = useState(false)

  const manageInput = () => {
    searchCountriesForMatch()
  }

  const searchCountriesForMatch = () => {
    if (!inputRef.current || inputRef.current.value == ''){
      setShowSearchbox(false)
      return
    }else{
    setShowSearchbox(true)
    const searchValue = inputRef.current.value.toLowerCase();
    const matched = countries.filter(country => 
      country.name.common.toLowerCase().includes(searchValue)
    );
    const matchedCountries = [...matched].sort((a, b) => 
      (a.name.common).localeCompare(b.name.common,'en', { sensitivity: 'base' })
    );
    setMatchedCountries(matchedCountries)
    }
  };

  return (
    <div className="w-full p-[10px] border-b-[1px] border-b-grey">
      <div className={`border-[2px] border-accent flex items-center justify-between rounded-r20 h-[40px] w-full bg-white p-[4px] gap-[5px]`}>
        <input onChange={manageInput} ref={inputRef} onBlur={()=> setMouseIn(false)} placeholder="search country" onFocus={()=>setMouseIn(true)} type="text" className="px-[10px] items-center caret-accent rounded-[inherit] outline-0 w-auto flex-1 h-full"/>
        <button className='w-[30px] h-[30px] rounded-rounded bg-white
        md:w-[30px] md:h-[30px]'>
          <img src="/search2.svg" alt="search-icon" />
        </button>
      </div>
    </div>
  )
}
