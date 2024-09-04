import DuoDemo from "./web/DuoDemo"


const webProject = [
  {
    id:1,
    title: 'Ai travel platform',
    path: <DuoDemo />
  },
  {
    id:2,
    title: 'Duo platform',
    path: <DuoDemo />
  },
  {
    id:3,
    title: 'Print platform',
    path: <DuoDemo />
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

export default WebSticky