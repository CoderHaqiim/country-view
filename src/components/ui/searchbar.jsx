"use client"

import { useState } from "react"
import { useContext } from "react"
import { CountriesContext } from "../utilities/countriesContext"

export default function Searchbar({setMatchedCountries,navType,inputRef, setShowSearchbox, setCloseSearchMenu}) {
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
      const matched = countries.filter(country => country.name.common.toLowerCase().includes(searchValue)
    );
    const matchedCountries = [...matched].sort((a, b) => 
      (a.name.common).localeCompare(b.name.common)
    );

      !matchedCountries.length? setShowSearchbox(false):setMatchedCountries(matchedCountries)
    }
  };

  return (
    <div className={`${mouseIn? "border-[2px] border-accent" : "border-[0]"} ${navType =='client'? 'flex':'hidden'} flex w-auto items-center justify-between rounded-r20 h-[40px] 
    md:w-[500px] md:bg-[white] md:p-[4px] md:gap-[5px]`}>
        <input onChange={manageInput} ref={inputRef} onBlur={()=> setMouseIn(false)} placeholder="search country" onFocus={()=>setMouseIn(true)} type="text" className="px-[10px] items-center caret-accent rounded-[inherit] hidden outline-0
        md:w-auto md:flex-1 md:h-full md:flex"/>
        <button onClick={()=>{setCloseSearchMenu(false)}} className='w-[30px] lg:pointer-events-none h-[30px] rounded-rounded bg-white
        md:w-[30px] md:h-[30px]'>
          <img src="/search2.svg" alt="search-icon" />
        </button>
    </div>
  )
}
