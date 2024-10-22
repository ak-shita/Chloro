import React from 'react'
import Card from './Card'

function Part5() {
  return (
    <div className='w-full flex justify-between h-[145vh] bg-[#fcf5f3] px-[10em] pt-[22em] relative'>
      <div>
      <img className="absolute z-10 w-[45em] h-[50em] object-cover rounded-tl-[50%] rounded-tr-[50%]" src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/woman-taking-a-bath-massage-soap-treat-yourself-sp-ZZG446W-2.jpg"></img>
      <img className="absolute z-20 w-[220px] top-[29em] left-28" src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/Asset-1_5-1024x903.png"></img>
      </div>
        

        <div>
            <Card />
            <div className='flex gap-20 mt-[40em] mr-[5em]'>
              <div className='text-center'>
                <h2 className='text-green-800 text-6xl font-cormorant font-base'>955+</h2>
                <p className='text-green-500 text-normal mt-2 '>Happy Customers</p>
              </div>
              <div className='text-center'>
                <h2 className='text-green-800 text-6xl font-cormorant font-base'>240+</h2>
                <p className='text-green-500 text-normal mt-2 '>Positive Reviewss</p>
              </div>
            </div>
        </div> 
    </div>
  )
}

export default Part5