import QueenDemo from "./expo/QueenDemo"
import UberDemo from "./expo/UberDemo"


const appProject = [
  {
    id:1,
    title: 'UCar App',
    path: <UberDemo />
  },
  {
    id:2,
    title: 'Drama App',
    path: <QueenDemo />
  },
]


const ExpoSticky = () => {
  return (
    <div className='w-full'>
      {appProject.map((info, index) => (
        <div 
          key={info.id} 
          className='sticky'
          style={{
            top: `calc(-10px + ${index * 0}px)`,
          }}
        >
          <div className='w-full overflow-hidden mb-10'>
            {info.path}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExpoSticky