"use client"

import { useEffect, useState } from "react"
import DuoDemo from "./web/DuoDemo"
import PrintDemo from "./web/PrintDemo"
import TripDemo from "./web/TripDemo"
import Other from "./Other"


const webProject = [
  {
    id:1,
    title: 'Ai travel platform',
    path: <TripDemo />
  },
  {
    id:2,
    title: 'Duo platform',
    path: <DuoDemo />
  },
  {
    id:3,
    title: 'Print platform',
    path: <PrintDemo />
  },
  {
    id:4,
    title: 'Other',
    path: <Other />
  },
]

const WebSticky = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const getTopOffset = (index: number) => {
    if (screenWidth > 1200) {
      // 寬螢幕
      return `calc(-40px + ${index * 170}px)`
    } else if (screenWidth > 768) {
      // 平板
      return `calc(-40px + ${index * 170}px)`
    } else {
      // 手機
      return `calc(0px + ${index * 120}px)`
    }
  }


  return (
    <div className='w-full'>
      {webProject.map((info, index) => (
        <div 
          key={info.id} 
          className='sticky'
          style={{
            top: getTopOffset(index),
          }}
        >
          <div className='w-full overflow-hidden'>
            {info.path}
          </div>
        </div>
      ))}
    </div>
  )
}

export default WebSticky