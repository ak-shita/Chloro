import React from 'react'

function ImgCard() {
  return (
    <div className='flex gap-10 mt-20'>
       <div className='w-[24em] bg-[#023a15] p-[1em] text-left'>
        <img src='https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/allef-vinicius-_H4iwsvqKMI-unsplash.jpg'></img>
        <p className='text-white font-cormorant text-2xl font-semibold mt-[.75em] mb-[1.5em]'>A photographer shows the beauty of their transition</p>
        <a className='underline text-white text-xs font-semibold' href='#'>READ MORE</a>
       </div>

       <div className='w-[24em] bg-[#023a15] p-[1em] text-left'>
        <img src='https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg'></img>
        <p className='text-white font-cormorant text-2xl font-semibold mt-[.75em] mb-[1.5em]'>Natural Look: The evolution of breast implants</p>
        <a className='underline text-white text-xs font-semibold' href='#'>READ MORE</a>
       </div>

       <div className='w-[24em] bg-[#023a15] p-[1em] text-left'>
        <img src='https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/jess-harper-sunday-TZBLq6MDfxc-unsplash.jpg'></img>
        <p className='text-white font-cormorant text-2xl font-semibold mt-[.75em] mb-[1.5em]'>Russian prosecutor seeks to ban Dolce & Gabbana</p>
        <a className='underline text-white text-xs font-semibold' href='#'>READ MORE</a>
       </div>
    </div>
    
  )
}

export default ImgCard