"use client"

import Phone from '@/components/Phone'
import Image from 'next/image'
import { useState } from 'react'
import Hashtags from '../Hashtag'

import { icons, template } from '@/lib/icon'


const uberData = [
  {
    id: 1,
    name: 'Uber',
    image: template.quOne,
    gifUrl:'',
  },
  {
    id: 2,
    name: 'Uber2',
    image: template.quTwo,
    gifUrl: '',
  },
  {
    id: 3,
    name: 'Uber3',
    image: template.quThree,
    gifUrl: '',
  },
]


const QueenDemo = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState<number>(2);

  const handleSelectedPhone = (id: number) => {
    setSelectedPhoneId(id);
  };

  return (
    <div className='w-full flex flex-col p-3 md:p-20 overflow-hidden bg-gray-50 border-t rounded-t-3xl'>
      <div className="absolute top-5 left-1/2 -translate-x-1/2 h-2 w-14 rounded-full bg-gray-300" />
      
      <div className='w-full md:px-20 py-5 space-y-5'>
        <div className='w-full flex flex-col rounded-2xl p-5 space-y-3 shadow-lg'>
          <div className='w-full flex flex-col gap-3'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Drama Video.</h1>
            <p className='text-xl font-medium'>Follow you like</p>
          </div>

          <div className='flex overflow-x-scroll custom-scrollbar whitespace-nowrap'>
            <Hashtags tags={['expo', 'clerk', 'tailwindCSS']} />
          </div>

          <div className='flex gap-2'>
            <Image src={icons.appleStore} height={30} alt='apple' />
            <Image src={icons.googlePlay} height={30} alt='google' />
          </div>
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
                  item.gifUrl ? (
                    <Phone
                      imgSrc={item.gifUrl}
                    />
                  ): (
                    <Phone
                    imgSrc={item.image.src}
                  />
                  )
                ) : (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={216}
                    height={216}
                    className='object-contain min-w-28'
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

export default QueenDemo