import Image from 'next/image'
import { icons } from '@/lib/icon'
import Copy from '@/lib/Copy'
import { motion } from 'framer-motion'
import { Gamepad2, GraduationCap, MessageCircle } from 'lucide-react';

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
      <motion.div className='md:col-span-2 p-4 bg-slate-100 rounded-xl relative group'
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
      >
        <motion.div className='absolute top-0 right-1'
          initial={{ rotateY: 0 }}
          whileInView={{ rotateY: 360 }}
          transition={{
            type: "tween",
            duration: 2,
          }}
        >
          <GraduationCap className="w-14 h-14 text-gray-200 group-hover:rotate-[20deg]" />
        </motion.div>

        <h2 className='font-semibold text-xl capitalize'>education</h2>

        <div className='flex flex-col gap-2 mt-2 whitespace-nowrap'>
          <div>
            <p className='font-normal text-sm'>國立虎尾科技大學</p>
            <p className='font-normal text-sm'>Mechanical Engineering</p>
            <p className='font-thin text-[12px]'>2004 - 2008</p>
          </div>
        </div>
      </motion.div>

      <motion.div className='md:col-span-2 p-4 bg-slate-100 rounded-xl relative group'
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
      >
        <motion.div className='absolute top-0 right-1'
          initial={{ rotateY: 0 }}
          whileInView={{ rotateY: 360 }}
          transition={{
            type: "tween",
            duration: 2,
          }}
        >
          <MessageCircle className="w-12 h-12 text-gray-200 group-hover:rotate-[20deg]" />
        </motion.div>

        <h2 className='font-semibold text-xl capitalize'>contact</h2>

        <div className='flex flex-col gap-2 mt-2 mr-6'>
          <div className='flex items-center gap-2'>
            <Image src={icons.phone} alt='phone' width={28} height={28}
              className='cursor-pointer duration-500 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-sm'
            />
            <Copy title='Taiwan' />
          </div>

          <div className='flex items-center gap-2'>
            <Image src={icons.email} alt='email' width={28} height={28}
              className='cursor-pointer duration-500 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-sm'
            />
            <div className=''>
              <Copy title='halu0614@gmail.com' />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div className='md:col-span-2 bg-slate-100 rounded-xl relative group'
        whileHover={{ scale: 0.95, rotate: "-1deg" }}
      >
        <motion.div className='absolute top-0 right-0'
          initial={{ rotateY: 0 }}
          whileInView={{ rotateY: 360 }}
          transition={{
            type: "tween",
            duration: 2,
          }}
        >
          <Gamepad2 className="w-14 h-14 text-gray-200 rotate-[30deg] group-hover:rotate-[20deg]" />
        </motion.div>

        <div className='p-4 w-full h-full'>
          <h2 className='font-semibold text-xl capitalize'>interests</h2>

          {/* <motion.div
            variants={containerVariants}
            animate="animate"
            className="flex gap-4 mt-1 overflow-hidden overflow-x-scroll custom-scrollbar whitespace-wrap"
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
          </motion.div> */}

          <div className="flex gap-4 mt-2 overflow-hidden overflow-x-scroll custom-scrollbar whitespace-wrap py-1">
            {hobbies.map((item) => (
              <div key={item.label} className='flex flex-col w-fit items-center justify-center p-1'>
                <div className='cursor-pointer rounded-sm'>
                  <Image src={item.icon} alt={item.label} width={32} height={32} 
                    className='p-1 cursor-pointer duration-500 hover:-translate-y-2 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-sm'
                  />
                </div>

                <p className='font-normal text-sm capitalize'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Hobbit