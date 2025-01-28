"use client"

import React from 'react'
import { useState } from 'react'
import Button from './button'
import { continents } from '../hooks/utilities/continents'

export default function Filter({setFiltered}) {
  const [selected, setSelected] = useState(0) 

  return (
    <nav className='filter lg:px-lp px-sp w-full flex items-center overflow-x-scroll gap-[10px] bg-dark flex h-[50px]'>
      {
        continents.map(continent=> 
        <Button type="filter" key={continent.id} id={continent.id} selected={selected} setSelected={setSelected} setFiltered={setFiltered} text={continent.name}/>)
      }
    </nav>
  )
}
