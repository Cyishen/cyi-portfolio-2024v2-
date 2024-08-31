import Wrapper from '../Wrapper'

import Introduce from './Introduce'
import Hobbit from './Hobbit'
import SkillDrag from './SkillDrag'
import Experience from './Experience'


const About = () => {
  return (
    <div className="flex w-full py-12 md:py-24 bg-gray-50">
      <Wrapper>
        <div className="flex flex-col items-center w-full">
          <div className='w-full space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
              <Introduce />
            </div>

            <div className='flex overflow-x-scroll custom-scrollbar whitespace-wrap md:grid md:grid-cols-6 gap-4'>
              <Hobbit />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-3">
              <SkillDrag />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 gap-3'>
              <Experience />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default About