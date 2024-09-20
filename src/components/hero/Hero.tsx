"use client"

import { TextEffect } from "../framer-motion/TextEffect";
import { Button } from "../ui/button"
import { SquareTerminal, StarIcon } from 'lucide-react';
import Wrapper from "../Wrapper";

import HeroSatellite from "../HeroSatellite";
import {  motion, useInView } from 'framer-motion';
import { useRef } from "react";

export const textVariants = {
  initial: {
      y: 50,
      opacity: 0,
      filter: 'blur(10px)'
  },
  open: {
      y: 0,
      opacity: 1,
      transition: {
          duration: 1,
          staggerChildren: 0.3,
      },
      filter: 'blur(0px)'
  },
  closed: {
      opacity: 0,
      transition: {duration: 0.5}
  }
}

const Hero = () => {
  const jumpRef = useRef(null);
  const isInView = useInView(jumpRef, { once: false })

  return (
    <div id='hero' className='relative flex w-full py-28 md:py-48 h-screen border-t-2 rounded-t-3xl overflow-hidden bg-gray-50'>
      <div className="absolute top-5 left-1/2 -translate-x-1/2 h-2 w-14 rounded-full bg-gray-200"/>
      <Wrapper>
        <div className="size-[620px] hero-ring"/>
        <div className="size-[820px] hero-ring"/>
        <div className="size-[1020px] hero-ring"/>

        {/* <HeroSatellite size={500} rotation={-45}>
          <StarIcon className="size-14"/>
        </HeroSatellite> */}

        <div className='flex flex-col items-center w-full'>
          <motion.div 
              className="flex flex-col items-center"
              variants={textVariants}
              initial="initial"
              animate={isInView ? "open" : "closed"}
              ref={jumpRef}
          >
            <motion.div variants={textVariants} className="flex items-center gap-2" >
              <h2 className="font-extrabold text-3xl md:text-5xl py-2" >
                Hi, there
              </h2>
              <div className="animate-accordion-hi [animation-duration:2s]">
                <span className="text-3xl">👋</span>
              </div>
            </motion.div>

            <motion.h2 variants={textVariants} className="font-extrabold text-3xl md:text-5xl py-2"               >
              I&apos;m 
            </motion.h2>

            <motion.h2 variants={textVariants} className="font-extrabold text-3xl md:text-5xl pb-4"               >Chen Yi Shen</motion.h2>

            <motion.div variants={textVariants} className="bg-black px-4 py-1 inline-flex text-white items-center justify-center gap-2 rounded-full">
              <div className="bg-green-500 size-2 rounded-full"></div>
              <p className="text-sm font-semibold"> Available Contact </p>
            </motion.div>
          </motion.div>

          <h1 className="font-bold text-3xl text-center mt-8">Developer</h1>
          
          <TextEffect per='char' preset='fade' className="text-sm text-center mt-4 px-4">
            Building Web and Mobile applications, with amazing user experiences and function
          </TextEffect>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-10">
            <a href='/cyi.pdf' target="_blank" className="bg-black px-4 py-1 text-white">
              My CV
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Hero