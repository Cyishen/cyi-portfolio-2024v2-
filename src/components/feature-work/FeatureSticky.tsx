import OneFeatureTab from "./OneFeatureTab"
import TwoFeatureTab from "./TwoFeatureTab"
import ThreeFeatureTab from "./ThreeFeatureTab"

const stickInfo = [
  {
    id:1,
    title: 'Web',
    path: <OneFeatureTab />
  },
  {
    id:2,
    title: 'App',
    path: <TwoFeatureTab />
  },
  {
    id:3,
    title: 'Python',
    path: <ThreeFeatureTab />
  },
]


const FeatureSticky = () => {
  return (
    <div className='w-full'>
      {stickInfo.map((info, index) => (
        <div 
          key={info.id} 
          className='sticky'
          style={{
            top: `calc(72px + ${index * 72}px)`
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

export default FeatureSticky