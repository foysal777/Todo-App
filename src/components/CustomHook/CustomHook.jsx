import React from "react";
import useFetch from "./UseFetch";

export default function CustomHook() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-center mb-4">Custom Hook Example</h2>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {data && data.map((post) => (
        <div key={post.id} className="p-4 mb-3 bg-white shadow rounded-lg">
          <h3 className="font-semibold">{post.title}</h3>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
