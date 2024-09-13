import Copy from '@/lib/Copy'
import Wrapper from '../Wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { icons } from '@/lib/icon'
import { AnimatedNumberInView } from '../AnimatedNumberInView'
import { Star } from 'lucide-react'
import Email from './Email'

const Contact = () => {


  return (
    <div id="contact" className="relative flex w-full pt-12 pb-5 md:pt-24 md:pb-10 border-t-2 rounded-t-3xl bg-white/55 backdrop-blur-lg transition-all">
      <div className="absolute top-5 left-1/2 -translate-x-1/2 h-2 w-14 rounded-full bg-gray-300" />

      <Wrapper>
        <div className='w-full flex flex-col h-full'>
          <div className="w-full flex items-center justify-center ">
            <h2 className="font-extrabold text-3xl md:text-5xl pt-2">
              Contact
            </h2>
          </div>

          <div className='w-fit flex flex-col items-start justify-center mx-auto mt-10 gap-2 pl-4'>
            <div className='flex items-center justify-center gap-2'>
              <Image src={icons.phone} alt='phone' width={28} height={28} />
              <Copy title='Taiwan' />
            </div>

            <div className='flex items-center justify-center gap-2'>
              <Image src={icons.email} alt='email' width={28} height={28} />
              <Copy title='halu0614@gmail.com' />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center mt-10 '>
            <p className='font-extrabold text-2xl md:text-3xl'>Satisfy </p>

            <div className='flex m-2'>
              <Star className='h-4 w-4 text-star-2 fill-star-2' />
              <Star className='h-4 w-4 text-star-2 fill-star-2' />
              <Star className='h-4 w-4 text-star-2 fill-star-2' />
              <Star className='h-4 w-4 text-star-2 fill-star-2' />
              <Star className='h-4 w-4 text-star-2 fill-star-2' />
            </div>

            <AnimatedNumberInView />
          </div>

          <div className='mt-10 flex justify-center'>
            <Email />
          </div>

          <div className="w-full flex flex-col items-center justify-center mt-10">
            <Link href='#hero'>
              <p className='font-semibold'>Back to top</p>
            </Link>

            <div className='flex items-center justify-center gap-1'>
              <p className='font-thin text-xl'>&copy;</p>

              <div className='flex gap-1'>
                <p className='font-semibold'>2024 by</p>
                <p className='font-semibold'>CYI</p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Contact