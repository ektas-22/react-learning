import React from 'react'
function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

  function toggleShown(){
      setIsShown(prevShown => !prevShown)
  }
  console.log(isShown)
  return (
    <>
      {props.setup && <p>Setup: {props.setup}</p>}
      {isShown && <p>Punchline: {props.punchline}</p>}
      <button onClick={toggleShown}>{isShown? "Show" : "Hide"} punchline</button>
      <hr />
    </>
  );
}

export default Joke;
