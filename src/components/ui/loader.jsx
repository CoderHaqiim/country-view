'use client'
import React from 'react'
import LazyComponent from './lazyComponent'
import { useContext } from 'react'
import { NavigationContext } from '../utilities/navigationContext'

export default function Loader() {
    const {navigationCompleted} = useContext(NavigationContext)
  return (
    <div className={`${navigationCompleted? "hidden" : "flex"} w-full h-[50px] z-[20] justify-center fixed top-[100px] left-[0]`}>
        <div className='rounded-r20 bg-white p-[3px] w-[100px] h-[max-content]'>
            <LazyComponent/>
        </div>
    </div>
  )
}
