import { Button } from "../ui/button"
import Wrapper from "../Wrapper"
import StickyFeature from "./StickyFeature"


const FeatureWork = () => {
  return (
    <div className="flex w-full py-32 md:py-48 bg-gray-50">
      <Wrapper>
        <div className="flex flex-col items-center w-full">
          <h2 className="font-extrabold text-3xl md:text-5xl py-2">
            Feature Work
          </h2>

          <div className="text-sm text-center mt-4 px-4">
            Building Web and Mobile applications, with amazing user experiences and function
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-2 m-10">
            <Button variant="outline">
              Demo
            </Button>
          </div>

          <StickyFeature />
        </div>
      </Wrapper>
    </div>
  )
}

export default FeatureWork