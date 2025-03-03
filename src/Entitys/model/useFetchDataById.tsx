import { useEffect, useState } from "react";

export default function useGetDataById<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(`${endpoint}`);
        const data = await response.json();
        setData(data);
        setIsFetching(false);
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
}
