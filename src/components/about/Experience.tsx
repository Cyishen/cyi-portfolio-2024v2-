

const Experience = () => {
  return (
    <div className='col-span-1 md:col-span-1 about-title-type'>
      <h2>experience</h2>
    
      <div className='flex flex-col gap-2 mt-2'>
        <div>
          <p className='font-normal text-sm'>研發工程師 Engineer</p>
          <p className='font-normal text-sm'>達立科技</p>
          <p className='font-thin text-[12px]'>2016/1 - 2022/7</p>
          <ul className='list-disc list-inside px-2 text-sm font-light'>
            <li>微動開關/ 連接器類產品開發。</li>
            <li>零件設計與模具設計, 製造端組裝流程到量產交付。</li>
            <li>產品試驗分析與異常分析, 提出解決方案。</li>
          </ul>
        </div>

        <hr />

        <div>
          <p className='font-normal text-sm'>Warehouse staff</p>
          <p className='font-normal text-sm'>Working holiday in New Zealand</p>
          <p className='font-thin text-[12px]'>2013/8 - 2015/7</p>
          <ul>
            <li className='text-sm font-light'>
              <p>訂單資料處理與倉儲管理。</p>
            </li>
          </ul>
        </div>

        <hr />

        <div>
          <p className='font-normal text-sm'>理財專員</p>
          <p className='font-normal text-sm'>永豐金證券</p>
          <p className='font-thin text-[12px]'>2011/5 - 2013/5</p>
          <ul>
            <li className='text-sm font-light'>
              <p>金融業務開發, 協助客戶投資衍生性金融、證券、基金等相關商品。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience