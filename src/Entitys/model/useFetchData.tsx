import { useState, useEffect } from "react";

type FetchDataResponse<T> = {
  data: T | null;
  isFetching: boolean;
  error: string | null;
};

const useFetchData = <T,>(endpoint: string): FetchDataResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      setError(null);

      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isFetching, error };
};

export default useFetchData;
