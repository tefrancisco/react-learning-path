import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

export default function ResultModal({onReset, targetTime, remainingTime, ref}) {
    const dialog = useRef()

    const userLost = remainingTime <= 0;
    const formatRemainingTime = (remainingTime / 1000).toFixed(2)
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100)

    useImperativeHandle(ref, () => {
        return {
          open() {
            dialog.current.showModal()
          }
        }
    })

    return createPortal(
        // Now you pass the ref created here as the ref for the dialog 
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your score: {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formatRemainingTime} seconds left.</strong></p>
            {/* This method of form will make that the button inside it close the dialog pop-up */}
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}