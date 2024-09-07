import Link from 'next/link'
import Wrapper from '../Wrapper'
import { Button } from '../ui/button'
import TextSpan from '../framer-motion/TextSpan'

const Info = () => {
  return (
    <div className="flex w-full py-12 md:py-24 h-screen bg-yellow-100">
      <Wrapper>
        <div className='flex justify-center items-center p-5'>
          <Link href={'/work'} className='flex items-center h-20 w-full sm:w-[20vw]'>
            <Button variant='seeMore' size='rounded' className='w-full'>
              See More
            </Button>
          </Link>
        </div>

        <div className="flex flex-col items-center text-center mt-20">
          <h2 className="font-black text-7xl md:text-[10vw]">
            Thank You<TextSpan>!</TextSpan>
          </h2>
        </div>
      </Wrapper>
    </div>
  )
}

export default Info