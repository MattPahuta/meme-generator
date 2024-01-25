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

  return (
    <main>
      <div className="form">
        <div>
          <label htmlFor="top-text"></label>
          <input type="text" placeholder="Shut up" id="top-text" className="form-input" />
        </div>    
        <div>
          <label htmlFor="bottom-text"></label>
          <input type="text" placeholder="add take my money" id="bottom-text" className="form-input" />
        </div>
        <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼️</button>
      </div>
      <img src={meme.randomImage} className="meme--image" alt="" />
    </main>
  )
}