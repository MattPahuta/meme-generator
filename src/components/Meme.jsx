export default function Meme() {



  
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
        <button className="form-button">Get a new meme image 🖼️</button>
      </div>
    </main>
  )
}