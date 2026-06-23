import React from "react";
import "./ch4.css";
import padsData from "./pads.js";
import Pad from "./Pad";

function Challenge4() {
  const [pads, setPads] = React.useState(padsData);

  const buttonElement = pads.map((item) => (
    <Pad
      key={item.id}
      id={item.id}
      color={item.color}
      on={item.on}
      clickHandler={toggle}
    />
  ));

  function toggle(id) {
    setPads((prevPad) =>
      prevPad.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      }),
    );
  }
  return (
    <main>
      <div className="pad-container">{buttonElement}</div>
    </main>
  );
}

export default Challenge4;
/**
 * Challenge part 1:
 * 1. Initialize state with the default value of the
 *    array pulled in from pads.js
 * 2. Map over that state array and display each one
 *    as a <button> (CSS is already written for you)
 *    (Don't worry about using the "on" or "color"
 *    properties yet)
 */
/**
 * Challenge part 2:
 * 1. Create a separate component called "Pad" and
 *    replace the `button` above with our <Pad /> component
 * 2. Pass the Pad component a prop called `color` with the
 *    value of the same name from the `padsData` objects
 * 3. In the Pad component, apply an inline style to the <button>
 *    to set the backgroundColor of the button.
 *
 * (We'll deal with the "on" property soon)
 */
/**
 * Challenge: Create a toggle() function that logs
 * "clicked!" to the console
 *
 * Pass that function down to each of the Pad components
 * and set it up so when they get clicked, the function runs
 */
/**
 * Challenge:
 * Call setPads to update the state of the one pad that was
 * clicked. Map over the previous pads array, and if the current
 * item you're iterating over has the same id as the `id` passed
 * to this function, then return a new object with the `on` value
 * set to the opposite of what it was before.
 * Otherwise (if the ids don't match), just return the previous
 * item as it was, unchanged.
 */
