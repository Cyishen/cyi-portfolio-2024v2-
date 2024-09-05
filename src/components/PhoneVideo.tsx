import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc?: string
  dark?: boolean
}

const PhoneVideo = ({ imgSrc, dark = false, className, ...props }: PhoneProps) => {
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
            ? '/iphone-for-video.png'
            : '/iphone-for-video.png'
        }
        className='pointer-events-none z-50 select-none'
        alt='phone frame'
      />

      <div className='absolute -z-10 inset-0 flex justify-center items-center'>
        <div className='flex h-full w-fit py-1 sm:py-1.5'>
          <video
            className='object-cover min-w-full min-h-full rounded-2xl sm:rounded-3xl' 
            src={imgSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  )
}

export default PhoneVideo
