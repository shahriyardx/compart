import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Layout/Container'

const CallToAction = () => {
  return (
    <div className='py-20 border-0 border-t-2'>
      <Container className='bg-indigo-500 py-20 px-20 rounded-xl text-white'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-4xl font-bold mb-2'>
              Place your order now!
            </h1>
            <p className='text-zinc-200'>Get the <span className='font-bold'>latest</span> pc parts with just a single click.</p>
          </div>

          <div className='flex items-center'>
            <Link className='bg-white text-black px-5 py-3 rounded-xl font-bold' to="/shop">Order Now</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CallToAction