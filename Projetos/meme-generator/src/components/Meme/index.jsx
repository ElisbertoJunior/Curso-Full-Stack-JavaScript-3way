import { useEffect, useState } from "react";

const Meme = () => {
  const [memeAllImage, setMemeAllImage] = useState([]);

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  useEffect(() => {
    const getMemes = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setMemeAllImage(data.data.memes);
    };
    getMemes();
  }, []);

  const getMemeImage = () => {
    const memesArray = memeAllImage;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
          placeholder="Top text"
          className="form-input"
        />
        <input
          type="text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
          placeholder="Bottom text"
          className="form-input"
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img
          src={meme.randomImage}
          className="meme-image"
          alt="Imagem de meme"
        />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
