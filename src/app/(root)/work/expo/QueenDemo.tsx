"use client"

import Phone from '@/components/Phone'
import Image from 'next/image'
import { useState } from 'react'

import { template } from '@/lib/icon'
import ProjectHeader from '../ProjectHeader'


const queData = [
  {
    id: 1,
    name: 'Uber',
    image: template.quOne,
    videoUrl:'',
  },
  {
    id: 2,
    name: 'Uber2',
    image: template.quTwo,
    videoUrl:'',
  },
  {
    id: 3,
    name: 'Uber3',
    image: template.quThree,
    videoUrl:'',
  },
]


const QueenDemo = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState<number>(2);

  const handleSelectedPhone = (id: number) => {
    setSelectedPhoneId(id);
  };

  return (
    <div className='w-full flex flex-col p-3 md:p-20 overflow-hidden bg-white'>
      <div className='w-full md:px-20 py-5 space-y-5'>
        <ProjectHeader 
          titleWord={'影音平台 Drama'} 
          secondWord={'用途: 粉絲分享追蹤喜愛演員影片'} 
          tags={['react native', 'clerk', 'tailwindCSS']} 
          descriptionWords={[
            'React Native 運用',
            'Expo 運用',
          ]}
          bgColor='bg-black'
          textColor='text-white'
          descriptionColor='text-white'
          showStore={true} 
        />

        <div className='flex overflow-x-scroll custom-scrollbar whitespace-wrap'>
          <div className='flex items-center justify-center gap-5'>
            {queData.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleSelectedPhone(item.id)}
                className='flex cursor-pointer w-32 sm:w-56'
              >
                {selectedPhoneId === item.id ? (
                  item.videoUrl ? (
                    <Phone
                      imgSrc={item.videoUrl}
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