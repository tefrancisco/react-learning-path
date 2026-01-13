// Thats a React hook, they're regular functions that should only be called inside components
// or other hooks
// We import Fragment to use it as a root element for sibling elements withou needing to create unecessary HTML elements in our code.
// We actually does not need the Fragment, just <> </>
import Header from './components/Header/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from './components/Examples.jsx'

function App() {

  return (
    <>
      <Header />
      <main>
      <CoreConcepts/>
      <Examples />
      </main>
    </>
  );
  
}

export default App;


