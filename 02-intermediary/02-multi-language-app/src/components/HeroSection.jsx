import { useContext } from 'react'
import { TranslatorContext } from '../translator/translator-context'
import birthOfJesus from '/birth_of_Jesus.jpg'

export default function HeroSection() {

    const ctxValue = useContext(TranslatorContext)

    return (
        <section
            className="h-full md:w-2/3 w-full text-stone-200 flex flex-col items-center text-justify gap-5 font-mono bg-[url(/full_bg.jpg)] bg-cover bg-no-repeat">
            <h1
                className="text-3xl mt-5">
                {ctxValue.title}
            </h1>
            <img
                src={birthOfJesus}
                alt="Paint showing the birth of Jesus Christ"
                className="h-56 w-80 border-2 border-stone-200" />
            <p
                className="text-lg w-11/12 text-ellipsis">
                {ctxValue.text}
            </p>
        </section>
    )
}