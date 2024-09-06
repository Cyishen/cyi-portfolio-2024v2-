import Wrapper from '@/components/Wrapper'
import { images } from '@/lib/icon'
import Image from 'next/image'
import { Fragment } from 'react'


const rowOneImages = [
  {
    url: images.app,
    title: "Event Web1"
  },
  {
    url: images.app,
    title: "Social Media Clone2"
  },
  {
    url: images.app,
    title: "Sample Blog3"
  },
]

const Other = () => {
  return (
    <div className='flex flex-col w-full py-14 md:py-24 h-screen bg-[#30313c]'>
      <Wrapper>
        <div className='flex flex-col items-center w-full text-white'>
          <h2 className="font-bold text-5xl text-center">其他展示</h2>
          <p className="font-bold text-md text-center">something here</p>
        </div>

        <div className='mt-10 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_5%,black_90%,transparent)] py-4'>
          <div className='flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]'>
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {rowOneImages.map((item) => (
                  <div 
                    key={item.title} 
                    className='flex max-w-[200px] md:min-w-[300px] border rounded-2xl hover:translate-y-[-10px] transition duration-300 bg-gray-50 overflow-hidden'
                  >
                    <div className='flex flex-col'>
                      <Image
                        src={item.url}
                        alt={item.title}
                        width={300}
                        height={200}
                      />
                    
                      <div className='flex flex-col p-2 sm:p-4'>
                        <p className='flex mt-2'>{item.title}</p>
                        <p className='flex mt-2'>des</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Other