"use client"
import React from 'react'

export default function LazyComponent() {
const style = {
    background:'linear-gradient(120deg,orange,#ea9a06)'
}

  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='w-[80px] h-auto justify-between items-center px-[12px] py-[10px] bg-light1 rounded-[20px] flex'>
            <span className='bounce w-[10px] h-[10px] rounded-[50%]' style={style}></span>
            <span className='bounce bounce2 w-[10px] h-[10px] rounded-[50%]' style={style}></span>
            <span className='bounce bounce3 w-[10px] h-[10px] rounded-[50%]' style={style}></span>
            <span className='bounce bounce4 w-[10px] h-[10px] rounded-[50%]' style={style}></span>
        </div>
    </div>
  )
}
