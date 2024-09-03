"use client"

import Image from 'next/image'
import { useState } from 'react'

import Hashtags from '../Hashtag'
import Mac from '@/components/Mac'


const webData = [
  {
    id: 1,
    name: 'Wbe1',
    image: '/template/duo2.png',
  },
  {
    id: 2,
    name: 'Wbe2',
    image: '/template/duo2.png',
  },
  {
    id: 3,
    name: 'Wbe3',
    image: '/template/duo2.png',
  },
]


const AiTripDemo = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState<number>(1);

  const handleSelectedPhone = (id: number) => {
    setSelectedPhoneId(id);
  };

  return (
    <div className='w-full flex flex-col p-3 md:p-20 overflow-hidden'>
      <div className='w-full md:px-20 py-5'>
        <div className='w-full flex flex-col bg-white rounded-2xl p-5 mb-5'>
          <div className='w-full flex flex-col gap-3 mb-5'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Title.</h1>
            <p className='text-xl font-medium'>Something here</p>
          </div>

          <div className='flex overflow-x-scroll custom-scrollbar whitespace-nowrap'>
            <Hashtags tags={['react', 'nextjs', 'tailwindCSS', 'stripe']} />
          </div>
        </div>

        <div className='flex overflow-x-scroll custom-scrollbar whitespace-wrap'>
          <div className='flex gap-2 py-10'>
            {webData.map((item) => (
              <div
                key={item.id}
                // onMouseEnter={() => handleSelectedPhone(item.id)}
                className='flex cursor-pointer w-48 sm:w-96'
              >
                {selectedPhoneId === item.id ? (
                  <Mac
                    imgSrc={item.image} 
                  />
                ) : (
                <img
                    src={item.image}
                    alt={item.name}
                    width={216}
                    height={216}
                    className='object-contain w-40 sm:w-[320px] sm:h-[200px] mx-auto sm:pt-1'
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiTripDemo