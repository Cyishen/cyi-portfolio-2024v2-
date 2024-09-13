import SkillFrontend from "./SkillFrontend"
import SkillBackend from "./SkillBackend"
import SkillOther from "./SkillOther"


const SkillDrag = () => {
  return (
    <>
      <div className="col-span-1 md:col-span-2 row-span-2 about-title-type">
        <div className='flex flex-col overflow-hidden gap-2 h-full'>
          <div className='flex flex-col w-full'>
            <p className='text-base font-bold my-2'>前端 Frontend</p>

            <ul className='list-disc list-inside px-2 text-sm font-normal'>
              <li>響應式網頁設計，提升行動裝置瀏覽體驗，並串接前後端 API。</li>
              <li>Mobile App 開發，專注於功能實現與用戶體驗優化。</li>
              <li>優化網頁載入速度，提升 SEO 表現與整體使用者體驗。</li>
            </ul>
          </div>

          <SkillFrontend />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 about-title-type">
        <div className='flex flex-col overflow-hidden gap-2 h-full'>
          <div className='flex flex-col w-full'>
            <p className='text-base font-bold my-2'>後端 Backend</p>

            <ul className='list-disc list-inside px-2 text-sm font-normal'>
              <li>使用 Node.js 進行後端開發API 設計與實作，提供穩定的數據服務。</li>
              <li>Python 應用，涵蓋模型訓練、影像處理及網頁爬蟲技術等。</li>
              <li>資料庫管理：操作 SQL 資料庫，資料庫結構設計與維護。</li>
            </ul>
          </div>

          <SkillBackend />
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 about-title-type">
        <div className='flex flex-col overflow-hidden gap-2 h-full'>
          <div className='flex flex-col w-full'>
            <p className='text-base font-bold my-2'>UI/UX Design</p>

            <ul className='list-disc list-inside px-2 text-sm font-normal'>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <SkillOther />
        </div>
      </div>
    </>
  )
}

export default SkillDrag