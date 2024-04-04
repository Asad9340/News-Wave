import useNews from "../../../Hooks/useNews";
import SingleNews from "../../../components/SingleNews";

function MiddleSection() {
  const { newsData } = useNews();
  return (
    <>
      <p className="text-xl text-[#403F3F] font-semibold text-center">Dragon News Home</p>
      {newsData.map(news => (
        <SingleNews key={news._id} news={news}></SingleNews>
      ))}
    </>
  );
}

export default MiddleSection