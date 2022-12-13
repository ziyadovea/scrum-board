import React from 'react'
import Login from "./components/Login";
import Register from "./components/Register";
import NoPage from "./components/NoPage";
import Board from "./components/Board";
import {Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/sign-up' element={<Register />} />
          <Route path='/board' element={<Board />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </div>
  )
}

export default App;



