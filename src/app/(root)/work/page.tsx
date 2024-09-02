"use client"

import Phone from '@/components/Phone'
import Wrapper from '@/components/Wrapper'
import { TextEffect } from '@/lib/framer-motion/TextEffect'
import Image from 'next/image'
import { useState } from 'react'


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

const ProfilePage = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState(2);

  const handleSelectedPhone = (id: number) => {
    setSelectedPhoneId(id);
  };

  return (
    <div className='relative flex w-full py-14 md:py-24 bg-gray-100'>
      <Wrapper className='space-y-8'>
        <div className='flex flex-col items-center w-full'>
          <h1 className="font-bold text-5xl text-center mt-8">Projects</h1>

          <TextEffect per='char' preset='fade' className="text-sm text-center mt-4 px-4">
            Building Web and Mobile applications, with amazing user experiences and function
          </TextEffect>
        </div>

        <div className='flex flex-col h-screen'>
          <div className='flex flex-col p-5 gap-3'>
            <h1 className='text-5xl font-bold'>Title</h1>
            <p className='text-xl font-medium'>Something here</p>
          </div>

          <div className='flex overflow-x-scroll custom-scrollbar whitespace-wrap p-5'>
            <div className='flex gap-5'>
              {uberData.map((item) => (
                <div 
                  key={item.id} 
                  onMouseEnter={() => handleSelectedPhone(item.id)}
                >
                  {selectedPhoneId === item.id ? (
                    <Phone
                      className='min-w-32 min-h-64 sm:w-56'
                      imgSrc={item.image}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={216}
                      height={216}
                      className='object-contain -mt-2 min-w-32 min-h-64 sm:w-[216px]'
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default ProfilePage
