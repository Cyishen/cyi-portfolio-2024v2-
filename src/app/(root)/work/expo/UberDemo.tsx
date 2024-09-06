"use client"

import Phone from '@/components/Phone'
import Image from 'next/image'
import { useState } from 'react'

import { template } from '@/lib/icon'
import PhoneVideo from '@/components/PhoneVideo'
import ProjectHeader from '../ProjectHeader'

const uberData = [
  {
    id: 1,
    name: 'Uber',
    image: template.uberOne,
    videoUrl:'',
  },
  {
    id: 2,
    name: 'Uber2',
    image: template.uberTwo,
    videoUrl: '/welcome.mp4',
  },
  {
    id: 3,
    name: 'Uber3',
    image: template.uberThree,
    videoUrl: '',
  },
]


const UberDemo = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState<number>(1);

  const handleSelectedPhone = (id: number) => {
    setSelectedPhoneId(id);
  };

  return (
    <div className='w-full flex flex-col p-3 md:p-20 overflow-hidden'>
      <div className='w-full md:px-20 py-5 space-y-5'>        
        <ProjectHeader 
          titleWord={'搭車'} 
          secondWord={'用途: Uber clone'} 
          tags={['react native','expo', 'clerk', 'tailwindCSS']} 
          descriptionWords={[
            'React Native 運用',
            'Expo 運用',
            '地圖導航',
          ]}
          bgColor='bg-black'
          textColor='text-white'
          descriptionColor='text-white'
          showStore={true} 
        />

        <div className='flex overflow-x-scroll custom-scrollbar whitespace-wrap'>
          <div className='flex items-center justify-center gap-5 h-[280px] sm:h-[500px]'>
            {uberData.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => handleSelectedPhone(item.id)}
                className='flex cursor-pointer w-32 sm:w-56'
              >
                {selectedPhoneId === item.id ? (
                  item.videoUrl ? (
                    <PhoneVideo
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

export default UberDemo