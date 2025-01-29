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
    continents[id].adj !== "All"? setFiltered(true): setFiltered(false)
  }

  const favStyle = {
    background: 'linear-gradient(120deg, #FF000030,#169f1630,#ae12a440,#d3d678,#FA00BB20)'
  }

  const buttonStyle = `${selected === id? "border-[1px] text-accent border-accent" : "border-0 text-white"} whitespace-nowrap hover:bg-[#453936] px-[10px] bg-dark2 w-[max-content] h-[35px] rounded-[8px]`

  return (
    text === "Favorites"? <button onClick={buttonAction} style={favStyle} className={buttonStyle}>{text}</button> :
    type === "filter"? <button onClick={buttonAction} className={buttonStyle}>{text}</button> : 
    type === "btn"? <button>{text}</button> : <></>
  )
}
