import Image from 'next/image'
import { backend } from '@/lib/icon'
import React, { Fragment } from 'react'

const backendIcon = [
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

const TecBackend = () => {
  return (
    <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-2'>
      <div className='flex flex-none gap-2 pr-2 animate-move-right [animation-duration:20s]'>
        {[...new Array(4)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {backendIcon.map((item) => (
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

export default TecBackend