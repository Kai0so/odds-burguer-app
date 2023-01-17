import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Login } from './pages/index'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
