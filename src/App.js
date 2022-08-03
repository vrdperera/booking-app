import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Hotel from './pages/hotel';
import Hotels from './pages/hotels';

export default function App() {
  return (
    <div className="App container m-auto bg-slate-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </div>
  );
}
