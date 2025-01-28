"use client" 
import { useState, useRef } from 'react'
import React from 'react'
import Searchbar from '../ui/searchbar'
import Searchbox from '../ui/searchbox'
import Link from 'next/link'

export default function Nav({navType, inputRef, setCloseSearchMenu}) {
  const [matchedCountries, setMatchedCountries] = useState([])
  const [showSearchbox, setShowSearchbox] = useState(false)

  return (
    <nav className='w-full sticky top-[-16px] z-[50] h-[80px]'>
      <div className='w-full bg-accent h-[15px]'></div>
      <div className='w-full lg:px-lp px-sp h-[65px] justify-between flex items-center  bg-dark'>
        <Link href='/' className='text-white font-bold'>countries<span className='text-accent font-normal'>.com</span></Link>
        <Searchbar setCloseSearchMenu={setCloseSearchMenu} navType={navType} inputRef={inputRef} setMatchedCountries={setMatchedCountries} setShowSearchbox={setShowSearchbox}/>
        <Searchbox inputRef={inputRef} matchedCountries={matchedCountries} setShowSearchbox={setShowSearchbox} showSearchbox={showSearchbox}/>
      </div>
    </nav>
  )
}
