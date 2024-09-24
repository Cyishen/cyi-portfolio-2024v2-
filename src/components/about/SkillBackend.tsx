"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import { backend } from '@/lib/icon'


const backendDrag = [
  {
    title: "Nodejs",
    icon: backend.nodejs,
    color: '#96D588',
    left: '5%',
    top: '5%'
  },
  {
    title: "Python",
    icon: backend.python,
    color: '#F4ECAA',
    left: '55%',
    top: '20%'
  },
]

const SkillBackend = () => {
  const contraction = useRef(null)

  return (
    <div className='relative flex h-[60px] mt-auto rounded-lg bg-white/55 backdrop-blur-lg duration-300 hover:bg-black' ref={contraction}>
      {backendDrag.map((item) => (
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
          <span className='text-sm font-mono'>{item.title}</span>
          <Image src={item.icon} alt={item.title} width={20} height={20} className='pointer-events-none' />
        </motion.div>
      ))}
    </div>
  )
}

export default SkillBackend