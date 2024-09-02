"use client"

import { images } from '@/lib/icon'
import { Button } from '../ui/button'
import { useState } from 'react'

import { motion, animate, useMotionTemplate, useMotionValue, ValueAnimationTransition } from 'framer-motion'


const threeTabs = [
  {
    id: 1,
    title: 'Python',
    icon: "/assets/lottie/vroom.lottie",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 100,
    show: false,
  },
  {
    id: 2,
    title: '模型訓練',
    icon: "/assets/lottie/vroom.lottie",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
    show: true,
  },
  {
    id: 3,
    title: '爬蟲',
    icon: "/assets/lottie/vroom.lottie",
    isNew: false,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 160,
    show: true,
  },
]


const ThreeFeatureTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(threeTabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(threeTabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(threeTabs[0].backgroundSizeX);

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
      [backgroundSizeX.get(), 100, threeTabs[itemIndex].backgroundSizeX],
      animateOptions,
    )

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), threeTabs[itemIndex].backgroundPositionX],
      animateOptions,
    )

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), threeTabs[itemIndex].backgroundPositionY],
      animateOptions,
    )
  };

  return (
    <div className='w-full border-t-2 border-yellow-300 rounded-t-3xl p-4 bg-yellow-100'>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 h-2 w-14 rounded-full bg-yellow-300"/>

      <div className='flex flex-col items-center justify-center mt-5'>
        <h2 className='flex justify-center font-bold capitalize text-xl md:text-3xl'>
          Python
        </h2>
        <p className='font-light'></p>
      </div>

      <div className='mt-3 flex flex-row justify-center gap-1 md:gap-4'>
        {threeTabs.map((project, index) => (
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
          className='aspect-video bg-cover rounded-t-2xl'
          style={{
            backgroundImage: `url(${images.productImage.src})`,
            backgroundPosition: backgroundPosition,
            backgroundSize: backgroundSize
          }}
        >
        </motion.div>
      </div>

      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 h-7 w-full bg-yellow-100"/>
    </div>
  )
}

export default ThreeFeatureTab