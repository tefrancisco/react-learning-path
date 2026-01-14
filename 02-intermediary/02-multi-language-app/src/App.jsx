import SideMenu from './components/SideMenu.jsx'
import HeroSection from './components/HeroSection.jsx'
import TranslatorContextProvider from './translator/translator-context.jsx'

function App() {

  return (
    <div className="sm:h-screen sm:w-screen flex md:flex-row flex-col">
      <TranslatorContextProvider>
        <SideMenu />
        <HeroSection />
      </TranslatorContextProvider>
    </div>
  )
}

export default App
