"use client"

import React from 'react'
import Link from 'next/link'

export default function Searchitem({image, name, inputRef, setShowSearchbox, id}) {
  const linkAction = () =>{
    setShowSearchbox(false)
    inputRef.current.value = ""
  }

  return (
    <Link onClick={linkAction} href={`/country/${id}`} className='w-full flex gap-[15px] h-[40px] border-b-[1px] items-center border-[grey]'>
        <img src={image} alt='' className='map w-[30px] h-[20px] shadow-lg'/>
        <div className='w-full h-auto text-[0.8rem]'>{name}</div>
    </Link>
  )
}
