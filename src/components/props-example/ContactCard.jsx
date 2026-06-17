import '../../styles/contactcard.css';

function ContactCard() {
  return (
    <div className="contacts">
      <article className="contact-card">
        <img src="src\assets\whiskerson.jpg" alt="Photo of Mr. Whiskerson" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src="src\assets\phone.png" alt="phone icon" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src="src\assets\mail.png" alt="mail icon" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </article>
    </div>
  );
}

export default ContactCard;
