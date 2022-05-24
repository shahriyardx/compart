import React from 'react'
import Footer from '../../sections/Footer/Footer'
import Header from '../Header/Header'

const Page = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Page