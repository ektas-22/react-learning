import React from "react";
import "./ch3.css";
import user from "../../../assets/user.png";
import starEmpty from "../../../assets/star.jpg";
import starFilled from "../../../assets/fillStar.png";

function Challenge3() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? starFilled : starEmpty;

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }
  return (
    <main>
      <article className="card">
        <img
          src={user}
          className="avatar"
          alt="User profile picture oh John Doe"
        />
        <div className="info">
          <button
            onClick={toggleFavorite}
            aria-pressed={contact.isFavorite}
            aria-label={
              contact.isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            className="favorite-button"
          >
            <img
              src={starIcon}
              className="favorite"
              alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
            />
          </button>
          <h2 className="name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="contact">{contact.phone}</p>
          <p className="contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default Challenge3;
