import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Body */}
      <div className='app_body'>
        <Sidebar />
      {/* Posts */}
      {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
