import React from 'react'
import ImgCard from './ImgCard'
import { SlArrowRight } from "react-icons/sl";

function Part10() {
  return (
    <div className='w-full h-[150vh] bg-[#fcf5f3] px-[10em] pt-[5em] text-center'>
        <h2 className='text-[#023a15] font-cormorant text-6xl'>Blog and News</h2>
        <p className='text-[#023a15] mt-10 leading-8 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, {<br/>} luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className='flex items-center'>
            <ImgCard />
        </div>

        <h2 className='text-[#023a15] font-cormorant text-7xl mt-[1em]'>Get the latest updates about our products and services</h2>
        <div className='flex items-center justify-between m-auto mt-[8em] h-[4em] w-[40em] rounded-full border-[2px] border-green-800 pl-[1.5em] pr-[.5em]'>
            <h3 className='text-gray-300 font-'>Email</h3>
            <button className='bg-[#023a15] py-4 px-9 text-white rounded-full font-semibold text-sm flex items-center gap-2'><SlArrowRight />SEND</button>
        </div>
    </div>
  )
}

export default Part10