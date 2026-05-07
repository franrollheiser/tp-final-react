import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Listado from './pages/Listado';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listado" element={<Listado />} />
        </Routes>
      </div>
    </>
  );
}

export default App;