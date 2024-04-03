import BreakingNews from "../../components/BreakingNews"
import Navbar from "../../components/Navbar"
import TopBar from "../../components/TopBar"

function Home() {
  return (
    <div>
      <TopBar />
      <BreakingNews />
      <Navbar/>
    </div>
  )
}

export default Home