'use client'
import React from 'react'
import Image from 'next/image';
import image13 from './image/image13.png';
import image17 from './image/image17.png';
import image15 from './image/image15.png';
import image16 from './image/image16.png';

const Page4 = () => {
  return (
   <div>
    <div className='bg-black width: 1920px height: 832px;'>
        <div className='flex  px-0 flex-wrap overflow-hidden '>
            <div className='image13 w-[615px]  '>
                <Image className='h-full w-full block' src={image13} alt='' />
            </div>

            <div className='justify-end items-center'>
                <h2 className='textpage4h2 p-3 pt-6'>
                    Secure funding with us <br /> all in one tools
                </h2>
                <h1 className='h1tagpage4 text-[#9C9D9F] text-[20px] font-normal p-3'>
                  Don’t let your trading skills go unrewarded. prove yourself and secure <br/> funding with our risk-free plans.
                </h1>

                <div className='grid grid-cols-2 gap-y-[20px] p-4'>
                    <div className='flex gap-[10px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                            <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Account metrics
                    </div>

                    <div className='flex gap-[10px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                            <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Account analysis
                    </div>

                    <div className='flex gap-[10px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                            <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Trading journal
                    </div>

                    <div className='flex gap-[10px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                            <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Risk management calculators
                    </div>

                     <div className='flex gap-[10px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                            <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Economic calendar
                    </div>

                     <div className='flex gap-[10px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                            <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Personal Wallet
                    </div>

                     <div className='flex gap-[10px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                            <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Personal Wallet
                    </div>

                     <div className='flex gap-[10px] items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                            <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Affiliate portal
                    </div>
                    
                </div>
                 <button className='buttondesgn '>Start CTI Challenge
                    </button>
               
            </div>
        </div>


    </div>
    <div>

 <div className="bg2page4 grid lg:grid-cols-3 gap-4 m-10 rounded-2xl ">
                        <div className=" lg:col-span-2 h-[479px] rounded-[20px] relative">
                            <Image className="grayscale  w-full h-full object-cover rounded-[20px] border-1 border-red-600 " src={image17} alt="Image 14" />
                            <div className='absolute bottom-0 ml-[18px] sm:ml-[20px] md:ml-[24px] lg:ml-[28px] xl:ml-[32px] mb-[20px] sm:mb-[24px] md:mb-[28px] lg:mb-[32px] xl:mb-[37px]'>
                            <h3 className='fastscaling'>The Fastest Scaling</h3>
                            <p className='atourprop mt-[16px] sm:mt-[20px] lg:mt-[24px] mb-[18px] sm:mb-[20px] md:mb-[24px] lg:mb-[28px] xl:mb-[32px] lg:mr-[15%] mr-[18px] sm:mr-[20px] md:mr-[24px]'>At our prop firm, sky traders earn up to 100% of simulated profits with no complicated time limits. We double your account balance each time you hit a scaling objective.</p>
                            <button className='startsky'>Start Sky Challenge <svg className='-ml-[1px] opacity-100 group-hover:opacity-100 group-hover:ml-0 duration-200' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.43 5.93018L20.5 12.0002L14.43 18.0702" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                </button>  
                                </div> 
                            </div>
                        <div className="bg2page4 lg:col-span-1 h-[479px] rounded-[20px] relative border-1 border-red-600 grayscale">
                            <Image className="  h-full w-full object-cover rounded-[20px] " src={image15} alt="Image 15" />
                            <div className='absolute bottom-0 ml-[18px] sm:ml-[20px] md:ml-[24px] lg:ml-[28px] xl:ml-[32px] mb-[20px] sm:mb-[24px] md:mb-[28px] lg:mb-[32px] xl:mb-[37px]'>
                            <h3 className='fastscaling'>Market News Report</h3>
                            <p className='atourprop mt-[16px] sm:mt-[20px] lg:mt-[24px] mb-[18px] sm:mb-[20px] md:mb-[24px] lg:mb-[28px] xl:mb-[32px] lg:mr-[15%] mr-[18px] sm:mr-[20px] md:mr-[24px] '>Get our FREE comprehensive fundamentals & technical news report to keep you up to date with the latest economic news.</p>
                            <button className='startsky'>Start Sky Challenge <svg className='-ml-[1px] opacity-100 group-hover:opacity-100 group-hover:ml-0 duration-200' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.43 5.93018L20.5 12.0002L14.43 18.0702" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.5 12H20.33" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </button>  
                            </div>
                        </div>
                    </div>

     <div>
                        <div className=' max-w-full overflow-x-hidden m-8 rounded-[20px] border-1 border-red-600 grayscale'>
                        <div className="   rounded-[20px] relative">
                            <Image className="  w-full h-full   grayscale " src={image16} alt="" />
                            <div className='absolute bottom-0 ml-[18px] sm:ml-[20px] md:ml-[24px] lg:ml-[28px] xl:ml-[32px] mb-[20px] sm:mb-[24px] md:mb-[28px] lg:mb-[32px] xl:mb-[37px]'>
                            <h3 className='fastscaling'>SPF Academy</h3>
                            <p className='atourprop mt-[16px] sm:mt-[20px] lg:mt-[24px] mb-[18px] sm:mb-[20px] md:mb-[24px] lg:mb-[28px] xl:mb-[32px] lg:mr-[40%] mr-[18px] sm:mr-[20px] md:mr-[24px]'>Regardless of your experience, our prop firm offers exclusive courses to help traders develop the skills they need to succeed and earn rewards, covering essential topics like risk management, trading strategies, and psychology.</p> 
                                </div> 
                            </div>
                        </div>
                    </div>                 

</div>



</div>

  )
}

export default Page4
