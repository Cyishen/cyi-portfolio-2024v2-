import Image from 'next/image'
import { icons } from '@/lib/icon'
import Copy from '@/lib/Copy'
import { motion } from 'framer-motion'

const hobbies = [
  {
    icon: icons.workout,
    label: 'workout'
  },
  {
    icon: icons.browse,
    label: 'browse'
  },
  {
    icon: icons.drama,
    label: 'drama'
  },
]

const iconJumpVariant = {
  initial: {
    y: 0,
    boxShadow: 'none',
  },
  animate: {
    y: -10,
    boxShadow: '3px 3px 0px 0px rgba(0,0,0,1)',
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse' as 'reverse',
    },
  }
};

const containerVariants = {
  animate: {
    transition: {
      delay: 1,
      staggerChildren: 1,
    },
  },
};


const Hobbit = () => {
  return (
    <>
      <div className='md:col-span-2 p-4 bg-gray-100 rounded-xl'>
        <h2 className='font-semibold text-xl capitalize'>education</h2>

        <div className='flex flex-col gap-2 mt-2'>
          <div>
            <p className='font-normal text-sm'>國立虎尾科技大學</p>
            <p className='font-normal text-sm'>Mechanical Engineering</p>
            <p className='font-thin text-[12px]'>2004 - 2008</p>
          </div>
        </div>
      </div>

      <div className='md:col-span-2 p-4 bg-gray-100 rounded-xl'>
        <h2 className='font-semibold text-xl capitalize'>contact</h2>

        <div className='flex flex-col gap-2 mt-2 mr-6'>
          <div className='flex items-center gap-2'>
            <Image src={icons.phone} alt='phone' width={28} height={28} />
            <Copy title='Taiwan' />
          </div>

          <div className='flex items-center gap-2'>
            <Image src={icons.email} alt='email' width={28} height={28} />
            <div className=''>
              <Copy title='halu0614@gmail.com' />
            </div>
          </div>
        </div>
      </div>

      <div className='md:col-span-2 p-4 bg-gray-100 rounded-xl'>
        <h2 className='font-semibold text-xl capitalize'>interests</h2>

        <motion.div
          variants={containerVariants}
          animate="animate"
          className='flex gap-4 mt-1 overflow-hidden overflow-x-scroll custom-scrollbar whitespace-wrap'
        >
          {hobbies.map((item) => (
            <div
              key={item.label}
              className='flex flex-col w-fit items-center justify-center pt-2 gap-1'
            >
              <motion.div
                variants={iconJumpVariant}
                className='p-1 cursor-pointer rounded-sm'
              >
                <Image src={item.icon} alt={item.label} width={28} height={28} />
              </motion.div>

              <p className='font-normal text-sm capitalize'>{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Hobbit