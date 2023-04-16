import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Board from './components/board'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element= { <Layout child={ <Board /> } /> } />
        </Routes>
    </BrowserRouter>
  )
}
export default App;