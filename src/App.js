import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Post from './Post.js';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login.js';
import { auth } from './firebase';
// import Login from './Login.js';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user logged in
        dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL, 
        }))
      } else {
        // user logged uit
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />

      {!user ? (<Login />) : (
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
