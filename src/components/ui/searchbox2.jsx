"use client"
import React from 'react'
import Searchitem from './searchitem'

export default function Searchbox2({matchedCountries ,setShowSearchbox, inputRef}) {
  return (
          <div className={` search w-full h-full justify-center overflow-hidden p-[20px] bg-white`}>
            <div className={`filter w-full h-auto overflow-y-scroll`}>
              {
                  matchedCountries.map(country => <Searchitem inputRef={inputRef} setShowSearchbox={setShowSearchbox} key={country?.cca3} id={country?.cca3} name={country?.name.common} image={country?.flags.png}/>)
              }
            </div>
          </div>
  )
}
