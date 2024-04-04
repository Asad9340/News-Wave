import { useEffect, useState } from "react"

function useNews() {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    (async() => {
      const res = await fetch('/news.json');
      const data =await res.json();
      setNewsData(data);
    })();
  }, [])
  return { newsData };
}

export default useNews