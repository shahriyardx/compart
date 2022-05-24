import React from 'react'
import Stars from './Stars'

const Review = () => {
  return (
    <div className='p-4 border-2 rounded-md shadow-sm'>
      <div className='flex justify-between'>
        <h1 className='text-xl font-bold text-blue-600 font-mono underline underline-offset-2'>Someone</h1>
        <Stars />
      </div>

      <div className='mt-5 font-semibold text-zinc-500'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis itaque laudantium totam tempora impedit deleniti odit fugit incidunt expedita nostrum, soluta fugiat velit? Hic at recusandae neque amet soluta repellendus?</p>
      </div>
    </div>
  )
}

export default Review