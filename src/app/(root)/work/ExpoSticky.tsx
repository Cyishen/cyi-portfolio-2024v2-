import UberDemo from "./expo/UberDemo"


const stickInfo = [
  {
    id:1,
    title: 'UCar',
    path: <UberDemo />
  },
  {
    id:2,
    title: 'U',
    path: <UberDemo />
  },
]


const ExpoSticky = () => {
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
          <div className='w-full overflow-hidden mb-10'>
              {info.path}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExpoSticky