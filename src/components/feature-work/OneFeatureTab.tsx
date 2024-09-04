"use client"

import { images } from '@/lib/icon'
import { Button } from '../ui/button'
import { useState } from 'react'

import { motion, animate, useMotionTemplate, useMotionValue, ValueAnimationTransition } from 'framer-motion'


const oneTabs = [
  {
    id: 1,
    image: '/product-image.png',
    title: '網頁平台',
    icon: "/assets/lottie/vroom.lottie",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 100,
    show: false,
  },
  {
    id: 2,
    image: '/product-image.png',
    title: 'Duo語言學習平台',
    icon: "/assets/lottie/vroom.lottie",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
    show: true,
  },
  {
    id: 3,
    image: '/product-image.png',
    title: '列印平台',
    icon: "/assets/lottie/vroom.lottie",
    isNew: false,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 160,
    show: true,
  },
  {
    id: 4,
    image: '/product-image.png',
    title: 'AI 規劃旅遊平台',
    icon: "/assets/lottie/vroom.lottie",
    isNew: false,
    backgroundPositionX: 40,
    backgroundPositionY: 27,
    backgroundSizeX: 160,
    show: true,
  },
]


const OneFeatureTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(oneTabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(oneTabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(oneTabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;


  const handleSelectTab = (itemIndex: number) => {
    setSelectedTab(itemIndex);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    }

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, oneTabs[itemIndex].backgroundSizeX],
      animateOptions,
    )

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), oneTabs[itemIndex].backgroundPositionX],
      animateOptions,
    )

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), oneTabs[itemIndex].backgroundPositionY],
      animateOptions,
    )
  };

  return (
    <div className='w-full border-t-2 border-sky-500 rounded-t-3xl p-4 bg-sky-100'>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 h-2 w-14 rounded-full bg-sky-500"/>

      <div className='flex flex-col items-center justify-center mt-5'>
        <h2 className='flex justify-center font-bold capitalize text-xl md:text-3xl'>
          網頁平台端 Web 
        </h2>
        <p className='font-light'>Web Platform</p>
      </div>

      <div className='mt-3 flex flex-row justify-center gap-1 md:gap-4'>
        {oneTabs.map((project, index) => (
          <div key={project.id} className='' >
            {project.show === true ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleSelectTab(index)}
                onMouseEnter={() => handleSelectTab(index)}
                onMouseLeave={() => handleSelectTab(0)}
              >
                {project.title}
              </Button>) : ''
            }
          </div>
        ))}
      </div>

      <div className='px-4 pt-4 mt-1'>
        <motion.div
          className='aspect-video bg-cover'
          style={{
            backgroundImage: `url(${images.app.src})`,
            backgroundPosition: backgroundPosition,
            backgroundSize: backgroundSize
          }}
        >
        </motion.div>
      </div>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-7 w-full bg-sky-100"/>
    </div>
  )
}

export default OneFeatureTab