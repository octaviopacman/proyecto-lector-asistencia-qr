import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login/page';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Login />} path='/'></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
