import React from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './HomePage/index'
import { FooterContainer } from './footer-folder/footer'

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
    <FooterContainer />
    </>
  );
}

export default App;
