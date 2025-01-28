"use client"
import React from 'react'
import Searchitem from './searchitem'

export default function Searchbox({matchedCountries, setShowSearchbox, inputRef,  showSearchbox}) {
  return (
    <div className={`${showSearchbox? 'flex' : " hidden"} search w-[500px] h-[max-content] max-h-[400px] justify-center overflow-hidden rounded-r20 p-[20px] bg-white absolute top-[105%] shadow-lg right-[50px]`}>
        <div className={`filter w-full h-auto overflow-y-scroll`}>
            {
                matchedCountries.map(country => <Searchitem inputRef={inputRef} setShowSearchbox={setShowSearchbox} key={country.cca3} id={country.cca3} name={country.name.common} image={country.flags.png}/>)
            }
        </div>
    </div>
  )
}
