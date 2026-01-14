import { useContext } from 'react'
import { ContactContext } from '../contact//contact-context.jsx'
import Button from './Button.jsx'
import starImg from '/star.png'

export default function ContactItem({ name, number, id, isFavorite }) {

    const { dispatch } = useContext(ContactContext)

    return (
        <menu
        className="w-72 h-44 bg-[#E8D1C5] text-[#57595B] flex flex-col mt-10 mx-1 md:mx-5 rounded-lg">
            {isFavorite && <img src={starImg} alt="Star" 
            className="w-7 ml-1 mt-1"/>}
            <p className="text-lg  mx-7 my-3 truncate">Name: {name}</p>
            <p className="text-lg  mx-7 mb-3 truncate">Number: {number}</p>
            <div className="w-full flex flex-row justify-around">
            <Button styles="bg-red-600" onClickFunction={() => dispatch({ type:'DEL_CONTACT', payload: id })}>Delete</Button>
            <Button styles="bg-yellow-400" onClickFunction={() => dispatch({ type:'TOGGLE_FAVORITE', payload: id })}>Favorite</Button>
            </div>
        </menu>
    )
}