import React from 'react'
import Container from '../../components/Layout/Container'
import Review from '../../components/Review/Review'

const Reviews = () => {
  return (
    <div className='border-0 border-t-2'>
      <Container className='py-20'>
        <h1 className='text-3xl text-center font-bold'>Latest 🌟 Reviews</h1>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
          <Review />
          <Review />
          <Review />
        </div>
      </Container>
    </div>
  )
}

export default Reviews