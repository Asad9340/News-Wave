import BreakingNews from "../../components/BreakingNews"
import Navbar from "../../components/Navbar"
import TopBar from "../../components/TopBar"
import MainSection from "./MainSection/MainSection"

function Home() {
  return (
    <div>
      <TopBar />
      <BreakingNews />
      <Navbar />
      <MainSection/>
    </div>
  )
}

export default Home