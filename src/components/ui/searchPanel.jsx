"use client"
import React from "react"
import Searchbar2 from "./searchbar2"
import Searchbox2 from "./searchbox2"
import { useState, useRef} from "react"

export default function SearchPanel({ closeSearchMenu, setCloseSearchMenu}) {
  const [matchedCountries, setMatchedCountries] = useState([])
  const inputRef = useRef(null)

  return (
    <div className={`${closeSearchMenu? "hidden":"flex"} w-full flex-col h-[100vh] top-0 left-0 fixed md:hidden pt-[10px] bg-white z-[100]`}>
        <div className="flex w-full px-[10px] h-[max-content] justify-end">
            <button onClick={()=>{setCloseSearchMenu(true)}} className="w-[30px] flex items-center justify-center h-[30px] rounded-[5px] bg-grey">
             <img src="/close.svg" alt="close-icon" className="w-full h-full"/>
            </button>
        </div>
        <Searchbar2 inputRef={inputRef} setMatchedCountries={setMatchedCountries}/>
        <Searchbox2 matchedCountries={matchedCountries} inputRef={inputRef}/>
    </div>
  )
}
