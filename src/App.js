import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Trip from './components/Trip';
import { TripProvider } from './contexts/TripProvider';

function App() {
  return (
    <TripProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/trip' element={<Trip />} />
        </Routes>
      </BrowserRouter>
    </TripProvider>
  );
}

export default App;
