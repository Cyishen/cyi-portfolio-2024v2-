

const Experience = () => {
  return (
    <div className='col-span-1 md:col-span-1 about-title-type'>
      <h2 className="capitalize">experience</h2>
    
      <div className='flex flex-col gap-2 mt-2'>
        <div>
          <div>
            <p className='font-normal text-sm'>R&D engineer</p>
            <p className='font-normal text-sm'>Dawning</p>
            <p className='font-thin text-[12px]'>2016/1 - 2022/7</p>
          </div>

          <ul className='list-disc list-inside px-2 text-sm font-light'>
            <li>Connecter and Switch products development.</li>
          </ul>
        </div>

        <hr />

        <div>
          <div>
            <p className='font-normal text-sm'>Warehouse staff</p>
            <p className='font-normal text-sm'>
              New Zealand 
              <span className="font-light text-[10px]"> working holiday</span>
            </p>
            <p className='font-thin text-[12px]'>2013/8 - 2015/7</p>
          </div>

          <ul className='list-disc list-inside px-2 text-sm font-light'>
            <li>
              Processing of incoming stock, completing warehouse orders for delivery.  
            </li>
          </ul>
        </div>

        <hr />

        <div>
          <div>
            <p className='font-normal text-sm'>Financial advisor</p>
            <p className='font-normal text-sm'>SinoPac Securities</p>
            <p className='font-thin text-[12px]'>2011/5 - 2013/5</p>
          </div>

          <ul className='list-disc list-inside px-2 text-sm font-light'>
            <li>
              Analyzes market trends and make investment recommendations.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience