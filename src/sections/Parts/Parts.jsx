import React from 'react'
import Container from '../../components/Layout/Container'
import Part from '../../components/Part/Part'

const Parts = () => {
  return (
    <div className='border-0 border-t-2'>
      <Container className='py-20'>
        <h1 className='text-3xl text-center font-bold'>Tools 💻 Parts</h1>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          <Part />
          <Part />
          <Part className={`
            sm:last:grid sm:last:grid-cols-2 sm:last:col-span-2 sm:last:gap-5 
            md:last:grid md:last:grid-cols-1 md:last:col-span-1 md:last:gap-0
          `} />
        </div>
      </Container>
    </div>
  )
}

export default Parts