import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Components/Header';
import Navbar from './Navigation/Navbar';


function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
    </div>
  );
}

export default App;
