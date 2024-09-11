import { icons } from "@/lib/icon"
import Image from "next/image"


const Introduce = () => {
  return (
    <>
      <div className='col-span-1 md:col-span-1 about-title-type'>
        <div className="flex justify-between items-start gap-5 md:flex-col md:justify-start md:items-center">
          <div className='min-w-32 min-h-32 rounded-full border flex justify-center items-center'>
            <h2 className="w-[120px] h-[120px] rounded-full flex justify-center items-center bg-white/55">
              Cyi
            </h2>
          </div>

          <div className="flex justify-center items-center self-center w-full">
            <div className="flex gap-3">
              <Image src={icons.github} width={32} height={32} alt="github" className="cursor-pointer"/>
              <Image src={icons.linkedin} width={32} height={32} alt="github" className="cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>

      <div className='col-span-1 md:col-span-3'>
        <div className='flex flex-col gap-2 mt-2'>
          <div className='p-4'>
            <p className='font-bold text-md'>Hi, I&apos;m Yi Shen.</p>

            <p className='font-normal text-sm mt-2'>
              I am a highly motivated person and a fast learner. Have good communication and analytical skills. 
            </p>

            <p className='font-normal text-sm mt-2'>
              My positive attitude and high emotional intelligence, bring positive energy to my teammates, enhancing our efficiency. I am confident in my ability to contribute effectively to the team.
            </p>

            <p className='font-normal text-sm mt-2'>
              With years of experience in both engineering and sales, I have successfully navigated various roles, whether in R&D or collaborating with cross-functional teams and clients.
            </p>

            <p className='font-normal text-sm mt-2'>
              My ability to analyze problems and provide effective solutions has been a consistent strength throughout my career.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduce