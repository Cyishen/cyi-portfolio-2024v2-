import Wrapper from '../Wrapper'

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
              <div className='col-span-1 md:col-span-1 about-title-type'>
                <h2>photo</h2>
              </div>


              <div className='col-span-1 md:col-span-3'>
                <div className='flex flex-col gap-2 mt-2'>
                  <div className='p-4'>
                    <p className='font-bold text-md'>Hi, I&apos;m Yi Shen.</p>

                    <p className='font-normal text-sm mt-2'>
                      I am a highly motivated person and a fast learner. Have good communication and analytical skills. My positive attitude and high emotional intelligence, bring positive energy to my teammates, enhancing our efficiency. I am confident in my ability to contribute effectively to team or project.
                    </p>

                    <p className='font-normal text-sm mt-2'>
                      With years of experience in both engineering and sales, I have successfully navigated various roles, whether in R&D or collaborating with cross-functional teams and clients. My ability to analyze problems and provide effective solutions has been a consistent strength throughout my career.
                    </p>

                    <p className='font-normal text-sm mt-2'>
                      My ability to analyze problems and provide effective solutions has been a consistent strength throughout my career.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex overflow-x-scroll md:grid md:grid-cols-6 gap-4'>
              <Hobbit />
            </div>

            <div className='grid grid-cols-1 gap-3'>
              <div className='col-span-1 md:col-span-4 about-title-type'>
                <p>skill</p>
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