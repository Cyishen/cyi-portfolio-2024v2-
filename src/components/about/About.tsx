"use client"

import Wrapper from '../Wrapper'

import Introduce from './Introduce'
import Hobbit from './Hobbit'
import SkillDrag from './SkillDrag'
import Experience from './Experience'

import { motion, useInView } from 'framer-motion';
import { useRef } from "react";


const aboutVariants = {
  initial: {
    opacity: 0,
    filter: 'blur(5px)'
  },
  open: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
    filter: 'blur(0px)'
  },
  closed: {
    opacity: 0,
    transition: { duration: 1 }
  }
}


const About = () => {
  const jumpRef = useRef(null);
  const isInView = useInView(jumpRef, { once: true })

  return (
    <div className="flex w-full py-12 md:py-24 bg-gray-50">
      <Wrapper>
        <div className="flex flex-col items-center w-full">
          <motion.div
            className='w-full space-y-4'
            variants={aboutVariants}
            initial="initial"
            animate={isInView ? "open" : "closed"}
            ref={jumpRef}
          >
            <motion.div variants={aboutVariants} className='grid grid-cols-1 md:grid-cols-4 gap-3'>
              <Introduce />
            </motion.div>

            <motion.div variants={aboutVariants} className='flex overflow-x-scroll custom-scrollbar whitespace-wrap md:grid md:grid-cols-6 gap-4'>
              <Hobbit />
            </motion.div>

            <motion.div variants={aboutVariants} className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-3">
              <SkillDrag />
            </motion.div>

            <motion.div variants={aboutVariants} className='grid grid-cols-1 md:grid-cols-1 gap-3'>
              <Experience />
            </motion.div>
          </motion.div>
        </div>
      </Wrapper>
    </div>
  )
}

export default About