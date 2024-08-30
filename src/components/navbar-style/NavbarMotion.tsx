"use client"

import Link from 'next/link'
import { Button } from '../ui/button'
import Wrapper from '../Wrapper';
import MobileMenu from './MobileMenu';

import { SignInButton, SignedIn, SignedOut, UserButton, ClerkLoaded } from '@clerk/nextjs'
import { useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from 'react'

const NavbarMotion = () => {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true)
    } else if(latest === 0) {
      setScrolled(false)
    }
  })

  return (
    <nav className={`sticky top-0 h-14 border-b z-20 ${
      scrolled 
      ? 'bg-black text-white' 
      : 'bg-transparent text-black'}`}
    >
        <Wrapper>
          <div className='flex h-14 items-center justify-between'>
            <Link href='/' className='font-semibold'>
              Next.js
            </Link>

            <div className="flex items-center justify-center gap-3">
              <ClerkLoaded>
                <SignedIn>
                  <UserButton />
                </SignedIn>

                <SignedOut>
                  <SignInButton
                    mode="modal"
                    signUpFallbackRedirectUrl="/"
                    signUpForceRedirectUrl="/"
                  > 
                    <Button size="sm" variant="ghost">
                      登入
                    </Button>
                  </SignInButton>
                </SignedOut>
              </ClerkLoaded>

              {/* Burger */}
              <MobileMenu />
            </div>
          </ div>
        </Wrapper>
    </nav>
  )
}

export default NavbarMotion