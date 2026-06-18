import '../../styles/contactcard.css';

function ContactCard(props) {
    // console.log(props);
  return (
      <article className="contact-card">
        <img src={props.img} alt="Cat Image"/>
        <h3>{name}</h3>
        <div className="info-group">
          <img src="src\assets\phone.png" alt="phone icon" />
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <img src="src\assets\mail.png" alt="mail icon" />
          <p>{props.email}</p>
        </div>
      </article>
  );
}

export default ContactCard;
