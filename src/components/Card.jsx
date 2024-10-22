import React from 'react'
import { SlArrowRight } from "react-icons/sl";

function Card() {
  return (
    <div className='bg-[#023a15] w-[29em] h-[27em] absolute z-20 right-[14em] top-[27em] p-16'>
        <h2 className='text-white font-cormorant text-7xl'>Our Story</h2>
        <p className='text-white mt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan arcu est, at lobortis nulla porta eu. Aenean vel dolor enim. Etiam aliquam mauris eros.</p>
        <button className='mt-[3em] bg-white py-4 px-9 text-black rounded-full font-semibold text-sm lex items-center gap-2'><SlArrowRight />READ MORE</button>
        <img className='w-[200px] ml-64 -mt-12' src='https://askproject.net/chloro/wp-content/uploads/sites/23/2f021/08/Asset-2_5-1024x809.png'></img>
    </div>
  )
}

export default Card