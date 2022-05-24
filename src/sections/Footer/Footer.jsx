import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Layout/Container'
import { AiFillMail, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='border-0 border-t-2 bg-zinc-800 text-white'>
      <Container className='py-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
          {/* Footer section 1 */}
          <div>
            <h1 className='text-2xl font-extrabold uppercase'>Compart</h1>
            <p>Best computer parts manufaturer worldwide</p>
          </div>

          {/* Footer section 2 */}
          <div>
            <h1 className='text-xl font-bold'>Navigation</h1>

            <ul className='text-zinc-400 text-lg'>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          {/* Footer section 3 */}
          <div>
            <h1 className='text-xl font-bold'>Contact</h1>

            <ul className='text-zinc-400 text-lg'>
              <li className='flex items-center gap-2'>
                <AiOutlineTwitter /> @compart
              </li>

              <li className='flex items-center gap-2'>
                <AiFillMail /> contact@compart.com
              </li>

              <li className='flex items-center gap-2'>
                <AiFillFacebook /> <a href="#">https://facebook.com/compart</a>
              </li>
            </ul>
          </div>

          {/* Footer section 4 */}
          <div>
            <h1 className='text-xl font-bold'>Blog</h1>

            <ul className='text-zinc-400'>
              <li className='flex gap-2'>
                <BiChevronRight className='text-2xl' /><Link to="/blog">How compart works?</Link>
              </li>

              <li className='flex gap-2'>
                <BiChevronRight className='text-2xl' /><Link to="/blog">Can you get your parts from china?</Link>
              </li>

              <li className='flex gap-2'>
                <BiChevronRight className='text-2xl' /><Link to="/blog">How to start my own business of comuter parts!</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer