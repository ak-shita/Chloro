import React from 'react'
import Navbar from './Navbar'
import { SlArrowRight } from "react-icons/sl";

function Hero() {
  return (
    <div className='w-full h-[84vh] bg-[#023a15] px-[10em] pt-[7em] flex overflow-hidden relative'>
      <div className='text text-white w-[30em]'>
        <h2 className='text-7xl font-cormorant leading-tight tracking-normal'>A whole <span className='font-Elementskit'>new world</span>, a whole new look</h2>
        <p className='mt-[2em]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <button className='flex items-center gap-2 mt-[4em] bg-white py-4 px-9 text-black rounded-full font-semibold text-sm'><SlArrowRight className='font-2xl' />DISCOVER MORE</button>
      </div>

      <div className='images bg-yellow-400 ml-44'>         
          <div className='flex gap-10 items-center'>
            <img className='absolute z-10 w-[100em] -right-[.75em] -top-[17em]' src='https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/Artboard-2overlay_.png'></img>
            <img className="absolute right-[6.5em] top-[5em] z-20 w-[323px] h-[505px] object-cover rounded-tl-[300px] rounded-tr-[300px]" src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/12/anthony-tran-Sd9A6NVHsd4-unsplash3.jpeg"></img>
            <img className="absolute right-[30em] top-[5em] z-20 w-[323px] h-[505px] object-cover rounded-tl-[300px] rounded-tr-[300px]" src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/12/kalos-skincare-jyKa0Ynxvow-unsplash.jpeg"></img>
          </div>
      
      </div>
    </div>
  )
}

export default Hero