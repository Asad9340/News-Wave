
import { Outlet } from "react-router-dom"

function Root() {
  return (
    <div className="font-poppins max-w-6xl mx-auto">
      <Outlet/>
    </div>
  )
}

export default Root