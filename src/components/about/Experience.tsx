"use client"

import { Fragment, useState } from "react"


const workExperience = [
  {
    title: 'R&D engineer',
    company: 'Dawning',
    icon: 'R',
    time: '2016/1 - 2022/7',
    content: 'Connecter and Switch products development.'
  },
  {
    title: 'Warehouse staff',
    company: 'New Zealand',
    icon: 'W',
    time: '2013/8 - 2015/7',
    content: 'Processing of incoming stock, completing warehouse orders for delivery.'
  },
  {
    title: 'Financial advisor',
    company: 'SinoPac Securities',
    icon: 'F',
    time: '2011/5 - 2013/5',
    content: 'Analyzes market trends and make investment recommendations.'
  },
]

const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className='col-span-1 md:col-span-1 about-title-type'>
      <h2 className="capitalize">experience</h2>

      <div className='flex flex-col gap-2 mt-2'>
        {workExperience.map((item, idx) => (
          <Fragment key={idx}>
            <div
              className={`flex cursor-pointer p-2 gap-1 group ${hoveredIndex === idx ? 'bg-white rounded-lg' : ''}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <div className="px-1 flex flex-col justify-start items-center">
                <div className={`min-w-10 min-h-10 rounded-full border flex justify-center items-center ${hoveredIndex === idx ? 'bg-sky-200' : ''}`}>
                  <p>{item.icon}</p>
                </div>

                <div className={`w-0.5 h-full bg-gray-200 mt-2 ${hoveredIndex === idx ? 'bg-sky-200' : ''}`} />
              </div>

              <div>
                <div>
                  <p className='font-bold text-sm'>{item.title}</p>
                  <p className='font-normal text-sm'>{item.company}
                    <span className='font-thin text-[12px]'> {item.time}</span>
                  </p>
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