import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-[#023a15]'>
    <div className='w-full h-[47vh] pt-[5em] px-[10em] bg-[#023a15] flex justify-between '>
        <div className='text-white'>
        <img 
        fetchpriority="high"
        src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/logo_Asset-1-1024x283.png"
        alt="Logo"
        srcSet="
          https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/logo_Asset-1-1024x283.png 1024w,
          https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/logo_Asset-1-300x83.png 300w,
          https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/logo_Asset-1-768x213.png 768w,
          https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/logo_Asset-1-1536x425.png 1536w,
          https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/logo_Asset-1-800x221.png 800w,
          https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/logo_Asset-1.png 1626w"
        sizes="(max-width: 800px) 100vw, 800px"
        className="w-[6.3em] h-auto max-w-[800px] elementor-animation-grow"
      />
      <p className='text-white mt-10 leading-8 text-normal'>Lorem ipsum dolor sit amet,{<br/>} consectetur adipiscing elit.{<br/>} Nullam in nibh vehicula.</p>
        </div>

        <div className='text-white '>
            <h2 className='text-white font-cormorant text-4xl'>Get In Touch</h2>
            <p className='flex items-center text-white mt-5 leading-8 text-normal'><SlLocationPin className='mr-3 text-green-600 text-xl'/>140 Hope Street, Plano</p>
            <p className='flex items-center text-white leading-8 text-normal'><IoMailOpenOutline className='mr-3 text-green-600 text-xl'/>chloro@mail.com</p>
            <p className='flex items-center text-white leading-8 text-normal'><IoCallOutline className='mr-3 text-green-600 text-xl'/>+1 234 567 890</p>
            <p className='flex items-center text-white leading-8 text-normal'><FaRegClock className='mr-3 text-green-600 text-xl'/>09.00 AM - 17.00 PM</p>
        </div>
        <div className='text-white leading-8'>
        <h2 className='text-white font-cormorant text-4xl'>Quicklinks</h2>
        <p className='text-white mt-5  text-normal'>Home</p>
        <p className='text-white text-normal'>About</p>
        <p className='text-white text-normal'>Services</p>
        <p className='text-white text-normal'>FAQs</p>
        <p className='text-white text-normal'>Contact</p>
        </div>
        <div className='text-white'>
        <h2 className='text-white font-cormorant text-4xl'>Location</h2>
        <p className='text-white mt-10 leading-8 text-normal'>Lorem ipsum dolor sit amet,{<br/>} consectetur adipiscing elit.{<br/>} Nullam in nibh vehicula.</p>
        </div>

    </div>

<div className='flex items-center justify-between h-[8vh] ml-[10em] mr-[10em] border-t border-t-[.05px] border-t-gray-500'>
<h2 className='text-white '>Copyright © 2021 ASK Project</h2>
<div className='iconset flex gap-7 items-center text-white'>
<FaFacebook />
<FaTwitter />
<FaYoutube />
<FaLinkedin />
</div>
</div>
</div>
  )
}

export default Footer