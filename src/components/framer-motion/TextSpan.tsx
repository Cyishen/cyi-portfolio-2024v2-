"use client"

import React from 'react'
import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode
  order?: number
}

const TextSpan = ({children, order}: Props) => {

  const springBand =  {
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.35, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)", 
      ],
      // color: ['#000', '#f00', '#0f0', '#00f', '#ff0', '#0ff', '#000'],
  }


  return (
    <motion.span
      whileHover={springBand}
      initial={{ scale: 1, color: '#000' }}
      animate={springBand}
      transition={{ repeat: Infinity, duration: 2, delay: order! * 0.5 , repeatDelay: 3 }} 
      className='inline-block cursor-pointer'
    >
      {children}
    </motion.span>
  )
}

export default TextSpan