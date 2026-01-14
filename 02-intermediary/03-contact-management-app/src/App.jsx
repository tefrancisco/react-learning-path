import ContactContextProvider from "./contact/contact-context"
import ContactForm from "./components/ContactForm"
import ContactList from "./components/ContactList"

function App() {

  return (
    <main
      className="min-h-screen w-screen flex flex-col md:flex-row">
      <ContactContextProvider>
        <ContactForm />
        <ContactList />
      </ContactContextProvider>
    </main>
  )
}

export default App
