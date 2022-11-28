import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
