"use client"

import Link from 'next/link'
import Wrapper from '../Wrapper';
import MobileMenu from './MobileMenu';

import { AnimatedTabsHover } from './AnimatedTabsHover';

const Navbar = () => {
  return (
    <nav className='h-14 inset-x-0 top-0 w-full bg-transparent backdrop-blur-lg transition-all'>
      <Wrapper>
        <div className='flex h-14 items-center justify-between'>
          <Link href='/' className='font-semibold'>
            {/* CYI */}
          </Link>

          <div className="flex items-center justify-center gap-3">
            <AnimatedTabsHover />
            {/* Mobile Burger */}
            <MobileMenu />
          </div>
        </div>
      </Wrapper>
    </nav>
  )
}

export default Navbar
