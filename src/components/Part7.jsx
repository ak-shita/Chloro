import React from 'react'
import { SlArrowRight } from "react-icons/sl";

function Part7() {
  return (
    <div className=' flex w-full items-center h-[115vh] gap-12 bg-[#fcf5f3] px-[10em] pt-[.5em] relative'>
        <div className='images w-[55%]'>
            <img className='w-[800px] rounded-tr-[300px] rounded-br-[300px]' src='https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/brown-D9SR4HS-1024x512.jpg'></img>
            <img className='w-[800px] rounded-tl-[300px] rounded-bl-[300px] mt-[2em]' src='https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/woman-holding-grapefruit-HV8L8KM-1024x512.jpg'></img>
            <img className='w-[180px] top-[7em] left-[7em] absolute' src='https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/Asset-1_5-1024x903.png'></img>     
        </div>
        <div className='text w-[45%] pl-[1.5em]'>
            <h2 className='text-[#023a15] font-cormorant text-6xl'>Expert Skincare For Your Beautiful Skin</h2>
            <p className='text-[#023a15] mt-10 leading-8 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan arcu est, at lobortis nulla porta eu. Aenean vel dolor enim. Etiam aliquam mauris eros, eget ornare diam volutpat eu. Fusce auctor pretium tellus vitae bibendum.</p>
            <p>Donec non vestibulum mauris.</p>
            <p className='text-[#023a15] mt-[1em]  text-lg leading-10'>Maecenas arcu eros.</p>
            <p className='text-[#023a15]  text-lg leading-10'>Sed pulvinar lorem.</p>
            <p className='text-[#023a15]  text-lg leading-10'>Nullam ut mauris tellus.</p>
            <p className='text-[#023a15]  text-lg leading-10'>Nunc vitae convallis justo.</p>
            <button className='mt-[2em] bg-[#023a15] py-4 px-9 text-white rounded-full font-semibold text-sm flex items-center gap-2'><SlArrowRight />LEARN MORE</button>
        </div>

    </div>
  )
}

export default Part7