import DuoDemo from "./web/DuoDemo"
import PrintDemo from "./web/PrintDemo"
import TripDemo from "./web/TripDemo"


const webProject = [
  {
    id:1,
    title: 'Ai travel platform',
    path: <TripDemo />
  },
  {
    id:2,
    title: 'Duo platform',
    path: <DuoDemo />
  },
  {
    id:3,
    title: 'Print platform',
    path: <PrintDemo />
  },
]


const WebSticky = () => {
  return (
    <div className='w-full'>
      {webProject.map((info, index) => (
        <div 
          key={info.id} 
          className='sticky'
          style={{
            top: `calc(10px + ${index * 82}px)`,
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

export default WebSticky