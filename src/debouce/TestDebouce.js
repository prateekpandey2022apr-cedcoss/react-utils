import React, { useState } from "react";
import useDebouce from "./useDebouce";

const TestDebouce = () => {
  const [query, setQuery] = useState("");
  const { data, loading, error } = useDebouce(query);

  // console.log({ error, loading, data });

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <input type="submit" />
      <hr />

      {error && <p>Error</p>}

      {loading && <p>Loading ....</p>}

      {!loading &&
        !error &&
        data.map((todo, index) => {
          return <p key={index}>{todo.title}</p>;
        })}
    </div>
  );
};

export default TestDebouce;
