"use client"

import Phone from '@/components/Phone'
import Image from 'next/image'
import { useState } from 'react'
import Hashtags from '../Hashtag'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const uberData = [
  {
    id: 1,
    name: 'Uber',
    image: '/template/uber1.jpg',
    gifUrl:'',
  },
  {
    id: 2,
    name: 'Uber2',
    image: '/template/uber2.jpg',
    gifUrl: 'https://cloud.appwrite.io/v1/storage/buckets/6540b1adafb3e0b6c69c/files/66d6e5cec4795ddbab35/view?project=65406b8287948e7ae18a&project=65406b8287948e7ae18a&mode=admin',
  },
  {
    id: 3,
    name: 'Uber3',
    image: '/template/uber3.jpg',
    gifUrl: 'https://cloud.appwrite.io/v1/storage/buckets/6540b1adafb3e0b6c69c/files/66d6e7acdf652b7c75a6/view?project=65406b8287948e7ae18a&project=65406b8287948e7ae18a&mode=admin',
  },
]


const UberDemo = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState<number>(1);

  const handleSelectedPhone = (id: number) => {
    setSelectedPhoneId(id);
  };

  return (
    <div className='w-full flex flex-col p-3 md:p-20 overflow-hidden bg-white'>
      <div className='w-full md:px-20 py-5 space-y-5'>
        <div className='w-full flex flex-col rounded-2xl p-5 space-y-3 shadow-lg'>
          <div className='w-full flex flex-col gap-3'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Title.</h1>
            <p className='text-xl font-medium'>Something here</p>
          </div>

          <div className='flex overflow-x-scroll custom-scrollbar whitespace-nowrap'>
            <Hashtags tags={['expo', 'clerk', 'tailwindCSS']} />
          </div>

          <Link href='/' target='_blank'>
            <Button size='sm' className='w-1/3'>
              Demo
            </Button>
          </Link>
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
                      className='rounded-[22px] sm:rounded-[38px]'
                    />
                  ): (
                    <Phone
                    imgSrc={item.image}
                  />
                  )
                ) : (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={216}
                    height={216}
                    className='object-contain min-w-28 mx-2'
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