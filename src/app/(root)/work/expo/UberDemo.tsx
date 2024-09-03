"use client"

import Phone from '@/components/Phone'
import Image from 'next/image'
import { useState } from 'react'
import Hashtags from '../Hashtag'

const uberData = [
  {
    id: 1,
    name: 'Uber',
    image: '/template/uber1.png',
  },
  {
    id: 2,
    name: 'Uber2',
    image: '/template/uber2.png',
  },
  {
    id: 3,
    name: 'Uber3',
    image: '/template/uber1.png',
  },
]


const UberDemo = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState<number>(2);

  const handleSelectedPhone = (id: number) => {
    setSelectedPhoneId(id);
  };

  return (
    <div className='w-full flex flex-col md:items-center p-3 md:p-20 overflow-hidden bg-pink-200'>
      <div className='w-full flex mb-5'>
        <div className='w-full flex flex-col gap-3 md:px-20 bg-blue-100'>
          <h1 className='text-5xl font-bold'>Title</h1>
          <p className='text-xl font-medium'>Something here</p>
        </div>
      </div>

      <div className='flex overflow-x-scroll custom-scrollbar whitespace-nowrap mb-5'>
        <Hashtags tags={['expo', 'clerk', 'typescript', 'nextjs', 'react']} />
      </div>

      <div className='flex overflow-x-scroll custom-scrollbar whitespace-wrap'>
        <div className='flex items-center justify-center gap-5'>
          {uberData.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => handleSelectedPhone(item.id)}
              className='flex cursor-pointer w-32 sm:w-56'
            >
              {selectedPhoneId === item.id ? (
                <Phone
                  imgSrc={item.image}
                />
              ) : (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={216}
                  height={216}
                  className='object-contain min-w-28 mx-2 rounded-3xl shadow-xl'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UberDemo