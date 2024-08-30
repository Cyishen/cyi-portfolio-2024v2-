import Image from 'next/image'
import { Button } from '../ui/button'

const featureProject = [
  {
    id:1,
    image: '/product-image.png',
    title: 'React - Next.js',
    item: [
      { des: "something here 1" },
      { des: "something here 2" },
      { des: "something here 3" },
    ],
    path: ''
  },
  {
    id:2,
    image: '/product-image.png',
    title: 'React Native',
    item: [
      { des: "something here 4" },
      { des: "something here 5" },
      { des: "something here 6" },
    ],
    path: ''
  },
  {
    id:3,
    image: '/product-image.png',
    title: 'Python',
    item: [
      { des: "something here 7" },
      { des: "something here 8" },
      { des: "something here 9" },
    ],
    path: ''
  },
]


const StickyFeature = () => {
  return (
    <div className='w-full'>
      {featureProject.map((project, index) => (
        <div 
          key={project.id} 
          className='sticky w-full border-2 rounded-3xl bg-white overflow-hidden px-8 pt-8 mb-4'
          style={{
            top: `calc(72px + ${index * 70}px)`
          }}
        >
          <div className='grid lg:grid-cols-2 gap-8'>
            <div>
              <div className='flex'>
                <h2 className='flex justify-center font-bold capitalize text-3xl'>
                  {project.title}
                </h2>
              </div>

              <ul className='flex flex-col gap-1 mt-4'>
                {project.item.map((item, index) => (
                  <li key={index} className='list-disc list-inside flex gap-2 text-md cursor-pointer hover:text-gray-500'>
                    <span>{item.des}</span>
                  </li>
                ))}
              </ul>

              <div className='w-full flex'>
                <Button variant="default" size="sm" className='w-1/2 my-4'>
                  View
                </Button>
              </div>
            </div>
              
            <div>
              <Image 
                src={project.image} 
                alt='image' 
                width={800} 
                height={500} 
                className='object-cover rounded-t-2xl'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StickyFeature