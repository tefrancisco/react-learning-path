import { useContext } from 'react'
import { TranslatorContext } from '../translator/translator-context.jsx'
import LanguageOption from './LanguageOption.jsx'

export default function SideMenu() {

    const ctxValue = useContext(TranslatorContext)

    return (
        <section
            className="flex flex-col items-center content-center font-mono h-full md:w-1/3  w-full bg-stone-900 text-stone-200 bg-[url(/bg11.jpg)] bg-cover bg-no-repeat border-r-2 border-stone-200">
            <h3
                className="my-10 text-3xl">
                {ctxValue.lsText}
            </h3>
            <ul
                className="list-image-none text-lg">
                <LanguageOption lang='en'>
                    {ctxValue.enBtn}
                </LanguageOption>
                <LanguageOption lang='pt'>
                    {ctxValue.ptBtn}
                </LanguageOption>
                <LanguageOption lang='es'>
                    {ctxValue.esBtn}
                </LanguageOption>
            </ul>
        </section>
    )
}