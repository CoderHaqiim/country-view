"use client"

import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { NavigationContext } from '../utilities/navigationContext'

export default function Searchitem({image, name, id}) { 
  const {setNavigationCompleted} = useContext(NavigationContext)

  return (
    <Link onClick={()=>{setNavigationCompleted(false)}} href={`/country/${id}`} className='w-full flex gap-[15px] h-[40px] border-b-[1px] items-center border-[grey]'>
        <img src={image} alt='' className='map md:w-[30px] md:h-[20px] w-[33px] h-[22px] shadow-lg'/>
        <div className='w-full h-auto text-[1rem] lg:text-[0.8rem] '>{name}</div>
    </Link>
  )
}
