import Hero from "./Hero"
import Portfolio from "./Portfolio"

const stickHero = [
  {
    id:1,
    title: 'Welcome',
    path: <Portfolio />
  },
  {
    id:2,
    title: 'Hero',
    path: <Hero />
  },
]


const StickyHero = () => {
  return (
    <div className='w-full'>
      {stickHero.map((hero, index) => (
        <div 
          key={hero.id} 
          className='sticky'
          style={{
            top: `calc(-50px + ${index * 10}px)`
          }}
        >
          <div className='w-full overflow-hidden'>
            {hero.path}
          </div>
        </div>
      ))}
    </div>
  )
}

export default StickyHero