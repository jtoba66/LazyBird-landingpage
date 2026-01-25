import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/legal" element={<LegalPage />} />
    </Routes>
  );
}

export default App;
