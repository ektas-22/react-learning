// import React from "react";

function Pad(props) {
  //   const [intialState, setInitialState] = React.useState(props.visible);

  //   function toggleButton() {
  //     setInitialState((prevState) => !prevState);
  //   }

  return (
    <div>
      <button
        style={{ backgroundColor: props.color }}
        className={props.on ? "on" : undefined}
        onClick={() => props.clickHandler(props.id)}
      ></button>
    </div>
  );
}

export default Pad;
/**
 * Challenge part 3:
 * Our buttons got turned off by default! Update the code
 * so if the button is "on", it has the className of "on".
 */
/**
 * Challenge: Create state controlling whether
 * this pad is "on" or "off". Use the incoming
 * `props.on` to determine the initial state.
 *
 * Create an event listener so when the pad is clicked,
 * it toggles from "on" to "off".
 *
 * Goal: clicking each pad should toggle it on and off.
 */
