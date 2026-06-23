import React from "react";
import WindowTracker from "./WindowTracker";

function Exercise2() {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */
  const [show, setShow] = React.useState(true);

  function display() {
    setShow((prevShow) => !prevShow);
  }
  return (
    <main className="container">
      <button onClick={display}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </main>
  );
}

export default Exercise2;
