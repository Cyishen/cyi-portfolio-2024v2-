import TextSpan from '@/components/framer-motion/TextSpan'
import Wrapper from '../Wrapper'
import { displays } from '@/lib/icon'
import Image from 'next/image'


const Portfolio = () => {
  return (
    <div className="h-screen w-full">
      <Wrapper className='flex justify-center py-32'>
        <div className='flex flex-col justify-center items-center relative border-2 px-10 md:px-32 py-8 mb-32 rounded-[36px] h-fit'>
          <div className='absolute left-5 -top-4'>
            <p className='text-2xl font-bold bg-white px-3 md:px-5'>Welcome to my</p>
          </div>

          <div className='flex flex-col justify-center items-center -space-y-4 sm:-space-y-10'>
            <h1 className='w-full text-7xl md:text-[15vw] font-extrabold'>
              P<TextSpan>o</TextSpan>rt
            </h1>

            <h1 className='text-7xl md:text-[13vw] font-extrabold ml-32 md:ml-56'>
              folio
            </h1>
          </div>

          <div className='w-full flex justify-end'>
            <Image src={displays.cyiCode} alt='cyi code' width={70} height={70} />
          </div>

          <div className='absolute right-5 -bottom-4'>
            <p className='text-2xl font-bold bg-white px-3 md:px-5'>Developer</p>
          </div> 
        </div>
      </Wrapper>
    </div>
  )
}

export default Portfolio