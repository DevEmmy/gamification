import React, { useState } from 'react'
import Return from './Return'

const WheelGame = () => {

    const [selectedOdd, setSelectedOdd] = useState(2)

    const odds = [
        {
            value: 2,
        },
        {
            value: 4
        },
        {
            value: 6
        },
        {
            value: 8
        },
        {
            value: 12
        },
        {
            value: 14
        },
        {
            value: 16,
        },
        {
            value: 18
        }
    ]
  return (
    <div>
        <Return />

        <div className='flex flex-col items-center justify-center mt-20'>
            <div className="wheel h-[300px] w-[300px] rounded-full bg-gray-500">

            </div>

            <div className='flex gap-3 my-3'>
                {
                    odds.map((odd, i)=>{
                        return(
                            <div onClick={()=> setSelectedOdd(odd.value)} key={i} className={`bg-primary py-2 px-6 rounded-md text-white font-bold cursor-pointer hover:scale-125 ${selectedOdd == odd.value && "bg-white text-primary border-2 border-primary"}`}>
                                {odd.value}x
                            </div>
                        )
                    })
                }
            </div>

            <div className='mt-10'>
                <button className='flex items-center bg-primary hover:scale-125 text-white text-center rounded-lg px-8 py-3 justify-center'>Play</button>
            </div>

        </div>
    </div>
  )
}

export default WheelGame