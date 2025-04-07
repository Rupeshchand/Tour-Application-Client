import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error fetching data")
      const data = await response.json();
      console.log(data, "Fetched result")
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading, error, refetch : fetchData };
};

export default useFetch;
