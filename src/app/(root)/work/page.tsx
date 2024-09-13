"use client"

import Wrapper from '@/components/Wrapper'
import { TextEffect } from '@/components/framer-motion/TextEffect'

import WebSticky from './WebSticky'
import UberDemo from './expo/UberDemo'
import QueenDemo from './expo/QueenDemo'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const WorkPage = () => {

  useGSAP(
    () => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".colors",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          ".colors",
          {
            backgroundColor: "#ffffff",
          },
          {
            backgroundColor: "#30313c",
            overwrite: "auto",
          },
        )
    },
  );

  return (
    <>
      <div className='colors flex flex-col w-full md:pt-24'>
        <Wrapper>
          <div className='flex flex-col items-center my-32'>
            <h1 className="font-bold text-5xl text-center mt-8">Projects</h1>

            <TextEffect per='char' preset='fade' className="text-sm text-center mt-4 px-4">
              Building Web and Mobile applications, with amazing user experiences and function
            </TextEffect>
          </div>
        </Wrapper>

        <UberDemo />
        <QueenDemo />

        <WebSticky />
      </div>
    </>
  )
}

export default WorkPage
