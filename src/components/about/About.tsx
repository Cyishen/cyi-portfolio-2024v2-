import Wrapper from '../Wrapper'

import Introduce from './Introduce'
import Experience from './Experience'
import Hobbit from './Hobbit'

import SkillFrontend from './SkillFrontend'
import SkillBackend from './SkillBackend'
import SkillOther from './SkillOther'


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

            <div className='grid grid-cols-1 gap-3'>
              <div className='col-span-1 about-title-type'>
                <h2>skill</h2>
                <SkillFrontend />
                <SkillBackend />
                <SkillOther />
              </div>
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