"use client"

import { calculateDaysBetween } from "@/lib/aboutTime/Timer"
import { Fragment, useEffect, useRef, useState } from "react"
import { AnimatedNumber } from "../framer-motion/AnimatedNumber"
import { motion, useInView } from 'framer-motion';
import Image from "next/image";


const workExperience = [
  {
    title: 'Learner',
    company: '',
    icon: 'L',
    startDate: '2023-07-01',
    endDate: 'present',
    content: 'Learning web and mobile development, focusing on React, Next.js, React Native, and Python.',
    bgImg: '/images/dev.svg'
  },
  {
    title: 'R&D engineer',
    company: 'Dawning',
    icon: 'R',
    startDate: '2016-01-21',
    endDate: '2022-07-31',
    content: 'Connecter and Switch products development.',
    bgImg: '/images/dev.svg'
  },
  {
    title: 'Warehouse staff',
    company: 'New Zealand',
    icon: 'W',
    startDate: '2013-08-01',
    endDate: '2015-07-31',
    content: 'Processing of incoming stock, completing warehouse orders for delivery.',
    bgImg: '/images/dev.svg'
  },
  {
    title: 'Financial advisor',
    company: 'SinoPac Securities',
    icon: 'F',
    startDate: '2011-05-01',
    endDate: '2013-05-31',
    content: 'Analyzes market trends and make investment recommendations.',
    bgImg: '/images/dev.svg'
  },
]

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const [value, setValue] = useState(new Array(workExperience.length).fill(0));

  const ref = useRef(null);
  const isInView = useInView(ref);

  const calculateDays = () => workExperience.map((item) =>
    calculateDaysBetween(item.startDate, item.endDate)
  );

  useEffect(() => {
    if (isInView && value.every(val => val === 0)) {
      setValue(calculateDays());
    }

    const intervalId = setInterval(() => {
      if (workExperience.some(item => item.endDate.toLowerCase() === "present")) {
        setValue(calculateDays());
      }
    }, 24 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [isInView, value]);

  return (
    <div className='col-span-1 md:col-span-1 about-title-type'
    >
      <h2 className="capitalize">experience</h2>

      <div className='flex flex-col gap-2 mt-2'>
        {workExperience.map((item, idx) => (
          <Fragment key={idx}>
            <div
              className={`relative flex cursor-pointer p-2 gap-1 rounded-lg group ${hoveredIndex === idx ? 'bg-white/55 backdrop-blur-lg' : ''}`}
              onMouseEnter={() => setHoveredIndex(idx)}
            // onMouseLeave={() => setHoveredIndex(-1)}
            >
              <div className="px-1 flex flex-col justify-start items-center">
                <div className={`min-w-10 min-h-10 rounded-full border flex justify-center items-center ${hoveredIndex === idx ? 'text-blue-400 border-sky-300' : 'text-white'}`}>
                  <motion.p className="w-9 h-9 rounded-full flex justify-center items-center bg-black"
                    initial={{ rotateY: 0 }}
                    whileInView={{ rotateY: 360 }}
                    transition={{
                      type: "tween",
                      duration: 2,
                    }}
                  >
                    {item.icon}
                  </motion.p>
                </div>

                <div className={`w-0.5 h-full bg-gray-300 mt-2 ${hoveredIndex === idx ? 'bg-sky-300' : ''}`} />
              </div>

              <div className="w-full">
                <div className="flex gap-3 relative">
                  <div className="flex flex-col">
                    <div className="relative">
                      <p className='font-bold text-sm'>{item.title}</p>

                      {/* <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-2/3 w-16 opacity-80"
                      >
                        {hoveredIndex === idx && item.bgImg && (
                          <motion.img
                            src={item.bgImg as string}
                            alt={item.title}
                            width={100}
                            height={100}
                            initial={{ scale: 0.5, y: 30, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            transition={{
                              type: "tween",
                              duration: 1,
                            }}
                          />
                        )}
                      </div> */}
                    </div>

                    <p className='font-normal text-sm'>
                      {item.company} {''}
                      <span className='font-thin text-[12px]'>
                        {item.startDate.slice(0, 7)} - {item.endDate.slice(0, 7)}
                      </span>
                    </p>
                  </div>

                  <div ref={ref} className={`absolute top-0 right-0 flex items-center p-1 rounded-sm gap-1`}>
                    <div className="absolute top-0 -left-1/2 -translate-x-1/2 -translate-y-1/2 w-16"
                    >
                      {hoveredIndex === idx && item.bgImg && (
                        <motion.img
                          src={item.bgImg as string}
                          alt={item.title}
                          width={100}
                          height={100}
                          initial={{ scale: 0.5, y: 30, opacity: 0 }}
                          whileInView={{ scale: 1, y: 0, opacity: 1 }}
                          transition={{
                            type: "tween",
                            duration: 1,
                          }}
                        />
                      )}
                    </div>

                    <AnimatedNumber
                      className='font-mono text-sm'
                      springOptions={{
                        bounce: 0,
                        duration: 5000,
                      }}
                      value={value[idx]}
                    />
                    <p className="font-mono text-sm">D</p>
                  </div>
                </div>

                <div className='text-sm font-light mt-5'>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>

            <hr />
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Experience