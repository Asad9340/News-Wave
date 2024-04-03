import { Button } from '@material-tailwind/react';
import Marquee from 'react-fast-marquee';

function BreakingNews() {
  return (
    <div className="flex items-center p-3 md:p-4 bg-[#F3F3F3] rounded-lg">
      <Button size="md" color="pink">
        Latest
      </Button>
      <div className="text-lg text-[#403F3F] font-semibold">
        <Marquee speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </div>
  );
}

export default BreakingNews;
