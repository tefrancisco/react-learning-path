import { useContext } from 'react'
import { TranslatorContext } from '../translator/translator-context.jsx'

export default function LanguageOption({ lang, children }) {

    const ctxValue = useContext(TranslatorContext)

    return (
        <li className="my-3">
                    <button
                        className="py-2 px-3 border-2 border-blue-100 hover:bg-stone-200 hover:text-blue-600 hover:border-blue-600"
                        onClick={() => ctxValue.handleLanguage(lang)}>
                        {children}
                    </button>
                </li>
    )
}