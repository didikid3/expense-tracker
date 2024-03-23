import React from 'react';
import { Routes, Route} from 'react-router-dom';

import "./styles/general.css";

import {Home} from './pages/Home.jsx'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}


export default App;