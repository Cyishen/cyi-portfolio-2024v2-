"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import { motionIcon } from '@/lib/icon'


const otherDrag = [
  {
    title: "Motion",
    icon: motionIcon.framer,
    color: '#ACEDFF',
    left: '5%',
    top: '5%'
  },
  {
    title: "Gsap",
    icon: motionIcon.gsap,
    color: '#e9e9e9',
    left: '35%',
    top: '25%'
  },
  {
    title: "Figma",
    icon: motionIcon.figma,
    color: '#DD8ADE',
    left: '60%',
    top: '5%'
  },
]

const SkillOther = () => {
  const contraction = useRef(null)

  return (
    <div className='relative flex h-[60px] mt-auto rounded-lg bg-pink-200 hover:ring-yellow-100 hover:opacity-90 transition duration-500' ref={contraction}>
      {otherDrag.map((item) => (
        <motion.div key={item.title}
          className='inline-flex gap-2 px-6 border rounded-full py-1 absolute cursor-pointer hover:opacity-80'
          style={{
            left: item.left,
            top: item.top,
            backgroundColor: item.color,
          }}
          drag
          dragConstraints={contraction}
        >
          <span className='text-sm font-thin'>{item.title}</span>
          <Image src={item.icon} alt={item.title} width={20} height={20} className='pointer-events-none' />
        </motion.div>
      ))}
    </div>
  )
}

export default SkillOther