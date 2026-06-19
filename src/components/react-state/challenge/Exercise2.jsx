import React from "react";
import './ex2.css'

function Exercise2() {
  const [myFavoriteThing, setMyFavoriteThing] = React.useState([]);
  const allFavoriteThings = [
    "💦🌹",
    "😺",
    "💡🫖",
    "🔥🧤",
    "🟤🎁",
    "🐴",
    "🍎🥧",
    "🚪🔔 ",
    "🛷🔔",
    "🥩🍝",
  ];
  const thingsElements = myFavoriteThing.map((thing) => (
    <p key={thing}>{thing}</p>
  ));

  function addFavoriteThing() {
   
    setMyFavoriteThing(prevFavThing => [
      ...prevFavThing,
      allFavoriteThings[prevFavThing.length]
    ]);
    
      
  }
  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">{thingsElements}</section>
    </main>
  );
}

export default Exercise2;
