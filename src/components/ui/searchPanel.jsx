"use client"
import React from "react"
import SearchbarMobile from "./searchbarMobile"
import Searchbox from "./searchbox"
import { useState } from "react"

export default function SearchPanel({inputRef, closeSearchMenu, setCloseSearchMenu, matchedCountries, setMatchedCountries}) {
    const [showSearchbox, setShowSearchbox] = useState(false)

  return (
    <div className={`${closeSearchMenu? "hidden":"flex"} w-full flex-col h-[100vh] top-0 left-0 fixed md:hidden pt-[10px] bg-white z-[100]`}>
        <div className="flex w-full px-[10px] h-[max-content] justify-end">
            <button onClick={()=>{setCloseSearchMenu(true)}} className="w-[30px] flex items-center justify-center h-[30px] rounded-[5px] bg-grey">
             <img src="/close.svg" alt="close-icon" className="w-full h-full"/>
            </button>
        </div>
        <SearchbarMobile inputRef={inputRef} setMatchedCountries={setMatchedCountries} setShowSearchbox={setShowSearchbox}/>
        <Searchbox inputRef={inputRef} matchedCountries={matchedCountries} setShowSearchbox={setShowSearchbox} showSearchbox={showSearchbox} type="mobile"/>
    </div>
  )
}
