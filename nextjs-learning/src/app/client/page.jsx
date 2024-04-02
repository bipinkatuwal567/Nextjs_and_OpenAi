"use client";

import { useState } from "react";

export default function ClientPage() {
  const [count, setCount] = useState(0);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl text-white font-semibold">{count}</h2>
      <div className="flex gap-4">
        <button className="btn btn-outline" onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button className="btn btn-outline" onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
}
