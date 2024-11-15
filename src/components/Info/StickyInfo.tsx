import Contact from '../contact/Contact'
import Info from './Info'

const stickInfo = [
  {
    id:1,
    title: 'Info',
    path: <Info />
  },
  {
    id:2,
    title: 'Contact',
    path: <Contact />
  },
]


const StickyInfo = () => {
  return (
    <div className='w-full'>
      {stickInfo.map((info, index) => (
        <div 
          key={info.id} 
          className='sticky'
          style={{
            top: `calc(12px + ${index * 10}px)`
          }}
        >
          <div className='w-full overflow-hidden'>
              {info.path}
          </div>
        </div>
      ))}
    </div>
  )
}

export default StickyInfo