import React from 'react'
import { HiX } from 'react-icons/hi'

const Overlay = ({setShow}) => {
  return (
    <div>
        <div className="dark__bg" />

        <div className='flex flex-col top-[10vh] justify-center text-center absolute font-bold drop-shadow-2xl px-[5%] items-center'>
            <h2 className='text-white text-[30px] text-center'>
                Congratulations, you won #5000, 3x
            </h2>
            <img src="./trophy.png" alt="" />

            <div className='ex-bg w-[50px] h-[50px] p-3 rounded-full items-center justify-center text-center flex mt-10' onClick={()=> setShow(false)}>
                <HiX className='text-white' size={32}/>
            </div>
        </div>
    </div>
  )
}

export default Overlay