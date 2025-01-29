"use client"

import React from 'react'
import { useState, useEffect} from 'react'
import { FavoritesContext } from '../utilities/favoritesContext'
import { useContext } from 'react'

export default function Heart({id}) {
const {favorites,setFavorites} = useContext(FavoritesContext)
const [favorite, setFavorite] = useState(false)
const [showPop, setShowPop] = useState(false)

  const mouseOverEvent = (e) =>{
    e.stopPropagation()
    e.preventDefault()
    setShowPop(true)
  }

  const checkIfFavorite = () =>{
    if(favorites.includes(id)){
      setFavorite(true)
    }else{
      setFavorite(false)
    }
  }

  const toggleCountryInFavoritesList = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setFavorites(prev => {
      if (!prev.includes(id)) {
        return [...prev, id]; 
      } else {
        return prev.filter(favoriteId => favoriteId !== id); 
      }
    });
  };

  useEffect(()=>{
    localStorage.setItem('favorites', JSON.stringify(favorites))
    checkIfFavorite()
  },[favorites])

  return (
    <button onClick={toggleCountryInFavoritesList} onMouseOver={mouseOverEvent} onMouseOut={()=>{setShowPop(false)}} className='w-[max-content] h-[max-content] z-[5] absolute hover:scale-[1.2] transform bottom-[5px] p-[2px] right-[5px] rounded-rounded flex items-center justify-center'>
        <div className={`${showPop? "flex":"hidden"} rounded-r10 px-[10px] py-[3px] z-[3] w-[max-content] text-[0.6rem] lg:text-[0.5rem] absolute top-[-17px] right-[0px] bg-[#000000] text-[white]`}>
          {
             !favorite? "Add to favorites" : "Remove from favorites"
          }
        </div>
        {
            favorite?<img className='lg:h-[22px] lg:w-[22px] w-[32px] h-[32px]' src="/favorite-fill.svg" alt="not-favorite-icon" />:<img className="lg:h-[20px] lg:w-[20px] w-[30px] h-[30px]" src="/favorite-outline.svg" alt="favorite-icon" />
        }
    </button>
  )
}
