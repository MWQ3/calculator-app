function NumberViewer({ userInput, userOutput }) {
    return (
    <div className="display">
          <p>{userOutput}</p>
          <p id="display">{userInput}</p>
        </div>
    
    )
  }

  export default NumberViewer;