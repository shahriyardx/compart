import React, { useState } from 'react'
import Container from '../Layout/Container'
import NavLink from './NavLink/NavLink'
import { BiMenu } from 'react-icons/bi'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Container className='h-20 flex items-center relative'>
        <div className='cursor-pointer'>
          <div>
            <span className='font-bold text-2xl'>COM</span>
            <span className='font-thin text-2xl'>PART</span>
          </div>
          <span className='-mt-2 block text-zinc-500'>best pc parts</span>
        </div>

        <div className='ml-auto md:hidden'>
          <BiMenu className='text-3xl' onClick={() => setOpen(!open)} />
        </div>
        <div className={`md:ml-auto flex flex-col w-full gap-1 absolute md:static md:flex-row md:w-auto top-20 left-0 px-4 bg-zinc-300 md:bg-transparent z-50 py-5 ${open ? '': 'hidden md:flex'}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </Container>
    </div>
  )
}

export default Header