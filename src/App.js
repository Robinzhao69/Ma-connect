import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Post from './Post.js';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login.js';
// import Login from './Login.js';
function App() {
  const user = useSelector(selectUser)

  return (
    <div className="App">
      <Header />

      {!user ? (<Login />) :(
        <div className='app_body'>
          <Sidebar />
          <Post />
          {/* Widgets */}
        </div>
      )}

    </div>
  );
}

export default App;
