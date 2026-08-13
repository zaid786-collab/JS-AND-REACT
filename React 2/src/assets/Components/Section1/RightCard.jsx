import React from 'react'
import {MoveRight} from 'lucide-react';

const RightCard = (props) => {
  return (
    <div className='h-full w-90 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img}></img>

        <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>

            <h1 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold'>{props.num}</h1>

            <div>
                <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita ut nihil incidunt?</p>

                <div className='flex justify-around mt-10'>

                    <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full'><MoveRight/></button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default RightCard
