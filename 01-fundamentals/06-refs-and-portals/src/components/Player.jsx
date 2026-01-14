import { useState, useRef } from 'react'

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState('')
  // const [showPlayerName, setShowPlayerName] = useState(false)

  const playerName = useRef()

  // function handleChange(event) {
  //   setShowPlayerName(false)
  //   setEnteredPlayerName(event.target.value)
  // }

  function handleClick() {
    setEnteredPlayerName(playerName.current.value)
    playerName.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input 
        ref={playerName}
        type="text" 
        // value={enteredPlayerName} 
        // onChange={handleChange}
         />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
