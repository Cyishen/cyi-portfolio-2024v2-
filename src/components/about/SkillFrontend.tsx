"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { frontend } from '@/lib/icon'
import Image from 'next/image'


const toolboxItems = [
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
    <div className='flex flex-col overflow-hidden gap-2'>
      <div className='flex flex-col w-full'>
        <p className='text-sm font-bold mt-2'>前端</p>
        <ul className='list-disc list-inside px-2 text-sm font-light'>
          <li>響應式設計: 專注於開發響應式設計，提升行動裝置的可用性，增加行動端流量。</li>
          <li>性能優化與SEO: 優化網頁加載速度和 SEO，提升使用者體驗（UI/UX）。</li>
          <li>前後端整合: 前端與後端 API 的整合，確保流暢的數據交互和功能實現。</li>
        </ul>

        <div className='relative flex mt-2 h-[200px]' ref={contraction}>
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

export default SkillFrontend