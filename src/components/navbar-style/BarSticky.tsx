"use client"

import { useScroll, useMotionValueEvent, motion } from "framer-motion"
import { useState } from 'react'
import { BarStickyItem } from "./BarStickyItem"

const BarSticky = () => {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 56 && !scrolled) {
      setScrolled(true)
    } else if(latest <= 56) {
      setScrolled(false)
    }
  })

  return (
    <div className='fixed top-1 sm:top-4 z-[90] w-full'>
      <div className="w-fit mx-auto">
        {scrolled && (
          <motion.div 
            className='flex justify-center items-center mx-auto'
            initial={{scale: 0.5, y: -30}} 
            animate={{scale: 1, y: 0}}
            transition={{
              type: "tween", 
              duration: 0.3,
            }}
          >
            <div className="rounded-full px-10 h-12 flex items-center bg-white/55 backdrop-blur-lg transition-all border border-gray-100">
              <BarStickyItem />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default BarSticky