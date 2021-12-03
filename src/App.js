import logo from './logo.svg';
import './App.css';

// Component -> Properties

function Biodata(props){
  return <span> Usia {props.age} </span>
}

function Greeting(props){
  return <h1> Hallo {props.name} - < Biodata age={props.age}/> </h1>
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Hanif" age="17"/>
        <Greeting name="Nova" age="16"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
