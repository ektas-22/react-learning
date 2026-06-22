// import React from 'react'
import starEmpty from "../../../assets/star.jpg";
import starFilled from "../../../assets/fillStar.png";
import "./ch3.css";

function Star(props) {
  let starIcon = props.isFilled ? starFilled : starEmpty;

   

  return (
    <button
      onClick={props.onClick}
      aria-pressed={props.isFilled}
      aria-label={
        props.isFilled ? "Remove from favorites" : "Add to favorites"
      }
      className="favorite-button"
    >
      {" "}
      <img
        src={starIcon}
        className="favorite"
        alt={props.isFilled ? "filled star icon" : "empty star icon"}
      />
    </button>
  );
}

export default Star;
