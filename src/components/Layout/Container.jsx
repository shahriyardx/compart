import React from 'react'

const Container = ({ className, children, ...props }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 ${className}`} {...props} >
      {children}
    </div>
  )
}

export default Container