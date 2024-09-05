import Wrapper from '@/components/Wrapper'
import ProjectHeader from './ProjectHeader'



const Other = () => {
  return (
    <div className='flex flex-col w-full md:py-24 h-screen bg-gray-100'>
      <Wrapper className='bg-pink-200'>
        <div className='flex flex-col items-center w-full'>
          <h1 className="font-bold text-5xl text-center">其他展示</h1>
        </div>

        <div className='flex flex-col items-center w-full'>
          <div className='w-[200px] h-[150px]'>

          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Other