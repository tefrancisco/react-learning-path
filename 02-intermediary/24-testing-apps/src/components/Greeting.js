import { useState } from 'react'
import Output from './Output.js'

export default function Greeting() {
    const [changedText, setChangedText] = useState()

    function changeTextHandler() {
        setChangedText(true)
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={changeTextHandler}>Change text</button>
        </div>
    )
}