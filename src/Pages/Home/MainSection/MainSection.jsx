import LeftSection from "./LeftSection"
import MiddleSection from "./MiddleSection"
import RightSection from "./RightSection"

function MainSection() {
  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 my-6">
      <div>
      <LeftSection />
      </div>
      <div className="col-span-2">
      <MiddleSection  />
      </div>
      <div>
      <RightSection/>
      </div>
    </div>
  )
}

export default MainSection