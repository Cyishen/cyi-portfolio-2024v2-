"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { frontend, motionIcon } from '@/lib/icon'
import Image from 'next/image'


const toolboxItems = [
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
    top: '15%'
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
    <div className='flex flex-col overflow-hidden gap-2'>
      <div className='flex flex-col h-[150px] w-full'>
        <p className='text-sm font-bold mt-2'>其他</p>
        <ul className='list-disc list-inside px-2 text-sm font-light'>
          <li>特效與其他工具。</li>
        </ul>

        <div className='relative flex-1 mt-2' ref={contraction}>
          {toolboxItems.map((item) => (
            <motion.div key={item.title}
              className={`inline-flex gap-2 px-6 border rounded-full py-1 absolute cursor-pointer hover:opacity-80`}
              style={{
                left: item.left,
                top: item.top,
                backgroundColor: item.color,
              }}
              drag
              dragConstraints={contraction}
            >
              <span className='text-sm font-extralight'>{item.title}</span>
              <Image src={item.icon} alt={item.title} width={20} height={20} className='pointer-events-none'/>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillOther