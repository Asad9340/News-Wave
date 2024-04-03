import { useEffect, useState } from "react"

function useCategories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    (async() => {
      const res = await fetch('./categories.json')
      const data = await res.json();
      setCategories(data);
    })()
  },[])
  return categories;
}

export default useCategories