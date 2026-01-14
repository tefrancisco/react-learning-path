export default function Input({ ref, label, type = "text" }) {
    return (
        <div className="flex flex-col">
            <label className="text-lg text-left">{label}</label>
            <input type={type} ref={ref} className="border-2 pl-4 py-2 text-left rounded-lg" />
        </div>
    )
}