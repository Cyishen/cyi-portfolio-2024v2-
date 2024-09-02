import Copy from '@/lib/Copy'
import Wrapper from '../Wrapper'
import Link from 'next/link'
import Image from 'next/image'
import { icons } from '@/lib/icon'


const Contact = () => {


  return (
    <div id="contact" className="relative flex w-full py-12 md:py-24 h-screen border-t-2 rounded-t-3xl bg-white/55 backdrop-blur-lg transition-all">
      <div className="absolute top-5 left-1/2 -translate-x-1/2 h-2 w-14 rounded-full bg-gray-300" />
      <Wrapper>
        <div className='w-full flex flex-col h-full'>
          <div className="w-full flex items-center justify-center ">
            <h2 className="font-extrabold text-3xl md:text-5xl pt-2">
              Contact
            </h2>
          </div>
 
          <div className='w-full flex flex-col items-center justify-center mt-10 gap-2'>
            <div className='flex items-center justify-center gap-2'>
              <Image src={icons.phone} alt='phone' width={28} height={28} />
              <Copy title='0983-879460' />
            </div>

            <div className='flex items-center justify-center gap-2'>
              <Image src={icons.email} alt='email' width={28} height={28} />
              <Copy title='halu0614@gmail.com' />
            </div>
          </div>

          <div className="w-full flex justify-between mt-auto">
            <div className='flex items-center justify-center gap-1'>
              <p className='font-thin text-xl'>&copy;</p>

              <div className='flex gap-1'>
                <p className=''>2024 by</p>
                <p className=''>YI SHEN</p>
                <p className=''>CHEN</p>
              </div>
            </div>

            <Link href='#hero'>
              <p>Back to top</p>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Contact