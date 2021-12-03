import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Toggle extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggleStatus: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}> 
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p> Kondisi {this.state.toggleStatus ? 'Menyala' : 'Mati'} </p>
      </button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle />
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
