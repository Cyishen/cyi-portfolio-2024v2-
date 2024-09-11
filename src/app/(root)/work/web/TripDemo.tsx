"use client"

import { useState } from 'react'

import Mac from '@/components/Mac'
import { displays, template } from '@/lib/icon'
import ProjectHeader from '../ProjectHeader'
import Image from 'next/image'


const webData = [
  {
    id: 1,
    name: 'Wbe1',
    image: template.tripOne,
  },
  {
    id: 2,
    name: 'Wbe2',
    image: template.tripTwo,
  },
  {
    id: 3,
    name: 'Wbe3',
    image: template.tripThree,
  },
]

const demoUrl = 'https://gemini-travel-vite.vercel.app/'

const TripDemo = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState<number>(1);

  const handleSelectedPhone = (id: number) => {
    setSelectedPhoneId(id);
  };

  return (
    <div className='w-full flex flex-col py-5 px-3 md:px-20 md:py-14 overflow-hidden'>
      <div className='w-full md:px-20'>
        <ProjectHeader
          titleWord={'旅遊'}
          secondWord={'用途: 透過AI Gemini 規劃旅遊行程'}
          tags={['vite', 'ai gemini', 'tailwindCSS', 'firebase', 'google map api']}
          descriptionWords={[
            'Gemini api串接, 關鍵提示詞讓Gemini給出對應的行程',
            '透過Google map 拿到目的地資料圖片',
          ]}
          bgColor='bg-black'
          textColor='text-white'
          descriptionColor='text-white'
          showStore={false}
          demoUrl={demoUrl}
          buttonVariant='outline'
          qrCode={displays.codeTrip.src}
        />

        <div className='flex overflow-x-scroll custom-scrollbar whitespace-wrap'>
          <div className='flex gap-5 py-5'>
            {webData.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleSelectedPhone(item.id)}
                className='flex cursor-pointer w-48 sm:w-96'
              >
                {selectedPhoneId === item.id ? (
                  <Mac
                    imgSrc={item.image.src}
                  />
                ) : (
                  <Image
                    src={item.image.src}
                    alt={item.name}
                    width={216}
                    height={216}
                    className='object-contain w-full'
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

export default TripDemo