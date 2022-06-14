import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import './App.css';
import WildFire from './components/WildFire';
import Perseverance from './components/Perseverance';
import Earth from './components/Earth';

function App() {
  return (
    <BrowserRouter> 
      <div>
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/NasaPhoto" element={<NasaPhoto />} />
        <Route path="/WildFire" element={<WildFire />} />
        <Route path="/Perseverance" element={<Perseverance />} />
        <Route path="/Earth" element={<Earth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
