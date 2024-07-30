import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HouseOfWisdom from './pages/Houses/HouseOfWisdom';

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/houseofwisdom" element={<HouseOfWisdom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
