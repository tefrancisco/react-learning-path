import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting.js'
import Async from './components/Async.js'

function App() {
  return (
    <div className="App">
      <h1>Learn React</h1>
      <Greeting />
      <Async />
    </div>
  );
}

export default App;
