"use client"

import Wrapper from '@/components/Wrapper'
import { TextEffect } from '@/lib/framer-motion/TextEffect'

import ExpoSticky from './ExpoSticky'
import WebSticky from './WebSticky'


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
      <WebSticky />
    </div>
  )
}

export default WorkPage
