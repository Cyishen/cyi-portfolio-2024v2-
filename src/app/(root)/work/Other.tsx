import { displays, images } from '@/lib/icon'
import Image from 'next/image'
import { Fragment } from 'react'


const rowOneImages = [
  {
    url: images.app,
    title: "app",
    des: "FullStack",
  },
  {
    url: displays.nail,
    title: "nail",
    des: "FullStack",
  },
  {
    url: displays.gpt,
    title: "ai chat",
    des: "FullStack",
  },
  {
    url: displays.duo,
    title: "Duo",
    des: "FullStack",
  },
  {
    url: displays.print,
    title: "print",
    des: "FullStack",
  },
  {
    url: displays.chat,
    title: "chat",
    des: "FullStack",
  },
  {
    url: displays.social,
    title: "social",
    des: "FullStack",
  },
  {
    url: displays.burger,
    title: "burger",
    des: "FullStack",
  },
]

const rowTwoImages = [
  {
    url: displays.apple,
    title: "appleWeb clone",
    des: "",
  },
  {
    url: displays.futurama,
    title: "futurama",
    des: "",
  },
  {
    url: displays.parallax,
    title: "parallax",
    des: "",
  },
  {
    url: displays.netflix,
    title: "netflix clone",
    des: "",
  },
  {
    url: displays.twitter,
    title: "twitter clone",
    des: "",
  },
]

const Other = () => {
  return (
    <div className='flex flex-col w-full py-14 md:py-24 bg-[#30313c]'>
        <div className='flex flex-col items-center w-full text-white'>
          <h2 className="font-bold text-5xl text-center">其他展示</h2>
          <p className="font-bold text-md text-center">something here</p>
        </div>

        <div className='mt-10 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4'>
          <div className='flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]'>
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {rowOneImages.map((item) => (
                  <div 
                    key={item.title} 
                    className='flex max-w-[200px] md:min-w-[300px] border rounded-2xl hover:translate-y-[-10px] transition duration-300 bg-gray-50 overflow-hidden'
                  >
                    <div className='flex flex-col pointer-events-none'>
                      <Image
                        src={item.url}
                        alt={item.title}
                        width={300}
                        height={200}
                        className='h-[60%]'
                      />
                    
                      <div className='flex flex-col p-2 sm:p-4 space-y-2 capitalize'>
                        <p className='font-bold'>{item.title}</p>
                        <p className='text-sm text-gray-500'>{item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>

        <div className='mt-10 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4'>
          <div className='flex gap-8 pl-8 flex-none animate-move-right [animation-duration:30s] hover:[animation-play-state:paused]'>
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {rowTwoImages.map((item) => (
                  <div 
                    key={item.title} 
                    className='flex max-w-[200px] md:min-w-[300px] border rounded-2xl hover:translate-y-[-10px] transition duration-300 bg-gray-50 overflow-hidden'
                  >
                    <div className='flex flex-col pointer-events-none'>
                      <Image
                        src={item.url}
                        alt={item.title}
                        width={300}
                        height={200}
                        className='h-[60%]'
                      />
                    
                      <div className='flex flex-col p-2 sm:p-4 space-y-2 capitalize'>
                        <p className='font-bold'>{item.title}</p>
                        <p className='text-sm text-gray-500'>{item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Other