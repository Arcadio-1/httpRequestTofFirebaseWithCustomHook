import { useState, useCallback } from "react";
const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHandler = useCallback(async (fetchConfig, applyData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(fetchConfig.url, {
        method: fetchConfig.method ? fetchConfig.method : "GET",
        headers: fetchConfig.headers ? fetchConfig.headers : {},
        body: JSON.stringify(fetchConfig.body)
          ? JSON.stringify(fetchConfig.body)
          : null,
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log("run");
      applyData(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setLoading(false);
  }, []);
  return { loading, error, fetchHandler };
};
export default useHttp;
