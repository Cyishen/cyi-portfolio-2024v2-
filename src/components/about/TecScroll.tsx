import TecFrontend from './TecFrontend'
import TecBackend from './TecBackend'
import TecOther from './TecOther'


const TecScroll = () => {
  return (
    <>
      <div className="col-span-1 md:col-span-2 row-span-2 about-title-type">
        <div className='flex flex-col overflow-hidden gap-2'>
          <div className='flex flex-col w-full'>
            <p className='text-sm font-bold mt-2'>前端</p>

            <ul className='list-disc list-inside px-2 text-sm font-light'>
              <li>響應式設計: 專注於開發響應式設計，提升行動裝置的可用性，增加行動端流量。</li>
              <li>性能優化與SEO: 優化網頁加載速度和 SEO，提升使用者體驗（UI/UX）。</li>
              <li>前後端整合: 前端與後端 API 的整合，確保流暢的數據交互和功能實現。</li>
            </ul>
          </div>

          <TecFrontend />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 about-title-type">
        <div className='flex flex-col overflow-hidden gap-2'>
          <div className='flex flex-col w-full'>
            <p className='text-sm font-bold mt-2'>後端</p>

            <ul className='list-disc list-inside px-2 text-sm font-light'>
              <li>後端: Python 模型訓練、影像OpenCV、爬蟲等基本應用。</li>
              <li>資料庫管理: SQL 資料庫操作，設計和管理資料庫結構。</li>
              <li>API: 後端 API 的設計與建立，能夠提供高效、可靠的數據服務。</li>
            </ul>
          </div>

          <TecBackend />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 about-title-type">
        <div className='flex flex-col overflow-hidden gap-2'>
          <div className='flex flex-col w-full'>
            <p className='text-sm font-bold mt-2'>其他</p>

            <ul className='list-disc list-inside px-2 text-sm font-light'>
              <li>特效與其他工具。</li>
            </ul>
          </div>

          <TecOther />
        </div>
      </div>
    </>
  )
}

export default TecScroll