import React from 'react'
import Container from '../Layout/Container'
import NavLink from './NavLink/NavLink'

const Header = () => {
  return (
    <div>
      <Container className='h-20 flex items-center'>
        <div className='cursor-pointer'>
          <div>
            <span className='font-bold text-2xl'>COM</span>
            <span className='font-thin text-2xl'>PART</span>
          </div>
          <span className='-mt-2 block text-zinc-500'>best pc parts</span>
        </div>

        <div className='ml-auto flex gap-1'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </Container>
    </div>
  )
}

export default Header