import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='w-full p-sp lg:p-lp h-[70px] flex items-center bg-dark text-[white]'>
       <Link href="/" className='text-white font-bold'>countries<span className='text-accent font-normal'>.com</span></Link>
    </footer>
  )
}
