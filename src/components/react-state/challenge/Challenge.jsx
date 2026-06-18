import './ch.css';

function Challenge() {
  function handleClick() {
    console.log("Button got clicked!!");
  }
  function mouseHovered(){
    console.log("Mouse hovered");
  }
  return (
    <main>
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={mouseHovered}
      />
      <button onClick={handleClick}>Click Me</button>
    </main>
  );
}

export default Challenge;
