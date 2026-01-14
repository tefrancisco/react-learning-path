import { useState, useRef } from 'react'
import ResultModal from './ResultModal.jsx'

// It won't work because even if it's not refreshed by state by being outside the component,
// it will be overwrite if I click in another challenge
let timer;

export default function TimerChallenge({ title, targetTime }) {

    // We have to manage timer, but it shouldn't be a state, so it will be a ref
    const timer = useRef()
    // Ref to reference the modal, so we can call the showModal() method in the handleStart()
    // function
    const modal = useRef()

    // const [timerStarted, setTimerStarted] = useState(false)
    // const [timerExpired, setTimerExpired] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        modal.current.open()
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000)
    }

    function handleStart() {
        // setInvertal will keep executing, in this case, in every 10 ms
        timer.current = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 10)
        }, 10)
    }

    function handleStop() {
        clearInterval(timer.current)
        modal.current.open()
    }

    return (
       <>
        {/* Forwarding the ref as a prop so we can assign it to the dialog built-in component on ResultModal */}
        <ResultModal 
        ref={modal} 
        targetTime={targetTime} 
        remainingTime={timeRemaining}
        onReset={handleReset}
        />

        <section className="challenge">
            <h1>{title}</h1>
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
                {timerIsActive ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
       </>
    )
}