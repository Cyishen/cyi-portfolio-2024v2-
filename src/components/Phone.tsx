import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc?: string
  dark?: boolean
}

const Phone = ({ imgSrc, dark = false, className, ...props }: PhoneProps) => {
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
            ? '/iphone_8961731.png'
            : '/iphone_8961731.png'
        }
        className='pointer-events-none z-50 select-none'
        alt='phone frame'
      />

      <div className='absolute -z-10 inset-0'>
        <img
          className='object-cover min-w-full min-h-full pb-3 pt-1 px-1'
          src={imgSrc}
          alt='display image'
        />
      </div>
    </div>
  )
}

export default Phone
