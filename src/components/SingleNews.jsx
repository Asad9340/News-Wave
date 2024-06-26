import { FaBookmark } from 'react-icons/fa';
import { FaShareAlt } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function SingleNews({ news }) {
  const location = useLocation();
  console.log(location);
  const { author, title, image_url, details, total_view, rating } = news;
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
        <img className='w-full' src={image_url} alt="" />
        <div className="text-base text-[#706F6F] font-semibold px-4">
          {details.length > 300 ? (
            location.pathname === '/singleNewsDetails' ? (
              details
            ) : (
              <p>
                {details.slice(0, 300)}{' '}
                <Link
                  to="/singleNewsDetails"
                  className="text-blue-500 cursor-pointer "
                >
                  Read More...
                </Link>
              </p>
            )
          ) : (
            details
          )}
        </div>
        <hr className="mx-6" />
        <div className="flex gap-3 justify-between px-3 items-center">
          <div className="flex items-center mb-6">
            <div className="grid   overflow-x-scroll rounded-lg p-2 lg:overflow-visible">
              <div className="inline-flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-700 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-700 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-700 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-yellow-700 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer text-blue-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <p className="text-base text-[#706F6F] font-medium ">
              {rating.number}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <FaEye />
            <p className="text-base text-[#706F6F] font-medium ">
              {total_view}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
