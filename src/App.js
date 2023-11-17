import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import GameObjective from './pages/GameObjective';
import GameBoard from './pages/GameBoard';
import './App.css';

function App() {
  const [isLoading, setLoading] = useState(true); // pending
  const [data, setData] = useState(null); // fulfilled
  const [errMsg, setErrMsg] = useState(""); // rejected

  useEffect(() => {
    const request = `https://the-trivia-api.com/v2/questions?categories=general_knowledge&difficulties=easy&limit=10`;
    const fetchData = async () => {
      const response = await fetch(request);

      if (!response.ok) {
        return Promise.reject(`Unable to fetch, status: ${response.status}`);
      }

      const results = await response.json();

      setTimeout(() => {
        setLoading(false);
        setData(results.filter((result) => !result.question.text.toLowerCase().includes("which")));
        setErrMsg("");
      }, 1000);
    };

    fetchData().catch((error) => {
      setLoading(false);
      setErrMsg(error.toString());
    });
  }, []);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (errMsg) {
    return (
      <div>
        <h1>whoopsie!: that was a bad request</h1>
        <p>{errMsg}</p>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<GameObjective />} />
        <Route path='/gameboard' element={<GameBoard trivia={data} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
