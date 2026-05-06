import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listado from './pages/Listado';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;