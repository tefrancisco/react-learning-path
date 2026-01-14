export default function Button({ children, onClickFunction, styles }) {
    let classes = `px-10 py-2 rounded-lg text-stone-200 ${styles}`

    return (
        <button
            className={classes}
            onClick={onClickFunction}>
            {children}
        </button>
    )
}