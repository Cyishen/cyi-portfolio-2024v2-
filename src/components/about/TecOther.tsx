import Image from 'next/image'
import { motionIcon } from '@/lib/icon'
import React, { Fragment } from 'react'

const otherIcon = [
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
    top: '25%'
  },
  {
    title: "Figma",
    icon: motionIcon.figma,
    color: '#DD8ADE',
    left: '60%',
    top: '5%'
  },
]

const TecOther = () => {
  return (
    <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-2'>
      <div className='flex flex-none gap-2 pr-2 animate-move-left [animation-duration:20s]'>
        {[...new Array(3)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {otherIcon.map((item) => (
              <div key={item.title}
                className='inline-flex items-center justify-center gap-2 bg-white py-1 px-6 rounded-full h-fit'
                style={{
                  backgroundColor: item.color,
                }}
              >
                <span className='text-sm font-thin'>{item.title}</span>
                <Image src={item.icon} alt={item.title} width={20} height={20} className='pointer-events-none' />
              </div>
            ))}
          </Fragment>
        ))}

      </div>
    </div>
  )
}

export default TecOther