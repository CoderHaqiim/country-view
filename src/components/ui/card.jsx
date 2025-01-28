"use client"
import Heart from './heart'
import Link from 'next/link'

export default function Card({name, image, id}) {

  return (
    <Link href={`/country/${id}`} className='w-[300px] relative h-[230px] relative cursor-pointer bg-grey transition-[.7s] transform lg:hover:scale-105 rounded-r10 p-[10px] lg:w-[200px] lg:h-[150px]'>
        <div className='flag w-full h-[78%] lg:h-[75%] rounded-[5px] mb-[10px]'>
          <img  className="w-full rounded-[inherit] h-full" src={image} alt="flag" />
        </div>
        <div className='lg:text-[0.8rem] text-[1rem] tracking-[1] leading-[0.9]'>{name}</div>
        <Heart id={id}/>
    </Link>
  )
}
