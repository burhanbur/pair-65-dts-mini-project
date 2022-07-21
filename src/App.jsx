import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import Register from "./pages/Register";
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
