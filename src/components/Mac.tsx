import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface MacProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc?: string
  dark?: boolean
}

const Mac = ({ imgSrc, dark = false, className, ...props }: MacProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? '/mac.png'
            : '/mac.png'
        }
        className='pointer-events-none z-50 select-none'
        alt='mac frame'
      />

      <div className='absolute -z-10 inset-0 px-5 pb-3 pt-0.5 sm:pb-6 sm:px-10 sm:pt-1'>
        <img
          className='object-cover min-w-full min-h-full'
          src={imgSrc}
          alt='display image'
        />
      </div>
    </div>
  )
}

export default Mac