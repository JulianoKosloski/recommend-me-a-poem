import logo from './hand.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Recommend me a poem!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Three for the elven kings... One ring to rule them all, and in darkness bind them. 
        </a>
      </header>
    </div>
  );
}

export default App;
