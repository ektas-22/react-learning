import Entry from "./Entry";
import Header from "./Header";
import travelData from "./travel-data";

export default function TravelJournal() {
  const travelJourney = travelData.map((data) => {
    return (
      <Entry
        key={data.id}
        data={data}
        //{...data}
        // img={data.img}
        // title={data.title}
        // country={data.country}
        // link={data.googleMapsLink}
        // date={data.dates}
        // text={data.text}
      />
    );
  });
  return (
    <>
      <Header />
      {travelJourney}
    </>
  );
}
