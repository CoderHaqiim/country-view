"use client"

import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { SearchbarContext } from '../hooks/utilities/searchbarContext'

export default function Searchitem({image, name, inputRef, setShowSearchbox, id}) {
  const {setShowSearchbar} = useContext(SearchbarContext) 

  const linkAction = () =>{
    setShowSearchbox(false)
    inputRef.current.value = ""
    setShowSearchbar(false)
  }

  return (
    <Link onClick={linkAction} href={`/country/${id}`} className='w-full flex gap-[15px] h-[40px] border-b-[1px] items-center border-[grey]'>
        <img src={image} alt='' className='map w-[30px] h-[20px] shadow-lg'/>
        <div className='w-full h-auto text-[0.8rem]'>{name}</div>
    </Link>
  )
}
