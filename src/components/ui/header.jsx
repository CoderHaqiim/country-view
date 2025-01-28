import React from 'react'

export default function Header({text}) {
  return (
    <h1 className='text-[1.2rem] md:text-[2rem] text-left flex font-[400] text-dark w-auto pb-[20px] h-auto'>{text}</h1>
  )
}
