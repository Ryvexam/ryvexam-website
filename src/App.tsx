import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Scripts from './pages/Scripts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/scripts" element={<Scripts />} />
    </Routes>
  );
};

export default App;