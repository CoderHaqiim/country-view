"use client"
import React from 'react'
import Header from '../ui/header'
import Card from '../ui/card'
import { useContext, useState} from 'react'
import { ContinentContext} from '../hooks/utilities/continentContext'
import { CountriesContext} from '../hooks/utilities/countriesContext'
import { LoadingContext } from '../hooks/utilities/loadingContext'
import LazyComponent from '../ui/lazyComponent'


export default function Content({filtered}) {
  const {selectedContinent} = useContext(ContinentContext)
  const {countries} = useContext(CountriesContext)
  const {isLoading} = useContext(LoadingContext)

  return (
    <div className='w-full h-[max-content] min-h-[400px] py-[20px] px-sp lg:px-lp'>
      <div className='w-full h-auto lg:px-lp'>
        <Header text={selectedContinent.adj + ' continents'}/>
      </div>
        <div className='w-full h-full flex justify-center flex-wrap gap-[20px]'>
          {
            isLoading? <LazyComponent/>:
            !filtered?
            countries?.map(country => <Card key={country.cca3} id={country.cca3} name={country.name.common} image={country.flags.png}/>):
            countries?.filter(country => country.continents[0] === selectedContinent.name)
            .map(country => <Card key={country.cca3} id={country.cca3} name={country.name.common} image={country.flags.png}/>)
          }
        </div>
    </div>
  )
}
