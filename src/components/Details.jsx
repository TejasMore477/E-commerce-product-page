import React from 'react'

function Details() {
  return (
    <div className='w-full px-10 p-5 md:pb-3 pb-6'>
        <h2 className='lg:text-[1.2vw] md:text-[1.8vw] sm:text-[2vw] text-[3.5vw] uppercase font-semibold text-Dark_grayish_blue'>Sneaker Company</h2>
        <h1 className='lg:text-[2.5vw] md:text-[3.4vw] sm:text-[4.4vw] text-[7vw] leading-none md:py-2 py-3 font-bold'>Fall Limited Edition Sneakers</h1>
        <p className='lg:text-[1.2vw] md:text-[1.8vw] sm:text-[1.8vw] text-[2.8vw] font-semibold text-Dark_grayish_blue md:pb-2 pb-3'> These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='flex lg:flex-col lg:items-start items-center justify-between md:justify-start md:gap-3 lg:gap-0'>
            <div className='flex gap-3 items-center'>
            <h1 className='lg:text-[2.4vw] md:text-[3.4vw] sm:text-[4.5vw] text-[8vw] font-bold'> $125.00</h1>
            <h2 className='lg:text-[1.3vw] md:text-[1.5vw] bg-Very_dark_blue text-white sm:text-[2.5vw] text-[4vw] font-semibold h-fit py-1 px-2 rounded-lg'>  50%</h2>
            </div>
            <h2 className='lg:text-[1.5vw] md:text-[2.5vw] sm:text-[3.5vw] text-[5.3vw] text-Dark_grayish_blue font-semibold line-through'>  $250.00</h2>
        </div>
    </div>
  )
}

export default Details