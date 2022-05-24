import React from 'react'
import Footer from '../../sections/Footer/Footer'
import Header from '../Header/Header'

const Page = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='min-h-[80vh]'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Page