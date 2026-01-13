export  default function Tabs({ children, buttons, ButtonContainer = 'menu' }) {
    // If we just pass buttonsContainer, React will look for an "buttonsContainer" built-in
    // element, that doesn't exist. So we have to create a custom element with the initial
    // uppercase character.
    return (
        <>
        <ButtonContainer>
        {buttons}
        </ButtonContainer>
        {children}
        </>
    )
}