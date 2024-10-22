import React from 'react'
import { FiSearch } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Navbar() {
  return (
    <div className='w-full flex items-center justify-between bg-[#023a15] px-[10em] pt-[2em]'>
        <div className='Logo'>
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
        </div>
        <div className='Links text-gray-500 flex gap-[3.5em]'>
          <a className='text-white' href="#">Home</a>
          <a className='hover:text-white' href="#">About</a>
          <a className='hover:text-white flex items-end gap-1' href="#">Services <IoIosArrowDown /></a>
          <a className='hover:text-white flex items-end gap-1' href="#">Pages <IoIosArrowDown /></a>
          <a className='hover:text-white flex items-end gap-1' href="#">Contact</a>
          </div>

          <div className='iconset flex items-center gap-7'>
          <FiSearch className='text-white font-bold text-2xl'/>
          <MdOutlineMenu className='text-white text-4xl '/>
          </div>

        </div>

  )
}

export default Navbar