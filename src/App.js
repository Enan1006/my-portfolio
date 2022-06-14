import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Contact from './pages/Contact/Contact';
import SinglePortfolio from './pages/SinglePortfolio/SinglePortfolio';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/portfolio/:portfolioId' element={<SinglePortfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
