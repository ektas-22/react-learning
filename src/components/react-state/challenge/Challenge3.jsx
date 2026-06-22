import React from "react";
import "./ch3.css";
import user from "../../../assets/user.png";
import Star from "./Star";

function Challenge3() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

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
          <Star isFilled={contact.isFavorite} onClick={toggleFavorite} />

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
