import memesData from "../memesData"

export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        randomImage: url
      }
    })
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="form">
        <div>
          <label htmlFor="top-text">Add Top Text</label>
          <input 
            type="text" 
            placeholder="Shut up" 
            id="top-text" 
            className="form-input"
            name="topText"
            value={meme.topText} 
            onChange={handleChange}
          />
        </div>    
        <div>
          <label htmlFor="bottom-text">Add Bottom Text</label>
          <input 
            type="text" 
            placeholder="and take my money" 
            id="bottom-text" 
            className="form-input"
            name="bottomText"
            value={meme.bottomText} 
            onChange={handleChange}
          />
        </div>
        <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼️</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}