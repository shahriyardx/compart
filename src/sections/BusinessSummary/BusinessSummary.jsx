import React from 'react'
import Container from '../../components/Layout/Container'
import Summary from '../../components/Summary/Summary'

const BusinessSummary = () => {
  return (
    <div className='border-0 border-t-2'>
      <Container className='py-20'>
        <h1 className='text-3xl text-center font-bold'>Numbers 🔢 Matters </h1>

        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
          <Summary />
          <Summary />
          <Summary />
          <Summary />
        </div>
      </Container>
    </div>
  )
}

export default BusinessSummary