import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-2 flex justify-around h-[90vh] px-10 gap-6'>

      <div className='h-full w-1/3 flex flex-col p-5 bg-white'>
    <LeftContent/>
      </div>
      
    <div className='p-10 w-2/3 flex gap-10'>
    <RightContent users={props.users}/>
    </div>
      
    </div>
  )
}

export default Page1Content
