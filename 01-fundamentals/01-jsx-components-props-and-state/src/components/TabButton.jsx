export default function TapButton({children, isSelected, ...props}) {

    return (
        <li>
            {/* here the action onClick will execute the function passed by
            the onSelect prop that we receive here */}
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    )
}