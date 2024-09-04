"use client"

import Wrapper from '@/components/Wrapper'
import { TextEffect } from '@/lib/framer-motion/TextEffect'

import UberDemo from './expo/UberDemo'
import DuoDemo from './web/DuoDemo'
import ExpoSticky from './ExpoSticky'


const WorkPage = () => {

  return (
    <div className='flex flex-col w-full md:py-24'>
      <Wrapper>
        <div className='flex flex-col items-center w-full mb-10'>
          <h1 className="font-bold text-5xl text-center mt-8">Projects</h1>

          <TextEffect per='char' preset='fade' className="text-sm text-center mt-4 px-4 -z-10">
            Building Web and Mobile applications, with amazing user experiences and function
          </TextEffect>
        </div>
      </Wrapper>

      <ExpoSticky />

      {/* <div className='w-full flex justify-center items-center bg-white'>
        <UberDemo />
      </div> */}

      <div className='w-full flex justify-center items-center bg-gray-50'>
        <DuoDemo />
      </div>
    </div>
  )
}

export default WorkPage
