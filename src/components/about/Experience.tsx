

const Experience = () => {
  return (
    <div className='col-span-1 md:col-span-1 about-title-type'>
      <h2 className="capitalize">experience</h2>
    
      <div className='flex flex-col gap-2 mt-2'>
        <div className="flex cursor-pointer p-2 hover:bg-white hover:rounded-lg gap-1 group">
          <div className="px-1 flex flex-col justify-start items-center">
            <div className="min-w-10 min-h-10 rounded-full border flex justify-center items-center group-hover:bg-sky-200">
              <p>R</p>
            </div>

            <div className="w-0.5 h-full bg-gray-200 mt-2 group-hover:bg-sky-200" />
          </div>

          <div>
            <div>
              <p className='font-bold text-sm'>R&D engineer</p>
              <p className='font-normal text-sm'>Dawning
                <span className='font-thin text-[12px]'> 2016/1 - 2022/7</span>
              </p>
            </div>

            <div className='text-sm font-light mt-5'>
              <p>Connecter and Switch products development.</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex cursor-pointer p-2 hover:bg-white hover:rounded-lg gap-1 group">
          <div className="px-1 flex flex-col justify-start items-center">
            <div className="min-w-10 min-h-10 rounded-full border flex justify-center items-center group-hover:bg-sky-200">
              <p>W</p>
            </div>

            <div className="w-0.5 h-full bg-gray-200 mt-2 group-hover:bg-sky-200" />
          </div>

          <div>
            <div>
              <p className='font-bold text-sm'>Warehouse staff</p>
              <p className='font-normal text-sm'>
                New Zealand 
                <span className="font-light text-[10px]"> working holiday</span>
                <span className='font-thin text-[12px]'> 2013/8 - 2015/7</span>
              </p>
            </div>

            <div className='text-sm font-light mt-5'>
              <p>Processing of incoming stock, completing warehouse orders for delivery.</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex cursor-pointer p-2 hover:bg-white hover:rounded-lg gap-1 group">
          <div className="px-1 flex flex-col justify-start items-center">
            <div className="min-w-10 min-h-10 rounded-full border flex justify-center items-center group-hover:bg-sky-200">
              <p>F</p>
            </div>

            <div className="w-0.5 h-full bg-gray-200 mt-2 group-hover:bg-sky-200" />
          </div>

          <div>
            <div>
              <p className='font-bold text-sm'>Financial advisor</p>
              <p className='font-normal text-sm'>SinoPac Securities
                <span className='font-thin text-[12px]'> 2011/5 - 2013/5</span>
              </p>
            </div>

            <div className='text-sm font-light mt-5'>
              <p>Analyzes market trends and make investment recommendations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience