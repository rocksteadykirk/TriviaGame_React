import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import GameObjective from './pages/GameObjective';
import GameBoard from './pages/GameBoard';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<GameObjective />} />
        <Route path='/gameboard' element={<GameBoard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
