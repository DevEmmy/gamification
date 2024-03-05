import React from 'react'
import { HiChevronLeft } from "react-icons/hi"
const Return = ({amount}) => {
  return (
    <div className='px-2 py-3 bg-primary border-b border-b-gray-100 grid grid-cols-[1fr_5fr_1fr] justify-between items-center'>
        <div>
            <HiChevronLeft size={24} color='white' className='cursor-pointer'/>
        </div>

        <h2 className='text-[20px] text-center text-white font-bold'>
          Wheel of Fortune
        </h2>

        <div className='bg-white px-3 py-2 border-[#9EF4C3] border-2 shadow-lg rounded-lg'>
            <p className='text-black text-[12px]'>₦{amount}</p>
        </div>
    </div>
  )
}

export default Return