import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// State

class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: props.start
    }
  }
  
  // Lifecycle
  componentDidMount(){
    this.addInterval = setInterval( () => this.increase(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.addInterval)
  }

  increase(){
    // Update State Setiap Detik 
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }

  render(){
    return (
      <div> {this.state.time} Detik </div> 
    )
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer start="0"/>
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
