export default function Input({ label, value, onChangeFunction }) {
    return (
        <p>
            <label>{label}</label>
            <input type="number" value={value} onChange={onChangeFunction} />
        </p>
    )
}