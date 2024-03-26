import { useState, useEffect } from "react";
import { Data } from "./types";

export const useFetchShirts = () => {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = () => {
      setIsPending(true);
      try {
        fetch("data.json")
          .then((response) => response.json())
          .then((json) => {
            setData(json);
            setIsPending(false);
            setError(undefined);
          });
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData();
  }, []);

  return { data, isPending, error };
};
