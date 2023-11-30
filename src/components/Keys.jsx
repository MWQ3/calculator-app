function Keys({ btnDisable, handleUserInput, keyClass, keyId, keyValue }) {
    return (
            <button onClick={() => handleUserInput(keyValue)} className={keyClass} id={keyId} disabled={btnDisable} value={keyValue}>{keyValue}</button>
    
    )
  }

  export default Keys;