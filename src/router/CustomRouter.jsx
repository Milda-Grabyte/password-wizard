import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function CustomRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=':step' element={'hola'} />
        <Route path='*' element={<Link to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRouter;
