"use client"

import { useState } from 'react'

import Mac from '@/components/Mac'
import { template } from '@/lib/icon'
import ProjectHeader from '../ProjectHeader'


const webData = [
  {
    id: 1,
    name: 'Wbe1',
    image: template.duoOne,
  },
  {
    id: 2,
    name: 'Wbe2',
    image: template.duoTwo,
  },
  {
    id: 3,
    name: 'Wbe3',
    image: template.duoThree,
  },
]

const demoUrl = 'https://duo-nine.vercel.app/'

const DuoDemo = () => {
  const [selectedPhoneId, setSelectedPhoneId] = useState<number>(1);

  const handleSelectedPhone = (id: number) => {
    setSelectedPhoneId(id);
  };

  return (
    <div className='w-full flex flex-col py-5 px-3 md:px-20 md:py-14 overflow-hidden bg-gray-50 border-t rounded-t-3xl'>
      <div className="absolute top-5 md:top-8 left-1/2 -translate-x-1/2 h-2 w-14 rounded-full bg-gray-300" />

      <div className='w-full md:px-20 py-5 space-y-5'>
        <ProjectHeader 
          titleWord={'語言學習 Language'} 
          secondWord={'用途: 學習語言'} 
          tags={['nextjs', 'tailwindCSS', 'stripe', 'Neon database', 'drizzle ORM']} 
          descriptionWords={[
            '資料庫記錄用戶學習進度',
            'React Admin後台管理課程',
            '身份驗證, 前後端Api串接',
            '金流串接Stripe 訂閱',
          ]}
          bgColor='bg-black'
          textColor='text-white'
          descriptionColor='text-white'
          showStore={false}
          demoUrl={demoUrl}
          buttonVariant='destructive' 
        />

        <div className='flex overflow-x-scroll custom-scrollbar whitespace-wrap'>
          <div className='flex gap-5 py-10'>
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
                <img
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

export default DuoDemo