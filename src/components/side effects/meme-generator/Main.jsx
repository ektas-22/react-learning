import React from "react";

function Main() {
  const [meme, setMeme] = React.useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  function changeHandler(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not imply"
            name="topText"
            onChange={changeHandler}
            value={meme.topText}
          />
        </label>
        <label>
          Botton Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={changeHandler}
            value={meme.bottomText}
          />
        </label>
        <button>Get a new meme</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

export default Main;
