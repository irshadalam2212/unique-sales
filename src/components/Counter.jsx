import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  // Handle input value change
  const changeHandler = (e) => {
    setCount(parseInt(e.target.value));
  };

  // Handle increment
  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Handle decrement
  const decrementHandler = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 w-8">
      <button className="text-2xl text-white" onClick={decrementHandler}>
        -
      </button>
      <input
        type="number"
        value={count}
        onChange={changeHandler}
        className="text-center text-black"
      />
      <button className="text-2xl text-white" onClick={incrementHandler}>
        +
      </button>
    </div>
  );
};

export default Counter;
