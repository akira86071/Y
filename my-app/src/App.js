import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
          HIHI test{getdata()}
        </a>
      </header>
    </div>
  );
}

function getdata(){

  var newheader = new Headers();

  fetch("http://localhost:7001/hihi",{
    method: 'GET',
    headers: newheader,
    mode: 'cors',
    cache: 'default'
  }).then(function(response){
    console.log(response.body);
  });

}

export default App;
