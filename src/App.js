import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.name}</p>
      </header>
    </div>
  );
}

export default App;
