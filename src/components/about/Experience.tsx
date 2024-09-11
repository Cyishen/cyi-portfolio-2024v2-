"use client"

import { calculateDaysBetween } from "@/lib/aboutTime/Timer"
import { Fragment, useEffect, useRef, useState } from "react"
import { useInView } from 'framer-motion';
import { AnimatedNumber } from "../framer-motion/AnimatedNumber";


const workExperience = [
  {
    title: 'R&D engineer',
    company: 'Dawning',
    icon: 'R',
    startDate: '2016/1',
    endDate: '2022/7',
    content: 'Connecter and Switch products development.'
  },
  {
    title: 'Warehouse staff',
    company: 'New Zealand',
    icon: 'W',
    startDate: '2013/8',
    endDate: '2015/7',
    content: 'Processing of incoming stock, completing warehouse orders for delivery.'
  },
  {
    title: 'Financial advisor',
    company: 'SinoPac Securities',
    icon: 'F',
    startDate: '2011/5',
    endDate: '2013/5',
    content: 'Analyzes market trends and make investment recommendations.'
  },
]

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const [values, setValues] = useState(new Array(workExperience.length).fill(0));

  const ref = useRef(null);
  const isInView = useInView(ref);


  useEffect(() => {
    const days = workExperience.map(item => calculateDaysBetween(item.startDate, item.endDate));
    if (isInView) {
      setValues(days);
    }
  }, [isInView]);


  return (
    <div className='col-span-1 md:col-span-1 about-title-type'>
      <h2 className="capitalize">experience</h2>

      <div className='flex flex-col gap-2 mt-2'>
        {workExperience.map((item, idx) => (
          <Fragment key={idx}>
            <div
              className={`flex cursor-pointer p-2 gap-1 rounded-lg group ${hoveredIndex === idx ? 'bg-white' : ''}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <div className="px-1 flex flex-col justify-start items-center">
                <div className={`min-w-10 min-h-10 rounded-full border flex justify-center items-center ${hoveredIndex === idx ? 'bg-sky-200' : ''}`}>
                  <p>{item.icon}</p>
                </div>

                <div className={`w-0.5 h-full bg-gray-200 mt-2 ${hoveredIndex === idx ? 'bg-sky-200' : ''}`} />
              </div>

              <div className="w-full">
                <div className="flex gap-3 relative">
                  <div className="flex flex-col">
                    <p className='font-bold text-sm'>{item.title}</p>
                    <p className='font-normal text-sm'>{item.company}
                      <span className='font-thin text-[12px] pl-2'>
                        {item.startDate} - {item.endDate}
                      </span>
                    </p>
                  </div>

                  <div ref={ref} className="absolute top-0 right-0 flex items-center px-2 py-1 border rounded-sm gap-1">
      
                      <AnimatedNumber
                        className='font-mono text-sm'
                        springOptions={{
                          bounce: 0,
                          duration: 5000,
                        }}
                        value={Number(values[idx])} 
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