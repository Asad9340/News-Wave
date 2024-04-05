import MiddleSection from '../Pages/Home/MainSection/MiddleSection';
import RightSection from '../Pages/Home/MainSection/RightSection';
import BreakingNews from './BreakingNews';
import Navbar from './Navbar';
import TopBar from './TopBar';

function SingleNewsDetails() {
  return (
    <div>
      <div>
        <TopBar />
        <BreakingNews />
        <Navbar />
      </div>
      <div>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4 my-6">
          <div className="col-span-3">
            <MiddleSection />
          </div>
          <div>
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNewsDetails;
