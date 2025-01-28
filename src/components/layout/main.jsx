"use client"

import React from 'react'
import Hero from './hero'
import Filter from '../ui/filter'
import Content from './content'
import { useEffect, useContext, useState} from 'react'
import { getCountries } from '../hooks/getCountries'
import { CountriesContext } from '../hooks/utilities/countriesContext'
import { LoadingContext } from '../hooks/utilities/loadingContext'

export default function Main() {
const {setCountries} = useContext(CountriesContext)
const {setIsLoading} = useContext(LoadingContext)
const [filteredCountries, setFilteredCountries] = useState("All")
const [filtered, setFiltered] = useState(false)

useEffect(()=>{
  getCountries(setCountries, setIsLoading)
},[])

  return (
    <main className='width-full h-[max-content] min-h-full flex-col bg-white flex'>
        <Hero/>
        <Filter setFilteredCountries={setFilteredCountries} setFiltered={setFiltered} filteredCountries={filteredCountries}/>
        <Content filteredCountries={filteredCountries} filtered={filtered}/>
    </main>
  )
}
