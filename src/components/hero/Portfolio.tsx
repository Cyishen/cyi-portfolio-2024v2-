import TextSpan from '@/components/framer-motion/TextSpan'
import Wrapper from '../Wrapper'

const Portfolio = () => {
  return (
    <div className="h-screen w-full">
      <Wrapper className='relative'>
        <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/4'>
          <div className='relative border-2 px-10 md:px-32 py-8 rounded-[36px]'>
            <div className='absolute left-5 -top-4'>
              <p className='text-2xl font-bold bg-white px-3 md:px-5'>Welcome to my</p>
            </div>

            <div className='flex flex-col justify-center items-center -space-y-4 sm:-space-y-10'>
              <h1 className='text-7xl w-full md:text-[180px] font-extrabold'>
                P<TextSpan>o</TextSpan>rt
              </h1>

              <h1 className='text-7xl md:text-[160px] font-extrabold ml-32 md:ml-56'>
                folio
              </h1>
            </div>

            <div className='absolute right-5 -bottom-4'>
              <p className='text-2xl font-bold bg-white px-3 md:px-5'>Developer</p>
            </div> 
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Portfolio