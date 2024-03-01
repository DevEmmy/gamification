import React from 'react'
import { HiX } from 'react-icons/hi'

const Overlay = ({ setShow, status = 0, oddWon, amountWon }) => {


  switch (status) {
    case 0:
      return (
        <div className=''>
          <div className="dark__bg" />

          <div className='flex flex-col top-[10vh] justify-center text-center absolute font-bold drop-shadow-2xl px-[5%] items-center z-50'>
            <h2 className='text-white text-[30px] text-center '>
              Congratulations, you won #5000, 3x
            </h2>
            <img src="./trophy.png" alt="" />

            <div className='ex-bg w-[50px] h-[50px] p-3 rounded-full items-center justify-center text-center flex mt-10' onClick={() => setShow(false)}>
              <HiX className='text-white' size={32} />
            </div>
          </div>
        </div>
      )

    case 1:
      return (
        <div className=''>
          <div className='dark__bg' />

          <div className='flex flex-col top-[10vh] justify-center text-center centered-div font-bold drop-shadow-2xl px-items-center bg-black shadow-lg text-white z-50 py-12 px-5 w-4/5 rounded-3xl gap-3 border-2 border-red-600'>
            <div>
              <h2 className='text-2xl'>You lost</h2>
              <p>Try to be Lucky next time.</p>
            </div>
            <button className='bg-red-600 p-3 rounded-lg text-white w-full' onClick={()=> setShow(false)}>Continue</button>
          </div>
        </div>
      )

      case 2:
      return (
        <div className=''>
          <div className='dark__bg' />

          <div className='flex flex-col top-[10vh] justify-center text-center centered-div font-bold drop-shadow-2xl px-items-center bg-black shadow-3xl text-white z-50 py-12 px-5 w-4/5 rounded-3xl gap-3 border-2 border-primary'>
            <div>
              <h2 className='text-2xl'>You Won</h2>
              <p>Congratulations, you got <span>+₦{amountWon}</span></p>
            </div>
            <button className='bg-primary p-3 rounded-lg text-white w-full' onClick={()=> setShow(false)}>Continue</button>
          </div>
        </div>
      )
  }

}

export default Overlay