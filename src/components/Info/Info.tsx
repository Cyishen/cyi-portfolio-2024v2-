import Link from 'next/link'
import Wrapper from '../Wrapper'
import { Button } from '../ui/button'
import TextSpan from '../framer-motion/TextSpan'
import { icons } from '@/lib/icon'
import Image from 'next/image'


const Info = () => {
  return (
    <div className="flex w-full py-12 md:py-24 h-screen bg-yellow-100">
      <Wrapper>
        <div className="flex flex-col items-center text-center mt-20">
          <h2 className="font-black text-7xl md:text-[10vw]">
            Let's See
          </h2>
          <p className="font-black text-7xl md:text-[10vw] motion-gradient-word">
            More {''}
            <TextSpan>!</TextSpan>
          </p>
        </div>

        <div className='flex justify-center items-center p-5'>
          <div className='flex items-center h-20 w-full sm:w-[20vw] relative'>
            <Link href={'/work'} className='w-full'>
              <Button variant='seeMore' size='rounded' className='w-full'>
                See More
              </Button>
            </Link>
            
            <Image 
              src={icons.zoom} 
              alt="zoom" 
              className="absolute w-[15vw] sm:w-[5vw] bottom-0 right-0 -translate-x-1/2 animate-zoom-move [animation-duration:5s] pointer-events-none" 
            />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Info