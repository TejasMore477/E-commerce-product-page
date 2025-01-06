import React from 'react'

function Details() {
  return (
    <div className='w-full h-full px-5 py-6'>
        <h2 className='text-[4.3vw] uppercase font-semibold text-Dark_grayish_blue'>Sneaker Company</h2>
        <h1 className='text-[8vw] leading-none py-3 font-bold'>Fall Limited Edition Sneakers</h1>
        <p className='text-[4vw] font-semibold text-Dark_grayish_blue pb-5'> These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='flex items-center justify-between'>
            <div className='flex gap-3 items-center'>
            <h1 className='text-[10vw] font-bold'> $125.00</h1>
            <h2 className='bg-Very_dark_blue text-white text-[5vw] font-semibold h-fit py-1 px-2 rounded-lg'>  50%</h2>
            </div>
            <h2 className='text-[5.3vw] text-Dark_grayish_blue font-semibold line-through'>  $250.00</h2>
        </div>
    </div>
  )
}

export default Details