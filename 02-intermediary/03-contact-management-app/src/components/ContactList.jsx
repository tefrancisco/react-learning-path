import { useContext } from 'react'
import { ContactContext } from '../contact/contact-context'
import ContactItem from "./ContactItem"

export default function ContactList() {

    const { contacts } = useContext(ContactContext)

    return (
        <section
            className="min-h-screen w-full md:w-2/3 flex flex-wrap gap-2 bg-[#452829]">
            {contacts.map((contact) => <ContactItem key={contact.id} name={contact.name} number={contact.number} id={contact.id} isFavorite={contact.isFavorite} />)}
        </section>
    )
}