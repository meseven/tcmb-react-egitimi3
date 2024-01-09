import { useEffect, useState } from "react";
import axios from "axios";

const BASE_ENDPOINT = "https://jsonplaceholder.typicode.com";

const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(`${BASE_ENDPOINT}${path}`)
      .then(({ data }) => setData(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
