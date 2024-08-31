import { frontend } from '@/lib/icon'
import Image from 'next/image'
import React, { Fragment } from 'react'

const frontendIcon = [
  {
    title: "React",
    icon: frontend.react,
    color: '#ACEDFF',
    left: '5%',
    top: '5%'
  },
  {
    title: "Next.js",
    icon: frontend.nextjs,
    color: '#e9e9e9',
    left: '30%',
    top: '15%'
  },
  {
    title: "Expo",
    icon: frontend.expoCube,
    color: '#CCCCCC',
    left: '60%',
    top: '5%'
  },
  {
    title: "JavaScript",
    icon: frontend.javascript,
    color: '#F4ECAA',
    left: '10%',
    top: '45%'
  },
  {
    title: "TypeScript",
    icon: frontend.typescript,
    color: '#5493D8',
    left: '25%',
    top: '70%'
  },
  {
    title: "Vue",
    icon: frontend.vue,
    color: '#87DEB7',
    left: '55%',
    top: '40%'
  },
  {
    title: "Tailwind",
    icon: frontend.tailwind,
    color: '#43D4D1',
    left: '65%',
    top: '60%'
  },
]

const TecFrontend = () => {
  return (
    <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] mt-2'>
      <div className='flex flex-none gap-2 pr-2 animate-move-left [animation-duration:20s]'>
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {frontendIcon.map((item) => (
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

export default TecFrontend

