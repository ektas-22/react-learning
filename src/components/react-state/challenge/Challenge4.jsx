import React from "react";
import "./ch4.css";
import padsData from "./pads.js";
import Pad from "./Pad";

function Challenge4() {
  const [pads, setPads] = React.useState(padsData);

  const result = pads.map((item) => (
    <Pad
      key={item.id}
      color={item.color}
      visible={item.on}
      clickHandler={toggle}
    />
  ));

  function toggle() {
    setPads((prevOn) => [
        ...prevOn, 
        !padsData.on]);
    console.log("clicked!");
  }
  return (
    <main>
      <div className="pad-container">
        {/* <button>s go here */}
        {result}
      </div>
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
