"use client"
import React from 'react'
import { useContext } from 'react'
import { ContinentContext } from '../hooks/utilities/continentContext'
import { continents } from '../hooks/utilities/continents'

export default function Button({type, setFiltered, selected, id, setSelected, text}) {
  const {setSelectedContinent} = useContext(ContinentContext)

  const buttonAction = () =>{
    setSelected(id)
    setSelectedContinent(continents[id])
    if(continents[id].adj !== "All"){
      setFiltered(true)
    }else{
      setFiltered(false)
    }
  }

  return (
    type === "filter"? <button onClick={buttonAction} className={`${selected === id? "border-[1px] text-accent border-accent" : "border-0 text-white"} whitespace-nowrap hover:bg-[#453936] px-[10px] bg-dark2 w-[max-content] h-[40px] rounded-[8px]`}>{text}</button> : 
    type === "btn"? <button>{text}</button> : <></>
  )
}
