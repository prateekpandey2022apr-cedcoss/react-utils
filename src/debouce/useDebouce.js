import React, { useEffect, useState } from "react";

const useDebouce = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let timerID;
    window.controller = new AbortController();
    if (query) {
      setError(false);
      setData([]);
      setLoading(true);

      timerID = setTimeout(() => {
        (async () => {
          try {
            let res = await fetch(
              "https://jsonplaceholder.typicode.com/todos",
              {
                signal: window.controller.signal,
              }
            );

            res = await res.json();
            setData(res);
            setLoading(false);
          } catch (error) {
            console.log(error);
          } finally {
          }
        })();
      }, 1000);
    }

    return () => {
      console.log("cancelling timer");
      window.controller.abort();
      clearTimeout(timerID);
    };
  }, [query]);

  return { error, loading, data };
};

export default useDebouce;
