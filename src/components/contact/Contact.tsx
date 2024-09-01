import Wrapper from '../Wrapper'

const Contact = () => {
  return (
    <div id="contact" className="relative flex w-full py-12 md:py-24 h-screen border-t-2 rounded-t-3xl bg-gray-100">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 h-2 w-14 rounded-full bg-gray-200"/>
      <Wrapper>
        <div className="flex flex-col items-center w-full">
          <h2 className="font-extrabold text-3xl md:text-5xl pt-2">
            Contact
          </h2>
        </div>
      </Wrapper>
    </div>
  )
}

export default Contact