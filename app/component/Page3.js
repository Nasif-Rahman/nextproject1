'use client'

import React, { useEffect, useRef } from "react";

import Image from 'next/image';
import image3 from './image/image3.png';
import image4 from "./image/image4.png";
import image5 from "./image/image5.png";
import image6 from "./image/image6.png";
import image7 from "./image/image7.png";
import image8 from "./image/image8.png";
import image9 from "./image/image9.png";
import image10 from "./image/image10.png";
import image11 from "./image/image11.png";
import image12 from "./image/image12.png";

const images = [
  { src: image4, caption: "Image 1" },
  { src: image5, caption: "Image 2" },
  { src: image6, caption: "Image 3" },
  { src: image7, caption: "Image 4" },
  { src: image8, caption: "Image 5" },
  { src: image9, caption: "Image 6" },
  { src: image10, caption: "Image 7" },
  { src: image11, caption: "Image 8" },
  { src: image12, caption: "Image 9" },
];




const Page3 = () => {

     
      const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let clone = slider.innerHTML;
    slider.innerHTML += clone; // Duplicate logos for seamless looping
  }, []);

  return (
    <div >
      <div className='bgpage3 flex m-12 '>
        <div className='p-12 '>
       <h2 className='texth2  '>
        Why trading with  our prop firm
       </h2>
       <div className='grid grid-cols-2 gap-[24px] p-6'>
       <div className='flex gap-[10px] justify-start items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                        <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Get paid within 24 hours.</div>

       <div className='flex gap-[10px] justify-start items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                        <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Get paid within 24 hours.</div>  
       
      <div className='flex gap-[10px] justify-start items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                        <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Get paid within 24 hours.</div>

      <div className='flex gap-[10px] justify-start items-center'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0C8.8174 0 5.76515 1.26428 3.51472 3.51472C1.26428 5.76515 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76515 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76515 20.4853 3.51472ZM12 22.3916C6.27017 22.3916 1.60839 17.7299 1.60839 12C1.60839 6.27007 6.27007 1.60839 12 1.60839C17.7299 1.60839 22.3916 6.27007 22.3916 12C22.3916 17.7299 17.7299 22.3916 12 22.3916Z" fill="white" fill-opacity="0.2"/>
                        <path d="M10.8987 13.809C10.5082 14.1995 9.87502 14.1995 9.4845 13.809L7.07038 11.3949C6.75633 11.0809 6.24716 11.0809 5.93311 11.3949C5.61906 11.709 5.61906 12.2181 5.93311 12.5322L9.4845 16.0836C9.87502 16.4741 10.5082 16.4741 10.8987 16.0836L18.0418 8.94055C18.3558 8.62649 18.3558 8.11729 18.0418 7.80324C17.7277 7.4892 17.2185 7.4892 16.9045 7.80325L10.8987 13.809Z" fill="#FEFFFF"/>
                        </svg> Get paid within 24 hours.</div>

     

     </div>

     <div className='bordershdw my-[32px]'></div>

           <div className='flex items-center gap-[16px]'>
                        <div className='flex items-center gap-[16px]'>
                            <div className='flex items-center gap-[16px] '>
                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="46" height="46" rx="23" fill="url(#paint0_linear_564_1670)"/>
                            <rect x="0.5" y="0.5" width="46" height="46" rx="23" stroke="white" stroke-opacity="0.08"/>
                            <rect x="0.5" y="0.5" width="46" height="46" rx="23" stroke="url(#paint1_linear_564_1670)"/>
                            <path d="M19.667 13.9165V16.7915" stroke="#FEFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M27.333 13.9165V16.7915" stroke="#FEFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M15.3545 20.7114H31.6462" stroke="#FEFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M32.125 20.1459V28.2917C32.125 31.1667 30.6875 33.0834 27.3333 33.0834H19.6667C16.3125 33.0834 14.875 31.1667 14.875 28.2917V20.1459C14.875 17.2709 16.3125 15.3542 19.6667 15.3542H27.3333C30.6875 15.3542 32.125 17.2709 32.125 20.1459Z" stroke="#FEFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M27.0403 25.1291H27.0489" stroke="#FEFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M27.0403 28.0041H27.0489" stroke="#FEFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M23.4954 25.1291H23.504" stroke="#FEFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M23.4954 28.0041H23.504" stroke="#FEFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M19.9487 25.1291H19.9573" stroke="#FEFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M19.9482 28.0044H19.9568" stroke="#FEFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_564_1670" x1="0" y1="0" x2="54.1479" y2="10.6467" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0.02"/>
                            <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.02"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_564_1670" x1="36.7586" y1="23.5" x2="10.517" y2="23.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0"/>
                            <stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            <div className="flex flex-col gap-[16px]">
                                <h3 className='year6'>6 Years</h3>
                                <p className='since2018'>Since 2018.</p>
                            </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-[16px] '>
                            <div className='flex items-center gap-[16px]'>
                            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="46" height="46" rx="23" fill="url(#paint0_linear_564_1677)"/>
                            <rect x="0.5" y="0.5" width="46" height="46" rx="23" stroke="white" stroke-opacity="0.08"/>
                            <rect x="0.5" y="0.5" width="46" height="46" rx="23" stroke="url(#paint1_linear_564_1677)"/>
                            <path d="M29.2883 24.9853C28.8858 25.3782 28.6558 25.9437 28.7133 26.5474C28.7996 27.5824 29.7483 28.3395 30.7834 28.3395H32.6042V29.4799C32.6042 31.4637 30.9846 33.0833 29.0008 33.0833H19.3121C19.6092 32.8341 19.8679 32.5274 20.0692 32.1824C20.4238 31.6074 20.625 30.927 20.625 30.2083C20.625 28.0903 18.9096 26.3749 16.7917 26.3749C15.8908 26.3749 15.0571 26.6912 14.3958 27.2183V23.0303C14.3958 21.0466 16.0154 19.427 17.9992 19.427H29.0008C30.9846 19.427 32.6042 21.0466 32.6042 23.0303V24.4103H30.6683C30.1317 24.4103 29.6429 24.6212 29.2883 24.9853Z" stroke="#FEFFFF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M14.3958 23.893V19.5135C14.3958 18.373 15.0954 17.3572 16.1592 16.9547L23.7683 14.0797C24.9567 13.6293 26.2313 14.5109 26.2313 15.7855V19.4272" stroke="#FEFFFF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M33.62 25.3879V27.3621C33.62 27.8892 33.1983 28.3204 32.6617 28.3395H30.7833C29.7483 28.3395 28.7996 27.5825 28.7133 26.5475C28.6558 25.9437 28.8858 25.3783 29.2883 24.9854C29.6429 24.6212 30.1317 24.4104 30.6683 24.4104H32.6617C33.1983 24.4296 33.62 24.8608 33.62 25.3879Z" stroke="#FEFFFF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.4" d="M18.7083 23.5H25.4167" stroke="#FEFFFF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.625 30.2083C20.625 30.9271 20.4238 31.6075 20.0692 32.1825C19.8679 32.5275 19.6092 32.8342 19.3121 33.0833C18.6413 33.6871 17.7596 34.0417 16.7917 34.0417C15.3925 34.0417 14.1754 33.2942 13.5142 32.1825C13.1596 31.6075 12.9583 30.9271 12.9583 30.2083C12.9583 29.0008 13.5142 27.9179 14.3958 27.2183C15.0571 26.6913 15.8908 26.375 16.7917 26.375C18.9096 26.375 20.625 28.0904 20.625 30.2083Z" stroke="#FEFFFF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.2967 30.2084L16.2454 31.1572L18.2867 29.2693" stroke="#FEFFFF" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_564_1677" x1="0" y1="0" x2="54.1479" y2="10.6467" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0.02"/>
                            <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                            <stop offset="1" stop-color="white" stop-opacity="0.02"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_564_1677" x1="36.7586" y1="23.5" x2="10.517" y2="23.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" stop-opacity="0"/>
                            <stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                            </svg>
                            <div className="flex flex-col gap-[16px]">
                                <h3 className='year6'>6 Years</h3>
                                <p className='since2018'>Since 2018.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                   <button className='buttondesgn '>Start CTI Challenge
                    </button>

       </div>



       <div className='relative flex w-full '>
<Image className='image3 absolute bottom-0 right-20 ' src={image3} alt='Page 3 Image  ' width={615} height={563}    />
  
  </div>

  


      </div>
      



     <div className='grid grid-cols-3 p-4 m-12 gap-[24px] '>
          <div className=' salarycard gap-[16px]'>
                            <div> 
                                <svg className='w-[50px] ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="31.5" fill="url(#paint0_linear_564_1689)"/>
                                <circle cx="32" cy="32" r="31.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="32" cy="32" r="31.5" stroke="url(#paint1_linear_564_1689)"/>
                                <path d="M28 41.3333C28 42.3333 27.72 43.28 27.2267 44.08C26.3067 45.6267 24.6133 46.6667 22.6667 46.6667C20.72 46.6667 19.0267 45.6267 18.1067 44.08C17.6133 43.28 17.3333 42.3333 17.3333 41.3333C17.3333 38.3867 19.72 36 22.6667 36C25.6133 36 28 38.3867 28 41.3333Z" stroke="#FEFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.5867 41.3333L21.9067 42.6532L24.7467 40.0266" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M39.6667 25.4C39.3467 25.3467 39.0133 25.3334 38.6667 25.3334H25.3333C24.96 25.3334 24.6 25.3601 24.2533 25.4134C24.44 25.0401 24.7067 24.6934 25.0267 24.3734L29.36 20.0267C31.1867 18.2134 34.1467 18.2134 35.9733 20.0267L38.3067 22.3867C39.16 23.2267 39.6133 24.2934 39.6667 25.4Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M45.3333 31.9999V38.6666C45.3333 42.6666 42.6667 45.3333 38.6667 45.3333H26.1733C26.5867 44.9866 26.9467 44.5599 27.2267 44.0799C27.72 43.2799 28 42.3333 28 41.3333C28 38.3866 25.6133 35.9999 22.6667 35.9999C21.0667 35.9999 19.64 36.7066 18.6667 37.8132V31.9999C18.6667 28.3733 20.8533 25.8399 24.2533 25.4132C24.6 25.3599 24.96 25.3333 25.3333 25.3333H38.6667C39.0133 25.3333 39.3467 25.3466 39.6667 25.3999C43.1067 25.7999 45.3333 28.3466 45.3333 31.9999Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M45.3333 32.6667H41.3333C39.8667 32.6667 38.6667 33.8667 38.6667 35.3334C38.6667 36.8001 39.8667 38.0001 41.3333 38.0001H45.3333" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_564_1689" x1="0" y1="0" x2="73.7333" y2="14.4976" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.02"/>
                                <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.02"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_564_1689" x1="50.0543" y1="32" x2="14.321" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>
                            <div>
                                <h3 className='salarypotential'>Salary Potential</h3>
                                <p className='norestriction'>No restrictions on any news, weekend, or overnight trading.</p>
                            </div>
                        </div>

          <div className=' salarycard gap-[16px] '>
                            <div> 
                                <svg className='w-[50px] ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="31.5" fill="url(#paint0_linear_564_1689)"/>
                                <circle cx="32" cy="32" r="31.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="32" cy="32" r="31.5" stroke="url(#paint1_linear_564_1689)"/>
                                <path d="M28 41.3333C28 42.3333 27.72 43.28 27.2267 44.08C26.3067 45.6267 24.6133 46.6667 22.6667 46.6667C20.72 46.6667 19.0267 45.6267 18.1067 44.08C17.6133 43.28 17.3333 42.3333 17.3333 41.3333C17.3333 38.3867 19.72 36 22.6667 36C25.6133 36 28 38.3867 28 41.3333Z" stroke="#FEFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.5867 41.3333L21.9067 42.6532L24.7467 40.0266" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M39.6667 25.4C39.3467 25.3467 39.0133 25.3334 38.6667 25.3334H25.3333C24.96 25.3334 24.6 25.3601 24.2533 25.4134C24.44 25.0401 24.7067 24.6934 25.0267 24.3734L29.36 20.0267C31.1867 18.2134 34.1467 18.2134 35.9733 20.0267L38.3067 22.3867C39.16 23.2267 39.6133 24.2934 39.6667 25.4Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M45.3333 31.9999V38.6666C45.3333 42.6666 42.6667 45.3333 38.6667 45.3333H26.1733C26.5867 44.9866 26.9467 44.5599 27.2267 44.0799C27.72 43.2799 28 42.3333 28 41.3333C28 38.3866 25.6133 35.9999 22.6667 35.9999C21.0667 35.9999 19.64 36.7066 18.6667 37.8132V31.9999C18.6667 28.3733 20.8533 25.8399 24.2533 25.4132C24.6 25.3599 24.96 25.3333 25.3333 25.3333H38.6667C39.0133 25.3333 39.3467 25.3466 39.6667 25.3999C43.1067 25.7999 45.3333 28.3466 45.3333 31.9999Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M45.3333 32.6667H41.3333C39.8667 32.6667 38.6667 33.8667 38.6667 35.3334C38.6667 36.8001 39.8667 38.0001 41.3333 38.0001H45.3333" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_564_1689" x1="0" y1="0" x2="73.7333" y2="14.4976" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.02"/>
                                <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.02"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_564_1689" x1="50.0543" y1="32" x2="14.321" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>
                            <div>
                                <h3 className='salarypotential'>Trade Without Restrictions</h3>
                                <p className='norestriction'>No restrictions on any news, weekend, or overnight trading.</p>
                            </div>
                        </div>
           <div className='  salarycard gap-[16px]'>
                            <div> 
                                <svg className='w-[50px] ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="31.5" fill="url(#paint0_linear_564_1689)"/>
                                <circle cx="32" cy="32" r="31.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="32" cy="32" r="31.5" stroke="url(#paint1_linear_564_1689)"/>
                                <path d="M28 41.3333C28 42.3333 27.72 43.28 27.2267 44.08C26.3067 45.6267 24.6133 46.6667 22.6667 46.6667C20.72 46.6667 19.0267 45.6267 18.1067 44.08C17.6133 43.28 17.3333 42.3333 17.3333 41.3333C17.3333 38.3867 19.72 36 22.6667 36C25.6133 36 28 38.3867 28 41.3333Z" stroke="#FEFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.5867 41.3333L21.9067 42.6532L24.7467 40.0266" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M39.6667 25.4C39.3467 25.3467 39.0133 25.3334 38.6667 25.3334H25.3333C24.96 25.3334 24.6 25.3601 24.2533 25.4134C24.44 25.0401 24.7067 24.6934 25.0267 24.3734L29.36 20.0267C31.1867 18.2134 34.1467 18.2134 35.9733 20.0267L38.3067 22.3867C39.16 23.2267 39.6133 24.2934 39.6667 25.4Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M45.3333 31.9999V38.6666C45.3333 42.6666 42.6667 45.3333 38.6667 45.3333H26.1733C26.5867 44.9866 26.9467 44.5599 27.2267 44.0799C27.72 43.2799 28 42.3333 28 41.3333C28 38.3866 25.6133 35.9999 22.6667 35.9999C21.0667 35.9999 19.64 36.7066 18.6667 37.8132V31.9999C18.6667 28.3733 20.8533 25.8399 24.2533 25.4132C24.6 25.3599 24.96 25.3333 25.3333 25.3333H38.6667C39.0133 25.3333 39.3467 25.3466 39.6667 25.3999C43.1067 25.7999 45.3333 28.3466 45.3333 31.9999Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M45.3333 32.6667H41.3333C39.8667 32.6667 38.6667 33.8667 38.6667 35.3334C38.6667 36.8001 39.8667 38.0001 41.3333 38.0001H45.3333" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_564_1689" x1="0" y1="0" x2="73.7333" y2="14.4976" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.02"/>
                                <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.02"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_564_1689" x1="50.0543" y1="32" x2="14.321" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>
                            <div>
                                <h3 className='salarypotential'>First Payout After 8 Days</h3>
                                <p className='norestriction'>No restrictions on any news, weekend, or overnight trading.</p>
                            </div>
                        </div>
           <div className=' salarycard gap-[16px]'>
                            <div> 
                                <svg className='w-[50px] ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="31.5" fill="url(#paint0_linear_564_1689)"/>
                                <circle cx="32" cy="32" r="31.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="32" cy="32" r="31.5" stroke="url(#paint1_linear_564_1689)"/>
                                <path d="M28 41.3333C28 42.3333 27.72 43.28 27.2267 44.08C26.3067 45.6267 24.6133 46.6667 22.6667 46.6667C20.72 46.6667 19.0267 45.6267 18.1067 44.08C17.6133 43.28 17.3333 42.3333 17.3333 41.3333C17.3333 38.3867 19.72 36 22.6667 36C25.6133 36 28 38.3867 28 41.3333Z" stroke="#FEFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.5867 41.3333L21.9067 42.6532L24.7467 40.0266" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M39.6667 25.4C39.3467 25.3467 39.0133 25.3334 38.6667 25.3334H25.3333C24.96 25.3334 24.6 25.3601 24.2533 25.4134C24.44 25.0401 24.7067 24.6934 25.0267 24.3734L29.36 20.0267C31.1867 18.2134 34.1467 18.2134 35.9733 20.0267L38.3067 22.3867C39.16 23.2267 39.6133 24.2934 39.6667 25.4Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M45.3333 31.9999V38.6666C45.3333 42.6666 42.6667 45.3333 38.6667 45.3333H26.1733C26.5867 44.9866 26.9467 44.5599 27.2267 44.0799C27.72 43.2799 28 42.3333 28 41.3333C28 38.3866 25.6133 35.9999 22.6667 35.9999C21.0667 35.9999 19.64 36.7066 18.6667 37.8132V31.9999C18.6667 28.3733 20.8533 25.8399 24.2533 25.4132C24.6 25.3599 24.96 25.3333 25.3333 25.3333H38.6667C39.0133 25.3333 39.3467 25.3466 39.6667 25.3999C43.1067 25.7999 45.3333 28.3466 45.3333 31.9999Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M45.3333 32.6667H41.3333C39.8667 32.6667 38.6667 33.8667 38.6667 35.3334C38.6667 36.8001 39.8667 38.0001 41.3333 38.0001H45.3333" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_564_1689" x1="0" y1="0" x2="73.7333" y2="14.4976" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.02"/>
                                <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.02"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_564_1689" x1="50.0543" y1="32" x2="14.321" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>
                            <div>
                                <h3 className='salarypotential'>Scale To $4,000,000</h3>
                                <p className='norestriction'>No restrictions on any news, weekend, or overnight trading.</p>
                            </div>
                        </div>

            <div className='  salarycard gap-[16px]'>
                            <div> 
                                <svg className='w-[50px] ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="31.5" fill="url(#paint0_linear_564_1689)"/>
                                <circle cx="32" cy="32" r="31.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="32" cy="32" r="31.5" stroke="url(#paint1_linear_564_1689)"/>
                                <path d="M28 41.3333C28 42.3333 27.72 43.28 27.2267 44.08C26.3067 45.6267 24.6133 46.6667 22.6667 46.6667C20.72 46.6667 19.0267 45.6267 18.1067 44.08C17.6133 43.28 17.3333 42.3333 17.3333 41.3333C17.3333 38.3867 19.72 36 22.6667 36C25.6133 36 28 38.3867 28 41.3333Z" stroke="#FEFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.5867 41.3333L21.9067 42.6532L24.7467 40.0266" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M39.6667 25.4C39.3467 25.3467 39.0133 25.3334 38.6667 25.3334H25.3333C24.96 25.3334 24.6 25.3601 24.2533 25.4134C24.44 25.0401 24.7067 24.6934 25.0267 24.3734L29.36 20.0267C31.1867 18.2134 34.1467 18.2134 35.9733 20.0267L38.3067 22.3867C39.16 23.2267 39.6133 24.2934 39.6667 25.4Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M45.3333 31.9999V38.6666C45.3333 42.6666 42.6667 45.3333 38.6667 45.3333H26.1733C26.5867 44.9866 26.9467 44.5599 27.2267 44.0799C27.72 43.2799 28 42.3333 28 41.3333C28 38.3866 25.6133 35.9999 22.6667 35.9999C21.0667 35.9999 19.64 36.7066 18.6667 37.8132V31.9999C18.6667 28.3733 20.8533 25.8399 24.2533 25.4132C24.6 25.3599 24.96 25.3333 25.3333 25.3333H38.6667C39.0133 25.3333 39.3467 25.3466 39.6667 25.3999C43.1067 25.7999 45.3333 28.3466 45.3333 31.9999Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M45.3333 32.6667H41.3333C39.8667 32.6667 38.6667 33.8667 38.6667 35.3334C38.6667 36.8001 39.8667 38.0001 41.3333 38.0001H45.3333" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_564_1689" x1="0" y1="0" x2="73.7333" y2="14.4976" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.02"/>
                                <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.02"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_564_1689" x1="50.0543" y1="32" x2="14.321" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>
                            <div>
                                <h3 className='salarypotential'>Unlimited Time Limit</h3>
                                <p className='norestriction'>No restrictions on any news, weekend, or overnight trading.</p>
                            </div>
                        </div>

             <div className='  salarycard gap-[16px]'>
                            <div> 
                                <svg className='w-[50px] ' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="32" r="31.5" fill="url(#paint0_linear_564_1689)"/>
                                <circle cx="32" cy="32" r="31.5" stroke="white" stroke-opacity="0.08"/>
                                <circle cx="32" cy="32" r="31.5" stroke="url(#paint1_linear_564_1689)"/>
                                <path d="M28 41.3333C28 42.3333 27.72 43.28 27.2267 44.08C26.3067 45.6267 24.6133 46.6667 22.6667 46.6667C20.72 46.6667 19.0267 45.6267 18.1067 44.08C17.6133 43.28 17.3333 42.3333 17.3333 41.3333C17.3333 38.3867 19.72 36 22.6667 36C25.6133 36 28 38.3867 28 41.3333Z" stroke="#FEFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.5867 41.3333L21.9067 42.6532L24.7467 40.0266" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M39.6667 25.4C39.3467 25.3467 39.0133 25.3334 38.6667 25.3334H25.3333C24.96 25.3334 24.6 25.3601 24.2533 25.4134C24.44 25.0401 24.7067 24.6934 25.0267 24.3734L29.36 20.0267C31.1867 18.2134 34.1467 18.2134 35.9733 20.0267L38.3067 22.3867C39.16 23.2267 39.6133 24.2934 39.6667 25.4Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M45.3333 31.9999V38.6666C45.3333 42.6666 42.6667 45.3333 38.6667 45.3333H26.1733C26.5867 44.9866 26.9467 44.5599 27.2267 44.0799C27.72 43.2799 28 42.3333 28 41.3333C28 38.3866 25.6133 35.9999 22.6667 35.9999C21.0667 35.9999 19.64 36.7066 18.6667 37.8132V31.9999C18.6667 28.3733 20.8533 25.8399 24.2533 25.4132C24.6 25.3599 24.96 25.3333 25.3333 25.3333H38.6667C39.0133 25.3333 39.3467 25.3466 39.6667 25.3999C43.1067 25.7999 45.3333 28.3466 45.3333 31.9999Z" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path opacity="0.4" d="M45.3333 32.6667H41.3333C39.8667 32.6667 38.6667 33.8667 38.6667 35.3334C38.6667 36.8001 39.8667 38.0001 41.3333 38.0001H45.3333" stroke="#FEFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_564_1689" x1="0" y1="0" x2="73.7333" y2="14.4976" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0.02"/>
                                <stop offset="0.535" stop-color="white" stop-opacity="0.08"/>
                                <stop offset="1" stop-color="white" stop-opacity="0.02"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_564_1689" x1="50.0543" y1="32" x2="14.321" y2="32" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0"/>
                                <stop offset="0.51" stop-color="white" stop-opacity="0.4"/>
                                <stop offset="1" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                                </svg>
                            </div>
                            <div>
                                <h3 className='salarypotential'>Balance Based DD</h3>
                                <p className='norestriction'>No restrictions on any news, weekend, or overnight trading.</p>
                            </div>
                        </div>



     </div>
           
              <div className='py-[40px] md:py-[60px] lg:py-[90px] xl:py-[120px] 2xl:py-[154px]'>
                <div className="flex flex-row  items-center flex-wrap overflow-hidden px-[24px] sm:px-[0]">
                <div ref={sliderRef} className="flex animate-scroll items-center gap-[20px] lg:gap-[30px] 2xl:gap-[40px]">
                {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center feature w-[150px] ">
                    <Image
                        src={image.src}
                        alt={image.caption}
                        className="grayscale"
                        
                    />
                    </div>
                ))}
                </div></div>
                </div>
   

    </div>
  )
}


export default Page3
