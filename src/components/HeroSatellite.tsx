type Props = {
  children: React.ReactNode
  size: number
  rotation: number
}

const HeroSatellite = ({ children, size, rotation }: Props) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div 
        className="animate-spin [animation-duration:60s]"
        style={{
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`
        }}
      >
        <div className="inline-flex animate-spin [animation-duration:20s]"
          style={{
            transform: `rotate(${-rotation}deg)`
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default HeroSatellite