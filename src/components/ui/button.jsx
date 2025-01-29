"use client"
import React from 'react'
import { useContext } from 'react'
import { ContinentContext } from '../utilities/continentContext'
import { continents } from '../utilities/continents'

export default function Button({type, setFiltered, selected, id, setSelected, text}) {
  const {setSelectedContinent} = useContext(ContinentContext)

  const buttonAction = () =>{
    setSelected(id)
    setSelectedContinent(continents[id])
    continents[id].adj !== "All"? setFiltered(true): setFiltered(false)
  }

  const favStyle = {
    background: 'linear-gradient(120deg, #FF000050,#169f1650,#ae12a440,#d3d67850,#FA00BB50)',
    border:"solid 0.5px #ea9a0660"
  }

  const buttonStyle = `${selected === id? "border-[1px] shadow-[0px 2px 5px -2px black] text-accent border-accent" : "border-0 text-white"} whitespace-nowrap hover:bg-[#453936] px-[10px] bg-dark2 w-[max-content] h-[35px] rounded-[8px]`

  return (
    text === "Favorites"? <button onClick={buttonAction} style={favStyle} className={buttonStyle}>{text}</button> :
    type === "filter"? <button onClick={buttonAction} className={buttonStyle}>{text}</button> : 
    type === "btn"? <button>{text}</button> : <></>
  )
}
