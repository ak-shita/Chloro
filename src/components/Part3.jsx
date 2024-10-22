import React from 'react'
import { SlArrowRight } from "react-icons/sl";

function Part3() {
  return (
    <div className='w-full h-[33em] bg-[#023a15] px-[10em] flex'>
        <div className='text w-[25%] mt-[9em]'>
            <h2 className='text-5xl font-cormorant text-white leading-snug '>Featured Product</h2>
            <p className='text-white mt-[1em]'>Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Ut elit tellus.</p>
            <button className='mt-[4em] bg-white py-4 px-9 text-black rounded-full font-semibold text-sm flex items-center gap-2'><SlArrowRight />SHOP NOW</button>
        </div>

        <div className=''>
        <div className='flex gap-10 ml-10 mt-[9em]'>
            <img className='object-cover w-[300px] h-[290px] rounded-tl-[50%] rounded-tr-[50%]' src='https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/composition-of-a-brown-glass-dropper-bottle-with-a-NWSPPKG.jpg'></img>
            <img className='object-cover w-[300px] h-[290px] rounded-tl-[50%] rounded-tr-[50%]' src='https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/top-view-of-coconut-oil-in-bottle-on-coconut-half-VTN4936.jpg'></img>
            <img className='object-cover w-[300px] h-[290px] rounded-tl-[50%] rounded-tr-[50%]' src='https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg'></img>
        </div>
        </div>
    </div>
  )
}

export default Part3