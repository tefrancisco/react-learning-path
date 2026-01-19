import { createContext, useContext, useState } from 'react'
import AccordionItem from  './AccordionItem'

const AccordionContext = createContext()

export function useAccordionContext() {
    const ctx = useContext(AccordionContext)

    if (!ctx) {
        throw new Error('Accordion-related components must be wrapped by <Accordion />.')
    }

    return ctx
}

export default function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState()

    function openItem(id) {
        setOpenItemId(id)
    }

    function closeItem() {
        setOpenItemId(null)
    }

    // Simplfiyng the open and close functions into a new one

    function toggleItem(id) {
        setOpenItemId((prevId) => (prevId === id ? null : id))
    }

    const contextValue= {
        openItemId: openItemId,
        toggleItem: toggleItem
    }

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
    )
}

Accordion.Item = AccordionItem