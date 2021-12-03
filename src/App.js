import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function Clicker(){
  function handleClick(e){
    alert('Berhasil Mengklik !')
    e.preventDefault()
  }

  return (
    <a href="#" onClick={handleClick}> Klik Bro </a>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clicker />
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
