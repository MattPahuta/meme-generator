import headerIcon from "../assets/cat-face.svg"

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={headerIcon} alt="troll face" className="header-image"/>
        <h1 className="header-title">Meme Generator</h1>
        <p className="header-project">React Course - Project 3</p>
      </div>
    </header>
  )
}