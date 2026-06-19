import React from "react";
import "./ex.css";

function Exercise1() {
  const [stateCount, setStateCount] = React.useState(0);

  // using a callback function
  function increaseCount() {
    //    setStateCount(stateCount+1)
    setStateCount((prevCount) => prevCount + 1); //callback function
  }
  function decreaseCount() {
    // setStateCount(stateCount-1)
    setStateCount((prevCount) => prevCount - 1);
  }

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section</h1>
      <div className="counter">
        <button
          className="minus"
          aria-label="Decrease Count"
          onClick={decreaseCount}
        >
          -
        </button>
        <h2 className="count">{stateCount}</h2>
        <button
          className="plus"
          aria-label="Increase Count"
          onClick={increaseCount}
        >
          +
        </button>
      </div>
    </main>
  );
}

export default Exercise1;
