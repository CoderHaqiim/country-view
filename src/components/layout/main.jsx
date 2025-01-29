"use client"

import React from 'react'
import Hero from './hero'
import Filter from '../ui/filter'
import Content from './content'
import { useEffect, useContext, useState, useRef} from 'react'
import { getCountries } from '../hooks/getCountries'
import Nav from './nav'
import { CountriesContext } from '../hooks/utilities/countriesContext'
import { LoadingContext } from '../hooks/utilities/loadingContext'
import SearchPanel from '../ui/searchPanel'

export default function Main() {
const {setCountries, countries} = useContext(CountriesContext)
const {setIsLoading} = useContext(LoadingContext)
const [filteredCountries, setFilteredCountries] = useState("All")
const [filtered, setFiltered] = useState(false)
const inputRef = useRef(null)
const [closeSearchMenu, setCloseSearchMenu] = useState(true)

useEffect(()=>{
  getCountries(setCountries, setIsLoading)
},[])

  return (
    <main className='w-full relative h-[max-content] min-h-full flex-col bg-white flex'>
        <SearchPanel closeSearchMenu={closeSearchMenu} setCloseSearchMenu={setCloseSearchMenu}/>
        <Nav setCloseSearchMenu={setCloseSearchMenu} navType="client" inputRef={inputRef}/>
        <Hero/>
        <Filter setFilteredCountries={setFilteredCountries} setFiltered={setFiltered} filteredCountries={filteredCountries}/>
        <Content filteredCountries={filteredCountries} filtered={filtered}/>
    </main>
  )
}
