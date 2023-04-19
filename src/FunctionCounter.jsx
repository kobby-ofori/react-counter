import React, { useState } from "react";

const FunctionCounter = () => {
  const [change, handlechange] = useState({ count: 0 });
  return (
    <div>
      <h1>Function Counter</h1>
      <h1 style={{ textAlign: "center" }}>: {change.count}</h1>
      <button onClick={() => handlechange({ count: change.count + 1 })}>
        Increase(+)
      </button>{" "}
      <button onClick={() => handlechange({ count: change.count - 1 })}>
        Decrease(-)
      </button>
    </div>
  );
};

export default FunctionCounter;
