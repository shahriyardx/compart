import React from 'react'
import Header from '../Header/Header'

const Page = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Page