'use client'
import React from 'react'

const page1 = () => {
  return (
    <div className='bg-black overflow-hidden '>
      <h2 className='htagtwo text-[36px] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[82px] text-center mt-15'>
        Funding programs
      </h2>
      <p className='ptagtwo 2xl:pb-[80px] text-center mt-5'>
        Don&apos;t let your trading skills go unrewarded. Prove yourself <br className='' /> and secure funding with our risk-free plans.
      </p>

      <div className='flex justify-center items-center gap-[10px] lg:gap-[16px]'>
        <button className='buttukak mb-10 py-1 px-3 text-[24px] hover:bg-background'>Challenge</button>
        <button className='buttondsed mb-10 py-1 px-3 text-[24px] hover:bg-background'>Instant Funding</button>
      </div>
    </div>
  )
}

export default page1

