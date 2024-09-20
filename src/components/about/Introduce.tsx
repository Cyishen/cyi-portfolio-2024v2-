import { icons } from "@/lib/icon"
import Image from "next/image"

const Introduce = () => {

  const handleClick = (e: any) => {
    const userConfirmed = confirm("Check YiShen CV ?");
    if (!userConfirmed) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className='col-span-1 md:col-span-1 rounded-xl bg-blue-950 font-semibold text-xl p-4'>
        <div className="flex justify-between items-start gap-5 md:flex-col md:justify-start md:items-center">
          <div className='min-w-32 min-h-32 rounded-full border flex justify-center items-center'>
            <h2 className="w-[120px] h-[120px] rounded-full flex justify-center items-center bg-white">
              Cyi
            </h2>
          </div>

          <div className="flex justify-center items-center self-center w-full">
            <div className="flex gap-3 px-4 py-1 rounded-full bg-white/55 backdrop-blur-lg">
              <div className="flex justify-center items-center">
                <Image src={icons.github} width={32} height={32} alt="github" className="cursor-pointer hover:invert transition duration-500 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] rounded-sm" />
              </div>

              <div className="flex justify-center items-center">
                <Image src={icons.linkedin} width={32} height={32} alt="github" className="cursor-pointer hover:invert transition duration-500 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] rounded-sm" />
              </div>

              <div className="flex justify-center items-center">
                <a
                  href='/cv_cyi.pdf'
                  target="_blank"
                  onClick={handleClick}
                  className="hover:invert transition duration-500 hover:-translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] rounded-sm"
                >
                  <Image src='/cv.svg' width={32} height={32} alt="github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='col-span-1 md:col-span-3'>
        <div className='flex flex-col gap-2 mt-2'>
          <div className='p-4'>
            <p className='font-bold text-md'>Hi, I&apos;m Yi Shen.</p>

            <p className='font-normal text-sm mt-2'>
              I'm an optimistic and outgoing person who gets along well with colleagues. I bring a positive and fun atmosphere to the team, making work more enjoyable and efficient.
            </p>

            <p className='font-normal text-sm mt-2'>
              With experience in both engineering and sales, I've handled various roles and worked closely with cross-functional teams and clients.
            </p>

            <p className='font-normal text-sm mt-2'>
              I'm good at analyzing problems, optimizing processes, and improving efficiency. Whether working in a team or collaborating with other departments, I communicate effectively to keep projects moving smoothly and achieve our common goals.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduce