import HeroSatellite from "../HeroSatellite";
import { TextEffect } from "../../lib/framer-motion/TextEffect";
import { Button } from "../ui/button"
import { SquareTerminal, StarIcon } from 'lucide-react';
import Wrapper from "../Wrapper";


const Hero = () => {
  return (
    <div className='flex w-full py-28 md:py-48 relative overflow-hidden bg-gray-50 h-screen'>
      <Wrapper>
        {/* <div className="size-[620px] hero-ring"/>
        <div className="size-[820px] hero-ring"/>
        <div className="size-[1020px] hero-ring"/> */}

        {/* <HeroSatellite size={500} rotation={-45}>
          <StarIcon className="size-14"/>
        </HeroSatellite> */}

        <div className='flex flex-col items-center w-full'>
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <h2 className="font-extrabold text-3xl md:text-5xl py-2">
                Hi, there
              </h2>
              <div className="animate-accordion-hi [animation-duration:2s]">
                <span className="text-3xl">👋</span>
              </div>
            </div>

            <h2 className="font-extrabold text-3xl md:text-5xl py-2">
              I&apos;m 
            </h2>
            <h2 className="font-extrabold text-3xl md:text-5xl pb-4">Chen Yi Shen</h2>

            <div className="bg-black px-4 py-1 inline-flex text-white items-center justify-center gap-2 rounded-full ">
              <div className="bg-green-500 size-2 rounded-full"></div>
              <p className="text-sm font-semibold"> Available Contact </p>
            </div>
          </div>

          <h1 className="font-bold text-3xl text-center mt-8">Developer</h1>
          
          <TextEffect per='char' preset='fade' className="text-sm text-center mt-4 px-4">
            Building Web and Mobile applications, with amazing user experiences and function
          </TextEffect>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-10">
            <Button>
              My Works Demo &nbsp;<SquareTerminal />
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Hero