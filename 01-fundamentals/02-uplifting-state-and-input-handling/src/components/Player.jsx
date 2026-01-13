import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {
    // playerName state receives initialName prop as its default value
    const [ playerName, setPlayerName ] = useState(initialName)
    const [ isEditing, setIsEditing ] = useState(false);

    function handleClick() {
        // setIsEditing(true)
        // setIsEditing(!isEditing)
        // Receive the last value for state and update it for its opposite
        setIsEditing((editing) => !editing)

        // if(isEditing) {
        //     // playerName = <input type="text" required></input>
        //     // btnCaption = 'Save'
        //     setIsEditing(false);
        // }
        // else {
        //     setIsEditing(true)
        // }
    }

    function handleChange(event) {
        // console.log(event)
        // onChange() method returns an event object, this object references the input, so we can get the value out of it
        setPlayerName(event.target.value)
    }

    // let playerName = <span className="player-name">{name}</span>
    // let btnCaption = 'Edit'


    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                
                {isEditing ? 
                <input type="text" value={playerName} required onChange={handleChange}></input> 
                : 
                <span className='player-name'>{playerName}</span>}

                <span className="player-symbol">{symbol}</span>
            </span>
            {/* Pass the function as a value, so it won't execute automatically when the site loads */}
            <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )

}