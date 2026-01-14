import { useContext, useRef } from 'react'
import { ContactContext } from '../contact/contact-context.jsx'
import Input from './Input.jsx'
import Button from './Button.jsx'

export default function ContactForm() {

    // Importa o dispatch, pois ele é quem dá a ordem para alterar o state que armazena o array de contatos.
    const { dispatch } = useContext(ContactContext)

    const nameRef = useRef()
    const numberRef = useRef()

    function handleAdd() {

        const newContact = {
            id: Date.now(),
            name: nameRef.current.value,
            number: numberRef.current.value,
            isFavorite: false
        }

        dispatch({ type: 'ADD_CONTACT', payload: newContact })
    }

    return (

        <section
            className="sm:min-h-screen w-full md:w-1/3 flex flex-col items-center bg-[#E8D1C5] font-mono text-[#57595B]">
            <h1 className="my-5 text-3xl">Add a contact</h1>

            <Input label="Name" ref={nameRef} />
            <Input label="Number" ref={numberRef} type="number" />

            <div className="w-2/3 mt-10 mb-5 flex justify-around md:flex-row">
                <Button styles="bg-emerald-600" onClickFunction={handleAdd}>Add</Button>
                <Button styles="bg-red-600  " onClickFunction={() => dispatch({ type: 'RESET_LIST' })}>Reset</Button>
            </div>
        </section>
    )
}