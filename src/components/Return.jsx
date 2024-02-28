import React from 'react'
import { HiChevronLeft } from "react-icons/hi"
const Return = () => {
  return (
    <div className='px-5 py-3 bg-primary flex justify-between items-center'>
        <div>
            <HiChevronLeft size={24} color='white' className='cursor-pointer'/>
        </div>

        <div>
            <p className='text-white font-semibold text-[24px]'>₦ 8000</p>
        </div>
    </div>
  )
}

export default Return