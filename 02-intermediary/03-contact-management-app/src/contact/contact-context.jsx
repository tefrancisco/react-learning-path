import { createContext, useReducer } from 'react'

export const ContactContext = createContext({
    contacts: [],
    dispatch: () => {}
})

function contactReducer(state, action) {
        switch (action.type) {
            case 'ADD_CONTACT':
                return [...state, action.payload]
                break;

            case 'DEL_CONTACT':
                return state.filter(contact => contact.id !== action.payload)
                break;

            case 'TOGGLE_FAVORITE':
                return state.map(contact => {
                    if(contact.id == action.payload) {
                        return {...contact, isFavorite: !contact.isFavorite }
                    }
                    return contact;
                })
                break;

            case 'RESET_LIST':
                return []
                break;
            default:
                return state;
        }
    }



export default function ContactContextProvider({ children }) {

    const [contacts, dispatch] = useReducer(contactReducer, [])

    const ctxValue = {
        contacts: contacts,
        dispatch: dispatch
    }

    console.log(contacts)

    return (
        <ContactContext.Provider value={ctxValue}>
            {children}
        </ContactContext.Provider>
    )
}