"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import { frontend } from '@/lib/icon'


const frontendDrag= [
  {
    title: "React",
    icon: frontend.react,
    color: '#ACEDFF',
    left: '5%',
    top: '5%'
  },
  {
    title: "Next.js",
    icon: frontend.nextjs,
    color: '#e9e9e9',
    left: '30%',
    top: '15%'
  },
  {
    title: "Expo",
    icon: frontend.expoCube,
    color: '#CCCCCC',
    left: '60%',
    top: '5%'
  },
  {
    title: "JavaScript",
    icon: frontend.javascript,
    color: '#F4ECAA',
    left: '10%',
    top: '45%'
  },
  {
    title: "TypeScript",
    icon: frontend.typescript,
    color: '#5493D8',
    left: '25%',
    top: '70%'
  },
  {
    title: "Vue",
    icon: frontend.vue,
    color: '#87DEB7',
    left: '55%',
    top: '40%'
  },
  {
    title: "Tailwind",
    icon: frontend.tailwind,
    color: '#43D4D1',
    left: '65%',
    top: '60%'
  },
]

const SkillFrontend = () => {
  const contraction = useRef(null)

  return (
    <div className='relative flex h-[180px] rounded-lg bg-sky-200 hover:opacity-90 transition duration-500 mt-auto' ref={contraction}>
      {frontendDrag.map((item) => (
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
          <Image src={item.icon} alt={item.title} width={20} height={20} className='pointer-events-none'/>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillFrontend