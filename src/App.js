import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './HomePage/index'
import NavBar from './HomePage/Navbar'

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
    </>
  );
}

export default App;
