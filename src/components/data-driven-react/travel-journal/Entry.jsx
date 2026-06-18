import marker from "../../assets/marker.png";
import "../../styles/traveljournal.css";

function Entry(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.data.img.src} className="main-image" alt="mount fuji" />
      </div>
      <div className="info-container">
        <img src={marker} className="marker" alt="Location Marker" />
        <span className="country">{props.data.country}</span>
        <a href={props.data.googleMapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{props.data.title}</h2>
        <p className="trip-dates">{props.data.dates}</p>
        <p className="entry-text">{props.data.text}</p>
      </div>
    </article>
  );
}

export default Entry;
