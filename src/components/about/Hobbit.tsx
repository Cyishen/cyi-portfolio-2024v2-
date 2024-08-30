import Image from 'next/image'
import { icons } from '@/lib/icon'
import Copy from '@/lib/Copy'

const Hobbit = () => {
  return (
    <>
      <div className='md:col-span-2 about-title-type'>
        <h2 >education</h2>

        <div className='flex flex-col gap-2 mt-2'>
          <div>
            <p className='font-normal text-sm'>國立虎尾科技大學</p>
            <p className='font-normal text-sm'>機械系</p>
            <p className='font-thin text-[12px]'>2004 - 2008</p>
          </div>
        </div>
      </div>

      <div className='md:col-span-2 p-4 md:bg-gray-100 md:rounded-xl'>
        <h2 className='font-semibold text-xl capitalize'>contact</h2>

        <div className='flex flex-col gap-2 mt-2'>
          <div className='flex w-fit items-center justify-center gap-2'>
            <Image src={icons.phone} alt='phone' width={28} height={28}/>
            <Copy title='0983-879460'/>
          </div>

          <div className='flex w-fit items-center justify-centers gap-2'>
            <Image src={icons.email} alt='email' width={28} height={28}/>
            <Copy title='halu0614@gmail.com'/>
          </div>
        </div>
      </div>

      <div className='md:col-span-2 about-title-type'>
        <h2>interests</h2>

        <div className='flex gap-2 mt-2 overflow-hidden overflow-x-scroll custom-scrollbar whitespace-wrap'>
          <div className='flex flex-col w-fit items-center justify-center'>
            <Image src={icons.workout} alt='workout' width={30} height={30}/>
            <p className='font-thin text-sm'>workout</p>
          </div>

          <div className='flex flex-col w-fit items-center justify-center'>
            <Image src={icons.browse} alt='browse' width={30} height={30}/>
            <p className='font-thin text-sm'>browse</p>
          </div>

          <div className='flex flex-col w-fit items-center justify-center'>
            <Image src={icons.drama} alt='drama' width={30} height={30}/>
            <p className='font-thin text-sm'>drama</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hobbit