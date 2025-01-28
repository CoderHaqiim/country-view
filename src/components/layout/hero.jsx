import React from 'react'

export default function Hero() {
  return (
    <section className='hero h-[200px] relative flex after:w-full after:h-full after:absolute after:opacity-[50%] after:top-0 after-left-0 items-center w-full
    lg:h-[500px]'>
        <header className='banner bg-[url("/web-banner.jpg")] bg-cover bg-center lg:px-lp p-sp w-full h-full flex items-center'>
            <h1 className="lg:text-[3.5rem] text-[1.5rem] w-full lg:w-2/3 z-[3] text-white font-[700] leading-[1.3]">
                Beautiful world, beautiful people, beautiful cultures.
            </h1>
        </header>
    </section>
  )
}
