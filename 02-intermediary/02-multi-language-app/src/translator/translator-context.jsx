import { createContext, useState } from 'react'
import { LANG_DATA } from '../utils/data.js'

export const TranslatorContext = createContext({
    selectedLanguage: '',
    handleLanguage: () => {},
    title: '',
    alt: '',
    text: '',
    lsText: '',
    enBtn: '',
    ptBtn: '',
    esBtn: ''
})

export default function TranslatorContextProvider({ children }) {

    const [language, setLanguage] = useState('en')

    let ref = LANG_DATA.en

    switch (language) {
            case 'en':
                ref = LANG_DATA.en
                break;
            case 'pt':
                ref = LANG_DATA.pt
                break;
            case 'es':
                ref = LANG_DATA.es
                break; 
        }

    function handleLanguageSelection(lang) {
        setLanguage((curLang) => lang)
    }

    const ctxValue = {
        selectedLanguage: language,
        handleLanguage: handleLanguageSelection,
        title: ref.title,
        alt: ref.alt,
        text: ref.text,
        lsText: ref.lsText,
        enBtn: ref.enBtn,
        ptBtn: ref.ptBtn,
        esBtn: ref.esBtn
    }

    return (
        <TranslatorContext.Provider value={ctxValue}>
            {children}
        </TranslatorContext.Provider>
    )
}
