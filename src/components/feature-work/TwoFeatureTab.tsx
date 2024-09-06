"use client"

import { images } from '@/lib/icon'
import { Button } from '../ui/button'
import { useState } from 'react'

import { motion, animate, useMotionTemplate, useMotionValue, ValueAnimationTransition } from 'framer-motion'
import Image from 'next/image'


const twoTabs = [
  {
    id: 1,
    title: '移動端App',
    icon: "/assets/lottie/vroom.lottie",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 100,
    show: false,
  },
  {
    id: 2,
    title: '影片分享 App',
    icon: "/assets/lottie/vroom.lottie",
    isNew: true,
    backgroundPositionX: 10,
    backgroundPositionY: 77,
    backgroundSizeX: 180,
    show: true,
  },
  {
    id: 3,
    title: '搭車 App',
    icon: "/assets/lottie/vroom.lottie",
    isNew: false,
    backgroundPositionX: 100,
    backgroundPositionY: 26,
    backgroundSizeX: 180,
    show: true,
  },
]


const TwoFeatureTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(twoTabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(twoTabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(twoTabs[0].backgroundSizeX);

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
      [backgroundSizeX.get(), 100, twoTabs[itemIndex].backgroundSizeX],
      animateOptions,
    )

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), twoTabs[itemIndex].backgroundPositionX],
      animateOptions,
    )

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), twoTabs[itemIndex].backgroundPositionY],
      animateOptions,
    )
  };

  return (
    <div className='w-full border-t-2 border-pink-300 rounded-t-3xl p-4 bg-pink-200'>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 h-2 w-14 rounded-full bg-pink-300"/>

      <div className='flex flex-col items-center justify-center mt-5'>
        <h2 className='flex justify-center font-bold capitalize text-xl md:text-3xl'>
          移動端 App 
        </h2>
        <p className='font-light'>Mobile App</p>
      </div>

      <div className='mt-3 flex flex-row justify-center gap-1 md:gap-4'>
        {twoTabs.map((project, index) => (
          <div key={project.id} className='relative' >
            {project.show === true ?
              (
                <>
                  <Button
                    variant="super"
                    size="sm"
                    onClick={() => handleSelectTab(index)}
                    onMouseEnter={() => handleSelectTab(index)}
                    onMouseLeave={() => handleSelectTab(0)}
                  >
                    {project.title}
                  </Button>

                  {project.isNew && (
                    <div className='absolute -top-2 -left-11 -translate-y-1/2 -rotate-12'>
                      <Image 
                        src={'/go.png'} 
                        alt="star" 
                        width={60} 
                        height={60}
                      />
                    </div>
                  )}
                </>
              )
              : ''
            }
          </div>
        ))}
      </div>

      <div className='px-2 md:px-32 pt-4 md:pt-2'>
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

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-7 w-full bg-pink-200"/>
    </div>
  )
}

export default TwoFeatureTab