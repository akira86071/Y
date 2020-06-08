import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';

function App() {

  let a = Promise.resolve(getdata());

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
          HIHI test
          {() => getdata()}
        </a>
      </header>
    </div>
  );
}

async function getdata(){

  var newheader = new Headers();
  let callback = [];

  const ans = await fetch("http://localhost:7001/hihi",{
    method: 'GET',
    headers: newheader,
    mode: 'cors',
    cache: 'default'
  }).then(function(response){
    return response.json();
  }).then(function(result){
    console.log(result);
    return result.content.toString();
  }).then(function(test){
    console.log(test);
  });
 
  return ans;
  
}



export default App;
