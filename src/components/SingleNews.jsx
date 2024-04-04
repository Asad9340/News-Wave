import { FaBookmark } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';

function SingleNews({ news }) {
  console.log(news);
  const { author, title, image_url, details } = news;
  return (
    <div className="border mb-6 rounded-lg">
      <div className="flex justify-between gap-4 items-center p-5 bg-[#F3F3F3] rounded-t-lg ">
        <div className="flex gap-4 items-center">
          <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
          <div>
            <h2 className="text-base text-[#403F3F] font-semibold ">
              {author.name}
            </h2>
            <p className="text-sm text-[#706F6F] ">{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-xl text-[#403F3F] font-bold px-4 my-4 ">{title}</h2>
        <img src={image_url} alt="" />
        <p>{details}</p>
      </div>
    </div>
  );
}

export default SingleNews;
