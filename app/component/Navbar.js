import React from 'react'
import Image from 'next/image'
import logo from './image/logo.png'


const Navbar = () => {
  return (
  <div>
      
 <header className=''>

  <div className="header flex justify-between items-center px-6 bg-gray-900 rounded-full mt-5 mx-10 ">
    <div className="brand">
      <Image
          src={logo} alt="Profile picture"
        width={100}              
        height={100}
      />
      
    </div >
      <nav className='flex items-center space-x-6 px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] py-6  '>
       
            <a href="Home" className='cursor-pointer flex items-center gap-[6px]'>Home</a>
            <a href="challenge" className='cursor-pointer flex items-center gap-[6px]'>Challenge</a>
            <a href="Instant Funding" className='cursor-pointer flex items-center gap-[6px]'>Instant Funding</a>
            <a href="About Us" className='cursor-pointer flex items-center gap-[6px]'>About Us</a>
            <a href="More" className='cursor-pointer flex items-center'>More</a>
     
    </nav>
     <ul>
    <button class="signup-btn bg-transparent border border bg-gray-400 text-white  py-1 px-5 rounded-3xl hover:bg-lime-300 hover:text-black">SIGN UP</button>
    </ul>
  </div>

 </header>

</div>



  )
}

export default Navbar
