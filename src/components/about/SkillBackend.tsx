"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import Image from 'next/image'
import { backend } from '@/lib/icon'


const toolboxItems = [
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
    <div className='flex flex-col overflow-hidden gap-2'>
      <div className='flex flex-col h-[200px] w-full'>
        <p className='text-sm font-bold mt-2'>後端</p>
        <ul className='list-disc list-inside px-2 text-sm font-light'>
          <li>後端: Python 模型訓練、影像OpenCV、爬蟲等基本應用。</li>
          <li>資料庫管理: SQL 資料庫操作，設計和管理資料庫結構。</li>
          <li>API: 後端 API 的設計與建立，能夠提供高效、可靠的數據服務。</li>
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

export default SkillBackend