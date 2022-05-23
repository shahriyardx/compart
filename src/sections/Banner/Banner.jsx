import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Layout/Container'

const Banner = () => {
  return (
    <div className='py-20'>
      <Container className='grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-5'>
        <div className='flex justify-center sm:order-2'>
          <img className='transform -scale-x-100 w-[70%] md:w-auto' src="/images/banner.png" alt="" />
        </div>

        <div className='flex items-center'>
          <div>
            <h1 className='flex flex-col text-3xl sm:text-4xl sm:leading-8 md:text-6xl font-bold md:leading-[3.5rem]'>
              <span>Get your</span>
              <span>computers ready <span className='hidden md:inline-block animate-pulse'>_</span></span>
            </h1>

            <p className='mt-5 font-semibold block text-zinc-600'>Best computer parts manufaturer worldwide</p>

            <div className='mt-10'>
              <Link
                className='px-7 py-3 bg-black text-white font-semibold' 
                to="/shop"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>

        
      </Container>
    </div>
  )
}

export default Banner