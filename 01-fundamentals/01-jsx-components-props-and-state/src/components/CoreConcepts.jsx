import CoreConcept from './CoreConcept.jsx'
import { CORE_CONCEPTS } from '../data.js'

export default function CoreConcepts() {
    return (
         <section id="core-concepts">
                  <ul>
                    {/* Aqui utilizamos o map para criar um array baseado no array CORE_CONCEPTS.
                    Nesse novo array, para cada 'conceptItem', teremos um component CoreConcept com seus dados.
                    Basicamente, transformados nosso dados em código JSX.
                    */}
                    {CORE_CONCEPTS.map((conceptItem) =>
                      // Precisamos do 'key' pois o React requere um identificador único para cada item.
                      <CoreConcept key={conceptItem.title} {...conceptItem} />
                    )}
                  </ul>
                </section>
    )
}