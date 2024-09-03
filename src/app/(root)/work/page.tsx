"use client"

import Wrapper from '@/components/Wrapper'
import { TextEffect } from '@/lib/framer-motion/TextEffect'
import UberDemo from './expo/UberDemo'


const ProfilePage = () => {

  return (
    <div className='relative flex flex-col w-full py-14 md:py-24'>
      <Wrapper>
        <div className='flex flex-col items-center w-full mb-10'>
          <h1 className="font-bold text-5xl text-center mt-8">Projects</h1>

          <TextEffect per='char' preset='fade' className="text-sm text-center mt-4 px-4">
            Building Web and Mobile applications, with amazing user experiences and function
          </TextEffect>
        </div>
      </Wrapper>

      <div className='w-full flex justify-center items-center md:px-40 bg-gray-200'>
        <UberDemo />
      </div>
    </div>
  )
}

export default ProfilePage
