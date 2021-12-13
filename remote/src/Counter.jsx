import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-blue-500">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default Counter;
