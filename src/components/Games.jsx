import React from 'react'
import games from '../utils/games-data'

const Games = () => {
  return (
    <div className='grid grid-cols-3 justify-between p-[5.7%] gap-5'>
        {
            games.map((game, i)=> {
                return(
                    <div key={i} className=' border border-gray-400 rounded-2xl p-3 flex flex-col gap-3'>
                        <img src={game.cover} alt="" className='border rounded-lg h-[200px] w-full object-cover'/>

                       <div>
                       <h3 className='text-[20px] font-semibold'>{game.title}</h3>
                        <p className='text-gray-400 line-clamp-2'>{game.description}</p>
                       </div>
                        
                        <button className='flex items-center bg-primary text-white text-center w-full rounded-lg p-3 justify-center'>Play</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Games