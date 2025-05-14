import React from 'react'
import Image from 'next/image';
import image2 from './image/image2.png';

const Heroarea = () => {
  return (
    <div>
      <div className='relative z-[2] overflow-hidden'>
              
              <div className='w-full flex felx-center justify-center'>
                <div  className='grid grid-cols-1 items-center'>
                  <div className='flex items-center flex-col justify-center'>
                    <p class="writing text-sm uppercase tracking-wider my-4 mt-6">Leading Prop Firm Since 2018</p>
                    <h2 className='htag tradines pt-2 2xl:text-[61px]  text-center  '>Your reliable partner to<br/> risk-free funding</h2>
                    <p className='ptag text-center mt-5'>We help traders without capital earn rewards of up to 100% simulated profits
                    <br className=''/> using our prop firm’s demo accounts—with no liability for risk.</p>
                    <div className='  flex-col flex items-center justify-center '>
                      <button className='buttondesgn cursor-pointer flex items-center justify-center text-black xl:text-[15px]  mt-5 '>
                      START TRADING
                      </button>
                      <div className=''>
                        
                        <Image className='imageonee w-full -z-[1] mt-[-180px]' src={image2} alt=''/>
                       
                      </div>
                    </div>
                    
                  </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Heroarea
